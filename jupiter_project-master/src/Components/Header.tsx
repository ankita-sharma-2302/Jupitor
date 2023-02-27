import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiFillHome } from "react-icons/ai";
import { IoLogoTableau } from "react-icons/io5";
import { GoSettings, GoPerson } from "react-icons/go";
import { BiBookOpen } from "react-icons/bi";

interface Props {
  cartItems: any;
  handleSearch: any;
  searchItem: any;
}

export const Header: React.FC<Props> = ({
  cartItems,
  handleSearch,
  searchItem,
}) => {
  return (
    <div>
      <header className="header">
        <div>
          <h1>
            <Link to="/" className="logo">
              <IoLogoTableau />
              Jupiter
            </Link>
          </h1>
        </div>
        <div className="input">
          <input
            type="text"
            value={searchItem}
            placeholder="Search.."
            name="search"
            onChange={handleSearch}
          ></input>
        </div>
        <div className="header1">
          <ul className="off">
            <li>
              <Link to="/">Get 50% off</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="Recipes">
                <BiBookOpen />
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="/">
                <AiFillHome />
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="profile">
                <GoPerson />
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="setting">
                <GoSettings />
              </Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="cart">
                <AiOutlineShoppingCart />
                <span className="cardlength">
                  {cartItems.length === 0 ? "" : cartItems.length}
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};
