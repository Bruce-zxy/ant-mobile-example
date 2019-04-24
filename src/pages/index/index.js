/*
 * @Author: Jan-superman 
 * @Date: 2018-09-27 20:38:37 
 * @Last Modified by: HadesZ
 * @Last Modified time: 2019-04-24 15:46:44
 */

import React, { PureComponent } from 'react';

import HSwiper from '../../components/H-Swiper';

import styles from './index.less';

class Index extends PureComponent {
  componentDidMount() {
    console.log('test');
    
  }

  render() {
    return (
      <div className={styles.index}>
        <div className={styles.test}>
          <HSwiper />
        </div>
      </div>
    );
  }
}

export default Index;
