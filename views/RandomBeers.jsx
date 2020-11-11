const React = require('react');
const Layout = require('./Layout');

function RandomBeers(props) {
  const foodPairing = props.responseFromAPI[0].food_pairing;

  return (
    <Layout>
      <div>
        <img src={props.responseFromAPI[0].image_url} />
        <h1>{props.responseFromAPI[0].name}</h1>
        <p>{props.responseFromAPI[0].description}</p>
        <h3>{props.responseFromAPI[0].tagline}</h3>
        <h3>Food Pairing:</h3>
        <ul>
          {foodPairing.map((pair, i) => {
            return <li key={i}>{pair}</li>;
          })}
        </ul>
        <h3>Brewers Tips:</h3>
        <p>{props.responseFromAPI[0].brewers_tips}</p>
      </div>
    </Layout>
  );
}

module.exports = RandomBeers;
