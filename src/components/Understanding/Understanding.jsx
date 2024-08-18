import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

function Understanding () {

    const history = useHistory();
    const dispatch = useDispatch();

    const [understanding, setUnderstanding] = useState('');

    const handleUnderstandingNext = (event) => {
        event.preventDefault();

        if (understanding === '1' || understanding === '2' || understanding === '3' || understanding === '4' || understanding === '5') {
            dispatch({
                type: 'UNDERSTANDING',
                payload: understanding
            })

            history.push('/support')
        }
        else {
            Swal.fire("Please enter 1, 2, 3, 4, or 5.");
        }
    }

    return (
        <div>
            <h1>How well are you understanding the content?</h1>
            <section className="labelInput">
                <label>Enter how well are you understanding on a scale from 1 to 5: 1 being not good and 5 being great.</label>
                <div className="inputButton">
                    <input 
                        className="input"
                        data-testid="input"
                        value={understanding}
                        type= 'number'
                        placeholder= 'Understanding 1-5'
                        onChange={(e) => setUnderstanding(e.target.value)}
                    />
                    <button className = "nextButton" data-testid="next" onClick={handleUnderstandingNext}>Next</button>
                </div>
            </section>
        </div>
    )
}

export default Understanding;



