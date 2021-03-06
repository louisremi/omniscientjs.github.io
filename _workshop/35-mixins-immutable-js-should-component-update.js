---
layout: workshop
collection: workshop
title: Mixins - immutable.js shouldComponentUpdate
section: 3
name: 35-mixins-immutable-js-should-component-update
next: 40-omniscients-shouldComponentUpdate-in-react
prev: 34-mixins-only-show-odd-numbers
slides: http://omniscientjs.github.io/workshop-slides/#61
---

var { Range, List, Map } = Immutable;

var immutableMixin = {

  shouldComponentUpdate: function (nextProps) {
    // Implement the shouldComponentUpdate mixin such that it will
    // check all properties of this.props agains nextProps, to figure out
    // if some data has changed. This method should return true only
    // when data has changed between this.props and nextProps
    //
    // When your component receives a data-structure that has an .equals()
    // method (an immutable.js data structure), call it and use this to
    // decide wether to re-render or not
    //
    // When your component receives a data that does not have an .equals()
    // method, compare the data using the === operator

  }
};

var Episode = React.createClass({
  // Make use of the immutableMixin so your component only re-renders
  // when its data changes

  render: function () {
    // Return an <li> with the name of each episode

  }
});

var Show = React.createClass({
  // Make use of the immutableMixin so your component only re-renders
  // when its data changes

  render: function () {
    // Map over the show's episodes to create an Episode component
    // for each episode.
    //
    // var episodes = this.props.show.get('episodes').toArray().map(function (name) {
    //
    // });

    return <div>
      <h1>Shows</h1>
      <ul></ul>
    </div>;
  }
});

var show = Immutable.fromJS({
  episodes: [ "Cartman Gets an Anal Probe", 'Weight Gain 400' ]
});

React.render(<Show show={show} />, el);

var updatedShow = show.updateIn(['episodes'], episodes => episodes.push('Volcano'));
setTimeout(() => React.render(<Show show={updatedShow} />, el), 1000);
