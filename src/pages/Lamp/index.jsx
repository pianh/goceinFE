import classNames from 'classnames/bind';
import styles from './Lamp.module.scss';

const cx = classNames.bind(styles);

function Lamp() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>Lamp</div>
        </header>
    );
}

export default Lamp;
