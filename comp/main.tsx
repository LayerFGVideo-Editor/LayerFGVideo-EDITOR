const setUpPreview = (htmlElement: HTMLDivElement) => {
  // Clean up an older instance of the preview SDK
  if (previewRef.current) {
    previewRef.current.dispose();
    previewRef.current = undefined;
  }

  // Initialize a preview. Make sure you provide your own public token
  const preview = new Preview(htmlElement, 'player', 'public-0x6hcqpfhrhw16d67ogth7ry');

  preview.onReady = async () => {
    // Once the SDK is ready, create a basic video scene
    await preview.setSource(getBasicComposition());

    // Skip to 2 seconds into the video
    await preview.setTime(2);

    setIsLoading(false);
  };

  previewRef.current = preview;
};
const applyTextValue = async (value: string) => {
  // Change the 'Title' element to the provided text value
  // For more information: https://creatomate.com/docs/api/rest-api/the-modifications-object
  await previewRef.current?.setModifications({
    Title: value,
  });
};
<div className={styles.controls}>
  <input
    type="text"
    placeholder="LayerFGVideo Editor"
    onChange={async (e) => {
      await applyTextValue(e.target.value);
    }}
  />
</div>
const playVideo = async () => {
  await previewRef.current?.play();
};

const pauseVideo = async () => {
  await previewRef.current?.pause();
};
<div className={styles.controls}>
  <button
    onClick={async () => {
      await playVideo();
    }}
  >
    Play video
  </button>
  &nbsp;
  <button
    onClick={async () => {
      await pauseVideo();
    }}
  >
    Pause video
  </button>
</div>
preview.onStateChange = async (state) => {
  // Find title element
  const element = preview.findElement((element) => element.source.name === 'Title');
  if (element) {
    setValue(element.source.text);
  }
};
{value && <div>State: {value}</div>}

<div className={styles.controls}>
  <button
    onClick={async () => {
      await changeTitle(`Title ${counter}`);
      setCounter(counter + 1);
    }}
  >
    Change Title
  </button>
  &nbsp;
  <button
    onClick={async () => {
      await previewRef.current?.undo();
    }}
  >
    Undo
  </button>
  &nbsp;
  <button
    onClick={async () => {
      await previewRef.current?.redo();
    }}
  >
    Redo
  </button>
</div>
const preview = new Preview(htmlElement, 'interactive', 'public-0x6hcqpfhrhw16d67ogth7ry');
<button
  onClick={async () => {
    await previewRef.current?.setTime(0);
  }}
>
  Seek to Start
</button>
&nbsp;
<button
  onClick={async () => {
    const preview = previewRef.current;
    if (preview && preview.state) {
      // Move the time state right before the end
      await preview.setTime(preview.state.duration - 0.001);
    }
  }}
>
  Seek to End
</button>
button
  onClick={async () => {
    await previewRef.current?.setZoom('fixed', 0.5);
  }}
>
  Zoom 50%
</button>
