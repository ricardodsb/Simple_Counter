import React from "react";
export function SimpleCounter(props) {
	return (
		<div className="bigCounter">
			<div className="clock">
				<img
					src="https://icon-library.com/images/white-clock-icon/white-clock-icon-16.jpg"
					style={{ width: "35px" }}></img>
			</div>
			<div className="four">0</div>
			<div className="three">0</div>
			<div className="two">0</div>
			<div className="one">0</div>
		</div>
	);
}
