// rick work here

export default function APCSA() {
	return (
		<div className="min-h-screen bg-shark-900">
			<main>
				<section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto">
						<div className="max-w-4xl">
							<div className="inline-block mb-4 px-3 py-1 bg-shark-800 border border-shark-700 text-sunglo-400 text-sm font-mono">
								{"// Welcome to the club"}
							</div>

							<h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-alto-50 mb-6 leading-tight text-balance">
								Code, Compete, <span className="text-sunglo-500">Create</span>
							</h1>

							<p className="text-xl sm:text-2xl text-storm-dust-300 mb-8 leading-relaxed max-w-2xl text-pretty">
								Join a community of passionate programmers. Master algorithms,
								compete in USACO, ace APCSA, and build projects that have an impact.
							</p>

							<div className="flex flex-col sm:flex-row gap-4">
								<Link
									href="/contact"
									className="inline-flex items-center justify-center px-8 py-4 bg-sunglo-500 text-shark-900 font-semibold hover:bg-sunglo-400 transition-colors"
								>
									Join the Club
								</Link>
								<Link
									href="/projects"
									className="inline-flex items-center justify-center px-8 py-4 bg-shark-800 text-alto-50 font-semibold border border-shark-700 hover:border-sunglo-500 transition-colors"
								>
									View Projects
								</Link>
							</div>
						</div>
					</div>
				</section>
				<section className="py-16 px-4 sm:px-6 lg:px-8 border-y border-shark-700">
					<div className="max-w-7xl mx-auto">
					</div>
				</section>
				<section className="py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto">
						<div className="text-center mb-16">
							<h2 className="text-3xl sm:text-4xl font-bold text-alto-50 mb-4 text-balance">
								What We Offer
							</h2>
							<p className="text-lg text-storm-dust-300 max-w-2xl mx-auto text-pretty">
								Everything you need to excel in competitive programming and
								software development
							</p>
						</div>

					</div>
				</section>
				<section className="py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-7xl mx-auto">
						<div className="bg-shark-800 border border-shark-700 p-12 sm:p-16 text-center">
							<h2 className="text-3xl sm:text-4xl font-bold text-alto-50 mb-4 text-balance">
								Ready to Level Up Your Skills?
							</h2>
							<p className="text-lg text-storm-dust-300 mb-8 max-w-2xl mx-auto text-pretty">
								Join our next meeting and meet fellow programmers who share your
								passion for code
							</p>
							<div className="flex flex-col sm:flex-row gap-4 justify-center">
								<Link
									href="/contact"
									className="inline-flex items-center justify-center px-8 py-4 bg-sunglo-500 text-shark-900 font-semibold hover:bg-sunglo-400 transition-colors"
								>
									Get Started
								</Link>
								<Link
									href="/leadership"
									className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-alto-50 font-semibold border border-shark-600 hover:border-sunglo-500 transition-colors"
								>
									Meet the Team
								</Link>
							</div>
						</div>
					</div>
				</section>
			</main>
		</div>;
	);
}
