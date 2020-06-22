import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import './Block.css';

const BlockchainInfo = () => {
    return (
        <Container fluid className="blockchain-info">
          <Accordion defaultActiveKey="0">
              <Card className="border-custom text-center box" style={{borderRadius:'1.5rem'}}>
                <Card.Header>
                  <Accordion.Toggle as={Button} variant="link" eventKey="1" className="no-border">
                    <p className="text-dark no-border">Bonus: Why should you care about blockchain?</p>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body className="bg-custom">
                    <p className="text-secondary blockchain-info-text">Blockchain is a way of storing data without the need for a centralized 3rd party
                      as it is highly-resistant to tampering. As you are able to see in the demo, changing the data of a block renders the hash of it and
                      all subsequent blocks invalid. In order to restore the validity of the chain, you must recompute the hash, or remine, all the invalid
                      blocks. The time it takes to mine a single block increases drastically with the difficulty setting. This security is seen with Bitcoin, the most
                      popular cryptocurrency today and a prominent user of blockchain technology. As of June 2020, the mining of a single block rewards 6.25 bitcoins
                      and takes a $2000 consumer mining machine 24 hours to mine less than 0.001 bitcoins. In addition to added security and lack of a 3rd party authority,
                      cryptocurrencies offer lower transaction fees, easier international trade, and other benefits. Other industres that are also using blockchain include the
                      food industry, where IBM & Walmart are using the technology to improve food safety by tracking the origins of foods. The voting system can benefit from blockchain
                      by preventing online voter fraud. In essense, blockchain effectively stores & verifies information and many implementations are cropping up in various modern industries.
                    </p>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
        </Container>
    );
}
 
export default BlockchainInfo;