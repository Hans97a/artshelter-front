import { Mobile, Pc } from "../../lib/Device";
import MobileEducation from "./MobileEducation";
import PcEducation from "./PcEducation";


export default function EducationBody(){
    return (
        <>
            <Mobile>
                <MobileEducation />
            </Mobile>
            <Pc>
                <PcEducation/>
            </Pc>
        </>
    )
}