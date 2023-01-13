import { Mobile, Pc } from "../../lib/Device";
import MobileConcert from "./MobileConcert";
import PcConcert from "./PcConcert";

export default function ConcertBody() {
  return (
    <>
      <Mobile>
        <MobileConcert />
      </Mobile>
      <Pc>
        <PcConcert />
      </Pc>
    </>
  );
}
