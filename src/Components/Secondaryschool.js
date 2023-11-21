import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


const Secondaryschool = ()=>{

    return(
        <Form
        style={{
          width: '50%' ,
          marginLeft: 'auto',
          marginRight: 'auto' , 
          marginBottom: '20px' ,
          marginTop: '50px',
          padding: '20px',
          textAlign: 'center',
          boxShadow:
            'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
        }}
      >
        <h2>Carefully Fill in the form</h2>
  
        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
          <Form.Label>Fullname</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
  
        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Gender</Form.Label>
            <select class="custom-select" style={{width: '100%'}}>
            <option selected>Open this select menu</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Other</option>
            </select>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Persons with disability</Form.Label>
            <select class="custom-select" style={{width: '100%'}}>
            <option selected>Open this select menu</option>
            <option value="1">Yes</option>
            <option value="2">No</option>
            </select>
        </Form.Group>
        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Ward</Form.Label>
            <select class="custom-select" style={{width: '100%'}}>
            <option selected>Open this select menu</option>
            <option value="1">Masinga Central</option>
            <option value="2">Ekalakala/Ikatini ward</option>
            <option value="1">Ndithini ward</option>
            <option value="2">Kivaa ward</option>
            <option value="2">Muthesya ward</option>
            </select>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Enter your location" />
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
          <Form.Label>SubLocation</Form.Label>
          <Form.Control type="text" placeholder="Enter your sublocation" />
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
          <Form.Label>Village</Form.Label>
          <Form.Control type="text" placeholder="Enter your village" />
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
          <Form.Label>Guardiansphonenumber</Form.Label>
          <Form.Control type="text" placeholder="eg ,0723*****5" />
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
          <Form.Label>Mother's id</Form.Label>
          <Form.Control type="text" placeholder="eg ,0723*****5" />
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
          <Form.Label>Institution Name</Form.Label>
          <Form.Control type="text" placeholder=" Schoolname" />
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
          <Form.Label>Admission Number</Form.Label>
          <Form.Control type="text" placeholder=" AdmNo" />
        </Form.Group>
        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Ward</Form.Label>
            <select class="custom-select" style={{width: '100%'}}>
            <option selected>Total Orphan</option>
            <option value="1">Partial orphan</option>
            <option value="2">Both parents alive</option>
            </select>
        </Form.Group>
        
        <Form.Group className="mb-3">
          <Button type="submit" style={{ background: 'green',borderColor:'green' , width: '50%', margin: 'auto' }}>
            SubmitForm
          </Button>
        </Form.Group>
      </Form>
    
    )
}

export default Secondaryschool