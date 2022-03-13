import Style from "../../components/Style";

export default function usingStyle() {
    return (
        <div>
            <h1>Page usingStyle</h1>
            <Style number={3} color={'#000'}/>
            <Style number={-13} color={'#FFF'} right={true}/>
        </div>
    )
}