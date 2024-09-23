import signIn from './resolvers/signIn'
import signUp from './resolvers/signUp'
import signOut from './resolvers/signOut'
import { DateTimeResolver } from 'graphql-scalars'
import userData from './resolvers/userData'
import editProfile from './resolvers/editProfile'
import postsData from './resolvers/postsData'


const resolvers = {
	DateTime: DateTimeResolver,
	//Subscription: {
	//},
	Query: {
		userData,
		postsData,
	},
	Mutation: {
		signIn,
		signUp,
		signOut,
		editProfile,
	}
}

export default resolvers

