import Link from 'next/link'
import Filter from '@/components/shared/Filter'
import UserCard from '@/components/cards/UserCard'
import LocalSearchbar from '@/components/shared/search/LocalSearchbar'
import { UserFilters } from '@/constants/filters'
import { getAllUsers } from '@/actions/user.action'

export default async function Page() {
	const result = await getAllUsers({})

	return (
		<>
			<h1 className="h1-bold text-dark100_light900">All Users</h1>

			<div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center">
				<LocalSearchbar
					route="/community"
					iconPosition="left"
					imgSrc="/assets/icons/search.svg"
					placeholder="Search for amazing minds"
					otherClasses="flex-1"
				/>

				<Filter
					filters={UserFilters}
					otherClasses="min-h-[56px] sm:min-w-[170px]"
				/>
			</div>

			<section className="grid-fit-240 mt-12 grid gap-4">
				{result.users.length > 0 ? (
					result.users.map((user) => <UserCard key={user._id} user={user} />)
				) : (
					<div className="paragraph-regular text-dark200_light800 mx-auto max-w-4xl text-center">
						<p>No users yet</p>
						<Link href="/sign-up" className="mt-2 font-bold text-accent-blue">
							Join to be the first!
						</Link>
					</div>
				)}
			</section>
		</>
	)
}
