import { Mobile, Pc } from "../../lib/Device";
import PcConcert from "./PcConcert";

export default function ConcertBody() {
  return (
    <>
      <Mobile></Mobile>
      <Pc>
        <PcConcert />
      </Pc>
    </>
  );
}
