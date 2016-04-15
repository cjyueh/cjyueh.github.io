(function(window) {

  'use strict';

  // Extend Object helper function
  function extend(a, b) {
    for(var key in b) { 
      if(b.hasOwnProperty(key)) {
        a[key] = b[key];
      }
    }
    return a;
  }

  // Each helper function
  function each(collection, callback) {
    for (var i = 0; i < collection.length; i++) {
      var item = collection[i];
      callback(item);
    }
  }

  // Menu constructor
  function Menu(options) {
    this.options = extend({}, this.options);
    extend(this.options, options);
    this._init();
  }

  // Menu options
  Menu.prototype.options = {
    wrapper: '#wrapper',          // The content wrapper
    type: 'slide-left',             // The menu type
    menuOpenerClass: '.hamburger',   // The menu opener class names (i.e. the buttons)
    maskId: '#mask'               // The ID of the mask
  };

  // Menu initialize function
  Menu.prototype._init = function() {
    this.body = document.body;
    this.wrapper = document.querySelector(this.options.wrapper);
    this.mask = document.querySelector(this.options.maskId);
    this.menu = document.querySelector('#sidebar--' + this.options.type);
    this.closeBtn = this.menu.querySelector('.sidebar__close');
    this.menuOpeners = document.querySelectorAll(this.options.menuOpenerClass);
    this._initEvents();
  };

  // Menu Events initialize function (to close menu)
  Menu.prototype._initEvents = function() {
    // Event listener for clicks on the close button inside the menu
    this.closeBtn.addEventListener('click', function(e) {
      e.preventDefault();
      this.close();
    }.bind(this));

    // Event listener for clicks on the mask outside the menu
    this.mask.addEventListener('click', function(e) {
      e.preventDefault();
      this.close();
    }.bind(this));
  };

  // Menu Open function
  Menu.prototype.open = function() {
    this.body.classList.add('has-active-menu');
    this.wrapper.classList.add('has-' + this.options.type);
    this.menu.classList.add('is-active');
    this.mask.classList.add('is-active');
    this.disableMenuOpeners();
  };

  // Menu Close function
  Menu.prototype.close = function() {
    this.body.classList.remove('has-active-menu');
    this.wrapper.classList.remove('has-' + this.options.type);
    this.menu.classList.remove('is-active');
    this.mask.classList.remove('is-active');
    this.enableMenuOpeners();
  };

  // Menu Disable Openers function
  Menu.prototype.disableMenuOpeners = function() {
    each(this.menuOpeners, function(item) {
      item.disabled = true;
    });
  };

  // Menu Enable Openers function
  Menu.prototype.enableMenuOpeners = function() {
    each(this.menuOpeners, function(item) {
      item.disabled = false;
    });
  };

  window.Menu = Menu;

})(window);