let React = require('react');
let ReactDOM = require('react-dom');

// my three favorite codewarriors are!
var myHeader = <h1>My three favorite codewarriors are noLan, jhoffner, and OverZealous</h1>;

var CodewarsLink = React.createClass({
  render: function() {
    // Return a link to the user's profile
    return (
      <a href={'http://www.codewars.com/users/' + this.props.user}>
        {this.props.user}
      </a>
    );
  }
});

var Leaderboard = React.createClass({
  render: function() {
    // Map over the leaderboard array to create links
    const leaderLinks = this.props.leaders.map((user) => 
      <CodewarsLink key={user} user={user} />
    );

    // Return an abridged version of the leaderboard
    return (
      <div>
        {leaderLinks}
      </div>
    );
  }
});

// Export the components instead of rendering
module.exports = {
  myHeader,
  CodewarsLink,
  Leaderboard
};

// If you still want to render in a browser context, you could do so separately:
if (typeof document !== 'undefined') {
  // Example usage
  var leaders = ['Sch3lp', 'nplus', 'jhoffner', 'noLan', 'OverZealous']; // Add more users as needed
  var leaderboardElement = <Leaderboard leaders={leaders} />;

  // Render your components, assuming you have a root element
  ReactDOM.render(
    <div>
      {myHeader}
      {leaderboardElement}
    </div>,
    document.getElementById('root')
  );
}
