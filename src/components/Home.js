import Hikeimage from "../assets/hike.jpeg";
import SomeDayAtBar from "../assets/SomeDayAtBar.jpeg";
import Profile from "../assets/Profile.jpeg";
import AWS from "../assets/AWS.png";
import TS from "../assets/TS.jpeg";
import JS from "../assets/JSimg.jpeg";
import CSS from "../assets/CSS.jpeg";
import Docker from "../assets/docker.jpeg";
import ExpressJS from "../assets/ExpressJs.jpeg";
import GCP from "../assets/gcp.png";
import HTML from "../assets/HTML.jpeg";
import MongoDB from "../assets/mongoDB.jpeg";
import NodeJS from "../assets/NodeJS.jpeg";
import Postgres from "../assets/postgres.jpeg";
import ReactImg from "../assets/ReactImg.jpeg";
import ReduxImg from "../assets/ReduxImg.jpeg";
import Sass from "../assets/Sass.jpeg";
import Tailwind from "../assets/tailwind.jpeg";
import Vite from "../assets/vite.jpeg";
import TechCard from "./TechCard";
import Experience from "./Experience";
import Connect from "./Connect";

const ImagesCard = [
  {
    id: 1,
    src: TS,
  },
  {
    id: 2,
    src: JS,
  },
  {
    id: 3,
    src: HTML,
  },
  {
    id: 4,
    src: CSS,
  },
  {
    id: 5,
    src: ReactImg,
  },
  {
    id: 6,
    src: ReduxImg,
  },

  {
    id: 7,
    src: Sass,
  },
  {
    id: 8,
    src: Tailwind,
  },
  {
    id: 9,
    src: Vite,
  },
  {
    id: 10,
    src: NodeJS,
  },
  {
    id: 11,
    src: ExpressJS,
  },
  {
    id: 12,
    src: Postgres,
  },
  {
    id: 13,
    src: MongoDB,
  },
  {
    id: 14,
    src: Docker,
  },
  {
    id: 15,
    src: AWS,
  },
  {
    id: 16,
    src: GCP,
  },
];

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-2xl md:mb-4 lg:mb-8 mb-2 tracking-tighter">
        hello, I'm vipul
      </h1>
      <section>
        <p className="prose prose-neutral dark:prose-invert">
          I'm a frontend engineer and a critical problem solver. I'm currently
          pursuing my master's in computer science at Portland State University,
          and I'm expected to graduate in March 2025. Currently, I'm involved
          with the
          <span className="not-prose px-2 h-12">
            <a
              href="https://cat.pdx.edu/"
              target="_blank"
              rel="noreferrer"
              className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-2 text-neutral-900 dark:text-neutral-100 no-underline"
            >
              Computer Action Team
            </a>
          </span>
          at Portland State University. I am always on pursuit to solve
          engineering problems and with previous experience as a Senior Software
          Engineer at
          <span className="not-prose px-2">
            <a
              href="https://themoderndatacompany.com/"
              target="_blank"
              rel="noreferrer"
              className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-2 text-neutral-900 dark:text-neutral-100 no-underline"
            >
              The Modern Data Company,
            </a>
          </span>
          I'm currently seeking summer internships for 2024
        </p>
      </section>
      <section>
        <div className="columns-2 sm:columns-3 gap-4 my-8">
          <div class="relative lg:h-40 sm:h-20 lg:mb-4 mb-2 lg:mt-16 mt-4 ">
            <img
              alt="My Hike in portland"
              className="rounded-lg object-cover"
              src={Hikeimage}
            />
          </div>
          <div className="relative h-80 mb-4">
            <img
              alt="Just being myself"
              className="rounded-lg object-cover"
              src={Profile}
            />
          </div>
          <div className="relative h-80 mb-8">
            <img
              alt="Some Day at Bar"
              className="rounded-lg object-cover"
              src={SomeDayAtBar}
            />
          </div>
        </div>
        <div className="text-l flex items-center justify-center lg:p-12 sm:p-8">
          <p className="prose prose-neutral dark:prose-invert">
            Just a collection of my personal photos!!!!
          </p>
        </div>
      </section>
      <section>
        <div>
          <h2 className="font-bold text-2xl lg:mt-0 mt-4 mb-8 tracking-tighter">
            Technologies I'm familiar with
          </h2>
          <div class="grid grid-cols-3 lg:grid-cols-4 gap-12">
            {ImagesCard.map((card) => (
              <TechCard key={card.id} cardImage={card.src} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <Experience/>
      </section>
      <section>
        <Connect/>
      </section>
    </>
  );
}
