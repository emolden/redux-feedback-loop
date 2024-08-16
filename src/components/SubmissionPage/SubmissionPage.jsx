import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function SubmissionPage () {

    const history = useHistory();

    

    const goToFeeling = () => {
        history.push('/')
    }

    return (
        <div>
            <h2>Thank You!</h2>
            
            <button data-testid="next" onClick={goToFeeling}>Leave New Feedback</button>
        </div>
    )
}

export default SubmissionPage;


