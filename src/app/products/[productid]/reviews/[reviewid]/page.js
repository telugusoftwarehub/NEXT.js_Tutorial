import { notFound } from "next/navigation";

export default function ProductReviewPage({params}) {
  const {productid, reviewid} = params;

  if(parseInt(reviewid) === 101) {
    notFound();
  }

  return <h1>Product {productid} Review {reviewid } Page</h1>;
}