import React, { useRef, useState } from 'react'

function DragDrop() {
    const [files, setFiles] = useState(null);
    const inputRef = useRef();
    const handlerDragOver = (event) => {
        event.preventDefault()
    }
    const handleDrop = (event) => {
        event.preventDefault()
        setFiles(event.dataTransfer.file)
    }
    //send file to seerver
    // const handleUpload = () => {

    // }
    // if (files) return (
    //     <div className='upload'>
    //         <ul>
    //             {Array.from(files).map((file, idx) => <li key={idx}>{file.name}</li>)}
    //             <div className='action'>
    //                 <button onClick={() => setFiles(null)}>Cancel</button>
    //                 <button onClick={handleUpload}>Upload</button>
    //             </div>
    //         </ul>
    //     </div>
    // )
    return (
        <>
            {
                !files && (
                    <div className='dropzone'
                        onDragOver={handlerDragOver}
                        onDropOver={handleDrop}
                    >
                        <h1>Drag and Drop Files to Upload</h1>
                        <input type='file'
                            multiple
                            onChange={(event) => setFiles(event.target.files)}
                            hidden
                            ref={inputRef}
                        />
                        <button onClick={() => inputRef.current.click()}>Select Files</button><br />
                        <h5></h5>
                    </div>)
            }
        </>
    )
}

export default DragDrop