import classNames from 'classnames/bind';
import styles from './Lamp.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Lamp() {
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
                <header className={cx('header-home')}>
                    <div className={cx('header-home-icon')}>
                        <Link to="/" className={cx('content-category-item--link')}>
                            <FontAwesomeIcon className={cx('content-right-icon--align')} icon={faArrowLeft} />
                        </Link>
                    </div>
                    <div className={cx('avatar-wrapper')}>
                        <img
                            className={cx('avatar')}
                            src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/122b95d1cd9bd6f885598a039dc6b74d~c5_300x300.webp?x-expires=1685160000&x-signature=NRbUQhxPNCtrJxyXV26Te2rM0hI%3D"
                            alt="Hoa"
                        />
                    </div>
                </header>
                <div className={cx('content')}>
                    <div className={cx('content-draw')}>
                        <div className={cx('content-right-draw-frame')}>
                            <div className={cx('frame-item-first')}>
                                <FontAwesomeIcon className={cx('icon-lightbulb')} icon={faLightbulb} />
                                <span>6 Light</span>
                                <FontAwesomeIcon className={cx('icon-off')} icon={faToggleOff} />
                            </div>

                            <div className={cx('frame-item-second')}>
                                <FontAwesomeIcon className={cx('icon-lightbulb')} icon={faLightbulb} />
                                <span>Air Conditioner</span>
                                <FontAwesomeIcon className={cx('icon-off')} icon={faToggleOff} />
                            </div>

                            <div className={cx('frame-item-third')}>
                                <FontAwesomeIcon className={cx('icon-lightbulb')} icon={faLightbulb} />
                                <span>Washing Machine</span>
                                <FontAwesomeIcon className={cx('icon-off')} icon={faToggleOff} />
                            </div>
                        </div>
                        <span className={cx('line')}></span>
                        <div className={cx('content-text')}>
                            <div className={cx('power')}>
                                <h1>Maximumpower</h1>
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
