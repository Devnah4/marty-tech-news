const User = require("./User");
const Post = require("./Post");
const Comment = require("./Comment");

// Creates table associations
// Sets the relationship between Users and their posts
User.hasMany(Post, {
    foreignKey: "user_id",
});

// Sets posts and comments to only relate to one User
Post.belongsTo(User, {
    foreignKey: "user_id",
});

Comment.belongTo(User, {
    foreignKey: 'user_id'
});

// Sets comments relationship to a Post
Comment.belongsTo(Post, {
    foreignKey: "post_id",
});

// Sets User and Post relationship to many Comment
User.hasMany(Comment, {
    foreignKey: "user_id",
});

Post.hasMany(Comment, {
    foreignKey: "post_id",
});

module.exports = { User, Post, Comment};