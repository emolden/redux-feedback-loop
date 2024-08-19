import axios from "axios";
import { useEffect, useState } from "react";


function Admin () {

    useEffect(() => {
        renderAllFeedback();
    }, [])

    const[allFeedback, setAllFeedback] = useState([]);


    const renderAllFeedback = () => {
        axios({
            method: 'GET',
            url: '/api/feedback'
        })
        .then((response) => {
          console.log('GET route got a response form the server: ', response.data);
          setAllFeedback (response.data);
          console.log(allFeedback)
        })
        .catch((error) => {
          console.log('Error occured when receiving a response from the server GET route: ', error)
        })
    }

    const handleDeleteButton = (itemId) => {
        console.log('Delete button was pushed! item id is: ', itemId)

        axios({
            method: 'DELETE',
            url: `/api/feedback/${itemId}`
        })
        .then((response) => {
            renderAllFeedback();
        })
        .catch((error) => {
            console.log('Error occured when receiving a response fromt he server DELETE route: ', error);
        })
    }

    return (
        <div>
            <h1>Feedback Results:</h1>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Comprehension</th>
                        <th>Support</th>
                        <th>Comments</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allFeedback.map((userFeedback) => {
                        return (
                            <tr key={userFeedback.id}>
                                <td>{userFeedback.feeling}</td>
                                <td>{userFeedback.understanding}</td>
                                <td>{userFeedback.support}</td>
                                <td>{userFeedback.comments}</td>
                                <td onClick={function(){handleDeleteButton(userFeedback.id)}}>🗑️</td>
                            </tr>
                        )
                    })}
                    <tr>

                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Admin;
