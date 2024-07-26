import React from 'react';
import Person from './Person';
import data from './data';
const List = ({ people, setPeople }) => {
	return (
		<section>
			{people.map((person) => {
				return <Person key={person.id} {...person} />;
			})}
			<div className='flex gap-2 mt-5'>
				<button
					className='px-4 py-2 bg-blue-400 rounded-lg text-white cursor-pointer hover:bg-purple-600 hover:text-cyan-100 transition-all duration-500'
					onClick={() => setPeople([])}>
					clear list
				</button>
				<button
					className='px-4 py-2 bg-blue-400 rounded-lg text-white cursor-pointer hover:bg-emerald-300 hover:text-lime-100 transition-all duration-500'
					onClick={() => setPeople(data)}>
					reset list
				</button>
			</div>
		</section>
	);
};

export default List;
