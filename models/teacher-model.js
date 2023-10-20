import mongoose from "mongoose";

const teacherSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: [true, "Please provide your Name"],
		},
		subject: {
			type: String,
			required: [true, "Please specify the subject you teach"],
		},
		phoneNumber: {
			type: String,
			required: [true, "Phone number is required"],
		},
		address: {
			streetAddress: {
				type: String,
				required: [true, "Street Address is Required"],
			},
			city: {
				type: String,
				required: [true, "City is Required"],
			},
			state: {
				type: String,
				required: [true, "State is Required"],
			},
			zipCode: {
				type: String,
				required: [true, "Zip Code is Required"],
			},
		},
	},
	{
		timestamps: true, // Adds createdAt and updatedAt fields automatically
	}
);
export default mongoose.model("Teacher", teacherSchema);
