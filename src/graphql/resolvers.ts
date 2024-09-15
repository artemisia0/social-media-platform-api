import signIn from './resolvers/signIn'
import signUp from './resolvers/signUp'
import signOut from './resolvers/signOut'
import { DateTimeResolver } from 'graphql-scalars'
import userData from './resolvers/userData'


const resolvers = {
	DateTime: DateTimeResolver,
	//Subscription: {
	//},
	Query: {
		userData,
	},
	Mutation: {
		signIn,
		signUp,
		signOut,
	}
}

export default resolvers

