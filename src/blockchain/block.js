class Block {
    constructor(timeStamp, previousHash, hash, data){
        this.timeStamp = timeStamp;
        this.previousHash = previousHash;
        this.hash = hash;
        this.data = data;
    }

    static get genesis(){
        const timeStamp = (new Date(2019, 0, 1)).getTime();
        return new this(timeStamp, undefined, 'g3n3sis-h4sh', 'g3n3s1s-d4t4');
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