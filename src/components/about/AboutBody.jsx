import { Mobile, Pc } from "../../lib/Device";
import MobileAbout from "./MobileAbout";
import PcAbout from "./PcAbout";

export default function AboutBody() {
  return (
    <>
      <Mobile>
        <MobileAbout />
      </Mobile>
      <Pc>
        <PcAbout />
      </Pc>
    </>
  );
}
