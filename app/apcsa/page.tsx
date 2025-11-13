// rick work here
import Link from "next/link";

export default function APCSA() {
	return (
		<main className="min-h-screen bg-black text-alto px-6 py-16 md:px-16 lg:px-32 leading-relaxed">
			<section className="border-l-4 border-sunglo pl-6 mb-16">
				<h2 className="text-5xl font-extrabold text-sunglo mb-2">99% → 5</h2>
				<p className="text-lg">
					99% students who prepared for the AP Computer Science A exam through our Programming Club
					<span className="text-sunglo font-semibold">Programming Club</span> earned a top
					score of <span className="text-sunglo font-semibold">5</span>.
				</p>
				<p className="mt-2 text-alto text-lg">
					While 1% <span className="text-sunglo font-semibold">didn't</span> want to learn
				</p>
			</section>

			<section className="mb-16">
				<h3 className="text-2xl font-bold text-sunglo mb-3">What We Do</h3>
				<p>
					Our AP CSA section helps students build strong foundations in{" "}
					<span className="text-sunglo font-semibold">Java</span> and computer science
					principles. We mix{" "}
					<span className="text-sunglo font-semibold">concept practice</span>,{" "}
					<span className="text-sunglo font-semibold">exam-style questions</span>, and{" "}
					<span className="text-sunglo font-semibold">hands-on projects</span> to
					strengthen understanding and confidence for the AP exam and beyond.
				</p>
			</section>

			<section className="mb-16">
				<h3 className="text-2xl font-bold text-sunglo mb-4">Why Take It With Us</h3>
				<ul className="list-disc list-inside space-y-3 text-lg">
					<li>
						<span className="text-sunglo font-semibold">Experienced Instructors</span> —
						Our student teachers have aced AP CSA themselves and have real coding
						experience.
					</li>
					<li>
						<span className="text-sunglo font-semibold">Proven Results</span> — We focus
						on methods that directly map to what the College Board tests.
					</li>
					<li>
						<span className="text-sunglo font-semibold">Supportive Community</span> —
						Learn in a collaborative, friendly environment where you can ask anything.
					</li>
					<li>
						<span className="text-sunglo font-semibold">Growth Beyond AP</span> — We
						encourage building independent projects and exploring topics like data
						structures and algorithms.
					</li>
				</ul>

				<div className="mt-8">
					<Link
						href="#join"
						className="inline-block bg-sunglo text-white px-6 py-3 rounded-lg font-semibold hover:bg-storm-dust transition-colors"
					>
						Join a Session
					</Link>
				</div>
			</section>
		</main>
	);
}

