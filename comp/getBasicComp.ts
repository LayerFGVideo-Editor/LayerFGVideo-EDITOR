// Trimmed for brevity
export function getBasicComposition() {
  return {
    output_format: 'mp4',
    width: 1920,
    height: 1080,
    elements: [
      {
        id: '48734f5c-8c90-41ac-a059-e949e733936b',
        name: 'Main-Image',
        type: 'image',
        time: 0,
        source: 'https://creatomate.com/files/assets/5bc5ed6f-26e6-4c3a-8d03-1b169dc7f983.jpg',
        color_overlay: 'rgba(0,0,0,0.25)',
        animations: [
          // ...
        ],
      },
      {
        id: '72ec46a3-610c-4b46-86ef-c9bbc337f012',
        name: 'Tagline',
        type: 'text',
        time: 1,
        duration: 2.5,
        text: 'LayerFGVideo Editor',
        font_family: 'Oswald',
        font_weight: '600',
        // ...
      },
      // ...
    ],
  };
}
