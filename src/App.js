import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./components/Blog";
import Projects from "./components/Projects";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import ErrorPage from "./ErrorPage";

function App() {
  return (
    <div className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
      <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
        <aside className="-ml-[8px] mb-16 tracking-tight">
          <div className="lg:sticky lg:top-20">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/blogs" element={<Blog />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="*" element={<ErrorPage/>}/>
            </Routes>
          </div>
        </aside>
      </main>
    </div>
  );
}

export default App;
