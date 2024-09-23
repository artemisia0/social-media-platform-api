import mongoose from 'mongoose';


const postSchema = new mongoose.Schema({
	images: [String],
	authorUsername: String,
	createdAt: String,
	usersWhoLikes: [String],
});

const Post = mongoose.models.Post ?? mongoose.model('Post', postSchema)

export default Post

