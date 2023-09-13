import getUsers from "../actions/getUsers";
import Sidebar from "../components/sidebar/Sidebar";

export default async function UsersLayout({ children }: { children: React.ReactNode }) {
  const users = await getUsers();

  return (
    // @ts-expect-error Server Component
    <Sidebar>
      <div className="h-full">{children}</div>
    </Sidebar>
  );
}