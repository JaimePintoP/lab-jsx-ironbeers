const React = require('react');

function BeerCard(props) {
  const foodPairing = props.beer.food_pairing;

  return (
    <div>
      <a href={`/beers/${props.beer.id}`}>
        <img src={props.beer.image_url} />
        <h1>{props.beer.name}</h1>
        <p>{props.beer.description}</p>
        <h3>{props.beer.tagline}</h3>

        {props.hideDetails ? null : (
          <div>
            <h3>Food Pairing:</h3>
            <ul>
              {foodPairing.map((pair, i) => {
                return <li key={i}>{pair}</li>;
              })}
            </ul>
            <h3>Brewers Tips:</h3>
            <p>{props.beer.brewers_tips}</p>{' '}
          </div>
        )}
      </a>
    </div>
  );
}

module.exports = BeerCard;
