/** @format */

import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li className="mb-3 bg-blue-200 text-blue-900 p-2 rounded">
        <Link href="/A">Assignment A</Link>
      </li>
      <li className="mb-3 bg-blue-200 text-blue-900 p-2 rounded">
        <Link href="/B">Assignment B</Link>
      </li>
      <li className="mb-3 bg-blue-200 text-blue-900 p-2 rounded">
        <Link href="/C">Assignment C</Link>
      </li>
    </ul>
  );
}
