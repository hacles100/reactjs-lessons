import { useEffect, useState } from "react";


function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    // useEffect(() => {
    //     console.log('updated');

    //     return () => {
    //         console.log('removed');
    //     };
    // });

    return <>
        <button onClick={increment}>
            Incrementar
        </button>
        <span>{count}</span>
    </>

}

export default Counter;