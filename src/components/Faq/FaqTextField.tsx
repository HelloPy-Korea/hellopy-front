import * as React from "react";
import 'react-quill/dist/quill.snow.css';
import RichTextEditor from "@/components/QuillRichTextEditor.tsx";

const FaqTextField: React.FC = () => {
    return (
        <div>
            <h1>텍스트 본문 작성</h1>
            <RichTextEditor />
        </div>
    );
};

export default FaqTextField;