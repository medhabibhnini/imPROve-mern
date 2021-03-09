import { USER_LOADING } from "actions/types";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import {Session} from 'bc-react-session';
import PropTypes from "prop-types";
import { startSession } from "mongoose";


function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
 
  const  onLogoutClick = (e) => {
    e.preventDefault();
    props.logoutUser();
    Session.destroy();
  };
  
  const session = Session.get();
  console.log(session.active);
 const pa = window.location.href;
 let logi=false;
 console.log(pa);
  if (pa==="http://localhost:5000/auth/login" || pa==="http://localhost:5000/home")
  {
    logi=true;
  }
  
  return (
    <>
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase"
              to="/"
            >

            </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-gray-900 lg:bg-transparent lg:shadow-none mt-2" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            
            <ul hidden={logi} className="flex flex-col lg:flex-row list-none lg:ml-auto">
        
            <Link to="/auth/register">
              <li className="flex items-center">
                <button
                  className="border-white border-2 bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded-lg shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-user"></i> Sign up
                </button>
              </li>
              </Link>
              <Link to="/auth/login">
              <li className="flex items-center">
                <button
                  className="border-white border-2 active:bg-gray-100 text-white text-xs font-bold uppercase px-4 py-2 rounded-lg shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"
                >
                  <i className="fas fa-user"></i> Login
                </button>
              </li>
              </Link>
            </ul>
            <ul hidden={!session.active} className="flex flex-col lg:flex-row list-none lg:ml-auto">
        
            <Link >
              <li className="flex items-center">
                <button
                  className="border-white border-2 bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded-lg shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                  type="button"onClick={onLogoutClick}
                >
                  <i className="fas fa-user"></i> Logout
                </button>
              </li>
              </Link>
           
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
Navbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logoutUser }
)(Navbar);
