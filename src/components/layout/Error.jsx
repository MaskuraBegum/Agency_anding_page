
import { Link } from "react-router";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8f8f5] px-6 py-16">
      <div className="w-full max-w-2xl text-center">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.3em] text-neutral-500">
          Page not found
        </p>

        <h1 className="text-[clamp(7rem,20vw,14rem)] font-black leading-none tracking-tighter text-neutral-900">
          404<span className="text-orange-500">.</span>
        </h1>

        <h2 className="mt-8 text-2xl font-semibold tracking-tight text-neutral-900 sm:text-3xl">
          Oops! Lost in the digital space?
        </h2>

        <p className="mx-auto mt-4 max-w-md text-base leading-7 text-neutral-600">
          The page you're looking for doesn't exist or may have been moved.
          Let's get you back on track.
        </p>

        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full bg-neutral-900 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-orange-500"
          >
            Back to homepage <span className="ml-2">↗</span>
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center rounded-full border border-neutral-300 px-7 py-3.5 text-sm font-semibold text-neutral-800 transition hover:border-neutral-900"
          >
            Go back
          </button>
        </div>

        <div className="mt-16 border-t border-neutral-200 pt-6">
          <p className="text-xs tracking-wide text-neutral-400">
            © {new Date().getFullYear()} · Back to creating something great.
          </p>
        </div>
      </div>
    </main>
  );
}
