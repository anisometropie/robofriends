import React from "react";

function Card({robot}) {
	const { id, name, username, email } = robot;
	return (
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="robot" src={`https://robohash.org/${username}${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{name}@gmail.com</p>
			</div>
		</div>
	);
}

export default Card;
