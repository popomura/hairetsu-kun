// key&valueのセットを増やすところまで

import type { NextPage } from 'next';
import { ChangeEvent, useState } from 'react';
import Head from 'next/head'
import Image from 'next/image'
import inputBox from './inputBox';
import { NodeNextResponse } from 'next/dist/server/base-http/node';

const Home: NextPage = () => {

  const [isBox,setBox] = useState("const");
  const [isName,setName] = useState("title");
  const [isKeyBox, setKeyBox] = useState();
  const [isValueBox, setValueBox] = useState();

  const propertyBox = [
      {
        keyBox: isKeyBox,
        valueBox: isValueBox
      }
  ]

  const [isProperty,setProperty]:any = useState(propertyBox)
  const [isSample02,setSample02] = useState(0)

  const boxInput = (e) => {
    setBox(e.target.value)
  }

  const nameInput = (e) => {
    setName(e.target.value)
  }

  const addProperty = () =>{
    isProperty[isProperty.length] = {keyBox:undefined, valueBox:undefined}
    setProperty(isProperty)
    setSample02(isProperty.length)
  }

  // const addObj = () => {
  //   isObjBox[isObjBox.length] = propertyBox
  //   setObj(isObj)
  //   setSample02(isProperty.length)
  // }

  const keyBoxInput = (e, index:number) => {
    setKeyBox(e.target.value);
    setSample02(isProperty.length)
  }

  const valueBoxInput = (e, index:number) => {
    setValueBox(e.target.value);
    setSample02(isProperty.length)
  }


  return (
    <>
      <div>
        <div className="text-4xl my-4 text-center">
          配列くん
        </div>
        <div>
          <div className="text-center">
            <div className="bg-gray-800 text-white p-5 text-left text-2xl">
              <input type="text" value={isBox}
                className="bg-gray-600 color-white inline-block w-16 mx-1 hover:bg-gray-500 text-center"
                onChange={(e) => boxInput(e)}/>
              <span className="text-blue-300">
                <input type="text" value={isName}
                className="bg-gray-600 color-white inline-block w-24 mx-1 hover:bg-gray-500 text-center"
                onChange={(e) => {nameInput(e)}}/>
              </span>
                =<span className="text-pink-500 pl-2">[</span>
                <div className="text-blue-400 pl-6">{"{"}</div>
                
                {isProperty.map((item:any, index:number)=>{
                return(
                  <div className="flex justify-start ml-12">
                    <input type="text" value={item.keyBox}
                      className="bg-gray-600 color-white inline-block w-24 mx-3 hover:bg-gray-500 text-center"
                      onChange={(e) => keyBoxInput(e,index)}/>
                     : 
                     <input type="text" value={item.valueBox}
                      className="bg-gray-600 color-white inline-block w-36 mx-3 hover:bg-gray-500 text-center"
                      onChange={(e) => valueBoxInput(e,index)}/>
                      <div className="inline-block">,</div>
                  </div>
                )
                })}
                <button onClick={()=>{addProperty()}} className="ml-10 opacity-40 hover:opacity-100 block">+</button>
                <div className="text-blue-400 pl-6">{"}"}</div>
                <span className="text-pink-500">]</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home