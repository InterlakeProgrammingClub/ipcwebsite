import Image from "next/image";
import leadershipData from "../../data/leadership.json";

export default function Leadership() {
	const { currentOfficers, alumni, electionProcess } = leadershipData;

	return (
		<div className="min-h-screen bg-shark-900">
			<main>
				{/* Hero */}
				<section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
					<div className="max-w-5xl mx-auto relative">
						<div className="border-l-4 border-sunglo-500 pl-8 mb-12">
							<div className="text-sm text-sunglo-400 font-mono mb-4 tracking-wider uppercase">Leadership Development</div>
							<h1 className="text-6xl sm:text-7xl font-black text-alto-50 leading-none">
								Build Your<span className="text-sunglo-500"> Leadership</span><br />
								Journey With Us
							</h1>
						</div>
						<div className="max-w-3xl">
							<p className="text-2xl sm:text-3xl text-storm-dust-300 leading-relaxed">
								Take on real responsibility. Lead study sessions, manage projects, mentor others. Build the skills that matter.
							</p>
						</div>
					</div>
				</section>

				{/* Current Officers */}
				<section className="py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-5xl mx-auto">
						<div className="border-l-4 border-sunglo-500 pl-8 mb-16">
							<div className="text-sm text-sunglo-400 font-mono mb-4 tracking-wider uppercase">Leadership Team 2024-25</div>
							<h2 className="text-4xl sm:text-5xl font-black text-alto-50 mb-4">
								Current Officers
							</h2>
							<p className="text-lg text-storm-dust-300 max-w-2xl">
								Meet the dedicated students leading our club this year
							</p>
						</div>

						<div className="space-y-6">
							{currentOfficers.map((officer, index) => (
								<div key={index} className="p-8 bg-shark-800 border-l-4 border-sunglo-500 hover:border-l-8 hover:bg-shark-700 transition-all duration-300">
									<div className="flex items-start gap-8">
										<div className="relative w-32 h-32 shrink-0 bg-shark-700 border border-shark-600 overflow-hidden">
											{officer.image ? (
												<Image 
													src={officer.image} 
													alt={officer.name}
													fill
													className="object-cover"
												/>
											) : (
												<div className="w-full h-full flex items-center justify-center text-4xl text-storm-dust-600">
													{officer.name.split(' ').map(n => n[0]).join('')}
												</div>
											)}
										</div>
										<div className="flex-1 min-w-0">
											<div className="flex items-baseline gap-4 mb-2">
												<h3 className="text-2xl font-bold text-alto-50">
													{officer.name}
												</h3>
												<span className="text-sm text-storm-dust-500">Grade {officer.grade}</span>
											</div>
											<p className="text-sunglo-500 font-semibold mb-3 text-lg">
												{officer.role}
											</p>
											<p className="text-storm-dust-300">
												{officer.bio}
											</p>
										</div>
									</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Officer Elections */}
				<section className="py-20 px-4 sm:px-6 lg:px-8 bg-shark-800/30">
					<div className="max-w-5xl mx-auto">
						<div className="border-l-4 border-sunglo-500 pl-8 mb-12">
							<div className="text-sm text-sunglo-400 font-mono mb-4 tracking-wider uppercase">How We Elect Leaders</div>
							<h2 className="text-4xl sm:text-5xl font-black text-alto-50 mb-4">
								Officer Elections
							</h2>
						</div>

						<div className="space-y-12">
							<p className="text-xl text-storm-dust-300 leading-relaxed">
								{electionProcess.overview}
							</p>

							<div className="bg-shark-900 p-10 border-t-4 border-sunglo-500">
								<h3 className="text-2xl font-bold text-alto-50 mb-6">
									What We Look For
								</h3>
								<div className="space-y-4">
									{electionProcess.criteria.map((criterion, index) => (
										<div key={index} className="flex items-start gap-4">
											<span className="text-2xl text-sunglo-500 shrink-0">→</span>
											<span className="text-storm-dust-300 leading-relaxed">{criterion}</span>
										</div>
									))}
								</div>
							</div>

							<div className="grid md:grid-cols-2 gap-6">
								<div className="bg-shark-900 p-8 border border-shark-700">
									<div className="text-sm text-sunglo-400 font-mono mb-4 uppercase">Timeline</div>
									<p className="text-storm-dust-300 leading-relaxed">
										{electionProcess.timeline}
									</p>
								</div>
								<div className="bg-sunglo-500/10 p-8 border border-sunglo-500/30">
									<div className="text-sm text-sunglo-400 font-mono mb-4 uppercase">Key Factor</div>
									<p className="text-storm-dust-300 leading-relaxed">
										<strong className="text-sunglo-400">Participation and leadership</strong> are heavily taken into consideration for officer elections. All members who demonstrate commitment are encouraged to run!
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Alumni */}
				<section className="py-20 px-4 sm:px-6 lg:px-8">
					<div className="max-w-5xl mx-auto">
						<div className="border-l-4 border-sunglo-500 pl-8 mb-16">
							<div className="text-sm text-sunglo-400 font-mono mb-4 tracking-wider uppercase">Where Are They Now</div>
							<h2 className="text-4xl sm:text-5xl font-black text-alto-50 mb-4">
								Alumni Network
							</h2>
						</div>

						{alumni.length > 0 ? (
							<div className="space-y-8">
								{alumni.map((alum, index) => (
									<div key={index} className="pb-12 border-b border-shark-700 last:border-b-0">
										<div className="flex items-start gap-8 mb-6">
											<div className="relative w-24 h-24 shrink-0 bg-shark-700 border border-shark-600 overflow-hidden rounded-full">
												{alum.image ? (
													<Image 
														src={alum.image} 
														alt={alum.name}
														fill
														className="object-cover"
													/>
												) : (
													<div className="w-full h-full flex items-center justify-center text-2xl text-storm-dust-600 font-semibold">
														{alum.name.split(' ').map(n => n[0]).join('')}
													</div>
												)}
											</div>
											<div className="flex-1 min-w-0">
												<div className="text-sm text-sunglo-400 font-mono mb-2">Class of {alum.graduationYear}</div>
												<h3 className="text-3xl font-bold text-alto-50 mb-2">{alum.name}</h3>
												<p className="text-sunglo-500 font-semibold text-lg">{alum.role}</p>
											</div>
										</div>
										<div className="grid md:grid-cols-2 gap-6">
											<div>
												<div className="text-xs text-storm-dust-500 uppercase tracking-wider mb-2">Achievements</div>
												<p className="text-storm-dust-300">{alum.achievements}</p>
											</div>
											<div>
												<div className="text-xs text-storm-dust-500 uppercase tracking-wider mb-2">Currently</div>
												<p className="text-storm-dust-300">{alum.current}</p>
											</div>
										</div>
									</div>
								))}
							</div>
						) : (
							<div className="py-20 text-center border border-shark-700">
								<p className="text-storm-dust-400 text-xl">
									Alumni information coming soon!
								</p>
							</div>
						)}
					</div>
				</section>
			</main>
		</div>
	);
}
