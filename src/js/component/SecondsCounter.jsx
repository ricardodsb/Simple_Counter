import React, { useEffect, useState } from "react";

export const SimpleCounter = () => {
	const [time, setTime] = useState(0);
	const [timerOn, setTimerOn] = useState(false);

	useEffect(() => {
		let interval = null;

		if (timerOn) {
			interval = setInterval(() => {
				setTime(prevTime => prevTime + 10);
			}, 10);
		} else if (!timerOn) {
			clearInterval(interval);
		}

		return () => clearInterval(interval);
	}, [timerOn]);

	return (
		<>
			<>
				<div className="Timers">
					<h2 className="title">My Simple Counter</h2>
					<div className="clock">
						<img
							src="https://icon-library.com/images/white-clock-icon/white-clock-icon-16.jpg"
							style={{
								width: "50px",
								borderRight: "50px"
							}}></img>
					</div>
					<div className="three">0</div>
					<div className="two">
						{("" + Math.floor((time / 60000) % 60)).slice(-2)}
					</div>
					<div className="one">
						{("" + Math.floor((time / 1000) % 60)).slice(-2)}
					</div>
				</div>
			</>
			<div id="buttons">
				<button className="button1" onClick={() => setTimerOn(true)}>
					Start
				</button>

				<button className="button2" onClick={() => setTimerOn(false)}>
					Stop
				</button>

				<button className="button3" onClick={() => setTime(0)}>
					Reset
				</button>
			</div>
		</>
	);
};
