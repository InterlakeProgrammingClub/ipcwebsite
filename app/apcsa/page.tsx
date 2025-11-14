
export default function APCSA() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans text-zinc-200">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-start py-32 px-10 sm:items-start">
        
        {/* Header */}
        <div className="flex flex-col items-center gap-3 text-center sm:items-start sm:text-left mb-16">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
            Programming Club — AP Computer Science A
          </h1>
          <p className="text-zinc-500">
            Where experience, teamwork, and proven results meet.
          </p>
        </div>

        {/* Stats Section */}
        <section className="border-l-4 border-[#E26D5A] pl-6 mb-16">
          <div className="text-5xl font-extrabold text-[#E26D5A]">
            99% → 5
          </div>
          <p className="mt-3 text-zinc-300">
            99% of students who prepared for the AP Computer Science A exam through our Programming Club earned a top score of{" "}
            <span className="text-[#E26D5A] font-bold">5</span>.
          </p>
          <p className="text-zinc-400">
            While 1% <span className="text-[#E26D5A] font-bold">didn't</span> want to learn
          </p>
        </section>

        {/* What We Do */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold leading-10 tracking-tight text-[#E26D5A] mb-4">
            What We Do
          </h2>
          <p className="max-w-lg text-lg leading-7 text-zinc-300">
            Our AP CSA section helps students build strong foundations in Java and computer science principles. We mix{" "}
            <span className="text-[#E26D5A] font-bold">concept practice</span>,{" "}
            <span className="text-[#E26D5A] font-bold">exam-style questions</span>, and{" "}
            <span className="text-[#E26D5A] font-bold">hands-on projects</span> that strengthen understanding and confidence for the AP exam and beyond.
          </p>
        </section>

        {/* Why Take It With Us */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold leading-10 tracking-tight text-[#E26D5A] mb-4">
            Why Take It With Us
          </h2>
          <ul className="list-none space-y-3 text-zinc-300">
            <li>
              <span className="text-[#E26D5A] font-bold">Experienced Instructors</span> — Our student teachers have aced AP CSA themselves and have real coding experience.
            </li>
            <li>
              <span className="text-[#E26D5A] font-bold">Reliable Teaching</span> — We focus on making everybody understand and master what they need for the test.
            </li>
            <li>
              <span className="text-[#E26D5A] font-bold">Supportive Community</span> — Learn in a collaborative, friendly environment where you can ask anything.
            </li>
            <li>
              <span className="text-[#E26D5A] font-bold">Growth Beyond AP</span> — We encourage students to think independently and learn smartly.
            </li>
          </ul>

          <a
            href="/contact"
            className="inline-block mt-6 rounded-lg bg-[#E26D5A] px-6 py-3 font-semibold text-white hover:bg-zinc-600 transition"
          >
            Join a Session
          </a>
        </section>

      </main>
    </div>
  );
}
