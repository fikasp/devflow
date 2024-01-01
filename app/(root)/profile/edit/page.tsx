import Profile from '@/components/forms/Profile'
import { getUserById } from '@/actions/user.action'
import { ParamsProps } from '@/types'
import { auth } from '@clerk/nextjs'
import { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'Edit profile | Dev Overflow',
}

export default async function Page({ params }: ParamsProps) {
	const { userId } = auth()

	if (!userId) return null

	const mongoUser = await getUserById({ userId })

	return (
		<>
			<h1 className="h1-bold text-dark100_light900">Edit Profile</h1>

			<div className="mt-9">
				<Profile clerkId={userId} user={JSON.stringify(mongoUser)} />
			</div>
		</>
	)
}
