import Image from "next/image";
import Link from "next/link";
import SectionTitle from "./components/SectionTitle";

export default function Home() {
  return (
    <>
    <section className="">
      <Link href="/">
        <Image alt="home-image" src="https://fabrilife.com/images/homepage/699697fc42e7a-m4qkj1khpdo82sm7pdqjtctuvplfvubogv8rrixb.jpg" width={1024} height={500} />
      </Link>
    </section>
    <section>
      <SectionTitle />
    </section></>
  );
}
