import BarChart from "../components/BarChart";
import Recents from "../components/Recents";
import TopCards from "../components/TopCards";
import Layout from "../layouts/LayoutWithSidebar";

export default function MyApp({}) {
  return (
    <>
      <Layout>
        <TopCards />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 my-10">
          <BarChart />
          <Recents />
        </div>
      </Layout>
    </>
  );
}
