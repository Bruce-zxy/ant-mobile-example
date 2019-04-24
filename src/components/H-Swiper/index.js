/*
 * @Author: HadesZ 
 * @Date: 2019-04-24 15:20:15 
 * @Last Modified by: HadesZ
 * @Last Modified time: 2019-04-24 16:00:30
 */
/* eslint-disable */
import React, { PureComponent } from 'react';
import { Carousel } from 'antd-mobile';
import styles from './index.less';

class HSwiper extends PureComponent {
    state = {
        data: [1, 2, 3, 4, 5]
    }
    
    render() {
        const { data } = this.state;
        return (
            <div className={styles["hdz-swiper"]}>
                <Carousel
                    className={styles["hdz-swiper-body"]}
                    autoplay
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {data.map(val => (
                        <a
                            key={val}
                            href="javascript:;"
                        >
                            <img className={styles["hdz-swiper-image"]} src={`http://dummyimage.com/1920x1080/4d494d/686a82.gif&text=${val}`} alt={val} />
                        </a>
                    ))}
                </Carousel>
            </div>
        );
    }
}

export default HSwiper;