import React from 'react'
import { BrowserRouter,Route,Routes} from 'react-router-dom'
import Footer from './Component/Layout/Footer'
import Navbar from './Component/Layout/Navbar'
import Home from './Component/Pages/Home'
import Login from './Component/Pages/Login'
import Pricing from './Component/Pages/Pricing'
import Producttour from './Component/Pages/Producttour'
import Requestdemo from './Component/Pages/Requestdemo'
import Science from './Component/Pages/Science'
import Signup from './Component/Pages/Signup'
import Testlibary from './Component/Pages/Testlibary'
import Backtologin from './Component/Pages/Backtologin'
import ScrollToBtn from './Component/Pages/ScrollTopBtn'
import Salaries from './Component/Pages/Salaries';
import Privacypolicy from './Component/Pages/Privacypolicy'
import Cookiepolicy from './Component/Pages/Cookiepolicy'
import Contact from './Component/Pages/Contact'
import Blog from './Component/Pages/Blog'
import Sitemap from './Component/Pages/Sitemap'
import ForSubject from './Component/Pages/ForSubject'
// import Navbarlogin from './Component/Login/Navbarlogin'
import Careers from './Component/Pages/Careers'
import HelpCenter from './Component/Pages/HelpCenter'
import Navbarlogin from './Component/Login/Navbarlogin'
import Assessment from './Component/Login/Assessment'
// import Cookiepolicy from './Component/Pages/Cookoepolicy'

const App = () => {
  return (
    <div>
    <BrowserRouter>
     <Navbar/>
     <Routes>
       <Route exact  path='/' element={<Home/>}/>
       <Route exact  path='/product' element={<Producttour/>}/>
       <Route exact  path='/science' element={<Science/>}/>
       <Route exact  path='/test' element={<Testlibary/>}/>
       <Route exact  path='/pricing' element={<Pricing/>}/>
       <Route exact  path='/login' element={<Login/>}/>
       <Route exact  path='/request' element={<Requestdemo/>}/>
       <Route exact  path='/signup' element={<Signup/>}/>
       <Route exact  path='/backlgn' element={<Backtologin />}/>
       <Route exact  path='/Salaries' element={<Salaries />}/>
       <Route exact  path='/Privac' element={<Privacypolicy />}/>
       <Route exact  path='/Cookies'element={<Cookiepolicy />}/>
       <Route exact path='/Contact'element={<Contact />}/>
       <Route exact path='/Blog' element={<Blog />}/>
       <Route exact path='/Sitemap'element={<Sitemap />}/>
       <Route exact path='/ForSubject' element={<ForSubject />}/>
       <Route exact path='/Careers' element={<Careers />}/>
       {/* <Route exact path='/Helpcenter'element={<HelpCenter />}/> */}
       {/* <Route exact path='/Navbarlogin' element={<Navbarlogin />}/> */}
       {/* <Route exact path="/navlogin" element={<Navbarlogin/>}/> */}
       {/* <Route exact path='/asses' element={<Assessment/>}/> */}
      
    </Routes> 
     {/* <Navbarlogin/> */}
   <Footer/>
    <ScrollToBtn/>
     </BrowserRouter> 
    
    </div>
  )
}

export default App
