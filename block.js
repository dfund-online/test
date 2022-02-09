const Web3 = require('web3')

const url = 'http://127.0.0.1:8545'








async function main() {
  let web3 = new Web3(url)
  web3.eth.extend({methods:[{
    name: 'deleteBlockByNumber',
    call: 'eth_deleteBlockByNumber',
    params: 1,
    inputFormatter: [web3.extend.formatters.inputBlockNumberFormatter]
  }]})
  console.log("current block number:", await web3.eth.getBlockNumber())

  for(let i=1000000; i<4000000; i++){
    console.log("i:", i)
    await web3.eth.deleteBlockByNumber(i)
  }
  //await web3.debug.chaindbCompact()
}


main()