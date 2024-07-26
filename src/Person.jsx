import React from 'react';

const Person = ({ name, age, image }) => {
	return (
		<article className=''>
			<div className='flex gap-2 mb-3 items-center mt-4'>
				<img
					src={image}
					alt=''
					className='w-[80px] h-[80px] rounded-full'
				/>
				<div>
					<h4>{name}</h4>
					<p>{age}</p>
				</div>
			</div>
		</article>
	);
};

export default Person;
