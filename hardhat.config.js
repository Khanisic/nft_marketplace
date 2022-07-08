const fs = require('fs');
require('@nomiclabs/hardhat-waffle');

const privatekey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/gWfpFUrefvct5a7LThyvFfk-WFpmdx9p',
      accounts: [
        '14d0abf43d1b80d74416a2da4ae0ed9ac737abf36de70eed65c3be456893b5e3',
      ],
    },
    mumbai: {
      url: 'https://rpc-mumbai.matic.today',
      accounts: [
        '239f49522179c161102b908a24e2837ae11e27ac4300eb5b263120c9434be66f',
      ],
    },
    polygon: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/F1Ozw_3-2YvZJiFcq2U9yEGt9zc0citV',
      accounts: [
        '239f49522179c161102b908a24e2837ae11e27ac4300eb5b263120c9434be66f',
      ],
    },
    rinkeby: {
      url: 'https://rinkeby.infura.io/v3/bdee63d200894dfb8d793b37d5a53115',
      accounts: [
        '14d0abf43d1b80d74416a2da4ae0ed9ac737abf36de70eed65c3be456893b5e3',
      ],
    },
  },
  solidity: '0.8.4',
};
