import House from "./House";
import styles from '../styles/Line.module.css'

export default function Line(props) {
    return (
        <div className={styles.line}>
            <House isBlack={props.startsWithBlack}/>
            <House isBlack={!props.startsWithBlack}/>
            <House isBlack={props.startsWithBlack}/>
            <House isBlack={!props.startsWithBlack}/>
            <House isBlack={props.startsWithBlack}/>
            <House isBlack={!props.startsWithBlack}/>
            <House isBlack={props.startsWithBlack}/>
            <House isBlack={!props.startsWithBlack}/>
        </div>
    )
}