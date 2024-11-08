import { Kanit } from "next/font/google";
import Link from "next/link";
const kanit = Kanit({
    subsets: ["latin"],
    weight: "400"
  });
  
export default function Navbar() {
    return (
        <>
            <div className=" container">
                <nav className="navbar">
                    <a href="#" className="navbar-logo">JIRAPAT<h4 style={{ display: 'inline', color: 'white' }}>EZY</h4></a>

                    <div className="navbar-menu">
                        <a href="#home">หน้าแรก</a>
                        <a href="#about">เกี่ยวกับ</a>
                        <a href="#portfolio">ผลงาน</a>
                        <a href="#contract">ติดต่อ</a>
                    </div>

                    <a href="#portfolio" className={` ${kanit.className}`} style={{ fontSize: '20px', borderRadius: '10px', color: 'white', background: '#197bbd', paddingTop: '5px', paddingBottom: '5px', paddingLeft: '50px', paddingRight: '50px', border: '0' }}>ชมผลงาน</a>
                    </nav>

            </div>
        </>
    )
}