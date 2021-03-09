import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component {

  constructor(props){
    super(props);  
    
    this.state={
      
        data:{
            firstname:"",
            lastname:"",
            password:"",
            username:"",
            email:"",
            birthdate:"",
            sexe:"",
            cin:"",
            image:"",
            level:"",
            university:"",
            domain:"",
        },
        errors:{}
    
    }
  }

  handleChange = input=> e => {
    const data = {...this.state.data}
    data[e.target.name] = e.target.value;
    this.setState({ data });
  }

  handleSubmit = event => {
    
    event.preventDefault();

    console.log(this.state.data);

    axios.post(`http://localhost:3000/api/students/register`, {   
        
        firstname: this.state.data.firstname,
        lastname: this.state.data.lastname,
        password : this.state.data.password,
        username: this.state.data.username,
        email:this.state.data.email,
        birthdate:this.state.data.birthdate,
        sexe:this.state.data.sexe,
        cin:this.state.data.cin,
        image:this.state.data.image,
        level:this.state.data.level,
        university:this.state.data.university,
        domain:this.state.data.domain,

      }).then(response => { 
        window.open("/auth/login");
        }).catch(errors => {
              console.log(errors);
        });
}

 

  render() {
    return (
      <>
        <div className="container mx-auto px-4 h-full">
          <div className="flex content-center items-center justify-center h-full">
            <div className="w-full lg:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-900 border-0">
                <div className="rounded-t mb-0 px-6 py-6">
                  <div className="text-center mb-3">
                    <h6 className="text-gray-600 text-sm font-bold">
                      Sign up with
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
                    <small>Or sign up with credentials</small>
                  </div>
                  <form onSubmit={this.handleSubmit}>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Firstname
                      </label>
                      <input
                        type="text"
                        onChange={this.handleChange('firstname')}
                        name="firstname"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="firstname"
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Lastname
                      </label>
                      <input
                        type="text"
                        onChange={this.handleChange('lastname')}
                        name="lastname"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="lastname"
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        username
                      </label>
                      <input
                        type="text"
                        onChange={this.handleChange('username')}
                        name="username"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="username"
                      />
                    </div>
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
  
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        onChange={this.handleChange('password')}
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Password"
                      />
                    </div>



                   {/*<div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        Password Confrimation
                      </label>
                      <input
                        type="password"
                        name="password_confirmation"
                        onChange={this.handleChange('password_confirmation')}
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Confirm password"
                      />
                    </div>*/
    }
  
           {/*           <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        birthdate
                      </label>
                      <input
                        type="date"
                        onChange={this.handleChange('birthdate')}
                        name="birthdate"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="bithdate"
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        sexe
                      </label>
                      <input
                        type="text"
                        onChange={this.handleChange('sexe')}
                        name="sexe"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="sexe"
                      />
                    </div>
                      
  <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        cin
                      </label>
                      <input
                        type="text"
                        onChange={this.handleChange('cin')}
                        name="cin"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="cin"
                      />
                    </div>
                    
  <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        image
                      </label>
                      <input
                        type="file"
                        onChange={this.handleChange('image')}
                        name="image"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="image"
                      />
                    </div>
                      
  <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        level
                      </label>
                      <input
                        type="level"
                        onChange={this.handleChange('level')}
                        name="level"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="level"
                      />
                    </div>
                      
  <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        university
                      </label>
                      <input
                        type="text"
                        onChange={this.handleChange('university')}
                        name="university"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="university"
                      />
                    </div>
  
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-password"
                      >
                        domaine
                      </label>
                      <input
                        type="text"
                        onChange={this.handleChange('domain')}
                        name="domain"
                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="domaine"
                      />
  </div>*/}
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-700 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                        type="submit" onClick={this.handleSubmit}
                      >
                        Create Account
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