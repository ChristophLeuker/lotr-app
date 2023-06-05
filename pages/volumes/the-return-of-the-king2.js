import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TheReturnOfTheKing() {
  return (
    <>
      <h1>
        {volumes.find(({ slug }) => slug === "the-return-of-the-king").title}
      </h1>
      <p>{volumes[2].description}</p>
      <ul>
        <li>
          {volumes[2].books[0].ordinal}: {volumes[2].books[0].title}
        </li>
        <li>
          {volumes[2].books[1].ordinal}: {volumes[2].books[1].title}
        </li>
      </ul>
      <Image
        src={volumes[2].cover}
        width={140}
        height={230}
        alt="Cover of The Return of the King"
      />
      <div>
        <Link href="/">← all Volumes</Link>
      </div>
      <div>
        <Link href="the-two-towers">Last Volume</Link>
      </div>
    </>
  );
}
