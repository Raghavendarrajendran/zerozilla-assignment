import './ongoingproj.css'
import 'bootstrap/dist/css/bootstrap.css'
import ProjLogo from '../Images/Projects/proj_logo.png'
import AccessHeight from '../Images/OngoingProj/accessheights.jpg'
import AccessVilla from '../Images/OngoingProj/accessvilla.jpg'
import AccessEnclave from '../Images/OngoingProj/accessenclave.jpg'
import LocationVector from '../Images/OngoingProj/location.png'

const OnGoingProjects = ()=> {
  return (
      <div className='row p-5'>

        {/* Part 1 */}

        <div className='col-md-12 col-lg-12 col-xl-12'>
            <div className='row p-3'>
                <div className='col-6'>
                    <div className='row'>
                        <div className='col-5'>
                            <p className='title-css text-start'> <span> <img src={ProjLogo} alt="Proj Icon"/> ONGOING PROJECTS </span></p>
                        </div>
                        <div className='col-7'>
                            <hr style={{ width:'100%'}}/>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <p className='text-start title-desc-css'> 
                    We have an exciting lineup of ongoing projects that showcase our commitment 
                    to delivering exceptional real estate developments. Here are a few of our current
                    projects that are shaping the future:
                    </p>
                </div>
            </div>
        </div>

        {/* Part 2 */}

        <div className='col-md-12 col-lg-12 col-xl-12 text-start'>
            <button className='m-2 location-btn'> Bangalore </button>
            <button className='m-2 location-btn'> Mumbai </button>
            <button className='m-2 location-btn'> Hyderabad </button>
            <button className='m-2 location-btn'> Chennai </button>
            <button className='m-2 location-btn'> Delhi </button>
            <button className='m-2 location-btn'> Rajesthan </button>
        </div>

        {/* Part 3 */}

        <div className='col-md-12 col-lg-12 col-xl-12'>

        {/* Set 1 */}

            <div className='row p-3'>
                <div className='col-md-6 col-lg-6 col-xl-6'>
                    <div className='row shadow-sm'>
                        <img className='mt-2 mb-3' src={AccessVilla} alt="Access Villa"/>
                        <div className='col-md-6 col-lg-6 col-xl-6 text-start'>
                            <p className='on-proj-title-css text-start'> ACCESS VILLA’S </p>
                            <p className='vector-logo-text text-start'> 
                                <span> 
                                    <img className='vector-logo' src={LocationVector} alt="Location Icon"/> 
                                    <span style={{marginLeft:8}}>Bannerghatta Road(E)  </span>
                                </span>
                            </p>
                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6 text-end'>
                            <button style={{marginTop:13}} className='btn btn-sm about-more-btn'> Explore Now </button>
                        </div>
                    </div>
                </div>

                <div className='col-md-6 col-lg-6 col-xl-6'>
                    <div className='row shadow-sm'>
                        <img className='mt-2 mb-3' src={AccessHeight} alt="Access Heights"/>
                        <div className='col-md-6 col-lg-6 col-xl-6 text-start'>
                            <p className='on-proj-title-css text-start'> ACCESS HEIGHTS </p>
                            <p className='vector-logo-text text-start'> 
                                <span> 
                                    <img className='vector-logo' src={LocationVector} alt="Location Icon"/> 
                                    <span style={{marginLeft:8}}> Hebbal </span> 
                                </span>
                            </p>

                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6 text-end'>
                            <button style={{marginTop:13}} className='btn btn-sm about-more-btn'> Explore Now </button>
                        </div>
                    </div>
                </div>

            </div>

            {/* Set 2 */}

            <div className='row p-3'>
                 <div className='col-md-6 col-lg-6 col-xl-6'>
                    <div className='row shadow-sm'>
                        <img className='mt-2 mb-3' src={AccessEnclave} alt="Access Enclave"/>
                        <div className='col-md-6 col-lg-6 col-xl-6 text-start'>
                            <p className='on-proj-title-css text-start'> ACCESS ENCLAVE </p>
                            <p className='vector-logo-text text-start'> 
                                <span> 
                                    <img className='vector-logo' src={LocationVector} alt="Location Icon"/> 
                                    <span style={{marginLeft:8}}> Jayanagar </span>
                                </span>
                            </p>

                        </div>
                        <div className='col-md-6 col-lg-6 col-xl-6 text-end'>
                            <button style={{marginTop:13}} className='btn btn-sm about-more-btn'> Explore Now </button>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    
      </div>
      
  )
}

export default OnGoingProjects

