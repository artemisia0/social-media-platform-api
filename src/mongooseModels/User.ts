import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
	username: String,
	hashedPassword: String,
	birthDate: String,
	signingUpDate: String,
	firstName: String,
	lastName: String,
	countryCode: String,
	countryLabel: String,
	city: String,
	avatar: String,
})

const User = mongoose.models.User ?? mongoose.model('User', userSchema)

export default User

