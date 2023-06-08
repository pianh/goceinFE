import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBagShopping,
    faCartShopping,
    faCircleCheck,
    faClock,
    faSackDollar,
    faStar,
    faTruck,
} from '@fortawesome/free-solid-svg-icons';
import './Home.scss';
import axios from 'axios';
import { Component } from 'react';

import avocado from '../../assets/images/Avocado.png';
import broccoliorganic from '../../assets/images/BroccoliOrganic.png';
import avatar from '../../assets/images/avatar.jpg';
import ifttt from '../../assets/images/ifttt.png';
import amazon from '../../assets/images/amazon.png';
import google from '../../assets/images/google.png';
import paypal from '../../assets/images/paypal.png';
import air from '../../assets/images/air.png';

import { variables } from '../../Variables.js';
import SearchIcon from '~/components/icon/search';
import CartIcon from '~/components/icon/cart';
import { faOpencart } from '@fortawesome/free-brands-svg-icons';
export class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            producttypes: [],
            modalTitle: '',
            ProductId: 0,
            ProductName: '',
            ProductPrice: 0,
            ProductType: '',
            ProductFileName: 'default.png',
            CreateAt: '',
            UpdateAt: '',
            PhotoPath: variables.PHOTO_URL,
        };
    }
    //Lay dư liệu trả về JSON
    refreshList() {
        axios
            .get(variables.API_URL + 'product')
            .then((response) => {
                this.setState({ products: response.data });
            })
            .catch((error) => {
                console.error(error);
            });

        axios
            .get(variables.API_URL + 'producttype')
            .then((response) => {
                this.setState({ producttypes: response.data });
            })
            .catch((error) => {
                console.error(error);
            });
    }

    componentDidMount() {
        this.refreshList();
    }

    render() {
        const {
            producttypes,
            products,
            ProductName,
            ProductPrice,
            ProductType,
            PhotoPath,
            ProductFileName,
            CreateAt,
            UpdateAt,
        } = this.state;

        return (
            <div className="home-page__wrapper">
                <header className="home-page__header-wrapper">
                    <span className="home-page__header-brand">Gocein</span>
                    <div className="home-page__header-navbar">
                        <a href="/">Home</a>
                        <a href="/">About</a>
                        <a href="/">Categories</a>
                        <a href="/">Service</a>
                        <a href="/">Contact</a>
                    </div>
                    <div className="home-page__header-search">
                        <SearchIcon />

                        <input type="text" className="form-control home-page__header-input" placeholder="Search ..." />
                        <div className="home-page__header-line"></div>
                        <FontAwesomeIcon className="home-page__header-cart-icon" icon={faBagShopping} />
                    </div>
                </header>
                <section className="home-page-slider-wrapper">
                    <div className="home-page__slider-text-wrapper">
                        <h1>A place where everything special</h1>
                        <p>
                            We help you ti buy fresh grocery from your home. <br /> Eat fresh and stay healthy
                        </p>
                        <div className="home-page__slider-button">
                            <button type="button" className="home-page__slider-button--green">
                                How to Order
                            </button>
                            <button type="button" className="home-page__slider-button--light">
                                See Categories
                            </button>
                        </div>
                        <div className="home-page__slider-comment">
                            <div className="home-page__comment-avatar">
                                <img src={avatar} alt="" />
                                <div className="cycle-group">
                                    <span className="home-page__comment-cycle-one"></span>
                                    <span className="home-page__comment-cycle-two"></span>
                                    <span className="home-page__comment-cycle-three"></span>
                                </div>
                            </div>
                            <div className="home-page__comment-text">
                                <h3>
                                    Supper fast delivery and various payment <br /> option! Great Job Gacein!
                                </h3>
                                <h4>Marina Robinson</h4>
                            </div>
                        </div>
                    </div>
                    <div className="home-page__slider-card">
                        <div className="home-page__slider-card-cycle"></div>
                        <div className="home-page__slider-card-after">
                            <div className="home-page__slider-card-img">
                                <img src={broccoliorganic} alt="broccoliorganic" />
                            </div>
                            <div className="home-page__slider-card-body">
                                <div>
                                    <span className="home-page__slider-card-name">Banana Organic</span>
                                    <span className="home-page__slider-card-shop">By Reno Shop</span>
                                </div>
                                <div className="home-page__slider-card-detail">
                                    <div className="home-page__slider-card-detail-review">
                                        <div className="home-page__slider-card-detail-start-group">
                                            <FontAwesomeIcon
                                                className="home-page__slider-card-detail-start-icon"
                                                icon={faStar}
                                            />
                                            <span>4.3</span>
                                        </div>
                                        <div className="home-page__slider-card-detail-time">
                                            <FontAwesomeIcon
                                                className="home-page__slider-card-detail-time-icon"
                                                icon={faClock}
                                            />
                                            <span>5 min</span>
                                        </div>
                                    </div>
                                    <div className="home-page__slider-card-price-group">
                                        <span>$</span>
                                        <h3>5.87</h3>
                                        <span> /Kg</span>
                                    </div>
                                </div>
                                <button type="button" className="home-page__slider-card-button">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                        <div className="home-page__slider-card-before">
                            <div className="home-page__slider-card-img">
                                <img src={avocado} alt="broccoliorganic" />
                            </div>
                            <div className="home-page__slider-card-body">
                                <div>
                                    <span className="home-page__slider-card-name">Banana Organic</span>
                                    <span className="home-page__slider-card-shop">By Reno Shop</span>
                                </div>
                                <div className="home-page__slider-card-detail">
                                    <div className="home-page__slider-card-detail-review">
                                        <div className="home-page__slider-card-detail-start-group">
                                            <FontAwesomeIcon
                                                className="home-page__slider-card-detail-start-icon"
                                                icon={faStar}
                                            />
                                            <span>4.7</span>
                                        </div>
                                        <div className="home-page__slider-card-detail-time">
                                            <FontAwesomeIcon
                                                className="home-page__slider-card-detail-time-icon"
                                                icon={faClock}
                                            />
                                            <span>5 min</span>
                                        </div>
                                    </div>
                                    <div className="home-page__slider-card-price-group">
                                        <span>$</span>
                                        <h3>5.87</h3>
                                        <span> /Kg</span>
                                    </div>
                                </div>
                                <button type="button" className="home-page__slider-card-button">
                                    Add to cart
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home-page__company">
                    <span className="home-page__company-title">Trusted and lovely by the best company</span>
                    <div className="home-page__company-brand">
                        <img src={ifttt} alt="ifttt" className="img-fluid" style={{ height: '90px' }} />
                        <img src={amazon} alt="amazon" className="img-fluid" style={{ height: '100px' }} />
                        <img
                            src={google}
                            alt="google"
                            className="img-fluid"
                            style={{ height: '50px', marginTop: '20px' }}
                        />
                        <img src={paypal} alt="paypal" className="img-fluid" style={{ height: '90px' }} />
                        <img
                            src={air}
                            alt="airbnb"
                            className="img-fluid"
                            style={{ height: '50px', marginTop: '20px' }}
                        />
                    </div>
                </section>
                <section className="home-page__service">
                    <div className="home-page__service-daily">
                        <h1>Gocein could be your daily service</h1>
                        <p>
                            Learn into that problem translating our vision of having a market leading platfrom.
                            Commitment data-point high performance
                        </p>

                        <ul className="home-page__service-daily-list">
                            <li className="home-page__service-daily-item">
                                <FontAwesomeIcon className="home-page__service-daily-icon" icon={faCircleCheck} />
                                <span>Best service than others</span>
                            </li>
                            <li className="home-page__service-daily-item">
                                <FontAwesomeIcon className="home-page__service-daily-icon" icon={faCircleCheck} />
                                <span>Use experience staff</span>
                            </li>
                            <li className="home-page__service-daily-item">
                                <FontAwesomeIcon className="home-page__service-daily-icon" icon={faCircleCheck} />
                                <span>Usefriendly app</span>
                            </li>
                        </ul>

                        <button type="button" className="home-page__service-daily-button">
                            Learn More
                        </button>
                    </div>
                    <div className="home-page__service-advertisement">
                        <div className="home-page__service-advertisement-left">
                            <div className="home-page__service-advertisement-fresh">
                                <span className="home-page__service-advertisement-fresh-icon">
                                    <FontAwesomeIcon className="" icon={faCartShopping} />
                                </span>
                                <h1>Fresh Foods</h1>
                                <p>Learn into that problem translating our vision of having</p>
                            </div>
                            <div className="home-page__service-advertisement-fast">
                                <span className="home-page__service-advertisement-fast-icon">
                                    <FontAwesomeIcon className="" icon={faTruck} />
                                </span>
                                <h1>Fastest Delivery</h1>
                                <p>Learn into that problem translating our vision of having</p>
                            </div>
                        </div>
                        <div className="home-page__service-advertisement-right">
                            <div className="home-page__service-advertisement-live">
                                <span className="home-page__service-advertisement-live-icon">
                                    <FontAwesomeIcon className="" icon={faOpencart} />
                                </span>
                                <h1>Live Tracking</h1>
                                <p>Learn into that problem translating our vision of having</p>
                            </div>
                            <div className="home-page__service-advertisement-low">
                                <span className="home-page__service-advertisement-low-icon">
                                    <FontAwesomeIcon className="" icon={faSackDollar} />
                                </span>
                                <h1>Low Cost Delivery</h1>
                                <p>Learn into that problem translating our vision of having</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="home-page__people">
                    <span className="home-page__people-title">We offer people best way eat fresh food</span>
                    <div className="home-page__people-see">
                        <p>
                            Learn into that problem translating our vision of having a market leading platfrom.
                            Commitment data-point high performance
                        </p>
                        <button type="button">See More</button>
                    </div>
                </section>
                <hr className="home-page__break" />
                <section className="home-page__product-group">
                    <ul className="home-page__product-tab-list">
                        <li className="home-page__product-tab-item">Tất cả</li>
                        <li className="home-page__product-tab-item">Vegetable</li>
                        <li className="home-page__product-tab-item">Fruit</li>
                        <li className="home-page__product-tab-item">Frozen Food</li>
                        <li className="home-page__product-tab-item">Fish & Seafood</li>
                        <li className="home-page__product-tab-item">Cake & Bakery</li>
                        <li className="home-page__product-tab-item">Khác</li>
                    </ul>
                    <div className="home-page__product">
                        <div className="home-page__product-img">
                            <img src={avocado} alt="broccoliorganic" style={{ width: '100px' }} />
                        </div>
                        <div className="home-page__product-body">
                            <div>
                                <span className="home-page__product-body-name">Banana Organic</span>
                                <span className="home-page__product-body-shop">By Reno Shop</span>
                            </div>
                            <div className="home-page__product-body-detail">
                                <div className="home-page__product-body-detail-review">
                                    <div className="home-page__product-body-detail-start-group">
                                        <FontAwesomeIcon
                                            className="home-page__product-body-detail-start-icon"
                                            icon={faStar}
                                        />
                                        <span>4.7</span>
                                    </div>
                                    <div className="home-page__product-body-detail-time">
                                        <FontAwesomeIcon
                                            className="home-page__product-body-detail-time-icon"
                                            icon={faClock}
                                        />
                                        <span>5 min</span>
                                    </div>
                                </div>
                                <div className="home-page__product-body-price-group">
                                    <span>$</span>
                                    <h3>5.87</h3>
                                    <span> /Kg</span>
                                </div>
                            </div>
                            <button type="button" className="home-page__product-body-button">
                                Add to cart
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}
export default Home;
