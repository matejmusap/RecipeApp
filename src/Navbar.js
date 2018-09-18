import React, {Component} from "react";
import PropTypes from "prop-types";
import "./Navbar.css";

class Navbar extends Component {
    static defaultProps = {
        onNewRecipe() {}
    }
    static propTypes = {
        onNewRecipe: PropTypes.func
    }
    render() {
        return (
            <header>
                <h2><a>RecipeApp</a></h2>
                <nav>
                    <li><a onClick={this.props.onNewRecipe}>New recipe</a></li>
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </nav>
            </header>
        )
    }
}

export default Navbar;