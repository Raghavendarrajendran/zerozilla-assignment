import './projects.css'
import 'bootstrap/dist/css/bootstrap.css'
import ProjLogo from '../Images/Projects/proj_logo.png'
import ResidentialProj from '../Images/Projects/residential_proj.jpg'
import CommercialProj from '../Images/Projects/commercial_proj.jpg'
import RetailProj from '../Images/Projects/retail_proj.jpg'
import HospitalityProj from '../Images/Projects/hospitality_proj.jpg'

const Projects = ()=> {
  return (
      <div className='row p-5'>

        {/* Part 1 */}

        <div className='col-md-12 col-lg-12 col-xl-12'>
            <div className='row p-3'>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-4'>
                            <p className='title-css text-start'> <span> <img src={ProjLogo} alt="Logo"/> PROJECTS </span></p>
                        </div>
                        <div className='col-8'>
                            <hr style={{marginLeft:-40, width:'107%'}}/>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <p className='text-start title-desc-css'> 
                        We take pride in our diverse portfolio of exceptional projects. 
                        Each project we undertake is meticulously planned and executed, 
                        with a focus on quality, innovation, and exceeding expectations. 
                        Here are a few highlights from our impressive collection:
                    </p>
                </div>
            </div>
        </div>

        {/* Part 2 */}

        <div className='col-md-12 col-lg-12 col-xl-12'>

        {/* Set 1 */}

            <div className='row p-3'>
                <div className='col-md-6 col-lg-6 col-xl-6'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xl-6 text-start'>
                            <p className='proj-title-css text-start'> RESIDENTIAL PROJECTS </p>
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6 text-end'>
                            <button className='btn btn-sm about-more-btn'> View More </button>
                        </div>
                        <img className='mt-2' src={ResidentialProj} alt="Residentail Project"/>
                    </div>
                </div>
                <div className='col-md-6 col-lg-6 col-xl-6'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xl-6 text-start'>
                            <p className='proj-title-css text-start'> COMMERCIAL PROJECTS </p>
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6 text-end'>
                            <button className='btn btn-sm about-more-btn'> View More </button>
                        </div>
                        <img className='mt-2' src={CommercialProj} alt="Residentail Project"/>
                    </div>
                </div>
            </div>

            {/* Set 2 */}

            <div className='row p-3'>
                <div className='col-md-6 col-lg-6 col-xl-6'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xl-6 text-start'>
                            <p className='proj-title-css text-start'> RETAIL PROJECTS </p>
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6 text-end'>
                            <button className='btn btn-sm about-more-btn'> View More </button>
                        </div>
                        <img className='mt-2' src={RetailProj} alt="Residentail Project"/>
                    </div>
                </div>
                <div className='col-md-6 col-lg-6 col-xl-6'>
                    <div className='row'>
                        <div className='col-md-6 col-lg-6 col-xl-6 text-start'>
                            <p className='proj-title-css text-start'> HOSPITALITY PROJECTS </p>
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6 text-end'>
                            <button className='btn btn-sm about-more-btn'> View More </button>
                        </div>
                        <img className='mt-2' src={HospitalityProj} alt="Residentail Project"/>
                    </div>
                </div>
            </div>

        </div>
    
      </div>
      
  )
}

export default Projects

