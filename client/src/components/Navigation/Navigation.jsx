import styles from "./navigation.module.css"
export default function Navigation(){
    return (
        <header>
        <div className={styles["nav"]}>
            <div class="logo">
                <a href="">Movie <span>Mania</span></a>
            </div>
            <nav>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Movies</a></li>
                    <li><a href="">Add Movie</a></li>
                    <li><a href="">Login</a></li>
                    <li><a href="">Register</a></li>
                    <li><a href="">Logout</a></li>
                </ul>
            </nav>
        </div>
    </header>
    )
}