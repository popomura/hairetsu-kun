import { NextPage } from "next";
import { useState } from "react";

const Test: NextPage = () => {
  const [formData, setFormData] = useState<{
    box: string;
    name: string;
    array: Array<Array<{ key: string; value: string }>>;
  }>({
    box: "const",
    name: "name",
    array: [
      [
        {
          key: "",
          value: "",
        },
      ],
    ],
  });

  const boxInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, box: e.target.value });
  };

  const nameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, name: e.target.value });
  };

  const addProperty = (index: number) => {
    setFormData((prevData) => {
      const newArray = [...prevData.array];
      newArray[index] = [...newArray[index], { key: "", value: "" }];
      return { ...prevData, array: newArray };
    });
  };

  const addObj = () => {
    setFormData((prevData) => ({
      ...prevData,
      array: [...prevData.array, [{ key: "", value: "" }]],
    }));
  };

  const keyBoxInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    parentIndex: number,
    childIndex: number
  ) => {
    const newKey = e.target.value;
    setFormData((prevData) => {
      const newArray = [...prevData.array];
      newArray[parentIndex][childIndex].key = newKey;
      return { ...prevData, array: newArray };
    });
  };

  const valueBoxInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    parentIndex: number,
    childIndex: number
  ) => {
    const newValue = e.target.value;
    setFormData((prevData) => {
      const newArray = [...prevData.array];
      newArray[parentIndex][childIndex].value = newValue;
      return { ...prevData, array: newArray };
    });
  };

  const formatArray = (data: typeof formData) => {
    return `${data.box} ${data.name} = ${JSON.stringify(
      data.array.map((nestedArray) =>
        nestedArray.reduce((acc, obj) => ({ ...acc, [obj.key]: obj.value }), {})
      )
    )}`;
  };

  const formattedArray = formatArray(formData);

  const renderObject = (obj: { [key: string]: string }) => {
    return (
      <>
        {"{"}
        {Object.entries(obj).map(([key, value], index) => (
          <span key={index}>
            {index > 0 && ", "}
            {key}: {value}
          </span>
        ))}
        {"}"}
      </>
    );
  };

  return (
    <>
      <h1 className="text-center text-3xl font-semibold my-5">配列くん</h1>
      <div className="bg-gray-800 text-white p-4 text-left text-2xl leading-8">
        <div>
          <input
            type="text"
            value={formData.box}
            className="bg-gray-500 color-white inline-block w-20 mx-1 hover:bg-gray-400 text-center"
            onChange={boxInput}
          />
          <input
            type="text"
            value={formData.name}
            className="bg-gray-500 color-white inline-block w-40 mx-1 hover:bg-gray-400 text-center"
            onChange={nameInput}
          />
          =<span className="text-blue-500 ml-2">{"["}</span>
        </div>

        <div className="ml-4">
          {formData.array.map((nestedArray, parentIndex) => (
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
        <div className="font-bold text-24">最終アウトプット</div>
        <div>{formattedArray}</div>
      </div>
    </>
  );
};

export default Test;

