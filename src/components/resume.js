import React, { Component } from 'react';
import { Cell, Grid } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
    render() {
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign:"center"}}>
                            <img 
                            src="https://avatars0.githubusercontent.com/u/28875037?s=400&v=4"
                            alt="Avatar"
                            style={{height:'200px'}}
                            />
                        </div>
                        <h2 style={{paddingTop:"2em"}}>Abdul Ahad Abdussalam</h2>
                        <h4 style={{color:"grey"}}>Programmer</h4>
                        <hr style={{borderTop:"3px solid #833fb2", whidth:"50%"}} />
                        <p>
                            Learning everything, Everyday!
                        </p>
                        <hr style={{borderTop:"3px solid #833fb2", whidth:"50%"}} />
                        <h5>Adress</h5>
                        <p>Flat No.101, plot No.165, Mubarak Complex, BageMahfooz, Malegaon, Nashik 423203</p>
                        <h5>Phone</h5>
                        <p>(+91)8446192253</p>
                        <h5>Email</h5>
                        <p>abdulahadas@live.com</p>
                        <h5>Wbsite</h5>
                        <p>www.aiwithab.com</p>
                        <hr style={{borderTop:"3px solid #833fb2", whidth:"50%"}} />
                        

                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear ={2015}
                            endYear = {2016}
                            schoolName = "The Malegaon High School & Junior College"
                            schoolDescription="Higher Secondary School Certificate (HSC)"
                             />
                             
                            <Education
                            startYear ={2017}
                            endYear = {2021}
                            schoolName = "GCOEARA"
                            schoolDescription="Electronics and Telecommunication Engineering (BE)"
                             />

                            <hr style={{borderTop:"10px solid #e22947"}}/>
                            <h2>Experience</h2>
                            <Experience
                                startYear={2018}
                                endYear = {2021}
                                jobName = "Inerton Technologies"
                                jobDescription = "Co-Founder"

                            
                            />
                            
                           
                             <hr style={{borderTop:"10px solid #e22947"}}/>
                             <h2>Skills</h2>
                             <Skills
                                skill = "HTML/CSS"
                                progress = {75}
                             />
                             
                             <Skills
                                skill = "Javascript"
                                progress = {75}
                             />
                             
                             <Skills
                                skill = "Python"
                                progress = {90}
                             />
                             
                             <Skills
                                skill = "C"
                                progress = {70}
                             />
                             
                             <Skills
                                skill = "MySQL"
                                progress = {70}
                             />



                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume;