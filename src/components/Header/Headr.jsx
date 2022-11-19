import { Component } from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import styles from './Header.module.css'
export class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <Navigation />
                <Logo />
            </header>
        )
    }
}

export default Header;