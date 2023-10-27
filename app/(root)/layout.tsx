import Navbar from "@/components/shared/navbar/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<main className="background-light850_dark100 relative">
			<div className="flex">
				<Navbar />
				LeftSidebar
				<section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
					{children}
				</section>
				RightSidebar
			</div>
		</main>
	)
}
