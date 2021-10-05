import { Link } from "gatsby";
import React, { useRef, useState } from "react";
import { useSpring, animated, config } from 'react-spring'
import { cn, buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockText from "./block-text";
import Button from "./Button/Button";

import * as styles from "./project-preview.module.css";
import { responsiveTitle3 } from "./typography.module.css";

function ProjectPreview(props) {
  const [hover, setHover] = useState(false)
  const ref = useRef();

  const pop = useSpring({
    scale: hover ? 1.01 : 0.99,
    config: config.wobbly
  })

  return (
    <div className={styles.root}>
      {props.mainImage && props.mainImage.asset && (
          <img
            src={imageUrlFor(buildImageObj(props.mainImage))
              .url()}
            alt={props.mainImage.alt}
            width={420}
            height={420}
          />
      )}
      
      <div className={styles.text}>
        <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <BlockText blocks={props._rawExcerpt} />
          </div>
        )}

          <Button to={`/project/${props.slug.current}`} title={'Read More'}/>
          <hr />
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '0.5em'}}>
            <Button to={`/project/${props.slug.current}`} title={'View Project'}/>
            <Button to={`/project/${props.slug.current}`} title={'Read Code'}/>
          </div>
      </div>
    </div>
    // <animated.a
    //   className={styles.root}
    //   href={`/project/${props.slug.current}`}
    //   ref={ref} 
    //   style={pop}
    //   onMouseEnter={() => setHover(true)}
    //   onMouseLeave={() => setHover(false)}
    //   >
    //     {props.mainImage && props.mainImage.asset && (
    //       <img
    //         src={imageUrlFor(buildImageObj(props.mainImage))
    //           .url()}
    //         alt={props.mainImage.alt}
    //         width={420}
    //         height={420}
    //       />
    //     )}
    //     <div className={styles.text}>
    //       <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
    //       {props._rawExcerpt && (
    //         <div className={styles.excerpt}>
    //           <BlockText blocks={props._rawExcerpt} />
    //         </div>
    //       )}
    //     </div>
    // </animated.a>
  );
}

export default ProjectPreview;
