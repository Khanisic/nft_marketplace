const fs = require('fs');
require('@nomiclabs/hardhat-waffle');


module.exports = {
  networks: {
    mumbai: {
      url: 'https://polygon-mumbai.g.alchemy.com/v2/zLhYp7RnZ6kCS9fRjcmjPrrx8z7dNemq',
      accounts: [
        '3a33b05e6a17c79b66ca9d7f3d5511c5708d2150866278f16918f20fcbbf8ed6',
      ],
    },
  },
  solidity: '0.8.4',
};
