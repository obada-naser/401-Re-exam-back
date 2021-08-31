const axios = require('axios');


function Cryptos(req,res){

    const url='https://crypto-explorer.herokuapp.com/crypto-list/';

    axios.get(url).then(item=>{
        let newCrypto=item.data.map(element=>{
            return new Crypto(element);

        })
        res.send(newCrypto);
    })
}


class Crypto{
    constructor(element){
        this.title=element.title,
        this.description=element.description,
        this.toUSD=element.toUSD,
        this.image_url=element.image_url

    }
}

module.exports=Cryptos;



