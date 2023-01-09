import Image from "next/image";
import windows_Image from "../../../public/assets/img/windows-gray.png";
import linux_Image from "../../../public/assets/img/linux-gray.png";
import {useWizardStateContext} from "../../../core/context/WizardStateContext";
import { OperatingSystemEnum } from "../../../core/utils/enums/OperatingSystemEnum";
import { WorkspaceTypeEnum } from "../../../core/utils/enums/WorkspaceTypeEnum";



export const SystemSelectionComponent = () => {

    const {workspaceType, setWorkspaceType} = useWizardStateContext();

    return (
        <div>
            <p>Wähle Sie zwischen folgenden Arbeitsplatstypen aus</p>
            <div className="flex left-right">
                <input className="hidden"  type={"radio"} name={"system"} id="r-single" checked={workspaceType == WorkspaceTypeEnum.SINGLE_DESK} onClick={() => setWorkspaceType(WorkspaceTypeEnum.SINGLE_DESK)}/> 
                <label className="label-radio" htmlFor="r-single"> 
                
                Einzelarbeitsplatz </label>

                <input className="hidden" type={"radio"} name={"system"} id="r-duo" checked={workspaceType == WorkspaceTypeEnum.DOUBLE_DESK} onClick={() => setWorkspaceType(WorkspaceTypeEnum.DOUBLE_DESK)}/>
                <label className="label-radio" htmlFor="r-duo"> 
                
                Doppelarbeitsplatz </label>
            </div>
        </div>
    );
}