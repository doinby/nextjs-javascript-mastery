import Form from 'next/form';
import SearchFormResetBtn from './SearchFormResetBtn';

export default function SearchForm() {
	const query = '';

	return (
		<Form action='/' scroll={false} className='search-form'>
			<input name='query' defaultValue={query} placeholder='Search Starups' />
			{query && <SearchFormResetBtn />}
			<button type='submit'>Submit</button>
		</Form>
	);
}
