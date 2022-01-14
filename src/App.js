import React, { useState } from 'react';
import Flatpickr from 'react-flatpickr';
import { Modal, Button } from 'react-bootstrap';

import './style.css';

export default function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [picker, setPicker] = React.useState(new Date());
  return (
    <div>
      <h1>Hello StackBlitz!</h1>

      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        enforceFocus={false}
        tabIndex="-1"
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Flatpickr
            value={picker}
            id="range-picker"
            className="form-control"
            onChange={(date) => setPicker(date)}
            options={{
              mode: 'range',
              allowInput: true,
              defaultDate: ['2020-02-01', '2020-02-15'],
            }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
