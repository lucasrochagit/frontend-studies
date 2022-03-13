import styles from '../styles/House.module.css'

export default function House(props) {
    return (
        <div
            className={styles.house}
            style={{ backgroundColor : props.isBlack ? '#000' : '#fff'}}
        >
        </div>
    )
}