import { Component } from "react";
import hero from '../assert/hero01.jpg'
class About extends Component{
    render(){
    return(
        <>
        <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5 shadow-lg">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={hero} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6 ">
        <h1 class="display-5 fw-bold lh-1 mb-3">Welcome to the Pizza Store</h1>
        
        <p class="lead">Your favorite pizza, delivered fast.</p>
        <div class="d-grid gap-2 d-md-flex justify-content-md-start">
          <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
          <button type="button" class="btn btn-outline-secondary btn-lg px-4">Default</button>
        </div>
      </div>
    </div>
  </div>
    </>
    

    )
}
}
export default About;