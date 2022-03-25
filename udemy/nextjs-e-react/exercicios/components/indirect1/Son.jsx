export default function Son(props) {
    // Passei no ENEM!
    console.log(props.talkToMe())
    return (
        <div>
            <h1>Son #alt </h1>
            <button onClick={props.talkToMe}>Talk To Father #01</button>
            <button onClick={() => props.talkToMe('Passei no ENEM!', "Uhuuuu!")}>Talk To Father #02</button>
        </div>
    )
}