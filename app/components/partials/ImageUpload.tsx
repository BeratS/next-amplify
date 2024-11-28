'use client'

import { FileUploader } from '@aws-amplify/ui-react-storage';
import '@aws-amplify/ui-react/styles.css';

const ImageUpload = () => {
  return (
    <FileUploader
      acceptedFileTypes={['image/*']}
      path="public/"
      // path={({ identityId }) => `public/${identityId}/`}
      maxFileCount={1}
      isResumable
    />
  );
};

export default ImageUpload