import "./App.css";
import { useEffect, useLayoutEffect, useReducer, useRef, useState } from "react";

import {motion} from 'framer-motion'



export const Card = () => {
  return (
    <div className=' bg-white px-3 py-4 rounded-lg shadow-lg mt-8 flex-shrink-0 w-60 overflow flex-grow '>
      <h1 className='text-xl uppercase '>Cart title</h1>
      <p>
        {" "}
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos doloremque
        blanditiis debitis explicabo assumenda, voluptatibus quos quaerat
        accusamus dicta fugiat tempore maxime error. Eligendi omnis laboriosam
        ipsa non ab dignissimos?
      </p>
      <button className='bg-red-500'>Click me</button>
    </div>
  );
}







function App() {




  return (

    <div className="min-h-screen flex justify-between w-11/12 mx-auto">
      <div>Logo</div>
      <div className="flex gap-4">links
<p>Link 1</p>
<p>Link 2</p>
<p>Link 3</p>

      </div>
      <div><button>butn 1</button>
      <button>btn 2</button>
      </div>
</div>

  );
}

export default App;
