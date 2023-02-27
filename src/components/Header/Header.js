import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = ({ inputText, setInputText }) => {
	const onInputChange = e => {
		setInputText(e.target.value);
	};

	return (
		<div className="header">
			<div className="nav">
				<Link to={'/'} className="logo">
					ACOUSTIC
				</Link>
				<div className="search-wrapper">
					<input
						value={inputText}
						onChange={onInputChange}
						type="text"
						placeholder="Search song.."
					/>
					<button onClick={() => {}}>Search</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
