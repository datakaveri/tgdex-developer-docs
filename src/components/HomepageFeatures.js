import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Overview and Purpose',
    link:"../../docs/overview",
    Svg: require('../../static/img/getting_started.svg').default,
    description: (
      <>
        Overview of TGDEX and how to best use this guide.
      </>
    ),
  },
  {
    title: 'Contribute to TGDeX',
    link:"https://github.com/datakaveri",
    Svg: require('../../static/img/Api.svg').default,
    description: (
      <>
		Get into the world of TGDeX and start your contribution to the world of OpenSource to improvise TGDeX
      </>
    ),
  },
  {
    title: 'Connect with us',
    link:"https://iudx.org.in/contact-us/",
    Svg: require('../../static/img/subscribe.svg').default,
    description: (
      <>
		Get in touch with us and subscribe to our newsletters, talks, blogs etc.
      </>
    ),
  },
];

function Feature({Svg, link, title, description}) {
  return (
    
    <a className={`${clsx('col col--4')} ${styles.featureCard}`} href={link}><div className={clsx('border border--1')}>
    <div classname={styles.featureCard}>
    <div className="text--center">
      <Svg className={styles.featureSvg} alt={title} />
    </div>
    <div className="text--center padding-horiz--md">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
  </div></a>
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
