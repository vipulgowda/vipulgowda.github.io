export default function Projects() {
  return (
    <div class="grid gap-8 p-4">
      <div class="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div class="p-6">
          <p class="text-gray-800">
            <a
              href="https://github.com/vipulgowda/Data-Engineering"
              target="_blank"
              rel="noreferrer"
              class="text-blue-600 hover:underline"
            >
              Trimet Transit Operations Analysis
            </a>
          </p>
          <ul class="list-disc list-inside space-y-4 mt-4 text-gray-700 leading-relaxed">
            <li>
              Engineered a robust data pipeline on Google Cloud Platform (GCP)
              utilizing virtual machines and Pub/Sub for real-time processing of
              over 1 million GPS and stop event records daily, enhancing public
              transit efficiency.
            </li>
            <li>
              Automated virtual machine scheduling and cron jobs to align with
              processing demands, reducing operational costs by 20% while
              maintaining high availability and reliability of data services.
            </li>
            <li>
              Implemented Python-based scripts with asynchronous data fetching
              (using aiohttp) and processing, achieving a 30% reduction in data
              latency and ensuring real-time data integration.
            </li>
          </ul>
          <div class="text-gray-800">
          <p class="text-sm text-gray-500 mt-2">Tech stack: Python, PostgreSQL, GCP, Pub/Sub</p>
          </div>
        </div>
      </div>

      <div class="max-w-lg mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div class="p-6">
          <p class="text-gray-800">
            <a
              href="https://final-453j6mi67a-uw.a.run.app/"
              target="_blank"
              rel="noreferrer"
              class="text-blue-600 hover:underline"
            >
              AI-powered Receipt Analysis
            </a>
          </p>
          <ul class="list-disc list-inside space-y-4 mt-4 text-gray-700 leading-relaxed">
            <li>
              Developed AI scanner, a receipt analysis tool integrating google
              cloud vision and gemini LLM APIs, achieving 95% accuracy in
              receipt data extraction and interpretation.
            </li>
            <li>
              Designed a microservices architecture on google cloud platform,
              leveraging google cloud run for serverless container deployment
              and docker for encapsulating application dependencies.
            </li>
            <li>
              Streamlined data storage solutions using google cloud storage,
              optimizing data retrieval and storage efficiency for high-volume
              receipt data.
            </li>
          </ul>
          <div class="text-gray-800">
          <p class="text-sm text-gray-500 mt-2">Tech stack: Python, Flask, GCP, Cloud Vision API, Gemini Pro API</p>
          </div>
        </div>
      </div>
    </div>
  );
}
