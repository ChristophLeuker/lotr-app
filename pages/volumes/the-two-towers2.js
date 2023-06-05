import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TheTwoTowers() {
  return (
    <>
      <h1>{volumes.find(({ slug }) => slug === "the-two-towers").title}</h1>
      <p>{volumes[1].description}</p>
      <ul>
        <li>
          {volumes[1].books[0].ordinal}: {volumes[1].books[0].title}
        </li>
        <li>
          {volumes[1].books[1].ordinal}: {volumes[1].books[1].title}
        </li>
      </ul>
      <Image
        src={volumes[1].cover}
        width={140}
        height={230}
        alt="Cover of The Two Towers"
      />
      <div>
        <Link href="/">← all Volumes</Link>
      </div>
      <div>
        <Link href="the-fellowship-of-the-ring">Last Volume</Link>
      </div>
      <div>
        <Link href="the-return-of-the-king">Next Volume</Link>
      </div>
    </>
  );
}
