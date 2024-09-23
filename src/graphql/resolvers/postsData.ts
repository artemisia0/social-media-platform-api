import Post from '../../mongooseModels/Post'


interface Args {
	username: string;
}

export default async function postsData(_: any, args: Args) {
	const posts = await Post.find({ username: args.username })
		.sort({ createdAt: -1 })

	return {
		status: {
			ok: true,
			message: "Posts fetched successfully",
		},
		result: posts,
	}
}

