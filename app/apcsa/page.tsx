// rick work here
import Link from "next/link";

export default function APCSA() {
	return (
		<div className="min-h-screen bg-black text-alto font-sans overflow-y-scroll">
      		<main className="max-w-4xl mx-auto px-6 py-10 leading-relaxed">
        		<section className="border-l-4 border-sunglo pl-6 mb-16">
          			<div className="text-5xl font-extrabold text-sunglo">100% → 5</div>
          			<p className="mt-2 text-alto text-lg">
            			Every student who prepared for the AP Computer Science A exam through our Programming Club earned a top score of <span className="text-sunglo font-semibold">5</span>.
          			</p>
        		</section>
       			<section className="mb-16">
         			<h2 className="text-2xl font-bold text-sunglo mb-3">What We Do</h2>
         			<p className="text-alto text-lg">
            			Our AP CSA section helps students build strong foundations in Java and computer science principles. We mix <span className="text-sunglo font-semibold">concept practice</span>, <span className="text-sunglo font-semibold">exam-style questions</span>, and <span className="text-sunglo font-semibold">hands-on projects</span> that strengthen understanding and confidence for the AP exam and beyond.
          			</p>
        		</section>
        		<section className="mb-16">
          			<h2 className="text-2xl font-bold text-sunglo mb-4">Why Take It With Us</h2>
          			<ul className="list-disc list-inside space-y-3 text-lg text-alto">
           				<li><span className="text-sunglo font-semibold">Experienced Instructors</span> — Our student teachers have aced AP CSA themselves and have real coding experience.</li>
            			<li><span className="text-sunglo font-semibold">Proven Results</span> — We focus on methods that directly map to what the College Board tests.</li>
            			<li><span className="text-sunglo font-semibold">Supportive Community</span> — Learn in a collaborative, friendly environment where you can ask anything.</li>
            			<li><span className="text-sunglo font-semibold">Growth Beyond AP</span> — We encourage building independent projects and exploring topics like data structures and algorithms.</li>
          			</ul>
         			 <div className="mt-8">
            			<a href="#join" className="inline-block bg-sunglo text-white px-6 py-3 rounded-lg font-semibold hover:bg-storm-dust transition-colors">
              				Join a Session
            			</a>
          			</div>
        		</section>
      		</main>
    	</div>
	);
}
