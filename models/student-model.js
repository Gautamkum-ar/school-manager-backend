import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		age: {
			type: Number,
			required: true,
		},
		gender: {
			type: String,
			required: true,
		},
		grade: {
			type: String,
			required: true,
		},
		attendence: {
			type: Number,
			required: true,
		},
		class: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: true, // Saves createdAt and updatedAt as dates. createdAt will be a timestamp of the date the post was
	}
);

export default mongoose.model("Students", studentSchema);
