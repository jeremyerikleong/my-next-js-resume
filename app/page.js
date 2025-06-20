import Header from "@/components/Header.js";
import About from "@/components/About.js";
import Skills from "@/components/Skills.js";
import Experience from "@/components/Experience.js";
import Education from "@/components/Education.js";
import Languages from "@/components/Languages.js";
import References from "@/components/References.js";
import Footer from "@/components/Footer.js";
import ThemeSwitch from "@/components/ThemeSwitch";

export default function Home() {
  return (
    <div className="flex flex-wrap items-center justify-items-center min-h-screen p-6 py-12 font-[family-name:var(--font-montserrat)] w-full max-w-[768px] mx-auto relative">
      <main className="flex flex-col gap-[32px] row-start-2">
        <Header />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Languages />
        <References />

        <div className="w-full bg-white dark:bg-background sticky bottom-0 flex items-center border-t border-greyish-blue/25 gap-3 py-3 backdrop-blur-sm print:hidden">
          <kbd className="pointer-events-none inline-flex select-none items-center gap-1 rounded px-1.5 py-0.5 text-[10px] font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border border-greyish-blue/25">
            <div className="text-xs text-greyish-blue flex gap-1">
              <span>⌘</span><span>K</span>
            </div>
          </kbd>
          <span className="text-greyish-blue text-xs">Show command menu</span>
        </div>
      </main>
      <Footer />

      <ThemeSwitch />
    </div>
  );
}
