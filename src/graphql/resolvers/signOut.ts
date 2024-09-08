import { getDefaultSessionToken } from '../../lib/session'


export default async function signIn() {
	return {
		sessionToken: await getDefaultSessionToken(),
	}
}

