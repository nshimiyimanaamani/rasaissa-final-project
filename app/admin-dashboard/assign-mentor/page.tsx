import getAssigned from "@/app/actions/getAssigns";
import AssignMentor from "../components/AssignMentor";
import Layout from "../layouts/LayoutWithSidebar";
import getMentors from "@/app/actions/getMentors";
import getStudents from "@/app/actions/getStudents";

export default  async function MyApp({}) {
  const assigned = await getAssigned();
  const mentors = await getMentors();
  const students = await getStudents();

  return (

  // @ts-expect-error Server Component

    <>
      <Layout>
        <div>
          <AssignMentor 
          assigns={assigned}
          mentors={mentors}
          students={students}/>
        </div>
      </Layout>
    </>
  );
}
