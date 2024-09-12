import React, { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Report from '../containers/ai-report/components/Report';
import ReportPage from '../containers/ai-report/ReportPage';
import LoginPage from '../components/Login/Login';

const PagesRoute = ({ slug }) => {
  const [reportData, setReportData] = useState(null);

  useEffect(() => {
    const dataFromCookie = Cookies.get('parametricScores');
    if (dataFromCookie) {
      setReportData(JSON.parse(dataFromCookie));
    }
  }, []);

  const pageComponents = {
    "login": () => <LoginPage/>,
    "report": () => <ReportPage data={reportData} />,
  };

  const SelectedPage = pageComponents[slug] || (() => <div>Page Not Found</div>);

  return <SelectedPage />;
};

export async function getServerSideProps(ctx) {
  const { query } = ctx;
  return {
    props: {
      slug: query?.slug || 'default',
    },
  };
}

export default PagesRoute;
