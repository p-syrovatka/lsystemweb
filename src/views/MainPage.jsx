import React from 'react';
import Hero from '../Components/Hero';
import LsysSection from '../Components/LsysSection';
import DragonCurve from '../Components/GeneratedLsystems/DragonCurve';

function MainPage() {

    return (
        <div>
            <div className='flex'>
                <Hero />
            </div>
            <div>
                <LsysSection />
            </div>
        </div>
    )

}

export default MainPage;