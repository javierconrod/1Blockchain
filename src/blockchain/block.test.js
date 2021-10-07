import { exportAllDeclaration, isTaggedTemplateExpression } from 'babel-plugin-jest-hoist/node_modules/@babel/types';
import Block from './block';

describe('Block', () => {
    let timeStamp;
    let previousBlock;
    let data;
    let hash;

    beforeEach(() => {
        timeStamp = new Date(2010, 0, 1);
        previousBlock = Block.genesis;
        data = "transaction0";
        hash= 'hash0';
    });

    it('Crear una instancia con parametros', () => {
        const block = new Block(timeStamp, previousBlock.hash, hash, data);
        expect(block.timeStamp).toEqual(timeStamp);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(block.data).toEqual(data);
        expect(block.hash).toEqual(hash);

    })

    it('Usando static mine', () =>{
        const block = Block.mine(previousBlock, data);

        expect(block.hash.length).toEqual(64);
        expect(block.previousHash).toEqual(previousBlock.hash);
        expect(data).toEqual(data);

    });

    it('Usando static hash', () =>{
        hash = Block.hash(timeStamp, previousBlock.hash, data);

        const hasOutput = "04f25778ff6b91ae17419fe21f91bccb1926190b9ae27008bcf6e428fd420655";

        expect(hash).toEqual(hasOutput);
    });

    it("Usando tostring", () => {
        const block = Block.mine(previousBlock, data);
        expect(typeof block.toString()).toEqual('string');
    });

});