import { auth, signOut } from '@/auth';
import { signIn } from '@/auth';
import Image from 'next/image';
import Link from 'next/link';

export default async function Navbar() {
	const session = await auth();

	return (
		<nav className='flex items-baseline justify-between'>
			<div>
				<Image src='/logo.png' width='32' height='32' alt='logo' />
				<Link href='/'></Link>
			</div>
			<div className='flex gap-6'>
				{session && session?.user ? (
					<>
						<button>User Name</button>
						<form
							action={async () => {
								'use server';
								await signOut({ redirectTo: '/' });
							}}
						>
							<button type='submit'>Sign Out</button>
						</form>
					</>
				) : (
					<>
						<button>Sign Up</button>
						<form
							action={async () => {
								'use server';
								await signIn('github');
							}}
						>
							<button type='submit'>Login</button>
						</form>
					</>
				)}
			</div>
		</nav>
	);
}
