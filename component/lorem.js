"format cjs";

var Component = require("can/component/component");
var Map = require("can/map/map");
require("can/map/define/define");
var template = require("./template.stache!");

var ViewModel = Map.extend({
  define: {
    times: {
      type: 'number',
      value: 1
    }
  }
});

Component.extend({
  tag: "lorem-ipsum",
  scope: ViewModel,
  template: template,
  helpers: {
    dofor: function(times, options) {
      times = times.isComputed ? times() : times;
      var frag = document.createDocumentFragment();
      while(times) {
        frag.appendChild(
          options.fn(this)
        );
        times--;
      }
      return frag;
    }
  }
});
