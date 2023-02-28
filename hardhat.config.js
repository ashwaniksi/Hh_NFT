require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("solidity-coverage")
require("hardhat-deploy")
// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

const COINMARKETCAP_API_KEY = process.env.COINMARKETCAP_API_KEY || ""
const GOERLI_RPC_URL =
    process.env.GOERLI_RPC_URL || "https://eth-goerli.alchemyapi.io/v2/your-api-key"
const PRIVATE_KEY = process.env.PRIVATE_KEY || ""
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY || ""

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            // gasPrice: 130000000000,
        },
        goerli: {
            url: GOERLI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 5,
            blockConfirmations: 6,
        },
        mainnet: {
            url: process.env.MAINNET_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 1,
            blockConfirmations: 6,
        },
    },
    solidity: {
        compilers: [
            {
                version: "0.8.8",
            },
            {
                version: "0.6.6",
            },
        ],
    },
    etherscan: {
        apiKey: ETHERSCAN_API_KEY,
    },
    gasReporter: {
        enabled: true,
        currency: "USD",
        outputFile: "gas-report.txt",
        noColors: true,
        coinmarketcap: COINMARKETCAP_API_KEY,
    },
    namedAccounts: {
        deployer: {
            default: 0, // here this will by default take the first account as deployer
            1: 0, // similarly on mainnet it will take the first account as deployer. Note though that depending on how hardhat network are configured, the account 0 on one network can be different than on another
        },
    },
    mocha: {
        timeout: 200000, // 200 seconds max for running tests
    },
}
/*
hh deploy --network goerli
Nothing to compile
----------------------------------------------------
reusing "BasicNft" at 0xA7698b8E74c65F094668493B3eF317877e155C66
Verifying...
Verifying contract...
Nothing to compile
Warning: Unused function parameter. Remove or comment out the variable name to silence this warning.
  --> contracts/BasicNft.sol:20:23:
   |
20 |     function tokenURI(uint256 tokenId) public view override returns (string memory) {
   |                       ^^^^^^^^^^^^^^^


Warning: Function state mutability can be restricted to pure
  --> contracts/BasicNft.sol:20:5:
   |
20 |     function tokenURI(uint256 tokenId) public view override returns (string memory) {
   |     ^ (Relevant source part starts here and spans across multiple lines).


Successfully submitted source code for contract
contracts/BasicNft.sol:BasicNft at 0xA7698b8E74c65F094668493B3eF317877e155C66
for verification on the block explorer. Waiting for verification result...

Already verified!
----------------------------------------------------
deploying "DynamicSvgNft" (tx: 0xef764c3e742477a07542042116051d89e335c8510e49f0e4c0e735bd39839173)...: deployed at 0xa652c20B3BBA6d8c21a4B3C269EBd71f2677bFCA with 4585544 gas
Verifying...
Verifying contract...
Warning: Unused function parameter. Remove or comment out the variable name to silence this warning.
   --> @chainlink/contracts/src/v0.8/mocks/VRFCoordinatorV2Mock.sol:306:45:
    |
306 |   function requestSubscriptionOwnerTransfer(uint64 _subId, address _newOwner) external pure override {
    |                                             ^^^^^^^^^^^^^


Warning: Unused function parameter. Remove or comment out the variable name to silence this warning.
   --> @chainlink/contracts/src/v0.8/mocks/VRFCoordinatorV2Mock.sol:306:60:
    |
306 |   function requestSubscriptionOwnerTransfer(uint64 _subId, address _newOwner) external pure override {
    |                                                            ^^^^^^^^^^^^^^^^^


Warning: Unused function parameter. Remove or comment out the variable name to silence this warning.
   --> @chainlink/contracts/src/v0.8/mocks/VRFCoordinatorV2Mock.sol:310:44:
    |
310 |   function acceptSubscriptionOwnerTransfer(uint64 _subId) external pure override {
    |                                            ^^^^^^^^^^^^^


Warning: Unused function parameter. Remove or comment out the variable name to silence this warning.
   --> @chainlink/contracts/src/v0.8/mocks/VRFCoordinatorV2Mock.sol:314:33:
    |
314 |   function pendingRequestExists(uint64 subId) public view override returns (bool) {
    |                                 ^^^^^^^^^^^^


Warning: Unused function parameter. Remove or comment out the variable name to silence this warning.
  --> contracts/BasicNft.sol:20:23:
   |
20 |     function tokenURI(uint256 tokenId) public view override returns (string memory) {
   |                       ^^^^^^^^^^^^^^^


Warning: Function state mutability can be restricted to pure
   --> @chainlink/contracts/src/v0.8/mocks/VRFCoordinatorV2Mock.sol:261:3:
    |
261 |   function getConfig()
    |   ^ (Relevant source part starts here and spans across multiple lines).


Warning: Function state mutability can be restricted to pure
   --> @chainlink/contracts/src/v0.8/mocks/VRFCoordinatorV2Mock.sol:274:3:
    |
274 |   function getFeeConfig()
    |   ^ (Relevant source part starts here and spans across multiple lines).


Warning: Function state mutability can be restricted to pure
   --> @chainlink/contracts/src/v0.8/mocks/VRFCoordinatorV2Mock.sol:302:3:
    |
302 |   function getFallbackWeiPerUnitLink() external view returns (int256) {
    |   ^ (Relevant source part starts here and spans across multiple lines).


Warning: Function state mutability can be restricted to pure
   --> @chainlink/contracts/src/v0.8/mocks/VRFCoordinatorV2Mock.sol:314:3:
    |
314 |   function pendingRequestExists(uint64 subId) public view override returns (bool) {
    |   ^ (Relevant source part starts here and spans across multiple lines).


Warning: Function state mutability can be restricted to pure
  --> contracts/BasicNft.sol:20:5:
   |
20 |     function tokenURI(uint256 tokenId) public view override returns (string memory) {
   |     ^ (Relevant source part starts here and spans across multiple lines).


Compiled 24 Solidity files successfully
Successfully submitted source code for contract
contracts/DynamicSvgNft.sol:DynamicSvgNft at 0xa652c20B3BBA6d8c21a4B3C269EBd71f2677bFCA
for verification on the block explorer. Waiting for verification result...

Successfully verified contract DynamicSvgNft on Etherscan.
https://goerli.etherscan.io/address/0xa652c20B3BBA6d8c21a4B3C269EBd71f2677bFCA#code
Uploading to IPFS
Uploading pug...
Uploading shiba-inu...
Uploading st-bernard...
Token URIs uploaded! They are:
[
  'ipfs://QmaVkBn2tKmjbhphU7eyztbvSQU5EXDdqRyXZtRhSGgJGo',
  'ipfs://QmYQC5aGZu2PTH8XzbJrbDnvhj3gVs7ya33H9mqUNvST3d',
  'ipfs://QmZYmH5iDbD6v3U2ixoVAjioSzvWJszDzYdbeCLquGSpVm'
]
----------------------------------------------------
deploying "RandomIpfsNft" (tx: 0x201637fec7b998d5592f29704f42740a916d466d3646452b2da543c9744e35fc)...: deployed at 0x7aD19A0806c13874A15ee237b4926FE10825d4d6 with 3577419 gas
Verifying...
Verifying contract...
Nothing to compile
Successfully submitted source code for contract
contracts/RandomIpfsNft.sol:RandomIpfsNft at 0x7aD19A0806c13874A15ee237b4926FE10825d4d6
for verification on the block explorer. Waiting for verification result...

Successfully verified contract RandomIpfsNft on Etherscan.
https://goerli.etherscan.io/address/0x7aD19A0806c13874A15ee237b4926FE10825d4d6#code
Basic NFT index 0 tokenURI: ipfs://bafybeig37ioir76s7mg5oobetncojcm3c3hxasyd4rvid4jqhy4gkaheg4/?filename=0-PUG.json
Dynamic SVG NFT index 0 tokenURI: data:application/json;base64,eyJuYW1lIjoiRHluYW1pYyBTVkcgTkZUIiwgImRlc2NyaXB0aW9uIjoiQW4gTkZUIHRoYXQgY2hhbmdlcyBiYXNlZCBvbiB0aGUgQ2hhaW5saW5rIEZlZWQiLCAiYXR0cmlidXRlcyI6IFt7InRyYWl0X3R5cGUiOiAiY29vbG5lc3MiLCAidmFsdWUiOiAxMDB9XSwgImltYWdlIjoiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJ6ZEdGdVpHRnNiMjVsUFNKdWJ5SS9QZ284YzNabklIZHBaSFJvUFNJeE1ESTBjSGdpSUdobGFXZG9kRDBpTVRBeU5IQjRJaUIyYVdWM1FtOTRQU0l3SURBZ01UQXlOQ0F4TURJMElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaVBnb2dJRHh3WVhSb0lHWnBiR3c5SWlNek16TWlJR1E5SWswMU1USWdOalJETWpZMExqWWdOalFnTmpRZ01qWTBMallnTmpRZ05URXljekl3TUM0MklEUTBPQ0EwTkRnZ05EUTRJRFEwT0MweU1EQXVOaUEwTkRndE5EUTRVemMxT1M0MElEWTBJRFV4TWlBMk5IcHRNQ0E0TWpCakxUSXdOUzQwSURBdE16Y3lMVEUyTmk0MkxUTTNNaTB6TnpKek1UWTJMall0TXpjeUlETTNNaTB6TnpJZ016Y3lJREUyTmk0MklETTNNaUF6TnpJdE1UWTJMallnTXpjeUxUTTNNaUF6TnpKNklpOCtDaUFnUEhCaGRHZ2dabWxzYkQwaUkwVTJSVFpGTmlJZ1pEMGlUVFV4TWlBeE5EQmpMVEl3TlM0MElEQXRNemN5SURFMk5pNDJMVE0zTWlBek56SnpNVFkyTGpZZ016Y3lJRE0zTWlBek56SWdNemN5TFRFMk5pNDJJRE0zTWkwek56SXRNVFkyTGpZdE16Y3lMVE0zTWkwek56SjZUVEk0T0NBME1qRmhORGd1TURFZ05EZ3VNREVnTUNBd0lERWdPVFlnTUNBME9DNHdNU0EwT0M0d01TQXdJREFnTVMwNU5pQXdlbTB6TnpZZ01qY3lhQzAwT0M0eFl5MDBMaklnTUMwM0xqZ3RNeTR5TFRndU1TMDNMalJETmpBMElEWXpOaTR4SURVMk1pNDFJRFU1TnlBMU1USWdOVGszY3kwNU1pNHhJRE01TGpFdE9UVXVPQ0E0T0M0Mll5MHVNeUEwTGpJdE15NDVJRGN1TkMwNExqRWdOeTQwU0RNMk1HRTRJRGdnTUNBd0lERXRPQzA0TGpSak5DNDBMVGcwTGpNZ056UXVOUzB4TlRFdU5pQXhOakF0TVRVeExqWnpNVFUxTGpZZ05qY3VNeUF4TmpBZ01UVXhMalpoT0NBNElEQWdNQ0F4TFRnZ09DNDBlbTB5TkMweU1qUmhORGd1TURFZ05EZ3VNREVnTUNBd0lERWdNQzA1TmlBME9DNHdNU0EwT0M0d01TQXdJREFnTVNBd0lEazJlaUl2UGdvZ0lEeHdZWFJvSUdacGJHdzlJaU16TXpNaUlHUTlJazB5T0RnZ05ESXhZVFE0SURRNElEQWdNU0F3SURrMklEQWdORGdnTkRnZ01DQXhJREF0T1RZZ01IcHRNakkwSURFeE1tTXRPRFV1TlNBd0xURTFOUzQySURZM0xqTXRNVFl3SURFMU1TNDJZVGdnT0NBd0lEQWdNQ0E0SURndU5HZzBPQzR4WXpRdU1pQXdJRGN1T0MwekxqSWdPQzR4TFRjdU5DQXpMamN0TkRrdU5TQTBOUzR6TFRnNExqWWdPVFV1T0MwNE9DNDJjemt5SURNNUxqRWdPVFV1T0NBNE9DNDJZeTR6SURRdU1pQXpMamtnTnk0MElEZ3VNU0EzTGpSSU5qWTBZVGdnT0NBd0lEQWdNQ0E0TFRndU5FTTJOamN1TmlBMk1EQXVNeUExT1RjdU5TQTFNek1nTlRFeUlEVXpNM3B0TVRJNExURXhNbUUwT0NBME9DQXdJREVnTUNBNU5pQXdJRFE0SURRNElEQWdNU0F3TFRrMklEQjZJaTgrQ2p3dmMzWm5QZ289In0=
An unexpected error occurred:

Error: ERROR processing /home/ashwani/hh-Javascript/hardhat-nft-fcc-main/deploy/04-mint.js:
Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ] (reason="execution reverted", method="estimateGas", transaction={"from":"0x2c93f37B6d856FE33FdC9268D3958f430661398A","to":"0x7aD19A0806c13874A15ee237b4926FE10825d4d6","value":{"type":"BigNumber","hex":"0x2386f26fc10000"},"data":"0xaa152491","accessList":null}, error={"name":"ProviderError","_stack":"ProviderError: HttpProviderError\n    at HttpProvider.request (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/hardhat/src/internal/core/providers/http.ts:83:19)\n    at LocalAccountsProvider.request (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/hardhat/src/internal/core/providers/accounts.ts:187:34)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)\n    at EthersProviderWrapper.send (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/@nomiclabs/hardhat-ethers/src/internal/ethers-provider-wrapper.ts:13:20)","code":3,"_isProviderError":true,"data":"0xf0019fe600000000000000000000000000000000000000000000000000000000000026b00000000000000000000000007ad19a0806c13874a15ee237b4926fe10825d4d6"}, code=UNPREDICTABLE_GAS_LIMIT, version=providers/5.7.1)
    at Logger.makeError (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
    at Logger.throwError (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
    at checkError (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:78:20)
    at EthersProviderWrapper.<anonymous> (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:642:20)
    at step (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:48:23)
    at Object.throw (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:29:53)
    at rejected (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:21:65)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at DeploymentsManager.executeDeployScripts (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/hardhat-deploy/src/DeploymentsManager.ts:1223:19)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at DeploymentsManager.runDeploy (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/hardhat-deploy/src/DeploymentsManager.ts:1053:5)
    at SimpleTaskDefinition.action (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/hardhat-deploy/src/index.ts:422:5)
    at Environment._runTaskDefinition (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/hardhat/src/internal/core/runtime-environment.ts:311:14)
    at Environment.run (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/hardhat/src/internal/core/runtime-environment.ts:159:14)
    at SimpleTaskDefinition.action (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/hardhat-deploy/src/index.ts:568:32)
    at Environment._runTaskDefinition (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/hardhat/src/internal/core/runtime-environment.ts:311:14)
    at Environment.run (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/hardhat/src/internal/core/runtime-environment.ts:159:14)
    at SimpleTaskDefinition.action (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/hardhat-deploy/src/index.ts:653:5)
ashwani@ashwaniKSI:~/hh-Javascript/hardhat-nft-fcc-main$ 
ashwani@ashwaniKSI:~/hh-Javascript/hardhat-nft-fcc-main$ hh deploy --tags mint --network goerli
Warning: Unused function parameter. Remove or comment out the variable name to silence this warning.
   --> @chainlink/contracts/src/v0.8/mocks/VRFCoordinatorV2Mock.sol:306:45:
    |
306 |   function requestSubscriptionOwnerTransfer(uint64 _subId, address _newOwner) external pure override {
    |                                             ^^^^^^^^^^^^^


Warning: Unused function parameter. Remove or comment out the variable name to silence this warning.
   --> @chainlink/contracts/src/v0.8/mocks/VRFCoordinatorV2Mock.sol:306:60:
    |
306 |   function requestSubscriptionOwnerTransfer(uint64 _subId, address _newOwner) external pure override {
    |                                                            ^^^^^^^^^^^^^^^^^


Warning: Unused function parameter. Remove or comment out the variable name to silence this warning.
   --> @chainlink/contracts/src/v0.8/mocks/VRFCoordinatorV2Mock.sol:310:44:
    |
310 |   function acceptSubscriptionOwnerTransfer(uint64 _subId) external pure override {
    |                                            ^^^^^^^^^^^^^


Warning: Unused function parameter. Remove or comment out the variable name to silence this warning.
   --> @chainlink/contracts/src/v0.8/mocks/VRFCoordinatorV2Mock.sol:314:33:
    |
314 |   function pendingRequestExists(uint64 subId) public view override returns (bool) {
    |                                 ^^^^^^^^^^^^


Warning: Unused function parameter. Remove or comment out the variable name to silence this warning.
  --> contracts/BasicNft.sol:20:23:
   |
20 |     function tokenURI(uint256 tokenId) public view override returns (string memory) {
   |                       ^^^^^^^^^^^^^^^


Warning: Function state mutability can be restricted to pure
   --> @chainlink/contracts/src/v0.8/mocks/VRFCoordinatorV2Mock.sol:261:3:
    |
261 |   function getConfig()
    |   ^ (Relevant source part starts here and spans across multiple lines).


Warning: Function state mutability can be restricted to pure
   --> @chainlink/contracts/src/v0.8/mocks/VRFCoordinatorV2Mock.sol:274:3:
    |
274 |   function getFeeConfig()
    |   ^ (Relevant source part starts here and spans across multiple lines).


Warning: Function state mutability can be restricted to pure
   --> @chainlink/contracts/src/v0.8/mocks/VRFCoordinatorV2Mock.sol:302:3:
    |
302 |   function getFallbackWeiPerUnitLink() external view returns (int256) {
    |   ^ (Relevant source part starts here and spans across multiple lines).


Warning: Function state mutability can be restricted to pure
   --> @chainlink/contracts/src/v0.8/mocks/VRFCoordinatorV2Mock.sol:314:3:
    |
314 |   function pendingRequestExists(uint64 subId) public view override returns (bool) {
    |   ^ (Relevant source part starts here and spans across multiple lines).


Warning: Function state mutability can be restricted to pure
  --> contracts/BasicNft.sol:20:5:
   |
20 |     function tokenURI(uint256 tokenId) public view override returns (string memory) {
   |     ^ (Relevant source part starts here and spans across multiple lines).


Compiled 24 Solidity files successfully
Basic NFT index 0 tokenURI: ipfs://bafybeig37ioir76s7mg5oobetncojcm3c3hxasyd4rvid4jqhy4gkaheg4/?filename=0-PUG.json
Dynamic SVG NFT index 0 tokenURI: data:application/json;base64,eyJuYW1lIjoiRHluYW1pYyBTVkcgTkZUIiwgImRlc2NyaXB0aW9uIjoiQW4gTkZUIHRoYXQgY2hhbmdlcyBiYXNlZCBvbiB0aGUgQ2hhaW5saW5rIEZlZWQiLCAiYXR0cmlidXRlcyI6IFt7InRyYWl0X3R5cGUiOiAiY29vbG5lc3MiLCAidmFsdWUiOiAxMDB9XSwgImltYWdlIjoiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJ6ZEdGdVpHRnNiMjVsUFNKdWJ5SS9QZ284YzNabklIZHBaSFJvUFNJeE1ESTBjSGdpSUdobGFXZG9kRDBpTVRBeU5IQjRJaUIyYVdWM1FtOTRQU0l3SURBZ01UQXlOQ0F4TURJMElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaVBnb2dJRHh3WVhSb0lHWnBiR3c5SWlNek16TWlJR1E5SWswMU1USWdOalJETWpZMExqWWdOalFnTmpRZ01qWTBMallnTmpRZ05URXljekl3TUM0MklEUTBPQ0EwTkRnZ05EUTRJRFEwT0MweU1EQXVOaUEwTkRndE5EUTRVemMxT1M0MElEWTBJRFV4TWlBMk5IcHRNQ0E0TWpCakxUSXdOUzQwSURBdE16Y3lMVEUyTmk0MkxUTTNNaTB6TnpKek1UWTJMall0TXpjeUlETTNNaTB6TnpJZ016Y3lJREUyTmk0MklETTNNaUF6TnpJdE1UWTJMallnTXpjeUxUTTNNaUF6TnpKNklpOCtDaUFnUEhCaGRHZ2dabWxzYkQwaUkwVTJSVFpGTmlJZ1pEMGlUVFV4TWlBeE5EQmpMVEl3TlM0MElEQXRNemN5SURFMk5pNDJMVE0zTWlBek56SnpNVFkyTGpZZ016Y3lJRE0zTWlBek56SWdNemN5TFRFMk5pNDJJRE0zTWkwek56SXRNVFkyTGpZdE16Y3lMVE0zTWkwek56SjZUVEk0T0NBME1qRmhORGd1TURFZ05EZ3VNREVnTUNBd0lERWdPVFlnTUNBME9DNHdNU0EwT0M0d01TQXdJREFnTVMwNU5pQXdlbTB6TnpZZ01qY3lhQzAwT0M0eFl5MDBMaklnTUMwM0xqZ3RNeTR5TFRndU1TMDNMalJETmpBMElEWXpOaTR4SURVMk1pNDFJRFU1TnlBMU1USWdOVGszY3kwNU1pNHhJRE01TGpFdE9UVXVPQ0E0T0M0Mll5MHVNeUEwTGpJdE15NDVJRGN1TkMwNExqRWdOeTQwU0RNMk1HRTRJRGdnTUNBd0lERXRPQzA0TGpSak5DNDBMVGcwTGpNZ056UXVOUzB4TlRFdU5pQXhOakF0TVRVeExqWnpNVFUxTGpZZ05qY3VNeUF4TmpBZ01UVXhMalpoT0NBNElEQWdNQ0F4TFRnZ09DNDBlbTB5TkMweU1qUmhORGd1TURFZ05EZ3VNREVnTUNBd0lERWdNQzA1TmlBME9DNHdNU0EwT0M0d01TQXdJREFnTVNBd0lEazJlaUl2UGdvZ0lEeHdZWFJvSUdacGJHdzlJaU16TXpNaUlHUTlJazB5T0RnZ05ESXhZVFE0SURRNElEQWdNU0F3SURrMklEQWdORGdnTkRnZ01DQXhJREF0T1RZZ01IcHRNakkwSURFeE1tTXRPRFV1TlNBd0xURTFOUzQySURZM0xqTXRNVFl3SURFMU1TNDJZVGdnT0NBd0lEQWdNQ0E0SURndU5HZzBPQzR4WXpRdU1pQXdJRGN1T0MwekxqSWdPQzR4TFRjdU5DQXpMamN0TkRrdU5TQTBOUzR6TFRnNExqWWdPVFV1T0MwNE9DNDJjemt5SURNNUxqRWdPVFV1T0NBNE9DNDJZeTR6SURRdU1pQXpMamtnTnk0MElEZ3VNU0EzTGpSSU5qWTBZVGdnT0NBd0lEQWdNQ0E0TFRndU5FTTJOamN1TmlBMk1EQXVNeUExT1RjdU5TQTFNek1nTlRFeUlEVXpNM3B0TVRJNExURXhNbUUwT0NBME9DQXdJREVnTUNBNU5pQXdJRFE0SURRNElEQWdNU0F3TFRrMklEQjZJaTgrQ2p3dmMzWm5QZ289In0=
An unexpected error occurred:

Error: ERROR processing /home/ashwani/hh-Javascript/hardhat-nft-fcc-main/deploy/04-mint.js:
Error: cannot estimate gas; transaction may fail or may require manual gas limit [ See: https://links.ethers.org/v5-errors-UNPREDICTABLE_GAS_LIMIT ] (reason="execution reverted", method="estimateGas", transaction={"from":"0x2c93f37B6d856FE33FdC9268D3958f430661398A","to":"0x7aD19A0806c13874A15ee237b4926FE10825d4d6","value":{"type":"BigNumber","hex":"0x2386f26fc10000"},"data":"0xaa152491","accessList":null}, error={"name":"ProviderError","_stack":"ProviderError: HttpProviderError\n    at HttpProvider.request (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/hardhat/src/internal/core/providers/http.ts:83:19)\n    at LocalAccountsProvider.request (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/hardhat/src/internal/core/providers/accounts.ts:187:34)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)\n    at EthersProviderWrapper.send (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/@nomiclabs/hardhat-ethers/src/internal/ethers-provider-wrapper.ts:13:20)","code":3,"_isProviderError":true,"data":"0xf0019fe600000000000000000000000000000000000000000000000000000000000026b00000000000000000000000007ad19a0806c13874a15ee237b4926fe10825d4d6"}, code=UNPREDICTABLE_GAS_LIMIT, version=providers/5.7.1)
    at Logger.makeError (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
    at Logger.throwError (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
    at checkError (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:78:20)
    at EthersProviderWrapper.<anonymous> (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:642:20)
    at step (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:48:23)
    at Object.throw (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:29:53)
    at rejected (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:21:65)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at DeploymentsManager.executeDeployScripts (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/hardhat-deploy/src/DeploymentsManager.ts:1223:19)
    at processTicksAndRejections (node:internal/process/task_queues:96:5)
    at DeploymentsManager.runDeploy (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/hardhat-deploy/src/DeploymentsManager.ts:1053:5)
    at SimpleTaskDefinition.action (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/hardhat-deploy/src/index.ts:422:5)
    at Environment._runTaskDefinition (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/hardhat/src/internal/core/runtime-environment.ts:311:14)
    at Environment.run (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/hardhat/src/internal/core/runtime-environment.ts:159:14)
    at SimpleTaskDefinition.action (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/hardhat-deploy/src/index.ts:568:32)
    at Environment._runTaskDefinition (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/hardhat/src/internal/core/runtime-environment.ts:311:14)
    at Environment.run (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/hardhat/src/internal/core/runtime-environment.ts:159:14)
    at SimpleTaskDefinition.action (/home/ashwani/hh-Javascript/hardhat-nft-fcc-main/node_modules/hardhat-deploy/src/index.ts:653:5)
*/
