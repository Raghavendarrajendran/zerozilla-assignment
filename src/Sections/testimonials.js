import './testimonials.css'
import 'bootstrap/dist/css/bootstrap.css'
import TestimonialVector from '../Images/Testimonials/testimonial_vector.png'
import Dot from '../Images/Testimonials/dot.png'
import Line from '../Images/Testimonials/line.png'
import Quote from '../Images/Testimonials/quote.png'

const Testimonials = ()=> {
  return (
      <div className='row p-5'>

        {/* Part 1 */}

        <div className='col-md-12 col-lg-12 col-xl-12'>
            <div className='row p-3'>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-4'>
                            <p className='title-css text-start'> <span> <img src={TestimonialVector} alt="Testimonial Icon"/> TESTIMONIALS </span></p>
                        </div>
                        <div className='col-8'>
                            <hr style={{ width:'100%'}}/>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <p className='text-start title-desc-css'> 
                        Read these testimonials to gain a deeper understanding of the value we bring to
                        our clients and the trust they have placed in us.
                    </p>
                </div>
            </div>
        </div>

        {/* Part 2 */}

        <div className='d-flex justify-content-center'>
            <div className='col-md-12 col-lg-12 col-xl-12 text-start' style={{width:'95%'}}>
            <div className='row background-image p-5'>
                    <div className='col-md-1 col-lg-1 col-xl-1'>
                    <img src={Quote} alt="Quotation Icon"/>
                    </div>
                    <div className='col-md-11 col-lg-11 col-xl-11'>
                        <p className='quote-desc'> 
                        “Working with Access Developers was a game-changer for me. Their team went above and
                        beyond to find the perfect home that met all my requirements. Their expertise, 
                        professionalism, and personalized approach made the entire process smooth and stress-free.”
                        </p>
                        <p className='quote-desc-names'> <img src={Line} alt="Line Icon"/> RAJ VERMA </p>
                        <p className='quote-desc-company'> Emporia Apartments </p>
                        <div className='d-flex justify-content-center'>
                        <img className='quote-desc-dots' src={Dot} alt="Dot Icon"/>
                        <img className='quote-desc-dots' src={Dot} alt="Dot Icon"/>
                        <img className='quote-desc-dots' src={Dot} alt="Dot Icon"/>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials

