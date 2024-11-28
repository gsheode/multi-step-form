import React from "react";
import './LandingPage.css'
import StepOneForm from './FormSteps/StepOneForm.tsx';
import StepTracker from "../StepTracker/StepTracker.tsx";

const LandingPage = () => {
    return (
        <div className="background">
            <div className={'form-container'}>
                <StepTracker />
                <StepOneForm />
            </div>
        </div>)
}

export default LandingPage;