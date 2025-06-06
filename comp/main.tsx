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
