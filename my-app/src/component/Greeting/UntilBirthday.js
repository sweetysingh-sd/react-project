import { auth, signOut, db, ref, get, child, set} from '../../Module/firebase'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useState, useEffect} from 'react'
import React from 'react';
import { useNavigate } from "react-router-dom";

const UntilBirthday = (props) => {
    
    console.log('UntilBirthday page: ' + props.userName);
    console.log('UntilBirthday page: ' + props.remainingDays);
    const navigate = useNavigate();

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
                        <h2 id="birthdaywishid" className="text-center fst-italic text-primary ">{props.remainingDays} DAYS LEFT UNTIL YOUR BIRTHDAY {props.userName}</h2>                        
                    </div>
                     <div className="text-center mt-3 ">
                            <button className="btn btn-success text-light background-color btn-secondary"type="submit" onClick={logOutUser}>logOut</button>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
}
export default UntilBirthday
