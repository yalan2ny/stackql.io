import React from 'react';
import clsx from 'clsx';
import {
    CodeDiv,
    ContentDiv,
} from './components';
import AOS from 'aos';
import 'aos/dist/aos.css';

import styles from './featurescontent.module.css';

const FeatureContent = props => {
    const { feature, idx } = props;
    return (
        <div className="row">
            {idx % 2 == 0 ? 
                <>
                <CodeDiv code={feature.code} />
                <ContentDiv title={feature.title} checks={feature.checks} isRight/>
                </>
            : 
                <>
                <ContentDiv title={feature.title} checks={feature.checks}/>            
                <CodeDiv code={feature.code} isRight/>
                </>
            }
        </div>
    );
};

const FeaturesContent = props => {
    const { data } = props;
    React.useEffect(() => {
        AOS.init({
          delay: 50,
          duration: 500,
          easing: 'ease-in-out',
          disable: 'mobile',
        });
      }, []);    

    return (
        <>
        <div className="lgContainer margin-top--xl">
            <div className="row">
                <>
                <div className="col col--2"></div>
                <div className="col col--8">
                <div className='row'>
                    <div className={clsx('col', 'col--12', styles.title)} dangerouslySetInnerHTML={{__html: data.title}} />
                </div>
                <div className='row'>
                    <div className={clsx('col', 'col--12', 'margin-bottom--lg', styles.subtitle)}>
                        {data.subtitle}
                    </div>
                </div>
                {
                    data.features.map((feature, idx) => (
                        <FeatureContent feature={feature} idx={idx} />
                    ))
                }
                </div>
                <div className="col col--2"></div>
                </>
            </div>
        </div>
        </>
        );
    };
    
export default FeaturesContent;        