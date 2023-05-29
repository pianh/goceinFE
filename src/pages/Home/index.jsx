import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAlignLeft,
    faClock,
    faHouseChimney,
    faNoteSticky,
    faSignal,
    faSliders,
    faToggleOff,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import React, { useEffect, useRef } from 'react';
import $ from 'jquery';

const cx = classNames.bind(styles);
function Home() {
    const contentRoomCenterRef = useRef(null);

    useEffect(() => {
        const contentRoomCenter = $(contentRoomCenterRef.current);

        // Gắn kết sự kiện kéo chuột
        contentRoomCenter.on('mousedown', function (event) {
            var startX = event.pageX;

            $(document).on('mousemove', function (event) {
                var distance = event.pageX - startX;
                contentRoomCenter.scrollLeft(contentRoomCenter.scrollLeft() - distance);
            });
        });

        // Sự kiện thả chuột
        $(document).on('mouseup', function () {
            $(document).off('mousemove');
        });

        // Thực hiện cuộn ngang đến hình ở giữa
        contentRoomCenter[0].scrollIntoView({
            behavior: 'smooth',
            inline: 'center',
        });

        // Thực hiện căn giữa hình ảnh chính giữa sau khi trang được tải lại
        const handleWindowLoad = () => {
            const centerImage = contentRoomCenter.find('img');
            const containerWidth = contentRoomCenter.width();
            const imageWidth = centerImage.width();
            const scrollLeft = (imageWidth - containerWidth) / 2;

            contentRoomCenter.scrollLeft(scrollLeft);
        };

        $(window).on('load', handleWindowLoad);

        // Cleanup
        return () => {
            contentRoomCenter.off('mousedown');
            $(document).off('mousemove');
            $(document).off('mouseup');
            $(window).off('load', handleWindowLoad);
        };
    }, []);
    return (
        <section className={cx('wrapper')}>
            <div className={cx('wrapper-top')}>
                <div className={cx('icon')}>
                    <Link to="/" className={cx('content-category-item--link')}>
                        <FontAwesomeIcon className={cx('content-right-icon--align')} icon={faAlignLeft} />
                    </Link>
                </div>
                <div className={cx('avatar-wrapper')}>
                    <img
                        className={cx('avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/122b95d1cd9bd6f885598a039dc6b74d~c5_300x300.webp?x-expires=1685160000&x-signature=NRbUQhxPNCtrJxyXV26Te2rM0hI%3D"
                        alt="Hoa"
                    />
                    <div className={cx('shine-effect')}></div>
                </div>
            </div>
            <div className={cx('wrapper-center')}>
                <div className={cx('content-text')}>
                    <h2>Welcome</h2>
                    <h1>Rebeca Barbara</h1>
                    <h3>
                        Hey, Rebeca we allow you to handle your electronics from inn or outside your house. We recommend
                        you to plz read the instructions carefully and enjoy the luxury
                    </h3>
                </div>
                <div className={cx('content-room')}>
                    <span className={cx('title')}>Rooms</span>
                    <div className={cx('content-room-list')}>
                        <div className={cx('content-room-left')}>
                            <img
                                className={cx('')}
                                src="https://i.pinimg.com/originals/80/84/68/80846803dec86fe4ade91bcb51f1ba23.jpg"
                                alt="room"
                            />
                        </div>
                        <div className={cx('content-room-center')} ref={contentRoomCenterRef}>
                            <img
                                className={cx('')}
                                src="https://i.pinimg.com/originals/80/84/68/80846803dec86fe4ade91bcb51f1ba23.jpg"
                                alt="room"
                            />
                        </div>
                        <div className={cx('content-room-right')}>
                            <img
                                className={cx('')}
                                src="https://i.pinimg.com/originals/80/84/68/80846803dec86fe4ade91bcb51f1ba23.jpg"
                                alt="room"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className={cx('wrapper-bottom')}>
                <span className={cx('stats-title')}>Stats</span>
                <div className={cx('content-right-draw-frame')}>
                    <div className={cx('frame-item-first')}>
                        <FontAwesomeIcon className={cx('icon-lightbulb')} icon={faLightbulb} />
                        <span>6 Light</span>
                        <span className={cx('title-on')}>On</span>
                        <FontAwesomeIcon className={cx('icon-off')} icon={faToggleOff} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
