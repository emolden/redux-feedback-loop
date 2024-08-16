import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useState } from "react";
import { useDispatch } from "react-redux";


function Comments () {

    const history = useHistory();
    const dispatch = useDispatch();

    const [comment, setComment] = useState('');

    const handleCommentNext = (event) => {
        event.preventDefault();

        dispatch({
            type: 'COMMENT',
            payload: comment
        })

        history.push('/review')
    }

    return (
        <div>
            <h1>Any comments you want to leave?</h1>
            <input 
                data-testid="input"
                value={comment}
                type= 'text'
                placeholder= 'Comments'
                onChange={(e) => setComment(e.target.value)}
            />
            <button data-testid="next" onClick={handleCommentNext}>Next</button>
        </div>
    )
}

export default Comments;



