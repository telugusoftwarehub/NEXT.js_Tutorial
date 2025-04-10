export default function ProductDetails({ params }) {
    const { productid } = params;
    
    return <h1> Product Details {productid}</h1>
}