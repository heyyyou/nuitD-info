import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import money from "../../images/coin-us-dollar-icon.png";
import chat from "../../images/chat-2-icon.png";
import logo from "../../images/logoIST.png";
import logo2 from "../../images/logoIST2.png";

import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { logout } from "../../actions/userActions";

const Header = () => {
  const alert = useAlert();
  const dispatch = useDispatch();

  const { user, loading } = useSelector((state) => state.auth);

  const logoutHandler = () => {
    dispatch(logout());
    alert.success("Logged out successfully.");
  };

  return (
    <Fragment>
      <nav className="navbar head  navbar-expand-lg ">
        <div className="container ">
          <Link to="/" className="navbar-brand">
            <img src={logo} style={{ height: "90px" }} className="px-2"></img>
          </Link>
          <h5 class="textLogo">Question pour un champignon</h5>
        </div>
        <Button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <Button variant="outline-dark" href="/">
              Accueil
            </Button>

            {/* <Link to="/" className="nav-link">
                Accueil <span className="sr-only">(current)</span>
              </Link> */}
          </ul>
          <div className="form-inline my-2 my-lg-0">
            <div>
              {user ? (
                <div className="ml-4 dropdown d-inline">
                  <Link
                    to="#!"
                    className="btn dropdown-toggle text-white "
                    type="button"
                    id="dropDownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div className="d-flex">
                      <div>
                        <img src={money} className="px-2"></img>
                        <img src={chat} className="px-2"></img>
                      </div>
                      <figure className="avatar avatar-nav">
                        <img
                          src={user.avatar && user.avatar.url}
                          alt={user && user.name}
                          className="rounded-circle"
                        />
                      </figure>
                      <span>{user && user.name}</span>
                    </div>
                  </Link>

                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropDownMenuButton"
                  >
                    {user && user.role === "admin" && (
                      <Link className="dropdown-item" to="/admin/users">
                        Tableau de bord
                      </Link>
                    )}
                    <Link className="dropdown-item" to="/me">
                      Profile
                    </Link>
                    <Link
                      className="dropdown-item text-danger"
                      to="/"
                      onClick={logoutHandler}
                    >
                      Se déconnecter
                    </Link>
                  </div>
                </div>
              ) : (
                !loading && (
                  <Link to="/login" className="btn btn-dark ml-4">
                    Se connecter
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default Header;
