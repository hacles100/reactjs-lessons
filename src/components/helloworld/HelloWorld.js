import { useState } from 'react';
import { Link } from 'react-router-dom';
import './HelloWorld.css';

function HelloWorld(props) {

    const [oMeuTitutlo, setOMeuTitutlo] = useState(props.title);
    
    const changeTitle = ()=> {
        setOMeuTitutlo('SUPER TITLE');
    }

    

    return (
        <div className='hello-world'>
            <h5>{oMeuTitutlo}</h5>
            <p>{props.text}</p>
            <button onClick={changeTitle}>
                Change title
            </button>

            <Link to="/about-us">About</Link>

        </div>
    )

}

export default HelloWorld;