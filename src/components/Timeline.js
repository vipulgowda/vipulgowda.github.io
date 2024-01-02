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
            <h4 className="pl-2 text-xs lg:text-base">
              Senior Software Engineer
            </h4>
            <p className="italic text-xs ">Oct 2021 - Sept 2023</p>
          </div>
        </div>
        <div className="col-span-6 lg:ml-32">
          <p>
            In the landscape of data engineering, I have spearheaded numerous
            initiatives aimed at elevating both user experience and developer
            productivity. One notable project involved the development of SQL
            schema and table auto-suggestions for specific databases within the
            data workbench. This innovation was a pivotal step in enhancing the
            overall query writing experience. Recognizing the need to seamlessly
            integrate Cypher language semantics into the data workbench, I took
            the lead in implementing this feature. The result was a system that
            allowed data analysts to write Cypher queries effortlessly,
            substantially improving their productivity and workflow efficiency.
            To bridge the gap for non-technical users, I engineered a JSON to
            Cypher Transpiler. This transformative tool converted JSON formatted
            data from the React Builder form and implemented Knowledge Graphs
            using D3.js in the front-end. The ultimate goal was to reduce the
            learning curve of Cypher, making it more accessible for individuals
            without a technical background. In the realm of authentication and
            authorization, I initiated and implemented the 'modern-auth' npm
            library. This library streamlined Single Sign-On (SSO) integrations
            across all data applications, resulting in an impressive 60%
            increase in developer productivity during the development of data
            applications. A critical optimization effort involved migrating from
            React-CRA to Vite, successfully reducing the front-end bundle size
            by a remarkable 200%. This initiative not only improved performance
            but also contributed to a more streamlined and efficient development
            process. To empower data engineers, I implemented the VSCode
            extension 'dataos-resource-yaml.' This extension significantly
            improved productivity by enabling data engineers to create YAML
            documents for data ingestion, define data storage, and create data
            models with a notable 40% increase in efficiency. Furthermore, I
            took the lead in developing a highly interactive Query Statistics
            Dashboard in the front end. This dashboard provided real-time
            tracking of compute and resource usage for queries, offering
            valuable insights to optimize and enhance the overall performance of
            our data systems.
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
            In the Supply Chain Traceability, I played a pivotal role in
            expanding interactive solution graphs utilizing Leaflet.js. This
            enhancement significantly improved visibility and transparency
            across stakeholders, providing a more comprehensive and insightful
            overview of the supply chain. Heading a team of three, I led the
            successful migration of the Web UI to a newer design. This strategic
            move not only resulted in reduced latency but also improved the time
            to interaction, contributing to better web performance. The outcome
            was a notable increase in client conversion rates, underlining the
            impact of a streamlined and user-friendly interface. Recognizing the
            need for advanced monitoring capabilities, I took the initiative to
            develop data dashboards dedicated to tracking key supply chain
            metrics. This implementation drastically reduced the need for manual
            data analysis, allowing stakeholders to access real-time insights
            efficiently. In response to the evolving needs of communication and
            alert systems, I translated email alert services from design
            documents. Introducing APIs for triggers that run during required
            events, this initiative significantly improved visibility across
            different stakeholders. The result was a more responsive and
            informed communication system, contributing to enhanced
            collaboration and decision-making within the organization.
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
            In the data management, my contributions have focused on optimizing
            efficiency, ensuring security, and maintaining the integrity of
            valuable information. One significant initiative involved the
            implementation of Data Archival scripts, resulting in a notable 20%
            reduction in active data volume. This not only streamlined access to
            less frequently used storage servers but also contributed to a
            remarkable 30% improvement in query response time, enhancing overall
            system performance. Recognizing the importance of data security and
            compliance, I took a proactive approach by implementing PGP
            encryption in scripts. This step not only achieved GDPR compliance
            standards but also ensured long-term data integrity, significantly
            reducing the risk of unauthorized access. This strategic enhancement
            underscored my commitment to safeguarding sensitive information and
            maintaining the highest standards of data protection. To continually
            optimize SQL query performance, I conducted regular assessments on
            staging servers. These assessments involved measuring query
            execution time, CPU utilization, and memory usage. The subsequent
            implementation of optimizations resulted in an impressive 25%
            reduction in average query execution time. Furthermore, these
            enhancements contributed to enhanced system stability by minimizing
            CPU and memory resource utilization, creating a more robust and
            responsive data environment. In a bid to streamline data
            import/export processes, I created automated CRON scripts. These
            scripts not only facilitated easy data management tasks but also
            incorporated tests to ensure data accuracy. The result was a notable
            30% improvement in overall data reliability, reflecting my
            commitment to maintaining high data quality standards.
          </p>
        </div>
      </div>
    </>
  );
};

export default Timeline;
