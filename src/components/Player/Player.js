import './Player.scss';
import { FaPlay, FaPause, FaBackward, FaForward } from 'react-icons/fa';
import { useRef, useEffect } from 'react';
import { songData } from '../../config';

const Player = ({
	currentSong,
	setCurrentSong,
	isPlaying,
	setIsPlaying,
	rangeValue,
	setRangeValue,
	playingIdx,
	setPlayingIdx,
}) => {
	const audioElem = useRef();
	const playAudio = () => {
		if (isPlaying) {
			audioElem.current.play();
		} else {
			audioElem.current.pause();
		}
	};
	if (isPlaying) {
		playAudio();
	}

	// TODO: Handler

	const onClickHandler = () => {
		setIsPlaying(!isPlaying);
	};

	const nextHandler = () => {
		if (playingIdx === songData.length - 1) {
			setPlayingIdx(0);
		} else {
			setPlayingIdx(playingIdx + 1);
		}
	};
	const prevHandler = () => {
		if (playingIdx === 0) {
			setPlayingIdx(songData.length - 1);
		} else {
			setPlayingIdx(playingIdx - 1);
		}
	};
	// if (audioElem?.current?.currentTime > audioElem?.current?.duration - 1) {
	// 	console.log('Hi');
	// 	nextHandler();
	// }
	// useEffect(() => {
	// 	playAudio();
	// }, []);

	const nextPrevPlay = () => {
		setCurrentSong(songData[playingIdx]);
	};

	useEffect(() => {
		nextPrevPlay();
	}, [playingIdx]);

	useEffect(() => {
		playAudio();
	}, [isPlaying]);

	return (
		<div className="player-wrapper">
			<audio
				ref={audioElem}
				onTimeUpdate={e => {
					setRangeValue(e.target.currentTime);
				}}
				src={currentSong.audio}
				type="audio/mp3"></audio>
			<div className="player">
				<div className="cover-img">
					<img
						className={isPlaying ? 'animation' : ''}
						src={currentSong.cover}
					/>
				</div>
				<div className="song-info">
					<div>
						<div className="song-name">{currentSong.name}</div>-
						<div className="song-artist">{currentSong.artist}</div>
					</div>
					<div>
						<input
							value={rangeValue}
							max={
								audioElem?.current?.duration
									? audioElem?.current?.duration
									: 1
							}
							type="range"
							onChange={e => {
								audioElem.current.currentTime = e.target.value;
							}}
						/>
					</div>
				</div>
				<div className="controls">
					<div data-id={currentSong.id} onClick={prevHandler}>
						<FaBackward data-id={currentSong.id} />
					</div>
					<div onClick={onClickHandler}>
						{!isPlaying ? <FaPlay /> : <FaPause />}
					</div>
					<div data-id={currentSong.id} onClick={nextHandler}>
						<FaForward data-id={currentSong.id} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Player;
