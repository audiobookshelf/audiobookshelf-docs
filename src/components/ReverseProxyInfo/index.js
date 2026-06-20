import React from "react";
import Link from "@docusaurus/Link";
import Admonition from "@theme/Admonition";

export default function ReverseProxyInfo() {
  return (
    <Admonition type="info">
      <ul>
        <li>
          Please join the Discord server before reporting an issue with your
          reverse proxy setup on GitHub.
        </li>
        <li>Audiobookshelf requires a websocket connection.</li>
        <li>
          Using a subfolder is supported with no additional changes but the
          path must be <code>/audiobookshelf</code> (this is not changeable).
          See{" "}
          <a href="https://github.com/advplyr/audiobookshelf/discussions/3535">
            discussion
          </a>
        </li>
        <li>
          <Link to="/docs/faq/server#why-do-i-need-to-set-up-my-own-remote-access">
            Why do I need to set up my own remote access?
          </Link>
        </li>
      </ul>
    </Admonition>
  );
}
