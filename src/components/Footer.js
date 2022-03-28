import React from 'react'
import { Container, Grid, Icon, Segment} from 'semantic-ui-react'


const Footer = () => {
    return (
        <>
    <Container>
        
        <Grid verticalAlign='middle' columns={3} centered>
            <Grid.Row>
                <Grid.Column>
                <div class="dividerhoriz" id="footerbottom">
                 
             
                <Segment basic textAlign='center'>
                <a href="" target="_blank"><Icon name='github' size='big' color='black' /></a>
                <a href="" target="_blank"><Icon name='chrome' size='big' color='black' /></a>
                <a href="" target="_blank"><Icon name='twitter' size='big' color='black' /></a>
                
                </Segment>
                </div>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    </Container>
</>
 )
}

export default Footer;