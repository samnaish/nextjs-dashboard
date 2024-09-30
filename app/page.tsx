import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from "@/app/ui/home.module.css";
import clsx from 'clsx';
import { bebas } from './ui/fonts';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="mt-4 flex grow flex-col gap-4 p-6">

        <h1 className={clsx(bebas.className, 'text-3xl')}>Learning Dashboard</h1>
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-slate-500 text-white px-6 py-10 md:w-2/5 md:px-20">
          <p className={`text-xl md:text-3xl md:leading-normal`}>
            <strong>Welcome to learning.</strong> This is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-blue-200">
              Next.js Learn Course
            </a>
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        </div>

      <footer className='bg-slate-400 border-t-2 border-indigo-600 '>
        <div className='container mx-auto p-4 text-white'>
          built in 2024
        </div>
      </footer>
    </main>
  );
}
