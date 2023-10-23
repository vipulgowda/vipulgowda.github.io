import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const currentTab = location.pathname.slice(1);

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
          <div className="flex flex-row space-x-0 pr-10">
            <Link
              to="/"
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle text-neutral-500"
            >
              <span className="relative py-1 px-2">
                home
                {currentTab === "home" ||
                  (currentTab === "" && (
                    <div
                      className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
                      style={{ opacity: 1 }}
                    ></div>
                  ))}
              </span>
            </Link>
            <Link
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle text-neutral-500"
              to="/blogs"
            >
              <span className="relative py-1 px-2">
                blogs
                {currentTab === "blogs" && (
                  <div
                    className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
                    style={{ opacity: 1 }}
                  ></div>
                )}
              </span>
            </Link>
            <Link
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle text-neutral-500"
              to="/projects"
            >
              <span className="relative py-1 px-2">
                projects
                {currentTab === "projects" && (
                  <div
                    className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-200 dark:bg-neutral-800 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
                    style={{ opacity: 1 }}
                  ></div>
                )}
              </span>
            </Link>
          </div>
        </nav>
      </div>
    </aside>
  );
}
