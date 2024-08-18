import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


function SubmissionPage () {

    const history = useHistory();

    

    const goToFeeling = () => {
        history.push('/')
    }

    return (
        <div>
            <h2>Thank You for your feedback!</h2>
            
            <button className = "nextButton" data-testid="next" onClick={goToFeeling}>Leave New Feedback</button>
        </div>
    )
}

export default SubmissionPage;


