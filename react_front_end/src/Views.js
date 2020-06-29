import React from 'react';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";


function NavigationMenu() {
    return (
      <>
        <div class="navmenu">
            <h2>Nav</h2>
            <ul role="menubar">
            <li><Link to="/" role="menuitem">Home</Link></li>
            <li><Link to="/register" role="menuitem">Register</Link></li>
            <li><Link to="/login" role="menuitem">Login</Link></li>
            </ul>
        </div>
      </>
    );
  }

  function Footer() {
    return (
      <>
        <div class="footer">
            <p>www.pokerchamp.app v0.01</p>
        </div>
      </>
    );
  }





export function Welcome() {
    return (
        <>
        <div class = "grid_template_main">
            <div class="grid_template_header">
                <h1>Play Like a Champ!</h1>
                <NavigationMenu/>
            </div>
            <div class="grid_template_content">
                <p> 
                    Poker Champ is a WIP web application which will allow people to sign-up and play poker with each other online in real-time.
                    <br/> <br/>
                    It's the best thing since subscription bread!
                </p>
                <div class="home_signup_login_buttons">
                    <Link to="/register" role="menuitem" class="welcome_SignUp">Sign-Up</Link>
                    <Link to="/login" role="menuitem" class="welcome_Login">Login</Link>
                </div>
            </div>
            <div class="grid_template_footer">
                <Footer/>
            </div>
        </div>
        </>
    );
  }


export function Login() {
  return (
      <>
        <div class = "grid_template_main">
            <div class="grid_template_header">
                <h1>Login</h1>
                <NavigationMenu/>
            </div>
            <div class="grid_template_content">
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
            <div class="grid_template_footer">
                <Footer/>
            </div>
        </div>
      </>
  );
}


export function Register() {
    return (
    <>
        <div class = "grid_template_main">
            <div class="grid_template_header">
                <h1>Sign Up!</h1>
                <NavigationMenu/>
            </div>
            <div class="grid_template_content">
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
            <div class="grid_template_footer">
                <Footer/>
            </div>
        </div>
    </>
    );
  }
  
  
export function Game() {
    return (
    <>
        <div class = "grid_template_main">
            <div class="grid_template_header">
                <h1>Game Homepage</h1>
                <NavigationMenu/>
            </div>
            <div class="grid_template_content">
                <a>Welcome, <em>username</em></a>
            </div>
            <div class="grid_template_footer">
                <Footer/>
            </div>
        </div>
    </>
    );
  }

  /*
  <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Email" required="true" autofocus="true"/>
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Username" required="false"/>                    
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Password" required="true"/>
                    <input type="password" id="password" name="password" placeholder="Confirm Password" required="true"/>
                    <button type="submit">Register</button>
                    */