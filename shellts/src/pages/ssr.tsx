import Link from "next/link";
import { Li } from "@/components/app.style";

export default function Ssr() {
  return (
    <div
      key="ssr"
      style={{
        padding: "1rem",
        borderRadius: "0.25rem",
        border: "4px dashed #fc451e",
      }}
    >
      <h1>Module Federation Example: Next.JS App Shell(SSR)</h1>
      <ul>
        <Li>
          <Link href="/">Nested Remote</Link>
        </Li>
        <Li>
          <Link href="/apollo">Apollo Cache Sharing</Link>
        </Li>
        <Li>
          <Link href="/route">Route Sharing</Link>
        </Li>
        <Li>
          <Link href="/ssr">SSR Page</Link>
        </Li>
      </ul>
    </div>
  );
}
