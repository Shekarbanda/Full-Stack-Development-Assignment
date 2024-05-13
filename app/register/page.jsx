'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import './register.css'
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from '../firebase/config.js';
import { useRouter } from 'next/navigation';


export default function page() {

const router = useRouter();
const app = initializeApp(firebaseConfig);
// Initialize Firebase

const auth = getAuth(app);
function signup_firebase(event){
  event.preventDefault();
  let mail_msg=document.querySelector('.btn1');
  mail_msg.innerText = "Loding....";
  mail_msg.style.color = 'red';
  

  const email = event.target.email.value;
  const password = event.target.pass.value;
 
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    mail_msg.innerText = "Register";
    mail_msg.style.color = 'black';
    const user = userCredential.user;
    alert("sign up successfull, You can now Login")
    router.replace('/sign-in');
    // ...
  })
  .catch((error) => {
    mail_msg.innerText = "Register";
    mail_msg.style.color = 'black';
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage.split('/')[1].split(')')[0])
    // ..
  });

}

  return (
    <>
    <div className='container1'>
            <Image className="img1" src={"/background.jpeg"} alt='signup_image' width={720} height={738}></Image>

        <div className='signup_item1'>
            <div className='logo_div1'>
                <h1 className='logo1'>LO <span className='span1'> GO</span></h1>
                <p className='para1'>Journey to a trillion miles starts from here!!</p>
            </div>
            <form className='signup1' onSubmit={signup_firebase}>
                <h2>sign up with Email</h2>
                <div className='sign_up1'>
                  <input className='email1 marker' name='email' type='email' placeholder='Email'></input>
                  <input className='pass1 marker' name='pass' type='password' placeholder='Password'></input>
                </div>
                <button type='submit' className='btn1 marker'>Register</button>
            </form>
        </div>
    </div>
   
</>
  )
}
