import { click } from "@testing-library/user-event/dist/cjs/convenience/click.js";
import React, { useEffect, useState } from "react";

const FetchAPIData = () => {
  const [data, setData] = useState([]);
  const [pagination, setPagination] = useState(0);

  const fetchData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/posts");
    const response = await data.json();
    setData(response);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const handleInc = () => {
    console.log("clicked");
    setPagination(pagination + 5);
  };
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6">
        Fetch API Data
      </h2>

      <div className="space-y-6">
        {data &&
          data.slice(pagination, pagination + 5).map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-lg font-medium text-gray-700">
                User ID: <span className="font-normal">{item.id}</span>
              </div>
              <div className="text-xl font-semibold text-blue-500 mt-2">
                Title: <span className="font-normal">{item.title}</span>
              </div>
              <div className="text-gray-600 mt-2">{item.body}</div>
            </div>
          ))}
        <div>
          {/* pagination */}

          <>
            <button
              disabled={pagination === 0}
              onClick={() => {
                setPagination(pagination - 5);
              }}
            >
              Previous
            </button>
          </>

          <button disabled={data.lenght - 5} onClick={handleInc}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default FetchAPIData;
