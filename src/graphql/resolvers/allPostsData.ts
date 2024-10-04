import Post from '../../mongooseModels/Post';


export default async function allPostsData() {
	const posts = await Post.find({}).sort({ createdAt: -1 });
	return {
		status: {
			ok: true,
			message: 'Posts fetched successfully',
		},
		result: posts,
	}
}

