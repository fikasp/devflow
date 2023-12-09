import AnswerCard from '../cards/AnswerCard'

import { getUserAnswers } from '@/actions/user.action'
import { SearchParamsProps } from '@/types'

interface Props extends SearchParamsProps {
	userId: string
	clerkId?: string | null
}

export default async function AnswersTab({
	searchParams,
	userId,
	clerkId,
}: Props) {
	const result = await getUserAnswers({
		userId,
		page: 1,
	})

	console.log(result.answers)

	return (
		<>
			{result.answers.map((item) => (
				<AnswerCard
					key={item._id}
					clerkId={clerkId}
					_id={item._id}
					question={item.question}
					author={item.author}
					upvotes={item.upvotes.length}
					createdAt={item.createdAt}
				/>
			))}
		</>
	)
}
