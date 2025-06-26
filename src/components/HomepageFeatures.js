import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
{
    title: 'Getting Started',
    link:"../../docs/overview",
    Svg: require('../../static/img/getting_started.svg').default,
    description: (
      <>
        An overview of TGDeX and guidance on utilizing this document.
      </>
    ),
  },
  {
    title: 'Navigating the Home Page',
    link:"../../docs/navigating_home_page/overview",
    Svg: require('../../static/img/consuming_data.svg').default,
    description: (
      <>
        Explore the central features and functionalities available on the TGDeX Home Page.
      </>
    ),
  },
  {
    title: 'Login, eKYC, and Organization Enrollment',
    link:"../../docs/registration/registration_users",
    Svg: require('../../static/img/datasets.svg').default,
    description: (
      <>
		An overview of account setup, identity verification, and organizational onboarding within TGDeX.
      </>
    ),
  },
  {
    title: 'Exploring and Using TGDeX Assets',
    link:"../../docs/platform_capabilities/platform_capabilities",
    Svg: require('../../static/img/provider.svg').default,
    description: (
      <>
        Learn how to discover, interact with, and utilize TGDeX’s core offerings through intuitive tools and the Sandbox IDE.	  </>
    ),
  },
  {
    title: 'User Roles and Access Levels',
    link:"../../docs/understanding_user_roles/understanding_user_roles",
    Svg: require('../../static/img/Api.svg').default,
    description: (
      <>
        Brief on TGDeX roles and access progression.
      </>
    ),
  },
  {
    title: 'Help & Support',
    link:"../../docs/accessing_help_support_services/faq",
    Svg: require('../../static/img/subscribe.svg').default,
    description: (
      <>
        User help through FAQs and a structured grievance redressal process.          </>
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
