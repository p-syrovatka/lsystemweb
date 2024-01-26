import React from 'react';
import { Link } from 'react-router-dom';
import Theoryhero from '../Components/TheoryComponents/TheoryHero';
import DeterministicSection from '../Components/TheoryComponents/DeterministicSection';

function TheoryPage(){
    return(
        <div>
            <div>
            <Theoryhero/>
            </div>
            <div>
                <DeterministicSection/>
            </div>
        </div>
    )
}

export default TheoryPage;