import {auth, signInWithEmailAndPassword, db, ref, get, child} from '../../Module/firebase.js'
import { useState } from "react"
import { BrowserRouter as Router, Routes,Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


// import $ from "jquery"


const Login = (props) => {    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

    const emailChange = (e) => {
        setEmail(e.target.value)
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
    }    

    const loginUser = (e)=> {

        e.preventDefault();
    
    function isLeapYear(year) {
        return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
    }
    
    function calculateRemainingDayForBirthday(dob) {
        console.log('dob: ' + dob);
        //write logic to find remaining days of your birthday.
        let dobDate = new Date(dob + ' 00:00:00 MDT');
        let today = new Date();
        console.log('today: ' + today);
        //console.log('dobDate b4 : ' + dobDate);
        dobDate.setFullYear(today.getFullYear());
        //console.log('dobDate: ' + dobDate);
        var daysleft = Math.ceil((dobDate - today) / (1000*60*60*24))
        console.log('daysleft: ' + daysleft);
        if (daysleft === 0 ||  dobDate===today) {
            return 0; 
        }  else if (daysleft > 0) {
            return daysleft;            
        }  else {
            if (isLeapYear(today.getFullYear() + 1)) {
                return daysleft + 365 + 1;
            } else {
                return daysleft + 365;
            }
        }    
        //returns remaing days for birthday.
    }

    // send data to backend:
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=> {
            console.log(userCredential.user.uid);
            const dbRef = ref(db);
            const userKey = userCredential.user.uid
            get(child(dbRef, `users/${userKey}`)).then((snapshot) => {
                //console.log('before if: '+ snapshot.val())
                if (snapshot.exists()) {                    
                    let user = snapshot.val().userName
                    let dob = snapshot.val().birthday
                    props.onUpdateName(user);
                    props.onUpdateDateOfBirth(dob);
                    var daysleft = calculateRemainingDayForBirthday(dob);
                    props.onUpdateRemainingDays(daysleft);
                    if (daysleft === 0 )
                        navigate('/greeting');
                    else 
                        navigate('/untilbirthday');
                }
            })
            
                   
         })

    }

    return (
        <div className="container mt-5 pt-5">
            <div className="row">
                <div className="col-12 col-sm-8 col-md-6 m-auto">
                    <div className="card border-0 shadow">
                        
                        <div className="card-body">
                            <h1 className="text-center fst-italic">Login</h1>
                            <form action="" >
                                <label className="form-label" htmlFor="login-email">email</label>
                                <input type="text" name="login-userId" id="login-email" className="form-control my-4 py-2"
                                    placeholder="e-mail" onChange={emailChange}/>

                                <label className="form-label" htmlFor="login-password">Password</label>
                                <input type="password" name="login-password" id="login-password" className="form-control my-4 py-2"
                                    placeholder="password" onChange={passwordChange} />

                                <div className="d-flex justify-content-between">
                                    <Link to="/signup" className="text-decoration-none text-info" >Don't have an account? Signup</Link>
                                    <button className="btn btn-primary my-btn-color" type="submit" onClick={loginUser}> Log In</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login



