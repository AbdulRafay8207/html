import { useState } from "react"

const Steeper = ()=>{
    const steps = [1,2,3]
    const [currentStep, setCurrentStep] = useState(1)
    const handleNext = ()=>{
        setCurrentStep(currentStep + 1)
    }
    const handlePrevious = ()=>{
        setCurrentStep(currentStep - 1)
    }
    return(
        <div>
        <div style={{display: 'flex', gap: 40}}>
            {steps.map((step)=>(
                <span className={`item ${currentStep === step? 'red': 'blue'}`} key={step}>{step}</span>
            ))}
            </div>
            <div style={{marginTop: 40}}>
                <button onClick={handlePrevious} disabled={currentStep === 1}>Previous</button>
                <button onClick={handleNext} disabled={currentStep === 3}>Next</button>
            </div>
        </div>
    )
}
export default Steeper