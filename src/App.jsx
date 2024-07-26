import { useState } from 'react';
import data from './data';
import List from './List';

function App() {
	const [people, setPeople] = useState(data);
	const clearList = () => {
		setPeople([]);
	};
	const resetList = () => {
		setPeople(data);
	};
	return (
		<main>
			<section className='container mx-0 auto flex flex-wrap items-center justify-center mt-[140px]'>
				<div className='bg-white p-[20px]'>
					<h2 className='text-slate-500'>
						{people.length} birthday's today
						<List people={people} setPeople={setPeople} />
					</h2>
				</div>
			</section>
		</main>
	);
}

export default App;
