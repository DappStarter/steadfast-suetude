require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict permit flame silver gravity rifle spawn purpose install close bubble size'; 
let testAccounts = [
"0xbb49220d084c7c4932e07fe76974786cd04acec8b515d064ac305889bdbe1788",
"0xac4705d3c824520ae66054f0e3e47b1769f00077fb7f0ef2eb85916177272301",
"0x0f034a4bb01acb7c51a7df718a67357b68bce7dc5e488bb475a173345b02b72b",
"0xf8a5b9052b4e3af01f4181841c59ddd8fec97d65842e5aa0e7a71ae816037e8a",
"0x7e55ddd6bc752a21804d51b2c182a5cab7b73a3064ebdaebc327d32f5c3d150f",
"0x66be6a27bb41a02c5a3299ae46367a0ef55673ea634caa99efbab441907d3dad",
"0xace843f719efc3deb809f0c64cf6c56f6844cea15d9f2c3f315fc61dd4c89ec0",
"0xb6b536df206da67ca439402ae1742b249927081cd6642ac3f4cdabdfbb90dfd3",
"0xee2acb03b68c52a522aa229cfe0ce98daaa15cc5d9201771e8a1bf35952f14a7",
"0x3df92985cb3d2dd9a2afad0d242f35a624f08f8a0b546ea73460c23f829072c1"
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
            version: '^0.5.11'
        }
    }
};
