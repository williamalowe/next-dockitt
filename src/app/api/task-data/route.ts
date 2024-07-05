import { NextResponse } from 'next/server'

import Task from '@/models/Task'
import dbConnect from '@/lib/db'

export const GET = async () => {
	await dbConnect()
	const data = await Task.find()

	return NextResponse.json(data)
}