import classNames from 'classnames/bind';
import styles from './Home.module.scss';
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

const cx = classNames.bind(styles);
function Home() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('inner')}>
                <header className={cx('header-home')}>
                    <div className={cx('avatar-wrapper')}>
                        <img
                            className={cx('avatar')}
                            src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/122b95d1cd9bd6f885598a039dc6b74d~c5_300x300.webp?x-expires=1685160000&x-signature=NRbUQhxPNCtrJxyXV26Te2rM0hI%3D"
                            alt="Hoa"
                        />
                        <div className={cx('shine-effect')}></div>
                    </div>
                    <div className={cx('info')}>
                        <h4 className={cx('name')}>
                            <span>Rebeca Barbara</span>
                        </h4>
                        <span className={cx('job')}>Designer</span>
                    </div>
                </header>
                <div className={cx('content')}>
                    <div className={cx('content-left')}>
                        <div className={cx('content-category')}>
                            <ul>
                                <li className={cx('content-category-item')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faHouseChimney} />
                                    <span>Home</span>
                                </li>
                                <li className={cx('content-category-item')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faUser} />
                                    <span>Profile</span>
                                </li>
                                <li className={cx('content-category-item')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faNoteSticky} />
                                    <span>Notification</span>
                                </li>
                                <li className={cx('content-category-item')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faSignal} />
                                    <span>Stats</span>
                                </li>
                                <li className={cx('content-category-item')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faClock} />
                                    <span>Schedules</span>
                                </li>
                                <li className={cx('content-category-item')}>
                                    <FontAwesomeIcon className={cx('icon')} icon={faSliders} />
                                    <span>Settings</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('content-right')}>
                        <div className={cx('content-right-icon')}>
                            <FontAwesomeIcon className={cx('content-right-icon--align')} icon={faAlignLeft} />
                        </div>
                        <div className={cx('content-right-text')}>
                            <h2>Welcome</h2>
                            <h1>Rebeca Barbara</h1>
                            <h3>Hey, Rebeca allow you to </h3>
                            <h3>inn or outside your house house</h3>
                            <h3>the instructions carefully</h3>
                        </div>
                        <div className={cx('content-right-slide')}>
                            <span>Rooms</span>
                            <div className={cx('content-right-list')}>
                                <div className={cx('content-right-image--left')}></div>
                                <div className={cx('content-right-image')}>
                                    <img
                                        className={cx('')}
                                        src="https://i.pinimg.com/originals/80/84/68/80846803dec86fe4ade91bcb51f1ba23.jpg"
                                        alt="room"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className={cx('content-right-draw')}>
                            <span>Stats</span>
                            <div className={cx('content-right-draw-frame')}>
                                <div className={cx('frame-item-first')}>
                                    <FontAwesomeIcon className={cx('icon-lightbulb')} icon={faLightbulb} />
                                    <span>6 Light</span>
                                    <span className={cx('title-on')}>On</span>
                                    <FontAwesomeIcon className={cx('icon-off')} icon={faToggleOff} />
                                    {/* <div className={cx('frame-item-button-on')}></div> */}
                                </div>
                                <div className={cx('frame-item-second')}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer className={cx('footer-home')}>
                    <h4 className={cx('logout')}>
                        <span>Logout</span>
                    </h4>
                </footer>
            </div>
        </section>
    );
}

export default Home;
