import { volumes } from "@/lib/data";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";

export default function MovieSite() {
  const router = useRouter();
  const { volumeSlug } = router.query;
  const currentMovie = volumes.find((volume) => volume.slug === volumeSlug);

  if (!currentMovie) {
    return (
      <h2>
        Site not Found, go back{" "}
        <div>
          <Link href="/"> Back to Start </Link>
        </div>
      </h2>
    );
  }

  const { title, description, cover, books } = currentMovie;

  const currentIndex = volumes.findIndex(
    (volume) => volume.slug === volumeSlug
  );
  const nextVolume = volumes[currentIndex + 1];
  const prevVolume = volumes[currentIndex - 1];

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        <li>
          {books[0].ordinal}: {books[0].title}
        </li>
        <li>
          {books[1].ordinal}: {books[1].title}
        </li>
      </ul>
      <Image src={cover} width={140} height={230} alt={title} />
      <div>
        <Link href="/">← all Volumes</Link>
      </div>
      {nextVolume && (
        <div>
          <Link href={`/volumes/${nextVolume.slug}`}>Next Volume</Link>
        </div>
      )}
      {prevVolume && (
        <div>
          <Link href={`/volumes/${prevVolume.slug}`}>Previous Volume</Link>
        </div>
      )}
    </>
  );
}
