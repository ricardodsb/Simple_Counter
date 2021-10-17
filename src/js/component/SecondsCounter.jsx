import React from "react";
import PropTypes from "prop-types";
export const SimpleCounter = props => {
	return (
		<div className="bigCounter" style={{ alignItems: "center" }}>
			<div className="clock">
				<img
					src="https://icon-library.com/images/white-clock-icon/white-clock-icon-16.jpg"
					style={{
						width: "50px",
						borderRight: "50px"
					}}></img>
			</div>
			<div className="four">{Math.floor(props.time / 1000)}</div>
			<div className="three">{Math.floor((props.time % 1000) / 100)}</div>
			<div className="two">{Math.floor((props.time % 100) / 10)}</div>
			<div className="one">{props.time % 10}</div>
		</div>
	);
};

SimpleCounter.propTypes = {
	time: PropTypes.number
};
