/** @format */

import Link from "next/link";

const homeClassnames = {
  container: "p-4 sm:ml-64",
  ulist: "flex flex-col w-full items-center justify-center m-auto p-20",
  listItem: "mb-3 bg-blue-200 text-blue-900 p-2 rounded",
};

export default function Home() {
  return (
    <div className={homeClassnames.container}>
      <ul className={homeClassnames.ulist}>
        <li className={homeClassnames.listItem}>
          <Link href="/A">Assignment A</Link>
        </li>
        <li className={homeClassnames.listItem}>
          <Link href="/B">Assignment B</Link>
        </li>
        <li className={homeClassnames.listItem}>
          <Link href="/C">Assignment C</Link>
        </li>
      </ul>
    </div>
  );
}
