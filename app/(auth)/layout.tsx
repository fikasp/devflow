export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<>
			<div className="flex-center bg-black text-white">Auth</div>
			<div>{children}</div>
		</>
	)
}
