import './about.css'
import 'bootstrap/dist/css/bootstrap.css'
import About from '../Images/About/about.jpg'

const Banner = ()=> {
  return (
      <div className='row p-5'>
        <div className='col-md-6 col-lg-6 col-xl-6'>
            <img src={About} alt="Logo"/>
        </div>

        <div className='col-md-12 col-lg-6 col-xl-6 text-line-height'>
            <div>
                <p className='text-start' style={{fontSize:20,fontWeight:600}}> ABOUT US </p>
                <p className='text-start'> 
                    Access Developers is a team of skilled professionals specializing in Microsoft Access development. 
                    We are dedicated to helping businesses harness the power of Access to streamline their data 
                    management processes and improve operational efficiency.
                </p>
                <p className='text-start'>
                    With years of experience in Access development, our team understands the intricacies of creating 
                    robust and user-friendly databases. We pride ourselves on delivering tailored solutions that meet 
                    the unique needs of each client, whether it's building a new database from scratch or enhancing 
                    an existing system.
                </p>
                <p className='text-start'>
                    Our expertise extends to designing intuitive user interfaces, 
                    implementing data validation and security measures, and optimizing database performance. 
                    We work closely with our clients to gain a deep understanding of their business requirements, 
                    ensuring that our solutions align perfectly with their goals.
                </p>
            </div>

            {/* Box Row 1 */}

            <div className="row mx-n5">
                <div className="col-md col-lg col-xl px-2">
                    <div className="p-3 border">
                        <p className='mt-4'> 
                            <span className='about-numeric'>1.2</span> 
                            <span className='about-sub-letter'> Cr </span>
                        </p>
                        <p className='about-card-letter'> Square feet <br/> Development </p>
                    </div>
                </div>
                <div className="col-md col-lg col-xl px-2">
                    <div className="p-3 border">
                        <p className='mt-4'> 
                            <span className='about-numeric'>12</span> 
                            <span className='about-sub-letter'> k+ </span>
                        </p>
                        <p className='about-card-letter'> Happy <br/> Families </p>
                    </div>
                </div>
            </div>

            {/* Box Row 2 */}

            <div className="row mx-n5 mt-3">
                <div className="col-md col-lg col-xl px-2">
                    <div className="p-3 border">
                        <p className='mt-4'> 
                            <span className='about-numeric'>8</span> 
                        </p>
                        <p className='about-card-letter'> Awards & <br/> Accolades </p>
                    </div>
                </div>
                <div className="col-md col-lg col-xl px-2">
                    <div className="p-3 border">
                        <p className='mt-4'> 
                            <span className='about-numeric'>15</span> 
                        </p>
                        <p className='about-card-letter'> Emerging <br/> Cities </p>
                    </div>
                </div>
            </div> 

            {/* Read More Button */}
            
            <div className='row text-start mt-5'>
                <div className='col-md-12 col-lg-12 col-xl-12'>
                    <button className='btn btn-md about-more-btn'> Read more </button>
                </div>
            </div>
            
        </div>
      </div>
  )
}

export default Banner

