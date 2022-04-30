import React from 'react'
// import Header from '../Header'
import AdBanner from './AdBanner'
import ProjectPromotion from './ProjectPromotion';
import PersonPromotion from './PersonPromotion';
// import Footer from '../Footer';

function App() {
    return (
        <div className="z-0">
            <AdBanner />
            <ProjectPromotion />
            <PersonPromotion />
        </div>
    )
}

export default App