import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Room() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('inner')}>
                <header className={cx('header-home')}>
                    <div className={cx('header-home-icon')}>
                        {/* <FontAwesomeIcon className={cx('content-right-icon--align')} icon={faAlignLeft} /> */}
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
                        <div className={cx('shine-effect')}></div>
                    </div>
                </header>
                <div className={cx('content')}>
                    <div className={cx('content-text')}>
                        <h2>Welcome</h2>
                        <h1>Rebeca Barbara</h1>
                        <h3>
                            Hey, Rebeca we allow you to handle your electronics from inn or outside your house. We
                            recommend you to plz read the instructions carefully and enjoy the luxury
                        </h3>
                    </div>
                    <div className={cx('content-room')}>
                        <span>Rooms</span>
                        <div className={cx('content-room-list')}>
                            <div className={cx('content-room-left')}></div>
                            <div className={cx('content-room-center')}>
                                <img
                                    className={cx('')}
                                    src="https://i.pinimg.com/originals/80/84/68/80846803dec86fe4ade91bcb51f1ba23.jpg"
                                    alt="room"
                                />
                            </div>
                            <div className={cx('content-room-right')}></div>
                        </div>
                    </div>
                    <div className={cx('content-draw')}>
                        <span>Stats</span>
                        <div className={cx('content-right-draw-frame')}>
                            <div className={cx('frame-item-first')}>
                                <FontAwesomeIcon className={cx('icon-lightbulb')} icon={faLightbulb} />
                                <span>6 Light</span>
                                <span className={cx('title-on')}>On</span>
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
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Room;
