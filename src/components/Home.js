import Newphototaken from "../assets/profile_1.png";
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
import Python from "../assets/python.png";
import Neo from "../assets/Neo4j.png";
import Tailwind from "../assets/tailwind.jpeg";
import TechCard from "./TechCard";
import Experience from "./Experience";
import Connect from "./Connect";
import Kube from "../assets/Kube.png";
import Grpc from "../assets/Grpc.png";
import Go from "../assets/Go.png";

const ImagesCard = [
  {
    src: Go,
  },
  {
    src: Grpc,
  },
  { src: TS },
  { src: JS },
  { src: Python },
  { src: HTML },
  { src: CSS },
  { src: ReactImg },
  { src: ReduxImg },
  { src: Tailwind },
  { src: NodeJS },
  {
    src: ExpressJS,
  },
  {
    src: Postgres,
  },
  {
    src: MongoDB,
  },
  {
    src: Neo,
  },
  {
    src: Docker,
  },
  {
    src: AWS,
  },
  {
    src: GCP,
  },
  {
    src: Kube,
  },
];

export default function Home() {
  return (
    <>
      <h1 className="font-bold text-4xl md:mb-4 lg:mb-8 mb-2 tracking-tighter">
        hello, I am vipul
      </h1>
      <section>
        <p className="prose prose-neutral dark:prose-invert">
          I am professional software engineer with over five years of work
          experience. I am pursuing my master's in computer science at Portland
          State University, and I'm expected to graduate in March 2025.
          Currently, I am Software Engineer Intern at
          <span className="not-prose px-2 h-12">
            <a
              href="https://www.conductorone.com/"
              target="_blank"
              rel="noreferrer"
              className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-2 text-neutral-900 dark:text-neutral-100 no-underline"
            >
              ConductorOne
            </a>
          </span>
          in Portland focussing on distributed systems and security. I am always
          on pursuit to solve engineering problems and with previous experience
          as a Senior Software Engineer at
          <span className="not-prose px-2">
            <a
              href="https://themoderndatacompany.com/"
              target="_blank"
              rel="noreferrer"
              className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-2 text-neutral-900 dark:text-neutral-100 no-underline"
            >
              The Modern Data Company
            </a>
          </span>
        </p>
      </section>
      <section>
        <div className="columns-2 sm:columns-3 gap-4 my-8">
          <div class="relative lg:h-40 sm:h-20 lg:mb-4 mb-2 lg:mt-16 mt-4 ">
            <img
              alt="My Hike in portland"
              className="rounded-lg object-cover"
              src={Newphototaken}
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
            {ImagesCard.map((card, id) => (
              <TechCard key={id} cardImage={card.src} />
            ))}
          </div>
        </div>
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Connect />
      </section>
    </>
  );
}
