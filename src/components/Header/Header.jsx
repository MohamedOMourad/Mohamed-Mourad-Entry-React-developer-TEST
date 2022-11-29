//React Component
import { Component } from "react";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import CurrencySwitcher from './Actions/CurrencySwitcher/CurrencySwitcher';
import CartOverlay from "./Actions/cartOverlay/CartOverlay";

//CSS
import styles from './Header.module.css';

export class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <Navigation />
                <Logo />
                <div className={styles.actions}>
                    <CurrencySwitcher />
                    <CartOverlay />
                </div>
            </header>
        )
    }
}

export default Header;