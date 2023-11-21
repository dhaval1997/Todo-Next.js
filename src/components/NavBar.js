import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md relative right-0 top-0 w-screen">
      <div className="max-w-7xl mx-auto py-2 px-4">
        <div className="flex justify-between">
          <Link href="/">
            <span className="font-bold text-lg">My Todos</span>
          </Link>
          <div className="flex space-x-4">
            <Link href="/completed-tasks">
              <button className="px-4 py-2 rounded bg-blue-500 text-white">
                Completed Tasks
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
