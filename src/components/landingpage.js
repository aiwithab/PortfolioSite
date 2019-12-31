import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
    render() {
        return(
            <div style={{width : "100", margin:'auto' }}>
                <Grid className="landing-grid">
                    <Cell col ={12}>
                        <img 
                        src="https://media.licdn.com/dms/image/C5103AQFGTykEh9MBcw/profile-displayphoto-shrink_200_200/0?e=1581552000&v=beta&t=ph6oOL27VQfmML79a-6paex4uMwiC-T69zZR8zIhOTA"
                        alt="Avatar"
                        className="avatar-image"
                        />
                        <div className="banner-text">
                            <h1>Electronics & Telecommunication Engineer</h1>
                            <hr/>
                            <p>
                                HTML/CSS | Javascript | Python | C | MySQL | Android 
                            </p>
                            <div className="social-links">

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/abdul-ahad-a6291b171" rel="noopener noreferrer"  target="_blank">
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
