button
  onClick={async () => {
    await previewRef.current?.setZoom('fixed', 0.5);
  }}
>
  Zoom 50%
</button>
