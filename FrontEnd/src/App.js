import Header from "./header";
import Landing from "./landing";
import Footer from "./footer";
import Login from "./authentication/login";
import SignUp from "./authentication/signup";
import { Route,Routes } from "react-router-dom";
import Coachespage from "./coaching/coachespage";
import VideosPage from "./videos/videosPage";

function App() {
  return (
    <div>
      <Header/>
     <Routes>
      <Route exact path="/" element={<Landing/> }></Route>
      <Route exact path="/coaches" element={<Coachespage/>}></Route>
      <Route exact path="/login" element={<Login />}></Route>
      <Route exact path="/signup" element={<SignUp />}></Route>
      <Route exact path='/videos' element={<VideosPage />}></Route>
     </Routes>
      <Footer/>
    </div>
  );
}

export default App;
