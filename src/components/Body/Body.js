import './Body.scss';
import { songData } from '../../config';
import SongCard from '../SongCard/SongCard';
import { useState } from 'react';

const Body = ({ setPlayingIdx, inputText }) => {
	const [filteredSong, setFilteredSong] = useState(songData);
	return (
		<div className="body">
			{filteredSong.map((song, idx) => (
				<SongCard
					key={song.id}
					setPlayingIdx={setPlayingIdx}
					idx={idx}
					inputText={inputText}
					{...song}
				/>
			))}
		</div>
	);
};

export default Body;
