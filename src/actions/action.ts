'use server'
import { redirect } from 'next/navigation'

import Task from '@/models/Task'

const addTask = async task => {
	const title = task.get('title')
	const tag = task.get('tag')
	const description = task.get('description')
	const priority = task.get('priority')
	const status = task.get('status')
	const points = task.get('points')

	const newTask = new Task({ title, tag, description, priority, status, points })
	await newTask.save();
	redirect('/kanban');
}

const getTasks = async () => {
	return Task.find()
}

export { addTask, getTasks }