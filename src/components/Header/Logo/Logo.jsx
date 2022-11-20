import { Component } from "react";
import styles from './Logo.module.css'
import logo from '../../../assets/a-logo.svg'
export class Logo extends Component {
    render() {
        return <img className={styles.logo} src={logo} alt="logo"></img>
    }
}

export default Logo;