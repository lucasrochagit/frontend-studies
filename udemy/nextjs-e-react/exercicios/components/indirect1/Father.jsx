import Son from "./Son";

export default function Father(props) {

    function talkToMe(param1, param2, param3) {
        console.log(param1, param2, param3)
    }

    return (
        <div>
            <Son talkToMe={talkToMe}/>
        </div>
    )
}