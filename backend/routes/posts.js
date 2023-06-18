const express = require('express');
const router = express.Router();
const sqlite3 = require('sqlite3').verbose();
const path = require('node:path');
const multer = require('multer');
const db_name = path.resolve('./db', 'WGASDatabase.db');

// JSON body parser
router.use(express.json());

// Set up storage for uploaded images
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../frontend/public/images/thumbnails/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

// Create the multer middleware
const upload = multer({ storage: storage });

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
            res.status(200).send({ success: true, posts: rows });
        }
    });
});

// Get a post based on its id
router.get('/:id', (req, res) => {
    const id = req.params.id;
    db.get('SELECT * FROM Posts WHERE id = ?', [id], (err, row) => {
        if (err) {
            res.status(500).send({ success: false, error: 'Error fetching post from database' });
        } else if (!row) {
            res.status(404).send({ success: false, error: 'Post not found' });
        } else {
            res.status(200).send({ success: true, details: row });
        }
    });
});

// Make a new post
router.post('/', (req, res) => {
    const { title, body, preview_image_url, tags } = req.body;
    db.run("INSERT INTO Posts (title, date, body, preview_image_url, tags) VALUES (?, DATE('now'), ?, ?, ?)", [title, body, preview_image_url, tags], (err) => {
        if (err) {
            res.status(500).send({ success: false, error: err.message});
        } else {
            res.status(201).send({ success: true });
        }
    });
})

// For preview image uploads
router.post('/upload', upload.single('image'), (req, res) => {
    res.status(200).json({ success: true })
})


module.exports = router;