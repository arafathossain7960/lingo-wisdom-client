import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link } from 'react-router-dom';
const ProAccess = () => {
    return (
        <div>
            
            <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
       
            <Link to="/course"> <Modal.Header closeButton> </Modal.Header> </Link>
          <Modal.Title className='text-center'>Thanks for pro access</Modal.Title>
       

        <Modal.Body>
            <h3>You course will be start next month</h3>
            <p>Before start the course you can try these</p>
            <ol>
                <li>
                    Read some letters
                </li>
                <li>
                    Watch video on youtube about the language
                </li>
                <li>
                    Practice writing
                </li>
               
            </ol>
        </Modal.Body>

        <Modal.Footer>
            <Link to="/home"><Button variant="secondary">Go to home</Button></Link>
          
          
        </Modal.Footer>
      </Modal.Dialog>
    </div>
        </div>
    );
};

export default ProAccess;