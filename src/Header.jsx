import React from 'react';
import styles from './Header.module.css';

// Header component
function Header(props) {
    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <h1 className={styles.logo}>Beat Store</h1>
                <input type="text" placeholder="Filter" onChange={props.handleFilter} />
                <button className={styles.button}>Search</button>
            </nav>
        </header>
    );
}

export default Header;
