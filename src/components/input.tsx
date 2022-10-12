import { useState } from 'react';
export default function Input ( ) {
   
   const [isKeyBox, setKeyBox] = useState();
   const [isValueBox, setValueBox] = useState();
 
   const propertyBox = [
       {
         keyBox: isKeyBox,
         valueBox: isValueBox
       }
   ]
 
   const [isProperty,setProperty]:any = useState(propertyBox)
   const [isSample,setSample] = useState(0)

   const keyBoxInput = (e, index:number) => {
      setKeyBox(e.target.value);
      setSample(isProperty.length)
    }
  
    const valueBoxInput = (e, index:number) => {
      setValueBox(e.target.value);
      setSample(isProperty.length)
    }
  
   return (
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
  )
}