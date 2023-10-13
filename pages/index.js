import Link from "next/link";

const HomePage = () => {
    return <>
        <img src="/images/nextjs-logo.webp" alt="NEXT.js Logo" />
        <h1> Hello World! </h1>
        <Link href="/innerPages/aboutus"> About Us </Link>
    </>
}

export default HomePage;