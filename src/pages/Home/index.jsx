import classNames from 'classnames/bind';
import styles from './Home.module.scss';

const cx = classNames.bind(styles);
function Home() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('inner')}>
                <header className={cx('header-home')}></header>
                <div className={cx('content')}></div>
                <footer className={cx('footer-home')}></footer>
            </div>
        </section>
    );
}

export default Home;
