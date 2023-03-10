import { Mobile, Pc } from "../../lib/Device";
import MobileConcertDetail from "./MobileConcertDetail";
import PcConcertDetail from "./PcConcertDetail";

export default function ConcertDetailBody() {
  return (
    <>
      <Mobile>
        <MobileConcertDetail />
      </Mobile>
      <Pc>
        <PcConcertDetail />
      </Pc>
    </>
  );
}
