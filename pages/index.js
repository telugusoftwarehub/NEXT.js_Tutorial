import Link from "next/link";
import  {useRouter} from "next/router"
import { useEffect, useState } from "react";

const HomePage = () => {
    const router = useRouter();
    // const { id } = router.query;

    const [userInfo, setUserInfo] = useState([]);

    useEffect(async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await res.json();
        console.log(posts);
        setUserInfo(posts);
    }, [])

    return <>
        <img src="/images/nextjs-logo.webp" alt="NEXT.js Logo" />
        <h1> Hello World! </h1>
        <Link href="/innerPages/aboutus"> About Us </Link>

        <table>
            <tr>
                <td>ID</td>
                <td>USER ID</td>
                <td>TITLE</td>
                <td>DESCRIPTION</td>
           </tr>
            {
                userInfo && userInfo.map((item, key) => {
                    return (
                        <tr>
                            <td>{item.id}</td>
                            <td>{item.userId}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                        </tr>
                    )
                })
            }
        </table>
    </>
}

export default HomePage;