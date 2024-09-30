import mongoose from 'mongoose';


const postSchema = new mongoose.Schema({
	images: [String],
	texts: [String],
	authorUsername: String,
	createdAt: String,
	usersWhoLiked: [String],
});

const Post = mongoose.models.Post ?? mongoose.model('Post', postSchema)

export default Post

