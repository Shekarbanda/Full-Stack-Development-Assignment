'use client'
import Image from 'next/image'
import './sign-in.css'
import Link from 'next/link'
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider,signInWithEmailAndPassword } from "firebase/auth";
import firebaseConfig from '../firebase/config.js';
import { useRouter } from 'next/navigation';


export default function page() {
  const router = useRouter();
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

function signin_popup(){
  let msg=document.querySelector('.img_msg');
  msg.innerText = 'Loading....'
 
  signInWithPopup(auth, provider)
    .then((result) => {
      msg.innerText = 'Continue with Google';
      const credential = GoogleAuthProvider.credentialFromResult(result);
      
      const token = credential.accessToken;
      const user = result.user;
      
      alert("signup successfull");
      router.replace('/home');
    }).catch((error) => {
      msg.innerText = 'Continue with Google';
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      const credential = GoogleAuthProvider.credentialFromError(error);
    });
}

 function signin_mail(event){
  event.preventDefault();
  let mail_msg=document.querySelector('.btn');
  mail_msg.innerText = "Loding....";
 mail_msg.style.color = 'red';
  
  
  const email = event.target.email.value;
  const password = event.target.pass.value;


  signInWithEmailAndPassword(auth, email, password)
  
  .then((userCredential) => {
    mail_msg.innerText = "Login";
    mail_msg.style.color = 'black';
    const user = userCredential.user;
    alert('login successfull');
    router.replace('/home');
    // ...
  })
  .catch((error) => {
    mail_msg.innerText = "Login";
    mail_msg.style.color = 'black';
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage.split('/')[1].split(')')[0])
  });
}

  return (
    <>
     <title>Sign in</title>
    <link rel='icon' href='/icon.png'></link>
    <div className='container'>
            <Image className="img" src={"/background.jpeg"} alt='signup_image' width={720} height={738}></Image>

        <div className='signup_item'>
            <div>
                <h1 className='logo'>LO <span className='span'> GO</span></h1>
                <p className='para'>Journey to a trillion miles starts from here!!</p>
            </div>
            <div className='signup'>
                <h2>sign in</h2>
                <div className='google marker' onClick={signin_popup}>
                <Image className='g_img' src={"/google.png"} alt='google' width={30} height={30}></Image>
                <span className='img_msg'>Continue with Google</span>
               
                </div>
                <p>or</p>
                <form className='sign_up' onSubmit={signin_mail}>
                  <input className='email marker' name='email' type='email' placeholder='Email'></input>
                  <input className='pass marker' name='pass' type='password' placeholder='Password'></input>
      
                <button className='btn marker' type='submit'>Login</button>
                </form>
            </div>
                  <div className='account'>
                    <p className='s_msg'>Do not have an Account?</p>
                    <Link className='link marker' href='/sign-up' style={{ textDecoration: 'none'}}>Sign up
                    </Link>
                    </div>
        </div>
    </div>
   
</>
  )
}

