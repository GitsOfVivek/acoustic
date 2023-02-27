import './SongCard.scss';

const SongCard = ({ cover, name, artist, idx, setPlayingIdx, inputText }) => {
	const playNowHandler = e => {
		setPlayingIdx(e.target.id);
	};

	return (
		<div className="song-card">
			<div className="img">
				<img src={cover} />
			</div>
			<div className="info">
				<div>{name}</div>
				<div>{artist}</div>
				<div onClick={playNowHandler} id={idx}>
					PlayNow
				</div>
			</div>
		</div>
	);
};

export default SongCard;
