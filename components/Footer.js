export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full row-start-3 flex gap-[24px] flex-wrap items-center justify-center text-center pt-8 print:hidden">
            <p className="text-xs">
                @{currentYear} Jeremy Erik Leong. This resume is built using
                <a href="https://nextjs.org/" target="_blank" className="footer-link"> Next.js</a> and <a href="https://tailwindcss.com/" target="_blank" className="footer-link">Tailwind CSS</a>, and deployed via <a href="https://vercel.com/" target="_blank" className="footer-link">Vercel.</a>
            </p>
        </footer>
    )
}