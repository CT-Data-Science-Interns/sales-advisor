type CompanyStatusData = {
  total: number;
  visited: number;
  notVisited: number;
  ongoing: number;
};

const ProgressBar = ({
  companyStatusData,
}: {
  companyStatusData: CompanyStatusData;
}) => {
  return (
    <div className="mb-8 grid gap-6 md:grid-cols-2">
      <div className="rounded-lg p-6 shadow">
        <h5 className="pb-6 text-xl font-bold text-gray-900 dark:text-white">
          Visit Progress
        </h5>
        <div id="pie-chart"></div>
        <div className="mt-4 grid grid-cols-4 gap-2">
          <div>
            <div className="text-center text-sm text-gray-600 dark:text-gray-300">
              Total
            </div>
            <div className="text-center text-3xl text-gray-600 dark:text-gray-300">
              {companyStatusData?.total}
            </div>
          </div>
          <div>
            <div className="text-center text-sm text-gray-600 dark:text-gray-300">
              Visited
            </div>
            <div className="text-center text-3xl text-gray-600 dark:text-gray-300">
              {companyStatusData?.visited}
            </div>
          </div>
          <div>
            <div className="text-center text-sm text-gray-600 dark:text-gray-300">
              Not Visited
            </div>
            <div className="text-center text-3xl text-gray-600 dark:text-gray-300">
              {companyStatusData?.notVisited}
            </div>
          </div>
          <div>
            <div className="text-center text-sm text-gray-600 dark:text-gray-300">
              Ongoing
            </div>
            <div className="text-center text-3xl text-gray-600 dark:text-gray-300">
              {companyStatusData?.ongoing}
            </div>
          </div>
        </div>
        {/* Progress Value */}
        {companyStatusData && (
          <div className="mt-4">
            Progress:{" "}
            {(
              (companyStatusData.visited / companyStatusData.total) *
              100
            ).toFixed(2)}
            %
          </div>
        )}
      </div>
      {/* Remaining code */}
    </div>
  );
};

export default ProgressBar;
