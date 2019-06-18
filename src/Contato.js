import React from 'react'

const Contato = props => {
    return (
        <div>
            <section className='page-section cta'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-xl-9 mx-auto'>
                            <div className='cta-inner text-center rounded'>
                                <h2 className='section-heading mb-5'>
                                    <span className='section-heading-upper'>Come On In</span>
                                    <span className='section-heading-lower'>We're Open</span>
                                </h2>
                                <ul className='list-unstyled list-hours mb-5 text-left mx-auto'>
                                    <li className='list-unstyled-item list-hours-item d-flex'>
                                        Sunday
                                        <span className='ml-auto'>Closed</span>
                                    </li>
                                    <li className='list-unstyled-item list-hours-item d-flex'>
                                        Monday
                                        <span className='ml-auto'>7:00 AM to 8:00 PM</span>
                                    </li>
                                    <li className='list-unstyled-item list-hours-item d-flex'>
                                        Tuesday
                                        <span className='ml-auto'>7:00 AM to 8:00 PM</span>
                                    </li>
                                    <li className='list-unstyled-item list-hours-item d-flex'>
                                        Wednesday
                                        <span className='ml-auto'>7:00 AM to 8:00 PM</span>
                                    </li>
                                    <li className='list-unstyled-item list-hours-item d-flex'>
                                        Thursday
                                        <span className='ml-auto'>7:00 AM to 8:00 PM</span>
                                    </li>
                                    <li className='list-unstyled-item list-hours-item d-flex'>
                                        Friday
                                        <span className='ml-auto'>7:00 AM to 8:00 PM</span>
                                    </li>
                                    <li className='list-unstyled-item list-hours-item d-flex'>
                                        Saturday
                                        <span className='ml-auto'>9:00 AM to 5:00 PM</span>
                                    </li>
                                </ul>
                                <p className='address mb-5'>
                                    <em>
                                        <strong>1116 Orchard Street</strong>
                                        <br />
                                        Golden Valley, Minnesota
                                    </em>
                                </p>
                                <p className='mb-0'>
                                    <small>
                                        <em>Call Anytime</em>
                                    </small>
                                    <br />
                                    (317) 585-8468
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='page-section about-heading'>
                <div className='container'>
                    <img className='img-fluid rounded about-heading-img mb-3 mb-lg-0' src='img/about-menor.jpg' alt='' />
                    <div className='about-heading-content'>
                        <div className='row'>
                            <div className='col-xl-9 col-lg-10 mx-auto'>
                                <div className='bg-faded rounded p-5'>
                                    <h2 className='section-heading mb-4'>
                                        <span className='section-heading-upper'>Respeito e Dignidade</span>
                                        <span className='section-heading-lower'>Morada da Melhor Idade</span>
                                    </h2>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dolor sapien, tincidunt vitae leo sed, vestibulum varius velit. Pellentesque in nulla augue. Curabitur tincidunt quam lacus, vel sollicitudin odio euismod non. Phasellus imperdiet arcu nec tincidunt pretium. Suspendisse interdum risus at risus imperdiet, et egestas purus facilisis. Nullam vehicula nisi at commodo aliquam. Etiam eu pellentesque purus, ut ultricies lectus. Nulla facilisi. Morbi id pellentesque est, quis pretium libero. Praesent pulvinar nulla ut metus efficitur lacinia. Phasellus lacus urna, aliquet non vulputate et, rutrum at sem.</p>
                                    <p>Nunc blandit eros vitae leo sodales, eu lobortis urna porttitor. Sed laoreet mauris neque, ac laoreet augue consequat nec. Aliquam tristique venenatis maximus. In nec dui bibendum, suscipit odio interdum, mollis libero. Fusce hendrerit est leo, id finibus quam tempor nec. Vestibulum convallis vulputate tortor. Sed elementum fermentum sem et accumsan. In tempor facilisis lacus nec faucibus. Pellentesque nec nisi eget ipsum lacinia dictum a sodales arcu. In vitae nisl turpis. Nunc ullamcorper, erat et ultricies tincidunt, felis enim semper augue, a pretium orci nibh ut augue. Etiam at ligula leo. Nullam auctor risus nisi, at euismod libero mattis consectetur. Cras vulputate nisl in est ornare finibus. Curabitur feugiat at elit nec scelerisque. Donec placerat mauris vel ex aliquet gravida.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contato