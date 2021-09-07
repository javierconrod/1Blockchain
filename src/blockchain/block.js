class Block {
    constructor(timeStamp, previousHash, hash, data){
        this.timeStamp = timeStamp;
        this.previousHash = previousHash;
        this.hash = hash;
        this.data = data;
    }
    toString(){
        const{
            timeStamp, previousHash, hash, data,
    } = this;
    return `Block -
    timeStamp   : ${timeStamp}
    previousHas : ${previousHash}
    hash        : ${hash}
    data        : ${data}
    `;
    }
}
export default Block;