// Upload.js
import { useState } from 'react';
import { storage } from '../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

function UploadFile({ photo, setPhoto }) {
  const [file, setFile] = useState(null);
  const [progress, setProgress] = useState(0);

  const handleUpload = () => {
    if (!file) return;

    const storageRef = ref(storage, `food-app/uploads/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Progress
        const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(percent.toFixed(0));
      },
      (err) => console.error(err),
      () => {
        // Get download URL
        getDownloadURL(uploadTask.snapshot.ref).then((photo) => {
          setPhoto(photo);
        });
      }
    );
  };



  
  return (
    <div>
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button className='auth-btn my-1 mx-auto' type='button' onClick={handleUpload}>Upload</button>
      <p>{progress > 0 && `Uploading: ${progress}%`}</p>
      {photo && (
        <div className='mx-auto w-2/3'>
          {/* <a href={photo} target="_blank" rel="noopener noreferrer">{photo}</a> */}
          {/* <br /> */}
          <img src={photo} alt="Uploaded File" className='w-24 h-24 my-2 rounded-2xl'/>
        </div>
      )}
    </div>
  );
}

export default UploadFile;
