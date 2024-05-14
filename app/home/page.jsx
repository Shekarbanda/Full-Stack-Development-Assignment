'use client'
import Image from "next/image";
import './home.css'
import { initializeApp } from "firebase/app";
import { getAuth, signOut ,auth, onAuthStateChanged} from "firebase/auth";
import firebaseConfig from '../firebase/config.js';
import Link from "next/link";
import { useRouter } from "next/navigation";



export default function Home() {
const router = useRouter();
const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    // ...
  } else {
    router.push('/sign-up');
    // ...
  }
});

function signout(){
signOut(auth).then(() => {
  alert("logout successful, login again")

  router.replace('/sign-in');

}).catch((error) => {
 alert(error);
});

}
  return (
    <>
      <title>Home</title>
    <link rel='icon' href='/icon.png'></link>
      <div className="main">
        <nav className="navbar">
        <div>
          <h1 className='logo_s'>LO <span className='span_s'> GO</span></h1>
        </div>
        <div>
          <h3 onClick={signout} href={'/sign-in'} className="h3 hov">sign Out</h3>
        </div>
        </nav>
        <hr></hr>

        <h1 className="topics">Popular Topics &#128293;</h1>
        
    <div className="box">
          <div className="box1 place_rocket">
            <Image className="image" src={"/rocket.png"} alt='image' width={110} height={110}></Image>
            <div className="head">
              <h3 className="heading">Introduction to image Science</h3>
              <p className="para_s">Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and</p>
            </div>
            <button className="read">READ</button>
            </div>
            <div className="box1">
            <Image className="image" src={"/star.png"} alt='image' width={110} height={110}></Image>
            <div className="head">
              <h3 className="heading">Astro Physics</h3>
              <p className="para_s">Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and</p>
            </div>
            <button className="read">READ</button>
            </div>
            <div className="box1 place_chip">
            <Image className="image" src={"/chip.png"} alt='image' width={110} height={110}></Image>
            <div className="head">
              <h3 className="heading">Artificial Intelligence</h3>
              <p className="para_s">Covers fundamentals, design, construction, operation and programming of robots.</p>
            </div>
            <button className="read">READ</button>
            </div>
            <div className="box1">
            <Image className="image" src={"/scope.png"} alt='image' width={110} height={110}></Image>
            <div className="head">
              <h3 className="heading">Astro Physics</h3>
              <p className="para_s">Covers fundamentals, design, construction, operation and programming of robots. Covers fundamentals, design, construction, operation and</p>
            </div>
            <button className="read">READ</button>
            </div>
            <div className="box2 box1">
            <Image className="image" src={"/quantum.png"} alt='image' width={110} height={110}></Image>
            <div className="head">
              <h3 className="heading">Quantum Computing</h3>
              <p className="para_s">Covers fundamentals, design, construction, operation and programming of robots.</p>
            </div>
            <button className="read">READ</button>
            </div>
            <div className="box2 box1">
            <Image className="image" src={"/robo.png"} alt='image' width={110} height={110}></Image>
            <div className="head">
              <h3 className="heading">Robotics</h3>
              <p className="para_s">Covers fundamentals, design, construction, operation and programming of robots.</p>
            </div>
            <button className="read">READ</button>
            </div>
            <div className="box2 box1">
            <Image className="image" src={"/mars.png"} alt='image' width={110} height={110}></Image>
            <div className="head">
              <h3 className="heading">Terraforming Mars</h3>
              <p className="para_s">Covers fundamentals, design, construction, operation and programming of robots.</p>
            </div>
            <button className="read">READ</button>
            </div>
            <div className="box2 box1">
            <Image className="image" src={"/venus.png"} alt='image' width={110} height={110}></Image>
            <div className="head">
              <h3 className="heading">Terraforming Venus</h3>
              <p className="para_s">Covers fundamentals, design, construction, operation and programming of robots.</p>
            </div>
            <button className="read">READ</button>
            </div>
            <div className="box2 box1">
            <Image className="image" src={"/alien.png"} alt='image' width={110} height={110}></Image>
            <div className="head">
              <h3 className="heading">Fermi para_sdox - Finding Aliens</h3>
              <p className="para_s">Covers fundamentals, design, construction, operation and programming of robots.</p>
            </div>
            <button className="read">READ</button>
            </div>
            <div className="box2 box1">
            <Image className="image" src={"/martian.png"} alt='image' width={110} height={110}></Image>
            <div className="head">
              <h3 className="heading">Base on Moon & Mars</h3>
              <p className="para_s">Covers fundamentals, design, construction, operation and programming of robots.</p>
            </div>
            <button className="read">READ</button>
            </div>
      </div>

      </div>

    </>
  );
}
