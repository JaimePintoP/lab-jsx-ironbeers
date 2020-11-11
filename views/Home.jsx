const React = require('react');
const Layout = require('./Layout');

function Home() {
  return (
    <Layout>
      <main>
        <img src="./../images/beer.png" alt="beer picture" />
        <a href="/beers">Check the Beers!</a>
        <a href="/random-beers">Check a Random Beer!</a>
      </main>
    </Layout>
  );
}

module.exports = Home;
