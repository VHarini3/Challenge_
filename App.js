import React from 'react';  // Import React
import './App.css';  // Import your CSS styles
import Navbar from './components/Navbar/Navbar';  // Corrected import for Navbar
import LandingPage from './components/LandingPage/LandingPage';  // Corrected import for LandingPage
import Footer from './components/Footer/Footer';  // Corrected import for Footer

const App = () => {
    return (
        <div>
            <Navbar />
            <LandingPage />  {/* Using the correct LandingPage component */}
            <Footer />
        </div>
    );
};

export default App;  // Export App component



