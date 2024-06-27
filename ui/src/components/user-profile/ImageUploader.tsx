// ImageUploader.tsx
import React, { useRef } from "react";

const ImageUploader: React.FC = () => {
  const uploadedImage = useRef(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = (e) => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <div
        style={{
          height: "60px",
          width: "60px",
          border: "1px dashed black",
        }}
      >
        <img
          ref={uploadedImage}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        />
      </div>
    </div>
  );
};

export default ImageUploader;
