import Navigation from "../../components/Navigation";

const ContactUsScreen = () => {
  return (
    <div>
      <Navigation />
      <div class="container-fluid ">
        <section id="contact">
          <div>
            <h3 class="text-center mt-3 text-uppercase">contact us</h3>
            <p class="text-center w-75 m-auto">
              If you need any help contact us using the details below.
            </p>
            <div class="row d-flex justify-content-center bg-transparent">
              <div class="col-sm-12 col-md-6 col-lg-3 my-5 d-flex">
                <div class="card border-0">
                  <div class="card-body text-center">
                    <i class="fa fa-phone fa-5x mb-3" aria-hidden="true"></i>
                    <h4 class="text-uppercase mb-5">call us</h4>
                    <p>+91 9272062628 , +91 8766828353</p>
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-6 col-lg-3 my-5">
                <div class="card border-0">
                  <div class="card-body text-center">
                    <i
                      class="fa fa-map-marker fa-5x mb-3"
                      aria-hidden="true"
                    ></i>
                    <h4 class="text-uppercase mb-5">office location</h4>
                    <address>
                      Eastern Express Highway, Opposite Cadburys,Thane,
                      Maharashtra, Mumbai, Maharashtra, 400601, India{" "}
                    </address>
                  </div>
                </div>
              </div>
              <div class="col-sm-12 col-md-6 col-lg-3 my-5">
                <div class="card border-0">
                  <div class="card-body text-center">
                    <i class="fa fa-globe fa-5x mb-3" aria-hidden="true"></i>
                    <h4 class="text-uppercase mb-5">email</h4>
                    <p>orgmartindia@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default ContactUsScreen;
