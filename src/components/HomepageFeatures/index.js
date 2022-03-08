import React, { useState } from 'react';
import styles from './styles.module.css';


export default function HomepageFeatures() {
  const [text, setText] = useState("");

  const preview = (e) => {
    setText(e.target.value);
  }

  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          <textarea onKeyUp={preview}></textarea>
          <textarea value={text}></textarea>
        </div>
      </div>
    </section>
  );
}
