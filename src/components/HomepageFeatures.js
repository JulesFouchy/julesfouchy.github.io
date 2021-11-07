import clsx from 'clsx';
import React from 'react';

import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '🥳 Easy to use',
    Svg: require('../../static/img/undraw_Lost_online_re_upmy.svg').default,
    description: (
      <>
        Well documented, well designed<br/>
        Full of tutorials
      </>
    ),
  },
  {
    title: '💖 Open-Source',
    Svg: require('../../static/img/undraw_Co-working_re_w93t.svg').default,
    description: (
      <>
        Fully open-source, forever<br/>
        Built on top of amazing open-source projects such as <b><i>glfw</i></b>, <b><i>Dear ImGui</i></b>, <b><i>glm</i></b> and many others
      </>
    ),
  },
  {
    title: '💻 Modern',
    Svg: require('../../static/img/undraw_Working_late_re_0c3y.svg').default,
    description: (
      <>
        Written in clean C++ 20<br/>
        Making use of the latest features
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
