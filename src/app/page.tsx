import Image from "next/image";
import styles from "./page.module.css";
import { Kanit } from "next/font/google";
import { url } from "inspector";
import AboutPage from '@/components/About'
import Portfolio from "@/components/Portfolio";
import Myskill from "@/components/Myskill";
import Link from "next/link";
import Footer from "@/components/Footer";
const kanit = Kanit({
  subsets: ["latin"],
  weight: "400"
});

export default function Home() {
  return (
    <div className={`min-h-screen ${kanit.className}`}>
      <div className="">
        <div className="custom-grid container" style={{ margin: 'auto', marginTop: '10rem', marginBottom: '10rem', display: 'flex', justifyContent: 'center', alignItems: 'center' }} id="home">
          <div style={{paddingLeft:"30px"}}>
            <h2>
              <span style={{ fontWeight: '100' }}>HELLO, I’M A</span> <br />
              <span style={{ fontSize: '70px' }}>UI & UX <span className="text-gradient"> Designer.</span></span>
            </h2>
            <p style={{ fontSize: '17px' }}>
              Hello! I'm a UX/UI designer with a passion for creating intuitive, user-centered designs that make a difference. My approach combines a deep understanding of user behavior with a strong focus on aesthetics, ensuring each design is not only functional but visually engaging. With experience across various platforms
            </p>
            <br />
            <a href="#portfolio" className={` ${kanit.className}`} style={{ fontSize: '20px', borderRadius: '10px', color: 'white', background: '#197bbd', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '50px', paddingRight: '50px', border: '0',marginTop:'5px' }}>ชมผลงาน</a>
          </div>
          <div style={{ textAlign: 'center', display: 'flex', alignItems: 'center', justifyContent: 'center',marginLeft:'100px' }}>
            <img style={{ width: '450px', height: 'auto', margin: '0 auto', display: 'table',borderRadius:'10%',opacity:'0.7' }} src="https://i.postimg.cc/8cr9CW6V/240055929-4292983747462383-9215734184391380037-n.jpg" alt="" />
          </div>
        </div>
        <AboutPage />
        {/* <Myskill /> */}
        <Portfolio />
      </div>
      <div style={{position:'fixed',bottom:'20px',right:'35px'}}>
        <Link href="https://www.instagram.com/jrpezy.24/" style={{display:'block',marginBottom:'5px'}}>
          <img src="/img/instagram.png" style={{width:'50px'}} alt="" />
        </Link>
        <Link href="https://www.facebook.com/jirapat.yaovalux.7/">
          <img src="/img/communication.png" style={{width:'50px'}} alt="" />
        </Link>
      </div>
      <Footer />
    </div>
  );
}
