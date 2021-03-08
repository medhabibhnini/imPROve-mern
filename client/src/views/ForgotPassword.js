import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
export default class ForgotPassword extends Component {

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.data.name);

        axios.post(`http://127.0.0.1:8000/api/auth/forgot`, {   
            
            email: this.state.data.email,
            
    
          }).then(response => { 
            this.props.history.push("/auth/forgot");
            }).catch(errors => {
                  console.log(errors);
            });
    }
    render(){
        return (
          <>
            <div className="container mx-auto px-4 h-full">
            <ToastContainer position="top-right" autoClose={10000}/>
              <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-4/12 px-4">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-900 border-0">
                    <div className="rounded-t mb-0 px-6 py-6">
                      <div className="text-center mb-3">
                        <h6 className="text-gray-600 text-sm font-bold">
                          Sign in with
                        </h6>
                      </div>
                      <div className="btn-wrapper text-center">
                       
                        <button
                          className="bg-white active:bg-gray-100 text-gray-800 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                          type="button"
                        >
                          <img
                            alt="..."
                            className="w-5 mr-1"
                            src={require("assets/img/google.svg")}
                          />
                          Google
                        </button>
                      </div>
                      <hr className="mt-6 border-b-1 border-gray-400" />
                    </div>
                    <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                      <div className="text-gray-500 text-center mb-3 font-bold">
                        <small>Or sign in with credentials</small>
                      </div>
                      <form onSubmit={this.handleSubmit}>
                        <div className="relative w-full mb-3">
                          <label
                            className="block uppercase text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            onChange={this.handleChange('email')}
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                            placeholder="Email"
                          />
                        </div>
    
      
                        <div className="text-center mt-6">
                          <button
                            className="bg-gray-700 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                            type="submit"  onClick={this.handleSubmit}
                          >
                            Forgot Password
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
              
                </div>
              </div>
            </div>
          </>
        );
      }
}
