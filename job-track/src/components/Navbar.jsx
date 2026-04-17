const Navbar = () => {
  return (
    <nav className="flex items-center justify-between
      px-6 py-4 bg-white border-b border-gray-100
      shadow-sm">
      <span className="text-xl font-bold tracking-tight
        text-indigo-600">
        ✦ MyApp
      </span>
      <div className="flex items-center gap-1">
        <a href="/login" className="px-4 py-2 text-sm
          text-gray-600 rounded-lg hover:bg-gray-100
          hover:text-gray-900 transition-colors">
          Login
        </a>
        <a href="/register" className="px-4 py-2 text-sm
          text-gray-600 rounded-lg hover:bg-gray-100
          hover:text-gray-900 transition-colors">
          Register
        </a>
        <a href="/dashboard" className="ml-2 px-4 py-2
          text-sm font-medium text-white bg-indigo-600
          rounded-lg hover:bg-indigo-700 transition-colors">
          Dashboard
        </a>
      </div>
    </nav>
  );
}

export default Navbar;