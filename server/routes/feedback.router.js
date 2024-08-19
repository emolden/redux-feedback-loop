const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')


// TODO: This route adds a new feedback entry
router.post('/', (req, res) => {
    let newReview = req.body;

    let queryText = `
        INSERT INTO "feedback"
            ("feeling", "understanding", "support", "comments")
            VALUES
            ($1, $2, $3, $4);
    `;

    let queryValues = [newReview.feeling, newReview.understanding, newReview. support, newReview.comments];

    pool.query(queryText, queryValues)
        .then(result => {
            res.sendStatus(201);
        })
        .catch(error => {
            console.log('Error adding a new review ', error);
        })
})

router.get('/', (req, res) => {
    console.log('GET /api/feedback received a request!');

    const sqlText = `
        SELECT * FROM "feedback"
            ORDER BY "id";
    `;

    pool.query(sqlText)
        .then((dbRes) => {
            res.send(dbRes.rows);
        })
        .catch((dbErr) => {
            console.log('Database error in GET /api/feedback: ', dbErr);
            res.sendStatus(500);
        })
})

router.delete('/:itemId', (req, res) => {

    const itemToDelete = req.params.itemId;

    const sqlText = `
        DELETE FROM "feedback"
            WHERE "id" = $1;
    `;

    const sqlValues = [itemToDelete];

    pool.query (sqlText, sqlValues)
        .then((dbResult) => {
            res.sendStatus(200);
        })
        .catch((dbErr) => {
            console.log('SQL query in DELETE /feedback/:itemId error: ', dbErr);
            res.sendStatus(500);
        })
})


// DO NOT EDIT THIS ROUTE
// This route must return all feedback.
router.get('/', (req, res) => {
    console.log('testing')
    const sqlText = `SELECT * FROM "feedback" ORDER BY "id"`;
    pool.query(sqlText).then(result => {
        res.send(result.rows)
    }).catch(err => {
        console.log(err);
        res.sendStatus(500);
    })
})

module.exports = router;
