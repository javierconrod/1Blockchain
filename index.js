import PKG from './package.json';
import Block from './src/blockchain/block';

const { name, version, description, author } = PKG;

console.log(`${name} ${version} ${description} ${author}`);

const block = new Block(Date.now(), 'p3krk5', 'o6y', 'd4t4');
console.log(block.toString());