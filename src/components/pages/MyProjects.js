import React from 'react';
import { Card, Icon, Button, Container, Header, Segment } from 'semantic-ui-react'



const MyApps = [
    {
        image: '/Images/HiveMind.png',
        title: 'HiveMind',
        description: 'A mental health community application to connect mental health advocates in a place where they can share tips and get daily inspiration to remain mindful of their own mental health.',
        link: 'https://hivemind-442.herokuapp.com/'
    },
    {
        image: '/Images/marvel-search-engine.png',
        title: 'Marvel Search Engine',
        description: 'This application assists avid daters to save time in planning successful dates. Once a random activity is chosen, the user is presented with a search engine connected to an API relevant to the activity they can use to search for a specific date acitivty and save in to their "upcoming dates" list.',
        link: 'https://sevaggap.github.io/UofT-SCS-Coding-Bootcamp-Project-1-Interactive-Front-End-Application/',
     
    },
    {
        image: '/Images/tech-blog.png',
        title: 'Tech Blog',
        description: "A tech-blog with a front and back end where users can discuss about tech!",
        link: 'https://techblogmvc1221.herokuapp.com/'
    },
    {
        image: '/Images/read-me-generator.png',
        title: 'ReadMe Generator',
        description: 'A Read-me generator to generate a readme.md for any type of project!',
        link: 'https://github.com/gammahazard/Generate-A-Readme'
    },
    {
        image: '/Images/employee-tracker.png',
        title: 'Employee Tracker',
        description: 'A CLI application to organize, update, and navigate employee and department data of a company. Designed to be clear and intuitive with Node.js, Inquirer, and MySQL.',
        link: 'https://github.com/gammahazard/EmployeeManager'
    },
    {
        image: '/Images/social-network-api.png',
        title: 'Social Network API',
        description: 'A social network api that utilizes MongooseDB to provide the user with functional and modularized routes that allow for full CRUD operations for new users, thoughts, reactions and the ability to add and remove friends from their personal networks.',
        link: 'https://github.com/gammahazard/Social-Networking-API'
    },
]

const extra = (link) => (
    <a href={link} target="_blank">
       <Button basic attached='bottom' color='black' content='View this Project'/>
    </a>  
  )

const MyProjects = () => {
 return (
    <Container>
        <Segment basic textAlign='center'>
            <Header color='violet' as='h1'>
                <Header.Content><Icon name='clipboard'/>My Projects</Header.Content>
            </Header>
        </Segment>
     <>
     <div id="projectsofmine">
        {MyApps.map((project, i) => (
            <Card fluid
            key={i}
            image={process.env.PUBLIC_URL+`${project.image}`}
            header={project.title}
            description={project.description}
            extra={extra(project.link)}
            
        />
        
        ))}
         </div>
     </>
   
     </Container>
 )
}

export default MyProjects;