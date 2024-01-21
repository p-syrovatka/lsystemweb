
import React, { Suspense, lazy } from 'react';
const Hero = lazy(() => import('../Components/Hero'));
const LsysSection = lazy(() => import('../Components/LsysSection'));

function MainPage() {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <div className='flex '>
                    <Hero />
                </div>
                <div id='lsysSection' className='flex p-4'>
                    <LsysSection />
                </div>
            </Suspense>
        </div>
    );
}

export default MainPage;