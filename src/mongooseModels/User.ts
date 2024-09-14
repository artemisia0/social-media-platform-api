import mongoose from 'mongoose'


const userSchema = new mongoose.Schema({
	username: String,
	hashedPassword: String,
	birthDate: String,
})

const User = mongoose.models.User ?? mongoose.model('User', userSchema)

export default User

