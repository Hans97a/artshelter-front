import { Mobile, Pc } from "../../lib/Device";
import MobileArtistList from "./MobileArtistList";
import PcArtistList from "./PcArtistList";

export default function ArtistList(){
    return(
        <>
            <Mobile>
                <MobileArtistList />
            </Mobile>
            <Pc>
                <PcArtistList />
            </Pc>
        </>
    )
}