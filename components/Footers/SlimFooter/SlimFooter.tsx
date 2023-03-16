import Link from 'next/link';

const footerMenuItems = [
    { name: 'Privacy', href: '/privacy-general' },
    { name: 'Legal', href: '/legal' },
    { name: 'Modern Slavery and Human Trafficking Statement', href: '/modern-slavery-statement' },
    { name: 'Cookies', href: '/cookies' },
    { name: 'Accessibility', href: '/accessibility' },
];

const FooterSlim = () => {
    return (
        <footer className="mx-0 lg:bg-gray-500 lg:w-full">
            <div className="max-w-6xl mx-auto flex flex-col flex-wrap justify-between w-full pb-8 text-xs text-gray-200 lg:flex-row lg:flex-nowrap lg:py-5">
                <nav className="flex flex-col flex-wrap p-4 space-y-2 bg-gray-500 lg:flex-shrink lg:flex-row lg:space-y-0 lg:p-0">
                    {footerMenuItems.map((item, index) => (
                    <span key={index} className="text-center lg:w-auto lg:text-left">
                        <Link href={item.href} className="relative text-gray-200 transition-colors hover-underline hover:md:text-white bottom-line first:font-bold">{item.name}</Link>
                        <span className="hidden text-gray-300 lg:mx-2 lg:inline">|</span>
                    </span>
                    ))} 
                </nav>
                <div className="pt-10 text-center lg:pt-0 lg:text-right">&copy; 2010 - 2023 Limited and related entities. All rights reserved.</div>
            </div>
        </footer>
    );
}

export default FooterSlim;