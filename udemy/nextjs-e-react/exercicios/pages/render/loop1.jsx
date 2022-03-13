export default function loop1() {
    const approvedNames = [
        'João',
        'Maria',
        'Ana',
        'Bia',
        'Carlos',
        'Daniel',
        'Laura'
    ]

    function renderList() {
        return approvedNames.map((name, index) => <li key={index}>{name}</li>)
    }

    return (
        <div>
            <ul>
                {renderList()}
            </ul>
        </div>
    )
}