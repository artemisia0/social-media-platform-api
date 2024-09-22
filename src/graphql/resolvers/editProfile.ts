import User from '../../mongooseModels/User'


interface Args {
	username: string;
	firstName: string | null | undefined;
	lastName: string | null | undefined;
	birthDate: string | null | undefined;
	countryCode: string | null | undefined;
	countryLabel: string | null | undefined;
	city: string | null | undefined;
}

export default async function editProfile(_: any, args: Args) {
	const res = await User.findOneAndUpdate({ username: args.username }, {
		firstName: args.firstName ?? undefined,
		lastName: args.lastName ?? undefined,
		birthDate: args.birthDate ?? undefined,
		countryCode: args.countryCode ?? undefined,
		countryLabel: args.countryLabel ?? undefined,
		city: args.city ?? undefined,
	})

	if (res.ok == false) {
		return {
			status: {
				ok: false,
				message: 'Failed to update profile data.',
			}
		}
	}

	return {
		status: {
			ok: true,
			message: "Profile data successfully updated.",
		}
	}
}

