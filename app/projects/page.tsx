// abhi & arthur work here
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-alto-50 font-sans dark:bg-shark-600">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-20 px-10 bg-white dark:bg-shark-600 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-5xl font-bold text-sunglo-500">
            Improve, Plan, Create
          </h1>
          <p className="text-lg leading-8 text-shark-600 dark:text-alto-300">
            Join projects to release your creative passion. Come to a place where you can collaborate with others to create whatever you desire, from games to websites and apps. Projects section has many benefits such as freedom of creativity, collaboration skill improvement, as well as strong understanding in applying programming. Make sure to join projects to not miss out on all of these benefits.
          </p>
          <h1 className="text-3xl font-bold text-sunglo-500">
            Past projects
          </h1>
          <p className="text-lg leading-8 text-shark-600 dark:text-alto-300">
            Interlake Inquirer: <a href="" target="_blank" rel="noopener noreferrer">Link here</a>
          </p>
          <h1 className="text-3xl font-bold text-sunglo-500">
            Future Projects
          </h1>
          <ul className="text-lg leading-8 text-shark-600 dark:text-alto-300">
            <li>Chess Club Website with Chess Engine</li>
            <li>App Building</li>
            <li>Cryptocurrency</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
