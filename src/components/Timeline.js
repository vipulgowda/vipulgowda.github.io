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
            I played a key role in enhancing the efficiency of SQL query writing
            by implementing a web-based SQL editor featuring an autocomplete
            feature. This initiative resulted in a significant 50% reduction in
            the time required for crafting SQL queries. Additionally, I
            collaborated with product managers to develop a proof of concept
            (POC) for a data security tool, leveraging Role-Based Access Control
            (RBAC) strategies to define roles and permissions. Within the data
            catalog platform, I contributed to the system's metadata
            accessibility by creating filters and implementing a logging
            mechanism. This effort aimed to streamline the extraction of
            critical information from the platform. To improve the Single
            Sign-On (SSO) authentication process across data platforms, I
            successfully deployed the "modern-auth" npm library. This
            implementation not only achieved a commendable 30% reduction in
            authentication development time but also ensured a consistent and
            seamless authentication experience across different data platforms.
            In order to fortify the development pipeline against potential
            security threats, I integrated Snyk and conducted regular dependency
            scans. This proactive approach enabled the identification and timely
            addressing of known vulnerabilities present in third-party
            libraries, thereby bolstering the overall security posture.
            Furthermore, as part of the development process, I performed static
            code analysis using ESLint. This comprehensive analysis helped
            identify and address security issues early in the development
            lifecycle, contributing to a more secure and robust codebase.
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
            I significantly optimized data analysis processes by
            implementing data visualization dashboards using D3.js. These
            dashboards were designed to analyze orders and shipments, leading to
            an impressive 80% reduction in the manual workload associated with
            data analysis. Additionally, I took the initiative to develop and
            deploy a front-end map visualization tool aimed at enhancing the
            real-time monitoring efficiency and logistics coordination of orders
            and shipments. This implementation proved instrumental in improving
            overall operational visibility and coordination. To ensure the
            robust security of our systems, I actively engaged in dynamic
            testing using the OWASP ZAP tool. This approach involved simulating
            real-world cyber-attacks to uncover potential security weaknesses.
            By adopting this proactive testing strategy, I contributed to the
            identification and subsequent mitigation of vulnerabilities,
            reinforcing the security posture of the system.
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
            I played a key role in enhancing the efficiency and security of our
            database transactions. I developed Python scripts to generate logs
            for these transactions and implemented PGP encryption for secure
            archival. This initiative not only ensured comprehensive tracking of
            database activities but also improved the security of sensitive
            transactional data. To streamline the debugging process and enhance
            flexibility, I further contributed by developing bash scripts. These
            scripts were designed to facilitate the debugging of logs and
            seamlessly integrate with configuration files for dynamic use cases.
            This approach not only improved the overall debugging efficiency but
            also provided adaptability to different scenarios. In addition to my
            technical contributions, I collaborated closely with
            cross-functional teams to troubleshoot and debug the billing and
            discounting system. Through effective teamwork, we successfully
            identified and rectified issues, leading to substantial improvements
            in the overall performance of the system. This collaborative effort
            underscored my commitment to delivering solutions that positively
            impact system functionality and user experience.
          </p>
        </div>
      </div>
    </>
  );
};

export default Timeline;
