import { ChangeEvent, FC } from 'react';
import styles from '../styles/Home.module.css';
const Papa = require('papaparse');

interface CSVData {
	data: [];
	errors: [];
	meta: Object;
}

export const FileUpload: FC<React.PropsWithChildren<unknown>> = () => {
	const handleFileSelect = async (e: ChangeEvent<HTMLInputElement>) => {
		let { value, files } = e.target;
		var regex = new RegExp('(.*?).(csv)$');
		if (!regex.test(value.toLowerCase())) {
			value = '';
			alert('Please select correct file format');
		} else {
			files && files.length
				? Papa.parse(files[0], {
						header: true,
						complete: (results: CSVData) => {
							const addresses: unknown[] = [];
							results.data.map((el) => {
								Object.entries(el).map(([key, value]) => {
									if (key === 'memberAddress') {
										addresses.push(value);
									}
								});
							});
							console.log(addresses);
						},
				  })
				: null;
		}
	};
	return (
		<>
			<form encType='multipart/form-data' className={styles.column}>
				<label htmlFor='upload-file'>Upload CSV File</label>
				<input
					type='file'
					name='upload-file'
					id='upload-file'
					accept='text/csv, application/csv'
					onChange={handleFileSelect}
				/>
			</form>
		</>
	);
};
