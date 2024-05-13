'use client'
import React from 'react'

import './sign-up.css'
import Image from 'next/image'
import Link from 'next/link'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseConfig from '../firebase/config.js';
import { useRouter } from 'next/navigation'



export default function page() {
      const router = useRouter();
      const app = initializeApp(firebaseConfig);
      const auth = getAuth();
      const provider = new GoogleAuthProvider();

    function signin_popup(res){
      let msg=document.querySelector('.img_msg2');
      msg.innerText = 'Loading....'
      
      signInWithPopup(auth, provider)
        .then((result) => {
          msg.innerText = 'Sign up with Google';
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          // IdP data available using getAdditionalUserInfo(result)
          // ...
        
         if(user){
          alert("signup successfull");
          router.replace('/home');
         }
          
        }).catch((error) => {
          msg.innerText = 'Sign up with Google';
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    }


  return (
    <>
        <div className='container2'>
                <Image className="img2" src={"/background.jpeg"} alt='signup_image' width={720} height={738}></Image>

            <div className='signup_item2'>
                <div>
                    <h1 className='logo2'>LO <span className='span2'> GO</span></h1>
                    <p className='para2'>Journey to a trillion miles starts from here!!</p>
                </div>
                <div className='signup2'>
                    <h2>sign up</h2>
                    <p className='msg2'>choose a sign up method</p>
                    <div className='google2 marker' onClick={signin_popup}>
                    <Image className='g_img2' src={"/google.png"} alt='google' width={20} height={20}></Image>
                    <span className='img_msg2'>Sign up with Google</span>
                    </div>
                   
                    <Link href={'/register'} style={{color:'white', textDecoration: 'none'}}>
                    <div className='mail2 marker'>
                    <Image className='g_img2' src={"/mail-259.svg"} alt='mail' width={20} height={20}></Image>
                    <span className='img_msg2'>Sign up with Mail</span>
                    </div>
                    </Link>
                    
                    <p className='s_msg2'>Already a user?</p> 
                    <Link href={'/sign-in'} className='link2 marker' style={{textDecoration: 'none'}}>
                     login
                    </Link>
                </div>
            </div>
        </div>
       
    </>
  )
}

