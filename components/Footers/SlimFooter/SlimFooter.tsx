import Link from 'next/link';

export default function FooterSlim() {
    return (
        <footer className="mx-0 lg:bg-gray-500 lg:w-full">
            <div className="max-w-6xl mx-auto flex flex-col flex-wrap justify-between w-full pb-8 text-xs text-gray-200 lg:flex-row lg:flex-nowrap lg:py-5">
                <nav className="flex flex-col flex-wrap p-4 space-y-2 bg-gray-500 lg:flex-shrink lg:flex-row lg:space-y-0 lg:p-0">
                    <span className="text-center lg:w-auto lg:text-left">
                        
                    <Link href="/privacy-general" className="relative text-gray-200 transition-colors hover-underline hover:md:text-white bottom-line first:font-bold">Privacy</Link>
                    </span>
                    <span className="lg:ml-2 text-center lg:w-auto lg:text-left">
                        <span className="hidden text-gray-300 lg:mr-2 lg:inline">|</span>
                        <Link href="/legal" className="relative text-gray-200 transition-colors hover-underline hover:md:text-white bottom-line first:font-bold">Legal</Link>
                    </span>
                    <span className="lg:ml-2 text-center lg:w-auto lg:text-left">
                        <span className="hidden text-gray-300 lg:mr-2 lg:inline">|</span>
                        <Link href="/modern-slavery-statement" className="relative text-gray-200 transition-colors hover-underline hover:md:text-white bottom-line first:font-bold">Modern Slavery and Human Trafficking Statement</Link>
                    </span>
                    <span className="lg:ml-2 text-center lg:w-auto lg:text-left">
                        <span className="hidden text-gray-300 lg:mr-2 lg:inline">|</span>
                        <Link  href="https://www.miibeian.gov.cn/publish/query/indexFirst.action" rel="noopener noreferrer" className="relative text-gray-200 transition-colors hover-underline hover:md:text-white bottom-line first:font-bold">
                            粤ICP备14093872号-4
                        </Link>
                    </span>
                    <span className="lg:ml-2 text-center lg:w-auto lg:text-left">
                        <span className="hidden text-gray-300 lg:mr-2 lg:inline">|</span>
                        <Link href="/cookies" className="relative text-gray-200 transition-colors hover-underline hover:md:text-white bottom-line first:font-bold">Cookies</Link>
                    </span>
                </nav>
                <div className="pt-10 text-center lg:pt-0 lg:text-right">&copy; 2010 - 2023 Limited and related entities. All rights reserved.</div>
            </div>
        </footer>
    );
}
