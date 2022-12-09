'use client'
import '../../app/global.css';
import {DefaultWizardStepProps, useWizardContext} from "../../context/WizardContext";

export default function ProgressComponent() {

    const {activeStepIndex, steps} = useWizardContext<DefaultWizardStepProps>();

    return (
        <div className="relative">
            <div className="w-full bg-office-gray-600 rounded-full h-2.5 bg-office-gray-600">
                <div className="bg-office-green-400 h-2.5 rounded-full transition-width ease-in-out duration-500"
                     style={{width: 100 / steps.length * (activeStepIndex + 1) + "%"}}></div>
            </div>
        </div>

    )
}
