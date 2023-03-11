import React, { useState } from "react";
import { marked } from "marked";

function App() {

  const [editorContent, setEditorContent] = useState(`# Welcome to my React Markdown Previewer!

  ## This is a sub-heading...
  ### And here's some other cool stuff:

  
  You can also make text **bold**... whoa!
  Or _italic_.
  Or... wait for it... **_both!_**
  And feel free to go crazy ~~crossing stuff out~~.
  
  There's also [links](https://www.freecodecamp.org), and
  > Block Quotes!
  
  And if you want to get really crazy, even tables:
  
  Wild Header | Crazy Header | Another Header?
  ------------ | ------------- | -------------
  Your content can | be here, and it | can be here....
  And here. | Okay. | I think we get it.
  
  - And of course there are lists.
    - Some are bulleted.
       - With different indentation levels.
          - That look like this.
  
  
  1. And there are numbered lists too.
  1. Use just 1s if you want!
  1. And last but not least, let's not forget embedded images:

  `);

  function handleEditorChange(event) {
    setEditorContent(event.target.value);
  }

  function renderMarkdown(markdown) {
    return { __html: marked(markdown) };
  }

  return (
    <div className="m-0 vh-100 row justify-content-center align-items-center">
      <div>
      <h1 className="text-center text-warning">Markdown Previewer!</h1>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
    <div className="col-md-4">
      <textarea
      id="editor"
        style={{ height: "60vh", width:"28vw", overflowWrap: "break-word" }}
        value={editorContent}
        onChange={handleEditorChange}
        ></textarea>
    </div>
    <div className="col-md-4" >
      <div
      id="preview"
        style={{ height: "60vh", overflowWrap: "break-word" }}
        dangerouslySetInnerHTML={renderMarkdown(editorContent)}
        ></div>
    </div>
        </div>
  </div>
  );
}

export default App;

