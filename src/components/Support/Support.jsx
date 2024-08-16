import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { useDispatch } from "react-redux";

function Support () {

    const history = useHistory();
    const dispatch = useDispatch();

    const [support, setSupport] = useState('');

    const handleSupportNext = (event) => {
        event.preventDefault();

        dispatch({
            type: 'SUPPORT',
            payload: support
        })

        history.push('/comments')
    }

    return (
        <div>
            <h1>How well are you being supported?</h1>
            <input 
                data-testid="input"
                value={support}
                type= 'number'
                placeholder= 'Support 1-5'
                onChange={(e) => setSupport(e.target.value)}
            />
            <button data-testid="next" onClick={handleSupportNext}>NEXT</button>
        </div>
    )
}

export default Support;




