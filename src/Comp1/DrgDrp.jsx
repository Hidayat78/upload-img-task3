import React, { useState } from "react";
import './DrgDrp.css';

const DrgDrp = () => {
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

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleDragEnter = (event) => {
        event.preventDefault();
        // Add styles to indicate drag enter
        event.target.classList.add('drag-enter');
    };

    const handleDragLeave = (event) => {
        event.preventDefault();
        // Remove styles on drag leave
        event.target.classList.remove('drag-enter');
    };

    const handleDelete = () => {
        setPreviewImage(null);
    };
    return (
        <>
            <div className="box">
                <div className="control_wrapper">
                    <div className='droparea'>
                        <div
                            id="image-box"
                            onDrop={handleDrop}
                            onDragOver={handleDragOver}
                            onDragEnter={handleDragEnter}
                            onDragLeave={handleDragLeave}
                        >
                            {previewImage ? (
                                <>
                                    <img src={previewImage} alt="Preview" />
                                    <button onClick={handleDelete} className="DeleteBox">Delete</button>
                                </>
                            ) : (
                                <p>Drag and drop an image here</p>
                            )}
                        </div>
                    </div>
                    <div id='uploadfile'>
                        <input type="file" accept="image/jpeg, image/jpj" className="fileupload" name="UploadFiles" />
                    </div>
                </div>
            </div>
        </>
    )
}
export default DrgDrp