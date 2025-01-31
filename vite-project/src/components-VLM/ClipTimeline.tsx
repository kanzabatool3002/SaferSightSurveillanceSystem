import { useAtom, useSetAtom } from "jotai";
import {
  playPositionAtom, timestampDefaultDurationAtom,
  timestampTextAtom,
  videoElAtom,
  videoLengthAtom
} from "./atoms";
import {
  parseTimestamps,
  timestampToSeconds
} from "./utils";
import { useDrag } from "@use-gesture/react";
import { secondWidth } from "./consts";

function ClipTimeline() {
  const [videoEl] = useAtom(videoElAtom);
  const setPlayPosition = useSetAtom(playPositionAtom);
  const [playPosition] = useAtom(playPositionAtom);
  const player = videoEl!;
  const [timestampText] = useAtom(timestampTextAtom);
  const [defaultDuration] = useAtom(timestampDefaultDurationAtom);
  const [videoLength] = useAtom(videoLengthAtom);

  const timestamps = parseTimestamps(timestampText);
  const timestampSeconds = timestamps.map((tobject) => {
    return { 
      start: timestampToSeconds(tobject.start),
      end: tobject.end ? timestampToSeconds(tobject.end) : timestampToSeconds(tobject.start) + defaultDuration,
      annotation: tobject.annotation
    };
  });

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
      className="bg-neutral-700 h-8 relative cursor-crosshair"
      {...timelineDrag()}
      style={{
        width: timelineWidth,
      }}
    >
      {timestampSeconds.map((range, i) => {
        const { start, end } = range;
        const widthPercent = end !== undefined
          ? (end - start) / videoLength
          : defaultDuration / videoLength;
        const visWidth = Math.max(widthPercent * timelineWidth, 2);
        return (
          <div
            key={`${range}-${i}`}
            className="absolute bg-neutral-500 h-8 pointer-events-none border-l-2 border-neutral-600"
            style={{
              width: visWidth,
              top: 0,
              left: `${(start / player.duration) * 100}%`,
            }}
          ></div>
        );
      })}
      <div
        className="absolute bg-white h-8 pointer-events-none"
        style={{
          width: 2,
          top: 0,
          marginLeft: -1,
          left: `${(playPosition / player.duration) * 100}%`,
        }}
      ></div>
    </div>
  );
}
export default ClipTimeline;

