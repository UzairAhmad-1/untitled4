import React from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="jumbotron bg-header-gradient">
        <div className="row">
          <div className="col col-md-6">
            <h1 className="font-weight-bold">
              Drive&nbsp;<span className="color-blue">Digital Revolution</span>
              <br />
              Through Data Science
            </h1>
            <p className="text-black-50">
              Description Text&nbsp;Description Text&nbsp;Description
              Text&nbsp;Description Text Description Text&nbsp;Description
              Text&nbsp;Description Text..&nbsp;
              <span className="color-blue">[read more]</span>
            </p>
            <div className="d-flex align-items-baseline">
              <div className="mr-3">
                <h1 className="mb-0">Download</h1>
                <h3>The App Now</h3>
              </div>
              <div className="h-80p mr-3">
                <img className="h-100" src="assets/img/apple.png" />
              </div>
              <p className="text-black-50 mb-0 mr-3 f-20">or</p>
              <div className="h-80p mr-3">
                <img className="h-100" src="assets/img/google-play.png" />
              </div>
            </div>
          </div>
          <div className="col col-md-6">
            <div>
              <img className="w-100" src="assets/img/fullWeb%20(1).png" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <img className="w-100" src="assets/img/fullWeb%20(3).png" />
          </div>
          <div className="col-md-6">
            <div>
              <h2 className="font-weight-bold">Who we are?</h2>
              <p className="text-black-50">
                PNG stands for Portable Network Graphics. PNG is a raster image
                format that supports lossless data compression. PNG was
                developed as an enhanced, non-patented replacement for Graphics
                interchange Format (GIF). Raster images, often referred to as
                bitmap images, are graphics made from grids of pixels (point of
                colors) as opposed to mathematical representations like vector
                graphics. On the web, the document image formats are PNG, JPG,
                and GIF.
              </p>
            </div>
          </div>
        </div>
      </div>

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
            <div className="col-md-3 border-right">
              <h6 className="text-center">Certified Public Accountants</h6>
              <h5 className="color-blue font-weight-bold text-center">
                +20,000
              </h5>
            </div>
            <div className="col-md-3 border-right">
              <h6 className="text-center">Reports sent in the System</h6>
              <h5 className="color-blue font-weight-bold text-center">
                +670,000
              </h5>
            </div>
            <div className="col-md-3 border-right">
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
      <div className="my-5">
        <div className="container">
          <h1 className="font-weight-bold text-center">How to get start</h1>
          <p className="text-center mb-5">
            Use the search bar to find a photo or browse by your preferred
            category
          </p>
          <div className="row mt-5 py-4">
            <div className="col-md-3 mt-5">
              <div className="br-12 p-3 shadow text-center">
                <div className="round-110p bg-dark mt-n6 mx-auto mb-3 d-flex justify-content-center align-items-center">
                  <h1 className="text-white">1</h1>
                </div>
                <img className="w-80p" src="assets/img/web1%20-%20Copy.png" />
                <h6 className="font-weight-bold">Download</h6>
                <p>
                  Use the search bar to find a photo or browse by your preferred
                  category
                  <br />
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="br-12 p-3 shadow text-center">
                <div className="round-110p bg-dark mt-n6 mx-auto mb-3 d-flex justify-content-center align-items-center">
                  <h1 className="text-white">2</h1>
                </div>
                <img
                  className="w-80p"
                  src="assets/img/web1%20-%20Copy%20(2).png"
                />
                <h6 className="font-weight-bold">Download</h6>
                <p>
                  Use the search bar to find a photo or browse by your preferred
                  category
                  <br />
                </p>
              </div>
            </div>
            <div className="col-md-3 mt-5">
              <div className="br-12 p-3 shadow text-center">
                <div className="round-110p bg-dark mt-n6 mx-auto mb-3 d-flex justify-content-center align-items-center">
                  <h1 className="text-white">3</h1>
                </div>
                <img
                  className="w-80p"
                  src="assets/img/web1%20-%20Copy%20(3).png"
                />
                <h6 className="font-weight-bold">Download</h6>
                <p>
                  Use the search bar to find a photo or browse by your preferred
                  category
                  <br />
                </p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="br-12 p-3 shadow text-center">
                <div className="round-110p bg-dark mt-n6 mx-auto mb-3 d-flex justify-content-center align-items-center">
                  <h1 className="text-white">4</h1>
                </div>
                <img
                  className="w-80p"
                  src="assets/img/web1%20-%20Copy%20(4).png"
                />
                <h6 className="font-weight-bold">Download</h6>
                <p>
                  Use the search bar to find a photo or browse by your preferred
                  category
                  <br />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-light-blue py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="br-8 shadow p-4 bg-white">
                <img
                  className="w-100"
                  src="assets/img/web1%20-%20Copy%20(5).png"
                />
              </div>
            </div>
            <div className="col">
              <div className="br-8 shadow p-4 bg-white">
                <img
                  className="w-100"
                  src="assets/img/web1%20-%20Copy%20(6).png"
                />
              </div>
            </div>
            <div className="col">
              <div className="br-8 shadow p-4 bg-white">
                <img
                  className="w-100"
                  src="assets/img/web1%20-%20Copy%20(7).png"
                />
              </div>
            </div>
            <div className="col">
              <div className="br-8 shadow p-4 bg-white">
                <img
                  className="w-100"
                  src="assets/img/web1%20-%20Copy%20(8).png"
                />
              </div>
            </div>
            <div className="col">
              <div className="br-8 shadow p-4 bg-white">
                <img
                  className="w-100"
                  src="assets/img/web1%20-%20Copy%20(9).png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-5" />
      <Footer />
    </>
  );
}

export default App;
