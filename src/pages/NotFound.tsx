import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#403f3c] px-4 text-[#F8F9FA]">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-[#F8F9FA]">404</h1>
        <p className="mt-4 text-[#bdbab3]">The page you’re trying to access doesn’t exist or has been moved.
</p>
        <Link
          to="/"
          className="mt-6 inline-block rounded border border-[#F8F9FA] px-6 py-3 font-mono text-sm text-[#F8F9FA] transition-all hover:bg-[#F8F9FA]/10"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
