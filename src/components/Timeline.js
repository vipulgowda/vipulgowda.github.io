import ModernLogo from "../assets/TMDC.png";
import GrantThornton from "../assets/GrantThornton.jpg";
import NTTDATA from "../assets/ntt_data.png";

const Timeline = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-4 mb-8">
        <div className="col-span-2 lg:col-span-1">
          <img
            className="p-4 h-30 w-40 rounded-full"
            src={ModernLogo}
            alt="modern data logo"
          />
        </div>
        <div className="col-span-4 lg:col-span-5">
          <h3 className="lg:text-lg text-md not-prose px-2 h-12 p-4">
            The Modern Data Company
          </h3>
          <div className="flex justify-between">
            <h4 className="pl-2 text-xs lg:text-base">Senior Software Engineer</h4>
            <p className="italic text-xs ">Oct 2021 - Sept 2023</p>
          </div>
        </div>
        <div className="col-span-6 lg:ml-32">
          <p>
            I was working towards building accessible Data Platforms for
            business users and data analysts. During my tenure I have worked
            with product managers and design team to build data applications. As
            an early startup, I was given ownership of designing and building
            data products. I got an opportunity to lead a team to develop User
            Interface for workbench, data dashboards, creating workflows in the
            frontend and build editors for SQL and Neo4j. Held few internal tech
            talks on CSS stylesheets and bundling systems. Involved with
            Engineering team to collaborate on design and tradeoff decision.
            Published VS code extensions which primarily helped data engineers
            write YAML file. The extension provided prefilled templates with
            options to reduce the development process. Deployed npm library to
            unify SSO authentication for The Modern Data apps. This reduced the
            sign in process for customers and developers could integrate the
            library with required configs.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 mb-8 mt-8">
        <div className="col-span-2 lg:col-span-1">
          <img
            className="p-4 h-30 w-40 rounded-full"
            src={GrantThornton}
            alt="modern data logo"
          />
        </div>
        <div className="col-span-4 md:col-span-5">
          <h3 className="lg:text-lg text-md not-prose px-2 h-12 p-4">
            Grant Thornton
          </h3>
          <div className="flex justify-between">
            <h4 className="pl-2 text-xs lg:text-base">Software Engineer</h4>
            <p className="italic text-xs ">Jan 2021 - Oct 2021</p>
          </div>
        </div>
        <div className="col-span-6 lg:ml-32">
          <p>
            I was working with business consultants to provide supply chain platform which was integrated with Hyperledger-fabric blockchain solution. Primarily I was involved in building REST APIs and create new user interface features. Technically I worked on databases to create tables, functions and procedures. Worked few times as data analyst to run few queries in database and fetch reports to business teams. Redesigned complete UI using Sass stylesheets and migrated react code to typescript. Wrote unit test cases to check different scenarios of inputs.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-6 gap-4 mb-8">
        <div className="col-span-2 lg:col-span-1">
          <img
            className="p-4 h-30 w-30 rounded-full"
            src={NTTDATA}
            alt="ntt data logo"
          />
        </div>
        <div className="col-span-4 md:col-span-5">
          <h3 className="lg:text-lg text-md not-prose px-2 h-12 p-4">
            NTT Data
          </h3>
          <div className="flex justify-between">
            <h4 className="pl-2 text-xs lg:text-base">Software Engineer</h4>
            <p className="italic text-xs ">Oct 2018 - Jan 2021</p>
          </div>
        </div>
        <div className="col-span-6 lg:ml-32">
          <p>
            As new Software engineer fresh out of graduation, I was given tasks to learn bash, SQL, python and javascript. My work involved creating bash scripts and connect to remote servers and run SQLs to generate reports for stakeholders. Learnt a bunch of stuff and coordinated with other teams and onshore team members to lay down business requirements and convert it into technical documents. I was given a chance to work on frontend internal tool which provided path towards UI development for subsequent journey. Interacted with other team members to work on critical projects such GDPR, Security Compliance.
          </p>
        </div>
      </div>
    </>
  );
};

export default Timeline;
