import { Mobile, Pc } from "../../lib/Device";
import PcFooter from "./PcFooter";
import MobileFooter from "./MobileFooter";

export default function Footer() {
  return (
    <>
      <Mobile>
        <MobileFooter />
      </Mobile>
      <Pc>
        <PcFooter />
      </Pc>
    </>
  );
}
