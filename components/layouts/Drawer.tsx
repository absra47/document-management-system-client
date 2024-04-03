import { Button } from "@/components/ui/button";
import { IoFileTray } from "react-icons/io5";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface IPage {
  name: string;
  icon: JSX.Element;
  showBadge: boolean;
  path: string;
  count: number | null;
}
const primaryRoutes: IPage[] = [
  {
    name: "ገቢ ደብዳቤዎች",
    icon: <IoFileTray className="w-5 h-5" />,
    showBadge: true,
    path: "/",
    count: 10,
  },
  {
    name: "የተላኩ ደብዳቤዎች",
    icon: <IoFileTray className="w-5 h-5" />,
    showBadge: false,
    path: "/",
    count: null,
  },
  {
    name: "ረቂቆች",
    icon: <IoFileTray className="w-5 h-5" />,
    showBadge: true,
    path: "/",
    count: 3,
  },
  {
    name: "በማህደር የተቀመጠ",
    icon: <IoFileTray className="w-5 h-5" />,
    showBadge: false,
    path: "/",
    count: null,
  },
  {
    name: "መጣያ",
    icon: <IoFileTray className="w-5 h-5" />,
    showBadge: false,
    path: "/",
    count: null,
  },
];

export default function Drawer() {
  return (
    <aside className="w-64">
      <nav className="flex flex-col gap-2 w-full">
        {primaryRoutes.map(({ name, icon, showBadge, path }) => (
          <Link key={crypto.randomUUID()} href={path}>
            <Button className="flex gap-2 bg-transparent text-gray-900 w-full hover:bg-gray-200 justify-start">
              {icon}
              {name}
              {showBadge ? (
                <Badge className="ml-auto bg-gray-50 text-gray-900 hover:bg-inherit">
                  10
                </Badge>
              ) : null}
            </Button>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
