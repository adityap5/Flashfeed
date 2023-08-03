import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
  
        <>
            <div className="container my-3">
                <h1 className="my-3" >About Us</h1>
                <div className="accordion" id="accordionExample" >
                    <div className="accordion-item " >
                        <h2 className="accordion-header">
                            <button className="accordion-button"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <strong>Provide Daily Dose of News</strong>
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                            <strong className="text-bg-danger">flashfeed</strong> provide the daily news of differnet categories from around the world.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" >
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                <strong>  Free to use </strong>
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                            <strong className="text-bg-danger">flashfeed</strong>  is a free to use website , where you can get your daily dose of news as you want.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" >
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                <strong>Browser Compatible</strong>
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                            <strong className="text-bg-danger">flashfeed</strong> website is designed and developed to work seamlessly across different web browsers, ensuring consistent functionality and appearance for users regardless of their chosen browser.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" >
                        <h2 className="accordion-header">
                            <button className="accordion-button collapsed"  type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                <strong>Buy me a Cup of Coffee</strong>
                            </button>
                        </h2>
                        <div id="collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" >
                                simply by supporting me and follow me on linkedin,instagram and Github.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    
    )
  }
}
