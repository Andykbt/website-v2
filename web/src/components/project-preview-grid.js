import { Link } from "gatsby";
import React from "react";
import ProjectPreview from "./project-preview";

import * as styles from "./project-preview-grid.module.css";

function ProjectPreviewGrid(props) {
  return (
    <div className={styles.root} id="Projects">
      {props.title && <h1 className={styles.headline}>{props.title}</h1>}
      <ul className={styles.container}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <ProjectPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  );
}

ProjectPreviewGrid.defaultProps = {
  title: "",
  nodes: [],
  browseMoreHref: ""
};

export default ProjectPreviewGrid;
