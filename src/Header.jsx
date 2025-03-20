import styles from "./Header.module.css";


// Header component
function Header(props) {
    return (<header className={styles.header}>
        <nav className={styles.nav}>
            <h1 className={styles.logo}>Beat Store</h1>
            <input type="text" placeholder="Search beats" className={styles.search} />
            <button className={styles.button}>Search</button>
        </nav>
    </header>);
}




export default Header;
