import ModernLogo from "../assets/TMDC.png";
import GrantThornton from "../assets/GrantThornton.jpg";
import NTTDATA from "../assets/ntt_data.png";
import C1_logo from "../assets/conductorone_logo.jpeg";

const Timeline = () => {
  return (
    <>
      <div className="grid grid-cols-6 gap-4 mb-8">
        <div className="col-span-2 lg:col-span-1">
          <img
            className="p-4 h-30 w-40 rounded-full"
            src={C1_logo}
            alt="conductor one logo"
          />
        </div>
        <div className="col-span-4 lg:col-span-5">
          <h3 className="lg:text-lg text-md not-prose px-2 h-12 p-4">
            ConductorOne
          </h3>
          <div className="flex justify-between">
            <h4 className="pl-2 text-xs lg:text-base">
              Software Engineer - Intern
            </h4>
            <p className="italic text-xs ">June 2024 - Present</p>
          </div>
        </div>
        <div className="col-span-6 lg:ml-32">
          <p>
            Developed an advanced feature for automating access reviews with
            dynamic scoping and scheduling, leading to a $XX,XXX revenue
            increase by significantly improving operational efficiency. Engaged
            in code reviews, RFCs, RCAs, and other technical discussions to
            learn best practices for building distributed systems from
            colleagues.
          </p>
        </div>
      </div>

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
            <h4 className="pl-2 text-xs lg:text-base">
              Senior Software Engineer
            </h4>
            <p className="italic text-xs ">Oct 2021 - Sept 2023</p>
          </div>
        </div>
        <div className="col-span-6 lg:ml-32">
          <p>
            Created a JSON-to-Cypher transpiler that automated data conversion
            for the analytics team, reduced manual input errors by 30% and is
            utilized by data analysts, improving workflow efficiency
            significantly. Led a team of three to improve data workbench,
            including ER diagrams, a UI for query responses, and graph
            visualizations, to enhance data representation and user interaction.
            Developed and launched the ’modern-auth’ single sign-on (SSO) npm
            library, reducing custom SSO integration time for each application
            by 60%, enhancing developer productivity and ensuring uniform
            authentication processes across five or more applications.
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
            Created interactive dashboards for real-time supply chain
            monitoring, making it easier to track key metrics and reducing the
            need for manual data handling. Revamped the web application with new
            designs, significantly improving user experience and making the
            interface more intuitive.
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
            Implemented data archival scripts to automate the storage of data in
            the data warehouse. Enhanced security measures by implementing PGP
            encryption into critical bash scripts, ensuring the protection of
            sensitive data stored.
          </p>
        </div>
      </div>
    </>
  );
};

export default Timeline;
