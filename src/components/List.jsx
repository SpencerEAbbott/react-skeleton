var React = require('react');
var ListItem = require('./ListItem.jsx');

var ingredients = [
  {"id": 1, "text": "ham", "greeting": "hey"},
  {"id": 2, "text": "beef", "greeting": "hello"},
  {"id": 3, "text": "turkey", "greeting": "hi"}
]

var List = React.createClass({
  render: function() {
    var listItems = ingredients.map(function(item){
      return <ListItem key={item.id} ingredient={item.text} greeting={item.greeting} />
    });

    return (
      <ul>
          {listItems}
      </ul>
    )

  }
});

module.exports = List;
