import React from 'react';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class NavigationMenu extends React.Component {
    container = React.createRef();
    state = {
        open: false,
    };
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                open: false,
            });
        }
    };
    
    handleButtonClick = () => {
        this.setState(state => {
            return {
                open: !state.open,
            };
        });
    };

    render() {
        return (
            <>
            <div id="navmenu_dropdown" 
                 className="navmenu_dropdown" 
                 ref={this.container}>
                <button className="navmenu_dropdown_button" 
                        onClick={this.handleButtonClick}>
                    ☰
                </button>
                {this.state.open && (
                    <div id="navmenu_dropdown_content" className="navmenu_dropdown_content">
                    <ul className="navmenu_dropdown_content_list">
                        <li><Link to="/" role="menuitem">Home</Link></li>
                        <li><Link to="/game" role="menuitem">Play</Link></li>
                        <li><Link to="/register" role="menuitem">Register</Link></li>
                        <li><Link to="/login" role="menuitem">Login</Link></li>
                    </ul>
                </div>
                )}
            </div>
            </>
        );
    }
}

/*
class NavigationMenu extends React.Component {
    constructor(props) {
        super(props);

        try {
            const config = props.navmenu;
            const text = props.navmenu.text || "Menu";
            const content = props.navmenu.content;
        }
        catch (err) {
            console.log(err);
            console.log("Missing navmenu in app config!");
        }
        this.state = {
            open: false,
        };
        this.container = React.createRef();
    }
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                open: false,
            });
        }
    };
    
    handleButtonClick = () => {
        this.setState(state => {
            return {
                open: !state.open,
            };
        });
    };

    render() {
        return (
            <>
            <div id="navmenu" 
                 className="navmenu_dropdown" 
                 ref={this.container}>
                <button className="navmenu_dropdown_button" onClick={this.handleButtonClick}>
                    {this.text}
                </button>
                {this.state.open && (
                    <div id="navmenu_dropdown_content" className="navmenu_dropdown_content">
                        <ul className="navmenu_dropdown_content_list">
                            {this.content.map( item => {
                                return (
                                    <li><Link to="login">{item.text}</Link></li>
                                )})
                            }
                        </ul>
                    </div>
                )}
            </div>
            </>
        );
    }
}
*/

function Footer() {
    return (
        <>
        <div className="footer">
            <p>www.pokerchamp.app v0.01</p>
        </div>
        </>
    );
}




export function Welcome() {
    return (
        <>
        <div className="grid_template_main">
            <div className="grid_template_header">
                <h1>Play Like a Champ!</h1>
            </div>
            <div className="grid_template_menu">
                <NavigationMenu/>
            </div>
            <div className="grid_template_content">
                <p> 
                    Poker Champ is a WIP web application which will allow people to sign-up and play poker with each other online in real-time.
                    <br/> <br/>
                    It's the best thing since subscription bread!
                </p>
                <div className="home_signup_login_buttons">
                    <Link to="/register" role="menuitem" className="welcome_SignUp">Sign-Up</Link>
                    <Link to="/login" role="menuitem" className="welcome_Login">Login</Link>
                </div>
            </div>
            <div className="grid_template_footer">
                <Footer/>
            </div>
        </div>
        </>
    );
  }


export function Login() {
  return (
      <>
        <div className="grid_template_main">
            <div className="grid_template_header">
                <h1>Login</h1>
            </div>
            <div className="grid_template_menu">
                <NavigationMenu/>
            </div>
            <div className="grid_template_content">
                <form method="POST">
                    <label for="email">Email:
                        <input type="email" id="email" name="email" placeholder="Email" required="true" autofocus="true"/>
                    </label>
                    <label for="username">Username:
                        <input type="text" id="username" name="username" placeholder="Username" required="false"/>
                    </label>
                    <label for="password">Password:
                        <input type="password" id="password" name="password" placeholder="Password" required="true"/>
                    </label>
                    <button type="submit">Sign In</button>
                </form>
            </div>
            <div className="grid_template_footer">
                <Footer/>
            </div>
        </div>
      </>
  );
}


export function Register() {
    return (
    <>
        <div className="grid_template_main">
            <div className="grid_template_header">
                <h1>Sign Up!</h1>
            </div>
            <div className="grid_template_menu">
                <NavigationMenu/>
            </div>
            <div className="grid_template_content">
                <form method="POST">
                    <label for="email">Email:
                        <input type="email" id="email" name="email" placeholder="Email" required="true" autofocus="true"/>
                    </label>
                    <label for="username">Username:
                        <input type="text" id="username" name="username" placeholder="Username" required="false"/>                    
                    </label>
                    <label for="password">Password:
                        <input type="password" id="password" name="password" placeholder="Password" required="true"/>
                        <input type="password" id="password" name="password" placeholder="Confirm Password" required="true"/>
                    </label>
                    <button type="submit">Register</button>
                </form>
            </div>
            <div className="grid_template_footer">
                <Footer/>
            </div>
        </div>
    </>
    );
  }
  
  
export function Game() {
    return (
    <>
        <div className="grid_template_main">
            <div className="grid_template_header">
                <h1>Game Homepage</h1>
            </div>
            <div className="grid_template_menu">
                <NavigationMenu/>
            </div>
            <div className="grid_template_content">
                <a>Welcome, <em>username</em></a>
            </div>
            <div className="grid_template_footer">
                <Footer/>
            </div>
        </div>
    </>
    );
  }
