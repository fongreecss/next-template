import Link from 'next/link';

const SlimNavigation = () => {
    return (
        <div className="relative items-center justify-center hidden px-6 py-2 overflow-hidden text-sm font-medium bg-gray-500 bg-opacity-70 backdrop-blur-sm lg:flex drop-shadow-menu">
            <ol className="flex space-x-4">
                <li>
                    <Link
                        aria-current="page"
                        href="/"
                        className="router-link-active router-link-exact-active flex px-3 py-1.5 transition duration-100 rounded-[5px] bg-gray-100 bg-opacity-10 text-gray-100"
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link
                        href="/about"
                        className="flex px-3 py-1.5 transition duration-100 rounded-[5px] text-gray-200"
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href="/message-board"
                        className="flex px-3 py-1.5 transition duration-100 rounded-[5px] text-gray-200"
                    >
                        Message Board
                    </Link>
                </li>
            </ol>
        </div>
    );
}


export default SlimNavigation;