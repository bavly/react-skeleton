var React = require('react');

// use your npm moduel like take object from createClass

var ListItem = require('./ListItem.jsx');

// we will pass ingradient
var ingredient =[{"id":1,"text":"ham"} ,{"id":2 , "text":"photoes"} ];

var List = React.createClass({
  render: function () {
    var listItems = ingradient.map (function (item) {
      return <ListItem key={item.id} ingredient={item.text} />;
    });
    return (<ul>{listItems}</ul>)
  }
});


moduel.exports = List;
