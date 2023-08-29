import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="body-font">
        <div>
          <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
            <Link href="/" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="ml-3 text-xl">Andrea 포트폴리오</span>
            </Link>
            <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">© 2020 Tailblocks —
              <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" className="text-gray-600 ml-1" target="_blank">@knyttneve</a>
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
              <Link href="https://github.com/AndreaStudy" className="text-gray-500">
                <Image src="/github-mark.png" alt="" width={35} height={35}></Image>
              </Link>
            </span>
          </div>
        </div>
      </footer>
    </>
  )
}