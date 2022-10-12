import type { NextPage } from 'next';
import { useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import inputBox from './inputBox';
import { NodeNextResponse } from 'next/dist/server/base-http/node';

const Home: NextPage = () => {

  const [isOutput,setOutput] = useState("const");
  const [isName,setName] = useState("");
  
  const objBox = []
  const propertyBox = [
      {
        keyBox: "aaaa",
        valueBox: ""
      },
      {
        keyBox: "aaaa",
        valueBox: ""
      }
  ]
 // const [isObj,setObj] = useState(objBox)
  const [isProperty,setProperty] = useState(propertyBox)
  const  [isSample02,setSample02] = useState(0)

  const results = isOutput + isName + " = [ \n{" + String(isProperty) + "\n}]" 

  const teisuu = () => {
    let result = ""
    //constが文章の中にあるか確認する -1 ＝存在しない
    if(isOutput.indexOf("const") === -1) {
       //存在しなかった場合=let or null なので、constにする
      result = isOutput.replace("let ", "const ")
      //置換した文言をOutputにぶっこむ
      setOutput(result)
    } 
  }

  const hensuu = () => {
    let result = ""
    if(isOutput.indexOf("let") === -1) {
      result = isOutput.replace("const ", "let ")
      setOutput(result)
    }
  }

  const nameInput = (event) => {
    let nameValue = event.target.value;
    setName(nameValue)
  }

  const addProperty = () =>{
    isProperty[isProperty.length] = {keyBox:"", valueBox:""}
    setProperty(isProperty)
    setSample02(isProperty.length)
  }

  const addObj = () => {
    isObjBox[isObjBox.length] = propertyBox
    setObj(isObj)
    setSample02(isProperty.length)
  }

  const keyBoxInput = (value:string,index:number) => {
    console.log(value);
    console.log(index)
    isProperty[index].keyBox = value
    console.log(isProperty)
    setProperty(isProperty)
    setSample02(isProperty.length+1) 
  }


  return (
    <>
      <div>
        <div className="text-4xl my-4 text-center">
          配列くん
        </div>
        <div className="flex">
          <div className="w-1/2 text-center">
            <div className="text-2xl my-2">変換前</div>
            {/*変換前内　上部の入力フォーム（定数の名前など）*/}
            <div className='bg-gray-200 m-4 p-4'>
              <form action="" method="post" className="bg-gray-200 flex">
                <div className="w-1/4">
                    <div onClick={()=>{teisuu()}}>定数</div>
                    <div onClick={() => {hensuu()}}>変数</div>
                </div>
                <div className="w-1/4">
                  <div>
                    <div className="text-xl">'</div>
                  </div>
                  <div>
                    <div className="text-xl">"</div>
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="">名前</div>
                  <input type="text" className="mt-0.5" value={isName} onChange={(event) => {nameInput(event)}}/>
                </div>
              </form>
            </div>

            {/*変換前内　下部の入力フォーム*/}
            <div className="m-4 p-4 bg-gray-200">
              <div className="flex mb-4">
                <div className="w-1/2">プロパティ名</div>
                <div className="w-1/2">値</div>
              </div>
              <div>
              {isProperty.map((item:any, index:number)=>{
                return(
                  <div className="flex justify-between">
                    {item.keyBox}
                    {/* <input type="text" value={item.keyBox} className="mb-5" onChange={(e) => {keyBoxInput(e.target.value,index)}}/> */}
                    <input type="text" value={item.valueBox} className="mb-5" />
                  </div>
                )
                })}
                <button className="text-4xl" onClick={()=>{addProperty()}}>+</button>
              </div>
            </div>
          <div>
              <button type="button" onClick={() => {addObj()}}>配列を増やす</button>
          </div>
        </div>

          {/*変換後　出力フォーム*/}
          <div className="w-1/2 text-center">
            <div className="text-2xl my-2">変換後</div>
            <div className="bg-gray-200 p-4 m-4">
              <textarea name="" id="" className="h-24" value={results}></textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home