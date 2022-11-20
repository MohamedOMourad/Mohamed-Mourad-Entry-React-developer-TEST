import { Component } from "react";
import Logo from "./Logo/Logo";
import Navigation from "./Navigation/Navigation";
import styles from './Header.module.css'
import CurrencySwitcher from './Actions/CurrencySwitcher/CurrencySwitcher';
import CartIcon from "./Actions/CartIcon/CartIcon";
export class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <Navigation />
                <Logo />
                <div className={styles.actions}>
                    <CurrencySwitcher />
                    <CartIcon />
                </div>
            </header>
        )
    }
}

export default Header;