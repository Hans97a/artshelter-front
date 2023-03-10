import { Mobile, Pc } from "../../lib/Device";
import MobileNotice from "./MobileNotice";
import PcNotice from "./PcNotice";

export default function NoticeBody() {
  return (
    <>
      <Mobile>
        <MobileNotice />
      </Mobile>
      <Pc>
        <PcNotice />
      </Pc>
    </>
  );
}
