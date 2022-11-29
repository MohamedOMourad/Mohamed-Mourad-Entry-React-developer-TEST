//React Component
import { Component } from "react";

//CSS
import styles from './Logo.module.css';

//Logo
import logo from '../../../assets/a-logo.svg';

export class Logo extends Component {
    render() {
        return <img className={styles.logo} src={logo} alt="logo"></img>
    }
}

export default Logo;