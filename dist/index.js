'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var classNames = require('classnames');
var React = require('react');
var fontawesomeSvgCore = require('@fortawesome/fontawesome-svg-core');
var freeSolidSvgIcons = require('@fortawesome/free-solid-svg-icons');
var reactFontawesome = require('@fortawesome/react-fontawesome');
var reactTransitionGroup = require('react-transition-group');
var axios = require('axios');

function _interopDefaultLegacy(e) {
  return e && typeof e === 'object' && 'default' in e ? e : { default: e };
}

var classNames__default = /*#__PURE__*/ _interopDefaultLegacy(classNames);
var React__default = /*#__PURE__*/ _interopDefaultLegacy(React);
var axios__default = /*#__PURE__*/ _interopDefaultLegacy(axios);

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') {
    return;
  }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z =
  '*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  background-color: #fff;\n  -webkit-text-size-adjust: 100%;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n\n[tabindex="-1"]:focus:not(:focus-visible) {\n  outline: 0 !important;\n}\n\nhr {\n  margin: 1rem 0;\n  color: inherit;\n  background-color: currentColor;\n  border: 0;\n  opacity: 0.25;\n}\n\nhr:not([size]) {\n  height: 1px;\n}\n\nh6, h5, h4, h3, h2, h1 {\n  margin-top: 0;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  line-height: 1.2;\n}\n\nh1 {\n  font-size: 2.5rem;\n}\n\nh2 {\n  font-size: 2rem;\n}\n\nh3 {\n  font-size: 1.75rem;\n}\n\nh4 {\n  font-size: 1.5rem;\n}\n\nh5 {\n  font-size: 1.25rem;\n}\n\nh6 {\n  font-size: 1rem;\n}\n\np {\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\nabbr[title],\nabbr[data-original-title] {\n  text-decoration: underline;\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  cursor: help;\n  -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none;\n}\n\naddress {\n  margin-bottom: 1rem;\n  font-style: normal;\n  line-height: inherit;\n}\n\nol,\nul {\n  padding-left: 2rem;\n}\n\nol,\nul,\ndl {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n\nol ol,\nul ul,\nol ul,\nul ol {\n  margin-bottom: 0;\n}\n\ndt {\n  font-weight: 700;\n}\n\ndd {\n  margin-bottom: 0.5rem;\n  margin-left: 0;\n}\n\nblockquote {\n  margin: 0 0 1rem;\n}\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\nsmall {\n  font-size: 0.875em;\n}\n\nsub,\nsup {\n  position: relative;\n  font-size: 0.75em;\n  line-height: 0;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\na {\n  color: #0d6efd;\n  text-decoration: none;\n}\na:hover {\n  color: #024dbc;\n  text-decoration: underline;\n}\n\na:not([href]), a:not([href]):hover {\n  color: inherit;\n  text-decoration: none;\n}\n\npre,\ncode,\nkbd,\nsamp {\n  font-family: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;\n  font-size: 1em;\n}\n\npre {\n  display: block;\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow: auto;\n  font-size: 0.875em;\n}\npre code {\n  font-size: inherit;\n  color: inherit;\n  word-break: normal;\n}\n\ncode {\n  font-size: 0.875em;\n  color: #d63384;\n  word-wrap: break-word;\n}\na > code {\n  color: inherit;\n}\n\nfigure {\n  margin: 0 0 1rem;\n}\n\nimg {\n  vertical-align: middle;\n}\n\nsvg {\n  overflow: hidden;\n  vertical-align: middle;\n}\n\ntable {\n  border-collapse: collapse;\n}\n\ncaption {\n  padding-top: 0.5rem;\n  padding-bottom: 0.5rem;\n  color: #6c757d;\n  text-align: left;\n  caption-side: bottom;\n}\n\nth {\n  text-align: inherit;\n}\n\nlabel {\n  display: inline-block;\n  margin-bottom: 0.5rem;\n}\n\nbutton {\n  border-radius: 0;\n}\n\nbutton:focus {\n  outline: 1px dotted;\n  outline: 5px auto -webkit-focus-ring-color;\n}\n\ninput,\nbutton,\nselect,\noptgroup,\ntextarea {\n  margin: 0;\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\n\nbutton,\ninput {\n  overflow: visible;\n}\n\nbutton,\nselect {\n  text-transform: none;\n}\n\nselect {\n  word-wrap: normal;\n}\n\n[list]::-webkit-calendar-picker-indicator {\n  display: none;\n}\n\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\nbutton:not(:disabled),\n[type=button]:not(:disabled),\n[type=reset]:not(:disabled),\n[type=submit]:not(:disabled) {\n  cursor: pointer;\n}\n\n::-moz-focus-inner {\n  padding: 0;\n  border-style: none;\n}\n\ninput[type=date],\ninput[type=time],\ninput[type=datetime-local],\ninput[type=month] {\n  -webkit-appearance: textfield;\n}\n\ntextarea {\n  overflow: auto;\n  resize: vertical;\n}\n\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\n\nlegend {\n  float: left;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 0.5rem;\n  font-size: 1.5rem;\n  line-height: inherit;\n  color: inherit;\n  white-space: normal;\n}\n\nmark {\n  padding: 0.2em;\n  background-color: #fcf8e3;\n}\n\nprogress {\n  vertical-align: baseline;\n}\n\n::-webkit-datetime-edit {\n  overflow: visible;\n  line-height: 0;\n}\n\n[type=search] {\n  outline-offset: -2px;\n  -webkit-appearance: textfield;\n}\n\n::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n::-webkit-color-swatch-wrapper {\n  padding: 0;\n}\n\n::-webkit-file-upload-button {\n  font: inherit;\n  -webkit-appearance: button;\n}\n\noutput {\n  display: inline-block;\n}\n\nsummary {\n  display: list-item;\n  cursor: pointer;\n}\n\ntemplate {\n  display: none;\n}\n\nmain {\n  display: block;\n}\n\n[hidden] {\n  display: none !important;\n}\n\n.zoom-in-top-enter {\n  opacity: 0;\n  transform: scaleY(0);\n}\n\n.zoom-in-top-enter-active {\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n  transform-origin: center top;\n}\n\n.zoom-in-top-exit {\n  opacity: 1;\n}\n\n.zoom-in-top-exit-active {\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n  transform-origin: center top;\n}\n\n.zoom-in-left-enter {\n  opacity: 0;\n  transform: scale(0.45, 0.45);\n}\n\n.zoom-in-left-enter-active {\n  opacity: 0;\n  transform: scale(0.45, 0.45);\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n  transform-origin: top left;\n}\n\n.zoom-in-left-exit {\n  opacity: 1;\n}\n\n.zoom-in-left-exit-active {\n  opacity: 0;\n  transform: scale(0.45, 0.45);\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n  transform-origin: top left;\n}\n\n.zoom-in-right-enter {\n  opacity: 0;\n  transform: scale(0.45, 0.45);\n}\n\n.zoom-in-right-enter-active {\n  opacity: 0;\n  transform: scale(0.45, 0.45);\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n  transform-origin: top right;\n}\n\n.zoom-in-right-exit {\n  opacity: 1;\n}\n\n.zoom-in-right-exit-active {\n  opacity: 0;\n  transform: scale(0.45, 0.45);\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n  transform-origin: top right;\n}\n\n.zoom-in-bottom-enter {\n  opacity: 0;\n  transform: scaleY(0);\n}\n\n.zoom-in-bottom-enter-active {\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n  transform-origin: center bottom;\n}\n\n.zoom-in-bottom-exit {\n  opacity: 1;\n}\n\n.zoom-in-bottom-exit-active {\n  opacity: 0;\n  transform: scaleY(0);\n  transition: transform 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms, opacity 300ms cubic-bezier(0.23, 1, 0.32, 1) 100ms;\n  transform-origin: center bottom;\n}\n\n.btn {\n  position: relative;\n  display: inline-block;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #212529;\n  white-space: nowrap;\n  text-align: center;\n  vertical-align: middle;\n  background-image: none;\n  border: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);\n  cursor: pointer;\n  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  border-radius: 0.25rem;\n}\n.btn:focus {\n  outline: none;\n}\n.btn.disabled, .btn[disabled] {\n  cursor: not-allowed;\n  opacity: 0.65;\n  box-shadow: none;\n}\n.btn.disabled > *, .btn[disabled] > * {\n  pointer-events: none;\n}\n\n.btn-lg {\n  padding: 0.5rem 0.75rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem;\n}\n\n.btn-sm {\n  padding: 0.25rem 0.75rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem;\n}\n\n.btn-primary {\n  color: #fff;\n  background: #0d6efd;\n  border-color: #0d6efd;\n}\n.btn-primary:hover {\n  color: #fff;\n  background: #3385fd;\n  border-color: #408cfd;\n}\n.btn-primary:focus, .btn-primary.focus {\n  color: #fff;\n  background: #3385fd;\n  border-color: #408cfd;\n}\n.btn-primary:disabled, .btn-primary.disabled {\n  color: #fff;\n  background: #0d6efd;\n  border-color: #0d6efd;\n}\n\n.btn-danger {\n  color: #fff;\n  background: #dc3545;\n  border-color: #dc3545;\n}\n.btn-danger:hover {\n  color: #fff;\n  background: #e25663;\n  border-color: #e4606d;\n}\n.btn-danger:focus, .btn-danger.focus {\n  color: #fff;\n  background: #e25663;\n  border-color: #e4606d;\n}\n.btn-danger:disabled, .btn-danger.disabled {\n  color: #fff;\n  background: #dc3545;\n  border-color: #dc3545;\n}\n\n.btn-default {\n  color: #212529;\n  background: #fff;\n  border-color: #ced4da;\n}\n.btn-default:hover {\n  color: #0d6efd;\n  background: #fff;\n  border-color: #0d6efd;\n}\n.btn-default:focus, .btn-default.focus {\n  color: #0d6efd;\n  background: #fff;\n  border-color: #0d6efd;\n}\n.btn-default:disabled, .btn-default.disabled {\n  color: #212529;\n  background: #fff;\n  border-color: #ced4da;\n}\n\n.btn-circle {\n  border-radius: 1.5rem;\n}\n\n.btn-link {\n  font-weight: 400;\n  color: #0d6efd;\n  box-shadow: none;\n  text-decoration: none;\n}\n.btn-link:hover {\n  text-decoration: underline;\n  box-shadow: none;\n}\n\n.simple-alert {\n  position: relative;\n  padding: 0.75rem 1.25rem;\n  margin-bottom: 1rem;\n  border: 1px solid transparent;\n  border-radius: 0.25rem;\n}\n.simple-alert .bold-title {\n  font-weight: 700;\n}\n.simple-alert .simple-alert-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 0.75rem 1.25rem;\n  color: inherit;\n  cursor: pointer;\n}\n.simple-alert .simple-alert-desc {\n  font-size: 0.875rem;\n  margin: 0.3rem 0 0;\n}\n\n.simple-alert-default {\n  color: #fff;\n  background: #0d6efd;\n  border-color: #0262ef;\n}\n\n.simple-alert-success {\n  color: #fff;\n  background: #52c41a;\n  border-color: #49ad17;\n}\n\n.simple-alert-warning {\n  color: #fff;\n  background: #fadb14;\n  border-color: #efd005;\n}\n\n.simple-alert-danger {\n  color: #fff;\n  background: #dc3545;\n  border-color: #d32535;\n}\n\n.simple-menu {\n  display: flex;\n  flex-wrap: wrap;\n  list-style: none;\n  padding-left: 0;\n  margin-bottom: 30px;\n  border-bottom: 1px solid #dee2e6;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);\n}\n.simple-menu > .menu-item {\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  transition: color 0.15s ease-in-out, border-color 0.15s ease-in-out;\n}\n.simple-menu > .menu-item:hover, .simple-menu > .menu-item:focus {\n  text-decoration: none;\n}\n.simple-menu > .menu-item.is-disabled {\n  color: #6c757d;\n  cursor: default;\n  pointer-events: none;\n}\n.simple-menu > .menu-item.is-active, .simple-menu > .menu-item:hover {\n  color: #0d6efd;\n  border-bottom: 2px solid #0d6efd;\n}\n.simple-menu > .submenu-item {\n  position: relative;\n}\n.simple-menu > .submenu-item .submenu-title {\n  display: flex;\n  align-items: center;\n}\n.simple-menu > .submenu-item .arrow-icon {\n  transition: transform 0.25s ease-in-out;\n  margin-left: 3px;\n}\n.simple-menu > .submenu-item:hover .arrow-icon {\n  transform: rotate(180deg);\n}\n.simple-menu .is-vertical .arrow-icon {\n  transform: rotate(0deg) !important;\n}\n.simple-menu .is-vertical.is-opened .arrow-icon {\n  transform: rotate(180deg) !important;\n}\n.simple-menu .simple-submenu {\n  list-style: none;\n  white-space: nowrap;\n  padding-left: 0;\n}\n.simple-menu .simple-submenu .menu-item {\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  transition: color 0.15s ease-in-out, border-color 0.15s ease-in-out;\n  color: #212529;\n}\n.simple-menu .simple-submenu .menu-item.is-active, .simple-menu .simple-submenu .menu-item:hover {\n  color: #0d6efd;\n}\n\n.menu-horizontal > .menu-item {\n  border-bottom: 2px solid transparent;\n}\n.menu-horizontal .simple-submenu {\n  position: absolute;\n  background: #fff;\n  z-index: 100;\n  top: calc(100% + 8px);\n  left: 0;\n  border: 1px solid #dee2e6;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);\n}\n\n.menu-vertical {\n  flex-direction: column;\n  border-bottom: 0px;\n  border-right: 1px solid #dee2e6;\n  margin: 10px 20px;\n}\n.menu-vertical > .menu-item {\n  border-left: 2px solid transparent;\n}\n.menu-vertical > .menu-item.is-active, .menu-vertical > .menu-item:hover {\n  border-bottom: 0px;\n  border-left: 2px solid #0d6efd;\n}\n\n.simple-tabs-nav {\n  display: flex;\n  margin-bottom: 0;\n  list-style: none;\n  border-bottom: 1px solid #dee2e6;\n}\n.simple-tabs-nav > .tabsList {\n  position: relative;\n  display: flex;\n  padding-left: 0;\n  flex-wrap: wrap;\n}\n\n.simple-tabs-nav-item {\n  display: block;\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n}\n.simple-tabs-nav-item:hover, .simple-tabs-nav-item:focus {\n  color: #0d6efd;\n}\n.simple-tabs-nav-item.disabled {\n  color: #6c757d;\n  pointer-events: auto;\n  background-color: transparent;\n  border-color: transparent;\n  cursor: not-allowed;\n}\n.simple-tabs-nav-item.is-active {\n  color: #0d6efd;\n}\n\n.nav-line .simple-tabs-nav-item.is-active-bottom-bar {\n  border-bottom: 2px solid #0d6efd;\n}\n.nav-line .simple-tabs-ink-bar {\n  position: absolute;\n  background: #0d6efd;\n  pointer-events: none;\n  height: 2px;\n  bottom: 0;\n  transition: 0.2s ease-in-out;\n}\n\n.nav-card .simple-tabs-nav-item {\n  border: 1px solid transparent;\n  margin-bottom: -1px;\n}\n.nav-card .simple-tabs-nav-item.is-active {\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n  background-color: #fff;\n  border-color: #dee2e6 #dee2e6 #fff;\n}\n\n.simple-tabs-content {\n  margin-top: 1rem;\n}\n\n.icon-primary {\n  color: #0d6efd;\n}\n\n.icon-secondary {\n  color: #6c757d;\n}\n\n.icon-success {\n  color: #52c41a;\n}\n\n.icon-info {\n  color: #17a2b8;\n}\n\n.icon-warning {\n  color: #fadb14;\n}\n\n.icon-danger {\n  color: #dc3545;\n}\n\n.icon-light {\n  color: #f8f9fa;\n}\n\n.icon-dark {\n  color: #343a40;\n}\n\n.simple-input-wrapper {\n  display: flex;\n  width: 100%;\n  margin-bottom: 30px;\n  position: relative;\n}\n.simple-input-wrapper .icon-wrapper {\n  position: absolute;\n  height: 100%;\n  width: 35px;\n  justify-content: center;\n  color: #495057;\n  right: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n.simple-input-wrapper .icon-wrapper svg {\n  color: #6c757d;\n}\n\n.icon-wrapper + .simple-input-inner {\n  padding-right: 35px;\n}\n\n.simple-input-inner {\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.075);\n  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;\n}\n.simple-input-inner:focus {\n  color: #495057;\n  background-color: #fff;\n  border-color: #8bbafe;\n  outline: 0;\n  box-shadow: 0 0 0 0.2rem rgba(13, 110, 253, 0.25);\n}\n.simple-input-inner::-moz-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.simple-input-inner:-ms-input-placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.simple-input-inner::placeholder {\n  color: #6c757d;\n  opacity: 1;\n}\n.simple-input-inner:disabled, .simple-input-inner[readonly] {\n  background-color: #e9ecef;\n  opacity: 1;\n}\n\n.simple-input-group-prepend,\n.simple-input-group-append {\n  display: flex;\n  align-items: center;\n  padding: 0.375rem 0.75rem;\n  margin-bottom: 0;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #495057;\n  text-align: center;\n  white-space: nowrap;\n  background-color: #e9ecef;\n  border: 1px solid #ced4da;\n  border-radius: 0.25rem;\n}\n\n.simple-input-group-append + .btn {\n  padding: 0;\n  border: 0;\n}\n\n.input-group > .simple-input-group-prepend,\n.input-group.input-group-append > .simple-input-inner {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n\n.input-group > .simple-input-group-append,\n.input-group.input-group-prepend > .simple-input-inner {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.input-size-sm .simple-input-inner {\n  padding: 0.25rem 0.5rem;\n  font-size: 0.875rem;\n  border-radius: 0.2rem;\n}\n\n.input-size-lg .simple-input-inner {\n  padding: 0.5rem 1rem;\n  font-size: 1.25rem;\n  border-radius: 0.3rem;\n}\n\n.simple-auto-complete {\n  position: relative;\n}\n\n.simple-suggestion-list {\n  list-style: none;\n  padding-left: 0;\n  white-space: nowrap;\n  position: absolute;\n  background: #fff;\n  z-index: 100;\n  top: calc(100% + 8px);\n  left: 0;\n  border: 1px solid #dee2e6;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);\n  width: 100%;\n}\n.simple-suggestion-list .suggstions-loading-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 75px;\n}\n.simple-suggestion-list .suggestion-item {\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  transition: color 0.15s ease-in-out, border-color 0.15s ease-in-out;\n  color: #212529;\n}\n.simple-suggestion-list .suggestion-item.is-active {\n  background: #0d6efd !important;\n  color: #fff !important;\n}\n.simple-suggestion-list .suggestion-item:hover {\n  color: #0d6efd !important;\n}\n\n.simple-select {\n  position: relative;\n}\n.simple-select .simple-input-wrapper {\n  cursor: pointer;\n}\n.simple-select .simple-input-wrapper:hover input {\n  border-color: #0d6efd !important;\n}\n.simple-select input[readonly] {\n  background-color: #fff;\n  border-color: #ced4da;\n  cursor: pointer;\n  opacity: 1;\n}\n.simple-select input:disabled {\n  background-color: #e9ecef;\n  opacity: 1;\n  cursor: not-allowed;\n}\n.simple-select .icon-wrapper {\n  transition: transform 0.25s ease-in-out;\n  transform: rotate(0deg) !important;\n}\n\n.simple-select.menu-is-open .icon-wrapper {\n  transform: rotate(180deg) !important;\n}\n\n.simple-select-dropdown {\n  list-style: none;\n  padding-left: 0;\n  white-space: nowrap;\n  position: absolute;\n  background: #fff;\n  z-index: 100;\n  top: calc(100% + 8px);\n  left: 0;\n  border: 1px solid #dee2e6;\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);\n  width: 100%;\n}\n.simple-select-dropdown .simple-select-item {\n  padding: 0.5rem 1rem;\n  cursor: pointer;\n  transition: color 0.15s ease-in-out, border-color 0.15s ease-in-out;\n  color: #212529;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.simple-select-dropdown .simple-select-item.is-selected {\n  color: #0d6efd;\n  font-weight: 700;\n}\n.simple-select-dropdown .simple-select-item.is-disabled {\n  color: #6c757d;\n  pointer-events: none;\n  cursor: default;\n}\n.simple-select-dropdown .simple-select-item:hover {\n  background-color: rgba(13, 110, 253, 0.1);\n}\n\n.simple-selected-tags {\n  position: absolute;\n  z-index: 100;\n  top: 0;\n  left: 0;\n  height: 100%;\n  max-width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n}\n.simple-selected-tags .simple-tag {\n  height: 80%;\n  padding: 2px 5px;\n  box-sizing: border-box;\n  border: 1px solid rgba(13, 110, 253, 0.2);\n  margin-left: 6px;\n  border-radius: 3px;\n  color: #0d6efd;\n  background-color: rgba(13, 110, 253, 0.1);\n}\n.simple-selected-tags .simple-icon {\n  margin-left: 3px;\n  cursor: pointer;\n}\n.simple-selected-tags .simple-icon:hover {\n  color: #0257d5;\n}\n\n.simple-upload-list {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.simple-uploader-dragger {\n  background: #f8f9fa;\n  border: 1px dashed #dee2e6;\n  border-radius: 4px;\n  cursor: pointer;\n  padding: 20px;\n  width: 360px;\n  height: 180px;\n  text-align: center;\n}\n.simple-uploader-dragger:hover {\n  border: 1px dashed #0d6efd;\n}\n.simple-uploader-dragger.is-dragover {\n  border: 2px dashed #0d6efd;\n  background: rgba(13, 110, 253, 0.2);\n}\n\n.simple-upload-list-item {\n  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);\n  font-size: 14px;\n  line-height: 1.8;\n  margin-top: 5px;\n  box-sizing: border-box;\n  border-radius: 4px;\n  min-width: 200px;\n  position: relative;\n}\n.simple-upload-list-item:first-child {\n  margin-top: 10px;\n}\n.simple-upload-list-item .file-name {\n  margin-left: 5px;\n  margin-right: 40px;\n}\n.simple-upload-list-item .file-name svg {\n  margin-right: 5px;\n  color: #adb5bd;\n}\n.simple-upload-list-item .file-name-error {\n  color: #dc3545;\n}\n.simple-upload-list-item .file-name-error svg {\n  color: #dc3545;\n}\n.simple-upload-list-item .file-status {\n  display: block;\n  position: absolute;\n  right: 5px;\n  top: 0;\n  line-height: inherit;\n}\n.simple-upload-list-item .file-actions {\n  display: none;\n  position: absolute;\n  right: 7px;\n  top: 0;\n  line-height: inherit;\n  cursor: pointer;\n}\n.simple-upload-list-item:hover {\n  background-color: #e9ecef;\n}\n.simple-upload-list-item:hover .file-status {\n  display: none;\n}\n.simple-upload-list-item:hover .file-actions {\n  display: block;\n}\n\n.simple-progress-bar {\n  width: 100%;\n  box-sizing: border-box;\n}\n.simple-progress-bar .simple-progress-bar-outer {\n  border-radius: 0.25rem;\n  background-color: #e9ecef;\n  overflow: hidden;\n  position: relative;\n}\n.simple-progress-bar .simple-progress-bar-inner {\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  height: 100%;\n  border-radius: 0.25rem;\n  line-height: 1;\n  transition: width 0.6s ease;\n}\n.simple-progress-bar .simple-progress-bar-inner .inner-text {\n  color: #fff;\n  font-size: 0.75rem;\n  margin: 0 5px;\n}\n.simple-progress-bar .color-primary {\n  background-color: #0d6efd;\n}\n.simple-progress-bar .color-secondary {\n  background-color: #6c757d;\n}\n.simple-progress-bar .color-success {\n  background-color: #52c41a;\n}\n.simple-progress-bar .color-info {\n  background-color: #17a2b8;\n}\n.simple-progress-bar .color-warning {\n  background-color: #fadb14;\n}\n.simple-progress-bar .color-danger {\n  background-color: #dc3545;\n}\n.simple-progress-bar .color-light {\n  background-color: #f8f9fa;\n}\n.simple-progress-bar .color-dark {\n  background-color: #343a40;\n}';
styleInject(css_248z);

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(
          target,
          key,
          Object.getOwnPropertyDescriptor(source, key),
        );
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true,
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return (
    _arrayWithHoles(arr) ||
    _iterableToArrayLimit(arr, i) ||
    _unsupportedIterableToArray(arr, i) ||
    _nonIterableRest()
  );
}

function _toConsumableArray(arr) {
  return (
    _arrayWithoutHoles(arr) ||
    _iterableToArray(arr) ||
    _unsupportedIterableToArray(arr) ||
    _nonIterableSpread()
  );
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (
    (typeof Symbol !== 'undefined' && iter[Symbol.iterator] != null) ||
    iter['@@iterator'] != null
  )
    return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _i =
    arr == null
      ? null
      : (typeof Symbol !== 'undefined' && arr[Symbol.iterator]) ||
        arr['@@iterator'];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i['return'] != null) _i['return']();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === 'string') return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === 'Object' && o.constructor) n = o.constructor.name;
  if (n === 'Map' || n === 'Set') return Array.from(o);
  if (n === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError(
    'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

function _nonIterableRest() {
  throw new TypeError(
    'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
  );
}

var _excluded = ['className', 'theme'];
fontawesomeSvgCore.library.add(freeSolidSvgIcons.fas);
var Icon = function Icon(props) {
  // icon-primary
  var className = props.className,
    theme = props.theme,
    restProps = _objectWithoutProperties(props, _excluded);

  var classes = classNames__default['default'](
    'viking-icon',
    className,
    _defineProperty({}, 'icon-'.concat(theme), theme),
  );
  return /*#__PURE__*/ React__default['default'].createElement(
    reactFontawesome.FontAwesomeIcon,
    _objectSpread2(
      {
        className: classes,
      },
      restProps,
    ),
  );
};

var _excluded$1 = ['children', 'classNames', 'animation', 'wrapper'];

var Transition = function Transition(props) {
  var children = props.children,
    classNames = props.classNames,
    animation = props.animation,
    wrapper = props.wrapper,
    restProps = _objectWithoutProperties(props, _excluded$1);

  return /*#__PURE__*/ React__default['default'].createElement(
    reactTransitionGroup.CSSTransition,
    _objectSpread2(
      {
        classNames: classNames ? classNames : animation,
      },
      restProps,
    ),
    wrapper
      ? /*#__PURE__*/ React__default['default'].createElement(
          'div',
          null,
          children,
        )
      : children,
  );
};

Transition.defaultProps = {
  unmountOnExit: true,
  appear: true,
};

var Alert = function Alert(props) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    hide = _useState2[0],
    setHide = _useState2[1]; //是否隐藏alert

  var alertRef = React.useRef(null);
  var title = props.title,
    description = props.description,
    type = props.type,
    onClose = props.onClose,
    closable = props.closable;
  var classes = classNames__default['default'](
    'simple-alert',
    _defineProperty({}, 'simple-alert-'.concat(type), type),
  );
  var titleClass = classNames__default['default']('simple-alert-title', {
    'bold-title': description,
  });

  var handleClose = function handleClose(e) {
    onClose && onClose(e);
    setHide(true);
  };

  return /*#__PURE__*/ React__default['default'].createElement(
    Transition,
    {
      in: !hide,
      timeout: 300,
      animation: 'zoom-in-top',
    },
    /*#__PURE__*/ React__default['default'].createElement(
      'div',
      {
        className: classes,
        ref: alertRef,
      },
      /*#__PURE__*/ React__default['default'].createElement(
        'span',
        {
          className: titleClass,
        },
        title,
      ),
      description &&
        /*#__PURE__*/ React__default['default'].createElement(
          'p',
          {
            className: 'simple-alert-desc',
          },
          description,
        ),
      closable &&
        /*#__PURE__*/ React__default['default'].createElement(
          'span',
          {
            className: 'simple-alert-close',
            onClick: handleClose,
          },
          /*#__PURE__*/ React__default['default'].createElement(Icon, {
            icon: 'times',
          }),
        ),
    ),
  );
};

Alert.defaultProps = {
  type: 'default',
  closable: true,
};

function useClickOutSize(ref, handler) {
  React.useEffect(
    function () {
      var listener = function listener(event) {
        if (!ref.current || ref.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener('click', listener);
      return function () {
        document.removeEventListener('click', listener);
      };
    },
    [ref, handler],
  );
}

var debounce = function debounce(fn, wait) {
  var timer = null;
  return function () {
    for (
      var _len = arguments.length, reset = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      reset[_key] = arguments[_key];
    }

    clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(void 0, reset);
    }, wait);
  };
};

var useDebounce = function useDebounce(fn) {
  var wait =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 300;
  var fnRef = React.useRef(); // 页面首次渲染时利用ref保证防抖函数的唯一性

  React.useEffect(function () {
    fnRef.current = debounce(fn, wait);
  }, []);
  return {
    fnRef: fnRef,
  };
};

var _excluded$2 = ['disabled', 'size', 'icon', 'prepend', 'append', 'style'];
var Input = /*#__PURE__*/ React.forwardRef(function (props, ref) {
  var _classNames;

  var disabled = props.disabled,
    size = props.size,
    icon = props.icon,
    prepend = props.prepend,
    append = props.append,
    style = props.style,
    restProps = _objectWithoutProperties(props, _excluded$2);

  var cnames = classNames__default['default'](
    'simple-input-wrapper',
    ((_classNames = {}),
    _defineProperty(_classNames, 'input-size-'.concat(size), size),
    _defineProperty(_classNames, 'is-disabled', disabled),
    _defineProperty(_classNames, 'input-group', prepend || append),
    _defineProperty(_classNames, 'input-group-append', !!append),
    _defineProperty(_classNames, 'input-group-prepend', !!prepend),
    _classNames),
  ); // 确保value是一个正常值

  var fixControlledValue = function fixControlledValue(value) {
    if (typeof value === 'undefined' || value === null) {
      return '';
    }

    return value;
  }; // 如果value 存在,则删除defaultValue,确保value和defaultValue的唯一性

  if ('value' in props) {
    delete restProps.defaultValue;
    restProps.value = fixControlledValue(props.value);
  }

  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      className: cnames,
      style: style,
    },
    prepend &&
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: 'simple-input-group-prepend',
        },
        prepend,
      ),
    icon &&
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: 'icon-wrapper',
        },
        /*#__PURE__*/ React__default['default'].createElement(Icon, {
          icon: icon,
          title: 'title-'.concat(icon),
        }),
      ),
    /*#__PURE__*/ React__default['default'].createElement(
      'input',
      _objectSpread2(
        {
          ref: ref,
          className: 'simple-input-inner',
          disabled: disabled,
        },
        restProps,
      ),
    ),
    append &&
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: 'simple-input-group-append',
        },
        append,
      ),
  );
});
Input.defaultProps = {
  disabled: false,
  size: 'lg',
};

var _excluded$3 = ['fetchSuggestions', 'onSelect', 'value', 'renderOption'];
var keyBoardEnum;

(function (keyBoardEnum) {
  keyBoardEnum['ArrowUp'] = 'ArrowUp';
  keyBoardEnum['ArrowDown'] = 'ArrowDown';
  keyBoardEnum['Enter'] = 'Enter';
  keyBoardEnum['Escape'] = 'Escape';
})(keyBoardEnum || (keyBoardEnum = {}));

var AutoComplete = function AutoComplete(props) {
  var fetchSuggestions = props.fetchSuggestions,
    onSelect = props.onSelect,
    value = props.value,
    renderOption = props.renderOption,
    restProps = _objectWithoutProperties(props, _excluded$3);

  var _useState = React.useState(value),
    _useState2 = _slicedToArray(_useState, 2),
    inputValue = _useState2[0],
    setInputValue = _useState2[1];

  var _useState3 = React.useState([]),
    _useState4 = _slicedToArray(_useState3, 2),
    suggestions = _useState4[0],
    setSuggestions = _useState4[1];

  var _useState5 = React.useState(false),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];

  var _useState7 = React.useState(false),
    _useState8 = _slicedToArray(_useState7, 2),
    showDropdown = _useState8[0],
    setShowDropdown = _useState8[1];

  var _useState9 = React.useState(-1),
    _useState10 = _slicedToArray(_useState9, 2),
    highlightIndex = _useState10[0],
    setHighlightIndex = _useState10[1];

  var componentRef = React.useRef(null); // 当在组件外部进行点击时, 关闭下拉选项菜单

  useClickOutSize(componentRef, function () {
    setShowDropdown(false);
  }); // 当suggestions 发生变化 是判断是否需要重新时候highlightIndex

  React.useEffect(
    function () {
      if (highlightIndex !== -1) {
        setHighlightIndex(-1);
      }
    },
    [suggestions],
  ); // 调用输入输入建议的方法, 向suggestions填充数据

  var fetchData = function fetchData(value) {
    setSuggestions([]);
    if (!value) return;
    var results = fetchSuggestions(value);

    if (results instanceof Promise) {
      setLoading(true);
      results.then(function (data) {
        setLoading(false);
        setSuggestions(data);

        if (data.length > 0) {
          setShowDropdown(true);
        }
      });
    } else {
      setSuggestions(results);
      setShowDropdown(true);

      if (results.length > 0) {
        setShowDropdown(true);
      }
    }
  };

  var _useDebounce = useDebounce(fetchData, 500),
    fnRef = _useDebounce.fnRef;

  var handleChange = function handleChange(e) {
    var value = e.target.value.trim();
    setInputValue(value);
    fnRef.current(value);
  };

  var handleSelect = function handleSelect(item) {
    setInputValue(item.value);
    setShowDropdown(false);
    onSelect && onSelect(item);
  };

  var highlight = function highlight(index) {
    if (index < 0) index = 0;

    if (index >= suggestions.length) {
      index = suggestions.length - 1;
    }

    setHighlightIndex(index);
  };

  var handleKeyDown = function handleKeyDown(e) {
    switch (e.key) {
      case keyBoardEnum.Enter:
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex]);
        }

        break;

      case keyBoardEnum.ArrowDown:
        highlight(highlightIndex + 1);
        break;

      case keyBoardEnum.ArrowUp:
        highlight(highlightIndex - 1);
        break;

      case keyBoardEnum.Escape:
        setShowDropdown(false);
    }
  };

  var renderTemplate = function renderTemplate(item) {
    return renderOption ? renderOption(item) : item.value;
  };

  var renderDropdown = function renderDropdown() {
    return /*#__PURE__*/ React__default['default'].createElement(
      Transition,
      {
        in: showDropdown || loading,
        animation: 'zoom-in-top',
        timeout: 300,
        onExited: function onExited() {
          setSuggestions([]);
        },
      },
      /*#__PURE__*/ React__default['default'].createElement(
        'ul',
        {
          className: 'simple-suggestion-list',
        },
        loading &&
          /*#__PURE__*/ React__default['default'].createElement(
            'div',
            {
              className: 'suggstions-loading-icon',
            },
            /*#__PURE__*/ React__default['default'].createElement(Icon, {
              icon: 'spinner',
              spin: true,
            }),
          ),
        suggestions.map(function (item, index) {
          var cnams = classNames__default['default']('suggestion-item', {
            'is-active': index === highlightIndex,
          });
          return /*#__PURE__*/ React__default['default'].createElement(
            'li',
            {
              key: index,
              className: cnams,
              onClick: function onClick() {
                return handleSelect(item);
              },
            },
            renderTemplate(item),
          );
        }),
      ),
    );
  };

  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      ref: componentRef,
      className: 'simple-auto-complete',
    },
    /*#__PURE__*/ React__default['default'].createElement(
      Input,
      _objectSpread2(
        {
          value: inputValue,
          onChange: handleChange,
          onKeyDown: handleKeyDown,
        },
        restProps,
      ),
    ),
    renderDropdown(),
  );
};

var _excluded$4 = [
  'className',
  'btnType',
  'disabled',
  'size',
  'children',
  'href',
  'share',
];
/**
 * 页面中最常用的的按钮元素，适合于完成特定的交互，支持 HTML button 和 a 链接 的所有属性
 * ### 引用方法
 * ```js
 * import { Button } from 'simple-element'
 * ```
 */

var Button = function Button(props) {
  var _classNames;

  var className = props.className,
    btnType = props.btnType,
    disabled = props.disabled,
    size = props.size,
    children = props.children,
    href = props.href,
    share = props.share,
    resetProps = _objectWithoutProperties(props, _excluded$4); // *btn btn-lg btn-primary

  var classes = classNames__default['default'](
    'btn',
    className,
    ((_classNames = {}),
    _defineProperty(_classNames, 'btn-'.concat(btnType), btnType),
    _defineProperty(_classNames, 'btn-'.concat(size), size),
    _defineProperty(_classNames, 'disabled', btnType === 'link' && disabled),
    _defineProperty(_classNames, 'btn-'.concat(share), share),
    _classNames),
  );

  if (btnType === 'link' && href) {
    return /*#__PURE__*/ React__default['default'].createElement(
      'a',
      _objectSpread2(
        {
          href: href,
          className: classes,
        },
        resetProps,
      ),
      children,
    );
  } else {
    return /*#__PURE__*/ React__default['default'].createElement(
      'button',
      _objectSpread2(
        {
          className: classes,
          disabled: disabled,
        },
        resetProps,
      ),
      children,
    );
  }
};

Button.defaultProps = {
  disabled: false,
  btnType: 'default',
  share: 'round',
};

var MenuContext = /*#__PURE__*/ React.createContext({
  index: '0',
});
var Menu = function Menu(props) {
  var className = props.className,
    mode = props.mode,
    style = props.style,
    children = props.children,
    defaultIndex = props.defaultIndex,
    onSelect = props.onSelect,
    defaultOpenSubMenus = props.defaultOpenSubMenus;

  var _useState = React.useState(defaultIndex),
    _useState2 = _slicedToArray(_useState, 2),
    currentActive = _useState2[0],
    setActive = _useState2[1];

  var classes = classNames__default['default']('simple-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode === 'horizontal',
  });

  var handleClick = function handleClick(index) {
    setActive(index);
    onSelect && onSelect(index);
  };

  var passedContext = {
    index: currentActive ? currentActive : '0',
    onselect: handleClick,
    mode: mode,
    defaultOpenSubMenus: defaultOpenSubMenus,
  };

  var renderChildren = function renderChildren() {
    return React.Children.map(children, function (child, index) {
      var childElement = child;
      var displayName = childElement.type.displayName;

      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return /*#__PURE__*/ React.cloneElement(childElement, {
          index: index.toString(),
        });
      } else {
        console.error(
          'Warning: Menu has a child which is not a MenuItem component',
        );
      }
    });
  };

  return /*#__PURE__*/ React__default['default'].createElement(
    'ul',
    {
      className: classes,
      style: style,
      'data-testid': 'test-menu',
    },
    /*#__PURE__*/ React__default['default'].createElement(
      MenuContext.Provider,
      {
        value: passedContext,
      },
      renderChildren(),
    ),
  );
};
Menu.defaultProps = {
  mode: 'horizontal',
  defaultIndex: '0',
  defaultOpenSubMenus: [],
};

var MenuItem = function MenuItem(props) {
  var index = props.index,
    disabled = props.disabled,
    className = props.className,
    style = props.style,
    children = props.children;
  var context = React.useContext(MenuContext);
  var classes = classNames__default['default']('menu-item', className, {
    'is-disabled': disabled,
    'is-active': context.index === index,
  });

  var handleClick = function handleClick() {
    if (context.onselect && !disabled && typeof index === 'string') {
      context.onselect(index);
    }
  };

  return /*#__PURE__*/ React__default['default'].createElement(
    'li',
    {
      className: classes,
      style: style,
      onClick: handleClick,
    },
    children,
  );
};
MenuItem.displayName = 'MenuItem';

var SubMenu = function SubMenu(_ref) {
  var index = _ref.index,
    title = _ref.title,
    children = _ref.children,
    className = _ref.className;
  var context = React.useContext(MenuContext);
  var openedSubMenus = context.defaultOpenSubMenus;
  var isOpen =
    index && context.mode === 'vertical'
      ? openedSubMenus.includes(index)
      : false;

  var _useState = React.useState(isOpen),
    _useState2 = _slicedToArray(_useState, 2),
    menuOpen = _useState2[0],
    setOpen = _useState2[1];

  var classes = classNames__default['default'](
    'menu-item',
    'submenu-item',
    className,
    {
      'is-active': context.index === index,
      'is-opened': menuOpen,
      'is-vertical': context.mode === 'vertical',
    },
  );
  var subMenuClass = classNames__default['default']('simple-submenu', {
    'menu-opened': menuOpen,
  });

  var handleCLick = function handleCLick(e) {
    e.preventDefault();
    setOpen(!menuOpen);
  };

  var timer;

  var handleMouse = function handleMouse(e, toggle) {
    clearTimeout(timer);
    e.preventDefault();
    timer = setTimeout(function () {
      setOpen(toggle);
    });
  };

  var clickEvents =
    context.mode === 'vertical'
      ? {
          onClick: handleCLick,
        }
      : {};
  var hoverEvents =
    context.mode !== 'vertical'
      ? {
          onMouseEnter: function onMouseEnter(e) {
            return handleMouse(e, true);
          },
          onMouseLeave: function onMouseLeave(e) {
            return handleMouse(e, false);
          },
        }
      : {};

  var renderChildren = function renderChildren() {
    var childrenComponent = React.Children.map(children, function (child, i) {
      var childElement = child;

      if (childElement.type.displayName === 'MenuItem') {
        return /*#__PURE__*/ React.cloneElement(childElement, {
          index: ''.concat(index, '-').concat(i),
        });
      } else {
        console.error(
          'Warning: SubMenu has a child which is not a MenuItem component',
        );
      }
    });
    return /*#__PURE__*/ React__default['default'].createElement(
      Transition,
      {
        in: menuOpen,
        timeout: 300,
        animation: 'zoom-in-top',
      },
      /*#__PURE__*/ React__default['default'].createElement(
        'ul',
        {
          className: subMenuClass,
        },
        childrenComponent,
      ),
    );
  };

  return /*#__PURE__*/ React__default['default'].createElement(
    'li',
    _objectSpread2(
      {
        key: index,
        className: classes,
      },
      hoverEvents,
    ),
    /*#__PURE__*/ React__default['default'].createElement(
      'div',
      _objectSpread2(
        {
          className: 'submenu-title',
        },
        clickEvents,
      ),
      title,
      /*#__PURE__*/ React__default['default'].createElement(Icon, {
        icon: 'angle-down',
        className: 'arrow-icon',
      }),
    ),
    renderChildren(),
  );
};
SubMenu.displayName = 'SubMenu';

var TransMenu = Menu;
TransMenu.Item = MenuItem;
TransMenu.SubMenu = SubMenu;

var Progress = function Progress(props) {
  var percent = props.percent,
    strokeHeight = props.strokeHeight,
    showText = props.showText,
    styles = props.styles,
    theme = props.theme;
  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      className: 'simple-progress-bar',
      style: styles,
    },
    /*#__PURE__*/ React__default['default'].createElement(
      'div',
      {
        className: 'simple-progress-bar-outer',
        style: {
          height: ''.concat(strokeHeight, 'px'),
        },
      },
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: 'simple-progress-bar-inner color-'.concat(theme),
          style: {
            width: ''.concat(percent, '%'),
          },
        },
        showText &&
          /*#__PURE__*/ React__default['default'].createElement(
            'span',
            {
              className: 'inner-text',
            },
            ''.concat(percent, '%'),
          ),
      ),
    ),
  );
};

Progress.defaultProps = {
  strokeHeight: 15,
  showText: true,
  theme: 'primary',
};

var SelectContext = /*#__PURE__*/ React.createContext({
  selectedValues: [],
});

var Select = function Select(props) {
  var defaultValue = props.defaultValue,
    placeholder = props.placeholder,
    children = props.children,
    multiple = props.multiple,
    name = props.name,
    disabled = props.disabled,
    onChange = props.onChange,
    onVisibleChange = props.onVisibleChange;
  var inputRef = React.useRef(null);
  var containerRef = React.useRef(null);
  var containerWidth = React.useRef(0);

  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    menuOpen = _useState2[0],
    setMenuOpen = _useState2[1];

  var _useState3 = React.useState(
      Array.isArray(defaultValue) ? defaultValue : [],
    ),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedValues = _useState4[0],
    setSelectedValues = _useState4[1];

  var _useState5 = React.useState(
      typeof defaultValue === 'string' ? defaultValue : '',
    ),
    _useState6 = _slicedToArray(_useState5, 2),
    value = _useState6[0],
    setValue = _useState6[1];

  useClickOutSize(containerRef, function () {
    setMenuOpen(false);

    if (onVisibleChange && menuOpen) {
      onVisibleChange(false);
    }
  });
  React.useEffect(
    function () {
      // auto input focus
      if (inputRef.current) {
        inputRef.current.focus();

        if (multiple && selectedValues.length > 0) {
          inputRef.current.placeholder = '';
        } else {
          if (placeholder) inputRef.current.placeholder = placeholder;
        }
      }
    },
    [selectedValues, multiple, placeholder],
  );
  React.useEffect(function () {
    if (containerRef.current) {
      containerWidth.current =
        containerRef.current.getBoundingClientRect().width;
    }
  });

  var handleClick = function handleClick(e) {
    e.preventDefault();

    if (!disabled) {
      setMenuOpen(!menuOpen);

      if (onVisibleChange) {
        onVisibleChange(!menuOpen);
      }
    }
  };

  var containerClass = classNames__default['default']('simple-select', {
    'menu-is-open': menuOpen,
    'is-disabled': disabled,
    'is-multiple': multiple,
  });

  var handleOptionClick = function handleOptionClick(value, isSelected) {
    // update value
    if (!multiple) {
      setMenuOpen(false);
      setValue(value);
      onVisibleChange && onVisibleChange(false);
    } else {
      setValue('');
    }

    var updatedValues = [value]; // click again to remove selected when is multiple mode

    if (multiple) {
      updatedValues = isSelected
        ? selectedValues.filter(function (v) {
            return v !== value;
          })
        : [].concat(_toConsumableArray(selectedValues), [value]);
      setSelectedValues(updatedValues);
    }

    onChange && onChange(value, updatedValues);
  };

  var generateOptions = function generateOptions() {
    return React__default['default'].Children.map(
      children,
      function (child, i) {
        var childElement = child;

        if (childElement.type.displayName === 'Option') {
          return /*#__PURE__*/ React__default['default'].cloneElement(
            childElement,
            {
              index: 'select-'.concat(i),
            },
          );
        } else {
          console.error(
            'Warning: Select has a child which is not a Option component',
          );
        }
      },
    );
  };

  var passedContext = {
    onSelect: handleOptionClick,
    selectedValues: selectedValues,
    multiple: multiple,
  };
  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      className: containerClass,
      ref: containerRef,
    },
    /*#__PURE__*/ React__default['default'].createElement(
      'div',
      {
        className: 'simple-select-input',
        onClick: handleClick,
      },
      /*#__PURE__*/ React__default['default'].createElement(Input, {
        ref: inputRef,
        placeholder: placeholder,
        value: value,
        readOnly: true,
        icon: 'angle-down',
        disabled: disabled,
        name: name,
      }),
    ),
    /*#__PURE__*/ React__default['default'].createElement(
      SelectContext.Provider,
      {
        value: passedContext,
      },
      /*#__PURE__*/ React__default['default'].createElement(
        Transition,
        {
          in: menuOpen,
          animation: 'zoom-in-top',
          timeout: 300,
        },
        /*#__PURE__*/ React__default['default'].createElement(
          'ul',
          {
            className: 'simple-select-dropdown',
          },
          generateOptions(),
        ),
      ),
    ),
    multiple &&
      /*#__PURE__*/ React__default['default'].createElement(
        'div',
        {
          className: 'simple-selected-tags',
          style: {
            maxWidth: containerWidth.current - 32,
          },
        },
        selectedValues.map(function (value, index) {
          return /*#__PURE__*/ React__default['default'].createElement(
            'span',
            {
              className: 'simple-tag',
              key: 'tag-'.concat(index),
            },
            value,
            /*#__PURE__*/ React__default['default'].createElement(Icon, {
              icon: 'times',
              onClick: function onClick() {
                handleOptionClick(value, true);
              },
            }),
          );
        }),
      ),
  );
};

var Option = function Option(_ref) {
  var value = _ref.value,
    label = _ref.label,
    disabled = _ref.disabled,
    children = _ref.children,
    index = _ref.index;

  var _useContext = React.useContext(SelectContext),
    onSelect = _useContext.onSelect,
    selectedValues = _useContext.selectedValues,
    multiple = _useContext.multiple;

  var isSelected = selectedValues.includes(value);
  var classes = classNames__default['default']('simple-select-item', {
    'is-disabled': disabled,
    'is-selected': isSelected,
  });

  var handleClick = function handleClick(e, value, isSelected) {
    e.preventDefault();

    if (onSelect && !disabled) {
      onSelect(value, isSelected);
    }
  };

  return /*#__PURE__*/ React__default['default'].createElement(
    'li',
    {
      key: index,
      className: classes,
      onClick: function onClick(e) {
        handleClick(e, value, isSelected);
      },
    },
    children || (label ? label : value),
    multiple &&
      isSelected &&
      /*#__PURE__*/ React__default['default'].createElement(Icon, {
        icon: 'check',
      }),
  );
};
Option.displayName = 'Option';

var TransSelect = Select;
TransSelect.Option = Option;

var TabPane = function TabPane(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      className: 'simple-tab-panel',
    },
    children,
  );
};

TabPane.displayName = 'TabPane';

var Tabs = function Tabs(props) {
  var defaultIndex = props.defaultIndex,
    onChange = props.onChange,
    className = props.className,
    children = props.children,
    type = props.type,
    animated = props.animated,
    activeBarMode = props.activeBarMode,
    centered = props.centered;

  var _useState = React.useState(defaultIndex),
    _useState2 = _slicedToArray(_useState, 2),
    activeIndex = _useState2[0],
    setActiveIndex = _useState2[1];

  var _useState3 = React.useState(),
    _useState4 = _slicedToArray(_useState3, 2),
    activeBarStyle = _useState4[0],
    setActiveBarStyle = _useState4[1];

  var tabsListRef = React.useRef(null);
  var tabsItemWidth = React.useRef(0);
  var cacheChildrenIndex = React.useRef([]);
  var navClass = classNames__default['default']('simple-tabs-nav', {
    'nav-line': type === 'line',
    'nav-card': type === 'card',
  });

  var _useState5 = React.useState({
      opacity: 0,
    }),
    _useState6 = _slicedToArray(_useState5, 2),
    tabStyle = _useState6[0],
    setTabStyle = _useState6[1];

  var centerStyle = {
    justifyContent: centered ? 'center' : 'flex-start',
  };
  React.useEffect(function () {
    // 如果animated为true 则初始化设置底部导航栏样式 否者使用border-bottom作为底部导航栏
    if (animated && tabStyle.opacity === 0 && type === 'line') {
      var parentElement = tabsListRef.current.children[defaultIndex];
      tabsItemWidth.current = parentElement.offsetWidth;
      var target = parentElement.children[0];
      inItActiveBarStyle(parentElement, target);
    }

    setTabStyle({
      opacity: 1,
    });
  }, []); // 初始化计算底部导航栏样式

  var inItActiveBarStyle = function inItActiveBarStyle(parentElement, target) {
    // 计算单个tabItem长度
    var barStyle = {};
    var parentElementOffSetWith = parentElement.offsetWidth;

    if (activeBarMode === 'fill') {
      barStyle.width = parentElementOffSetWith + 'px';
      barStyle.left = parentElement.offsetLeft + 'px';
    } else {
      barStyle.left = target.offsetLeft + 'px';
      barStyle.width = target.offsetWidth + 'px';
    }

    setActiveBarStyle(barStyle);
  }; // 切换tab底部导航栏样式

  var changeBarStyle = function changeBarStyle(currentTarget, index) {
    var left;
    var width = tabsItemWidth.current;

    if (activeBarMode === 'center') {
      var ele = currentTarget.children[0];
      left = ele.offsetLeft;

      if (ele.offsetWidth !== tabsItemWidth.current) {
        width = ele.offsetWidth;
      }
    } else {
      left = currentTarget.offsetLeft;

      if (currentTarget.offsetWidth !== tabsItemWidth.current) {
        width = currentTarget.offsetWidth;
      }
    }

    var style = {
      width: width + 'px',
      left: left + 'px',
    };
    setActiveBarStyle(style);
  };

  var handleClick = function handleClick(e, index, disabled) {
    if (!disabled) {
      setActiveIndex(index);

      if (type === 'line' && animated) {
        changeBarStyle(e.currentTarget);
      }

      onChange && onChange(index);
    }
  }; // 当前是否为激活项

  var isActive = function isActive(index) {
    return index === activeIndex;
  }; // 是否渲染Bar组件

  var isRenderBar = function isRenderBar() {
    return type === 'line' && animated;
  }; // 渲染头部导航栏标签

  var renderNavLinks = function renderNavLinks() {
    return React.Children.map(children, function (child, index) {
      var childElement = child;
      var _childElement$props = childElement.props,
        label = _childElement$props.label,
        disabled = _childElement$props.disabled,
        tab = _childElement$props.tab;
      var classes = classNames__default['default']('simple-tabs-nav-item', {
        'is-active': activeIndex === index,
        disabled: disabled,
        'is-active-bottom-bar': activeIndex === index && !animated,
      });
      var childEle;

      if (tab) {
        childEle = typeof tab === 'function' ? tab(index) : tab;
      } else {
        childEle = label;
      }

      return /*#__PURE__*/ React.createElement(
        'li',
        {
          className: classes,
          key: 'nav-item-'.concat(index),
          onClick: function onClick(e) {
            handleClick(e, index, disabled);
          },
        },
        /*#__PURE__*/ React.createElement('div', null, ' ', childEle),
      );
    });
  };

  var renderContent = function renderContent() {
    return React.Children.map(children, function (child, index) {
      var displayStyle = isActive(index) ? 'block' : 'none'; // 如果当前项是否激活则添加到cacheChildren里面

      if (isActive(index)) {
        cacheChildrenIndex.current.push(index);
      } // 判断是否需要渲染child, 减少不必要的渲染开销

      var isRenderChild = cacheChildrenIndex.current.includes(index);
      return /*#__PURE__*/ React.createElement(
        'div',
        {
          style: {
            display: displayStyle,
          },
        },
        isRenderChild && child,
      );
    });
  };

  var renderAnimateBar = function renderAnimateBar() {
    return /*#__PURE__*/ React.createElement('div', {
      className: 'simple-tabs-ink-bar simple-ink-bar-animated',
      style: activeBarStyle,
    });
  };

  return /*#__PURE__*/ React.createElement(
    'div',
    {
      style: tabStyle,
      className: 'simple-tabs '.concat(
        className ? classNames__default['default'] : '',
      ),
    },
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: navClass,
        style: centerStyle,
      },
      /*#__PURE__*/ React.createElement(
        'ul',
        {
          ref: tabsListRef,
          className: 'tabsList',
        },
        renderNavLinks(),
        isRenderBar() && renderAnimateBar(),
      ),
    ),
    /*#__PURE__*/ React.createElement(
      'div',
      {
        className: 'simple-tabs-content',
      },
      /*#__PURE__*/ React.createElement(
        'div',
        {
          className: 'd-flex',
          style: centerStyle,
        },
        ' ',
        renderContent(),
      ),
    ),
  );
};

Tabs.defaultProps = {
  defaultIndex: 0,
  type: 'line',
  activeBarMode: 'center',
  animated: false,
  centered: false,
};

var Dragger = function Dragger(props) {
  var onFile = props.onFile,
    children = props.children;

  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    dragOver = _useState2[0],
    setDragOver = _useState2[1];

  var klass = classNames__default['default']('.simple-uploader-dragger', {
    'is-dragover': dragOver,
  });

  var handleDrop = function handleDrop(e) {
    e.preventDefault();
    setDragOver(false);
    onFile(e.dataTransfer.files);
  };

  var handleDrag = function handleDrag(e, over) {
    e.preventDefault();
    setDragOver(over);
  };

  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      className: klass,
      onDragOver: function onDragOver(e) {
        return handleDrag(e, true);
      },
      onDragLeave: function onDragLeave(e) {
        return handleDrag(e, false);
      },
      onDrop: handleDrop,
    },
    children,
  );
};

var UploadList = function UploadList(props) {
  var fileList = props.fileList,
    onRemove = props.onRemove;
  return /*#__PURE__*/ React__default['default'].createElement(
    'ul',
    {
      className: 'simple-upload-list',
    },
    fileList.map(function (item) {
      return /*#__PURE__*/ React__default['default'].createElement(
        'li',
        {
          className: 'simple-upload-list-item',
          key: item.uid,
        },
        /*#__PURE__*/ React__default['default'].createElement(
          'span',
          {
            className: 'file-name file-name-'.concat(item.status),
          },
          /*#__PURE__*/ React__default['default'].createElement(Icon, {
            icon: 'file-alt',
            theme: 'secondary',
          }),
          item.name,
        ),
        /*#__PURE__*/ React__default['default'].createElement(
          'span',
          {
            className: 'file-status',
          },
          (item.status === 'uploading' || item.status === 'ready') &&
            /*#__PURE__*/ React__default['default'].createElement(Icon, {
              icon: 'spinner',
              spin: true,
              theme: 'primary',
            }),
          item.status === 'success' &&
            /*#__PURE__*/ React__default['default'].createElement(Icon, {
              icon: 'check-circle',
              theme: 'success',
            }),
          item.status === 'error' &&
            /*#__PURE__*/ React__default['default'].createElement(Icon, {
              icon: 'times-circle',
              theme: 'danger',
            }),
        ),
        /*#__PURE__*/ React__default['default'].createElement(
          'span',
          {
            className: 'file-actions',
          },
          /*#__PURE__*/ React__default['default'].createElement(Icon, {
            icon: 'times',
            onClick: function onClick() {
              onRemove(item);
            },
          }),
        ),
        item.status === 'uploading' &&
          /*#__PURE__*/ React__default['default'].createElement(Progress, {
            percent: item.percent || 0,
          }),
      );
    }),
  );
};

var UpLoad = function UpLoad(props) {
  var action = props.action,
    onError = props.onError,
    onProgress = props.onProgress,
    onSuccess = props.onSuccess,
    beforeUpload = props.beforeUpload,
    onChange = props.onChange,
    onRemove = props.onRemove,
    name = props.name,
    headers = props.headers,
    data = props.data,
    withCredentials = props.withCredentials,
    accept = props.accept,
    multiple = props.multiple,
    children = props.children,
    drag = props.drag,
    defaultFileList = props.defaultFileList;
  var fileInputRef = React.useRef(null);

  var _useState = React.useState(defaultFileList || []),
    _useState2 = _slicedToArray(_useState, 2),
    fileList = _useState2[0],
    setFileList = _useState2[1]; // 触发input的Click事件拉去选择文件的对话框

  var handleClick = function handleClick() {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  var handleRemove = function handleRemove(file) {
    setFileList(function (prevList) {
      return prevList.filter(function (item) {
        return item.uid !== file.uid;
      });
    });

    if (onRemove) {
      onRemove(file);
    }
  };

  var updateFileList = function updateFileList(updateFile, updateObj) {
    setFileList(function (prevList) {
      return prevList.map(function (file) {
        if (file.uid === updateFile.uid) {
          return _objectSpread2(_objectSpread2({}, file), updateObj);
        } else {
          return file;
        }
      });
    });
  };

  var handleFileChange = function handleFileChange(e) {
    var files = e.target.files;

    if (!files) {
      return;
    }

    uploadFiles(files);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  var uploadFiles = function uploadFiles(files) {
    var postFiles = Array.from(files);
    postFiles.forEach(function (file) {
      if (!beforeUpload) {
        post(file);
      } else {
        var result = beforeUpload(file);

        if (result instanceof Promise) {
          result.then(function (processedFile) {
            post(processedFile);
          });
        } else if (result !== false) {
          post(file);
        }
      }
    });
  };

  var post = function post(file) {
    //创建UploadFiled对象 更新fileList
    var _file = {
      uid: Date.now() + 'upload-file',
      status: 'ready',
      name: file.name,
      size: file.size,
      percent: 0,
      raw: file,
    };
    setFileList(function (prevList) {
      return [_file].concat(_toConsumableArray(prevList));
    });
    var formData = new FormData();
    formData.append(name || 'file', file);

    if (data) {
      Object.keys(data).forEach(function (key) {
        formData.append(key, data[key]);
      });
    }

    axios__default['default']
      .post(action, formData, {
        headers: _objectSpread2(
          _objectSpread2({}, headers),
          {},
          {
            'Content-Type': 'multipart/form-data',
          },
        ),
        withCredentials: withCredentials,
        onUploadProgress: function onUploadProgress(e) {
          var percentage = Math.round((e.loaded * 100) / e.total) || 0;

          if (percentage < 100) {
            updateFileList(_file, {
              percent: percentage,
              status: 'uploading',
            });
            onProgress && onProgress(percentage, _file);
          }
        },
      })
      .then(function (resp) {
        updateFileList(_file, {
          status: 'success',
          response: resp.data,
        });
        _file.status = 'success';
        _file.response = resp.data;
        onSuccess && onSuccess(resp.data, _file);
        onChange && onChange(_file);
      })
      .catch(function (err) {
        updateFileList(_file, {
          status: 'error',
          error: err,
        });
        _file.status = 'error';
        _file.error = err;
        onError && onError(err, _file);
        onChange && onChange(_file);
      });
  };

  return /*#__PURE__*/ React__default['default'].createElement(
    'div',
    {
      className: 'simple-upload-component',
    },
    /*#__PURE__*/ React__default['default'].createElement(
      'div',
      {
        className: 'simple-upload-input',
        style: {
          display: 'inline-block',
        },
        onClick: handleClick,
      },
      drag
        ? /*#__PURE__*/ React__default['default'].createElement(
            Dragger,
            {
              onFile: function onFile(files) {
                uploadFiles(files);
              },
            },
            children,
          )
        : children,
      /*#__PURE__*/ React__default['default'].createElement('input', {
        className: 'simple-file-input',
        style: {
          display: 'none',
        },
        ref: fileInputRef,
        onChange: handleFileChange,
        type: 'file',
        accept: accept,
        multiple: multiple,
      }),
    ),
    /*#__PURE__*/ React__default['default'].createElement(UploadList, {
      fileList: fileList,
      onRemove: handleRemove,
    }),
  );
};

UpLoad.defaultProps = {
  name: 'file',
  drag: false,
  withCredentials: false,
  multiple: false,
};

exports.Alert = Alert;
exports.AutoComplete = AutoComplete;
exports.Button = Button;
exports.Icon = Icon;
exports.Input = Input;
exports.Menu = TransMenu;
exports.Progress = Progress;
exports.Select = TransSelect;
exports.TabPane = TabPane;
exports.Tabs = Tabs;
exports.Upload = UpLoad;
