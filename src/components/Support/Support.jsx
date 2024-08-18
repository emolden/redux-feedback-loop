import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

function Support () {

    const history = useHistory();
    const dispatch = useDispatch();

    const [support, setSupport] = useState('');

    const handleSupportNext = (event) => {
        event.preventDefault();

        if(support === '1' || support === '2' || support === '3' || support === '4' || support === '5') {
        dispatch({
            type: 'SUPPORT',
            payload: support
        })

        history.push('/comments')
        }
        else {
            Swal.fire("Please enter 1, 2, 3, 4, or 5.");
        }
    }

    return (
        <div>
            <h1>How well are you being supported?</h1>
            <section className="labelInput">
                <label>Enter how supported you are feeling on a scale from 1 to 5: 1 being not good and 5 being great.</label>
                <div className="inputButton">
                    <input 
                        className="input"
                        data-testid="input"
                        value={support}
                        type= 'number'
                        placeholder= 'Support 1-5'
                        onChange={(e) => setSupport(e.target.value)}
                    />
                    <button className = "nextButton" data-testid="next" onClick={handleSupportNext}>NEXT</button>
                </div>
            </section>       
        </div>
    )
}

export default Support;




