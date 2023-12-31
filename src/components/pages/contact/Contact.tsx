import React from 'react'

const Contact = () => {
  return (
    <section className="contact section">
                <div className="container">
                    <div className="row">
                        <div className="section-title padd-15">
                            <h2>Contact Me</h2>
                        </div>
                    </div>
                    <h3 className="contact-title padd-15">Have Any Question ?</h3>
                    <h4 className="contact-sub-title padd-15">I'M AT YOUR SERVICES</h4>
                    <div className="row">
                        
                        <div className="contact-info-item padd-15">
                            <div className="icon"><i className="fa fa-phone"></i></div>
                            <h3>Call Me On</h3>
                            <p>+91 9676783345</p>
                        </div>
                        <div className="contact-info-item padd-15">
                            <div className="icon"><i className="fa fa-map-marker-alt"></i></div>
                            <h3>Location</h3>
                            <p>India</p>
                        </div>
                        <div className="contact-info-item padd-15">
                            <div className="icon"><i className="fa fa-envelope"></i></div>
                            <h3>Email</h3>
                            <p>narendrareddykarri11@gmail.com</p>
                        </div>
                        <div className="contact-info-item padd-15">
                            <div className="icon"><i className="fa fa-globe-asia"></i></div>
                            <h3>Website</h3>
                            <p>www.linkedin.com/in/karri-narendra-reddy-4bb72318a/</p>
                        </div>
                    </div>
                    <h3 className="contact-title padd-15">SEND ME AN EMAIL</h3>
                    <h4 className="contact-sub-title padd-15">I'M VERY RESPONSIVE TO MESSAGES</h4>
                    
                    <div className="row">
                        <div className="contact-form padd-15">
                            <div className="row">
                                <div className="form-item col-6 padd-15">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Name" />
                                    </div>
                                </div>

                                <div className="form-item col-6 padd-15">
                                    <div className="form-group">
                                        <input type="email" className="form-control" placeholder="Email" />
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="form-item col-12 padd-15">
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Subject" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-item col-12 padd-15">
                                    <div className="form-group">
                                        <textarea name="" className="form-control" id="" placeholder="Message"></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-item col-12 padd-15">
                                    <button type="submit" className="btn">Send Message</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
  )
}

export default Contact