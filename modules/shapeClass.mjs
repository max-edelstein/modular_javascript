export function Shape(config) {

  // default setup
  config = Object.assign({
      id: config.id, // constant from main.mjs
    },
    config
  );

  Object.defineProperty(this, 'id', {

    get: function () {
      return this.idValue;
    },

    set: function (newId) {
      this.idValue = newId;
    },

    configurable: true,
    enumerable: true,

  });

  this.id = config.id;

};

Shape.prototype.hello = function () {
  console.log('wow from shapeClass' + this.id);
};
