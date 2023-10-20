import mongoose from "mongoose";

const adminSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please provide your name"],
		},
		schoolName: {
			type: String,
			required: [true, "Please provide the name of your School"],
		},
		email: {
			type: String,
			unique: true,
			lowercase: true,
			required: true,
		},
		password: {
			type: String,
			required: [true, "please enter a password"],
		},
		phoneNumber: {
			type: String,
			required: [true, "phone number is required"],
		},
	},
	{
		timestamps: true,
	}
);
export default mongoose.model("Admin", adminSchema);
