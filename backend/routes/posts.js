const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const path = require('node:path');
const db_name = path.resolve('./db', 'WGASDatabase.db');

// Connect to SQLite database
const db = new sqlite3.Database(db_name, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log('Connected to database');
    }
});

// Get all posts
router.get('/', (req, res) => {
    db.all('SELECT * FROM Posts', (err, rows) => {
        if (err) {
            res.status(500).send({ success: false, error: 'Error fetching posts from database' });
        } else {
            let rows_correct_tag = [];
            rows.forEach((row) => {
                let tags = row.tags.split(',');
                rows_correct_tag.push({ id: row.id, title: row.title, date: row.date, body: row.body, preview_image_url: row.preview_image_url, tags: tags });
            })
            res.status(200).send({ success: true, posts: rows_correct_tag });
        }
    });
});

// Get a post based on its id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.get('SELECT * FROM Posts WHERE id = ?', [id], (err, row) => {
        if (err) {
            res.status(500).send({ success: false, error: 'Error fetching post from database' });
        }
        else if (!row) {
            res.status(404).send({ success: false, error: 'Post not found' });
        }
        else {
            res.status(200).send({ success: true, details: row });
        }
    });
});

module.exports = router;