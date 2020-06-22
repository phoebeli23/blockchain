import React from 'react';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner'
import './Block.css';

const Block = ({ index, timestamp, data, nonce, previousHash, hash, prevIsValid, isValid, onInputChange, onMineClick, miningInProgress }) => {
    return (
        <Card key={miningInProgress} style={{ width: '46rem', borderRadius: '1rem' }} className="box ml-auto mr-auto">
            <Card.Body>
                <Card.Title>
                    <strong>{index === '0' ? 'Genesis Block' : 'Block #' + index}</strong>
                    <small className="ml-2 text-muted timestamp">generated on {timestamp}</small>
                </Card.Title>
                <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                        <InputGroup.Text id="basic-addon1"><i className="far fa-file-alt"></i></InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                        placeholder="Input data here"
                        aria-label="Data"
                        aria-describedby="basic-addon1"
                        name={index}
                        onChange={onInputChange}
                        value={data}
                    />
                </InputGroup>

                <small className="mr-2">NONCE</small><p className="d-inline text-secondary">{nonce}</p>
                <br />
                <small className={"mr-2"}>PREV HASH</small><p className={"d-inline " + (prevIsValid ? "text-success" : "text-danger")}>{previousHash}</p>
                <br />
                <small className="mr-2">HASH</small><p className={"d-inline " + (isValid ? "text-success" : "text-danger")}>{hash}</p>

                <Button
                    variant="info"
                    className="mt-3"
                    name={index}
                    onClick={onMineClick}
                >
                    Mine Block
                    {miningInProgress ?
                        <Spinner
                            as="span"
                            animation="border"
                            size="sm"
                            role="status"
                            aria-hidden="true"
                            className="ml-2 mb-1"
                        />
                        :
                        <i className="fas fa-hammer ml-2" style={{ 'pointerEvents': 'none' }}></i>
                    }
                </Button>

            </Card.Body>
        </Card>
    );
}

export default Block;