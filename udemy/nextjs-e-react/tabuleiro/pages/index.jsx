import styles from '../styles/Home.module.css'
import Line from "../components/Line";
import Chessboard from "../components/Chessboard";

export default function Home() {
    return (
        <div className={styles.container}>
           <Chessboard />
        </div>
    )
}
