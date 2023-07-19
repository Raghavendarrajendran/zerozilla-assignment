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
    <div className="App">
        <div className='col'>
            <Header/>
        </div>

        <div className='col'>
            <Banner/>
        </div>

        <div className='col'>
            <About/>
        </div>

        <div className='col' style={{backgroundColor:"#F2F4F7"}}>
            <Projects/>
        </div>

        <div className='col' style={{backgroundColor:'#363F72'}}>
            <Philosophy/>
        </div>

        <div className='col'>
            <OnGoingProjects/>
        </div>

        <div className='col' style={{backgroundColor:'#F2F4F7'}}>
            <Testimonials/>
        </div>

        <div className='col'>
            <Contact/>
        </div>

        <div className='col' style={{backgroundColor:'#101828'}}>
            <Footer/>
        </div>

    </div>
  )
}

export default App
