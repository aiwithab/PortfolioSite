import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }

    toggleCategories() {

        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.digitaldesignjournal.com/wp-content/uploads/2018/07/Python-Programming-Wallpaper_1.jpg) center / cover' }}>Dictionary CLI</CardTitle>
                        <CardText>
                            Commandline Interface Dictionary written in python using a json containing words and their definations, mapped properly. Applied functionality of word guessing if there is any spelling mistake by user.
                   </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/aiwithab/DictionaryCLI" rel="noopener noreferrer" target="_blank">Github</Button>

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.digitaldesignjournal.com/wp-content/uploads/2018/07/Python-Programming-Wallpaper_1.jpg) center / cover' }}>Application Manager</CardTitle>
                        <CardText>
                            A python script to automate the windows applications opening. save the group of application and reopen them in one click everytime, to increase productivity and save some time.
                   </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/aiwithab/AppAutomation" rel="noopener noreferrer" target="_blank">Github</Button>

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://www.digitaldesignjournal.com/wp-content/uploads/2018/07/Python-Programming-Wallpaper_1.jpg) center / cover' }}>CryptoCurrency Manager</CardTitle>
                        <CardText>
                            A virtual CryptoCurrency manager and miner webapp based on simple blockchain, frontend is written using ReactJS and backend is written using Django PostgreSQL used as Database.
                   </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/aiwithab/BlockChain" rel="noopener noreferrer" target="_blank">Github</Button>

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                </div>


            )
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://colorlib.com/wp/wp-content/uploads/sites/2/Templating-Engines-for-JavaScript.png) center / cover' }}>Portfolio Website</CardTitle>
                        <CardText>
                            My own Portfolio webapp written in javascript using ReactJS
               </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/aiwithab/PortfolioSite" rel="noopener noreferrer" target="_blank">Github</Button>

                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: '#fff', height: '176px', background: 'url(https://colorlib.com/wp/wp-content/uploads/sites/2/Templating-Engines-for-JavaScript.png) center / cover' }}>ToDo WebApp</CardTitle>
                        <CardText>
                            A ToDo list manager webapp written using MEAN stack technologies.
               </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/aiwithab/ToDo" rel="noopener noreferrer" target="_blank">Github</Button>
                        
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    

                </div>

            )
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://miro.medium.com/max/3840/1*6LE29zkQqh35ZruHGumcfQ@2x.jpeg) center / cover' }}>nile</CardTitle>
                        <CardText>
                           nile is a E-commerce cross platform mobile application built using Flutter framework by Google.
               </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/aiwithab/nile-mobile" rel="noopener noreferrer" target="_blank">Github</Button>
                        
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    {/* Project 2 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://miro.medium.com/max/3840/1*6LE29zkQqh35ZruHGumcfQ@2x.jpeg) center / cover' }}>Quiz game</CardTitle>
                        <CardText>
                            Android application made using flutter framework. its a quiz game having questions and user need to answer them as true or false at the end there is total score calculated as results of game.
               </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/aiwithab/QuizGameAndroid" rel="noopener noreferrer" target="_blank">Github</Button>
                            
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                    {/* Project 3 */}
                    <Card shadow={5} style={{ minWidth: '450', margin: 'auto' }}>
                        <CardTitle style={{ color: 'black', height: '176px', background: 'url(https://miro.medium.com/max/3840/1*6LE29zkQqh35ZruHGumcfQ@2x.jpeg) center / cover' }}>Oh My News</CardTitle>
                        <CardText>
                                    Oh My News is a flutter application for android and ios built with the help of NewsApi.org it fetches real time news based on category and shows in beautiful card views also it can open news in inapp browser.
                        </CardText>
                        <CardActions border>
                            <Button colored href="https://github.com/aiwithab/ohmynews" rel="noopener noreferrer" target="_blank">Github</Button>
                           
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name='share' />
                        </CardMenu>
                    </Card>

                </div>
            )
        }

    }



    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Python</Tab>
                    <Tab>JavaScript</Tab>
                    <Tab>Android</Tab>
                </Tabs>


                <Grid>
                    <Cell col={12}>
                        <div className="content">
                            {this.toggleCategories()}
                        </div>
                    </Cell>
                </Grid>


            </div>
        )
    }
}

export default Projects;