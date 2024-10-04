import signIn from './resolvers/signIn'
import signUp from './resolvers/signUp'
import signOut from './resolvers/signOut'
import { DateTimeResolver } from 'graphql-scalars'
import userData from './resolvers/userData'
import editProfile from './resolvers/editProfile'
import postsData from './resolvers/postsData'
import createPost from './resolvers/createPost'
import usersData from './resolvers/usersData'
import allPostsData from './resolvers/allPostsData'


const resolvers = {
	DateTime: DateTimeResolver,
	//Subscription: {
	//},
	Query: {
		userData,
		postsData,
		usersData,
		allPostsData,
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

