import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, Button, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0};
    }

    toggleCategories() {

        if(this.state.activeTab === 0) {
            return(
                <div className="projects-grid">
                    {/* Project 1 */}
                    <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.digitaldesignjournal.com/wp-content/uploads/2018/07/Python-Programming-Wallpaper_1.jpg) center / cover'}}>Dictionary CLI</CardTitle>
                   <CardText>
                       Commandline Interface Dictionary written in python using a json containing words and their definations, mapped properly. Applied functionality of word guessing if there is any spelling mistake by user.
                   </CardText>
                   <CardActions border>
                       <Button colored href="https://github.com/aiwithab/DictionaryCLI" rel="noopener noreferrer"  target="_blank">Github</Button>
                       <Button colored>Codepen</Button>
                       <Button colored>Live Demo</Button>
                   </CardActions>
                   <CardMenu style={{color:'#fff'}}>
                       <IconButton name='share'/>
                   </CardMenu>
               </Card>
                
                {/* Project 2 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.digitaldesignjournal.com/wp-content/uploads/2018/07/Python-Programming-Wallpaper_1.jpg) center / cover'}}>Application Manager</CardTitle>
                   <CardText>
                       A python script to automate the windows applications opening. save the group of application and reopen them in one click everytime, to increase productivity and save some time.
                   </CardText>
                   <CardActions border>
                       <Button colored href="https://github.com/aiwithab/AppAutomation" rel="noopener noreferrer"  target="_blank">Github</Button>
                       <Button colored>Codepen</Button>
                       <Button colored>Live Demo</Button>
                   </CardActions>
                   <CardMenu style={{color:'#fff'}}>
                       <IconButton name='share'/>
                   </CardMenu>
               </Card>
               
                {/* Project 3 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                   <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://www.digitaldesignjournal.com/wp-content/uploads/2018/07/Python-Programming-Wallpaper_1.jpg) center / cover'}}>CryptoCurrency Manager</CardTitle>
                   <CardText>
                       A virtual CryptoCurrency manager and miner webapp based on simple blockchain, frontend is written using ReactJS and backend is written using Django PostgreSQL used as Database.  
                   </CardText>
                   <CardActions border>
                       <Button colored href="https://github.com/aiwithab/BlockChain" rel="noopener noreferrer"  target="_blank">Github</Button>
                       <Button colored>Codepen</Button>
                       <Button colored>Live Demo</Button>
                   </CardActions>
                   <CardMenu style={{color:'#fff'}}>
                       <IconButton name='share'/>
                   </CardMenu>
               </Card>

                </div>
            
               
            )
        }else if(this.state.activeTab === 1) {
            return(
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://colorlib.com/wp/wp-content/uploads/sites/2/Templating-Engines-for-JavaScript.png) center / cover'}}>Portfolio Website</CardTitle>
               <CardText>
                   Commandline Interface Dictionary written in python using a json containing words and their definations, mapped properly. Applied functionality of word guessing if there is any spelling mistake by user.
               </CardText>
               <CardActions border>
                   <Button colored href="https://github.com/aiwithab/DictionaryCLI" rel="noopener noreferrer"  target="_blank">Github</Button>
                   <Button colored>Codepen</Button>
                   <Button colored>Live Demo</Button>
               </CardActions>
               <CardMenu style={{color:'#fff'}}>
                   <IconButton name='share'/>
               </CardMenu>
           </Card>
            
            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://colorlib.com/wp/wp-content/uploads/sites/2/Templating-Engines-for-JavaScript.png) center / cover'}}>MEAN stack WebApplication</CardTitle>
               <CardText>
                   A python script to automate the windows applications opening. save the group of application and reopen them in one click everytime, to increase productivity and save some time.
               </CardText>
               <CardActions border>
                   <Button colored href="https://github.com/aiwithab/AppAutomation" rel="noopener noreferrer"  target="_blank">Github</Button>
                   <Button colored>Codepen</Button>
                   <Button colored>Live Demo</Button>
               </CardActions>
               <CardMenu style={{color:'#fff'}}>
                   <IconButton name='share'/>
               </CardMenu>
           </Card>
           
            {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://colorlib.com/wp/wp-content/uploads/sites/2/Templating-Engines-for-JavaScript.png) center / cover'}}>Prject 3</CardTitle>
               <CardText>
                   A virtual CryptoCurrency manager and miner webapp based on simple blockchain, frontend is written using ReactJS and backend is written using Django PostgreSQL used as Database.  
               </CardText>
               <CardActions border>
                   <Button colored href="https://github.com/aiwithab/BlockChain" rel="noopener noreferrer"  target="_blank">Github</Button>
                   <Button colored>Codepen</Button>
                   <Button colored>Live Demo</Button>
               </CardActions>
               <CardMenu style={{color:'#fff'}}>
                   <IconButton name='share'/>
               </CardMenu>
           </Card>

            </div>
              
            )
        }else if(this.state.activeTab === 2) {
            return(
                <div className="projects-grid">
                {/* Project 1 */}
                <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: 'black', height: '176px', background: 'url(https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fmaxresdefault-1-Cropped.jpg&signature=0f3d93e52187258fb58b727e1256be97) center / cover'}}>College Application</CardTitle>
               <CardText>
                   Android application for Government College of Engineering and Research, Pune. Informative application.
               </CardText>
               <CardActions border>
                   <Button colored href="https://github.com/aiwithab/College-App" rel="noopener noreferrer"  target="_blank">Github</Button>
                   <Button colored>Codepen</Button>
                   <Button colored>Live Demo</Button>
               </CardActions>
               <CardMenu style={{color:'#fff'}}>
                   <IconButton name='share'/>
               </CardMenu>
           </Card>
            
            {/* Project 2 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: 'black', height: '176px', background: 'url(https://miro.medium.com/max/3840/1*6LE29zkQqh35ZruHGumcfQ@2x.jpeg) center / cover'}}>Quiz game</CardTitle>
               <CardText>
                  Android application made using flutter framework. its a quiz game having questions and user need to answer them as true or false at the end there is total score calculated as results of game.
               </CardText>
               <CardActions border>
                   <Button colored href="#" rel="noopener noreferrer"  target="_blank">Github</Button>
                   <Button colored>Codepen</Button>
                   <Button colored>Live Demo</Button>
               </CardActions>
               <CardMenu style={{color:'#fff'}}>
                   <IconButton name='share'/>
               </CardMenu>
           </Card>
           
            {/* Project 3 */}
            <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
               <CardTitle style={{color: 'black', height: '176px', background: 'url(https://img-cdn.tnwcdn.com/image?fit=1280%2C720&url=https%3A%2F%2Fcdn0.tnwcdn.com%2Fwp-content%2Fblogs.dir%2F1%2Ffiles%2F2019%2F08%2Fmaxresdefault-1-Cropped.jpg&signature=0f3d93e52187258fb58b727e1256be97) center / cover'}}>Project 3</CardTitle>
               <CardText>
                     
               </CardText>
               <CardActions border>
                   <Button colored href="#" rel="noopener noreferrer"  target="_blank">Github</Button>
                   <Button colored>Codepen</Button>
                   <Button colored>Live Demo</Button>
               </CardActions>
               <CardMenu style={{color:'#fff'}}>
                   <IconButton name='share'/>
               </CardMenu>
           </Card>

            </div>
            )
        }

    }

    

    render() {
        return(
            <div className="category-tabs">
                <Tabs activeTab = {this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
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