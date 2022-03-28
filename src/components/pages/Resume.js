import React from 'react';
import { Image, Segment, Container, Header, Icon, HeaderContent } from 'semantic-ui-react'
import '../../index.css';

const Resume = () => {
 return (
 <>
<Container textAlign='center'>
    <Segment basic textAlign='center'>
        <Header color='violet' as='h1'>
        <Header.Content><Icon name='computer'/>My Resume</Header.Content>
        </Header>
    </Segment>
</Container>

<Segment style={{fontSize: 20}} basic textAlign='center'>
<p>My Resume will be added here once updated, currently I only have resumes tailored towards education</p>

</Segment>








 </>
 )
}


export default Resume;
