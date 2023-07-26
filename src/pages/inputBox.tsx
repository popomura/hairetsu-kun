import { useState } from "react";

const InputBox = () => {
  const propertyBox = [
    {
      key: "a",
      value: "あ",
    },
  ];

  const arrayBox = [
    propertyBox
  ];

  const [property, setProperty] = useState(propertyBox);
  const [array, setArray] = useState(arrayBox);

  const addPropertyBox = () => {
    setProperty([...property, { key: "i", value: "い" }])
    console.log(...property)
  }

  const addArrayBox = () => {
    setArray([...array, [{key: "u", value: "う"}]]);
  };

  return (
    <>
        <div>const test = {"["}</div>
        <div className="ml-4">
          {array.map((nestedArray) =>
            nestedArray.map((item, index) => (
              <div key={index}>
                <div className="ml-4">
                  <div className="ml-4">
                    {item.key}:{item.value}
                  </div>
                  <p>{"},"}</p>
                </div>
              </div>
            ))
          )}
        </div>
        <div>{"]"}</div>
        <div className="my-4">
          <button
            onClick={addPropertyBox}
            className="bg-gray-600 text-white p-3 mr-4"
          >
            オブジェクトを追加する
          </button>
          <button onClick={addArrayBox} className="bg-gray-600 text-white p-3">
            配列を追加する
          </button>
        </div>
    </>
  );
};

export default InputBox;
