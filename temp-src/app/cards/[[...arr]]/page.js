export default function Cards({params}) {
    const { arr } = params;
    return <h1>Cards {arr[0]} {arr[1]} {arr[2]}</h1>;
}