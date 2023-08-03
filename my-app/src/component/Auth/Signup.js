import { useState } from "react"
import {auth, createUserWithEmailAndPassword, signOut, db, ref, set,} from '../../Module/firebase.js'
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [userName, setUserName] = useState('')
    const [birthday, setBirthday] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    // const history = useHistory()

    const usernameChange = (e) => {
        setUserName(e.target.value)
    }
    const birthdayChange = (e) => {
        setBirthday(e.target.value)
    }
    const emailChange = (e) => {
        setEmail(e.target.value)
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
    }
    const navigate = useNavigate();

    const createUser =(e) => {
        e.preventDefault()
        console.log(userName)
        console.log(birthday)
        console.log(email)
        console.log(password)

        // save the username in db
    //  const newUser = {userName: userName, birthday: birthday, Email: email, password: password}
     createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            console.log(userCredential.user)
            // save the user into DB                
     const data = {userName: userName, birthday: birthday, Email: email}
     const userKey = userCredential.user.uid
     set(ref(db, 'users/' + userKey), data)
       .then(()=>{
          signOut(auth)
          .then(() => {
          
          console.log('done');
          navigate('/login');
        })
        .catch((error) => {
            console.log(error)
        })
     })                                                        
 }) 
}
    

    return (
        <div className='container'>
            <div className="row">
                <div className="col-12 col-sm-8 col-md-6 m-auto">

                    <h1 className="text-center fst-italic mt-3">Sign Up</h1>
                    <form action="" className="bg-light p-3 rounded-3 shadow m-5 ">
                        <div className="mb-3">
                            <label htmlFor="username">Full Name</label>
                            <input type="text" onChange={usernameChange} name="username" id="username" className="form-control my-4 py-2" placeholder="user name" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="birthday">Birthday:</label>
                            <input type="date" onChange={birthdayChange} id="birthday" name="birthday" className="form-control my-4 py-2" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email">Email-id </label>
                            <input type="email" onChange={emailChange} name="email" id="email" placeholder="emailid@email.com" className="form-control my-4 py-2" required />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password">password</label>
                            <input type="password" onChange={passwordChange} name="password" id="password" placeholder="password" className="form-control my-4 py-2" required />
                        </div>

                        <div className="checkbox">
                            <input type="checkbox" id="signupcheck" />
                            <label htmlFor="signupcheck">I accept all terms & conditions</label>
                        </div>

                        <div className="d-flex justify-content-end">
                            {/* <button className="login-btn-class btn btn-primary my-btn-color" id="login-btn-id" type="submit " value="login">Log In</button> */}
                            <button className="signup-btn-class btn btn-primary my-btn-color" id="signup-btn-id" type="submit" onClick={createUser} value="signup">Signup</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>

    )

}
export default Signup