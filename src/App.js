import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Header from './Sections/header'
import Banner from './Sections/banner'
import About from './Sections/about'
import Projects from './Sections/projects'
import Philosophy from './Sections/philosophy'
import OnGoingProjects from './Sections/ongoingproj'
import Testimonials from './Sections/testimonials'
import Contact from './Sections/contact'
import Footer from './Sections/footer'

function App() {
  return (
    <div className="App container-fluid">
        <div className='row'>
            <div className='col stickey'>
                <Header/>
            </div>
        </div>

        <div className='row'>
            <div className='col'>
                <Banner/>
            </div>
        </div>

        <div className='row'>
            <div className='col'>
                <About/>
            </div>
        </div>

        <div className='row'>
            <div className='col' style={{backgroundColor:"#F2F4F7"}}>
                <Projects/>
            </div>
        </div>

        <div className='row'>
            <div className='col' style={{backgroundColor:'#363F72'}}>
                <Philosophy/>
            </div>
        </div>

        <div className='row'>
            <div className='col'>
                <OnGoingProjects/>
            </div>
        </div>

        <div className='row'>
            <div className='col' style={{backgroundColor:'#F2F4F7'}}>
                <Testimonials/>
            </div>
        </div>

        <div className='row'>
            <div className='col'>
                <Contact/>
            </div>
        </div>

        <div className='row'>
            <div className='col' style={{backgroundColor:'#101828'}}>
                <Footer/>
            </div>
        </div>

    </div>
  )
}

export default App
