import { Mobile, Pc } from "../../lib/Device";
import PcHeader from "./PcHeader";
import MobileHeader from "./MobileHeader";


export default function Header() {
    return (
        <>
            <Mobile>
                <MobileHeader />
            </Mobile>
            <Pc>
                <PcHeader/>
            </Pc>
        </>
    )
}