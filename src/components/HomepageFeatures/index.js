import React, { useState } from "react";
import CodeEditor from "@uiw/react-textarea-code-editor";
import styles from "./styles.module.css";
import {mu} from "./mark-up-down-1.0.0.min.js"

export default function HomepageFeatures() {
  const [text, setText] = useState("");

  const preview = (evn) => {
    setText(evn.target.value);
    setCode(evn.target.value);
  };

  const [code, setCode] = React.useState(
    `# Heading\n## Sub Heading\n`
  );

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.container}>
          <CodeEditor
            value={code}
            language="js"
            placeholder="Write what you want here..."
            onChange={(evn) => preview(evn)}
            padding={15}
            minHeight={60}
            style={{
              fontSize: 14,
              fontFamily:
                "ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace",
            }}
          />
          <div dangerouslySetInnerHTML={{ __html: mu(code, "\n","\n","==") }} />
          {/* <div>{text}</div> */}
        </div>
      </div>
    </section>
  );
}
