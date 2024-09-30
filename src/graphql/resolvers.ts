import signIn from './resolvers/signIn'
import signUp from './resolvers/signUp'
import signOut from './resolvers/signOut'
import { DateTimeResolver } from 'graphql-scalars'
import userData from './resolvers/userData'
import editProfile from './resolvers/editProfile'
import postsData from './resolvers/postsData'
import createPost from './resolvers/createPost'
import usersData from './resolvers/usersData'


const resolvers = {
	DateTime: DateTimeResolver,
	//Subscription: {
	//},
	Query: {
		userData,
		postsData,
		usersData,
	},
	Mutation: {
		signIn,
		signUp,
		signOut,
		editProfile,
		createPost,
	}
}

export default resolvers

