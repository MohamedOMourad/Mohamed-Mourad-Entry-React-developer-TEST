import { Component } from "react";
import { getCategories } from "../../../utils/graphql";
import styles from './Navigation.module.css'
export class Navigation extends Component {

    constructor(props) {
        super(props);
        this.state = { categories: [] }
    }

    componentDidMount() {
        try {
            (async () => {
                const categories = await getCategories();
                this.setState({ categories })
            })()
        } catch (error) {
            console.log(error);
        }
    }

    render() {
        const { categories } = this.state;
        return (
            <nav className={styles['header__navigation']}>
                <ul className={styles['nav-list']}>
                    {categories.map(category => (
                        <li className={styles['nav-item']} key={category.name}>
                            <a className={styles['nav-item']} href={`/${category.name}`}>
                                {category.name.toUpperCase()}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        )
    }
}

export default Navigation;