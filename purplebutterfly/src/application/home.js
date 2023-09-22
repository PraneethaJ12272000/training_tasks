import React from "react";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import Header from "./header";
import Foot from "./footer";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
// import $ from 'jquery';
// import 'owl.carousel';

function Home() {
    const navigate = useNavigate()

    // const OwlCarousel = () => {
    // const carouselRef = useRef(null);

    // useEffect(() => {
    // $(carouselRef.current).owlCarousel({
    // items: 3, // Number of items to show
    // loop: true, // Infinite loop
    // margin: 10, // Space between items
    // autoplay: true, // Autoplay enabled
    // autoplayTimeout: 2000, // Autoplay interval
    // nav: true, // Show navigation arrows
    // navText: ['<', '>'], // Custom navigation arrows
    // responsive: {
    // Responsive breakpoints
    // 0: {
    // items: 1,
    // },
    // 576: {
    // items: 2,
    // },
    // 768: {
    // items: 3,
    // },
    // },
    // });
    // }, []);
    // }

    return (
        <>
            <div class="Home">
                <Header />
                <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" >
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="Pic1.jpg" class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block caption-overlay">
                                <h1>Autism Spectrum <br />
                                    Disorder</h1>
                                <p>Detect Early. Manage Better.</p>
                                <a class="btn btn-light rounded-pill " href="#Solutions">OUR SOLUTIONS</a>
                            </div>
                        </div>
                        <div class="carousel-item ">
                            <img src="Pic2.jpg" class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block caption-overlay">
                                <h1>On Demand <br />
                                    Ecosystem</h1>
                                <p>Doctor, Therapists & More.</p>
                                <a class="btn btn-light rounded-pill " href="#Solutions">OUR SOLUTIONS</a>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="Pic3.jpg" class="d-block w-100" alt="..."></img>
                            <div class="carousel-caption d-none d-md-block caption-overlay">
                                <h1>1 in 100 Indian <br />
                                    Children at ASD risk</h1>
                                <p>Together, Empowered, Engaged.</p>
                                <a class="btn btn-light rounded-pill " href="#Solutions">OUR SOLUTIONS</a>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

                <div class="container overlap-container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <h2 id="About">About</h2>
                            <img src="cardImg.jpg" class="img-fluid rounded " alt="Image"></img>
                        </div>
                        <div class="col-md-6">
                            <p>Purple Butterfly is dedicated to meeting the need for early detection and intervention for children
                                at risk of ASD in India using cutting-edge technology. </p>
                            <p>
                                We are committed to creating an inclusive, reliable, sustainable, scalable digital ecosystem
                                empowering parents, doctors, special educators, speech therapists, merchants, and anyone with
                                service or business interest in the domain of ASD with a purpose to nurture and build a diverse but
                                equitable community</p>

                            {/* <button onClick={() => navigate('/blog')}  class="btn btn-secondary px-5 fw-bold rounded-pill">Learn More</button> */}

                            <a class="btn btn-secondary px-5 fw-bold rounded-pill" href="/blog">Learn More</a>
                            {/* <Link to="/blog" target="_blank">Learn More</Link> */}

                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6 ">
                            <h2 id="Solutions" class="colourSol">Solutions</h2>

                            <img src="Solutions.png" class="img-fluid rounded " alt="Image"></img>
                        </div>

                        <div class="col-md-6">

                            <h3 class="colourSol">Platform Benefits</h3>
                            <br />

                            <div class="row">
                                <div class="col-md-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                    </svg>
                                </div>

                                <div class="col-md-10">
                                    <h5 class="colourSol">Improve detection accuracy</h5>
                                    <p >Ready to use Artificial Intelligence model for detection</p>

                                </div>
                            </div>
                            <div class="row">
                                <h5 class="colourSol">Accelerate diagnosis</h5>
                                <p>Fast track detection and diagnosis</p>
                                <br />
                            </div>
                            <div class="row">
                                <h5 class="colourSol">Consult with medical experts, therapists</h5>
                                <p>Flexible consultation for expert opinion and follow-up</p>
                                <br />
                            </div>
                            <div class="row">
                                <h5 class="colourSol">Increase the likelihood of early intervention</h5>
                                <p>Improve lives with proactive, and advanced treatment solutions</p>
                            </div>
                        </div>

                    </div>
                </div>

                <div id="carouselExampleControls" class="carousel slide impact" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <h3 id="Impact">Impact</h3>
                        <br></br>
                        <div class="carousel-item active">
                            <div class="row align-items-center">

                                <div class="col-md-5">
                                    <img class="img-fluid rounded-5" width={500} height={500} src="Early.png" alt="First slide" />
                                </div>
                                <div class="col-md-7 ">
                                    <h5 >Early Detection</h5><br></br>
                                    <p> It is proven that early detection and intervention between 18 to 48 months have the power to alter an "At-Risk" child's development path and improve outcomes for the future. </p>
                                </div>


                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row align-items-center">

                                <div class="col-md-5">
                                    <img class="img-fluid rounded-5" width={500} height={500} src="Psych.png" alt="Second slide" />
                                </div>
                                <div class="col-md-7">
                                    <h5>Psychiatrist-to-Child Ratio</h5><br></br>
                                    <p> With a Psychiatrist to Child ratio of 1:1,00,000, India is way behind in being abl provide appropriate intervention to "At-risk" children at the "right time" </p>
                                </div>


                            </div>
                        </div>
                        <div class="carousel-item">
                            <div class="row align-items-center">

                                <div class="col-md-5">
                                    <img class="img-fluid rounded-5" width={500} height={500} src="Social.png" alt="Third slide" />
                                </div>
                                <div class="col-md-7">
                                    <h5>Social Stigma</h5><br></br>
                                    <p> Social stigma hinders the real understanding of autism, that it is not a disease but a variation in the developmental pattern. This has kept civil society and schools away from truly understanding that autism can be managed with a little bit of extra awareness, knowledge, training, and patience. </p>
                                </div>


                            </div>

                        </div>
                    </div>
                </div>

                <div class=" container ">
                    <h3 class="colourSol">Co-Founders</h3><br />
                    <div class=" container row align-item-center">

                        {/* <div ref={carouselRef} className="owl-carousel"> */}

                        <div class="container col-md-4">
                            {/* <!-- Button trigger modal --> */}
                            <button type="button" class="btn btn-white zoom" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <img width={300} height={300} src="CF1.jpg" alt="Photo" />
                                <p class="text-white colour fs-4">Depangshu Dasgupta</p>
                            </button>

                            {/* <!-- Modal --> */}
                            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header colour">
                                            <h1 class="modal-title fs-5  text-white" id="exampleModalLabel">Depangshu Dasgupta</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="row align-item-center">
                                                <div class="col-md-6">
                                                    <img width={300} height={300} src="CF1.jpg" alt="Photo" />
                                                    <p class="text-white colour fs-4 text-center">Co-Founder</p>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>
                                                        Debangshu brings over two decades of experience in designing and implementing strategic solutions for attracting and acquiring top talent, to solve talentgaps and provide strategies to enable a sustainable talent landscape. He hasbeen successfully driving large and complex businesses in diverse geographies.Debangshu’s background spans across industries from BFSI, Technology, Telecom,Retail, Consulting and Infrastructure, having breadth of experience includes acombination of regional, country and international level roles. He has also beenassociated with multiple organizations like Global Alliance for Mass Entrepreneurs(GAME), LINK (erstwhile NUMA, the French accelerator), Revenue Collective (a globalthink tank headquartered in US) as Mentor in pro-bono capacity.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="container col-md-4">
                            {/* <!-- Button trigger modal --> */}
                            <button type="button" class="btn btn-white zoom" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                                <img width={300} height={300} src="CF2.jpg" alt="Photo" />
                                <p class="text-white colour fs-4">Subhrojyothi Mukherjee</p>
                            </button>

                            {/* <!-- Modal --> */}
                            <div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header colour">
                                            <h1 class="modal-title fs-5  text-white" id="exampleModalLabel">Subhrojyothi Mukherjee</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="row align-item-center">
                                                <div class="col-md-6">
                                                    <img width={300} height={300} src="CF2.jpg" alt="Photo" />
                                                    <p class="text-white colour fs-4 text-center">Co-Founder</p>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>
                                                        Subhrojyoti is a seasoned business leader specializing in large business transformation, P&L management and growth acceleration. He has worked in diverse industries with organizations like TATA, Bharti Airtel, Vediocon group, Reliance group etc. Over the years Subhrojyoti has built an excellent credibility of near perfect diagnosis of business pain points and define, design and deliver sustainable solutions for the same. Subhrojyoti is an avid Rotarian and he has been spending considerable time working pro-bono on meaningful projects in the space of poverty alleviation and economic empowerment.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div class="container col-md-4">
                            {/* <!-- Button trigger modal --> */}
                            <button type="button" class="btn btn-white zoom" data-bs-toggle="modal" data-bs-target="#exampleModal2">
                                <img width={300} height={300} src="CF3.jpg" alt="Photo" />
                                <p class="text-white colour fs-4">Vijay Ramamoorthy</p>
                            </button>

                            {/* <!-- Modal --> */}
                            <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog modal-lg">
                                    <div class="modal-content">
                                        <div class="modal-header colour">
                                            <h1 class="modal-title fs-5  text-white" id="exampleModalLabel">Vijay Ramamoorthy</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="row align-item-center">
                                                <div class="col-md-6">
                                                    <img width={300} height={350} src="CF3.jpg" alt="Photo" />
                                                    <p class="text-white colour fs-4 text-center">Co-Founder</p>
                                                </div>
                                                <div class="col-md-6">
                                                    <p>
                                                        Vijay has over two decades of experience in product development and architecting business critical technology solutions in the fields of Healthcare, Digital Transformation, Agri-Tech and Marketing Automation. He has led large transformation solutions for various Fortune 500 clients across Banking, Telecom, Airlines, Manufacturing, Healthcare & Insurance. As an entrepreneur having extensive experience in healthcare, Vijay and his team were successful in crafting an innovative solution comprising of proprietary products and services, that transformed Patient Engagement and Experience to a whole new plane. A passionate hydroponics farmer, Vijay provides pro bono consulting in the space of hydroponics, urban farming and sustainable farming methods.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* </div> */}
                    </div>
                </div>

                <form class="container">
                    <br />
                    <h3 class="colourSol">Get In Touch</h3><br />
                    <div class="row align-item-center">
                        <div class="col-md-6 ">
                            <img class="img-fluid" width={550} height={400} src="Form.png" alt="Photo" />
                        </div>
                        <div class="col-md-6  mb-3">
                            <label for="validationDefault01" class="form-label"></label>
                            <input type="text" class="form-control form" id="validationDefault01" placeholder="Enter your name" required />
                            <label for="validationDefault02" class="form-label"></label>
                            <input type="email" class="form-control form" id="validationDefault02" placeholder="Enter your Email " required />
                            <label for="validationDefault03" class="form-label"></label>
                            <input type="tel" class="form-control form" id="validationDefault03" pattern="^\d{4}-\d{3}-\d{3}$" placeholder="Enter your Phone number" required />
                            <label for="validationDefault04" class="form-label"></label>
                            <textarea class="form-control form" id="exampleFormControlTextarea1 validationDefault04" rows="3" placeholder="Enter a Message"></textarea><br />
                            <button class="btn btn-secondary px-5 fw-bold rounded-pill" type="submit">Send Message</button>
                        </div>
                    </div>

                </form>

                <Foot />
            </div >
        </>
    );
}

export default Home;