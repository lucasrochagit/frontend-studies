import styles from "./integration2.module.css"

export default function integration2() {
    return (
        <div id={styles.integration2}>
            <div className={styles.red}>Text #01</div>
            <br/>
            <div className={styles.blue}>Text #02</div>
            <br/>
            <div className={styles.white}>Text #03</div>
            <br/>
        </div>
    )
}