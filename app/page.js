// import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2">
        <div className="sr-only">
          Jeremy Erik Leong's Resume
        </div>
        <h1 className="text-3xl font-black">
          Jeremy Erik Leong Kar Ye
        </h1>

        <div>
          <p className="text-[#94a3b8]">
            Front-End Developer with 2+ years of experience specializing in JavaScript, React, and Node.js, developing websites with a strong emphasis on responsive design, user-centric principles, and accessibility.
          </p>

          <p className="text-[#94a3b8] my-3">
            Based in Kuala Lumpur, Malaysia
          </p>

          <div className="text-[#94a3b8] flex justify-start items-center gap-5">
            <div>github</div>
            <div>linkedin</div>
            <div>email</div>
            <div>portfolio</div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold my-3">About</h2>
          <p className="text-[#94a3b8]">
            A results-oriented individual and a team player with over 2+ years of experience developing
            responsive, engaging, and accessible digital experiences. Proven ability to collaborate effectively
            in developing solutions and to ensure that projects are completed with high-performance,
            testable, and maintainable code.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold my-3">Technical Skills</h2>
          <ul>
            <li>
              <b>
                Languages:
              </b>
              <span className="text-[#94a3b8]"> HTML, CSS, JavaScript (ES6), SQL</span>
            </li>

            <li>
              <b>
                Frameworks:
              </b>
              <span className="text-[#94a3b8]"> Bootstrap, Tailwind CSS, Next.js, Express.js </span>
            </li>

            <li>
              <b>
                Libraries:
              </b>
              <span className="text-[#94a3b8]"> jQuery, React.js </span>
            </li>

            <li>
              <b>
                Database:
              </b>
              <span className="text-[#94a3b8]"> PostgreSQL</span>
            </li>

            <li>
              <b>
                Tools:
              </b>
              <span className="text-[#94a3b8]"> SCSS, Git, GitLab, Node.js, Vercel, Netlify, Sublime Merge, Visual Studio Code</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold my-3">Work Experience</h2>

          <div className="my-4">
            <h3 className="text-lg font-medium">Front-End Web Developer</h3>

            <p className="text-[#94a3b8]">TTwoWeb · <span className="text-sm">July 2022 - September 2024</span></p>
            <ul className="text-[#94a3b8]">
              <li className="my-1">
                Develop dynamic and responsive websites.
              </li>
              <li className="my-1">
                Deliver responsive web and mobile UI designs with
                cross-browser compatibility.
              </li>
              <li className="my-1">
                Implement backend integration via a RESTful API
                Assists backend developers in debugging and
                upgrading.
              </li>
              <li className="my-1">
                Working closely with the designers, software
                engineers, and project executives to fulfill clients’
                needs.
              </li>
            </ul>
          </div>

          <div className="my-4">
            <h3 className="text-lg font-medium">Interactive Content Developer</h3>

            <p className="text-[#94a3b8]">MindSpace · <span className="text-sm">August 2019 – March 2021</span></p>
            <ul className="text-[#94a3b8]">
              <li className="my-1">
                Develop Gamification education content for special
                needs using Unity3D.
              </li>
              <li className="my-1">
                Managing website content via Grav CMS.
              </li>
              <li className="my-1">
                Create company social media posts using Adobe tools.
              </li>
            </ul>
          </div>

          <div className="my-4">
            <h3 className="text-lg font-medium">IT Intern</h3>

            <p className="text-[#94a3b8]">MindSpace · <span className="text-sm">April 2019 – July 2019</span></p>
            <ul className="text-[#94a3b8]">
              <li className="my-1">
                Manage company social media posts
              </li>
              <li className="my-1">
                Computer class and mandarin class teaching assistant
              </li>
              <li className="my-1">
                General IT support
              </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold my-3">Education</h2>

          <div className="my-3 text-[#94a3b8]">
            <h3 className="text-white font-medium">BA(Hons) Interactive Media Design</h3>
            <p>The One Academy  · May 2017 - July 2019</p>
            <ul>
              <li>CGPA: 3.5 / 4.0</li>
              <li>Brain & Brawn Co-op Puzzle Game(FYP): The One Academy Hall of Fame 2020 (shortlisted)</li>
            </ul>
          </div>

          <div className="my-3 text-[#94a3b8]">
            <h3 className="text-white font-medium">Diploma in Multimedia Design</h3>
            <p>Taylor's University  · March 2014 - July 2016</p>
            <ul>
              <li>CGPA: 3.02 / 4.0</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold my-3">Language Proficiency</h2>

          <ul className="text-[#94a3b8]">
            <li>Cantonese (Fluent)</li>
            <li>Mandarin (Fluent)</li>
            <li>English (Proficiency)</li>
            <li>Bahasa Melayu (Conversational)</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold my-3">References</h2>
          <p className="text-[#94a3b8]">Available upon request.</p>
        </div>

        <div className="w-full bg-background/95 border-[#94a3b8] sticky bottom-0 flex items-center gap-2 border-t py-3 backdrop-blur-sm print:hidden">
          <kbd className="pointer-events-none inline-flex select-none items-center gap-1 rounded px-1.5 py-0.5 font-mono text-[10px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border border-[#94a3b8]">
            <div className="text-xs text-[#94a3b8] flex gap-1">
              <span>⌘</span><span>K</span>
            </div>
          </kbd>
          <span className="text-[#94a3b8] text-xs">Show command menu</span>
        </div>
      </main>

      <footer className="text-sm row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-center text-[#94a3b8]">
        @2025 Jeremy Erik Leong. This resume is built using Next.js and Tailwind CSS, and deployed via Vercel.
      </footer>
    </div>
  );
}
