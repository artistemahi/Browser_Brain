import React from "react";

const RenderingContent = () => {
  return (
    <div>
      <h1>what is Rendering?</h1>
      <p>
        Rendering is the process of generating visual output from a set of
        instructions or data. In web development, rendering refers to how a
        browser displays(visible UI) HTML, CSS, and JavaScript content.
      </p>
      <h2>Types of Rendering</h2>
      <ul>
        <li>
          <strong>Server-Side Rendering (SSR):</strong> The server generates the
          complete HTML for a page and sends it to the client. This can improve
          initial load times and SEO.
        </li>
        <li>
          <strong>Client-Side Rendering (CSR):</strong> The browser receives a
          minimal HTML page and uses JavaScript to dynamically generate the
          content. This can lead to faster interactions after the initial load.
        </li>
        <li>
          <strong>Static Site Generation (SSG):</strong> The HTML is generated
          at build time, resulting in fast load times and improved SEO.
        </li>
      </ul>

      
    </div>
  );
};

export default RenderingContent;
