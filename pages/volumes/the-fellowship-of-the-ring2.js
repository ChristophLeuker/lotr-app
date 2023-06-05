import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";

export default function TheFellowshipOfTheRing() {
  return (
    <>
      <h1>
        {
          volumes.find(({ slug }) => slug === "the-fellowship-of-the-ring")
            .title
        }
      </h1>
      <p>{volumes[0].description}</p>
      <ul>
        <li>
          {volumes[0].books[0].ordinal}: {volumes[0].books[0].title}
        </li>
        <li>
          {volumes[0].books[1].ordinal}: {volumes[0].books[1].title}
        </li>
      </ul>
      <Image
        src={volumes[0].cover}
        width={140}
        height={230}
        alt="Cover of The Fellowship of the Ring"
      />
      <div>
        <Link href="/">← all Volumes</Link>
      </div>
      <Link href="the-two-towers">Next Volume</Link>
    </>
  );
}
