import React, { useState, useEffect, useCallback } from 'react';
import Particle from '../Particle';

const Board = () => {
	const rows = 54;
	const columns = 54;
	const [grid, setGrid] = useState(Array.from({ length: columns }, () => Array(rows).fill(0)));
	const [generation, setGeneration] = useState(0);
	const [intervalId, setIntervalId] = useState(null);

	const makeGrid = () => Array.from({ length: columns }, () => Array(rows).fill(0));

	const countNeighbors = (grid, x, y) => {
		let sum = 0;
		for (let i = -1; i < 2; i++) {
			for (let j = -1; j < 2; j++) {
				let col = (x + i + columns) % columns;
				let row = (y + j + rows) % rows;
				sum += grid[col][row];
			}
		}
		sum -= grid[x][y];
		return sum;
	};

	const step = useCallback(() => {
		setGrid((prevGrid) => {
			const nextGrid = makeGrid();
			for (let i = 0; i < columns; i++) {
				for (let j = 0; j < rows; j++) {
					let state = prevGrid[i][j];
					let neighbors = countNeighbors(prevGrid, i, j);

					if (state === 0 && neighbors === 3) {
						nextGrid[i][j] = 1;
					} else if (state === 1 && (neighbors < 2 || neighbors > 3)) {
						nextGrid[i][j] = 0;
					} else {
						nextGrid[i][j] = state;
					}
				}
			}
			setGeneration((g) => g + 1);
			return nextGrid;
		});
	}, []);

	const seed = () => {
		setGrid((prevGrid) =>
			prevGrid.map((row) => row.map(() => Math.round(Math.random())))
		);
	};

	const play = () => {
		if (!intervalId) {
			const id = setInterval(step, 400);
			setIntervalId(id);
		}
	};

	const pause = () => {
		if (intervalId) {
			clearInterval(intervalId);
			setIntervalId(null);
		}
	};

	const reset = () => {
		setGrid(makeGrid());
		setGeneration(0);
	};

	const toggleCell = (x, y) => {
		setGrid((prevGrid) => {
			const newGrid = prevGrid.map((row, i) => row.map((col, j) => (i === x && j === y ? 1 - col : col)));
			return newGrid;
		});
	};

	useEffect(() => {
		seed();
		play();
		return () => reset();
	}, []);

	return (
		<div className='absolute z-8 w-full h-full top-0 left-0' style={{ lineHeight: 0 }}>
			
			{grid.map((row, j) =>
				row.map((col, i) => (
					<div
						key={`${i}_${j}`}
						className={`Cell ${col ? 'bg-[#0088cc] opacity-20 shimmer' : ''}`}
						onClick={() => toggleCell(i, j)}
					/>
				))
			)}
		</div>
	);
};

export default Board;
