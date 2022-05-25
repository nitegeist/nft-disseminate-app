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
			for (let file of files) {
				Papa.parse(file, {
					header: true,
					complete: (results: CSVData) => {
						console.log(results.data);
					},
				});
			}
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
