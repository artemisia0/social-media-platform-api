import signIn from './resolvers/signIn'
import signUp from './resolvers/signUp'
import signOut from './resolvers/signOut'
import { DateTimeResolver } from 'graphql-scalars'


const resolvers = {
	DateTime: DateTimeResolver,
	//Subscription: {
	//},
	//Query: {
	//},
	Mutation: {
		signIn,
		signUp,
		signOut,
	}
}

export default resolvers

