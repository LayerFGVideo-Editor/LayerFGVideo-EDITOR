button
  onClick={async () => {
    await previewRef.current?.setZoom('fixed', 0.5);
  }}
>
  Zoom 50%
</button>
export const ProgressControl: React.FC<ProgressControlProps> = (props) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const handleRef = useRef<HTMLDivElement>(null);

  // The current time of the video
  const [currentTime, setCurrentTime] = useState(0);
  const currentTrackProgress = props.preview.state?.duration
    ? currentTime / props.preview.state.duration
    : 0;

  // Listen for time changes
  useEffect(() => {
    props.preview.onTimeChange = (time) => {
      setCurrentTime(time);
    };
  }, [props.preview]);

  // Sets the current time
  const setTime = async (time: number) => {
    await props.preview.setTime(time);
  };

  // Throttle the 'setTime' function to 15 milliseconds as mouse events
  // are not throttled by default
  const setTimeThrottled = useCallback(throttle(setTime, 15), []);

  // This is where data is stored while dragging the mouse
  const [dragContext, setDragContext] = useState<{ startX: number; startTime: number }>();

  return (
    <div className={styles.progressControl}>
      <div ref={trackRef} className={styles.progressControlTrack} />
      <DraggableCore
        nodeRef={handleRef}
        onStart={(e, data) => {
          // Handle drag start...
        }}
        onDrag={(e, data) => {
          // Handle drag movement...
        }}
        onStop={() => {
          // Handle drag stop...
        }}
      >
        <div
          ref={handleRef}
          className={styles.progressControlHandle}
          style={{ left: `${currentTrackProgress * 100}%` }}
        />
      </DraggableCore>
    </div>
  );
};
onStart={(e, data) => {
  // Set the current X pixel position and current time when dragging starts
  setDragContext({
    startX: data.x,
    startTime: currentTime,
  });
}},
onDrag={(e, data) => {
  if (props.preview.state && trackRef.current && dragContext) {
    // Width of the track element in pixels
    const trackWidth = trackRef.current.clientWidth;

    // Track progress from 0 to 1
    const trackProgress = (data.x - dragContext.startX) / trackWidth;

    // Track progress in seconds
    const trackProgressSeconds = Math.min(
      Math.max(
        dragContext.startTime + props.preview.state.duration * trackProgress,
        0,
      ),
      props.preview.state.duration - 0.001,
    );

    // Set the time progress
    setTimeThrottled(trackProgressSeconds);
  }
}}
