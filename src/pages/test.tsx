// プロパティ、オブジェクトを追加するだけのコード

import { NextPage } from "next";
import { useState } from "react";

const Test: NextPage = () => {
  const [array, setArray] = useState([
    [
      {
        key: "a",
        value: "あ",
      },
    ],
    [
      {
        key: "u",
        value: "う",
      },
    ],
  ]);

  const addProperty = (index: number) => {
    setArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = [...newArray[index], { key: "i", value: "い" }];
      return newArray;
    });
  };

  const addObj = () => {
    setArray((prevArray) => [...prevArray, [{ key: "e", value: "え" }]]);
  };

  const [outputFlag, setOutputFlag] = useState(false);

  const outPutJSON = () => {
    setOutputFlag(true);
  }

  return (
    <>
      <div>
        {array.map((nestedArray, index) => (
          <div key={index}>
            <div>{"{"}</div>
            {nestedArray.map((item, subIndex) => (
              <div key={subIndex}>
                <div>
                  {item.key}:{item.value}
                </div>
              </div>
            ))}
            <div>{"},"}</div>

            <div>
              <button
                onClick={() => addProperty(index)}
                className="mt-5 p-2 bg-gray-600 text-white"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      <div>
        <button
          onClick={() => addObj()}
          className="mt-5 p-2 bg-gray-600 text-white"
        >
          オブジェクトを追加する
        </button>
      </div>

      <div>
        <button onClick={outPutJSON} className="mt-5 p-2 bg-gray-600 text-white">
          配列を出力する
        </button>
      </div>

      <div>
        {JSON.stringify(array)}
      </div>
    </>
  );
};

export default Test;
