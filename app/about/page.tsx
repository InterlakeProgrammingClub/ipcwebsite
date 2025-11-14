// divith work here

export default function About() {
  return (<h1>TODO</h1>;
    <div className="min-h-screen bg-shark-900">
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="max-w-5xl mx-auto relative">
            <div className="border-l-4 border-sunglo-500 pl-8 mb-12">
              <div className="text-sm text-sunglo-400 font-mono mb-4 tracking-wider uppercase">Get In Touch</div>
              <h1 className="text-6xl sm:text-7xl font-black text-alto-50 leading-none">
                Contact<span className="text-sunglo-500"> Us</span>
              </h1>
            </div>
            <div className="max-w-3xl">
              <p className="text-2xl sm:text-3xl text-storm-dust-300 leading-relaxed">
                Have questions? Want to get involved? We&apos;d love to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Sections */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="bg-shark-800 border-l-4 border-sunglo-500 p-8">
              <h2 className="text-3xl font-bold text-alto-50 mb-4">Email</h2>
              <p className="text-storm-dust-300 text-lg">clubemail@gmail.com</p>
            </div>

            <div className="bg-shark-800 border-l-4 border-sunglo-500 p-8">
              <h2 className="text-3xl font-bold text-alto-50 mb-4">Instagram</h2>
              <p className="text-storm-dust-300 text-lg">@clubinstagram</p>
            </div>

            <div className="bg-shark-800 border-l-4 border-sunglo-500 p-8">
              <h2 className="text-3xl font-bold text-alto-50 mb-4">Meeting Location</h2>
              <p className="text-storm-dust-300 text-lg">Room 305 every Wednesday after school</p>
            </div>

            <div className="bg-shark-800 border-l-4 border-sunglo-500 p-8">
              <h2 className="text-3xl font-bold text-alto-50 mb-4">Advisor</h2>
              <p className="text-storm-dust-300 text-lg">Mr. Smith - smith@school.org</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
