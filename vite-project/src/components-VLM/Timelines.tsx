import { useAtom } from "jotai";
import { timelineScrollRefAtom } from "./atoms";
// import { ClipTimeline } from "./ClipTimeline";
import ClipTimeline from "./ClipTimeline";
function Timelines() {
  const [timelineScrollRef] = useAtom(timelineScrollRefAtom);
  return (
    <div
      ref={(el) => {
        timelineScrollRef.current = el;
      }}
      className="overflow-x-auto mt-px pb-4"
    >
      {/* <ClipTimeline /> */}
      {/* <ClipTimeline/> */}
      <ClipTimeline/>
    </div>
  );
}
export default Timelines;
