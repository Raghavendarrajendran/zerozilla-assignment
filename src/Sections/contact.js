import './contact.css'
import 'bootstrap/dist/css/bootstrap.css'
import Map from '../Images/Contact/maps.png'
import ContactVector from '../Images/Contact/contact_vector.png'

const Contact = ()=> {
  return (
      <div className='row p-5'>

        {/* Part 1 */}

        <div className='col-md-12 col-lg-12 col-xl-12'>
            <div className='row p-3'>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-4'>
                            <p className='title-css text-start'> <span> <img src={ContactVector} alt="Contact Icon"/> CONTACT US  </span></p>
                        </div>
                        <div className='col-8'>
                            <hr style={{ width:'100%'}}/>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <p className='text-start title-desc-css'> 
                    We value your interest in us and welcome the opportunity to assist you with any inquiries or 
                    real estate needs. Our dedicated team is ready to provide you with personalized and 
                    prompt assistance, ensuring a seamless experience from start to finish.
                    </p>
                </div>
            </div>
        </div>

        {/* Part 2 */}

        <div className='col-md-6 col-lg-6 col-xl-6 text-start'>
            <div className='row p-2'>
                <p className='contact-form-title mb-5'> <b> Form </b> </p>
                <div className='row'>
                    <div className='col-md-6 col-lg-6 col-xl-6'>
                            <input type="text" className="form-control underline-input" id="exampleInput" placeholder="Your Name"/>
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6'>
                            <input type="email" className="form-control underline-input" id="exampleInput" placeholder="Your Email"/>
                        </div>
                        <div className='col-md-12 col-lg-12 col-xl-12'>
                            <textarea className="form-control underline-input mt-5" id="exampleFormControlTextarea1" placeholder="Your Message" rows="3"></textarea>
                        </div>
                        <div className='col-md-12 col-lg-12 col-xl-12 text-start mt-3'>
                            <button className='btn btn-sm send-msg-btn'> SEND MESSAGE </button>
                        </div>
                </div>
            </div>
        </div>

        {/* Part 3 */}

        <div className='col-md-6 col-lg-6 col-xl-6 text-start'>
            <div className='row p-2'>
                <p className='contact-form-title'> <b> Map </b> </p>
                <div className='row'>
                    <img src={Map} alt="Map"/>
                </div>
            </div>
        </div>

        {/* Part 4 */}

        <div className='col-md-12 col-lg-12 col-xl-12 text-start mt-3'>
            <div className='row'>
                <div className='col-md-3 col-lg-3 col-xl-3'>
                    <p className='contact-form-title'> <b> Phone </b> </p>
                    <p className='text-data'> (+91) 98765-43210 </p>
                </div>
                <div className='col-md-3 col-lg-3 col-xl-3'>
                    <p className='contact-form-title'> <b> Email </b> </p>
                    <p className='text-data'> accessdevelopers@email.com </p>
                </div>
                <div className='col-md-6 col-lg-6 col-xl-6'>
                    <p className='contact-form-title'> <b> Address </b> </p>
                    <p className='text-data'> 455 West Orchard Street
                    Kings Mountain, NC 28086 </p>
                </div>
            </div>
        </div>


    </div>

        
  )
}

export default Contact

