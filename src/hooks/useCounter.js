import { useState } from "react";

const useCounter = (initialValue = 0, step=1)=>{
    const [cant, setCount] = useState(initialValue);
   
    const increment = () => {setCount((prevCount)=> prevCount + step);};
    
    const decrement = () => {
        if (cant > 0) {      
            setCount((prevCount)=> prevCount - step);
        }
    };

    return {cant, increment, decrement};
}

export default useCounter;