export default function Style(props) {
    return (
        <div>
            <h1 style={{
                backgroundColor: props.number >= 0 ? '#2D2' : '#D22',
                color: props.color,
                textAlign: props.right ? "right" : "left"
            }}>
                Page Style
            </h1>
            <h2 className={props.number >= 0 ? 'blue' : 'red'}>
                Text #02
            </h2>
        </div>
    )
}