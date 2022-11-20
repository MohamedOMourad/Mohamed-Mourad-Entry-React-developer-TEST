import { Component } from "react";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation";
import styles from './Header.module.css'
import CurrencySwitcher from './Actions/CurrencySwitcher/CurrencySwitcher';
export class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <Navigation />
                <Logo />
                <CurrencySwitcher />
            </header>
        )
    }
}

export default Header;