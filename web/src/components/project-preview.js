import { Link } from "gatsby";
import React, { useEffect, useState } from "react";
import { useSpring, animated, config } from 'react-spring'
import { cn, buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlockText from "./block-text";
import Button from "./Button/Button";

import * as styles from "./project-preview.module.css";
import { responsiveTitle3 } from "./typography.module.css";

function ProjectPreview(props) {
  const [hover, setHover] = useState(false)
  
  const rotate = useSpring({
    transform: hover
      ? 'scale(1.075) rotate(1.5deg)'
      : 'scale(1.05) rotate(0deg)',
    config: config.wobbly
  })

  return (
    <div className={styles.root} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {props.mainImage && props.mainImage.asset && (
          <section className={styles.imgWrapper}>
            <animated.img
              src={imageUrlFor(buildImageObj(props.mainImage))
                .width(425)
                .height(425)
                .url()}
              alt={props.mainImage.alt}
              style={rotate}
            />
          </section>
      )}

      <div className={styles.container}>
        <section>
          <Link to={`/project/${props.slug.current}`}><h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3></Link>
          {props._rawExcerpt && (
            <div className={styles.excerpt}>
              <BlockText blocks={props._rawExcerpt} />
            </div>
          )}
        </section>

        <section>
          <Button to={`/project/${props.slug.current}`} title={'Read More'} background={'#139675'}/>
          <hr />
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gridGap: '0.5em'}}>
            {props.projectURL &&
              <Button to={props.projectURL} title={'View Project'}/>
            }

            {props.codeURL &&
              <Button to={props.codeURL} title={'Read Code'}/>
            }
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProjectPreview;
