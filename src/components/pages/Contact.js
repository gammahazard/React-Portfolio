import React, { useState } from 'react';
import { Container, Header, Divider, Segment, Image, Icon, Button, Input, Grid } from 'semantic-ui-react'
import '../../index.css';





const ContactMe = () => {
  return (

    <Container>
    <Container textAlign='center'>
        <Segment basic textAlign='center'>
            <Header color='violet' as='h1'>
                <Header.Content><Icon name='phone'/>Contact Me</Header.Content>
            </Header>
        </Segment>
    </Container>
    <form>
  <label>
 
  Name: <input type="text" name="name" /><br></br>
  E-mail: <input type="text" name="email" /><br></br>
  Message:  <input type="input" name="message" />
  </label><br></br>
  <input type="hidden" value="Submit"/>
  
</form>

    <Divider />

    <Segment basic textAlign='justified'>
        <p style={{fontSize: 20}}>
          Contact page will be updated to support submissions, for now you can contact me via e-mail at : vvstothemoon@gmail.com
        </p>

    </Segment>
</Container>

  )}
  export default ContactMe;