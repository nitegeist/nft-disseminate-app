import { useWallet } from '@raidguild/quiver';
import { FC } from 'react';
import styles from '../styles/Home.module.css';
import { formatAddress } from '../utils/methods';

export const ConnectWallet: FC<React.PropsWithChildren<unknown>> = () => {
	const { connectWallet, isConnecting, isConnected, disconnect, address } = useWallet();
	return (
		<>
			{!isConnected && (
				<button
					className={styles.button}
					id='button'
					disabled={isConnecting}
					onClick={() => !isConnected && connectWallet()}>
					{isConnecting ? 'Connecting...' : isConnected ? 'Connected' : 'Connect Wallet'}
				</button>
			)}
			{isConnected && (
				<div className={styles.column}>
					<p className={styles.description}>
						Connected as <span className={styles.address}>{formatAddress(address)}</span>
					</p>
					<button className={styles.button} onClick={() => disconnect()}>
						Disconnect Wallet
					</button>
				</div>
			)}
		</>
	);
};
