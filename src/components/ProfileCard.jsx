import React from 'react'
import { Button, Card } from 'react-bootstrap'

const ProfileCard = ({data}) => {
    return (
        <div style={{marginTop:"30px", marginLeft:"40%"}}>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.imgSrc} />
                <Card.Body>
                    <Card.Title>{data.fullName}</Card.Title>
                    <Card.Title>{data.profession}</Card.Title>
                    <Card.Text>
                        {data.bio}
                    </Card.Text>
                    <Button variant="primary">Contact me</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default ProfileCard