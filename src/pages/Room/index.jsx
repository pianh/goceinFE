import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);

function Room() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>Room</div>
        </header>
    );
}

export default Room;
