import React from 'react';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";


function NavigationMenu() {
    return (
      <>
        <div class="navmenu">
            <h4>Nav</h4>
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
            <p>Poker Champ! App!</p>
        </div>
      </>
    );
  }





export function Welcome() {
    return (
        <>
        <div class = "grid_template_main">
            <div class="grid_template_header">
                <h1>Welcome, dude</h1>
                <NavigationMenu/>
            </div>
            <div class="grid_template_content">
                <Link to="/register" role="menuitem">Sign-Up</Link>
                <Link to="/login" role="menuitem">Login</Link>
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
        <div class = "grid_container_main">
            <div class="grid_template_header">
                <h1>Login</h1>
                <NavigationMenu/>
            </div>
            <div class="grid_template_content">
                <form method="POST">
                    <label for="email">Email
                        <input type="email" id="email" name="email" placeholder="Email" required="true" autofocus="true"/>
                    </label>
                    <br/>
                    <label for="username">Username
                        <input type="text" id="username" name="username" placeholder="Username" required="false"/>
                    </label>
                    <br/>
                    <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password" required="true"/>
                    <br/>
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
        <div class = "grid_container_main">
            <div class="grid_template_header">
                <h1>Sign Up!</h1>
                <NavigationMenu/>
            </div>
            <div class="grid_template_content">
                <form method="POST">
                    <label for="email">Email
                        <input type="email" id="email" name="email" placeholder="Email" required="true" autofocus="true"/>
                    </label>
                    <br/>
                    <label for="username">Username
                        <input type="text" id="username" name="username" placeholder="Username" required="false"/>
                    </label>
                    <br/>
                    <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password" required="true"/>
                    <br/>
                    <label for="password">Password</label>
                        <input type="password" id="password" name="password" placeholder="Password (confirm)" required="true"/>
                    <br/>
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
        <div class = "grid_container_main">
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
