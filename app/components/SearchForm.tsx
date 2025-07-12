import Form from 'next/form';
import SearchFormResetBtn from './SearchFormResetBtn';

export default function SearchForm() {
	const query = '';

	return (
		<Form action='/' scroll={false} className='search-form'>
			<input
				name='query'
				defaultValue={query}
				placeholder='Search Starups'
				className='input'
			/>
			{query && <SearchFormResetBtn />}
			<button type='submit' className='btn'>
				Submit
			</button>
		</Form>
	);
}
