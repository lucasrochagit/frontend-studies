export default function Button() {
    function action2() {
        console.log('action2')
    }

    function action5(e) {
        console.log(e)
    }

    return (
        <div>
            <h1>Page Button</h1>
            <button onClick={action1}>Click #01</button>
            <button onClick={action2}>Click #02</button>
            <button onClick={function () {
                console.log('action3')
            }}>Click #03
            </button>
            <button onClick={() => console.log('action4')}>Click #04</button>
            <button onClick={action5}>Click #05</button>
            <button onClick={e => action5(e.altKey)}>Click #05 v2</button>
            <div>
                <input type={'text'} onChange={e => console.log(e.target.value)}/>
            </div>
        </div>
    )
}

function action1() {
    console.log('action1')
}