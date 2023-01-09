import { Mobile, Pc } from "../../lib/Device";
import MobileBody from "./MobileBody";
import PcBody from "./PcBody";

export default function Body() {
  return (
    <>
      <Mobile>
        <MobileBody />
      </Mobile>
      <Pc>
        <PcBody />
      </Pc>
    </>
  );
}
