interface LayoutProps {
	children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
	return (
		<>
			<div className="flex-center bg-black text-white">Auth</div>
			<div>{children}</div>
		</>
	)
}

