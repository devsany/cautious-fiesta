import React, { useState } from "react";

const DynamicForm = () => {
  const [label, setLable] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [previewForm, setPreviewForm] = useState(false);

  const [totalValue, setTotalValue] = useState([]);

  const [options, setOptions] = useState([]);
  const [optionvalue, setOptionValue] = useState([]);

  const [inputTextShow, setInputTextShow] = useState(false);
  const [selectTextShow, setSelectTextShow] = useState(false);

  const handleShowSelectBox = () => {
    setSelectTextShow(!selectTextShow);
    setInputTextShow(false);
  };
  const handleShowInputTextLabel = () => {
    setInputTextShow(!inputTextShow);
    setSelectTextShow(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTotalValue([
      ...totalValue,
      {
        label: label,
        type: type,
        name: name,
        placeholder: placeholder,
        option: optionvalue.length > 0 ? optionvalue : null,
      },
    ]);
  };
  const handleTakeSelectOption = () => {
    setOptions("");
    setOptionValue([...optionvalue, options]);
  };
  const hanldePreviewForm = () => {
    setPreviewForm(!previewForm);
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <button
            type="button"
            onClick={handleShowInputTextLabel}
            className="w-full py-2 px-4 text-white bg-blue-500 rounded-lg hover:bg-blue-700 mb-2"
          >
            Insert Input (type text)
          </button>
          <button
            type="button"
            onClick={handleShowSelectBox}
            className="w-full py-2 px-4 text-white bg-green-500 rounded-lg hover:bg-green-700"
          >
            Insert Select Box
          </button>
        </div>

        {/* Select Box Form Fields */}
        {selectTextShow && (
          <div className="space-y-4">
            <div>
              <label
                htmlFor="label"
                className="block text-sm font-medium text-gray-700"
              >
                Label
              </label>
              <input
                type="text"
                id="label"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Label name"
                value={label}
                onChange={(e) => setLable(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700"
              >
                Select Type
              </label>
              <select
                name="type"
                id="type"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Select Type</option>
                <option value="text">Text</option>
                <option value="email">Email</option>
                <option value="password">Password</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Select Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="option"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Option
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter option name"
                value={options}
                onChange={(e) => setOptions(e.target.value)}
              />
            </div>
            <div
              onClick={handleTakeSelectOption}
              className="w-full py-2 px-4 text-white bg-gray-300 rounded-lg hover:bg-gray-400 cursor-pointer mt-2"
            >
              + (Add more options)
            </div>

            <ul className="mt-2">
              {optionvalue.map((option, index) => (
                <li key={index} className="text-sm text-gray-700">
                  {option}
                </li>
              ))}
            </ul>

            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        )}

        {/* Text Input Form Fields */}
        {inputTextShow && (
          <div className="space-y-4">
            <div>
              <label
                htmlFor="label"
                className="block text-sm font-medium text-gray-700"
              >
                Label
              </label>
              <input
                type="text"
                id="label"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Label name"
                value={label}
                onChange={(e) => setLable(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="type"
                className="block text-sm font-medium text-gray-700"
              >
                Select Type
              </label>
              <select
                name="type"
                id="type"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">Select Type</option>
                <option value="text">Text</option>
                <option value="email">Email</option>
                <option value="password">Password</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Select Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <label
                htmlFor="placeholder"
                className="block text-sm font-medium text-gray-700"
              >
                Enter Placeholder
              </label>
              <input
                type="text"
                id="placeholder"
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter Placeholder"
                value={placeholder}
                onChange={(e) => setPlaceholder(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 mt-4 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        )}
      </form>

      <div className="mt-6">
        <button
          disabled={totalValue.length === 0}
          onClick={hanldePreviewForm}
          className="w-full py-2 px-4 text-white bg-purple-500 rounded-lg hover:bg-purple-700"
        >
          Preview Form
        </button>
        {previewForm && (
          <div className="mt-4 space-y-4">
            {totalValue.map((item, index) => (
              <div key={index} className="space-y-2">
                <label
                  htmlFor={item.name.replace(/\s+/g, "")}
                  className="block text-sm font-medium text-gray-700"
                >
                  {item.label}
                </label>
                <input
                  type={item.type}
                  id={item.name.replace(/\s+/g, "")}
                  className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder={item.placeholder}
                />
                {item.option && (
                  <select
                    name={item.name.replace(/\s+/g, "")}
                    id={item.name.replace(/\s+/g, "")}
                    className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select value</option>
                    {item.option.map((option, index) => (
                      <option key={index} value={option.replace(/\s+/g, "")}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DynamicForm;
