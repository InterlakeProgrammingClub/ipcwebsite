// rick work here
export default function APCSA() {
	return (
		<div className="min-h-screen bg-black text-alto font-sans overflow-y-scroll">
      		<main className="max-w-4xl mx-auto px-6 py-10 leading-relaxed">
        		<section className="border-l-4 border-sunglo pl-6 mb-16">
          			<div className="text-5xl font-extrabold text-sunglo">99% → 5</div>
          			<p className="mt-2 text-alto text-lg">
            			99% students who prepared for the AP Computer Science A exam through our Programming Club earned a top score of <span className="text-sunglo font-semibold">5</span>.
          			</p>
					<p className="mt-2 text-alto text-lg">
						While 1% <span className="text-sunglo font-semibold">didn&apos;t</span> want to learn
					</p>
					<p>
						While 1% <span>didn't</span> want to learn
					</p>
				</section>

				<section>
					<h3>What We Do</h3>
					<p>
						Our AP CSA section helps students build strong foundations in <span>Java</span> and
						computer science principles. We mix <span>concept practice</span>,{" "}
						<span>exam-style questions</span>, and <span>hands-on projects</span> to strengthen
						understanding and confidence for the AP exam and beyond.
					</p>
				</section>

				<section>
					<h3>Why Take It With Us</h3>
					<ul>
						<li>
							<span>Experienced Instructors</span> — Our student teachers have aced AP CSA
							themselves and have real coding experience.
						</li>
						<li>
							<span>Reliable Teaching</span> — We focus on making everybody understand and 
							master what they need for the test.
						</li>
						<li>
							<span>Supportive Community</span> — Learn in a collaborative, friendly environment
							where you can ask anything.
						</li>
						<li>
							<span>Growth Beyond AP</span> — We encourage student to think independently and learn smartly
						</li>
					</ul>
					<Link href="/contact" className="button">
						Join a Session
					</Link>
				</section>
			</main>

			<style jsx>{`
				.container {
					min-height: 100vh;
					background-color: #000000;
					color: #d9d9d9;
					padding: 4rem 2rem;
					line-height: 1.7;
				}
				h2 {
					color: #e26d5a;
					font-size: 3rem;
					font-weight: 800;
					border-left: 4px solid #e26d5a;
					padding-left: 1rem;
					margin-bottom: 2rem;
				}
				h3 {
					color: #e26d5a;
					font-size: 1.6rem;
					font-weight: 700;
					margin-bottom: 1rem;
				}
				span {
					color: #e26d5a;
					font-weight: 600;
				}
				ul {
					list-style: disc;
					margin-left: 1.5rem;
					margin-bottom: 2rem;
				}
				.button {
					display: inline-block;
					background-color: #e26d5a;
					color: white;
					padding: 0.75rem 1.5rem;
					border-radius: 8px;
					font-weight: 600;
					text-decoration: none;
				}
				.button:hover {
					background-color: #666666;
				}
			`}</style>
		</>
	);
}



