export default function Title(props) {
    return (
        props.small ?
            <>
                <h5>{props.main}</h5>
                <h6>{props.secondary}</h6>
            </> :

            <>
                <h1>{props.main}</h1>
                <h2>{props.secondary}</h2>
            </>
    )
}