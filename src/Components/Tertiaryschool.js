import React from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Tertiary = ()=>{
  return(
    <>
     <Form
    style={{
      width: '50%' ,
      marginLeft: 'auto',
      marginRight: 'auto' ,
      marginTop: '50px',
      padding: '20px',
      textAlign: 'center',
      boxShadow:
        'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    }}
  >
    <div style={{
      width:'100%',
      backgroundColor:'grey'
    }}>
    <h2>1.Personal Details</h2>
    </div>
  
    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }} >
      <Form.Label>Fullname</Form.Label>
      <Form.Control type="text" placeholder="Fullname" />
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

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }} >
      <Form.Label>National ID</Form.Label>
      <Form.Control type="text" placeholder="Id.no" />
    </Form.Group>

    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }} >
      <Form.Label>Your phoneNumber</Form.Label>
      <Form.Control type="text" placeholder="phonenumber" />
    </Form.Group>

    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }} >
      <Form.Label>Guardians Mobile No.</Form.Label>
      <Form.Control type="text" placeholder="phonenumber" />
    </Form.Group>

    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }} >
      <Form.Label>Mothersid.</Form.Label>
      <Form.Control type="text" placeholder="ID.No" />
    </Form.Group>


  </Form>
  {/* residence details */}
  <Form
    style={{
      width: '50%' ,
      marginLeft: 'auto',
      marginRight: 'auto' ,
      marginTop: '50px',
      padding: '20px',
      textAlign: 'center',
      boxShadow:
        'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    }}
  >
    <div style={{
      width:'100%',
      backgroundColor:'grey'
    }}>
    <h2>2.Residence</h2>
    </div>
    
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
      <Form.Control type="text" placeholder="Location" />
    </Form.Group>

    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
      <Form.Label>Sub-location</Form.Label>
      <Form.Control type="text" placeholder="sub-location" />
    </Form.Group>

    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
      <Form.Label>Village</Form.Label>
      <Form.Control type="text" placeholder="Village" />
    </Form.Group>
 
  </Form>
  {/* Institution */}
  <Form
    style={{
      width: '50%' ,
      marginLeft: 'auto',
      marginRight: 'auto' ,
      marginTop: '50px',
      padding: '20px',
      textAlign: 'center',
      boxShadow:
        'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    }}
  >
    <div style={{
      width:'100%',
      backgroundColor:'grey'
    }}>
    <h2>3.Institution</h2>
    </div>  
    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
      <Form.Label>Name of Institution</Form.Label>
      <Form.Control type="text" placeholder="Institution" />
    </Form.Group>
  
    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
      <Form.Label>AdmissionNo</Form.Label>
      <Form.Control type="text" placeholder="Admission No" />
    </Form.Group>

    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Level of Study</Form.Label>
            <select class="custom-select" style={{width: '100%'}}>
            <option selected>Open this select menu</option>
            <option value="1">Postgraduate</option>
            <option value="2">Underground</option>
            <option value="2">Diploma</option>
            <option value="2">Certificate</option>
            </select>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Mode of study</Form.Label>
            <select class="custom-select" style={{width: '100%'}}>
            <option selected>Fulltime</option>
            <option value="1">Online</option>
            <option value="2">Partime</option>
            </select>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Year of study</Form.Label>
            <select class="custom-select" style={{width: '100%'}}>
            <option selected>Open this select menu</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="2">3</option>
            <option value="2">4</option>
            <option value="2">5</option>
            <option value="2">6</option>
            <option value="2">7</option>
            </select>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Semester</Form.Label>
            <select class="custom-select" style={{width: '100%'}}>
            <option selected>Open this select menu</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="2">3</option>
            </select>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Coarse Duration</Form.Label>
            <select class="custom-select" style={{width: '100%'}}>
            <option selected>Open this select menu</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="2">3</option>
            <option value="2">4</option>
            <option value="2">5</option>
            <option value="2">6</option>
            <option value="2">7</option>
            </select>
        </Form.Group>
    

  {/* Family */}
  </Form>
  <Form
    style={{
      width: '50%' ,
      marginLeft: 'auto',
      marginRight: 'auto' ,
      marginBottom: '30px' ,
      marginTop: '50px',
      padding: '20px',
      textAlign: 'center',
      boxShadow:
        'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
    }}
  >
    <div style={{
      width:'100%',
      backgroundColor:'grey'
    }}>
    <h2>4.Family</h2>
    </div>
  
    <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Family</Form.Label>
            <select class="custom-select" style={{width: '100%'}}>
            <option selected>Open this select menu</option>
            <option value="1">Total orphan</option>
            <option value="2">Partial orphan</option>
            <option value="2">Both parents alive</option>
            </select>
        </Form.Group>

        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Father's income</Form.Label>
            <select class="custom-select" style={{width: '100%'}}>
            <option selected>Open this select menu</option>
            <option value="1">Earns more than kshs.50,000/=</option>
            <option value="2">Earns less than kshs. 50,000/=</option>
            <option value="2">No specofoc source of income</option>
            <option value="2">Not applicable</option>
            </select>
        </Form.Group>
        <Form.Group className="mb-3" style={{ width: '80%', margin: 'auto' }}>
        <Form.Label>Mothers income</Form.Label>
            <select class="custom-select" style={{width: '100%'}}>
            <option selected>Open this select menu</option>
            <option value="1">Earns more than kshs.50,000/=</option>
            <option value="2">Earns less than kshs. 50,000/=</option>
            <option value="2">No specofoc source of income</option>
            <option value="2">Not applicable</option>
            </select>
        </Form.Group>
   
  
        <Form.Group className="mb-3">
          <Button type="submit" style={{ background: 'green',borderColor:'green' , width: '50%', margin: 'auto' }}>
            SubmitForm
          </Button>
        </Form.Group>
  </Form>
    </>
   
  )
}

export default Tertiary