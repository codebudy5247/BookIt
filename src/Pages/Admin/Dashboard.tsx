import Layout from "../../components/Admin/Layout";
import Header from "../../components/Admin/Header";
import Widget from "../../components/Admin/Widget";
import SalesStats from "../../components/Admin/SalesStats";
import Review from "../../components/Admin/Review";
const Dashboard = () => {
  return (
    <Layout>
      <Header />
      <div className="md:flex gap-10">
      <div className="md:w-8/12 grow">
        <Widget />
        <SalesStats />
      </div>
      <div className="md:w-4/12 grow">
        <Review />
      </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
