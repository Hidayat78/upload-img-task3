import { useEffect } from 'react';

const ImagePreview = ({ file }) => {
    useEffect(() => {
        const imageURL = URL.createObjectURL(file);
        window.open(imageURL);
        return () => {
            URL.revokeObjectURL(imageURL);
        };
    }, [file]);

    return null;
};

export default ImagePreview;