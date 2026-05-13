import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#403f3c] px-4 text-slate-300">
      <Helmet>
        <title>404 — Page not found | Fardin Ahmed Shovon</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-slate-100">404</h1>
        <p className="mt-4 text-slate-400">The page you’re trying to access doesn’t exist or has been moved.
</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded border border-teal-300 px-6 py-3 font-mono text-sm text-teal-300 transition-all hover:bg-teal-300/10"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
