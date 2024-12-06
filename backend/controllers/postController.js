//const PostModel = require("../models/postModel");
const PostModel = require("../models/postModel");

// Get all posts
const getPost = async (req, res) => {
  try {
    const posts = await PostModel.find();
    if (posts.length === 0) {
      return res.status(404).json({ message: "Aucun post trouvé." });
    }
    return res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erreur lors de la récupération des posts." });
  }
};

// Get post by ID
const getPostById = async (req, res) => {
  try {
    const post = await PostModel.findById(req.params.id);
    if (!post) {
      return res.status(404).json({ message: "Post non trouvé." });
    }
    return res.status(200).json(post);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erreur lors de la récupération du post." });
  }
};

// Create a post
const createPost = async (req, res) => {
  try {
    const { title, content, auteur, message } = req.body;
    if (!title || !content || !auteur || !message) {
      return res
        .status(400)
        .json({ message: "Veuillez fournir tous les champs obligatoires." });
    }
    const post = await PostModel.create({ title, content, auteur, message });
    return res.status(201).json(post);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erreur lors de la création du post." });
  }
};

// Update a post
const updatePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const { title, content, auteur, message } = req.body;

    const post = await PostModel.findById(postId);
    if (!post) {
      return res.status(404).json({ message: "Post non trouvé." });
    }

    // Mise à jour des champs fournis
    if (title) post.title = title;
    if (content) post.content = content;
    if (auteur) post.auteur = auteur;
    if (message) post.message = message;

    const updatedPost = await post.save();
    return res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erreur lors de la mise à jour du post." });
  }
};

// Delete a post
const deletePost = async (req, res) => {
  try {
    const postId = req.params.id;
    const post = await PostModel.findByIdAndDelete(postId);
    if (!post) {
      return res
        .status(404)
        .json({ message: "Post non trouvé. Impossible de le supprimer." });
    }
    return res
      .status(200)
      .json({ message: "Post supprimé avec succès.", deletedPost: post });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Erreur lors de la suppression du post." });
  }
};

// Exportation des méthodes
module.exports = {
  createPost,
  updatePost,
  getPost,
  getPostById,
  deletePost,
};
