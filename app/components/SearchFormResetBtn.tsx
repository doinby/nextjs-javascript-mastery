'use client';

export default function SearchFormResetBtn() {
	function reset() {
		const form = document.querySelector('.search-form') as HTMLFormElement;
		if (form) form.reset();
	}

	return (
		<button type='reset' onClick={reset}>
			❌
		</button>
	);
}
