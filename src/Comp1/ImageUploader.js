import React, { useState } from 'react';

const ImageUploader = () => {
    const [previewImage, setPreviewImage] = useState(null);

    const handleDrop = (event) => {
        event.preventDefault();
        const file = event.dataTransfer.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setPreviewImage(reader.result);
        };

        reader.readAsDataURL(file);
    };

    const handleDelete = () => {
        setPreviewImage(null);
    };

    return (
        <div>
            <div
                id="image-box"
                onDrop={handleDrop}
                onDragOver={(event) => event.preventDefault()}
            >
                {previewImage ? (
                    <>
                        <img src={previewImage} alt="Preview" />
                        <button onClick={handleDelete}>Delete</button>
                    </>
                ) : (
                    <p>Drag and drop an image here</p>
                )}
            </div>
        </div>
    );
};

export default ImageUploader;
