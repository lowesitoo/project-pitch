import React from 'react'

function Footer() {
    return (
        <footer className="fixed bottom-0 left-0 z-20 w-full p-4 bg-white shadow md:px-6 md:py-8 dark:bg-gray-900">
            <div className="sm:flex sm:items-center sm:justify-between">
                <a
                    href="https://flowbite.com/"
                    className="flex items-center mb-4 sm:mb-0"
                >
                    {/* <img className="h-8 mr-3" alt="Anivact Logo" /> */}
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                        Anivact
                    </span>
                </a>
                <ul className="flex flex-wrap items-center mb-6 text-sm text-teal-200 sm:mb-0 dark:text-teal-200">
                    <li>
                        <a
                            href="/about"
                            className="mr-4 hover:underline md:mr-6"
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a
                            href="/contact"
                            className="mr-4 hover:underline md:mr-6"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-teal-200 sm:text-center dark:text-teal-200">
                © 2023{' '}
                <a href="https://flowbite.com/" className="hover:underline">
                    Anivact™
                </a>
                . All Rights Reserved.
            </span>
        </footer>
    )
}

export default Footer
