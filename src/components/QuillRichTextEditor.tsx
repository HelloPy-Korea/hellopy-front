import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill의 기본 스타일을 import 합니다.

const RichTextEditor: React.FC = () => {
  const [value, setValue] = useState<string>("");

  const handleChange = (content: string) => {
    setValue(content);
  };

  return (
    <div className="my-4">
      <ReactQuill theme="snow" value={value} onChange={handleChange} />
    </div>
  );
};

export default RichTextEditor;
