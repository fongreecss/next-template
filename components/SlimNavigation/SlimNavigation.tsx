import Link from 'next/link'
import styles from './SlimNavigation.module.css'

export default function SlimNavigation() {
    return (
        <div className="relative items-center justify-center hidden px-6 py-2 overflow-hidden text-sm font-medium bg-gray-500 bg-opacity-70 backdrop-blur-sm lg:flex drop-shadow-menu">
            <ol className="flex space-x-4">
                <li>
                    <Link
                        aria-current="page"
                        href="/"
                        className="router-link-active router-link-exact-active flex px-3 py-1.5 transition duration-100 rounded-[5px] bg-gray-100 bg-opacity-10 text-gray-100"
                        data-id="f4928d74-8cc0-4c4e-b2ac-cee0c416cd0a"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className="flex px-3 py-1.5 transition duration-100 rounded-[5px] text-gray-200"
                        data-id="7946f1f8-2389-4e8b-88c4-dd681d6a7d29"
                    >
                        About
                    </Link>
                </li>
            </ol>
            <div
                className="absolute h-8 bg-opacity-10 bg-gray-100 rounded-[5px] px-3 py-1.5 pointer-events-none"
                style={{ left: '872.094px', width: '80.8281px', opacity: 0 }}
            ></div>
            <div
                className="absolute bottom-0 hidden w-full h-px duration-200 border-b md:block border-gray-450"
            ></div>
        </div>
    );
}
