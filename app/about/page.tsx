export default function About() {
  return (
    <div className="min-h-screen bg-shark-900">
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative">
            <div className="border-l-4 border-sunglo-500 pl-8 mb-12">
              <div className="text-sm text-sunglo-400 font-mono mb-4 tracking-wider uppercase">
                Who We Are
              </div>
              <h1 className="text-6xl sm:text-7xl font-black text-alto-50 leading-none">
                About<span className="text-sunglo-500"> Us</span>
              </h1>
            </div>

            <div className="max-w-3xl">
              <p className="text-2xl sm:text-3xl text-storm-dust-300 leading-relaxed">
                A community of builders, creators, and problem solvers.
              </p>
            </div>
          </div>
        </section>

        {/* Section 1 */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img
              src="/content/club1.jpeg"
              alt="Programming Club"
              className="rounded-lg shadow-xl border border-shark-700 w-full"
            />

            <div className="bg-shark-800 border-l-4 border-sunglo-500 p-8">
              <p className="text-lg text-storm-dust-300 leading-relaxed">
                The Programming Club is a student-led community dedicated to
                exploring software development, robotics, and computer science.
                Whether you’re a curious beginner or an experienced coder, we
                provide a welcoming space to grow and experiment.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Reverse order on large screens */}
            <div className="order-2 lg:order-1 bg-shark-800 border-l-4 border-sunglo-500 p-8">
              <p className="text-lg text-storm-dust-300 leading-relaxed">
                We host weekly workshops, hands-on coding sessions, collaborative
                projects, and mentorship opportunities. Students are encouraged to
                explore their interests and build real skills alongside teammates.
              </p>
            </div>
    
            <img
              src="/content/club2.jpeg"
              alt="Workshops"
              className="order-1 lg:order-2 rounded-lg shadow-xl border border-shark-700 w-full"
            />
          </div>
        </section>

        {/* Section 3 */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <img
              src="/content/club3.jpeg"
              alt="Community"
              className="rounded-lg shadow-xl border border-shark-700 w-full"
            />

            <div className="bg-shark-800 border-l-4 border-sunglo-500 p-8">
              <p className="text-lg text-sunglo-300 font-semibold leading-relaxed">
                Our mission is to create a community where students learn at their
                own pace while working together, building connections, and becoming
                confident problem solvers.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
