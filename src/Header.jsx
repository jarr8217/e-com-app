import React from 'react';
import styles from './Header.module.css';

// Header component
function Header(props) {
    return (
<header className={styles.header}>
        <nav className={styles.nav}>
            <h1 className={styles.brand}>Beat Store</h1>
            <input type="text" onChange={props.handleFilter} value={props.searchTerm} onKeyDown={props.handleKeyPress} placeholder="Search beat list"/>
            <button className={styles.button} onClick={props.handleSearch}>Search</button>
        </nav>
    </header>
);

}

export default Header;
