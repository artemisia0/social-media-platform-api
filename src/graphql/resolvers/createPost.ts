import Post from '../../mongooseModels/Post'


interface Args {
	images: string[];
	texts: string[];
	authorUsername: string;
}

export default async function createPost(_: any, args: Args) {
	const { images, texts, authorUsername } = args;
	const newPost = new Post({ images, texts, authorUsername, usersWhoLiked: [], createdAt: (new Date()).toISOString() });
	const err = await newPost.save()
	if (err) {
		return {
			status: {
				ok: false,
				message: err.toString(),
			}
		}
	}
	return {
		ok: true,
		message: 'Post created successfully',
	}
}

