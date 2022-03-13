import styles from '../styles/Home.module.css'
import House from "../components/House";

export default function Home() {
    return (
        <div className={styles.container}>
            <House />
        </div>
    )
}
