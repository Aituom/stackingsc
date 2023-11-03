require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-verify");

require("dotenv").config();



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
    },
    sepolia: {
      url: "https://sepolia.infura.io/v3/2f26b382a40946168173375438ca3010",
      accounts: ['34e71a4054f77f70d544516295af9f379e730862a89f83d51cd469c7be86a2c2']
    },
  },
  etherscan: {

    apiKey: 'HQD26D3BW4CUD4W8BXUZ357UG7N61378G4'
  },
};
