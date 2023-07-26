import React, { useRef } from 'react';

function ImageCompressor() {
  const inputRef = useRef(null);

  const compressImage = () => {
    const file = inputRef.current.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const image = new Image();
      image.src = event.target.result;

      image.onload = function () {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Calculate the new width and height to maintain the aspect ratio
        const maxWidth = 800;
        const maxHeight = 600;
        let width = image.width;
        let height = image.height;

        if (width > height) {
          if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
          }
        } else {
          if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
          }
        }

        // Set the canvas dimensions
        canvas.width = width;
        canvas.height = height;

        // Draw the image on the canvas
        ctx.drawImage(image, 0, 0, width, height);

        // Convert the canvas data to a compressed data URL
        const compressedDataURL = canvas.toDataURL('image/jpeg', 0.7);

        // Do something with the compressed image data URL
        console.log(compressedDataURL);
      };
    };

    reader.readAsDataURL(file);
  };

  return (
    <div>
      <input type="file" accept="image/*" ref={inputRef} />
      <button onClick={compressImage}>Compress Image</button>
    </div>
  );
}

export default ImageCompressor;
