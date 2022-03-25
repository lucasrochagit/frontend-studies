export default function OnlyEven(props) {
    const {num} = props;
    const isEven = num % 2 === 0
    return (
        <div>
            {
                isEven
                    ? <h1>{num}</h1>
                    : null
            }
        </div>
    )
}