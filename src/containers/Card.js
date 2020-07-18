import React from 'react';

const Card =({name, email, id}) => {
	return (
		<div className='tc bg-light-green  dib br3 pa3 ma2 grow bw2 shadow'>
			<img alt='profil photoshot' src={`https://robohash.org/${id}?size=225x225`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);

}

export default Card;