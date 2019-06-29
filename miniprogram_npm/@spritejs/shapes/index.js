module.exports = (function() {
var __MODS__ = {};
var __DEFINE__ = function(modId, func, req) { var m = { exports: {} }; __MODS__[modId] = { status: 0, func: func, req: req, m: m }; };
var __REQUIRE__ = function(modId, source) { if(!__MODS__[modId]) return require(source); if(!__MODS__[modId].status) { var m = { exports: {} }; __MODS__[modId].status = 1; __MODS__[modId].func(__MODS__[modId].req, m, m.exports); if(typeof m.exports === "object") { Object.keys(m.exports).forEach(function(k) { __MODS__[modId].m.exports[k] = m.exports[k]; }); if(m.exports.__esModule) Object.defineProperty(__MODS__[modId].m.exports, "__esModule", { value: true }); } else { __MODS__[modId].m.exports = m.exports; } } return __MODS__[modId].m.exports; };
var __REQUIRE_WILDCARD__ = function(obj) { if(obj && obj.__esModule) { return obj; } else { var newObj = {}; if(obj != null) { for(var k in obj) { if (Object.prototype.hasOwnProperty.call(obj, k)) newObj[k] = obj[k]; } } newObj.default = obj; return newObj; } };
var __REQUIRE_DEFAULT__ = function(obj) { return obj && obj.__esModule ? obj.default : obj; };
__DEFINE__(1561717981021, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.install = install;
Object.defineProperty(exports, "Shape", {
  enumerable: true,
  get: function get() {
    return _shape.default;
  }
});
Object.defineProperty(exports, "Arc", {
  enumerable: true,
  get: function get() {
    return _arc.default;
  }
});
Object.defineProperty(exports, "Polyline", {
  enumerable: true,
  get: function get() {
    return _polyline.default;
  }
});
Object.defineProperty(exports, "Polycurve", {
  enumerable: true,
  get: function get() {
    return _polycurve.default;
  }
});
Object.defineProperty(exports, "Wave", {
  enumerable: true,
  get: function get() {
    return _wave.default;
  }
});
Object.defineProperty(exports, "Ring", {
  enumerable: true,
  get: function get() {
    return _ring.default;
  }
});
Object.defineProperty(exports, "Polygon", {
  enumerable: true,
  get: function get() {
    return _polygon.default;
  }
});
Object.defineProperty(exports, "Triangle", {
  enumerable: true,
  get: function get() {
    return _triangle.default;
  }
});
Object.defineProperty(exports, "Rect", {
  enumerable: true,
  get: function get() {
    return _rect.default;
  }
});
Object.defineProperty(exports, "Star", {
  enumerable: true,
  get: function get() {
    return _star.default;
  }
});
Object.defineProperty(exports, "EllipseSector", {
  enumerable: true,
  get: function get() {
    return _ellipseSector.default;
  }
});
Object.defineProperty(exports, "EllipseArc", {
  enumerable: true,
  get: function get() {
    return _ellipseArc.default;
  }
});
Object.defineProperty(exports, "Sector", {
  enumerable: true,
  get: function get() {
    return _sector.default;
  }
});
Object.defineProperty(exports, "Ellipse", {
  enumerable: true,
  get: function get() {
    return _ellipse.default;
  }
});
Object.defineProperty(exports, "Circle", {
  enumerable: true,
  get: function get() {
    return _circle.default;
  }
});
exports.default = exports.version = exports.Shapes = void 0;

var _shape = _interopRequireDefault(require("./shape"));

var _arc = _interopRequireDefault(require("./arc"));

var _polyline = _interopRequireDefault(require("./polyline"));

var _polycurve = _interopRequireDefault(require("./polycurve"));

var _wave = _interopRequireDefault(require("./wave"));

var _ring = _interopRequireDefault(require("./ring"));

var _polygon = _interopRequireDefault(require("./polygon"));

var _triangle = _interopRequireDefault(require("./triangle"));

var _rect = _interopRequireDefault(require("./rect"));

var _star = _interopRequireDefault(require("./star"));

var _ellipseSector = _interopRequireDefault(require("./ellipseSector"));

var _ellipseArc = _interopRequireDefault(require("./ellipseArc"));

var _sector = _interopRequireDefault(require("./sector"));

var _ellipse = _interopRequireDefault(require("./ellipse"));

var _circle = _interopRequireDefault(require("./circle"));

var version = require('../package.json').version;

exports.version = version;
var Shapes = {
  version: version,
  install: install,
  Shape: _shape.default,
  Polyline: _polyline.default,
  Polycurve: _polycurve.default,
  Wave: _wave.default,
  Polygon: _polygon.default,
  Triangle: _triangle.default,
  Rect: _rect.default,
  Star: _star.default,
  Arc: _arc.default,
  Sector: _sector.default,
  Ellipse: _ellipse.default,
  EllipseSector: _ellipseSector.default,
  EllipseArc: _ellipseArc.default,
  Circle: _circle.default,
  Ring: _ring.default
};
exports.Shapes = Shapes;

function install(spritejs) {
  return Object.keys(Shapes).reduce(function (pkg, key) {
    if (key === 'version' || key === 'install') {
      return pkg;
    }

    return Object.assign(pkg, spritejs.use(Shapes[key], null, false));
  }, {});
} // auto use
// if (typeof window !== 'undefined' && window.spritejs) {
//   window.spritejs.use(Shapes);
// }


var _default = Shapes;
exports.default = _default;
}, function(modId) {var map = {"./shape":1561717981022,"./arc":1561717981023,"./polyline":1561717981028,"./polycurve":1561717981029,"./wave":1561717981030,"./ring":1561717981031,"./polygon":1561717981032,"./triangle":1561717981033,"./rect":1561717981034,"./star":1561717981035,"./ellipseSector":1561717981026,"./ellipseArc":1561717981024,"./sector":1561717981025,"./ellipse":1561717981036,"./circle":1561717981037,"../package.json":1561717981038}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1561717981022, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return (0, _toArray2.default)(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0, _typeof2.default)(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0, _typeof2.default)(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0, _typeof2.default)(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

// import { draggable, droppable } from 'sprite-draggable';
function install(_ref) {
  var BaseSprite = _ref.BaseSprite,
      utils = _ref.utils;
  var attr = utils.attr,
      parseColorString = utils.parseColorString;

  var ShapeAttr = _decorate(null, function (_initialize, _BaseSprite$Attr) {
    var ShapeAttr =
    /*#__PURE__*/
    function (_BaseSprite$Attr2) {
      (0, _inherits2.default)(ShapeAttr, _BaseSprite$Attr2);

      function ShapeAttr(subject) {
        var _this;

        (0, _classCallCheck2.default)(this, ShapeAttr);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ShapeAttr).call(this, subject));

        _initialize((0, _assertThisInitialized2.default)(_this));

        _this.setDefault({
          color: 'transparent',
          fillColor: 'transparent',
          lineWidth: 0,
          lineCap: 'butt',
          lineJoin: 'miter',
          lineDash: [0, 0],
          lineDashOffset: 0,
          enableCache: false
        });

        return _this;
      } // @attr
      // set draggable(val) {
      //   this.set('draggable', val);
      //   draggable(this.subject, val);
      // }
      // @attr
      // set droppable(val) {
      //   this.set('droppable', val);
      //   droppable(this.subject, val);
      // }


      return ShapeAttr;
    }(_BaseSprite$Attr);

    return {
      F: ShapeAttr,
      d: [{
        kind: "set",
        decorators: [attr],
        key: "lineWidth",
        value: function lineWidth(val) {
          this.set('lineWidth', val);
        }
      }, {
        kind: "set",
        decorators: [attr],
        key: "lineCap",
        value: function lineCap(val) {
          this.set('lineCap', val);
        }
      }, {
        kind: "set",
        decorators: [attr],
        key: "lineJoin",
        value: function lineJoin(val) {
          this.set('lineJoin', val);
        }
      }, {
        kind: "set",
        decorators: [attr],
        key: "lineDash",
        value: function lineDash(val) {
          this.set('lineDash', val);
        }
      }, {
        kind: "set",
        decorators: [attr],
        key: "lineDashOffset",
        value: function lineDashOffset(val) {
          this.set('lineDashOffset', val);
        }
      }, {
        kind: "set",
        decorators: [attr],
        key: "fillColor",
        value: function fillColor(val) {
          val = parseColorString(val);
          this.set('fillColor', val);
        }
      }, {
        kind: "set",
        decorators: [attr],
        key: "strokeColor",
        value: function strokeColor(val) {
          val = parseColorString(val);
          this.set('strokeColor', val);
        }
      }]
    };
  }, BaseSprite.Attr);

  var Shape =
  /*#__PURE__*/
  function (_BaseSprite) {
    (0, _inherits2.default)(Shape, _BaseSprite);

    function Shape() {
      (0, _classCallCheck2.default)(this, Shape);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Shape).apply(this, arguments));
    }

    return Shape;
  }(BaseSprite);

  (0, _defineProperty2.default)(Shape, "Attr", ShapeAttr);
  return {
    Shape: Shape
  };
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1561717981023, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _shape = _interopRequireDefault(require("./shape"));

var _ellipseArc = _interopRequireDefault(require("./ellipseArc"));

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return (0, _toArray2.default)(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0, _typeof2.default)(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0, _typeof2.default)(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0, _typeof2.default)(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr;

  var _use = use(_ellipseArc.default, null, false),
      EllipseArc = _use.EllipseArc;

  var reflow = true;

  var ArcAttr = _decorate(null, function (_initialize, _EllipseArc$Attr) {
    var ArcAttr =
    /*#__PURE__*/
    function (_EllipseArc$Attr2) {
      (0, _inherits2.default)(ArcAttr, _EllipseArc$Attr2);

      function ArcAttr(subject) {
        var _this;

        (0, _classCallCheck2.default)(this, ArcAttr);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ArcAttr).call(this, subject));

        _initialize((0, _assertThisInitialized2.default)(_this));

        _this.setDefault({
          radius: 10
        });

        return _this;
      } // 圆弧起始点


      return ArcAttr;
    }(_EllipseArc$Attr);

    return {
      F: ArcAttr,
      d: [{
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "radius",
        value: function radius(val) {
          this.set('radius', val);
        }
      }]
    };
  }, EllipseArc.Attr);

  var Arc =
  /*#__PURE__*/
  function (_EllipseArc) {
    (0, _inherits2.default)(Arc, _EllipseArc);

    function Arc() {
      (0, _classCallCheck2.default)(this, Arc);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Arc).apply(this, arguments));
    }

    (0, _createClass2.default)(Arc, [{
      key: "radiuses",
      get: function get() {
        var radius = this.attr('radius');
        return [radius, radius];
      }
    }]);
    return Arc;
  }(EllipseArc);

  (0, _defineProperty2.default)(Arc, "Attr", ArcAttr);
  registerNodeType('arc', Arc, false);
  return {
    Arc: Arc
  };
}
}, function(modId) { var map = {"./shape":1561717981022,"./ellipseArc":1561717981024}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1561717981024, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _shape = _interopRequireDefault(require("./shape"));

var _sector = _interopRequireDefault(require("./sector"));

var _util = require("./util");

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return (0, _toArray2.default)(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0, _typeof2.default)(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0, _typeof2.default)(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0, _typeof2.default)(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var findColor = utils.findColor,
      flow = utils.flow;

  var _use = use(_shape.default, null, false),
      Shape = _use.Shape;

  var _use2 = use(_sector.default, null, false),
      Sector = _use2.Sector;

  var EllipseArcAttr =
  /*#__PURE__*/
  function (_Sector$Attr) {
    (0, _inherits2.default)(EllipseArcAttr, _Sector$Attr);

    /* eslint-disable no-useless-constructor */
    function EllipseArcAttr(subject) {
      (0, _classCallCheck2.default)(this, EllipseArcAttr);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf3.default)(EllipseArcAttr).call(this, subject));
    }

    return EllipseArcAttr;
  }(Sector.Attr);

  var EllipseArc = _decorate(null, function (_initialize, _Shape) {
    var EllipseArc =
    /*#__PURE__*/
    function (_Shape2) {
      (0, _inherits2.default)(EllipseArc, _Shape2);

      function EllipseArc() {
        var _getPrototypeOf2;

        var _this;

        (0, _classCallCheck2.default)(this, EllipseArc);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(EllipseArc)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize((0, _assertThisInitialized2.default)(_this));

        return _this;
      }

      return EllipseArc;
    }(_Shape);

    return {
      F: EllipseArc,
      d: [{
        kind: "field",
        static: true,
        key: "Attr",
        value: function value() {
          return EllipseArcAttr;
        }
      }, {
        kind: "get",
        key: "isVirtual",
        value: function isVirtual() {
          return false;
        }
      }, {
        kind: "get",
        decorators: [flow],
        key: "lineBoundings",
        value: function lineBoundings() {
          var _this$radiuses = (0, _slicedToArray2.default)(this.radiuses, 2),
              rx = _this$radiuses[0],
              ry = _this$radiuses[1];

          return [0, 0, 2 * rx, 2 * ry];
        }
      }, {
        kind: "get",
        decorators: [flow],
        key: "contentSize",
        value: function contentSize() {
          var bounds = this.lineBoundings;

          var _ref2 = (0, _toConsumableArray2.default)(this.attrSize),
              width = _ref2[0],
              height = _ref2[1];

          width = bounds[2] - Math.min(0, bounds[0]);
          height = bounds[3] - Math.min(0, bounds[1]);
          return [width, height].map(Math.ceil);
        }
      }, {
        kind: "get",
        key: "radiuses",
        value: function radiuses() {
          return [this.attr('radiusX'), this.attr('radiusY')];
        }
      }, {
        kind: "get",
        key: "center",
        value: function center() {
          var _this$radiuses2 = (0, _slicedToArray2.default)(this.radiuses, 2),
              rx = _this$radiuses2[0],
              ry = _this$radiuses2[1];

          return [rx, ry];
        }
      }, {
        kind: "method",
        key: "pointCollision",
        value: function pointCollision(evt) {
          if ((0, _get2.default)((0, _getPrototypeOf3.default)(EllipseArc.prototype), "pointCollision", this).call(this, evt)) {
            var offsetX = evt.offsetX,
                offsetY = evt.offsetY;

            var _this$attr = this.attr('anchor'),
                _this$attr2 = (0, _slicedToArray2.default)(_this$attr, 2),
                anchorX = _this$attr2[0],
                anchorY = _this$attr2[1];

            var _this$contentSize = (0, _slicedToArray2.default)(this.contentSize, 2),
                width = _this$contentSize[0],
                height = _this$contentSize[1];

            offsetX += width * anchorX;
            offsetY += height * anchorY;
            var lw = this.attr('lineWidth');
            var rx = this.radiuses[0] - lw / 2;
            var ry = this.radiuses[1] - lw / 2;

            var _this$center = (0, _slicedToArray2.default)(this.center, 2),
                cx = _this$center[0],
                cy = _this$center[1];

            var dx = offsetX - cx;
            var dy = offsetY - cy;

            if (Math.abs(Math.pow(dx, 2) / Math.pow(rx, 2) + Math.pow(dy, 2) / Math.pow(ry, 2) - 1) <= 2 * lw / (rx + ry)) {
              var PI2 = 2 * Math.PI;
              var startAngle = this.attr('startAngle') % (2 * PI2);
              var endAngle = this.attr('endAngle') % (2 * PI2);
              if (startAngle < 0) startAngle += PI2;
              if (endAngle < 0) endAngle += PI2;
              var angle = (0, _util.angleOf)([dx, dy]);

              if (angle >= startAngle && angle <= endAngle) {
                return true;
              }
            }
          }
        }
      }, {
        kind: "method",
        key: "render",
        value: function render(t, drawingContext) {
          (0, _get2.default)((0, _getPrototypeOf3.default)(EllipseArc.prototype), "render", this).call(this, t, drawingContext);

          var _this$radiuses3 = (0, _slicedToArray2.default)(this.radiuses, 2),
              radiusX = _this$radiuses3[0],
              radiusY = _this$radiuses3[1];

          var _this$center2 = (0, _slicedToArray2.default)(this.center, 2),
              cx = _this$center2[0],
              cy = _this$center2[1];

          var startAngle = this.attr('startAngle');
          var endAngle = this.attr('endAngle');
          var anticlockwise = this.attr('anticlockwise');
          var lw = this.attr('lineWidth');
          drawingContext.lineCap = this.attr('lineCap');
          drawingContext.lineJoin = this.attr('lineJoin');
          drawingContext.lineWidth = lw;
          drawingContext.strokeStyle = findColor(drawingContext, this, 'color');
          drawingContext.setLineDash(this.attr('lineDash'));
          drawingContext.lineDashOffset = this.attr('lineDashOffset');
          drawingContext.strokeStyle = findColor(drawingContext, this, 'strokeColor');
          drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor');
          drawingContext.beginPath();

          if (drawingContext.ellipse) {
            drawingContext.ellipse(cx, cy, Math.max(0, radiusX - lw / 2), Math.max(0, radiusY - lw / 2), 0, startAngle, endAngle, anticlockwise);
          } else if (radiusX === radiusY) {
            drawingContext.arc(cx, cy, Math.max(0, radiusX - lw / 2), startAngle, endAngle, anticlockwise);
          } else {
            throw new Error("Your browser does'n support canvas ellipse");
          }

          drawingContext.fill();
          drawingContext.stroke();
          return drawingContext;
        }
      }]
    };
  }, Shape);

  registerNodeType('ellipsearc', EllipseArc, false);
  return {
    EllipseArc: EllipseArc
  };
}
}, function(modId) { var map = {"./shape":1561717981022,"./sector":1561717981025,"./util":1561717981027}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1561717981025, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _ellipseSector = _interopRequireDefault(require("./ellipseSector"));

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;

  var _use = use(_ellipseSector.default, null, false),
      EllipseSector = _use.EllipseSector;

  var Sector =
  /*#__PURE__*/
  function (_EllipseSector) {
    (0, _inherits2.default)(Sector, _EllipseSector);

    function Sector() {
      (0, _classCallCheck2.default)(this, Sector);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Sector).apply(this, arguments));
    }

    (0, _createClass2.default)(Sector, [{
      key: "radiuses",
      get: function get() {
        return [this.attr('radius'), this.attr('radius')];
      }
    }]);
    return Sector;
  }(EllipseSector);

  Sector.defineAttributes({
    radius: function radius(attr, val) {
      attr.clearFlow();
      attr.set('radius', val);
    }
  });
  registerNodeType('sector', Sector, false);
  return {
    Sector: Sector
  };
}
}, function(modId) { var map = {"./ellipseSector":1561717981026}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1561717981026, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _shape = _interopRequireDefault(require("./shape"));

var _util = require("./util");

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return (0, _toArray2.default)(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0, _typeof2.default)(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0, _typeof2.default)(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0, _typeof2.default)(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      flow = utils.flow,
      parseColorString = utils.parseColorString,
      findColor = utils.findColor;

  var _use = use(_shape.default, null, false),
      Shape = _use.Shape;

  var reflow = true;

  var EllipseSectorAttr = _decorate(null, function (_initialize, _Shape$Attr) {
    var EllipseSectorAttr =
    /*#__PURE__*/
    function (_Shape$Attr2) {
      (0, _inherits2.default)(EllipseSectorAttr, _Shape$Attr2);

      function EllipseSectorAttr(subject) {
        var _this;

        (0, _classCallCheck2.default)(this, EllipseSectorAttr);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf3.default)(EllipseSectorAttr).call(this, subject));

        _initialize((0, _assertThisInitialized2.default)(_this));

        _this.setDefault({
          radiusX: 10,
          radiusY: 20,
          startAngle: 0,
          endAngle: 0,
          lineWidth: 1,
          anticlockwise: false
        });

        return _this;
      } // 短轴半径


      return EllipseSectorAttr;
    }(_Shape$Attr);

    return {
      F: EllipseSectorAttr,
      d: [{
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "radiusX",
        value: function radiusX(val) {
          this.set('radiusX', val);
        } // 长轴半径

      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "radiusY",
        value: function radiusY(val) {
          this.set('radiusY', val);
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "startAngle",
        value: function startAngle(val) {
          this.set('startAngle', val);
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "endAngle",
        value: function endAngle(val) {
          this.set('endAngle', val);
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "lineWidth",
        value: function lineWidth(val) {
          this.set('lineWidth', val);
        }
      }, {
        kind: "set",
        decorators: [attr],
        key: "fillColor",
        value: function fillColor(val) {
          val = parseColorString(val);
          this.set('fillColor', val);
        }
      }, {
        kind: "set",
        decorators: [attr],
        key: "anticlockwise",
        value: function anticlockwise(val) {
          this.set('anticlockwise', val);
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "center",
        value: function center(val) {
          this.set('center', val);
        }
      }]
    };
  }, Shape.Attr);

  var EllipseSector = _decorate(null, function (_initialize2, _Shape) {
    var EllipseSector =
    /*#__PURE__*/
    function (_Shape2) {
      (0, _inherits2.default)(EllipseSector, _Shape2);

      function EllipseSector() {
        var _getPrototypeOf2;

        var _this2;

        (0, _classCallCheck2.default)(this, EllipseSector);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this2 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(EllipseSector)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize2((0, _assertThisInitialized2.default)(_this2));

        return _this2;
      }

      return EllipseSector;
    }(_Shape);

    return {
      F: EllipseSector,
      d: [{
        kind: "field",
        static: true,
        key: "Attr",
        value: function value() {
          return EllipseSectorAttr;
        }
      }, {
        kind: "get",
        key: "radiuses",
        value: function radiuses() {
          return [this.attr('radiusX'), this.attr('radiusY')];
        }
      }, {
        kind: "get",
        key: "startAngle",
        value: function startAngle() {
          return this.attr('startAngle');
        }
      }, {
        kind: "get",
        key: "endAngle",
        value: function endAngle() {
          return this.attr('endAngle');
        }
      }, {
        kind: "get",
        key: "center",
        value: function center() {
          var lw = this.attr('lineWidth');
          return this.radiuses.map(function (v) {
            return v;
          });
        }
      }, {
        kind: "get",
        key: "lineBoundings",
        value: function lineBoundings() {
          return [0, 0, 2 * this.radiuses[0], 2 * this.radiuses[1]];
        }
      }, {
        kind: "get",
        decorators: [flow],
        key: "contentSize",
        value: function contentSize() {
          var bounds = this.lineBoundings;
          var lw = this.attr('lineWidth');

          var _ref2 = (0, _toConsumableArray2.default)(this.attrSize),
              width = _ref2[0],
              height = _ref2[1];

          width = bounds[2] - Math.min(0, bounds[0]);
          height = bounds[3] - Math.min(0, bounds[1]);
          return [width, height].map(Math.ceil);
        } // @flow
        // get originalRect() {
        //   const lineBoundings = this.lineBoundings;
        //   const [x, y, w, h] = super.originalRect;
        //   const rect = [x - lineBoundings[0] / 2, y - lineBoundings[1] / 2, w, h];
        //   return rect;
        // }

      }, {
        kind: "method",
        key: "pointCollision",
        value: function pointCollision(evt) {
          if ((0, _get2.default)((0, _getPrototypeOf3.default)(EllipseSector.prototype), "pointCollision", this).call(this, evt)) {
            var offsetX = evt.offsetX,
                offsetY = evt.offsetY; // FIXME: 如果事件是改变半径大小，会导致contentSize变化，如何避免？

            var _this$attr = this.attr('anchor'),
                _this$attr2 = (0, _slicedToArray2.default)(_this$attr, 2),
                anchorX = _this$attr2[0],
                anchorY = _this$attr2[1];

            var _this$contentSize = (0, _slicedToArray2.default)(this.contentSize, 2),
                width = _this$contentSize[0],
                height = _this$contentSize[1];

            offsetX += width * anchorX;
            offsetY += height * anchorY;

            var _this$center = (0, _slicedToArray2.default)(this.center, 2),
                x = _this$center[0],
                y = _this$center[1];

            var _this$radiuses = (0, _slicedToArray2.default)(this.radiuses, 2),
                rx = _this$radiuses[0],
                ry = _this$radiuses[1];

            var dx = offsetX - x;
            var dy = offsetY - y;

            if (Math.pow(dx, 2) / Math.pow(rx, 2) + Math.pow(dy, 2) / Math.pow(ry, 2) <= 1.0) {
              var PI2 = 2 * Math.PI;
              var startAngle = this.startAngle;
              var endAngle = this.endAngle;

              if (endAngle - startAngle >= PI2) {
                startAngle = 0;
                endAngle = PI2;
              } else {
                if (startAngle >= 0 && endAngle >= 0) {
                  var offsetAngle = endAngle - startAngle;
                  startAngle %= PI2;
                  endAngle = startAngle + offsetAngle;
                } else {
                  var nTPositive = function nTPositive(angle) {
                    // 使其落入 [0, PI2]区间
                    var PI2 = 2 * Math.PI;
                    var isNegative = angle < 0;
                    var T = isNegative ? -Math.floor(angle / PI2) : Math.ceil(angle / PI2);
                    return (angle + T * PI2) % PI2;
                  };

                  endAngle = nTPositive(endAngle) + (startAngle <= 0 && startAngle >= endAngle ? PI2 : endAngle > 0 ? PI2 : 0);
                  startAngle = nTPositive(startAngle);
                }
              }

              var angle = (0, _util.angleOf)([dx, dy]);

              if (endAngle > PI2) {
                var m = endAngle - PI2;

                if (0 <= angle && angle <= m) {
                  angle += PI2;
                }
              }

              return angle >= startAngle && angle <= endAngle;
            } // TODO: 处理 lineCap?

          }
        }
      }, {
        kind: "method",
        key: "render",
        value: function render(t, ctx) {
          (0, _get2.default)((0, _getPrototypeOf3.default)(EllipseSector.prototype), "render", this).call(this, t, ctx);

          var _this$center2 = (0, _slicedToArray2.default)(this.center, 2),
              x = _this$center2[0],
              y = _this$center2[1];

          var _this$radiuses2 = (0, _slicedToArray2.default)(this.radiuses, 2),
              rx = _this$radiuses2[0],
              ry = _this$radiuses2[1];

          var startAngle = this.startAngle;
          var endAngle = this.endAngle;
          var lw = this.attr('lineWidth');
          ctx.miterLimit = 3;
          ctx.miterLimit = 3;
          ctx.lineCap = this.attr('lineCap');
          ctx.lineJoin = this.attr('lineJoin');
          ctx.lineWidth = lw;
          ctx.strokeStyle = findColor(ctx, this, 'strokeColor');
          ctx.setLineDash(this.attr('lineDash'));
          ctx.lineDashOffset = this.attr('lineDashOffset');
          ctx.strokeStyle = findColor(ctx, this, 'strokeColor');
          ctx.fillStyle = findColor(ctx, this, 'fillColor');
          ctx.beginPath();

          if (this.endAngle - this.startAngle < Math.PI * 2) {
            ctx.moveTo(x, y);
          }

          if (ctx.ellipse) {
            ctx.ellipse(x, y, Math.max(0, rx - lw / 2), Math.max(0, ry - lw / 2), 0, startAngle, endAngle, this.attr('anticlockwise'));
            ctx.closePath();
          } else if (rx === ry) {
            ctx.arc(x, y, Math.max(0, rx - lw / 2), startAngle, endAngle, this.attr('anticlockwise'));
            ctx.closePath();
          } else {
            throw new Error("Your browser does'n support canvas ellipse");
          }

          ctx.fill();
          ctx.stroke();
          return ctx;
        }
      }]
    };
  }, Shape);

  registerNodeType('ellipsesector', EllipseSector, false);
  return {
    EllipseSector: EllipseSector
  };
}
}, function(modId) { var map = {"./shape":1561717981022,"./util":1561717981027}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1561717981027, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSmoothCurveLine = makeSmoothCurveLine;
exports.drawSmoothCurveLine = drawSmoothCurveLine;
exports.angleOf = angleOf;
exports.pointsEqual = pointsEqual;
exports.round = exports.sin = exports.cos = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var cos = function cos(angle) {
  return Number(Math.cos(angle).toFixed(15));
};

exports.cos = cos;

var sin = function sin(angle) {
  return Number(Math.sin(angle).toFixed(15));
};

exports.sin = sin;

var round = function round(v) {
  return Math.round(v);
};
/**
 * 使用 贝塞尔曲线 模拟绘制平滑曲线
 * @param {*} points 绘制点
 */


exports.round = round;

function makeSmoothCurveLine(points, smoothStart) {
  /**
   * 获取 模拟贝塞尔曲线关键控制点
   * @param {*} i
   * @param {*} a
   * @param {*} b
   */
  function getCtrlPoint(i) {
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
    var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.1;
    var x0;
    var y0;
    var x1;
    var y1;

    if (points[i].x === points[i + 1].x || points[i].y === points[i + 1].y) {
      a = 0;
      b = 0;
    }

    if (i < 1) {
      x0 = points[0].x + (points[1].x - points[0].x) * a;
      y0 = points[0].y + (points[1].y - points[0].y) * a;
    } else {
      x0 = points[i].x + (points[i + 1].x - points[i - 1].x) * a;
      y0 = points[i].y + (points[i + 1].y - points[i - 1].y) * a;
    }

    if (i > points.length - 3) {
      var last = points.length - 1;
      x1 = points[last].x - (points[last].x - points[last - 1].x) * b;
      y1 = points[last].y - (points[last].y - points[last - 1].y) * b;
    } else {
      x1 = points[i + 1].x - (points[i + 2].x - points[i].x) * b;
      y1 = points[i + 1].y - (points[i + 2].y - points[i].y) * b;
    }

    return [{
      x: x0,
      y: y0
    }, {
      x: x1,
      y: y1
    }];
  }

  points = points.map(function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        x = _ref2[0],
        y = _ref2[1];

    return {
      x: x,
      y: y
    };
  });
  var d = '';
  points.forEach(function (point, i) {
    if (i === 0 && smoothStart === 0) {
      // 从第0个点开始绘制曲线
      d += "M".concat(point.x, " ").concat(point.y);
    } else if (i === 0 && smoothStart !== 0) {
      // 不是从第一个开始曲线
      d += "L".concat(point.x, " ").concat(point.y);
    } else {
      var _getCtrlPoint = getCtrlPoint(i - 1),
          _getCtrlPoint2 = (0, _slicedToArray2.default)(_getCtrlPoint, 2),
          A = _getCtrlPoint2[0],
          B = _getCtrlPoint2[1];

      d += "C".concat([A.x, A.y, B.x, B.y, point.x, point.y].join(' '));
    }
  });
  return d;
}
/**
 * 使用 贝塞尔曲线 模拟绘制平滑曲线
 * @param {*} ctx 绘制上下文,如:Context2D
 * @param {*} points 绘制点
 */


function drawSmoothCurveLine(ctx, points, smoothStart) {
  /**
   * 获取 模拟贝塞尔曲线关键控制点
   * @param {*} i
   * @param {*} a
   * @param {*} b
   */
  function getCtrlPoint(i) {
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
    var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.1;
    var x0;
    var y0;
    var x1;
    var y1;

    if (points[i].x === points[i + 1].x || points[i].y === points[i + 1].y) {
      a = 0;
      b = 0;
    }

    if (i < 1) {
      x0 = points[0].x + (points[1].x - points[0].x) * a;
      y0 = points[0].y + (points[1].y - points[0].y) * a;
    } else {
      x0 = points[i].x + (points[i + 1].x - points[i - 1].x) * a;
      y0 = points[i].y + (points[i + 1].y - points[i - 1].y) * a;
    }

    if (i > points.length - 3) {
      var last = points.length - 1;
      x1 = points[last].x - (points[last].x - points[last - 1].x) * b;
      y1 = points[last].y - (points[last].y - points[last - 1].y) * b;
    } else {
      x1 = points[i + 1].x - (points[i + 2].x - points[i].x) * b;
      y1 = points[i + 1].y - (points[i + 2].y - points[i].y) * b;
    }

    return [{
      x: x0,
      y: y0
    }, {
      x: x1,
      y: y1
    }];
  }

  points = points.map(function (_ref3) {
    var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
        x = _ref4[0],
        y = _ref4[1];

    return {
      x: x,
      y: y
    };
  });
  points.forEach(function (point, i) {
    if (i === 0 && smoothStart === 0) {
      // 从第0个点开始绘制曲线
      ctx.moveTo(point.x, point.y);
    } else if (i === 0 && smoothStart !== 0) {
      // 不是从第一个开始曲线
      ctx.lineTo(point.x, point.y);
    } else {
      var _getCtrlPoint3 = getCtrlPoint(i - 1),
          _getCtrlPoint4 = (0, _slicedToArray2.default)(_getCtrlPoint3, 2),
          A = _getCtrlPoint4[0],
          B = _getCtrlPoint4[1];

      ctx.bezierCurveTo(A.x, A.y, B.x, B.y, point.x, point.y);
    }
  });
}

function angleOf(v1) {
  var v2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [1, 0];
  var ang = Math.atan2(v1[1], v1[0]) - Math.atan2(v2[1], v2[0]);
  if (ang < 0.0) ang += 2.0 * Math.PI;
  return ang;
}

function pointsEqual(p1, p2) {
  if (p1.length !== p2.length) return false;

  for (var i = 0; i < p1.length; i++) {
    if (p1[i][0] !== p2[i][0] || p1[i][1] !== p2[i][1]) return false;
  }

  return true;
}
}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1561717981028, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _shape = _interopRequireDefault(require("./shape"));

var _svgPathToCanvas = _interopRequireDefault(require("svg-path-to-canvas"));

var _util = require("./util");

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return (0, _toArray2.default)(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0, _typeof2.default)(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0, _typeof2.default)(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0, _typeof2.default)(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      findColor = utils.findColor;

  var _use = use(_shape.default, null, false),
      Shape = _use.Shape;

  var reflow = true;

  var PolylineAttr = _decorate(null, function (_initialize, _Shape$Attr) {
    var PolylineAttr =
    /*#__PURE__*/
    function (_Shape$Attr2) {
      (0, _inherits2.default)(PolylineAttr, _Shape$Attr2);

      function PolylineAttr(subject) {
        var _this;

        (0, _classCallCheck2.default)(this, PolylineAttr);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(PolylineAttr).call(this, subject));

        _initialize((0, _assertThisInitialized2.default)(_this));

        _this.setDefault({
          points: null,
          close: false,
          smooth: false,
          tolerance: 6
        });

        return _this;
      }

      return PolylineAttr;
    }(_Shape$Attr);

    return {
      F: PolylineAttr,
      d: [{
        kind: "set",
        decorators: [attr],
        key: "tolerance",
        value: function tolerance(val) {
          this.set('tolerance', val);
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "points",
        value: function points(val) {
          this.set('points', val);
          this.subject.path = null;
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "smooth",
        value: function smooth(val) {
          this.set('smooth', val);
          this.subject.path = null;
        }
      }, {
        kind: "set",
        decorators: [attr],
        key: "close",
        value: function close(val) {
          this.set('close', val);
          this.subject.path = null;
        }
      }]
    };
  }, Shape.Attr);

  var Polyline =
  /*#__PURE__*/
  function (_Shape) {
    (0, _inherits2.default)(Polyline, _Shape);

    function Polyline() {
      (0, _classCallCheck2.default)(this, Polyline);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Polyline).apply(this, arguments));
    }

    (0, _createClass2.default)(Polyline, [{
      key: "pointCollision",
      value: function pointCollision(evt) {
        (0, _get2.default)((0, _getPrototypeOf2.default)(Polyline.prototype), "pointCollision", this).call(this, evt);
        var offsetX = evt.offsetX,
            offsetY = evt.offsetY;
        var cacheLineWidth = this.context.lineWidth; // 获取当前画布的lineWidth宽度

        var tolerance = this.attr('tolerance'); // 线条点击的容差像素值，默认6px

        var res = false;
        var path = this.path;

        if (path) {
          var lineWidth = this.attr('lineWidth') + tolerance,
              lineCap = this.attr('lineCap'),
              lineJoin = this.attr('lineJoin');

          if (this.attr('close')) {
            res = path.isPointInPath(offsetX, offsetY);
          }

          res |= path.isPointInStroke(offsetX, offsetY, {
            lineWidth: lineWidth,
            lineCap: lineCap,
            lineJoin: lineJoin
          });
        }

        return res;
      }
    }, {
      key: "render",
      value: function render(t, drawingContext) {
        (0, _get2.default)((0, _getPrototypeOf2.default)(Polyline.prototype), "render", this).call(this, t, drawingContext);

        if (this.points) {
          var lw = this.attr('lineWidth');
          drawingContext.fillStyle = this.attr('fillColor');
          drawingContext.strokeStyle = findColor(drawingContext, this, 'strokeColor');
          drawingContext.lineJoin = this.attr('lineJoin');
          drawingContext.lineCap = this.attr('lineCap');
          drawingContext.lineWidth = lw;
          drawingContext.setLineDash(this.attr('lineDash'));
          drawingContext.lineDashOffset = this.attr('lineDashOffset'); // drawingContext.translate(lw / 2, lw / 2);

          if (!this.path || !(0, _util.pointsEqual)(this.path.points, this.points)) {
            var smooth = this.attr('smooth');
            var d = '';

            if (smooth) {
              d += (0, _util.makeSmoothCurveLine)(this.points, 0);
            } else {
              this.points.forEach(function (point, i) {
                if (i === 0) {
                  d += "M".concat(point.join(' '));
                } else {
                  d += "L".concat(point.join(' '));
                }
              });
            }

            if (this.attr('close')) {
              d += 'Z';
            }

            this.path = new _svgPathToCanvas.default(d);
            this.path.points = (0, _toConsumableArray2.default)(this.points);
          }

          if (this.path) {
            this.path.beginPath().to(drawingContext);
            drawingContext.fill();
            drawingContext.stroke();
          }
        }

        return drawingContext;
      }
    }, {
      key: "points",
      get: function get() {
        return this.attr('points');
      }
    }, {
      key: "isVirtual",
      get: function get() {
        return true;
      }
    }]);
    return Polyline;
  }(Shape);

  (0, _defineProperty2.default)(Polyline, "Attr", PolylineAttr);
  registerNodeType('polyline', Polyline, false);
  return {
    Polyline: Polyline
  };
}
}, function(modId) { var map = {"./shape":1561717981022,"./util":1561717981027}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1561717981029, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _get4 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _shape = _interopRequireDefault(require("./shape"));

var _svgPathToCanvas = _interopRequireDefault(require("svg-path-to-canvas"));

var _util = require("./util");

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return (0, _toArray2.default)(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0, _typeof2.default)(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0, _typeof2.default)(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0, _typeof2.default)(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      findColor = utils.findColor,
      flow = utils.flow;

  var _use = use(_shape.default, null, false),
      Shape = _use.Shape;

  var reflow = true;

  var PolycurveAttr = _decorate(null, function (_initialize, _Shape$Attr) {
    var PolycurveAttr =
    /*#__PURE__*/
    function (_Shape$Attr2) {
      (0, _inherits2.default)(PolycurveAttr, _Shape$Attr2);

      function PolycurveAttr(subject) {
        var _this;

        (0, _classCallCheck2.default)(this, PolycurveAttr);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf3.default)(PolycurveAttr).call(this, subject));

        _initialize((0, _assertThisInitialized2.default)(_this));

        _this.setDefault({
          points: [],
          startPoint: null
        });

        return _this;
      }

      return PolycurveAttr;
    }(_Shape$Attr);

    return {
      F: PolycurveAttr,
      d: [{
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "points",
        value: function points(val) {
          this.set('points', val);
          this.subject.path = null;
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "startPoint",
        value: function startPoint(val) {
          this.set('startPoint', val);
          this.subject.path = null;
        }
      }]
    };
  }, Shape.Attr);

  var Polycurve = _decorate(null, function (_initialize2, _Shape) {
    var Polycurve =
    /*#__PURE__*/
    function (_Shape2) {
      (0, _inherits2.default)(Polycurve, _Shape2);

      function Polycurve() {
        var _getPrototypeOf2;

        var _this2;

        (0, _classCallCheck2.default)(this, Polycurve);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this2 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Polycurve)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize2((0, _assertThisInitialized2.default)(_this2));

        return _this2;
      }

      return Polycurve;
    }(_Shape);

    return {
      F: Polycurve,
      d: [{
        kind: "field",
        static: true,
        key: "Attr",
        value: function value() {
          return PolycurveAttr;
        }
      }, {
        kind: "get",
        key: "points",
        value: function points() {
          return this.attr('points');
        }
      }, {
        kind: "get",
        key: "lineBoundings",
        value: function lineBoundings() {
          var startPoint = this.attr('startPoint');
          var points = startPoint && startPoint.length === 2 ? (0, _toConsumableArray2.default)(startPoint) : [];
          var ps = this.points;
          ps.forEach(function (p) {
            return points.push.apply(points, p);
          });
          var minX = 0;
          var maxX = 0;
          var minY = 0;
          var maxY = 0;
          points.forEach(function (point, i) {
            if (i % 2 === 0) {
              if (point < minX) {
                minX = point;
              } else if (point > maxX) {
                maxX = point;
              }
            } else {
              if (point < minY) {
                minY = point;
              } else if (point > maxY) {
                maxY = point;
              }
            }
          });
          return [minX, minY, maxX, maxY];
        }
      }, {
        kind: "get",
        decorators: [flow],
        key: "contentSize",
        value: function contentSize() {
          var bounds = this.lineBoundings;
          var lw = this.attr('lineWidth');

          var _this$attrSize = (0, _slicedToArray2.default)(this.attrSize, 2),
              width = _this$attrSize[0],
              height = _this$attrSize[1];

          if (width === '') {
            width = bounds[2] - Math.min(0, bounds[0]) + lw * 2;
          }

          if (height === '') {
            height = bounds[3] - Math.min(0, bounds[1]) + lw * 2;
          }

          return [width, height].map(Math.ceil);
        }
      }, {
        kind: "get",
        decorators: [flow],
        key: "originalRect",
        value: function originalRect() {
          var lineBoundings = this.lineBoundings;

          var _get2 = (0, _get4.default)((0, _getPrototypeOf3.default)(Polycurve.prototype), "originalRect", this),
              _get3 = (0, _slicedToArray2.default)(_get2, 4),
              x = _get3[0],
              y = _get3[1],
              w = _get3[2],
              h = _get3[3];

          var rect = [x - lineBoundings[0], y - lineBoundings[1], w, h];
          return rect;
        }
      }, {
        kind: "get",
        key: "isVirtual",
        value: function isVirtual() {
          return false;
        }
      }, {
        kind: "method",
        key: "updatePath",
        value: function updatePath() {
          var startPoint = this.attr('startPoint');
          var points = this.points;
          var d = '';

          if (startPoint && startPoint.length === 2) {
            d += "M".concat(startPoint.join(' '));
          }

          points.forEach(function (point) {
            var _point = (0, _slicedToArray2.default)(point, 6),
                cp1x = _point[0],
                cp1y = _point[1],
                cp2x = _point[2],
                cp2y = _point[3],
                x = _point[4],
                y = _point[5];

            d += "C".concat([cp1x, cp1y, cp2x, cp2y, x, y].join(' '));
          });
          var svgpath = new _svgPathToCanvas.default(d);
          this.path = svgpath;
          this.path.points = (0, _toConsumableArray2.default)(points);
        }
      }, {
        kind: "method",
        key: "pointCollision",
        value: function pointCollision(evt) {
          if ((0, _get4.default)((0, _getPrototypeOf3.default)(Polycurve.prototype), "pointCollision", this).call(this, evt)) {
            var offsetX = evt.offsetX,
                offsetY = evt.offsetY;

            var _this$attr = this.attr('anchor'),
                _this$attr2 = (0, _slicedToArray2.default)(_this$attr, 2),
                anchorX = _this$attr2[0],
                anchorY = _this$attr2[1];

            var _this$contentSize = (0, _slicedToArray2.default)(this.contentSize, 2),
                width = _this$contentSize[0],
                height = _this$contentSize[1];

            offsetX += width * anchorX;
            offsetY += height * anchorY;
            var path = this.path;

            if (path) {
              var lineWidth = this.attr('lineWidth'),
                  lineCap = this.attr('lineCap'),
                  lineJoin = this.attr('lineJoin');
              return path.isPointInPath(offsetX, offsetY) || path.isPointInStroke(offsetX, offsetY, {
                lineWidth: lineWidth,
                lineCap: lineCap,
                lineJoin: lineJoin
              });
            }

            return false;
          }
        }
      }, {
        kind: "method",
        key: "render",
        value: function render(t, ctx) {
          (0, _get4.default)((0, _getPrototypeOf3.default)(Polycurve.prototype), "render", this).call(this, t, ctx);
          var points = this.points;
          var startPoint = this.attr('startPoint');
          var lw = this.attr('lineWidth');
          ctx.lineCap = this.attr('lineCap');
          ctx.lineJoin = this.attr('lineJoin');
          ctx.lineWidth = lw;
          ctx.setLineDash(this.attr('lineDash'));
          ctx.lineDashOffset = this.attr('lineDashOffset');
          ctx.fillStyle = this.attr('fillColor');
          ctx.strokeStyle = findColor(ctx, this, 'strokeColor');
          if (!this.path || !(0, _util.pointsEqual)(this.path.points, points)) this.updatePath();

          if (this.path) {
            this.path.beginPath().to(ctx);
            ctx.fill();
            ctx.stroke();
          }

          return ctx;
        }
      }]
    };
  }, Shape);

  registerNodeType('polycurve', Polycurve, false);
  return {
    Polycurve: Polycurve
  };
}
}, function(modId) { var map = {"./shape":1561717981022,"./util":1561717981027}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1561717981030, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _get4 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _svgPathToCanvas = _interopRequireDefault(require("svg-path-to-canvas"));

var _shape = _interopRequireDefault(require("./shape"));

var _util = require("./util");

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return (0, _toArray2.default)(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0, _typeof2.default)(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0, _typeof2.default)(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0, _typeof2.default)(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      findColor = utils.findColor,
      flow = utils.flow;

  var _use = use(_shape.default, null, false),
      Shape = _use.Shape;

  var reflow = true;

  var WaveAttr = _decorate(null, function (_initialize, _Shape$Attr) {
    var WaveAttr =
    /*#__PURE__*/
    function (_Shape$Attr2) {
      (0, _inherits2.default)(WaveAttr, _Shape$Attr2);

      function WaveAttr(subject) {
        var _this;

        (0, _classCallCheck2.default)(this, WaveAttr);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf3.default)(WaveAttr).call(this, subject));

        _initialize((0, _assertThisInitialized2.default)(_this));

        _this.setDefault({
          radius: 50,
          offset: 10,
          amplitude: 0,
          // 振幅
          percent: 0,
          // 当为数组时将渲染多个 波浪线
          wavesColor: '#000',
          // 波浪线颜色
          shape: '',
          // 可以使用 svg path，默认圆
          shapeScale: 1,
          // 当使用 svg path 时可能需要进行适当比例缩放
          shapeColor: '#000',
          // svgpath 边框颜色
          shapeFillColor: 'transparent',
          // svgpath 背景颜色
          showOutline: true,
          // 用于控制是否显示外圈圆环，当 shape 为 svg path 将强制不显示
          outlineColor: '#000',
          // 外圆环颜色
          speed: 0 // 用于控制移动速度，主要是提供一个可以修改的属性，配合 spritejs 动画用

        });

        return _this;
      }

      return WaveAttr;
    }(_Shape$Attr);

    return {
      F: WaveAttr,
      d: [{
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "radius",
        value: function radius(val) {
          this.set('radius', val);
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "offset",
        value: function offset(val) {
          this.set('offset', val);
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "amplitude",
        value: function amplitude(val) {
          this.set('amplitude', val);
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "speed",
        value: function speed(val) {
          this.set('speed', val);
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "percent",
        value: function percent(val) {
          this.set('percent', val);
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "wavesColor",
        value: function wavesColor(val) {
          this.set('wavesColor', val);
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "shape",
        value: function shape(val) {
          this.set('shape', val);
        }
      }]
    };
  }, Shape.Attr);

  var Wave = _decorate(null, function (_initialize2, _Shape) {
    var Wave =
    /*#__PURE__*/
    function (_Shape2) {
      (0, _inherits2.default)(Wave, _Shape2);

      function Wave() {
        var _getPrototypeOf2;

        var _this2;

        (0, _classCallCheck2.default)(this, Wave);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this2 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Wave)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize2((0, _assertThisInitialized2.default)(_this2));

        return _this2;
      }

      return Wave;
    }(_Shape);

    return {
      F: Wave,
      d: [{
        kind: "field",
        static: true,
        key: "Attr",
        value: function value() {
          return WaveAttr;
        }
      }, {
        kind: "get",
        key: "isVirtual",
        value: function isVirtual() {
          return false;
        }
      }, {
        kind: "get",
        decorators: [flow],
        key: "lineBoundings",
        value: function lineBoundings() {
          var lw = this.attr('lineWidth');

          if (this.attr('shape')) {
            var svgpath = new _svgPathToCanvas.default(this.attr('shape'));
            svgpath.scale(this.attr('shapeScale')).lineWidth(lw).trim();
            return [-lw, -lw].concat((0, _toConsumableArray2.default)(svgpath.size.map(function (v) {
              return v += lw;
            })));
          }

          var len = lw + this.attr('radius') + this.attr('offset');
          return [lw, lw, 2 * len, 2 * len];
        }
      }, {
        kind: "get",
        decorators: [flow],
        key: "contentSize",
        value: function contentSize() {
          var bounds = this.lineBoundings;

          var _this$attrSize = (0, _slicedToArray2.default)(this.attrSize, 2),
              width = _this$attrSize[0],
              height = _this$attrSize[1];

          if (width == '') {
            width = bounds[2] - Math.min(0, bounds[0]);
          }

          if (height == '') {
            height = bounds[3] - Math.min(0, bounds[1]);
          }

          return [width, height].map(Math.ceil);
        }
      }, {
        kind: "get",
        decorators: [flow],
        key: "originalRect",
        value: function originalRect() {
          var lineBoundings = this.lineBoundings;

          var _get2 = (0, _get4.default)((0, _getPrototypeOf3.default)(Wave.prototype), "originalRect", this),
              _get3 = (0, _slicedToArray2.default)(_get2, 4),
              x = _get3[0],
              y = _get3[1],
              w = _get3[2],
              h = _get3[3];

          var rect = [x - lineBoundings[0] / 2, y - lineBoundings[1] / 2, w, h];
          return rect;
        }
      }, {
        kind: "method",
        key: "render",
        value: function render(t, ctx) {
          var _this3 = this;

          (0, _get4.default)((0, _getPrototypeOf3.default)(Wave.prototype), "render", this).call(this, t, ctx);
          var lw = this.attr('lineWidth');
          var radius = this.attr('radius');
          var offset = this.attr('offset');
          var shape = this.attr('shape');
          var showOutline = this.attr('showOutline');
          var AMPLITUDE = this.attr('amplitude') || radius / 10;
          ctx.save();
          var cx;
          var cy;
          var horizontalLength;
          var verticalLength;
          var svgpath;

          if (!shape) {
            cx = lw + radius + offset;
            cy = lw + radius + offset;
            horizontalLength = verticalLength = radius;
          } else {
            svgpath = new _svgPathToCanvas.default(shape);

            var _svgpath$center = (0, _slicedToArray2.default)(svgpath.center, 2);

            cx = _svgpath$center[0];
            cy = _svgpath$center[1];

            var _svgpath$size$map = svgpath.size.map(function (v) {
              return (v + lw) / 2;
            });

            var _svgpath$size$map2 = (0, _slicedToArray2.default)(_svgpath$size$map, 2);

            horizontalLength = _svgpath$size$map2[0];
            verticalLength = _svgpath$size$map2[1];
          }

          if (showOutline && !svgpath) {
            // 外接圆
            ctx.beginPath();
            ctx.strokeStyle = this.attr('outlineColor');
            ctx.lineWidth = lw;
            ctx.arc(cx, cy, Math.min(horizontalLength, verticalLength) + offset, 0, Math.PI * 2, false);
            ctx.stroke();
          }

          if (!svgpath) {
            // 内接圆设为剪辑区域;
            ctx.beginPath();
            ctx.arc(cx, cy + 0, Math.min(horizontalLength, verticalLength), 0, Math.PI * 2, false);
          } else {
            ctx.translate(lw, lw);
            svgpath.save().beginPath().strokeStyle(this.attr('shapeColor')).fillStyle(this.attr('shapeFillColor')).scale(this.attr('shapeScale')).lineWidth(lw).trim().to(ctx).fill().stroke();

            var _svgpath$center2 = (0, _slicedToArray2.default)(svgpath.center, 2);

            cx = _svgpath$center2[0];
            cy = _svgpath$center2[1];

            var _svgpath$size$map3 = svgpath.size.map(function (v) {
              return (v + lw * 2) / 2;
            });

            var _svgpath$size$map4 = (0, _slicedToArray2.default)(_svgpath$size$map3, 2);

            horizontalLength = _svgpath$size$map4[0];
            verticalLength = _svgpath$size$map4[1];
          }

          ctx.clip(); // 绘制正弦曲线

          var colors = this.attr('wavesColor');
          var percent = this.attr('percent');

          if (!Array.isArray(percent)) {
            percent = [percent];
          }

          if (!Array.isArray(colors)) {
            colors = [colors];
          }

          percent.map(function (percent, i) {
            percent = percent > 1 ? 1 : percent;
            var y = 0;

            if (_this3.attr('shape')) {
              // 使用 svgPath
              y = -(percent - 0.5) * verticalLength * 2;
            } else {
              var startAngle = 0;

              if (percent <= 0.5) {
                startAngle = 0.25 - percent / 2;
              } else if (percent < 1) {
                startAngle = 0 - (percent - 0.5) / 2;
              } else {
                startAngle = 0;
              }

              startAngle *= Math.PI * 2;
              var sinVal = percent >= 1 ? -1 : (0, _util.sin)(startAngle / 2);
              y = (0, _util.round)(radius * sinVal);
            }

            var A = (radius / 20 * (0, _util.sin)(percent * Math.PI) + i * 10 + AMPLITUDE) / 2; // 振幅;

            var W = Math.PI * 2 / 200;
            var H = cy + y + i * 5;

            var Q = _this3.attr('speed');

            ctx.beginPath();
            ctx.moveTo(cx - horizontalLength, cy);

            for (var x = cx - horizontalLength; x <= cx + horizontalLength; x++) {
              // 三角函数公式：y=Asin（wx+φ）+h
              var _y = A * (i % 2 ? Math.sin : Math.cos)(W * x + Q) + H;

              ctx.lineTo(x, _y);
            } // 向下形成闭合区域


            ctx.lineTo(cx + horizontalLength, cy + verticalLength);
            ctx.lineTo(cx - horizontalLength, cy + verticalLength);
            ctx.lineTo(cx - horizontalLength, cy);
            ctx.fillStyle = colors[i] || colors[0];
            ctx.fill();
            ctx.closePath();
          });
          ctx.restore();
        }
      }]
    };
  }, Shape);

  registerNodeType('wave', Wave, false);
  return {
    Wave: Wave
  };
}
}, function(modId) { var map = {"./shape":1561717981022,"./util":1561717981027}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1561717981031, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _get4 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _shape = _interopRequireDefault(require("./shape"));

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return (0, _toArray2.default)(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0, _typeof2.default)(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0, _typeof2.default)(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0, _typeof2.default)(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      flow = utils.flow,
      findColor = utils.findColor;

  var _use = use(_shape.default, null, false),
      Shape = _use.Shape;

  var reflow = true;

  var RingAttr = _decorate(null, function (_initialize, _Shape$Attr) {
    var RingAttr =
    /*#__PURE__*/
    function (_Shape$Attr2) {
      (0, _inherits2.default)(RingAttr, _Shape$Attr2);

      function RingAttr(subject) {
        var _this;

        (0, _classCallCheck2.default)(this, RingAttr);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf3.default)(RingAttr).call(this, subject));

        _initialize((0, _assertThisInitialized2.default)(_this));

        _this.setDefault({
          innerRaius: 10,
          outerRadius: 20,
          startAngle: 0,
          endAngle: Math.PI * 2,
          lineWidth: 1,
          maxRadius: 0 // 当需要绘制多个环且环的半径不一致,为了统一圆心,所设属性

        });

        return _this;
      } // 内圆半径


      return RingAttr;
    }(_Shape$Attr);

    return {
      F: RingAttr,
      d: [{
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "innerRadius",
        value: function innerRadius(val) {
          this.set('innerRadius', val);
        } // 外圆半径

      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "outerRadius",
        value: function outerRadius(val) {
          this.set('outerRadius', val);
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "maxRadius",
        value: function maxRadius(val) {
          this.set('maxRadius', val);
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "startAngle",
        value: function startAngle(val) {
          this.set('startAngle', val);
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "endAngle",
        value: function endAngle(val) {
          this.set('endAngle', val);
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "center",
        value: function center(val) {
          this.set('center', val);
        }
      }]
    };
  }, Shape.Attr);

  var Ring = _decorate(null, function (_initialize2, _Shape) {
    var Ring =
    /*#__PURE__*/
    function (_Shape2) {
      (0, _inherits2.default)(Ring, _Shape2);

      function Ring() {
        var _getPrototypeOf2;

        var _this2;

        (0, _classCallCheck2.default)(this, Ring);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this2 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Ring)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize2((0, _assertThisInitialized2.default)(_this2));

        return _this2;
      }

      return Ring;
    }(_Shape);

    return {
      F: Ring,
      d: [{
        kind: "field",
        static: true,
        key: "Attr",
        value: function value() {
          return RingAttr;
        }
      }, {
        kind: "get",
        key: "lineBoundings",
        value: // 边界依赖于最大圆
        function lineBoundings() {
          var maxRadius = this.attr('maxRadius');

          if (maxRadius <= 0) {
            var radius = Math.max(this.attr('innerRadius'), this.attr('outerRadius'));
            maxRadius = radius;
          }

          return [0, 0, 2 * maxRadius, 2 * maxRadius];
        }
      }, {
        kind: "get",
        key: "startAngle",
        value: function startAngle() {
          return this.attr('startAngle');
        }
      }, {
        kind: "get",
        key: "endAngle",
        value: function endAngle() {
          return this.attr('endAngle');
        }
      }, {
        kind: "get",
        decorators: [flow],
        key: "contentSize",
        value: function contentSize() {
          var bounds = this.lineBoundings;
          var lw = this.attr('lineWidth');

          var _this$attrSize = (0, _slicedToArray2.default)(this.attrSize, 2),
              width = _this$attrSize[0],
              height = _this$attrSize[1];

          width = bounds[2] - Math.min(0, bounds[0]);
          height = bounds[3] - Math.min(0, bounds[1]);
          return [width, height].map(Math.ceil);
        }
      }, {
        kind: "get",
        decorators: [flow],
        key: "originalRect",
        value: function originalRect() {
          var lineBoundings = this.lineBoundings;
          var lw = this.attr('lineWidth');

          var _get2 = (0, _get4.default)((0, _getPrototypeOf3.default)(Ring.prototype), "originalRect", this),
              _get3 = (0, _slicedToArray2.default)(_get2, 4),
              x = _get3[0],
              y = _get3[1],
              w = _get3[2],
              h = _get3[3];

          var rect = [x - lineBoundings[0] / 2, y - lineBoundings[1] / 2, w, h];
          return rect;
        }
      }, {
        kind: "method",
        key: "pointCollision",
        value: function pointCollision(evt) {
          if ((0, _get4.default)((0, _getPrototypeOf3.default)(Ring.prototype), "pointCollision", this).call(this, evt)) {
            var offsetX = evt.offsetX,
                offsetY = evt.offsetY;

            var _this$attr = this.attr('anchor'),
                _this$attr2 = (0, _slicedToArray2.default)(_this$attr, 2),
                anchorX = _this$attr2[0],
                anchorY = _this$attr2[1];

            var _this$contentSize = (0, _slicedToArray2.default)(this.contentSize, 2),
                width = _this$contentSize[0],
                height = _this$contentSize[1];

            offsetX += width * anchorX;
            offsetY += height * anchorY;
            var r = this.attr('maxRadius');
            var offset = this.attr('outerRadius'); // 偏移量

            if (r <= 0) {
              r = offset;
            }

            offset = r - offset; // 如果未设置maxRadius，偏移量应当０

            var r0 = this.attr('innerRadius');
            var TAU = Math.PI * 2;
            var startAngle = this.attr('startAngle');

            if (startAngle > TAU) {
              startAngle %= TAU;
            } else {
              startAngle = (startAngle + Math.ceil(Math.abs(startAngle) / TAU) * TAU) % TAU;
            }

            var endAngle = this.attr('endAngle') - this.attr('startAngle') + startAngle;
            var d = Math.sqrt(Math.pow(offsetX - r, 2) + Math.pow(offsetY - r, 2));
            var angle = Math.atan2(offsetY - r, offsetX - r);

            if (angle < 0 || endAngle > TAU) {
              angle += TAU;
            }

            return d >= r0 && d <= r - offset && angle >= startAngle && angle <= endAngle;
          }
        }
      }, {
        kind: "method",
        key: "render",
        value: function render(t, ctx) {
          (0, _get4.default)((0, _getPrototypeOf3.default)(Ring.prototype), "render", this).call(this, t, ctx);
          var innerRadius = Math.min(this.attr('innerRadius'), this.attr('outerRadius'));
          var outerRadius = Math.max(this.attr('innerRadius'), this.attr('outerRadius'));
          var lw = this.attr('lineWidth');
          var startAngle = this.startAngle;
          var endAngle = this.endAngle;
          ctx.miterLimit = 0;
          ctx.lineWidth = lw;
          ctx.lineCap = this.attr('lineCap');
          ctx.lineJoin = this.attr('lineJoin');
          ctx.setLineDash(this.attr('lineDash'));
          ctx.lineDashOffset = this.attr('lineDashOffset');
          ctx.strokeStyle = findColor(ctx, this, 'strokeColor');
          ctx.fillStyle = findColor(ctx, this, 'fillColor');
          var x = 0,
              y = 0;
          var maxRadius = this.attr('maxRadius');

          if (maxRadius <= 0) {
            maxRadius = outerRadius;
          }

          var lineBoundings = this.lineBoundings;
          ctx.translate(lineBoundings[2] / 2 - x, lineBoundings[3] / 2 - y);
          ctx.beginPath();
          ctx.arc(x, y, Math.max(0, outerRadius - lw / 2), startAngle, endAngle, false);

          if (endAngle - startAngle === Math.PI * 2) {
            ctx.moveTo(outerRadius + innerRadius, outerRadius);
          }

          ctx.arc(x, y, Math.max(0, innerRadius - lw / 2), endAngle, startAngle, true);
          ctx.closePath();
          ctx.fill();

          if (lw > 0) {
            ctx.stroke();
          }

          return ctx;
        }
      }]
    };
  }, Shape);

  registerNodeType('ring', Ring);
  return {
    Ring: Ring
  };
}
}, function(modId) { var map = {"./shape":1561717981022}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1561717981032, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _shape = _interopRequireDefault(require("./shape"));

var _svgPathToCanvas = _interopRequireDefault(require("svg-path-to-canvas"));

var _util = require("./util");

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return (0, _toArray2.default)(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0, _typeof2.default)(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0, _typeof2.default)(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0, _typeof2.default)(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      flow = utils.flow,
      parseColorString = utils.parseColorString,
      findColor = utils.findColor;

  var _use = use(_shape.default, null, false),
      Shape = _use.Shape;

  var reflow = true;

  var PolygonAttr = _decorate(null, function (_initialize, _Shape$Attr) {
    var PolygonAttr =
    /*#__PURE__*/
    function (_Shape$Attr2) {
      (0, _inherits2.default)(PolygonAttr, _Shape$Attr2);

      function PolygonAttr(subject) {
        var _this;

        (0, _classCallCheck2.default)(this, PolygonAttr);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf3.default)(PolygonAttr).call(this, subject));

        _initialize((0, _assertThisInitialized2.default)(_this));

        _this.setDefault({
          points: [],
          smooth: null
        });

        return _this;
      }

      return PolygonAttr;
    }(_Shape$Attr);

    return {
      F: PolygonAttr,
      d: [{
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "smooth",
        value: function smooth(val) {
          this.set('smooth', val);
          this.subject.path = null;
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "points",
        value: function points(val) {
          this.set('points', val);
          this.subject.path = null;
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "lineWidth",
        value: function lineWidth(val) {
          this.set('lineWidth', val);
          this.subject.path = null;
        }
      }, {
        kind: "set",
        decorators: [attr],
        key: "fillColor",
        value: function fillColor(val) {
          val = parseColorString(val);
          this.set('fillColor', val);
        }
      }]
    };
  }, Shape.Attr);

  var Polygon = _decorate(null, function (_initialize2, _Shape) {
    var Polygon =
    /*#__PURE__*/
    function (_Shape2) {
      (0, _inherits2.default)(Polygon, _Shape2);

      function Polygon() {
        var _getPrototypeOf2;

        var _this2;

        (0, _classCallCheck2.default)(this, Polygon);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this2 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Polygon)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize2((0, _assertThisInitialized2.default)(_this2));

        return _this2;
      }

      return Polygon;
    }(_Shape);

    return {
      F: Polygon,
      d: [{
        kind: "field",
        static: true,
        key: "Attr",
        value: function value() {
          return PolygonAttr;
        }
      }, {
        kind: "get",
        key: "lineBoundings",
        value: function lineBoundings() {
          var bounds = [0, 0, 0, 0];
          var points = this.attr('points');
          points.forEach(function (_ref2) {
            var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
                x = _ref3[0],
                y = _ref3[1];

            bounds[0] = Math.min(x, bounds[0]);
            bounds[1] = Math.min(y, bounds[1]);
            bounds[2] = Math.max(x, bounds[2]);
            bounds[3] = Math.max(y, bounds[3]);
          });
          return bounds;
        }
      }, {
        kind: "get",
        decorators: [flow],
        key: "contentSize",
        value: function contentSize() {
          var lw = this.attr('lineWidth');
          var bounds = this.lineBoundings;

          var _this$attrSize = (0, _slicedToArray2.default)(this.attrSize, 2),
              width = _this$attrSize[0],
              height = _this$attrSize[1];

          width = bounds[2] - bounds[0] + lw;
          height = bounds[3] - bounds[1] + lw;
          return [width, height].map(Math.ceil);
        }
      }, {
        kind: "get",
        key: "translate",
        value: function translate() {
          var lw = this.attr('lineWidth');
          return [lw / 2, lw / 2];
        }
      }, {
        kind: "get",
        key: "points",
        value: function points() {
          return this.attr('points');
        }
      }, {
        kind: "method",
        key: "pointCollision",
        value: function pointCollision(evt) {
          if ((0, _get2.default)((0, _getPrototypeOf3.default)(Polygon.prototype), "pointCollision", this).call(this, evt)) {
            var _evt$offsetX = evt.offsetX,
                offsetX = _evt$offsetX === void 0 ? 0 : _evt$offsetX,
                _evt$offsetY = evt.offsetY,
                offsetY = _evt$offsetY === void 0 ? 0 : _evt$offsetY;

            var _this$attr = this.attr('anchor'),
                _this$attr2 = (0, _slicedToArray2.default)(_this$attr, 2),
                anchorX = _this$attr2[0],
                anchorY = _this$attr2[1];

            var _this$contentSize = (0, _slicedToArray2.default)(this.contentSize, 2),
                width = _this$contentSize[0],
                height = _this$contentSize[1];

            offsetX += width * anchorX;
            offsetY += height * anchorY;
            var path = this.path;

            if (path) {
              var lineWidth = this.attr('lineWidth'),
                  lineCap = this.attr('lineCap'),
                  lineJoin = this.attr('lineJoin');
              return path.isPointInPath(offsetX, offsetY) || path.isPointInStroke(offsetX, offsetY, {
                lineWidth: lineWidth,
                lineCap: lineCap,
                lineJoin: lineJoin
              });
            }
          }
        }
      }, {
        kind: "method",
        key: "render",
        value: function render(t, drawingContext) {
          (0, _get2.default)((0, _getPrototypeOf3.default)(Polygon.prototype), "render", this).call(this, t, drawingContext);

          if (this.points.length) {
            var translate = this.translate;
            drawingContext.translate(translate[0], translate[1]);
            drawingContext.strokeStyle = findColor(drawingContext, this, 'strokeColor');
            drawingContext.fillStyle = findColor(drawingContext, this, 'fillColor');
            drawingContext.miterLimit = 3;
            drawingContext.lineCap = this.attr('lineCap');
            drawingContext.lineJoin = this.attr('lineJoin');
            drawingContext.lineWidth = this.attr('lineWidth');
            drawingContext.setLineDash(this.attr('lineDash'));
            drawingContext.lineDashOffset = this.attr('lineDashOffset');

            if (!this.path || !(0, _util.pointsEqual)(this.path.points, this.points)) {
              var smooth = this.attr('smooth');
              var points = this.points.slice(0, this.points.length);

              if (smooth && !smooth.length) {
                smooth = [0, points.length - 1];
              }

              var d = ''; // 绘制光滑曲线（直线）

              if (!smooth) {
                points.forEach(function (point, i) {
                  if (i === 0) {
                    d += "M".concat(point.join(' '));
                  } else {
                    d += "L".concat(point.join(' '));
                  }
                });
              } else {
                if (Object.prototype.toString.call(smooth[0]) !== '[object Array]') {
                  // 如果不是多维数组，转成多维
                  smooth = [smooth];
                }

                var startPos = points[0];
                var endPos = points[points.length - 1];

                if (startPos[0] !== endPos[0] || startPos[1] !== endPos[1]) {
                  points.push(points[0]);
                }

                var subIndex = 0;
                smooth.forEach(function (arr, iind) {
                  var smoothStart = arr[0];
                  var smoothEnd = arr[1];

                  for (var i = subIndex; i < smoothStart; i++) {
                    if (i === 0) {
                      // 如果是所有线条的起始点
                      d += "M".concat(points[0].join(' '));
                    } else {
                      // 如果是转换点
                      d += "L".concat(points[i].join(' '));
                    }
                  }

                  var smoothPoints = points.slice(smoothStart, smoothEnd + 1);
                  d += (0, _util.makeSmoothCurveLine)(smoothPoints, smoothStart);
                  subIndex = smoothEnd;
                });

                for (var i = subIndex; i < points.length - 1; i++) {
                  // 如果绘图未绘制到最后一个点
                  d += "L".concat(points[i].join(' '));
                }
              }

              d += 'Z';
              this.path = new _svgPathToCanvas.default(d);
              this.path.points = (0, _toConsumableArray2.default)(this.points);
            }

            if (this.path) {
              this.path.beginPath().to(drawingContext);
              drawingContext.fill();
              drawingContext.stroke();
            }
          }

          return drawingContext;
        }
      }]
    };
  }, Shape);

  registerNodeType('polygon', Polygon, false);
  return {
    Polygon: Polygon
  };
}
}, function(modId) { var map = {"./shape":1561717981022,"./util":1561717981027}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1561717981033, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _polygon = _interopRequireDefault(require("./polygon"));

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;

  var _use = use(_polygon.default, null, false),
      Polygon = _use.Polygon;

  var Triangle =
  /*#__PURE__*/
  function (_Polygon) {
    (0, _inherits2.default)(Triangle, _Polygon);

    function Triangle() {
      (0, _classCallCheck2.default)(this, Triangle);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Triangle).apply(this, arguments));
    }

    (0, _createClass2.default)(Triangle, [{
      key: "contentSize",
      get: function get() {
        var _this$attr = this.attr('sides'),
            _this$attr2 = (0, _slicedToArray2.default)(_this$attr, 2),
            s1 = _this$attr2[0],
            s2 = _this$attr2[1];

        return [s1, s2];
      }
    }, {
      key: "points",
      get: function get() {
        var _this$attr3 = this.attr('sides'),
            _this$attr4 = (0, _slicedToArray2.default)(_this$attr3, 2),
            s1 = _this$attr4[0],
            s2 = _this$attr4[1];

        var lw = this.attr('lineWidth');
        s1 -= lw * 2;
        s2 -= lw * 2;
        var angle = Math.PI / 180 * this.attr('angle');
        var p0 = [0, 0];
        var p1 = [s1, 0];
        var p2 = [s2 * Math.cos(angle), s2 * Math.sin(angle)];
        return [p0, p1, p2];
      }
    }]);
    return Triangle;
  }(Polygon);

  registerNodeType('triangle', Triangle, false);
  return {
    Triangle: Triangle
  };
}
}, function(modId) { var map = {"./polygon":1561717981032}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1561717981034, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _polygon = _interopRequireDefault(require("./polygon"));

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return (0, _toArray2.default)(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0, _typeof2.default)(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0, _typeof2.default)(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0, _typeof2.default)(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      flow = utils.flow;

  var _use = use(_polygon.default, null, false),
      Polygon = _use.Polygon;

  var reflow = true;

  var rectAttr = _decorate(null, function (_initialize, _Polygon$Attr) {
    var rectAttr =
    /*#__PURE__*/
    function (_Polygon$Attr2) {
      (0, _inherits2.default)(rectAttr, _Polygon$Attr2);

      function rectAttr(subject) {
        var _this;

        (0, _classCallCheck2.default)(this, rectAttr);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf3.default)(rectAttr).call(this, subject));

        _initialize((0, _assertThisInitialized2.default)(_this));

        _this.setDefault({
          angle: 90,
          sides: null,
          size: null
        });

        return _this;
      }

      return rectAttr;
    }(_Polygon$Attr);

    return {
      F: rectAttr,
      d: [{
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "angle",
        value: function angle(val) {
          this.set('angle', val);
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "sides",
        value: function sides(val) {
          this.set('sides', val);
        }
      }]
    };
  }, Polygon.Attr);

  var Rect = _decorate(null, function (_initialize2, _Polygon) {
    var Rect =
    /*#__PURE__*/
    function (_Polygon2) {
      (0, _inherits2.default)(Rect, _Polygon2);

      function Rect() {
        var _getPrototypeOf2;

        var _this2;

        (0, _classCallCheck2.default)(this, Rect);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this2 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Rect)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize2((0, _assertThisInitialized2.default)(_this2));

        return _this2;
      }

      return Rect;
    }(_Polygon);

    return {
      F: Rect,
      d: [{
        kind: "field",
        static: true,
        key: "Attr",
        value: function value() {
          return rectAttr;
        }
      }, {
        kind: "get",
        key: "lineBoundings",
        value: function lineBoundings() {
          var lw = this.attr('lineWidth');
          var bounds = [0, 0, 0, 0];
          var points = this.points;
          points.forEach(function (_ref2) {
            var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
                x = _ref3[0],
                y = _ref3[1];

            x += lw;
            y += lw;
            bounds[0] = Math.min(x, bounds[0]);
            bounds[1] = Math.min(y, bounds[1]);
            bounds[2] = Math.max(x, bounds[2]);
            bounds[3] = Math.max(y, bounds[3]);
          });
          return bounds;
        }
      }, {
        kind: "get",
        decorators: [flow],
        key: "contentSize",
        value: function contentSize() {
          var lw = this.attr('lineWidth');
          var bounds = this.lineBoundings;

          var _this$attrSize = (0, _slicedToArray2.default)(this.attrSize, 2),
              width = _this$attrSize[0],
              height = _this$attrSize[1];

          width = bounds[2] - bounds[0];
          height = bounds[3] - bounds[1];
          return [width, height].map(Math.ceil);
        }
      }, {
        kind: "get",
        key: "points",
        value: function points() {
          var lw = this.attr('lineWidth');

          var _ref4 = this.attr('sides') || this.attr('size'),
              _ref5 = (0, _slicedToArray2.default)(_ref4, 2),
              s1 = _ref5[0],
              s2 = _ref5[1];

          s1 -= lw * 1;
          s2 -= lw * 1;
          var oAngle = this.attr('angle');
          var cosAngle = 0;
          var sinAngle = 1;

          if (oAngle === 90) {// 90默认不处理
          } else {
            var angle = Math.PI * this.attr('angle') / 180;
            cosAngle = Math.cos(angle);
            sinAngle = Math.sin(angle);
          }

          var p0 = [0, 0];
          var p1 = [s1, 0];
          var p2 = [s1 + s2 * cosAngle, s2 * sinAngle];
          var p3 = [s2 * cosAngle, s2 * sinAngle];
          return [p0, p1, p2, p3];
        }
      }]
    };
  }, Polygon);

  registerNodeType('rect', Rect, false);
  return {
    Rect: Rect
  };
}
}, function(modId) { var map = {"./polygon":1561717981032}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1561717981035, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _polygon = _interopRequireDefault(require("./polygon"));

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return (0, _toArray2.default)(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0, _typeof2.default)(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0, _typeof2.default)(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0, _typeof2.default)(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function polygonPoints(outerRadius, innerRadius, number, lw) {
  var center = outerRadius;
  var radAngle = Math.PI / 2;
  var radAlpha = Math.PI / number;
  var points = [];

  for (var i = 1; i <= number * 2; i++) {
    var r = i % 2 ? outerRadius - lw : innerRadius;
    var alpha = radAlpha * i + radAngle;
    var x = center + r * Math.cos(alpha);
    var y = center + r * Math.sin(alpha);
    points.push([x, y]);
  }

  return points;
}

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr,
      flow = utils.flow;

  var _use = use(_polygon.default, null, false),
      Polygon = _use.Polygon;

  var reflow = true;

  var PolygonAttr = _decorate(null, function (_initialize, _Polygon$Attr) {
    var PolygonAttr =
    /*#__PURE__*/
    function (_Polygon$Attr2) {
      (0, _inherits2.default)(PolygonAttr, _Polygon$Attr2);

      function PolygonAttr(subject) {
        var _this;

        (0, _classCallCheck2.default)(this, PolygonAttr);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf3.default)(PolygonAttr).call(this, subject));

        _initialize((0, _assertThisInitialized2.default)(_this));

        _this.setDefault({
          angles: 5
        });

        return _this;
      }

      return PolygonAttr;
    }(_Polygon$Attr);

    return {
      F: PolygonAttr,
      d: [{
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "angles",
        value: function angles(num) {
          this.set('angles', num);
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "radius",
        value: function radius(val) {
          // 圆半径
          this.set('radius', val);
        }
      }, {
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "innerRadius",
        value: function innerRadius(val) {
          this.set('innerRadius', val);
        }
      }]
    };
  }, Polygon.Attr);

  var Star = _decorate(null, function (_initialize2, _Polygon) {
    var Star =
    /*#__PURE__*/
    function (_Polygon2) {
      (0, _inherits2.default)(Star, _Polygon2);

      function Star() {
        var _getPrototypeOf2;

        var _this2;

        (0, _classCallCheck2.default)(this, Star);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        _this2 = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Star)).call.apply(_getPrototypeOf2, [this].concat(args)));

        _initialize2((0, _assertThisInitialized2.default)(_this2));

        return _this2;
      }

      return Star;
    }(_Polygon);

    return {
      F: Star,
      d: [{
        kind: "field",
        static: true,
        key: "Attr",
        value: function value() {
          return PolygonAttr;
        }
      }, {
        kind: "get",
        key: "lineBoundings",
        value: function lineBoundings() {
          var radius = this.attr('radius');
          return [0, 0, radius * 2, radius * 2];
        }
      }, {
        kind: "get",
        decorators: [flow],
        key: "contentSize",
        value: function contentSize() {
          var lw = this.attr('lineWidth');
          var bounds = this.lineBoundings;

          var _this$attrSize = (0, _slicedToArray2.default)(this.attrSize, 2),
              width = _this$attrSize[0],
              height = _this$attrSize[1];

          width = bounds[2] - bounds[0];
          height = bounds[3] - bounds[1];
          return [width, height].map(Math.ceil);
        }
      }, {
        kind: "get",
        key: "translate",
        value: function translate() {
          return [0, 0];
        }
      }, {
        kind: "get",
        key: "points",
        value: function points() {
          var radius = this.attr('radius');
          var lw = this.attr('lineWidth');
          var innerRadius = this.attr('innerRadius') || 0.5 * radius;
          return polygonPoints(radius, innerRadius, this.attr('angles'), lw);
        }
      }]
    };
  }, Polygon);

  registerNodeType('star', Star, false);
  return {
    Star: Star
  };
}
}, function(modId) { var map = {"./polygon":1561717981032}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1561717981036, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _ellipseSector = _interopRequireDefault(require("./ellipseSector"));

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;

  var _use = use(_ellipseSector.default, null, false),
      EllipseSector = _use.EllipseSector;

  var Ellipse =
  /*#__PURE__*/
  function (_EllipseSector) {
    (0, _inherits2.default)(Ellipse, _EllipseSector);

    function Ellipse() {
      (0, _classCallCheck2.default)(this, Ellipse);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Ellipse).apply(this, arguments));
    }

    (0, _createClass2.default)(Ellipse, [{
      key: "startAngle",
      get: function get() {
        return 0;
      }
    }, {
      key: "endAngle",
      get: function get() {
        return 2 * Math.PI;
      }
    }]);
    return Ellipse;
  }(EllipseSector);

  registerNodeType('ellipse', Ellipse, false);
  return {
    Ellipse: Ellipse
  };
}
}, function(modId) { var map = {"./ellipseSector":1561717981026}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1561717981037, function(require, module, exports) {


var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = install;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

var _ellipse = _interopRequireDefault(require("./ellipse"));

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return (0, _toArray2.default)(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return (0, _typeof2.default)(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if ((0, _typeof2.default)(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if ((0, _typeof2.default)(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function install(_ref) {
  var use = _ref.use,
      utils = _ref.utils,
      registerNodeType = _ref.registerNodeType;
  var attr = utils.attr;

  var _use = use(_ellipse.default, null, false),
      Ellipse = _use.Ellipse;

  var reflow = true;

  var CircleAttr = _decorate(null, function (_initialize, _Ellipse$Attr) {
    var CircleAttr =
    /*#__PURE__*/
    function (_Ellipse$Attr2) {
      (0, _inherits2.default)(CircleAttr, _Ellipse$Attr2);

      function CircleAttr(subject) {
        var _this;

        (0, _classCallCheck2.default)(this, CircleAttr);
        _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(CircleAttr).call(this, subject));

        _initialize((0, _assertThisInitialized2.default)(_this));

        _this.setDefault({
          radius: 10
        });

        return _this;
      }

      return CircleAttr;
    }(_Ellipse$Attr);

    return {
      F: CircleAttr,
      d: [{
        kind: "set",
        decorators: [attr({
          reflow: reflow
        })],
        key: "radius",
        value: function radius(val) {
          this.set('radius', val);
        }
      }]
    };
  }, Ellipse.Attr);

  var Circle =
  /*#__PURE__*/
  function (_Ellipse) {
    (0, _inherits2.default)(Circle, _Ellipse);

    function Circle() {
      (0, _classCallCheck2.default)(this, Circle);
      return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Circle).apply(this, arguments));
    }

    (0, _createClass2.default)(Circle, [{
      key: "radiuses",
      get: function get() {
        var radius = this.attr('radius');
        return [radius, radius];
      }
    }]);
    return Circle;
  }(Ellipse);

  (0, _defineProperty2.default)(Circle, "Attr", CircleAttr);
  registerNodeType('circle', Circle, false);
  return {
    Circle: Circle
  };
}
}, function(modId) { var map = {"./ellipse":1561717981036}; return __REQUIRE__(map[modId], modId); })
__DEFINE__(1561717981038, function(require, module, exports) {
module.exports = {
  "_from": "@spritejs/shapes@^1.1.5",
  "_id": "@spritejs/shapes@1.1.5",
  "_inBundle": false,
  "_integrity": "sha512-Ikncs9idy5pZTZgwM3Ej5XCLjP/kssVE4JbILuREIGKRSvUFl58dbHpoKibt0ka79SY2vb5VGnSbtlcdROvszg==",
  "_location": "/@spritejs/shapes",
  "_phantomChildren": {},
  "_requested": {
    "type": "range",
    "registry": true,
    "raw": "@spritejs/shapes@^1.1.5",
    "name": "@spritejs/shapes",
    "escapedName": "@spritejs%2fshapes",
    "scope": "@spritejs",
    "rawSpec": "^1.1.5",
    "saveSpec": null,
    "fetchSpec": "^1.1.5"
  },
  "_requiredBy": [
    "/@qcharts/core"
  ],
  "_resolved": "https://registry.npmjs.org/@spritejs/shapes/-/shapes-1.1.5.tgz",
  "_shasum": "2ca29810908227bbd020d30de2c9b780f26b1d03",
  "_spec": "@spritejs/shapes@^1.1.5",
  "_where": "/Users/akirawu/WeChatProjects/miniprogram-test-2/node_modules/@qcharts/core",
  "author": {
    "name": "akira-cn"
  },
  "ava": {
    "files": [
      "**/test/*.test.js"
    ],
    "require": [
      "@babel/register"
    ],
    "babel": {
      "testOptions": {
        "babelrc": true
      }
    }
  },
  "bundleDependencies": false,
  "dependencies": {
    "@babel/runtime": "^7.2.0",
    "sprite-draggable": "0.1.15",
    "svg-path-to-canvas": "^1.11.3"
  },
  "deprecated": false,
  "description": "[Test-Online](https://spritejs.github.io/sprite-extend-shapes/docs/website/)",
  "devDependencies": {
    "@babel/cli": "^7.2.0",
    "@babel/core": "^7.2.0",
    "@babel/plugin-external-helpers": "^7.2.0",
    "@babel/plugin-proposal-class-properties": "^7.2.1",
    "@babel/plugin-proposal-decorators": "^7.2.0",
    "@babel/plugin-transform-runtime": "^7.2.0",
    "@babel/preset-env": "^7.2.0",
    "@babel/register": "^7.0.0",
    "ava": "^1.4.1",
    "babel-eslint": "^10.0.1",
    "babel-loader": "^8.0.5",
    "canvas": "^2.0.0-alpha.16",
    "canvas-5-polyfill": "^0.1.5",
    "colors": "^1.3.1",
    "coveralls": "^3.0.2",
    "css-loader": "^2.0.0",
    "eslint": "^5.0.1",
    "eslint-config-sprite": "^1.0.4",
    "eslint-plugin-html": "^4.0.5",
    "hamming-distance": "^1.0.0",
    "html-webpack-plugin": "^3.2.0",
    "imghash": "^0.0.3",
    "nyc": "^12.0.2",
    "pixelmatch": "^4.0.2",
    "rimraf": "^2.6.2",
    "spritejs": "^2.29.2",
    "style-loader": "^0.23.1",
    "webpack": "^4.35.0",
    "webpack-bundle-analyzer": "^3.0.3",
    "webpack-cli": "^3.3.5",
    "webpack-dev-server": "^3.7.2",
    "webpack-hot-middleware": "^2.24.3",
    "webpack-merge": "^4.1.5"
  },
  "directories": {
    "example": "examples",
    "lib": "lib",
    "test": "test"
  },
  "license": "MIT",
  "main": "lib/index.js",
  "module": "",
  "name": "@spritejs/shapes",
  "nyc": {
    "exclude": [
      "**/test/**/*.js"
    ]
  },
  "scripts": {
    "build": "npm run build:es6 && npm run build:prod && npm run build:nobrowser",
    "build:es6": "babel src -d lib && webpack --env.esnext",
    "build:nobrowser": "babel src -d lib && webpack --env.nobrowser",
    "build:prod": "babel src -d lib && webpack --env.production",
    "lint": "eslint ./ --fix",
    "prepublishOnly": "npm run build && node ./script/qcdn",
    "standalone": "babel src -d lib && webpack --env.standalone",
    "start": "webpack-dev-server --watch-poll",
    "test": "nyc ava --serial && rimraf ./coverage && mkdir coverage && nyc report --reporter=html > ./coverage/lcov.info"
  },
  "version": "1.1.5"
}

}, function(modId) { var map = {}; return __REQUIRE__(map[modId], modId); })
return __REQUIRE__(1561717981021);
})()
//# sourceMappingURL=index.js.map