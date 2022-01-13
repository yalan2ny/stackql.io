import React from 'react';
import clsx from 'clsx';
import styles from './cards.module.css';
import Image from '@theme/IdealImage';

import Provision from './images/provision.png';
import Navigate from './images/navigate.png';
import Query from './images/query.png';
import Operate from './images/operate.png';

const Card = props => {
    const { data, img, liftUp } = props;
    return (
        <div className={clsx('card', 'card--full-height', styles.featureCard, liftUp ? styles.featureCardLift : '')}>
            <div className="row" style={{ padding: '8px', height: '42px' }}>
                <div className={clsx('col', 'col--2')}>
                    <div className={clsx(styles.featureIconContainer)}>
                    <Image img={img} />
                    </div>
                </div>
                <div className={clsx('col', 'col--10')}>
           {/*         
                    <div className={clsx('col', 'col--12', 'padding-left--md', styles.featureTitle)}>
                        {data.title}
                    </div>
                */}
                </div>
            </div>

            <div className="row" style={{ padding: '8px' }}>
                <div className={clsx('col', 'col--12', 'padding-horiz--md', styles.featureTitle)}>
                {data.title}
                </div>
            </div>

            <div className="row" style={{ padding: '8px' }}>
                <div className={clsx('col', 'col--12', 'padding-horiz--md', styles.featureText)}>
                    {data.text}        
                </div> 
            </div>   
            <div className="row" style={{ padding: '8px' }}>
                  <div className={clsx("padding-horiz--md", styles.learnMore)}>
        <a href={data.link} className={clsx(styles.learnMoreLink)}>
          <span>Learn more <i class="fas fa-angle-double-right"></i></span> 
        </a>
      </div>
      </div>
      </div>
    );
};

//margin-horiz--xl

const Cards = props => {
    const { data } = props;
    return (
        <div className="col col--12 margin-bottom--lg">
            <div className="row">
                <div className="col col--3 margin-bottom--md">
                    <Card data={data.provision} img={Provision} liftUp />
                </div>
                <div className="col col--3 margin-bottom--md">
                    <Card data={data.navigate} img={Navigate} liftUp/>
                </div>
                <div className="col col--3 margin-bottom--md">
                    <Card data={data.query} img={Query} liftUp/>
                </div>
                <div className="col col--3 margin-bottom--md">
                    <Card data={data.operate} img={Operate} liftUp/>
                </div>                                                
            </div>
        </div>
    );
};

export default Cards;