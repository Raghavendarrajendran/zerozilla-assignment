import './philosophy.css'
import 'bootstrap/dist/css/bootstrap.css'
import PhylosophyImg from '../Images/Philosophy/pholosophy.jpg'
import Client from '../Images/Philosophy/client.png'
import Commitment from '../Images/Philosophy/commitment.png'
import Building from '../Images/Philosophy/building.png'
import Integrity from '../Images/Philosophy/integrity.png'

const Philosophy = ()=> {
  return (
      <div className='row'>
            <div className='col-md-6 col-lg-6 col-xl-6'>
                <img src={PhylosophyImg} alt="Phylosphy"/>
            </div>
            <div className='col-md-6 col-lg-6 col-xl-6'>
                <div className='row mx-5 mt-5'> 
                    <div className='col-md-12 col-lg-12 col-xl-12'>
                        <p className='philo-title-css text-start'> OUR PHILOSOPHY </p>
                        <p className='philo-desc text-start'> 
                            We believe that real estate is more than just buying or selling properties; 
                            it's about fulfilling dreams, building communities, and creating lasting 
                            relationships. Our philosophy is rooted in the following principles:
                        </p>
                    </div>
                </div>
                <div className='row mx-3 mt-2'> 
                    <div className='col-md-3 col-lg-3 col-xl-3'>
                        <img src={Client} alt="Client-centric Approach"/>
                    </div>
                    <div className='col-md-9 col-lg-9 col-xl-9'>
                        <p className='philo-prod-title-css text-start'> Client-Centric Approach: </p>
                        <p className='philo-prod-desc text-start'> 
                            We believe that real estate is more than just buying or selling properties; 
                            it's about fulfilling dreams, building communities, and creating lasting 
                            relationships. Our philosophy is rooted in the following principles:
                        </p>
                    </div>
                </div>

                <div className='row mx-3 mt-2'> 
                    <div className='col-md-3 col-lg-3 col-xl-3'>
                        <img src={Integrity} alt="Integrity and Transparency:"/>
                    </div>
                    <div className='col-md-9 col-lg-9 col-xl-9'>
                        <p className='philo-prod-title-css text-start'> Integrity and Transparency: </p>
                        <p className='philo-prod-desc text-start'> 
                        Honesty and transparency are the foundations of our business. 
                        We uphold the highest ethical standards and strive to maintain open and 
                        transparent communication throughout every transaction. You can trust us 
                        to provide accurate information, offer objective advice, and act in your 
                        best interest at all times.
                        </p>
                    </div>
                </div>

                <div className='row mx-3 mt-2'> 
                    <div className='col-md-3 col-lg-3 col-xl-3'>
                        <img src={Commitment} alt="Commitment to Excellence:"/>
                    </div>
                    <div className='col-md-9 col-lg-9 col-xl-9'>
                        <p className='philo-prod-title-css text-start'> Commitment to Excellence: </p>
                        <p className='philo-prod-desc text-start'> 
                        Excellence is our standard. We are committed to delivering outstanding service, 
                        going above and beyond to exceed your expectations. We embrace continuous improvement,
                         embracing innovation and adopting cutting-edge technologies to enhance the real 
                         estate experience for our clients.
                        </p>
                    </div>
                </div>

                <div className='row mx-3 mt-2'> 
                    <div className='col-md-3 col-lg-3 col-xl-3'>
                        <img src={Building} alt="Building Strong Communities:"/>
                    </div>
                    <div className='col-md-9 col-lg-9 col-xl-9'>
                        <p className='philo-prod-title-css text-start'> Building Strong Communities: </p>
                        <p className='philo-prod-desc text-start'> 
                        We recognize the impact real estate has on communities. We are passionate about 
                        contributing positively to the neighborhoods we serve, fostering sustainable growth,
                         and supporting local initiatives. We aim to create thriving communities where residents 
                         and businesses can flourish.
                        </p>
                    </div>
                </div>
                
            </div>
      </div>
  )
}

export default Philosophy

