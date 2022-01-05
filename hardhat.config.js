
const { alchemyApiKey, mnemonic } = require('./secrets.json');

require("@nomiclabs/hardhat-ethers");
require('@openzeppelin/hardhat-upgrades');

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    version: "0.7.3",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1
      }
    }
  },
  networks: {
    rinkeby: {
      url: `https://eth-rinkeby.alchemyapi.io/v2/${alchemyApiKey}`,
      accounts: {mnemonic: mnemonic}
    }
  }
};