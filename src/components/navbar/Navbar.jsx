import React, { useState } from "react";
import { Container, Section } from "../../style/globalStyle";
import { Brand, SearchNav, CommerceNav, Nav } from "./navbarStyle";
import { Link, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * 
 * @returns 
 test12@g.com
 hema@gm.com
 123456789A
 */

const Navbar = () => {
    const userStorage = JSON.parse(localStorage.getItem("user"));
    const {isAuth} = useSelector(state => state.authStore)



  return (
    <Section bg={"#000"} padding={"15px 0"}>
      <Container>
        <Nav>
          <Brand>
            <h1>
              <Link to="/">
                <span>Pro</span>Shop
              </Link>
            </h1>
          </Brand>
          <SearchNav>
            <form>
              <input type="search" placeholder="Search..." />
              <button type="button">
                <i className="fa-solid fa-magnifying-glass"></i>
                Search
              </button>
            </form>
          </SearchNav>
          <CommerceNav>
            <ul>
              <li>
                {isAuth ? (
                  <Link to="/profile">
                    <i className="fa-solid fa-circle-user"></i>
                    {userStorage?.user?.firstName}
                  </Link>
                ) : isAuth ? null : (
                  <Link to="/login">
                    <i className="fa-solid fa-arrow-right-to-bracket"></i>
                    login/signup
                  </Link>
                )}
              </li>
              <li>
                <Link to="/">
                  <i className="fa-solid fa-bookmark"></i>
                  wishlist
                </Link>
              </li>
              <li>
                <Link to="/">
                  <i className="fa-solid fa-cart-shopping"></i>
                  cart
                </Link>
              </li>
            </ul>
          </CommerceNav>
        </Nav>
      </Container>
    </Section>
  );
};

export default Navbar;
