import Header from "./header";
import Foot from "./footer";

function Blog() {
    return (

        <>

            <div class="">
                <Header />
                <img src="Autism.jpg" class="img-fluid d-block w=100" alt="Image"></img>
                <h2 class="text-center fw-bold text-top">AUTISM SPECTRUM DISORDER, DETECT EARLY, MANAGE <br />BETTER.</h2>
                <br />
                <div class="row align-items-center mx-5">
                    <div class="col-md-6 px-5 py-5 d-block w=100">

                        <img src="BlogPic1.jpg" class="img-fluid rounded-5" alt="..." />


                    </div>
                    <div class="col-md-6 px-5 py-5">

                        <h5>What is Purple Butterfly?</h5>
                        <br />
                        <p>
                            Purple Butterfly is dedicated to meeting the unmet need for early detection and on-demand
                            early intervention for children at risk of ASD in India using cutting-edge technology.
                            We are committed to creating an inclusive, reliable, sustainable, scalable ecosystem digitally
                            empowering parents, doctors, special educators, speech therapists, merchants, and anyone with
                            service or business interest in the domain of ASD with a purpose to nurture and build a diverse
                            but equitable community.
                        </p>


                    </div>

                </div>

                <div class="row align-items-center mx-5">

                    <div class="col-md-6 px-5 py-5">

                        <h5>Who We Are?</h5>
                        <br />
                        <p>
                            We are passionate, self-driven Technology and Domain enthusiasts with a burning desire to
                            improve the lives of the people we meet. A committed and experienced team of domain experts,
                            cognitive architects, data scientists, designers, and developers, with a vision to transform
                            the way “healthcare and wellbeing” services,products and solutions are delivered to those
                            involved with autism spectrum disorders.
                        </p>


                    </div>
                    <div class="col-md-6 px-5 py-5 ">

                        <img src="BlogPic2.jpg" class="img-fluid rounded-5" alt="..." />


                    </div>

                </div>
                <Foot />
            </div>

        </>
    );
}

export default Blog;