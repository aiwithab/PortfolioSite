import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return(
            <div style={{width : "100", margin:'auto' }}>
                <Grid className="landing-grid">
                    <Cell col ={12}>
                        <img 
                        src= "https://avatars1.githubusercontent.com/u/28875037?s=400&u=07257447d1da8de1d274a274c5829b1ce78e7230&v=4"
                        alt="Avatar"
                        className="avatar-image"
                        />
                        <div className="banner-text">
                            <h1>Abdul Ahad</h1>
                            <hr/>
                            <p>
                                 Flutter | React | Java | Dart | Python | JavaScript | MySQL | Linux | Android
                            </p>
                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/aiwithab" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>
                                 {/* GitHub */}
                                 <a href="https://github.com/aiwithab" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>
                                 {/* Twitter */}
                                 <a href="https://twitter.com/aiwithab" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-twitter-square" aria-hidden="true" />
                                </a>
                                 {/* Reddit */}
                                 <a href="https://www.reddit.com/user/aiwithab" rel="noopener noreferrer"  target="_blank">
                                    <i className="fa fa-reddit-square" aria-hidden="true" />
                                </a>
                                
                            </div>

                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Landing;
