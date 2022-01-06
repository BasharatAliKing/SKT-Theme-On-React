import React, { Component } from 'react';

import "./App.css"
import "./Responcive.css";

export default class App extends Component {
    render() {
        return (
            <>
                <section id="header">
                    <div className="container mt-4">
                        <div className="row">
                            <div className="col-md-12">
                                <nav className='navbar navbar-light bg-white navbar-expand-lg'>
                                    <a className="navbar-brand" href="">
                                        <img src={process.env.PUBLIC_URL + "/logo.png"} alt="My-Pic" width="100%" />
                                    </a>
                                    <button class="navbar-toggler bg-white">
                                        <span class="navbar-toggler-icon" data-toggle="collapse" data-target="#mynavbar"></span>
                                    </button>
                                    <div class="collapse navbar-collapse" id="mynavbar">

                                        <ul className='navbar-nav me-auto'>
                                            <li className='nav-item'><a href="" className='nav-link active'>Home</a></li>
                                            <li className='nav-item'><a href="" className='nav-link'>About</a></li>
                                            <li className='nav-item'><a href="" className='nav-link'>Product</a></li>
                                            <li className='nav-item'><a href="" className='nav-link'>Categories</a></li>
                                            <li className='nav-item'><a href="" className='nav-link'>News</a></li>
                                            <li className='nav-item'><a href="" className='nav-link'>Contact</a></li>
                                            <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-search'></i></a></li>
                                            <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-shopping-bag'></i></a></li>
                                        </ul>
                                        </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="home">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h1>Diamonds</h1>
                                <h2>Jewellery Collection</h2>
                                <h6>Explore Now</h6>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="categories">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className='text-center '>Shop by Categories</h1>
                                <div className="row mt-5">
                                    <div className="col-md-4 col-sm-6">
                                        <img src={process.env.PUBLIC_URL + "/blog-thumb-1.jpg"} alt="My-Pic" width="100%" />
                                        <h3>EARRINGS</h3>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <img src={process.env.PUBLIC_URL + "/blog-thumb-2.jpg"} alt="My-Pic" width="100%" />
                                        <h3>NECKLESSES</h3>
                                    </div>
                                    <div className="col-md-4 col-sm-6">
                                        <img src={process.env.PUBLIC_URL + "/blog-thumb-3.jpg"} alt="My-Pic" width="100%" />
                                        <h3>RINGS</h3>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section id="collection">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className='text-center'>New Collection</h1>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-3 col-sm-6 ">
                                    <div className="card shadow text-center">
                                        <img className='card-img-top' src={process.env.PUBLIC_URL + "new-collection-1.jpg"} alt="My-Pic" width="100%" />
                                        <div className="card-body">
                                            <h4>Golden Pendent</h4>
                                            <p>$499.0</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="card shadow text-center">
                                        <img className='card-img-top' src={process.env.PUBLIC_URL + "new-collection-2.jpg"} alt="My-Pic" width="100%" />
                                        <div className="card-body">
                                            <h4>Wedding Ring</h4>
                                            <p>$299.0</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="card shadow text-center">
                                        <img className='card-img-top' src={process.env.PUBLIC_URL + "new-collection-3.jpg"} alt="My-Pic" width="100%" />
                                        <div className="card-body">
                                            <h4>Jade Pendent</h4>
                                            <p>$299.0</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 col-sm-6">
                                    <div className="card shadow text-center">
                                        <img className='card-img-top' src={process.env.PUBLIC_URL + "new-collection-4.jpg"} alt="My-Pic" width="100%" />
                                        <div className="card-body">
                                            <h4>Necklace & Rings</h4>
                                            <p>$299.0</p>
                                        </div>
                                    </div>
                                </div>
                                <button className='col-lg-2 col-md-4 offset-lg-5 btn text-center'>Explore Now</button>
                            </div>

                        </div>
                    </div>
                </section>


                <section id="jewellery">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>Welcome to Jewellery Collection</h1>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-4 col-sm-6">
                                    <div className="card">
                                        <img className='card-img-top' src={process.env.PUBLIC_URL + "/ring-img-1.png"} alt="My-Pic" width="60%" />
                                        <div className="card-body ml-3">
                                            <h3 title='Texture Cern'>Texture Cern</h3>
                                            <h5 title="Diamond Ring">Diamond Ring</h5>
                                            <h6>Price Range</h6>
                                            <h5>$868.00 – $1,240.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div id="bg-pic" className="col-md-4 col-sm-6">


                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="card ">
                                        <img className='card-img-top' src={process.env.PUBLIC_URL + "/ring-img-2.png"} alt="My-Pic" width="70%" />
                                        <div className="card-body ml-3">
                                            <h3 title='Texture Cern'>Cerry Mulm</h3>
                                            <h5 title="Diamond Ring">Engagement Ring</h5>
                                            <h6>Price Range</h6>
                                            <h5>$868.00 – $1,240.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mt-5">
                                    <div className="card bg-light px-0">
                                        <img className='card-img-top' src={process.env.PUBLIC_URL + "/ring-img-3.png"} alt="My-Pic" width="70%" />
                                        <div className="card-body ml-3">
                                            <h3 title='Texture Cern'>Ring of Clift</h3>
                                            <h5 title="Diamond Ring">Custom Rings</h5>
                                            <h6>Price Range</h6>
                                            <h5>$868.00 – $1,240.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mt-5">
                                    <div className="card border p-0">
                                        <img className='card-img-top' src={process.env.PUBLIC_URL + "/ring-img-4.png"} alt="My-Pic" width="70%" />
                                        <div className="card-body ml-3">
                                            <h3 title='Texture Cern'>Medalian Poulis</h3>
                                            <h5 title="Diamond Ring">Diamond Ring</h5>
                                            <h6>Price Range</h6>
                                            <h5>$868.00 – $1,240.00</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6 mt-5">
                                    <div className="card bg-light p-0">
                                        <img className='card-img-top' src={process.env.PUBLIC_URL + "/ring-img-5.png"} alt="My-Pic" width="70%" />
                                        <div className="card-body ml-3">
                                            <h3 title='Texture Cern'>Ring Metal</h3>
                                            <h5 title="Diamond Ring">Rings</h5>
                                            <h6>Price Range</h6>
                                            <h5>$868.00 – $1,240.00</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="antique">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-6">
                                <img src={process.env.PUBLIC_URL + "/antique-img.jpg"} alt="My-Pic" width="100%" />
                            </div>
                            <div className="text col-md-6">
                                <h2>
                                    Antique
                                    Diamond Necklaces</h2>
                                <h3>beautiful colors. excellent quality.</h3>
                                <p className="">Posuere tellus imperdiet facilisis Curabitur vaucibusy telluseu semper nunc finibus placerat. Suspendissee potent. Praesent velsem.</p>
                                <button className='btn'>Discover</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="deal">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <h1>Deal of the Day</h1>
                            </div>
                            <div className="date col-lg-5 col-md-6">
                                <div className="row">
                                    <div className="col-3">
                                        <h2>725 <span>:</span></h2>
                                        <p>Days</p>
                                    </div>
                                    <div className="col-3">
                                        <h2>01 <span>:</span></h2>
                                        <p>Hours</p>
                                    </div>
                                    <div className="col-3">
                                        <h2>12<span>:</span></h2>
                                        <p>Minutes</p>
                                    </div>
                                    <div className="col-3">
                                        <h2>45<span>:</span></h2>
                                        <p>Seconds</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="featured">
                    <div className="container ">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 mt-5">
                                <div className="card shadow">
                                    <img className='card-img-top' src={process.env.PUBLIC_URL + "/featured-product-1.jpg"} alt="My-Pic" />
                                    <div className="card-body">
                                        <h5> Diamond Bracelet </h5>
                                        <h6>$499.0</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mt-5">
                                <div className="card shadow">
                                    <img className='card-img-top' src={process.env.PUBLIC_URL + "/featured-product-2.jpg"} alt="My-Pic" />
                                    <div className="card-body">
                                        <h5> Wedding Diamond Ring </h5>
                                        <h6>$299.0</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mt-5">
                                <div className="card shadow">
                                    <img className='card-img-top' src={process.env.PUBLIC_URL + "/featured-product-3.jpg"} alt="My-Pic" />
                                    <div className="card-body">
                                        <h5> Wedding Necklace</h5>
                                        <h6>$499.0</h6>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 mt-5">
                                <div className="card shadow">
                                    <img className='card-img-top' src={process.env.PUBLIC_URL + "/featured-product-4.jpg"} alt="My-Pic" />
                                    <div className="card-body">
                                        <h5> Earrings </h5>
                                        <h6>$499.0</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="shipping">
                    <div className="container">
                        <div className="row ">
                            <div className="free  col-md-12">
                                <h1>Free Shipping</h1>
                                <h4>On Orders Over $299</h4>
                                <p>This offer is valid on all our storm items.</p>
                            </div>
                        </div>
                        <div className="row mt-5 gx-4">
                            <div className="  col-md-4 col-sm-6">
                                <div className='shop'>
                                    <h2>Shop & Save</h2>
                                    <p>On All Our Store Items</p>
                                </div>
                                <button className='btn'><i className='fa fa-chevron-right'></i></button>
                            </div>
                            <div className="  col-md-4 col-sm-6 ">
                                <div className='product'>
                                    <h2>Product Catalog</h2>
                                </div>
                                <button className='btn'><i className='fa fa-chevron-right'></i></button>
                            </div>
                            <div className=" col-md-4 col-sm-6 ">
                                <div className='list'>
                                    <h2>Product List</h2>
                                    <p>On All Our Store Items</p>
                                </div>
                                <button className='btn'><i className='fa fa-chevron-right'></i></button>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="silver">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-6 silver">
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <img src={process.env.PUBLIC_URL + "/silver-pendant.png"} alt="My-Pic" width="90%" />
                                    </div>
                                    <div className="col-md-6">
                                        <h5>Flat 30% Off</h5>
                                        <h1>Silver Rings</h1>
                                        <button className='btn'>Discover</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 pendent">
                                <div className="row">
                                    <div className="col-md-6 ">
                                        <img src={process.env.PUBLIC_URL + "/silver-pendant.png"} alt="My-Pic" width="90%" />
                                    </div>
                                    <div className="col-md-6">
                                        <h5>Flat 30% Off</h5>
                                        <h1>Silver Pendent</h1>
                                        <button className='btn'>Discover</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="platinium">
                    <div className="container">
                        <div className="row">
                            <h1>Platinium Collection</h1>
                            <p>Give Her a Symbol of Your Never-Ending Love</p>
                            <button className='btn mx-auto'>Explore Now</button>
                        </div>
                    </div>
                </section>

                <section id="latest">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className='text-center'>Latest News</h1>
                            </div>
                            <div className="row mt-5">
                                <div className="col-md-4 col-sm-6">
                                    <div className="card">
                                        <img src={process.env.PUBLIC_URL + "/category-thumb-1.jpg"} alt="My-Pic" width="100%" />
                                    </div>
                                    <div className="card-body">
                                        <button className='btn-1 shadow'>Uncategorized</button>
                                        <h5>Go Behind the Scenes Fashion Week Spring</h5>
                                        <button className='btn'>Read More</button>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="card">
                                        <img src={process.env.PUBLIC_URL + "/category-thumb-2.jpg"} alt="My-Pic" width="100%" />
                                    </div>
                                    <div className="card-body">
                                        <button className='btn-1 shadow'>Discover</button>
                                        <h5>Go Behind the Scenes Fashion Week Spring</h5>
                                        <button className='btn'>Read More</button>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-6">
                                    <div className="card">
                                        <img src={process.env.PUBLIC_URL + "/category-thumb-3.jpg"} alt="My-Pic" width="100%" />
                                    </div>
                                    <div className="card-body">
                                        <button className='btn-1 shadow'>Discover</button>
                                        <h5>Go Behind the Scenes Fashion Week Spring</h5>
                                        <button className='btn'>Read More</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section id="whats">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <h1>What's New</h1>
                                <p>Sign up for exclusive early sale access and tailored new arrivals.</p>
                            </div>
                            <div className="row form">
                                <div className="col-md-8">
                                    <input type="text" className='form-control' placeholder='Enter Your Email Here' />
                                </div>
                                <div className="col-md-4">
                                    <button className='btn'>Subscribe Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="feature">
                    <div className="container-fluid">
                        <div className="row gx-2">
                            <div className="col-md-3 col-sm-6">
                                <div className='fea'>
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={process.env.PUBLIC_URL + "/feature-img1.jpg"} alt="My-Pic" width="60%" />
                                        </div>
                                        <div className="col-6">
                                            <h1>SHIPPING WORLDWIDE</h1>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className='fea'>
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={process.env.PUBLIC_URL + "/feature-img2.jpg"} alt="My-Pic" width="60%" />
                                        </div>
                                        <div className="col-6">
                                            <h1>30 DAYS RETURNS</h1>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className='fea'>
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={process.env.PUBLIC_URL + "/feature-img3.jpg"} alt="My-Pic" width="60%" />
                                        </div>
                                        <div className="col-6">
                                            <h1>ORDER TRACKING</h1>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="col-md-3 col-sm-6">
                                <div className='fea'>
                                    <div className="row">
                                        <div className="col-6">
                                            <img src={process.env.PUBLIC_URL + "/feature-img4.jpg"} alt="My-Pic" width="60%" />
                                        </div>
                                        <div className="col-6">
                                            <h1>100% PAYMENT SECURE</h1>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>

                <section id="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3">
                                <h1 className='mt-5'>SKT Gold</h1>
                                <address className='mt-3'>
                                    Maecen ligul ligula, pulvin velly metus eget.
                                </address>
                                <p>Phone: +92 303 00 00 000</p>
                                <p>Email: king@gmail.com</p>
                            </div>
                            <div className="col-md-3">
                                <h1 className='mt-5'>Quick links</h1>
                                <ul className='navbar-nav'>
                                    <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-chevron-right'></i>Home</a></li>
                                    <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-chevron-right'></i>About</a></li>
                                    <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-chevron-right'></i>Categories</a></li>
                                    <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-chevron-right'></i>Blog</a></li>
                                    <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-chevron-right'></i>Shop</a></li>

                                </ul>
                            </div>
                            <div className="col-md-3 item">

                                <ul className='navbar-nav '>
                                    <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-chevron-right'></i>My Account</a></li>
                                    <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-chevron-right'></i>Checkout</a></li>
                                    <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-chevron-right'></i>Cart</a></li>
                                    <li className='nav-item'><a href="" className='nav-link'><i className='fa fa-chevron-right'></i>Contact</a></li>

                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h1 className='mt-5'>Follow Us</h1>
                                <ul className='navbar-nav icons'>
                                    <li>
                                        <i className='fa fa-facebook'></i>
                                        <i className='fa fa-twitter'></i>
                                        <i className='fa fa-instagram'></i>
                                        <i className='fa fa-linkedin'></i>
                                        <i className='fa fa-pinterest'></i>
                                    </li>
                                    <p className="mt-3">Payments Accepted</p>
                                    <img className='mt-3' src={process.env.PUBLIC_URL + "/payments-img.jpg"} alt="My-Pic" width="100%" />
                                </ul>
                            </div>
                        </div>
                        <hr className='mt-5' />
                    </div>
                </section>

                <div className="container">
                    <footer className='mb-5 mt-5'>
                        Copyright &copy; basharatalidogar14@gmail.com All Right Reversed!
                    </footer>
                </div>

            </>
        )
    }
}
