import { UserButton } from '@clerk/nextjs'

export default function Home() {
	return (
		<main className="flex-center h-screen bg-black text-white">
			Tailwind and Clerk are the best !
			<div>
				<UserButton afterSignOutUrl="/" />
			</div>
		</main>
	)
}
