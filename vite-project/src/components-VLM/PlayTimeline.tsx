import { useAtom, useSetAtom } from "jotai";
import {
  playPositionAtom, videoElAtom,
  videoLengthAtom
} from "./atoms";
import { secondsToTimestamp } from "./utils";
import { useDrag } from "@use-gesture/react";
import { secondWidth } from "./consts";


function PlayTimeline() {
  const [videoEl] = useAtom(videoElAtom);
  const setPlayPosition = useSetAtom(playPositionAtom);
  const [playPosition] = useAtom(playPositionAtom);
  const [videoLength] = useAtom(videoLengthAtom);
  const player = videoEl!;

  const timelineDrag = useDrag(({ active, xy: [x], currentTarget }) => {
    if (active) {
      const el = currentTarget as HTMLElement;
      const offset = el.getBoundingClientRect().left;
      const newPosition = ((x - offset) / el.clientWidth) * player.duration;
      setPlayPosition(newPosition);
      player.currentTime = newPosition;
    }
  });

  const timelineWidth = videoLength * secondWidth;

  return (
    <div
      className="bg-neutral-400 h-0 relative flex justify-end touch-none cursor-crosshair"
      {...timelineDrag()}
      style={{
        width: timelineWidth,
      }}
    >
      <div
        className="absolute bg-neutral-800 h-6 pointer-events-none"
        style={{
          width: 2,
          top: 0,
          marginLeft: -1,
          left: `${(playPosition / player.duration) * 100}%`,
        }}
      ></div>
      <div className="fixed right-0 -mt-[26px] flex text-sm items-center text-neutral-400 font-mono pointer-events-none select-none px-2">
        <div>{secondsToTimestamp(Math.round(playPosition))}</div> /{" "}
        <div>{secondsToTimestamp(Math.round(videoLength))}</div>
      </div>
    </div>
  );
}
export default PlayTimeline;

