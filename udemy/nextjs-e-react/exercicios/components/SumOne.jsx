export default function SumOne(props) {
    // props.num++  // cannot do this because props is readonly
    return (
        <div>
            <h1>{props.num + 1}</h1>
        </div>
    )
}