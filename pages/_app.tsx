import { WalletProvider } from '@raidguild/quiver';
import type { AppProps } from 'next/app';
import React from 'react';
import { SWRConfig } from 'swr';
import '../styles/globals.css';
import { DEFAULT_CHAIN_ID, NETWORKS, web3modalOptions } from '../web3/providerOptions';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<React.StrictMode>
			<WalletProvider
				web3modalOptions={web3modalOptions}
				networks={NETWORKS}
				// Optional if you want to auto switch the network
				defaultChainId={DEFAULT_CHAIN_ID}
				// Optional but useful to handle events.
				handleModalEvents={(eventName, error) => {
					if (error) {
						console.error(error.message);
					}

					console.log(eventName);
				}}>
				<SWRConfig
					value={{
						fetcher: fetch,
						shouldRetryOnError: false,
						revalidateOnFocus: false,
					}}>
					<Component {...pageProps} />
				</SWRConfig>
			</WalletProvider>
		</React.StrictMode>
	);
}

export default MyApp;
