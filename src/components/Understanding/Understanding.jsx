import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Understanding () {

    const history = useHistory();
    const dispatch = useDispatch();

    const [understanding, setUnderstanding] = useState('');

    const handleUnderstandingNext = (event) => {
        event.preventDefault();

        dispatch({
            type: 'UNDERSTANDING',
            payload: understanding
        })

        history.push('/support')
    }

    return (
        <div>
            <h1>How well are you understanding the content?</h1>
            <input 
                data-testid="input"
                value={understanding}
                type= 'number'
                placeholder= 'Understanding 1-5'
                onChange={(e) => setUnderstanding(e.target.value)}
            />
            <button data-testid="next" onClick={handleUnderstandingNext}>Next</button>
        </div>
    )
}

export default Understanding;



