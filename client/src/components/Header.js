import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import { auth, signInWithGoogle } from "../firebase/firebase.utils";
import { selectCartItemsCount } from "store/selectors/cartSelectors";

const HeaderComponent = () => {
  const { currentUser } = useSelector((state) => state.user);
  const itemCount = useSelector(selectCartItemsCount);
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className="navbar is-fixed-top"
      role="navigation"
      aria-label="main navigation"
    >
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="https://bulma.io">
            <img
              alt="logo"
              src="https://bulma.io/images/bulma-logo.png"
              width="112"
              height="28"
            />
          </a>

          <a
            role="button"
            onClick={() => setToggle(!toggle)}
            className={`navbar-burger burger ${toggle ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div
          id="navbarBasicExample"
          className={`navbar-menu ${toggle ? "is-active" : ""}`}
        >
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>

            <Link to="/products" className="navbar-item">
              Shop
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              {currentUser ? (
                <>
                  <p className="buttons">
                    <NavLink to="/cart" className="button is-white">
                      <span className="icon">
                        <i className="fas fa-shopping-cart"></i>
                      </span>
                      <span>{itemCount > 0 ? itemCount : null}</span>
                    </NavLink>
                    <button className="button is-white">
                      <span>{currentUser.displayName}</span>
                    </button>
                    <button
                      className="button is-white"
                      onClick={() => auth.signOut()}
                    >
                      Logout
                    </button>
                  </p>
                </>
              ) : (
                <div className="buttons">
                  <Link to="/register" className="button is-primary">
                    <strong>Sign up</strong>
                  </Link>
                  <Link
                    to="/login"
                    className="button is-light"
                    onClick={signInWithGoogle}
                  >
                    Log in
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComponent;
