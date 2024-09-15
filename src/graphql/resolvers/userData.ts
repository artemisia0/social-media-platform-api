import User from '../../mongooseModels/User'


export default async function userData(_: any, { username }: { username: string; }) {
	const user = await User.findOne({ username })

	if (!user) {
		return {
			status: {
				ok: false,
				message: 'Failed to find such user.',
			}
		}
	}

	return {
		result: user,
		status: {
			ok: true,
			message: 'Successfully fetched user data.',
		}
	}
}

