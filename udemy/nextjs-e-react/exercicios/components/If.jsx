export default function If(props) {
    const {test} = props
    return (
        <div>
            {test ? props.children : null}
        </div>
    )
}