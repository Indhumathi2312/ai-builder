import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0c0d0d] text-white p-6 text-center">
      <h1 className="text-6xl font-black text-purple-500 mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
      <p className="text-gray-400 mb-6 max-w-md">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-[#673de6] hover:bg-[#5025d1] text-white font-bold px-6 py-3 rounded-xl transition-all"
      >
        Return Home
      </Link>
    </div>
  );
}
