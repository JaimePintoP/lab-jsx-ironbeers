const React = require('react');
const Layout = require('./Layout');

const BeerCard = require('./components/BeerCard');

function RandomBeers(props) {
  return (
    <Layout>
      <BeerCard beer={props.responseFromAPI[0]} />

      {/* `props.oneBeer` is the data coming from the res.render('RandomBeer', data) */}
    </Layout>
  );
}

module.exports = RandomBeers;
