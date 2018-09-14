import React from "react";
import Card from './Card'

function CardList({robots}) {
	const cardsArray = robots.map( robot => {
		return <Card key={robot.id} robot={robot}/>;
	});
	// if (true) {
	// 	throw new Error('NOOOOOOO');
	// }
	return (
		<div>
			{cardsArray}
		</div>
	);
}

export default CardList;
