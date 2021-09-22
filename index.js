import PKG from './package.json';
import Block from './src/blockchain/block';

const { name, version, description, author } = PKG;

//console.log(`${name} ${version} ${description} ${author}`);

const { genesis } = Block;

const block1 = Block.mine(genesis, 'trasact1');
console.log(block1.toString());

const block2 = Block.mine(block1, 'trasact2');
console.log(block2.toString());

/*console.log(genesis.toString());

const block = new Block(Date.now(), genesis.hash, 'o6y', 'd4t4');
console.log(block.toString());

const block2 = new Block(Date.now(), block.hash, 'h4sh-block2', 'd4t4-2');
console.log(block2.toString());*/
