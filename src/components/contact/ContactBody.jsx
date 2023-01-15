import { Mobile, Pc } from "../../lib/Device";
import MobileContact from "./MobileContact";
import PcContact from "./PcContact";

export default function ContactBody() {
  return (
    <>
      <Mobile>
        <MobileContact />
      </Mobile>
      <Pc>
        <PcContact />
      </Pc>
    </>
  );
}
