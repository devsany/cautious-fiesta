import React, { use, useState } from "react";

const Todo = () => {
  const [item, setItem] = useState("");
  const [data, setData] = useState([]);
  const [complete, setComplete] = useState("");
  const [count, setCount] = useState(1);
  const handleAdd = () => {
    if (item) {
      setData([
        ...data,
        {
          values: item,
          complete: false,
          id: count,
        },
      ]);
      setItem("");
      setCount(count + 1);
    } else {
      alert("plz fill the input box");
    }
  };
  const handleDelete = (i) => {
    console.log(i);
    const mainData = data.filter((_, id) => {
      return id + 1 !== i;
    });
    setData(mainData);
  };
  const handleComplete = (i) => {
    console.log(i);
    const completedData = data.map((item, index) => {
      //   const aboutToCompleteValue = item.id === i &&  ;
      if (item.id === i) {
        item.complete = true;
      }
      return item;
    });

    setData(completedData);
  };
  console.log(complete);
  return (
    <div>
      <h2>Todo</h2>
      <div>
        <input
          type="text"
          placeholder="Enter item name"
          value={item}
          required
          onChange={(e) => setItem(e.target.value)}
        />{" "}
        <button onClick={handleAdd}>Add Item</button>
      </div>
      <div>
        {data &&
          data.map((item, index) => {
            return (
              <>
                <div style={{ display: "flex" }}>
                  <div>
                    <input
                      disabled={item.complete === true}
                      type="checkbox"
                      onChange={() => {
                        handleComplete(index + 1);
                      }}
                    />
                  </div>
                  <div>
                    <div
                      style={
                        item.complete === true
                          ? { backgroundColor: "lightgreen" }
                          : { backgroundColor: "White" }
                      }
                    >
                      <li>{item.values}</li>{" "}
                    </div>
                  </div>
                  <div>
                    <button onClick={() => handleDelete(index + 1)}>
                      delete
                    </button>
                  </div>
                </div>
              </>
            );
          })}
      </div>
    </div>
  );
};

export default Todo;
