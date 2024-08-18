import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";


function Feeling () {

    const history = useHistory();
    const dispatch = useDispatch();

    const [feeling, setFeeling] = useState('');

    const handleFeelingNext = (event) => {
        event.preventDefault();

        if(feeling === '1' || feeling === '2' || feeling === '3' || feeling === '4' || feeling === '5') {
            dispatch({
                type: 'FEELING',
                payload: feeling
            })

            history.push('/understanding')
        }
        else {
            Swal.fire("Please enter 1, 2, 3, 4, or 5.");
        }
    }

    return (
        <div>
            <h1>How are you feeling today?</h1>
            <section className="labelInput">
                <label>Enter how you are feeling on a scale from 1 to 5: 1 being not good and 5 being great.</label>
                <div className="inputButton">
                    <input 
                        className="input"
                        data-testid="input"
                        value={feeling}
                        type= 'number'
                        placeholder= 'Feeling 1-5'
                        onChange={(e) => setFeeling(e.target.value)}
                    />
                    <button className = "nextButton" data-testid="next" onClick={handleFeelingNext}>NEXT</button>
                </div>
            </section>
        </div>
    )
}

export default Feeling;