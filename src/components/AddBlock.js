import React from 'react';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import "./Block.css"

const AddBlock = ({ data, onInputChange, onAddClick }) => {
    return (
        <Card style={{ width:'30rem', borderRadius:'1rem', marginTop:'4rem' }} bg="light" className="box text-center ml-auto mr-auto mb-5">
            <Card.Body>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1"><i className="far fa-file-alt"></i></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Input data here"
                        aria-label="Data"
                        aria-describedby="basic-addon1"
                        name='addBlock'
                        onChange={onInputChange}
                        value={data}
                    />
                </InputGroup>
                <Button 
                    variant="warning" 
                    className="mt-3" 
                    name='addBlock' 
                    onClick={onAddClick}
                >
                    <i className="fas fa-plus mr-2" style={{'pointerEvents':'none'}}></i>Add New Block
                </Button>
            </Card.Body>
        </Card>
    );
}

export default AddBlock;