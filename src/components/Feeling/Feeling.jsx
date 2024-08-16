import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { useDispatch } from "react-redux";


function Feeling () {

    const history = useHistory();
    const dispatch = useDispatch();

    const [feeling, setFeeling] = useState('');

    const handleFeelingNext = (event) => {

        event.preventDefault();

        dispatch({
            type: 'FEELING',
            payload: feeling
        })

        history.push('/understanding')
    }

    return (
        <div>
            <h1>How are you feeling today?</h1>
            <input 
                data-testid="input"
                value={feeling}
                type= 'number'
                placeholder= 'Feeling 1-5'
                onChange={(e) => setFeeling(e.target.value)}
            />
            <button data-testid="next" onClick={handleFeelingNext}>Next</button>
        </div>
    )
}

export default Feeling;