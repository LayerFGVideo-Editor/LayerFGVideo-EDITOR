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
