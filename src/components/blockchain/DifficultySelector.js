import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Tooltip from 'react-bootstrap/Tooltip';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

const diff = (props) => {
    return (
        <Tooltip id="tooltip" {...props}>
            The difficulty value indicates the number of preceding 0's a hash must have to be valid. The greater the number, the longer the computer will take to find the hash, or in other words, mine the block.
        </Tooltip>
    );
}

class DifficultySelector extends Component {
    constructor(props) {
        super(props);
        this.input = React.createRef(); 
    }

    render() { 
        return (
            <Container className="d-flex flex-column justify-content-center mb-4">
                <Form className="difficulty-form text-center">
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Select
                            <OverlayTrigger
                                placement="top"
                                delay={{ show: 150, hide: 300 }}
                                overlay={diff}
                            >
                                <span className="text-info"><strong> difficulty</strong></span>
                            </OverlayTrigger>
                        </Form.Label>
                        <Form.Control 
                            as="select" 
                            defaultValue="2"
                            ref={this.input} 
                            onChange={() => this.props.onChange(this.input.current.value)}
                        >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
                <p className="small"></p>
            </Container>
        );
    }
}
 
export default DifficultySelector;
