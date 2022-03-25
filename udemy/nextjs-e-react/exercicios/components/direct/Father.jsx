import Son from "./Son";

export default function Father(props) {
    return (
        <div>
            <h1>Família {props.family}</h1>
            <Son name={'Pedro'} family={props.family}/>
            <Son name={'João'} family={props.family}/>
            <Son name={'Carlos'} family={props.family}/>
            <Son name={'Carlos'} {...props} /> {/* se props tiver name, o name Carlos será sobrescrito*/}
            <Son {...props} name={'Carlos'}/> {/* mesmo que props tenha name, o nome carlos não será sobrescrito */}
        </div>
    )
}