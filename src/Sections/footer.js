import './footer.css'
import 'bootstrap/dist/css/bootstrap.css'
import Logo from '../Images/Footer/footerlogo.png'
import Facebook from "../Images/Footer/facebook.png"
import Instagram from "../Images/Footer/instagram.png"
import Twitter from "../Images/Footer/twitter.png"
import Youtube from "../Images/Footer/youtube.png"
import LinkedIn from "../Images/Footer/linkedin.png"
import HrLine from "../Images/Footer/line.png"
import ArrowFooter from "../Images/Footer/arrow.png"

const Footer = ()=> {
  return (
      <div className='row p-5'>
        <div className='col-3 text-start'>

            <img src={Logo} alt='Logo'/>
            <p className='footer-about mt-3'> 
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Mauris ac ornare felis. Nam velit neque, blandit id placerat eues hiksi.
            </p>
            <img className='footer-social' src={Twitter} alt='Twitter'/>
            <img className='footer-social' src={LinkedIn} alt='LinkedIn'/>
            <img className='footer-social' src={Facebook} alt='Facebook'/>
            <img className='footer-social' src={Instagram} alt='Instagram'/>
            <img className='footer-social' src={Youtube} alt='Youtube'/>

        </div>
        <div className='col-3'>
            <p className='footer-title'> LINKS </p>
            <ul className='text-start footer-about-ul' style={{listStyleType:"none",marginLeft:'30%'}}>
                <li className='liner-style'> <img src={ArrowFooter} alt='Arrow'/> Home </li>
                <li className='liner-style'> <img src={ArrowFooter} alt='Arrow'/> About Us </li>
                <li className='liner-style'> <img src={ArrowFooter} alt='Arrow'/> Property </li>
                <li className='liner-style'> <img src={ArrowFooter} alt='Arrow'/> Blog </li>
            </ul>
        </div>
        <div className='col-3'>
            <p className='footer-title'> SUPPORT </p>
            <ul className='text-start footer-about-ul' style={{listStyleType:"none",marginLeft:'25%'}}>
                <li className='liner-style'> <img src={ArrowFooter} alt='Arrow'/> Privacy Policy </li>
                <li className='liner-style'> <img src={ArrowFooter} alt='Arrow'/> Terms of Use </li>
                <li className='liner-style'> <img src={ArrowFooter} alt='Arrow'/> Contact </li>
            </ul>
        </div>
        <div className='col-3'>
            <p className='footer-title' style={{marginLeft:'-60%'}}> CONTACT US </p>
            <p className='text-start footer-about-ul'> 
            455 West Orchard Street
            Kings Mountain, NC 28086 <br/>
            Phone: (+91) 98765-43210  <br/>
            E-Mail: accessdevelopers@email.com
            </p>
        </div>

        <img src={HrLine} alt='Footer Line'/>
        <p className='copy-rights mt-3'> © 2023 Access Developers. All rights reserved. </p>
    </div>
  )
}

export default Footer

