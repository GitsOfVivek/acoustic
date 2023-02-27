import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import { songData } from './config';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Player from './components/Player/Player';
import { useState, useRef, useEffect } from 'react';

const AppLayout = () => {
	const [playingIdx, setPlayingIdx] = useState(6);
	const [currentSong, setCurrentSong] = useState(songData[playingIdx]);
	const [isPlaying, setIsPlaying] = useState(false);
	const [rangeValue, setRangeValue] = useState(0);
	const [inputText, setInputText] = useState('');

	return (
		<>
			<Header inputText={inputText} setInputText={setInputText} />
			<Body setPlayingIdx={setPlayingIdx} inputText={inputText} />
			<Player
				isPlaying={isPlaying}
				setIsPlaying={setIsPlaying}
				currentSong={currentSong}
				setCurrentSong={setCurrentSong}
				setRangeValue={setRangeValue}
				rangeValue={rangeValue}
				playingIdx={playingIdx}
				setPlayingIdx={setPlayingIdx}
			/>
		</>
	);
};

const router = createBrowserRouter([
	{
		path: '/',
		element: <AppLayout />,
	},
]);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
