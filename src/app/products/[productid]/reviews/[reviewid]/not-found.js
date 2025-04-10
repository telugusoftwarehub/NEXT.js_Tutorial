"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    const productid = pathname.split("/")[2];
    const reviewid = pathname.split("/")[4];

    return <h1>Product {productid } Review {reviewid} Not Found</h1>;
}