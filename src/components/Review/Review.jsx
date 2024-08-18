import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import { useSelector } from "react-redux";
import Swal from "sweetalert2";

function Review () {

    const history = useHistory();

    const feeling = useSelector (store => store.feeling);
    const understanding = useSelector (store => store.understanding);
    const support = useSelector (store => store.support)
    const comment = useSelector (store => store.comment)

    const handleReviewSubmit = () => {
        let reviewToAdd = {
            feeling: feeling,
            understanding: understanding,
            support: support,
            comments: comment
        }

        axios({
            method: 'POST',
            url:'/api/feedback',
            data: reviewToAdd
        })
        .then ((response) => {
            Swal.fire({
                title: "Your feedback was successfully saved!",
                icon: "success"
              });
            history.push('/submission_page')
        })
        .catch ((error) => {
            console.log('Error in POST route: ', error)
        }) 
    }

    return (
        <div>
            <h1>Review Your Feedback</h1>
            <h3>Feelings: {feeling}</h3>
            <h3>Understanding: {understanding}</h3>
            <h3>Support: {support}</h3>
            <h3>Comments: {comment}</h3>
            <button className = "nextButton" data-testid="next" onClick={handleReviewSubmit}>SUBMIT</button>
        </div>
    )
}

export default Review;


