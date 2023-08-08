import { useState } from 'react';
import { USERS } from '../../constants/users';
import Button from '../button/Button';

const UserCard = () => {
	const [index, setIndex] = useState(0);

	const user = USERS[index];
    const previousDisabled = index <= 0;
	const nextDisabled = index >= USERS.length - 1;
	return (
		<div>
			<img
				src={user.profileImage}
				alt={`${user.name} foto`}  
				
			/>
			<h1>Name: {user.name}</h1>
			<p>Username: {user.username}</p>
			<p>Email: {user.email}</p>
			<Button
				text='Previous'
				handleButton={() => decrease(index, setIndex)}
				disabledState={previousDisabled}
			/>
			<Button
				text='Next'
				handleButton={() => increase(index, setIndex)}
				disabledState={nextDisabled}
			/>
		</div>
	);
};

const decrease = (index, setIndex) => {
	setIndex(index - 1);
};

const increase = (index, setIndex) => {
	setIndex(index + 1);
};

export default UserCard;
