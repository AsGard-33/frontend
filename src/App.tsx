import GlobalStyles from "styles/GlobalStyles";
// import Layout from "components/Layout/Layout";

// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HashRouter} from "react-router-dom";
// Route, Routes



// import Weather from "pages/Weather/Weather";
import LoginForm from "components/LoginForm/LoginForm";
import Logout from "components/Logout/Logout";
// import Home from "pages/Home/Home";

function App() {
  return (
    <HashRouter>
      <GlobalStyles />
     
       <LoginForm/>
       <Logout/>
       {/* <Home/> */}
      {/* <Weather /> */}
     </HashRouter>
  );
 }

 export default App;