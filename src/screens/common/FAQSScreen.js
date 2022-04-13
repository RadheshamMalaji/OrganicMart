import Navigation from "../../components/Navigation";

const FAQSScreen = () => {
  return (
    <div>
      <Navigation />
      <div className="main1">
        <h3 className="headingcontent">FAQs : </h3>
        <p className="paraabout">
          Kindly check the FAQ below if you are not very familiar with the
          functioning of this website. If your query is of urgent nature and is
          different from the set of questions then do write to us at
          customerservice@mygreenmart.in or call us on 8268001714 between 10 am
          & 5 pm on all days including Sunday to get our immediate help.
        </p>
        <h5 className="headingcontent">Registration : </h5>
        <h5>How do I register?</h5>
        <p className="paraabout">
          You can register by clicking on the “Sign Up” link at the top right
          corner of the homepage. Please provide the information in the form
          that appears. You can review the terms and conditions, provide your
          payment mode details and submit the registration information.{" "}
        </p>
      </div>
    </div>
  );
};
export default FAQSScreen;
