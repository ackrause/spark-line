/**
*
* COMPONENT: spark-line
*
*
* DESCRIPTION:
*   - Registers the web-component for displaying a sparkline
*
*
* NOTES:
*   [1]
*
*
* TODO:
*   [1]
*
*
* LICENSE: MIT
*
*
* Copyright (c) Andrew Krause. 2014. a.c.krause@gmail.com
*
*/

(function() {
  'use strict';

  // VARIABLES //
  var // default width in pixels
    WIDTH = 100,
    // default height in pixels
    HEIGHT = 25;

  // POLYMER //

  Polymer( 'spark-line', {
    /**
    * METHOD: created()
    *  Polymer hook that is called when an element is created.
    */
    created: function() {
      this.data = [];
    },

    /**
    * METHOD: domReady()
    *  Polymer hook that is called when an element is ready for insertion into the DOM.
    */
    domReady: function() {
      this.init();
    },

    /**
    * METHOD: init()
    *  Initialization
    */
    init: function() {
      var create = document.createElement.bind( document ),
        el,
        d3,
        width,
        height,
        x,
        y,
        line;

      // Create a D3 element to access libray dependencies
      el = create( 'polymer-d3' );
      d3 = el.d3;
      this._d3 = d3;

      // Set dimensions
      width = this.width ? this.width: WIDTH;
      height = this.height ? this.height: HEIGHT;

      // Create range
      x = d3.scale
        .linear()
        .range( [ 0, width ] );
      y = d3.scale
        .linear()
        .range( [ height, 0 ] );


      // Create sparkline
      line = d3.svg
        .line()
        .interpolate( 'basis' )
        .x( function( d, i ) { return x( i ); } )
        .y( function( d ) { return y( d ); } );

      x.domain( [0, this.data.length] );
      y.domain( d3.extent( this.data ) );

      d3.select( this.$.sparkline )
        .append( 'svg' )
        .attr( 'width', width )
        .attr( 'height', height )
        .append( 'path' )
        .datum( this.data )
        .attr( 'class', 'sparkline' )
        .attr( 'd', line );
    }

  });

})();
