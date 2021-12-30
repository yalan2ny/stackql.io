import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import styles from './sectionheader.module.css';

const SectionHeader = props => {
  const {
    title,
    subtitle,
    label,
    overline,
    ctaGroup,
    fadeUp,
    disableGutter,
    align,
    className,
    ...rest
  } = props;
  
  return (
    <section className={clsx(styles.headerSection)}>
      <div className={clsx('container', styles.header)}>
      <div className='row'>
      <div className={clsx('col', 'col--12', styles.title)}>{title}</div>
      </div>
      <div className='row'>
      <div className={clsx('col', 'col--12', styles.subtitle)}>{subtitle}</div>
      </div>
      </div>
    </section>
  );
};

SectionHeader.defaultProps = {
  fadeUp: 'fade-up',
  align: 'center',
};

SectionHeader.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Title of the section header
   */
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  /**
   * Subtitle of the section header
   */
  subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  /**
   * Label title of the section header
   */
  label: PropTypes.string,
  /**
   * The overline component in the section header
   */
  overline: PropTypes.node,
  /**
   * Array of the CTAs
   */
  ctaGroup: PropTypes.arrayOf(PropTypes.node),
  /**
   * Whether to fade up on scroll
   */
  fadeUp: PropTypes.bool,
  /**
   * Header content (title, subtitle, CTAs) alignment
   */
  align: PropTypes.oneOf(['right', 'left', 'center']),
  /**
   * Whether to disable bottom margin of the section
   */
  disableGutter: PropTypes.bool,
};

export default SectionHeader;