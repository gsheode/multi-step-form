import React from "react";
import stepBackground from '../multi-step-form-main/multi-step-form-main/assets/images/bg-sidebar-desktop.svg'
import './StepTracker.css';
const StepTracker = (step) => {
    return (
        <div className="">
            {/* <img src={stepBackground}>
            </img> */}
            <div style={{ backgroundImage: `url(${stepBackground})` }}></div>

        </div>
    );
}
export default StepTracker;