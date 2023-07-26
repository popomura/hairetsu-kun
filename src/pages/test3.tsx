import { NextPage } from "next";
import { useState } from "react";

const Test: NextPage = () => {

  const [box, setBox] = useState<string>("const")
  const [name, setName] = useState<string>("name");

  const boxInput = (e:any) => {
   setBox(e.target.value) 
  }

  const nameInput = (e:any) => {
    setName(e.target.value);
  };


  const [array, setArray] = useState<
    Array<Array<{ key: string; value: string }>>
  >([
    [
      {
        key: "",
        value: "",
      },
    ],
  ]);

  const addProperty = (index: number) => {
    setArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[index] = [...newArray[index], { key: "", value: "" }];
      return newArray;
    });
  };

  const addObj = () => {
    setArray((prevArray) => [...prevArray, [{ key: "", value: "" }]]);
  };

  const keyBoxInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    parentIndex: number,
    childIndex: number
  ) => {
    const newKey = e.target.value;
    setArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[parentIndex][childIndex].key = newKey;
      return newArray;
    });
  };

  const valueBoxInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    parentIndex: number,
    childIndex: number
  ) => {
    const newValue = e.target.value;
    setArray((prevArray) => {
      const newArray = [...prevArray];
      newArray[parentIndex][childIndex].value = newValue;
      return newArray;
    });
  };

 const formatArray = (
   arr: Array<Array<{ key: string; value: string }>>,
   box: string,
   name: string
 ) => {
   return `${box} ${name} = ${JSON.stringify(arr.map((nestedArray) =>
    nestedArray.reduce((acc, obj) => ({ ...acc, [obj.key]: obj.value }), {})
  ))}`
 };
  
  const formattedArray = formatArray(array, box, name);

  return (
    <>
      <h1 className="text-center text-3xl font-semibold my-5">配列くん</h1>
      <div className="bg-gray-800 text-white p-4 text-left text-2xl leading-8">
        <div>
          <input
            type="text"
            value={box}
            className="bg-gray-500 color-white inline-block w-20 mx-1 hover:bg-gray-400 text-center"
            onChange={boxInput}
          />
          <input
            type="text"
            value={name}
            className="bg-gray-500 color-white inline-block w-40 mx-1 hover:bg-gray-400 text-center"
            onChange={nameInput}
          />
          =<span className="text-blue-500 ml-2">{"["}</span>
        </div>

        <div className="ml-4">
          {array.map((nestedArray, parentIndex) => (
            <div key={parentIndex}>
              <div className="text-pink-500">{"{"}</div>
              <div className="pl-4">
                {nestedArray.map((item, childIndex) => (
                  <div key={childIndex}>
                    <div className="my-1">
                      <input
                        type="text"
                        value={item.key}
                        onChange={(e) =>
                          keyBoxInput(e, parentIndex, childIndex)
                        }
                        className="bg-gray-500 color-white inline-block w-40 mx-1 hover:bg-gray-400 text-center"
                      />
                      :
                      <input
                        type="text"
                        value={item.value}
                        onChange={(e) =>
                          valueBoxInput(e, parentIndex, childIndex)
                        }
                        className="bg-gray-500 color-white inline-block w-40 mx-1 hover:bg-gray-400 text-center"
                      />
                    </div>
                  </div>
                ))}
                <div>
                  <button
                    onClick={() => addProperty(parentIndex)}
                    className="mt-1 p-1 bg-gray-600 text-white"
                  >
                    +
                  </button>
                </div>
              </div>

              <div>
                <span className="text-pink-500 mr-2">{"}"}</span>,
              </div>
            </div>
          ))}
        </div>
        <div>
          <span className="text-blue-500">{"]"}</span>
        </div>
      </div>

      <div className="mt-3">
        <button
          onClick={() => addObj()}
          className="px-2 py-1 text-pink-500 border border-pink-500 rounded hover:bg-blue-100"
        >
          オブジェクトを追加する
        </button>
      </div>

      <div className="mt-5">
        <div className="font-bold text-24">
          最終アウトプット
        </div>
        <div>{formattedArray}</div>
      </div>
    </>
  );
};

export default Test;
