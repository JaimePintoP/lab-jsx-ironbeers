const React = require('react');
const Layout = require('./Layout'); // require the Layout component

const BeerCard = require('./components/BeerCard');

function Beers(props) {
  // `props` is the the `data` object passed during `res.render('Beers', data )`

  // Wrap the Layout around all other HTML content
  return (
    <Layout>
      {props.beersFromApi.map(beerObj => {
        return <BeerCard beer={beerObj} hideDetails={true} />;
      })}
    </Layout>
  );
}

module.exports = Beers;
