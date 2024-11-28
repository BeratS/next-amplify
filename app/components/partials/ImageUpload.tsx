'use client'

import { list } from 'aws-amplify/storage';
import { FileUploader, StorageImage  } from '@aws-amplify/ui-react-storage';
import { useEffect } from 'react';

const ImageUpload = () => {
  
  const fetchUploads = async () => {
    const result = await list({
      path: 'public',
      // Alternatively, path: ({identityId}) => `album/{identityId}/photos/`
    });

    console.log(result);
  }

  useEffect(() => {
    fetchUploads();
  }, []);

  const onSuccess = async () => {
    await fetchUploads();
  }

  const onError = async () => {
    await fetchUploads();
  }

  return (
    <>
      <FileUploader
        acceptedFileTypes={['image/*']}
        // path="public/"
        path={({ identityId }) => `public/${identityId}/`}
        maxFileCount={1}
        isResumable
        onUploadSuccess={onSuccess}
        onUploadError={onError}
      />
      
      {/* <StorageImage alt="cat" path="public/cat.jpg" />; */}
    </>
  );
};

export default ImageUpload