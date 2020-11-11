const React = require('react');
const Layout = require('./Layout'); // require the Layout component

function Beers(props) {
  // `props` is the the `data` object passed during `res.render('Beers', data )`

  // Wrap the Layout around all other HTML content
  return (
    <Layout>
      <div>
        {/* We are maping over the beersFromApi array we received */}
        {props.beersFromApi.map(beerObj => {
          return (
            <div>
              <img src={beerObj.image_url} width="200" alt="" />
              <h3>{beerObj.name}</h3>
              <h5>{beerObj.tagline}</h5>
              <p>{beerObj.description}</p>
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

module.exports = Beers;
