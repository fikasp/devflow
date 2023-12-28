'use client'

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select'
import { formUrlQuery } from '@/utils/utils'
import { useRouter, useSearchParams } from 'next/navigation'

interface Props {
	filters: {
		name: string
		value: string
	}[]
	otherClasses?: string
	containerClasses?: string
}

export default function Filter({
	filters,
	otherClasses,
	containerClasses,
}: Props) {
	const searchParams = useSearchParams()
	const router = useRouter()

	const paramFilter = searchParams.get('filter')

	const handleUpdateParams = (value: string) => {
		const newUrl = formUrlQuery({
			params: searchParams.toString(),
			key: 'filter',
			value,
		})

		router.push(newUrl, { scroll: false })
	}

	return (
		<div className={`relative ${containerClasses}`}>
			<Select
				onValueChange={handleUpdateParams}
				defaultValue={paramFilter || undefined}
			>
				<SelectTrigger
					className={`${otherClasses} body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5`}
				>
					<div className="line-clamp-1 flex-1 text-left">
						<SelectValue placeholder="Select a Filter" />
					</div>
				</SelectTrigger>
				<SelectContent className="background-light800_dark300 text-dark500_light700">
					<SelectGroup>
						{filters.map((item) => (
							<SelectItem
								className="hover:bg-gray-200 dark:hover:bg-gray-800"
								key={item.value}
								value={item.value}
							>
								{item.name}
							</SelectItem>
						))}
					</SelectGroup>
				</SelectContent>
			</Select>
		</div>
	)
}
