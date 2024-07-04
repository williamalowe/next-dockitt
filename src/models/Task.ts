import mongoose from 'mongoose'

const taskSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	tag: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	priority: {
		type: String,
		required: true,
	},
	status: {
		type: String,
		required: true,
	},
	points: {
		type: Number,
		required: true,
	},
})

export default mongoose.models.Task || mongoose.model('Task', taskSchema)