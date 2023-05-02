import { Routes, Route , useLocation } from 'react-router-dom'
import Layouts from './components/Layouts'
import Public from './components/Public'
import Login from './features/auth/Login';
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import NotesList from './features/notes/NotesList'
import UsersList from './features/users/UsersList'
import FAQS from './components/FAQS'
import Contact from './components/Contact';
import Navbar from "./components/Navbar";
import AboutUs from "./components/AboutUs";
import Footer from './components/Footer.js'

function App() {
  const isAboutPage = useLocation().pathname === '/';

  return (
    <>
      {isAboutPage && <Public />}
      <Navbar />
      <Routes>
        {/* this element is the parent route of everything else*/}
        <Route path="/" element={<Layouts />}>
          {/* public links to a login component, "index" render the children as the default component */}
          <Route index element={<AboutUs />}/>

          <Route path="FAQS" element={<FAQS/>}/>

          <Route path="ContactUs" element={<Contact/>}/>

          <Route path="login" element={<Login/>} />

          {/* Begin Dash: Where the protected routes will begin */}
          <Route path="dash" element={<DashLayout />}>
            {/* wraps around other components that will be protected inside this route */}
            <Route index element={<Welcome />}></Route>

            <Route path="notes">
              <Route index element={<NotesList />} />
            </Route>

            <Route path="users">
              <Route index element={<UsersList />} />
            </Route>

          </Route>
          {/* End Dash */}

        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
