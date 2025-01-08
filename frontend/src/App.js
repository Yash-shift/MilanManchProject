import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import Events from './pages/Events';
// import Contact from './pages/Contact';
// import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';
// import { AuthProvider } from './context/AuthContext';
// import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <Navbar />
    // AuthProvider provides authentication state to all child components
    // <AuthProvider>
    //   <Router>
    //     <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white flex flex-col">
    //       <Navbar />
    //       <main className="flex-grow">
    //         {/* <Routes>
    //           <Route path="/" element={<Home />} />
    //           <Route path="/events" element={<Events />} />
    //           <Route path="/contact" element={<Contact />} />
    //           <Route path="/signin" element={<SignIn />} />
    //           <Route path="/signup" element={<SignUp />} />
    //         </Routes> */}
    //       </main>
    //       <Footer />
    //     </div>
    //   </Router>
    // </AuthProvider>
  );
}

export default App;