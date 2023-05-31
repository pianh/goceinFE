import classNames from 'classnames/bind';
import styles from './Lamp.module.scss';
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
    faArrowLeft,
} from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
// import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
const cx = classNames.bind(styles);

function Lamp() {
    // Sidebar
    const [showSidebar, setShowSidebar] = useState(false);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    // Button
    const [buttonState, setButtonState] = useState('On');

    const toggleButton = () => {
        setButtonState(buttonState === 'On' ? 'Off' : 'On');
    };

    const [buttonStateTwo, setButtonStateTwo] = useState('Off');

    const toggleButtonTwo = () => {
        setButtonStateTwo(buttonStateTwo === 'Off' ? 'On' : 'Off');
    };

    const [buttonStateThree, setButtonStateThree] = useState('Off');

    const toggleButtonThree = () => {
        setButtonStateThree(buttonStateThree === 'Off' ? 'On' : 'Off');
    };

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
            <div className={cx('inner')}>
                <div className={cx('background')}>
                    <img
                        className={cx('')}
                        src="https://pulsecinemas.com/storage/3939/responsive-images/TY-K-TURN-BK-Bedroom---TY-B-PLT-BK___media_library_original_980_613.jpg"
                        alt="room"
                    />
                </div>

                <div className={cx('content-category-top')}>
                    <div className={cx('avatar-wrapper')}>
                        <img
                            className={cx('avatar')}
                            src="https://i.pinimg.com/originals/80/84/68/80846803dec86fe4ade91bcb51f1ba23.jpg"
                            alt="Hoa"
                        />
                        <div className={cx('shine-effect')}></div>
                    </div>
                    <div className={cx('icon')}>
                        <Link to="/" className={cx('content-category-item--link')}>
                            <FontAwesomeIcon className={cx('back-icon')} icon={faArrowLeft} />
                        </Link>
                    </div>
                </div>

                <div className={cx('content-bottom')}>
                    <div className={cx('content-draw')}>
                        <div className={cx('content-right-draw-frame')}>
                            <div className={cx('frame-item', 'item-one', { bgofff: buttonState === 'Off' })}>
                                <FontAwesomeIcon
                                    className={cx('icon-lightbulb', { bgofff: buttonState === 'Off' })}
                                    icon={faLightbulb}
                                />
                                <span className={cx({ bgofff: buttonState === 'Off' })}>6 Lights</span>
                                <button
                                    className={cx('toggle-button', { bgofff: buttonState === 'Off' })}
                                    onClick={toggleButton}
                                >
                                    <div className={cx('toggle-button-on', { bgofff: buttonState === 'Off' })}>
                                        {buttonState}
                                    </div>
                                    <div className={cx('cycle', { red: buttonState === 'Off' })}></div>
                                </button>
                            </div>

                            <div className={cx('frame-item', 'item-two', { bgofftwo: buttonStateTwo === 'Off' })}>
                                <FontAwesomeIcon
                                    className={cx(
                                        'icon-lightbulb',
                                        { bgofftwo: buttonStateTwo === 'Off' },
                                        { iconofftwo: buttonStateTwo === 'Off' },
                                    )}
                                    icon={faLightbulb}
                                />
                                <span className={cx({ bgofftwo: buttonStateTwo === 'Off' })}>6 Lights</span>
                                <button
                                    className={cx('toggle-button', { bgofftwo: buttonStateTwo === 'Off' })}
                                    onClick={toggleButtonTwo}
                                >
                                    <div className={cx('toggle-button-on', { bgofftwo: buttonStateTwo === 'Off' })}>
                                        {buttonStateTwo}
                                    </div>
                                    <div className={cx('cycle', { red: buttonStateTwo === 'Off' })}></div>
                                </button>
                            </div>

                            <div className={cx('frame-item', 'item-three', { bgoffthree: buttonStateThree === 'Off' })}>
                                <FontAwesomeIcon
                                    className={cx(
                                        'icon-lightbulb',
                                        { bgoffthree: buttonStateThree === 'Off' },
                                        { iconoffthree: buttonStateTwo === 'Off' },
                                    )}
                                    icon={faLightbulb}
                                />
                                <span className={cx({ bgofftwo: buttonStateThree === 'Off' })}>6 Lights</span>
                                <button
                                    className={cx('toggle-button', { bgoffthree: buttonStateThree === 'Off' })}
                                    onClick={toggleButtonThree}
                                >
                                    <div className={cx('toggle-button-on', { bgoffthree: buttonStateThree === 'Off' })}>
                                        {buttonStateThree}
                                    </div>
                                    <div className={cx('cycle', { red: buttonStateThree === 'Off' })}></div>
                                </button>
                            </div>
                        </div>
                        <span className={cx('line')}></span>
                        <div className={cx('content-text')}>
                            <div className={cx('power')}>
                                <h1>Maximum Power</h1>
                                <h1 className={cx('detail')}>60W</h1>
                            </div>
                            <div className={cx('total')}>
                                <h1>Total Working Hours</h1>
                                <h1 className={cx('detail')}>145</h1>
                            </div>
                            <div className={cx('avegare')}>
                                <h1>Avarege Daily Working Hours</h1>
                                <h1 className={cx('detail')}>5.6</h1>
                            </div>
                        </div>
                        <span className={cx('line-second')}></span>

                        <div className={cx('schedule')}>
                            <h1>Day Schedule</h1>
                            <FontAwesomeIcon className={cx('icon-off')} icon={faToggleOff} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Lamp;
