import User from '../../mongooseModels/User'


export default async function usersData() {
	const res = await User.find()
		.sort({ signingUpDate: -1 })
	return res
}

