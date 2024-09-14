import bcrypt from 'bcrypt'
import User from '../../mongooseModels/User'
import { getSessionToken, getSessionData } from '../../lib/session'


interface ArgsType {
	username: string;
	password: string;
}

export default async function signIn(_: any, args: ArgsType) {
	const { password, username } = args
	const foundUser = await User.findOne({ username })
	if (!foundUser) {
		return {
			status: {
				ok: false,
				message: "Invalid username.",
			}
		}
	}
	if (!(await bcrypt.compare(password, foundUser.hashedPassword ?? ""))) {
		return {
			status: {
				ok: false,
				message: "Invalid password.",
			}
		}
	}
	const sessionToken = await getSessionToken({
		username,
		userRole: 'user',
	})
	return {
		status: {
			ok: true,
			message: "Successfully signed in.",
		},
		sessionToken,
	}
}

