import Recents from "./components/Recents";
import TopCards from "./components/TopCards";
import Layout from "./layouts/LayoutWithSidebar";

export default function MyApp({}) {
  return (
    <>
      <Layout>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 ">
          <TopCards />
          <Recents />
        </div>
      </Layout>
    </>
  );
}
