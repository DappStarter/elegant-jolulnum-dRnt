require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glimpse flush security trap birth predict unique install gloom outer swim'; 
let testAccounts = [
"0xd191321cbb08e19e0869e2ac182d38baf0c116927891cbd8bb44d0d48d763b58",
"0x02e535778a845c0733f1f7abb64e16c27c4d6fd51cb5231e1531c916a44bef61",
"0x6b3e5a26ca7cbbf1de58ab8c83d1fbd3f0635f5f363d90b54e5cb5f529d5b041",
"0x509f866494e581398bea9e6b67b32556a50465cbb80360f4ac55df46d6f4a622",
"0x8d24eb159eaaa3f94745695b0c6001a7bc879d90214e4b567a01fb1e4cbf4118",
"0xa1cd3047cf4ab68369c23a36246431d011a946a13bc1ab26b170d5c07c01581d",
"0xd99ba6605b503396ec0f469c986d6996d0fbfc59809ea2315a345c235813e595",
"0x0b246cec805d8bd266f2769c78ea9a8ec242ff90f616da2fb58dc7ab823c1b93",
"0x4d6e667321475d451dfbd4e91854a0e29276386b9fbb31f426351e6739a86a7e",
"0x672a31a44a214ced04a04ca26d87895a50c56f7b8002b80d3c51ed30405190b0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

