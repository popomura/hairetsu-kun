import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

const inputBox = () => {
  
  const [isInput,setInput] = useState("");

  return (
    <>
      <div>
        <input type="text" />
      </div>
    </>
  )
}

export default inputBox