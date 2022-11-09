import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import AboutUs from './containers/aboutUs/AboutUs';
import Header from './containers/header/Header';
import NavBar from './containers/navBar/NavBar';
import Tech1 from './containers/Tech/Tech1';
import License from './containers/license/License';
import Video from './containers/video/Video';
import Footer from './containers/footer/Footer';
import Vision from './containers/Vision/Vision';

function App() {
  return (
    <div>
      <NavBar/>
      <Header/>
      <AboutUs/>
      <Vision />
      <Tech1/>
      <Video />
      <License/>
      <Footer/> 
    </div>
  );
}

export default App;
