import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiChat } from "react-icons/hi";
import {
  HiArrowLeftOnRectangle,
  HiBookmarkSquare,
  HiUsers,
} from "react-icons/hi2";
import { MdQuiz } from "react-icons/md";
import useConversation from "./useConversation";

const useRoutes = () => {
  const pathname = usePathname();
  const { conversationId } = useConversation();

  const routes = useMemo(
    () => [
      {
        label: "Chat",
        href: "/conversations",
        icon: HiChat,
        active: pathname === "/conversations" || !!conversationId,
      },
      {
        label: "Users",
        href: "/users",
        icon: HiUsers,
        active: pathname === "/users",
      },
      {
        label: "Performance test",
        href: "/performance-test",
        icon: MdQuiz,
        active: pathname === "/performance-test",
      },
      {
        label: "Students",
        href: "/conversations/students",
        icon: HiUsers,
        active: pathname === "/conversations/students",
      },
      {
        label: "Quizlet",
        href: "/quizlet",
        icon: MdQuiz,
        active: pathname === "/conversations/quizlet",
      },
      {
        label: "Marks",
        href: "/conversations/marks",
        icon: HiBookmarkSquare,
        active: pathname === "/conversations/marks",
      },
      {
        label: "Logout",
        onClick: () => signOut(),
        href: "#",
        icon: HiArrowLeftOnRectangle,
      },
    ],
    [pathname, conversationId]
  );

  return routes;
};

export default useRoutes;
