import { useState } from "react";

type Person = {
  id: number;
  name: string;
  age: string;
  address: string;
};

const DynamicTableComponent = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const [data, setData] = useState<Person[]>([]);

  const generateRandomNumber = () => {
    return Math.floor(Math.random() * 99999 + 1);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setData([...data, { id: generateRandomNumber(), name, age, address }]);
    setName("");
    setAge("");
    setAddress("");
  };

  const handleDelete = (id: number) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  const handleAddRow = () => {
    setData([
      ...data,
      { id: generateRandomNumber(), name: "", age: "", address: "" },
    ]);
  };

  const handleRow = (index: number, key: keyof Person, value: string) => {
    const updatedData = [...data];
    updatedData[index][key] = value;
    setData(updatedData);
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-md mb-8"
      >
        <h2 className="text-2xl font-semibold mb-4">Add New Client</h2>
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            required
            type="text"
            id="name"
            className="mt-1 p-2 w-full border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter client's name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Age
          </label>
          <input
            required
            type="number"
            id="age"
            className="mt-1 p-2 w-full border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter client's age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            required
            type="text"
            id="address"
            className="mt-1 p-2 w-full border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter client's address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
        >
          Add New Client
        </button>
      </form>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-indigo-600 text-white">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Age</th>
              <th className="px-4 py-2 text-left">Address</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className="border-t">
                <td className="px-4 py-2">{item.id}</td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    value={item.name}
                    onChange={(e) => handleRow(index, "name", e.target.value)}
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    value={item.age}
                    onChange={(e) => handleRow(index, "age", e.target.value)}
                  />
                </td>
                <td className="px-4 py-2">
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                    value={item.address}
                    onChange={(e) =>
                      handleRow(index, "address", e.target.value)
                    }
                  />
                </td>
                <td className="px-4 py-2 flex justify-start gap-2">
                  <button
                    className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                    onClick={handleAddRow}
                  >
                    Add Row
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DynamicTableComponent;
