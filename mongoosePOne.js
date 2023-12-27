// Import necessary modules
const express = require('express');
const mongoose = require('mongoose');

// Create an Express application
const app = express();

mongoose.connect('mongodb://localhost:27017/noDuplicate', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;

// Define a Mongoose schema (e.g., for a 'Post')
const postSchema = new mongoose.Schema({
    name: String,
    title: String,
    content: String,
    date: {
        type: Date,
        default: Date.now
    }
});

// Create a Post model using the schema
const Post = mongoose.model('Post', postSchema);

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello! This is the root of the API.');
  });
  

app.post('/', async (req, res) => {
    try {
        const { name, title, content } = req.body;

        const existingPost = await Post.findOne({ name });

        if (existingPost) {
            return res.status(400).json({ message: 'Name already exists' });
        }

        const newPost = new Post({ name, title, content });
        await newPost.save();

        res.status(201).json({ message: 'Post created successfully', post: newPost });
    } catch (error) {
        res.status(500).json({ message: 'Failed to create post', error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
