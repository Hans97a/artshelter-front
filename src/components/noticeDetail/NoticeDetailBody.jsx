import { Mobile, Pc } from "../../lib/Device";
import MobileNoticeDetail from "./MobileNoticeDetail";
import PcNoticeDetail from "./PcNoticeDetail";

export default function NoticeDetailBody() {
  return (
    <>
      <Mobile>
        <MobileNoticeDetail />
      </Mobile>
      <Pc>
        <PcNoticeDetail />
      </Pc>
    </>
  );
}
