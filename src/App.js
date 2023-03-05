import React, { useState } from "react";
import { marked } from "marked";

function App() {
  const [editorContent, setEditorContent] = useState("");

  function handleEditorChange(event) {
    setEditorContent(event.target.value);
  }

  function renderMarkdown(markdown) {
    return { __html: marked(markdown) };
  }

  return (
    <div className="m-0 vh-100 row justify-content-center align-items-center">
    <div className="col-12" id="editor">
      <textarea
        style={{ height: "60vh", overflowWrap: "break-word" }}
        value={editorContent}
        onChange={handleEditorChange}
      ></textarea>
    </div>
    <div className="col-12 " id="preview">
      <div
        style={{ height: "60vh", overflowWrap: "break-word" }}
        dangerouslySetInnerHTML={renderMarkdown(editorContent)}
      ></div>
    </div>
  </div>
  );
}

export default App;

