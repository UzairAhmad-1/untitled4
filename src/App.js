import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div>
        <div className="py-5 bg-gradient">
          <div className="container">
            <div className="row">
              <div className="col-md-4 d-flex flex-column justify-content-between">
                <Card
                  heading="End-to-end encryption"
                  text="Here is a text describing a feature in the app"
                  image="ic1.png"
                />
                <Card
                  heading="End-to-end encryption"
                  text="Here is a text describing a feature in the app"
                  image="webPage%20(2).png"
                />
              </div>
              <div className="col-md-4 text-center">
                <img
                  className="w-75 shadow-lg"
                  src="assets/img/webPage%20(1).png"
                />
              </div>
              <div className="col-md-4 d-flex flex-column justify-content-between">
                <Card
                  heading="End-to-end encryption"
                  text="Here is a text describing a feature in the app"
                  image="webPage%20(3).png"
                />
                <Card
                  heading="End-to-end encryption"
                  text="Here is a text describing a feature in the app"
                  image="webPage%20(4).png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="py-5 bg-blue">
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <h6 className="text-center">Certified Public Accountants</h6>
                <h5 className="color-blue font-weight-bold text-center">
                  +20,000
                </h5>
              </div>
              <div className="col-md-3">
                <h6 className="text-center">Reports sent in the System</h6>
                <h5 className="color-blue font-weight-bold text-center">
                  +670,000
                </h5>
              </div>
              <div className="col-md-3">
                <h6 className="text-center">Registered Business</h6>
                <h5 className="color-blue font-weight-bold text-center">
                  +15,000
                </h5>
              </div>
              <div className="col-md-3">
                <h6 className="text-center">Reports sent in the System</h6>
                <h5 className="color-blue font-weight-bold text-center">
                  +70,000
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
