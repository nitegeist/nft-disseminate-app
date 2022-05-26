import { NetworkConfig } from '@raidguild/quiver';
import WalletConnectProvider from '@walletconnect/web3-provider';
import { IProviderOptions } from 'web3modal';

export const NETWORKS: NetworkConfig = {
	'0x1': {
		chainId: '0x1',
		name: 'Mainnet',
		symbol: 'ETH',
		explorer: 'https://etherscan.io',
		rpc: 'https://mainnet.infura.io/v3/<your infura project id>',
	},
	'0x4': {
		chainId: '0x4',
		name: 'Rinkeby',
		symbol: 'ETH',
		explorer: 'https://rinkeby.etherscan.io',
		rpc: 'https://rinkeby.infura.io/v3/<your infura project id>',
	},
	'0x539': {
		chainId: '0x539',
		name: 'Hardhat',
		symbol: 'ETH',
		explorer: 'http://localhost:1234',
		rpc: 'http://localhost:8545',
	},
	'0x64': {
		name: 'Gnosis Chain',
		symbol: 'xDai',
		chainId: '0x64',
		rpc: 'https://dai.poa.network',
		explorer: 'https://blockscout.com/xdai/mainnet/',
	},
	'0x89': {
		chainId: '0x89',
		name: 'Polygon',
		symbol: 'MATIC',
		explorer: 'https://polygonscan.com',
		rpc: 'https://polygon-rpc.com/',
	},
	'0x13881': {
		chainId: '0x13881',
		name: 'Mumbai Testnet',
		symbol: 'MATIC',
		explorer: 'https://mumbai.polygonscan.com',
		rpc: 'https://matic-mumbai.chainstacklabs.com',
	},
};

export const providerOptions: IProviderOptions = {
	walletconnect: {
		package: WalletConnectProvider,
		options: {
			rpc: {
				1: NETWORKS['0x1'].rpc,
				4: NETWORKS['0x4'].rpc,
				64: NETWORKS['0x64'].rpc,
				89: NETWORKS['0x89'].rpc,
				1337: NETWORKS['0x539'].rpc,
				80001: NETWORKS['0x13881'].rpc,
			},
		},
	},
	// .. Other providers
};

export const web3modalOptions = {
	cacheProvider: true,
	providerOptions,
	theme: 'dark',
};

export const DEFAULT_CHAIN_ID = process.env.NEXT_PUBLIC_DEFAULT_CHAIN || '0x539'; // Used to switch to if the user is on an unsupported network
