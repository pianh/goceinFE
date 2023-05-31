import Carousel from 'react-bootstrap/Carousel';
import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import React, { useEffect, useRef, useState } from 'react';
const cx = classNames.bind(styles);

function Slider() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            prevLabel="" // Ghi đè nội dung của nút Previous thành một chuỗi rỗng
            nextLabel="" // Ghi đè nội dung của nút Next thành một chuỗi rỗng
        >
            <Carousel.Item>
                <img
                    className={cx('d-block', 'w-100', 'content-right-image--left')}
                    src="https://bangxephang.com/wp-content/uploads/2022/11/hoa-tulip1.jpg"
                    alt="First slide"
                />
                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={cx('d-block', 'w-100', 'content-right-image--center')}
                    src="https://ttol.vietnamnetjsc.vn/images/2022/11/28/14/57/hoa-hong-004.jpg"
                    alt="Second slide"
                />

                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className={cx('d-block', 'w-100', 'content-right-image--bottom')}
                    src="https://image-us.eva.vn/upload/1-2021/images/2021-02-05/image5-1612512728-861-width600height400.jpg"
                    alt="Third slide"
                />

                <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slider;
