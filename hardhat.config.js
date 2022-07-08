const fs = require('fs');
require('@nomiclabs/hardhat-waffle');

const privatekey = fs.readFileSync('.secret').toString().trim();

module.exports = {
  networks: {
    hardhat: {
      chainId: 1337,
    },
    goerli: {
      url: 'https://eth-goerli.alchemyapi.io/v2/K3DwgmshssseWk2R_0XDYSQay5xHAphT',
      accounts: [
        '239f49522179c161102b908a24e2837ae11e27ac4300eb5b263120c9434be66f',
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
  },
  solidity: '0.8.4',
};
