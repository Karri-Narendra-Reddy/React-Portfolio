import React from 'react'

const Homepage = () => {
  return (
    <section className="home section">
                <div className="container">
                    <div className="row">
                        <div className="home-info padd-15">
                            <h3 className="hello">Hello, my name is <span className="name">Karri Narendra Reddy</span></h3>
                            <h3 className="my-profession">I' m a <span className="typing">Front-End Developer</span></h3>
                            <p> I'm a Front-End Developer with an extensive experience for over 3 months.My expertise is 
                                to create and websites design, Automation Testing, Unit-Testing, and many more...
                            </p>
                            <a href="#contact" className="btn hire-me">Hire Me</a>
                            <div className="image padd-15">
                                <div className="tooltip"><img className="images" src="images/html.png" />
                                    <span className="tooltiptext">HTML</span>
                                </div>
                                <div className="tooltip"><img className="images" src="images/css.png" />
                                    <span className="tooltiptext">CSS</span>
                                </div>
                                <div className="tooltip"><img className="images" src="images/javascript.png" />
                                    <span className="tooltiptext">JavaScript</span>
                                </div>
                                <div className="tooltip"><img className="images" src="images/typescript.png"/>
                                    <span className="tooltiptext">TypeScript</span>
                                </div>
                                <div className="tooltip"><img className="images" src="images/angular.png" />
                                    <span className="tooltiptext">Angular</span>
                                </div>
                                <div className="tooltip"><img className="images" src= "images/jasmine.svg" />
                                    <span className="tooltiptext">Jasmine FrameWork</span>
                                </div>
                                <div className="tooltip"><img className="images" src="images/karma.svg" />
                                    <span className="tooltiptext">Karma FrameWork</span>
                                </div>
                                <div className="tooltip"><img className="images" src="images/flutter.svg" />
                                    <span className="tooltiptext">Flutter</span>
                                </div>
                                <div className="tooltip"><img className="images" src= "images/selenium.svg" />
                                    <span className="tooltiptext">Selenium Automation</span>
                                </div>
                                <div className="tooltip"><img className="images" src= "images/mysql.png" />
                                    <span className="tooltiptext">MySQL</span>
                                </div>
                                <div className="tooltip"><img className="images" src="images/c.png" />
                                    <span className="tooltiptext">C Programming</span>
                                </div>
                                <div className="tooltip"><img className="images" src="images/c++.png" />
                                    <span className="tooltiptext">C++ Programming</span>
                                </div>
                                <div className="tooltip"><img className="images" src="images/java.png" />
                                    <span className="tooltiptext">Java Programming</span>
                                </div>
                                <div className="tooltip"><img className="images" src="images/python.png" />
                                    <span className="tooltiptext">Python Programming</span>
                                </div>                               
                                
                            </div>
                        </div>
                        <div className="home-img padd-15">
                            <img src="images/hero.jpg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
  )
}

export default Homepage