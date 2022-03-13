import House from "./House";
import styles from '../styles/Line.module.css'

export default function Line(props) {
    return (
        <div className={styles.line}>
            <House isBlack={false}/>
            <House isBlack={true}/>
            <House isBlack={false}/>
            <House isBlack={true}/>
            <House isBlack={false}/>
            <House isBlack={true}/>
            <House isBlack={false}/>
            <House isBlack={true}/>
        </div>
    )
}