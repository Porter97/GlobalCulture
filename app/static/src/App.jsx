import React from 'react'

class App extends React.Component {
    render() {
        return (
            <div className="grid-container">
                <div className="image" style={{backgroundImage: `url('https://offbrand-static.s3.amazonaws.com/global-culture/mainImage.jpg')`}}></div>
                <div className="image-shading">
                    <img className="mobile-image" src='https://offbrand-static.s3.amazonaws.com/global-culture/mainImage.jpg' alt="none" style={{width: '100%'}}/>
                </div>
                <div className="body"></div>
                <div className="header"><p><span className="header-text-left">Interdisciplinary Program in Environment and Resources</span><span className="header-text-right">E-IPER</span></p></div>
                <div className="title"><h1 className="title-text">Global Culture & Connected Identities <img className="arrow-image" src='https://offbrand-static.s3.amazonaws.com/global-culture/arrow.jpg'/></h1></div>
                <div className="info">
                    <p className="info-text">
                    First author <br/>
                    Marilyn Cornelius <br/>
                    Phd Candidate <br/>
                    <br/>
                    <br/>
                    473 Via Ortega, Suite 226 <br/>
                    Stanford University <br/>
                    Stanford, CA 94305 <br/>
                    </p>
                </div>
                <div className="image2"><img className="image-city" src='https://offbrand-static.s3.amazonaws.com/global-culture/secondaryImage.jpg' alt='None'/></div>
                <div className="abstract"><p className="abstract-text">Abstract</p></div>
                <div className="body-text">
                    <p className="text-body-text">
                    Environmental sustainability is one of the most pressing challenges for humanity, requiring innovative means to address climate change, food, water, energy, pover- ty, and other interconnected issues without causing further damage to the planet (Matson, 2009; National Research Council, 1999).
                    “Sustainability science” has emerged as a research paradigm that calls for collaborative and problem-driven approaches to solve complex nature-society problems (Clark, 2003; Kates et al., 2001).
                    In essence, environmental sustainability confronts humanity with the task of reducing its impact on the earth.
                    </p>
                </div>
                <div className="side-text"></div>
            </div>
        )
    }
};

export default App