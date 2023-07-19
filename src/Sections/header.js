import 'bootstrap/dist/css/bootstrap.css'
import Logo from '../Images/Header/logo.png'
import Menu from '../Images/Header/menuvector.png'

const Header = ()=> {
  return (
    <div className="container-fluid bg-white">
      <div className='row p-2'>
        <div className='col-6 text-start'>
            <img style={{marginLeft:80,marginTop:8,height:'75%'}} src={Logo} alt="Logo"/>
        </div>
        <div className='col-6 text-end'>
            <p style={{marginRight:80,marginTop:10}}> <span> MENU  <img style={{height:'70%'}} src={Menu} alt="Logo"/></span></p>
        </div>
      </div>
    </div>
  )
}

export default Header
