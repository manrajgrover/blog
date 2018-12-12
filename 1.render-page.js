exports.ids = [1];
exports.modules = {

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _InfoBox = __webpack_require__(458);
	
	Object.defineProperty(exports, "default", {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_InfoBox).default;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = exports["default"];

/***/ }),

/***/ 458:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(17);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(175);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	var _reactRedux = __webpack_require__(245);
	
	var _SocialIcons = __webpack_require__(459);
	
	var _SocialIcons2 = _interopRequireDefault(_SocialIcons);
	
	var _InfoMenu = __webpack_require__(467);
	
	var _InfoMenu2 = _interopRequireDefault(_InfoMenu);
	
	var _InfoHeader = __webpack_require__(468);
	
	var _InfoHeader2 = _interopRequireDefault(_InfoHeader);
	
	var _InfoText = __webpack_require__(470);
	
	var _InfoText2 = _interopRequireDefault(_InfoText);
	
	var _shared = __webpack_require__(362);
	
	var _store = __webpack_require__(326);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	__webpack_require__(471);
	
	var styles = function styles(theme) {
	  var _infoBox;
	
	  return {
	    infoBox: (_infoBox = {
	      display: "none"
	    }, _infoBox["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      display: "block",
	      color: theme.info.colors.text,
	      background: theme.info.colors.background,
	      position: "absolute",
	      left: 0,
	      top: 0,
	      width: theme.info.sizes.width + "px",
	      height: "100%",
	      padding: "20px 40px",
	      "&::after": {
	        content: "\"\"",
	        position: "absolute",
	        right: 0,
	        top: "20px",
	        bottom: "20px",
	        width: "1px",
	        borderRight: "1px solid " + theme.base.colors.lines
	      }
	    }, _infoBox),
	    wrapper: {
	      position: "absolute",
	      top: theme.info.sizes.headerHeight + "px",
	      bottom: 0,
	      left: 0,
	      width: "100%",
	      padding: "0 40px 0",
	      willChange: "opacity, bottom",
	      transition: "bottom .5s 0s",
	      opacity: 1,
	      transitionTimingFunction: "ease",
	      ".is-aside.closed &": {
	        bottom: theme.navigator.sizes.closedHeight + "px"
	      },
	      ".moving-featured &": {
	        bottom: 0
	      }
	    }
	  };
	};
	
	var InfoBox = function (_React$Component) {
	  _inherits(InfoBox, _React$Component);
	
	  function InfoBox() {
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, InfoBox);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.avatarOnClick = _shared.featureNavigator.bind(_this), _this.menulinkOnClick = _shared.moveNavigatorAside.bind(_this), _this.expandOnClick = function (e) {
	      _this.props.setNavigatorShape("closed");
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  InfoBox.prototype.render = function render() {
	    var _props = this.props,
	        classes = _props.classes,
	        parts = _props.parts,
	        pages = _props.pages,
	        navigatorPosition = _props.navigatorPosition,
	        navigatorShape = _props.navigatorShape;
	
	    var info = parts.find(function (el) {
	      return el.node.frontmatter.title === "info";
	    });
	
	    return _react2.default.createElement(
	      "aside",
	      {
	        className: classes.infoBox + " " + (navigatorPosition ? navigatorPosition : "") + "\n        " + (navigatorShape ? navigatorShape : "")
	      },
	      info && _react2.default.createElement(_InfoHeader2.default, {
	        info: info,
	        avatarOnClick: this.avatarOnClick,
	        expandOnClick: this.expandOnClick
	      }),
	      _react2.default.createElement(
	        "div",
	        { className: classes.wrapper },
	        info && _react2.default.createElement(_InfoText2.default, { info: info }),
	        _react2.default.createElement(_SocialIcons2.default, null),
	        pages && _react2.default.createElement(_InfoMenu2.default, { pages: pages, linkOnClick: this.menulinkOnClick })
	      )
	    );
	  };
	
	  return InfoBox;
	}(_react2.default.Component);
	
	InfoBox.propTypes = {
	  classes: _propTypes2.default.object.isRequired,
	  parts: _propTypes2.default.array.isRequired,
	  pages: _propTypes2.default.array.isRequired,
	  navigatorPosition: _propTypes2.default.string.isRequired,
	  navigatorShape: _propTypes2.default.string.isRequired,
	  isWideScreen: _propTypes2.default.bool.isRequired,
	  setNavigatorShape: _propTypes2.default.func.isRequired
	};
	
	var mapStateToProps = function mapStateToProps(state, ownProps) {
	  return {
	    navigatorPosition: state.navigatorPosition,
	    navigatorShape: state.navigatorShape,
	    isWideScreen: state.isWideScreen
	  };
	};
	
	var mapDispatchToProps = {
	  setNavigatorPosition: _store.setNavigatorPosition,
	  setNavigatorShape: _store.setNavigatorShape
	};
	
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)((0, _reactJss2.default)(styles)(InfoBox));
	module.exports = exports["default"];

/***/ }),

/***/ 459:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(17);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(175);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	var _config = __webpack_require__(450);
	
	var _config2 = _interopRequireDefault(_config);
	
	var _github = __webpack_require__(460);
	
	var _github2 = _interopRequireDefault(_github);
	
	var _facebook = __webpack_require__(461);
	
	var _facebook2 = _interopRequireDefault(_facebook);
	
	var _twitter = __webpack_require__(462);
	
	var _twitter2 = _interopRequireDefault(_twitter);
	
	var _linkedin = __webpack_require__(463);
	
	var _linkedin2 = _interopRequireDefault(_linkedin);
	
	var _email = __webpack_require__(464);
	
	var _email2 = _interopRequireDefault(_email);
	
	var _medium = __webpack_require__(465);
	
	var _medium2 = _interopRequireDefault(_medium);
	
	var _quora = __webpack_require__(466);
	
	var _quora2 = _interopRequireDefault(_quora);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = function styles(theme) {
	  return {
	    social: {
	      display: "flex",
	      justifyContent: "center",
	      flexWrap: "wrap"
	    },
	    svg: {
	      width: "40px",
	      height: "40px",
	      fill: theme.info.colors.socialIcons,
	      transition: "all .5s"
	    },
	    link: {
	      display: "inline-block",
	      padding: "5px",
	      "&[title='github']:hover": {
	        "& svg": {
	          fill: "#181717"
	        }
	      },
	      "&[title='twitter']:hover": {
	        "& svg": {
	          fill: "#01acee"
	        }
	      },
	      "&[title='facebook']:hover": {
	        "& svg": {
	          fill: "#3c5898"
	        }
	      },
	      "&[title='linkedin']:hover": {
	        "& svg": {
	          fill: "#007fb1"
	        }
	      },
	      "&[title='email']:hover": {
	        "& svg": {
	          fill: "#dc4e41"
	        }
	      },
	      "&[title='medium']:hover": {
	        "& svg": {
	          fill: "#000000"
	        }
	      },
	      "&[title='quora']:hover": {
	        "& svg": {
	          fill: "#b92b27"
	        }
	      }
	    }
	  };
	};
	
	var Socialcons = function Socialcons(props) {
	  var classes = props.classes;
	
	  var items = _config2.default.authorSocialLinks;
	
	  var icons = {
	    twitter: _twitter2.default,
	    facebook: _facebook2.default,
	    github: _github2.default,
	    linkedin: _linkedin2.default,
	    email: _email2.default,
	    medium: _medium2.default,
	    quora: _quora2.default
	  };
	
	  return _react2.default.createElement(
	    "div",
	    { className: classes.social },
	    items.map(function (item) {
	      var Icon = icons[item.name];
	      return _react2.default.createElement(
	        "a",
	        {
	          href: item.url,
	          key: item.name,
	          className: classes.link,
	          target: "_blank",
	          rel: "noopener noreferrer",
	          title: item.name
	        },
	        _react2.default.createElement(Icon, { className: classes.svg })
	      );
	    })
	  );
	};
	
	Socialcons.propTypes = {
	  classes: _propTypes2.default.object.isRequired
	};
	
	exports.default = (0, _reactJss2.default)(styles)(Socialcons);
	module.exports = exports["default"];

/***/ }),

/***/ 460:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function GithubIcon (props) {
	    return React.createElement("svg",props,React.createElement("path",{"d":"M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"}));
	}
	
	GithubIcon.displayName = "GithubIcon";
	
	GithubIcon.defaultProps = {"viewBox":"0 0 512 512"};
	
	module.exports = GithubIcon;
	
	GithubIcon.default = GithubIcon;


/***/ }),

/***/ 461:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function FacebookIcon (props) {
	    return React.createElement("svg",props,React.createElement("path",{"d":"M211.9 197.4h-36.7v59.9h36.7V433.1h70.5V256.5h49.2l5.2-59.1h-54.4c0 0 0-22.1 0-33.7 0-13.9 2.8-19.5 16.3-19.5 10.9 0 38.2 0 38.2 0V82.9c0 0-40.2 0-48.8 0 -52.5 0-76.1 23.1-76.1 67.3C211.9 188.8 211.9 197.4 211.9 197.4z"}));
	}
	
	FacebookIcon.displayName = "FacebookIcon";
	
	FacebookIcon.defaultProps = {"viewBox":"0 0 512 512"};
	
	module.exports = FacebookIcon;
	
	FacebookIcon.default = FacebookIcon;


/***/ }),

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function TwitterIcon (props) {
	    return React.createElement("svg",props,React.createElement("path",{"d":"M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"}));
	}
	
	TwitterIcon.displayName = "TwitterIcon";
	
	TwitterIcon.defaultProps = {"viewBox":"0 0 512 512"};
	
	module.exports = TwitterIcon;
	
	TwitterIcon.default = TwitterIcon;


/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function LinkedinIcon (props) {
	    return React.createElement("svg",props,React.createElement("path",{"d":"M150.65,100.682c0,27.992-22.508,50.683-50.273,50.683c-27.765,0-50.273-22.691-50.273-50.683\n        C50.104,72.691,72.612,50,100.377,50C128.143,50,150.65,72.691,150.65,100.682z M143.294,187.333H58.277V462h85.017V187.333z\n        M279.195,187.333h-81.541V462h81.541c0,0,0-101.877,0-144.181c0-38.624,17.779-61.615,51.807-61.615\n        c31.268,0,46.289,22.071,46.289,61.615c0,39.545,0,144.181,0,144.181h84.605c0,0,0-100.344,0-173.915\n        s-41.689-109.131-99.934-109.131s-82.768,45.369-82.768,45.369V187.333z"}));
	}
	
	LinkedinIcon.displayName = "LinkedinIcon";
	
	LinkedinIcon.defaultProps = {"viewBox":"0 35 512 512"};
	
	module.exports = LinkedinIcon;
	
	LinkedinIcon.default = LinkedinIcon;


/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function EmailIcon (props) {
	    return React.createElement("svg",props,React.createElement("path",{"d":"M101.3 141.6v228.9h0.3 308.4 0.8V141.6H101.3zM375.7 167.8l-119.7 91.5 -119.6-91.5H375.7zM127.6 194.1l64.1 49.1 -64.1 64.1V194.1zM127.8 344.2l84.9-84.9 43.2 33.1 43-32.9 84.7 84.7L127.8 344.2 127.8 344.2zM384.4 307.8l-64.4-64.4 64.4-49.3V307.8z"}));
	}
	
	EmailIcon.displayName = "EmailIcon";
	
	EmailIcon.defaultProps = {"viewBox":"0 0 512 512"};
	
	module.exports = EmailIcon;
	
	EmailIcon.default = EmailIcon;


/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function MediumIcon (props) {
	    return React.createElement("svg",props,React.createElement("g",{"id":"surface1"},React.createElement("path",{"style":{},"d":"M 46 13.5 L 44.894531 13.5 C 43.4375 13.507813 42.992188 14.179688 43 15.5 L 43 34 C 43.023438 35.074219 43.46875 35.480469 44.320313 35.5 L 46 35.5 L 46 40.5 L 31 40.5 L 31 35.5 L 34 35.5 L 34 15.5 L 26.105469 40.5 L 21.683594 40.5 L 14 15.5 L 14 35.5 L 16 35.5 L 16 40.5 L 4 40.5 L 4 35.5 L 5 35.5 C 6.492188 35.535156 7 34.128906 7 33.5 L 7 15.5 C 7.011719 14.484375 6.105469 13.472656 5 13.5 L 4 13.5 L 4.027344 7.5 L 19.5 7.5 L 25 25.964844 L 30.5 7.5 L 46 7.5 Z "})));
	}
	
	MediumIcon.displayName = "MediumIcon";
	
	MediumIcon.defaultProps = {"viewBox":"0 0 50 50","version":"1.1","width":"35px","height":"35px"};
	
	module.exports = MediumIcon;
	
	MediumIcon.default = MediumIcon;


/***/ }),

/***/ 466:
/***/ (function(module, exports, __webpack_require__) {

	var React = __webpack_require__(1);
	
	function QuoraIcon (props) {
	    return React.createElement("svg",props,[React.createElement("g",{"key":0},[React.createElement("title",{"key":0},"background"),React.createElement("rect",{"fill":"none","id":"canvas_background","height":"42","width":"42","y":"-1","x":"-1","key":1})]),React.createElement("g",{"key":1},[React.createElement("title",{"key":0},"Layer 1"),React.createElement("path",{"stroke":"null","id":"Quora","d":"m26.847629,29.356174c3.650048,-2.239806 6.066277,-6.312181 6.066277,-10.944508c0,-7.075752 -5.706413,-12.827981 -12.800872,-12.827981s-12.800872,5.75223 -12.800872,12.827981c0,7.075752 5.706413,12.827981 12.800872,12.827981c1.028182,0 2.056365,-0.101809 3.033138,-0.356333c1.233819,2.188902 3.084547,3.716042 6.991641,3.003377l0,-2.188902c0,0 -2.519047,-0.610856 -3.290184,-2.341616zm-0.102818,-9.264653c0,2.137997 -0.668319,4.072375 -1.799319,5.548611c-1.388046,-1.476236 -3.598639,-2.697948 -6.42614,-2.545234l0,0.254523l0,2.239806c0,0 1.902138,0.050905 3.187366,2.290711c-0.462682,0.152714 -0.976773,0.203619 -1.490865,0.203619c-3.598639,0 -6.528959,-3.563328 -6.528959,-7.992036c0,-0.559952 0,-2.748853 0,-3.308805c0,-4.428708 2.93032,-7.992036 6.528959,-7.992036c3.598639,0 6.528959,3.563328 6.528959,7.992036c0,0.559952 0,2.748853 0,3.308805z","key":1})])]);
	}
	
	QuoraIcon.displayName = "QuoraIcon";
	
	QuoraIcon.defaultProps = {"width":"40","height":"40"};
	
	module.exports = QuoraIcon;
	
	QuoraIcon.default = QuoraIcon;


/***/ }),

/***/ 467:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(17);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(175);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	var _gatsbyLink = __webpack_require__(73);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = function styles(theme) {
	  return {
	    infoMenu: {
	      display: "flex",
	      flexDirection: "column",
	      alignItems: "center",
	      listStyle: "none",
	      margin: 0,
	      width: "100%"
	    },
	    link: {
	      padding: ".5em",
	      fontWeight: 300,
	      color: theme.info.colors.menuLink,
	      "&:hover": {
	        color: theme.info.colors.menuLinkHover
	      }
	    }
	  };
	};
	
	var InfoMenu = function InfoMenu(props) {
	  var classes = props.classes,
	      pages = props.pages,
	      linkOnClick = props.linkOnClick;
	
	
	  return _react2.default.createElement(
	    "nav",
	    { className: classes.infoMenu },
	    pages.map(function (page, i) {
	      var _page$node = page.node,
	          fields = _page$node.fields,
	          frontmatter = _page$node.frontmatter;
	
	      return _react2.default.createElement(
	        _gatsbyLink2.default,
	        {
	          key: fields.slug,
	          to: fields.slug,
	          onClick: linkOnClick,
	          className: classes.link,
	          "data-shape": "closed"
	        },
	        frontmatter.menuTitle ? frontmatter.menuTitle : frontmatter.title
	      );
	    })
	  );
	};
	
	InfoMenu.propTypes = {
	  pages: _propTypes2.default.array.isRequired,
	  classes: _propTypes2.default.object.isRequired,
	  linkOnClick: _propTypes2.default.func.isRequired
	};
	
	exports.default = (0, _reactJss2.default)(styles)(InfoMenu);
	module.exports = exports["default"];

/***/ }),

/***/ 468:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(17);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(175);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	var _gatsbyLink = __webpack_require__(73);
	
	var _gatsbyLink2 = _interopRequireDefault(_gatsbyLink);
	
	var _IconButton = __webpack_require__(365);
	
	var _IconButton2 = _interopRequireDefault(_IconButton);
	
	var _ExpandMore = __webpack_require__(469);
	
	var _ExpandMore2 = _interopRequireDefault(_ExpandMore);
	
	var _avatar2 = __webpack_require__(451);
	
	var _avatar3 = _interopRequireDefault(_avatar2);
	
	var _config = __webpack_require__(450);
	
	var _config2 = _interopRequireDefault(_config);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = function styles(theme) {
	  var _avatarLink, _avatar, _title;
	
	  return {
	    header: {
	      lineHeight: 1,
	      position: "relative"
	    },
	    avatarLink: (_avatarLink = {
	      willChange: "left, top",
	      float: "left",
	      display: "block",
	      position: "relative",
	      margin: "0 12px 0 0"
	    }, _avatarLink["@media (min-width: " + theme.mediaQueryTresholds.M + "px)"] = {
	      margin: "0 20px 0 0"
	    }, _avatarLink["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      position: "absolute",
	      top: "10px",
	      left: "50%",
	      marginLeft: "-30px",
	      transition: "all .5s",
	      transitionTimingFunction: "ease",
	      ".navigator-in-transition-from.navigator-is-opened &": {
	        left: "50%"
	      },
	      ".is-aside.open &": {
	        left: "8%",
	        top: "0"
	      }
	    }, _avatarLink),
	    avatar: (_avatar = {
	      width: "36px",
	      height: "36px",
	      borderRadius: "65% 75%",
	      border: "1px solid #ddd",
	      transition: "all .3s",
	      transitionTimingFunction: "ease",
	      display: "inline-block",
	      overflow: "hidden",
	      "& img": {
	        maxWidth: "100%"
	      }
	    }, _avatar["@media (min-width: " + theme.mediaQueryTresholds.M + "px)"] = {
	      width: "44px",
	      height: "44px"
	    }, _avatar["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      width: "60px",
	      height: "60px"
	    }, _avatar["@media (hover: hover)"] = {
	      "&:hover": {
	        borderRadius: "75% 65%"
	      }
	    }, _avatar),
	    title: (_title = {
	      willChange: "transform, left, top",
	      fontSize: theme.info.fonts.boxTitleSize + "em",
	      margin: 0,
	      float: "left",
	      transitionTimingFunction: "ease",
	      "& small": {
	        display: "block",
	        fontSize: ".6em",
	        marginTop: ".3em"
	      }
	    }, _title["@media (min-width: " + theme.mediaQueryTresholds.M + "px)"] = {
	      fontSize: theme.info.fonts.boxTitleSizeM + "em"
	    }, _title["@media (min-width: " + theme.mediaQueryTresholds.L + "px)"] = {
	      fontSize: theme.info.fonts.boxTitleSizeL + "em",
	      position: "absolute",
	      top: "85px",
	      textAlign: "center",
	      left: "50%",
	      transform: "translate(-50%)",
	      transition: "all .5s",
	      ".is-aside.open &": {
	        left: "60%",
	        top: 1.9 - theme.info.fonts.boxTitleSizeL + "em",
	        textAlign: "left"
	      }
	    }, _title),
	    expand: {
	      position: "absolute",
	      top: "30px",
	      right: "-25px",
	      display: "none",
	      color: theme.info.colors.text,
	      ".is-aside.open &": {
	        display: "block"
	      }
	    }
	  };
	};
	
	var InfoHeader = function InfoHeader(props) {
	  var classes = props.classes,
	      avatarOnClick = props.avatarOnClick,
	      expandOnClick = props.expandOnClick;
	
	
	  return _react2.default.createElement(
	    "header",
	    { className: classes.header },
	    _react2.default.createElement(
	      _gatsbyLink2.default,
	      { className: classes.avatarLink, onClick: avatarOnClick, to: "/", title: "back to Home page" },
	      _react2.default.createElement(
	        "div",
	        { className: classes.avatar },
	        _react2.default.createElement("img", { src: _avatar3.default, alt: "" })
	      )
	    ),
	    _react2.default.createElement(
	      "h1",
	      { className: classes.title },
	      _config2.default.infoTitle.replace(/ /g, "\xA0"),
	      _react2.default.createElement(
	        "small",
	        null,
	        _config2.default.infoTitleNote
	      )
	    ),
	    _react2.default.createElement(
	      _IconButton2.default,
	      {
	        "aria-label": "Expand the box",
	        className: classes.expand,
	        onClick: expandOnClick,
	        title: "Expand the box"
	      },
	      _react2.default.createElement(_ExpandMore2.default, null)
	    )
	  );
	};
	
	InfoHeader.propTypes = {
	  classes: _propTypes2.default.object.isRequired,
	  avatarOnClick: _propTypes2.default.func.isRequired,
	  expandOnClick: _propTypes2.default.func.isRequired
	};
	
	exports.default = (0, _reactJss2.default)(styles)(InfoHeader);
	module.exports = exports["default"];

/***/ }),

/***/ 469:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	var _interopRequireDefault = __webpack_require__(273);
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = void 0;
	
	var _react = _interopRequireDefault(__webpack_require__(1));
	
	var _createSvgIcon = _interopRequireDefault(__webpack_require__(385));
	
	var _default = (0, _createSvgIcon.default)(_react.default.createElement("g", null, _react.default.createElement("path", {
	  d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
	})), 'ExpandMore');
	
	exports.default = _default;

/***/ }),

/***/ 470:
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	exports.__esModule = true;
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _propTypes = __webpack_require__(17);
	
	var _propTypes2 = _interopRequireDefault(_propTypes);
	
	var _reactJss = __webpack_require__(175);
	
	var _reactJss2 = _interopRequireDefault(_reactJss);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var styles = function styles(theme) {
	  return {
	    text: {
	      display: "block",
	      fontWeight: 300,
	      lineHeight: 1.5,
	      fontSize: ".95em",
	      textAlign: "left",
	      marginBottom: ".8em",
	      "& p:first-child": {
	        marginTop: 0
	      },
	      "& p:last-child": {
	        marginBottom: 0
	      },
	      "& a": {
	        fontWeight: 800,
	        color: theme.base.colors.link
	      },
	      "& a:hover": {
	        color: theme.base.colors.linkHover
	      }
	    }
	  };
	};
	
	var InfoText = function InfoText(props) {
	  var classes = props.classes,
	      info = props.info;
	
	  var text = info.node.html;
	
	  return _react2.default.createElement("div", { className: classes.text, dangerouslySetInnerHTML: { __html: text } });
	};
	
	InfoText.propTypes = {
	  classes: _propTypes2.default.object.isRequired,
	  info: _propTypes2.default.object.isRequired
	};
	
	exports.default = (0, _reactJss2.default)(styles)(InfoText);
	module.exports = exports["default"];

/***/ })

};;
//# sourceMappingURL=1.render-page.js.map