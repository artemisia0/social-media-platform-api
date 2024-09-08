import bcrypt from 'bcrypt'
import User from '../../mongooseModels/User'


interface ArgsType {
	username: string;
	password: string;
}

export default async function signUp(_: any, args: ArgsType) {
	const { username, password } = args
	const possiblyFoundUser = await User.findOne({ username })
	if (possiblyFoundUser != null) {
		return {
			status: {
				ok: false,
				message: 'Such user already exists.',
			}
		}
	}
	const saltRounds = process.env.BCRYPT_SALT_ROUNDS
	if (!saltRounds) {
		console.error('BCRYPT_SALT_ROUNDS is not set.')
		process.exit(1)
	}
	const hashedPassword = await bcrypt.hash(password, Number.parseFloat(saltRounds!))
	const newUser = new User({ username, hashedPassword })
	try {
		await newUser.save()
	} catch (err: any) {
		console.log(err)
		return {
			status: {
				ok: false,
				message: err.toString(),
			}
		}
	}
	return {
		status: {
			ok: true,
			message: "Successfully signed up.",
		}
	}
}

