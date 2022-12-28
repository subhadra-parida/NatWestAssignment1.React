// import './Signup.css';
import {useState} from "react";
import { useNavigate } from 'react-router-dom';
export default function Signup(){
    // const [array, setArray ]= useState([])
    const [username , setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [verifypassword , setVerifypassword] = useState("")
    const [email , setEmail] = useState("")
    const [technology , setTechnology] = useState([])
    const [boolean, setBoolean] = useState(false);
    const navigate = useNavigate() 
    // const specialchar="!@#$^&"
    // const number="0123456789"
    const emailID= "@gmail.com"
    function User(){
        if (username === ""){
            alert("Enter your name")
            setBoolean(false)          
        }
        else if (username.length<5 || username.length>15){
            alert("Your name should be minimum 5 to maximum 15 letter")
            setBoolean(false)          
        }
        else if(password === ""){
            alert("Enter your password.")
            setBoolean(false)          
        }
        else if (verifypassword !== password){
            alert("Enter a valid password")
            setBoolean(false)          

        }
        else if (email === ""){
            alert("Enter your Email Id")
            setBoolean(false)          

        }
        else if(!email.includes(emailID)){
            alert("Enter valid email")
            setBoolean(false)          

        }
        else if (username!=="" && password !== "" && verifypassword !=="" && (password===verifypassword) ){
            setBoolean(true)          

        }
    }
    return(
        <div>
        <h2 id="header">SIGNUP PAGE</h2>
        <table id="container">
            <tr>
                <td>USERNAME</td>
                <td><input type="text" placeholder="Enter username" value={username} onChange={(i)=>{
                setUsername(i.target.value) 
                }}/></td>
            </tr>

            <tr>
                <td>PASSWORD</td>
                <td><input type="password" placeholder="Enter your password" value={password} onChange={(i)=>{
                setPassword(i.target.value)
                }}/></td>
            </tr>

            <tr>
                <td>VERIFIED PASSWORD</td>
                <td><input type="password" placeholder="Enter your verifypassword" value={verifypassword} onChange={(i)=>{
                setVerifypassword(i.target.value)
                }}/></td>
            </tr>

            <tr>
                <td>EMAIL</td>
                <td><input type="email" placeholder="Enter your Email" value={email} onChange={(i)=>{
                setEmail(i.target.value)
                }}/>
                </td>
            </tr>

            <tr>
                <td>TECHNOLOGY</td>
                <td>
                <select>
                    <option>JAVA</option>
                    <option>JAVASCRIPT</option>
                    <option>PYTHON</option>
                    <option>SCALA</option>
                    <option>SPARK</option>                     
                </select>
                </td>
            </tr>
        </table>
        <button id="submit" onClick={()=>{
            User()
            {
                boolean?navigate('/Dashboard'):<Signup/>
            }
        }}>SUBMIT</button>
        </div>
    )
    User()
}


// // import './Signup.css';
// import {useState, useEffect} from "react";
// // import { useNavigate } from 'react-router-dom';
// export default function Signup(){
//     const [error, setError ]= useState("")
//     const [username , setUsername] = useState("")
//     function User(){
//         if (username === ""){
//             setError("Enter your name")
                    
//         }
//         else if (username.length<5 || username.length>15){
//             setError("Your name should be minimum 5 to maximum 15 letter")         
//         }
//         else{
//             setError("")
//         }
//     }
//     return(
//         <div>
//         <h2 id="header">SIGNUP PAGE</h2>
//         <table id="container">
//         <tr>
//             <td>USERNAME</td>
//             <td><input type="text" placeholder="Enter username" value={username} onChange={(i)=>{
//             setUsername(i.target.value) 
//             User()
//             }}/></td>
//             </tr>
//             <h6>{error}</h6>
//         </table>
//         </div>
// )
// }
