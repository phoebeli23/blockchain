import React from 'react';
import AddBlock from './AddBlock';
import Link from './Link';
import Container from 'react-bootstrap/Container';
import Block from './Block';
import sha256 from 'crypto-js/sha256';
import Difficulty from './Difficulty'


class Blockchain extends React.Component {
    constructor() {
        super();
        this.difficulty = 2;
        this.state = {
            chain: [],
            addInput: '',
        };
    }

    componentDidMount() {
        this.setState({ chain: [this.createGenesisBlock()] });
    }

    createGenesisBlock = () => {
        const block = {
            index: '0',
            timestamp: "Mon, Jun 15 2020 09:00:00 GMT",
            data: '',
            nonce: 0,
            previousHash: '0',
            hash: '',
            prevIsValid: true,
            isValid: true,
            miningInProgress: false,
        };
        this.mineBlock(block);
        return block;
    }

    isValidBlock = (block) => {
        return block.hash.substring(0, this.difficulty) === Array(this.difficulty + 1).join("0");
    }

    calculateHash = (block) => {
        return sha256(block.index + block.previousHash + block.timestamp + block.nonce + JSON.stringify(block.data)).toString();
    }

    getDateString = () => {
        const date = new Date();
        const day = date.toDateString();
        return day.slice(0, 3) + "," + day.slice(3) + " " + date.toTimeString().slice(0, 12);
    }

    getLatestBlock = () => {
        const { chain } = this.state;
        return chain[chain.length - 1];
    }

    createNewBlock = () => {
        const lastBlock = this.getLatestBlock();
        const block = {
            index: this.state.chain.length,
            timestamp: this.getDateString(),
            data: this.state.addInput,
            nonce: 0,
            previousHash: lastBlock.hash,
            hash: '',
            prevIsValid: lastBlock.isValid,
            isValid: false,
            miningInProgress: false,
        };
        this.mineBlock(block);
        return block;
    }

    onInputChange = (e) => {
        if (e.target.name === "addBlock") {
            this.setState({
                addInput: e.target.value
            });
        } else {
            let chain = this.state.chain.slice();
            const i = Number(e.target.name);
            const block = chain[i];

            block.data = e.target.value;
            block.hash = this.calculateHash(block);
            block.isValid = this.isValidBlock(block);

            this.setState({
                chain: this.updateChain(chain, i + 1, block.isValid)
            });
        }
    }

    updateChain = (chain, start, prevIsValid) => {
        let block;
        for (let i = start; i < chain.length; i++) {
            block = chain[i];
            if (i > 0) {
                block.previousHash = chain[i - 1].hash;
            }
            block.hash = this.calculateHash(block);
            block.prevIsValid = prevIsValid;
            prevIsValid = this.isValidBlock(block);
            block.isValid = prevIsValid;
        }
        return chain;
    }

    difficultyChange = (difficulty) => {
        console.log(difficulty)
        this.difficulty = Number(difficulty);
        this.setState({
            chain: this.updateChain(this.state.chain.slice(), 0, true)
        });
    }

    onMineClick = (e) => {
        const chain = this.state.chain.slice();
        let i = Number(e.target.name);
        let block = chain[i];


        if (this.difficulty < 4) { //no loading visual necessary
            this.mineBlock(block);
            this.setState({
                chain: this.updateChain(chain, i + 1, true)
            });
        } else {
            block.miningInProgress = true;
            
            this.setState({ chain: chain }, async () => {
                await this.sleep(10);   //loading state only shows if sleep is called
                this.mineBlock(block)
                block.miningInProgress = false;
                this.setState({
                    chain: this.updateChain(chain, i + 1, true)
                });
            });
        }
    }

    sleep = (milliseconds) => {
        return new Promise((resolve) => setTimeout(resolve, milliseconds));
    };

    mineBlock = (block) => {
        block.nonce = 0;
        block.hash = this.calculateHash(block);

        while (!this.isValidBlock(block)) {
            if (block.index > 0) {
                block.timestamp = this.getDateString();
            }
            block.nonce++;
            block.hash = this.calculateHash(block);
        }
        block.isValid = true;
        return block;
    }


    onAddClick = () => {
        this.setState({
            chain: this.state.chain.concat(this.createNewBlock()),
            addInput: '',
        });
    }

    render() {
        const chain = [];
        for (const block of this.state.chain) {
            chain.push(
                <Block
                    index={block.index}
                    timestamp={block.timestamp}
                    data={block.data}
                    nonce={block.nonce}
                    hash={block.hash}
                    previousHash={block.previousHash}
                    prevIsValid={block.prevIsValid}
                    isValid={block.isValid}
                    onInputChange={this.onInputChange}
                    onMineClick={this.onMineClick}
                    key={block.index}
                    miningInProgress={block.miningInProgress}
                />
            )
            if (block.index < this.state.chain.length - 1)
                chain.push(<Link key={-(block.index + 1)} />);
        }
        console.log(this.state.chain[0] && this.state.chain[0].miningInProgress);

        return (
            <Container fluid className="d-flex flex-column justify-content-center">
                <Difficulty onChange={this.difficultyChange} />
                {chain}
                <AddBlock
                    className="align-self-center"
                    onInputChange={this.onInputChange}
                    onAddClick={this.onAddClick}
                    data={this.state.addInput}
                />
            </Container>
        );
    }

}

export default Blockchain;