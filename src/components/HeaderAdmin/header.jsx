import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCircle, faCircleUser, faLightbulb } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';
function HeaderAdmin() {
    return (
        <header id="header-admin" className="header-admin header-shadow fixed-header theme-white">
            <div className="header-admin__logo">
                <img src="https://learnforever.xyz/assets/admin/imgs/lg-main.jpg" alt="Hoa" />
            </div>
            <span className="header-admin__brand">Gocein</span>
            <nav className="header-admin__content">
                <div className="header-admin__content-left">
                    <ul className="header-admin__content-menu">
                        <li className="header-admin__content-menu--mega">
                            <Link to="/admin/product" style={{ textDecoration: 'none' }}>
                                Sản phẩm
                                <FontAwesomeIcon
                                    className="header-admin__content-menu--mega-icon"
                                    icon={faCircleChevronDown}
                                />
                            </Link>
                        </li>

                        <li className="header-admin__content-menu--setting">
                            <Link to="/admin/product-type" style={{ textDecoration: 'none' }}>
                                Loại sản phẩm
                                <FontAwesomeIcon
                                    className="header-admin__content-menu--mega-icon"
                                    icon={faCircleChevronDown}
                                />
                            </Link>
                        </li>
                        <li className="header-admin__content-menu--message">
                            Thông báo
                            <FontAwesomeIcon
                                className="header-admin__content-menu--mega-icon"
                                icon={faCircleChevronDown}
                            />
                        </li>
                    </ul>
                    <form className="form-inline header-admin__form" action="">
                        <input type="text" className="mr-sm-2" placeholder="Search" />
                        <button className="header-admin__form-search" type="submit">
                            Search
                        </button>
                    </form>
                </div>
                <div className="header__content-right">
                    <FontAwesomeIcon className="header__content-right-icon" icon={faCircleUser} />
                    <span>Admin</span>
                </div>
            </nav>
        </header>
    );
}

export default HeaderAdmin;
