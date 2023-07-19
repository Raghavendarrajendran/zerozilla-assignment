import './banner.css'
import 'bootstrap/dist/css/bootstrap.css'
import BannerImg from '../Images/Banner/banner.jpg'
import Icon from '../Images/Banner/icon.png'

const Banner = ()=> {
  return (
      <div className='row'>
            <img src={BannerImg} alt="Logo"/>
            <div >
              <button className="floating-button"> ENQUIRE NOW </button>
            </div>
            <div className='icon-css'>
            <img src={Icon} alt="Logo"/>
            </div>
      </div>
  )
}

export default Banner

