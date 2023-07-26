import React, { useState, useRef } from 'react';
// import ImagePreview from './ImagePreview/ImagePreview';
import './UploadingImage.css'

const UploadingImage = () => {
    const [images, setImages] = useState([]);
    const fileInputRef = useRef(null);

    const handleFileUpload = (event) => {
        const uploadedFiles = event.target.files;
        const newImages = Array.from(uploadedFiles).filter((file) =>
            file.type.match('image/(png|jpeg)'),
        ).map((file) => ({
            file,
            name: file.name,
        }));
        setImages([...images, ...newImages]);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const droppedFiles = event.dataTransfer.files;
        const newImages = Array.from(droppedFiles).filter((file) =>
            file.type.match('image/(png|jpeg)'),
        ).map((file) => ({
            file,
            name: file.name,
        }));
        setImages([...images, ...newImages]);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handlePreview = (file) => {
        window.open(URL.createObjectURL(file));
    };

    const handleRemove = (index) => {
        const newImages = [...images];
        newImages.splice(index, 1);
        setImages(newImages);
    };

    const renderImageNames = () => {
        return images.map((image, index) => (
            <div key={index} className="image-name-container">
                <p>{image.name}</p>
                <div className="button-container">
                    <button
                        className="preview-button"
                        onClick={() => handlePreview(image.file)}
                    >
                        Preview
                    </button>
                    <button
                        className="remove-button"
                        onClick={() => handleRemove(index)}
                    >
                        Remove
                    </button>
                </div>
            </div>
        ));
    };

    const handleOpenFilePicker = () => {
        fileInputRef.current.click();
    };

    return (
        <div
            className="image-uploader"
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={handleOpenFilePicker}
        >
            <div className="file-input-container">
                <input
                    type="file"
                    accept="image/png, image/jpeg"
                    multiple
                    onChange={handleFileUpload}
                    ref={fileInputRef}
                />
            </div>
            <div className="image-name-list">{renderImageNames()}</div>
        </div>
    );
};

export default UploadingImage;