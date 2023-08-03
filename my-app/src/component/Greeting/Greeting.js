import { auth, signOut, db, ref, get, child, set} from '../../Module/firebase'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useState, useEffect} from 'react'
import React from 'react';
import { useNavigate } from "react-router-dom";
// import $ from "jquery"
const Greeting = (props) => {
    
    console.log('Greetings page: ' + props.userName);
    console.log('Greetings page: ' + props.dateOfBirth);
    const navigate = useNavigate();
    
    
    const [quotes, setQuotes] = useState([]);
    useEffect(() => {
       fetch('https://type.fit/api/quotes')
          .then((response) => response.json())
          .then((data) => {
            const randonNumber = Math.ceil(Math.random() * data.length);
            console.log('getQuotes: ' + data[randonNumber].text);            
            setQuotes(data[randonNumber].text);
          })
          .catch((err) => {
             console.log(err.message);
             
          });
    }, []);
    
    const logOutUser = (e) => {
        e.preventDefault()
        navigate('/login')
    }
    

    return (
        <div className="container mt-5 pt-5">
        <div className="row">
            <div className="col-12 col-sm-8 col-md-6 m-auto">
                <div className="card border-0 shadow">
                    <div className="card-body">
                        <h1 id="greetingid" className="text-center fst-italic background-color btn-secondary">Greeting</h1>
                        <h2 id="birthdaywishid" className="text-center fst-italic text-primary ">Happy birthday {props.userName}</h2>                        
                    </div>
                    <div id="displayquotes" className="displayquotes text-center fst-italic text-warning"> {quotes}</div>                       
                    <div className="text-center mt-3 ">
                            <button className="btn btn-success text-light background-color btn-secondary" type="submit" onClick={logOutUser}>logOut</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}
export default Greeting
