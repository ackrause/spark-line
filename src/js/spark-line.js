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

  // POLYMER //

  Polymer( 'spark-line', {
    /**
    * METHOD: created()
    *  Polymer hook that is called when an element is created.
    */
    created: function() {
      console.log( this.data );
      console.log( 'width:', this.width, 'height:', this.height );
    }

  });

})();