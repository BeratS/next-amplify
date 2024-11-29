'use client'

import { list } from 'aws-amplify/storage';
import { FileUploader, StorageImage  } from '@aws-amplify/ui-react-storage';
import { useEffect, useState } from 'react';

interface ItemImage {
    path: string;
    size?: number;
    lastModified?: Date | string;
    eTag?: string;
}

const ImageUpload = () => {

  const [items, setItems] = useState<ItemImage[]>([]);
  
  const fetchUploads = async () => {
    const result = await list({
      path: 'public/',
      // Alternatively, path: ({identityId}) => `album/{identityId}/photos/`
    });

    console.log(result);
    
    setItems(result.items || []);
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
      
      <div className="list flex flex-wrap gap-4 py-4">
        {items.map((item, index) =>
          <StorageImage key={index}
            maxWidth={400}
            alt={`${index}`}
            path={item.path} />
        )}
      </div>
      {/*  */}
    </>
  );
};

export default ImageUpload