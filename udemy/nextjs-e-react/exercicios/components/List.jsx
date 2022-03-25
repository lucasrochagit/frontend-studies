import Item from "./Item";

export default function List(props) {
    return (
        <div>
            <h1>List of Something</h1>
            <ul style={{listStyle: 'none', padding: 0}}>
                {props.children}
            </ul>
        </div>
    )
}