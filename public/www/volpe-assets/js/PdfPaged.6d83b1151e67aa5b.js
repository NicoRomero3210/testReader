(self["webpackChunk"] = self["webpackChunk"] || []).push([["PdfPaged"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/AnnotationLayer.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/AnnotationLayer.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'AnnotationLayer',
  props: {
    hideLayer: {
      type: Boolean,
      required: true,
      "default": false
    },
    pageNumber: {
      type: Number,
      required: true,
      "default": false
    },
    annotationLayerStyles: {
      required: true
    },
    pageAnnotationLayerUrl: {
      type: String,
      required: false
    }
  },
  data: function data() {
    return {
      annotationLayerHtml: null
    };
  },
  computed: _objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['isPreviewMode'])),
  mounted: function mounted() {
    var _this = this;

    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState === XMLHttpRequest.DONE) {
        if (httpRequest.status !== 200) return;
        _this.annotationLayerHtml = httpRequest.responseText;
      }
    };

    httpRequest.open('GET', this.pageAnnotationLayerUrl);
    httpRequest.send();
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(['goToPage'])), {}, {
    handleLinks: function handleLinks(e) {
      if (e.target.nodeName !== 'A') {
        return;
      }

      if (e.target.getAttribute('href').includes('#goToPage:')) {
        var targetPage = parseInt(e.target.getAttribute('href').replace('#goToPage:', ''));
        this.goToPage({
          page: targetPage,
          trigger: 'click',
          source: 'internal link'
        });
      } // Force external links to open in another tab


      if (window.location.hostname !== e.target.hostname) {
        e.preventDefault();
        window.open(e.target.getAttribute('href'), '_blank');
      }
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PdfPagedReaderViewerPage_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PdfPagedReaderViewerPage.vue */ "./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue");
/* harmony import */ var _shared_js_utils_isTouchDevice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _shared_/js/utils/isTouchDevice.js */ "./_shared_/js/utils/isTouchDevice.js");
/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! normalize-wheel */ "./node_modules/normalize-wheel/index.js");
/* harmony import */ var normalize_wheel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(normalize_wheel__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'pdf-paged-reader-viewer',
  components: {
    PdfPagedReaderViewerPage: _PdfPagedReaderViewerPage_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      canLoadPages: false,
      overrideOringinalSize: 0,
      overridenOringinalSize: {
        width: 0,
        height: 0
      },
      hammer: null,
      minScale: 0.85,
      maxScale: 4,
      ignoreNextPans: 0,
      startedPanOverSelectionLayer: false,
      panning: false,
      transform: {},
      lastTransform: {},
      initialTransform: {
        x: 0,
        y: 0,
        scale: 1
      },
      transition: {
        transform: null
      },
      zoomBounceTimeout: null
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapState)(['device', 'isLoading', 'uiHidden', 'publication', 'touch', 'ui', 'selectionInProgressInPage'])), (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapGetters)(['currentPage', 'currentPages', 'onlyMobileVisible', 'doublePageMode'])), {}, {
    intendedNumberOfPages: function intendedNumberOfPages() {
      return this.doublePageMode ? 2 : 1;
    },
    rawChunkedPagesGroups: function rawChunkedPagesGroups() {
      var _this = this;

      // console.log('rawChunkedPagesGroups');
      // console.log(this.publication.files_urls);
      // If we don't do this, then we actually change the original array when doing the .shift()
      var pages = Object.assign([], this.publication.files_urls);
      var groups = [];

      if (this.intendedNumberOfPages === 2) {
        groups = [[_objectSpread({
          pageNumber: 1
        }, pages.shift())]];
      } else {
        groups = [];
      }

      var chunks = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.chunk)(pages, this.intendedNumberOfPages); // console.log('this.intendedNumberOfPages', this.intendedNumberOfPages);

      chunks.forEach(function (chunk, index) {
        var group = [// This already sums `1`, to take into account the first page
        _objectSpread({
          pageNumber: (index + 1) * _this.intendedNumberOfPages
        }, chunk[0])]; // If there're 2 pages in this chunk, add the second one to the group

        if (chunk[1]) {
          // This already sums `1`, to take into account the first page
          group.push(_objectSpread({
            pageNumber: (index + 1) * _this.intendedNumberOfPages + 1
          }, chunk[1]));
        } // console.log('group', group);


        groups.push(group);
      });
      return groups;
    },
    currentPagesGroup: function currentPagesGroup() {
      var _this2 = this;

      // console.log('currentPagesGroup');
      return this.rawChunkedPagesGroups // we could put a flag here to enable scroll mode
      // instead of removing it
      .filter(function (pagesGroup) {
        return pagesGroup.filter(function (pageData) {
          var isCurrentPage = pageData.pageNumber === _this2.currentPage; // See if we can use this to preload pages
          // const pageMustBePreLoaded =
          //     pageData.pageNumber - this.intendedNumberOfPages <= this.currentPage &&
          //     pageData.pageNumber + this.intendedNumberOfPages > this.currentPage;
          // return isCurrentPage && pageMustBePreLoaded;

          return isCurrentPage;
        }).length > 0;
      }).map(function (group) {
        return group.map(function (page) {
          var pageNamePayload = page.large.substring(page.large.lastIndexOf('/') + 1).replace('.jpg', '').split('_');
          var oringinalSize = {
            width: parseInt(pageNamePayload[2]),
            height: parseInt(pageNamePayload[3])
          };
          var predominantColor = "#".concat(pageNamePayload[4]);
          return _objectSpread(_objectSpread({}, page), {}, {
            pageNamePayload: pageNamePayload,
            oringinalSize: oringinalSize,
            predominantColor: predominantColor
          });
        });
      });
    },
    pagesGroups: function pagesGroups(pagesGroupIndex) {
      var _this3 = this;

      // console.log('pagesGroups');
      this.overrideOringinalSize = 0;
      this.overridenOringinalSize.width = 0;
      this.overridenOringinalSize.height = 0;
      this.overrideActualSize = 0; // this.overridenActualSize.width = 0;
      // this.overridenActualSize.height = 0;

      return this.currentPagesGroup.map(function (group) {
        return group.map(function (page) {
          var scaledSize = _this3.pageScaledSize(page.oringinalSize.width, page.oringinalSize.height);

          var scaledSizeScale = _this3.pageScaledSizeScale(page.oringinalSize, scaledSize);

          return _objectSpread(_objectSpread({}, page), {}, {
            scaledSize: scaledSize,
            scaledSizeScale: scaledSizeScale
          });
        });
      });
    },
    pageAvailableViewportWidth: function pageAvailableViewportWidth() {
      return this.device.width / this.intendedNumberOfPages;
    },
    currentWrapperScaledSize: function currentWrapperScaledSize() {
      var width = 0;
      var height = 0;

      if (this.overrideOringinalSize === this.currentPages.length) {
        var scaledSize = this.pageScaledSize(this.overridenOringinalSize.width, this.overridenOringinalSize.height);
        return {
          width: scaledSize.width * this.currentPages.length,
          height: scaledSize.height
        };
      }

      this.pagesGroups.map(function (group) {
        group.map(function (page) {
          width += page.scaledSize.width;
          height = page.scaledSize.height;
        });
      });
      return {
        width: width,
        height: height
      };
    },
    pageWrapperStyles: function pageWrapperStyles() {
      var transition = '';
      if (this.transition.transform) transition += this.transition.transform;
      return {
        // we could put a flag here to enable scroll mode
        // instead of removing it
        width: "".concat(this.currentWrapperScaledSize.width, "px"),
        height: "".concat(this.currentWrapperScaledSize.height, "px"),
        transform: "translateX(".concat(this.transform.x, "px) translateY(").concat(this.transform.y, "px) scale(").concat(this.transform.scale, ")"),
        transition: transition
      };
    }
  }),
  watch: {
    currentPage: function currentPage(_currentPage, lastCurrentPage) {
      if (_currentPage !== lastCurrentPage) {
        this.$bus.$emit('pageChanged', {
          pageNumber: _currentPage
        });
      }
    },
    'device.orientation': function deviceOrientation(currentScreenOrientation, previousSreenOrientation) {
      var _this4 = this;

      /**
       * We need to wait until next tick so that we can query the updated
       * clientWidth and scrollHeight values
       */
      this.$nextTick(function () {
        _this4.resetTouchObject();
        /**
         * If going from portrait to landscape,
         * then zoom to page width
         */


        if (currentScreenOrientation === 'landscape' && previousSreenOrientation === 'portrait') {
          _this4.lastTransform.scale = _this4.transform.scale = _this4.device.width / _this4.$refs.PdfPagedReaderViewerViewport.clientWidth;
          _this4.lastTransform.y = _this4.transform.y = (_this4.$refs.PdfPagedReaderViewerViewport.scrollHeight * _this4.transform.scale - _this4.device.height) / 2;
        }
      });
    },
    'transform.scale': (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(function (currentScale, previousScale) {
      if (currentScale > 1) {
        this.zoomByType({
          type: 'page-width'
        });
      }

      if (currentScale === 1) {
        this.zoomByType({
          type: 'page-fit'
        });
      }
    }, 1000, {
      leading: false,
      trailing: true
    })
  },
  mounted: function mounted() {
    var _this5 = this;

    // If in mobile, exit double page mode automatically
    if (this.onlyMobileVisible && this.doublePageMode) {
      this.setReaderLayout('single');
      return;
    }

    this.setLoadingState({
      isLoading: false
    });
    this.canLoadPages = true; // The DOM is ready in Vue's next tick

    this.$nextTick(function () {
      _this5.initTouch();
    });
  },
  beforeDestroy: function beforeDestroy() {
    // console.log('beforeDestroy');
    this.setLoadingState({
      isLoading: true
    }); // When exiting double page mode in mobile `this.hammer` won't be available in this hook

    if (this.hammer) {
      this.hammer.destroy();
    }

    this.$bus.$off('singleTap', this.toggleUi);
    this.$bus.$off('doubleTap', this.handleDoubleTap);
    this.$bus.$off('zoomIn', this.handleZoomIn);
    this.$bus.$off('zoomOut', this.handleZoomOut);
    this.$bus.$off('zoomSelect', this.handleZoomSelect);
    this.$refs.PdfPagedReaderViewer.removeEventListener(normalize_wheel__WEBPACK_IMPORTED_MODULE_4___default().getEventType(), this.handleWheel);
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapMutations)(['setLoadingState', 'toggleUi', 'setTotalPages', 'hideSelectionTool', 'zoomByType', 'setReaderLayout'])), (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapActions)(['goToPrevPage', 'goToNextPage'])), {}, {
    setOverrideOringinalSize: function setOverrideOringinalSize(size) {
      this.overrideOringinalSize++;
      this.overridenOringinalSize.height = size.height;
      this.overridenOringinalSize.width = size.width;
    },
    pageScaledSize: function pageScaledSize(originalWidth, originalHeight) {
      var height;
      var width;
      width = this.device.width;
      height = this.device.width * (originalHeight / originalWidth);

      if (height > this.device.height) {
        width = this.device.height * (originalWidth / originalHeight);
        height = this.device.height;
      }

      return {
        width: width,
        height: height
      };
    },
    pageScaledSizeScale: function pageScaledSizeScale(oringinalSize, scaledSize) {
      // The scale of the processed page relative to the current device screen size
      var scale = this.device.height > this.device.width ? scaledSize.width / oringinalSize.width : scaledSize.height / oringinalSize.height;
      return scale;
    },
    initTouch: function initTouch() {
      this.resetTouchObject();
      this.initHammer();
      this.$bus.$on('singleTap', this.toggleUi);
      this.$bus.$on('doubleTap', this.handleDoubleTap);
      this.$bus.$on('zoomIn', this.handleZoomIn);
      this.$bus.$on('zoomOut', this.handleZoomOut);
      this.$bus.$on('zoomSelect', this.handleZoomSelect);
      this.$refs.PdfPagedReaderViewer.addEventListener(normalize_wheel__WEBPACK_IMPORTED_MODULE_4___default().getEventType(), this.handleWheel, true);
    },
    handleWheel: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.throttle)(function (e) {
      // Do nothing if the user is not zoomed in
      if (this.transform.scale <= 1) {
        return;
      } // console.log('throttled handleWheel', e)
      // console.log(e.deltaY, e.deltaX);
      // console.log(e.deltaY);
      // this.lastTransform.y = this.transform.y = this.clampTranslateY(this.lastTransform.y + (e.deltaY * -0.5));

      /**
       * We can't use the standard events because it has many issues depending in the browser.
       * Facebook tried to fix it a long time ago:
       * https://github.com/facebookarchive/fixed-data-table/blob/master/src/vendor_upstream/dom/normalizeWheel.js
       * https://stackoverflow.com/questions/5527601/normalizing-mousewheel-speed-across-browsers
       */


      var normalized = normalize_wheel__WEBPACK_IMPORTED_MODULE_4___default()(e); // console.log(normalized);
      // console.log(normalized.spinY, normalized.spinX);

      this.lastTransform.y = this.transform.y = this.clampTranslateY(this.lastTransform.y + normalized.spinY * -10);
      this.lastTransform.x = this.transform.x = this.clampTranslateX(this.lastTransform.x + normalized.spinX * -10);
    }, 16),
    stopTouch: function stopTouch() {},
    resetTouchObject: function resetTouchObject() {
      this.transform = _objectSpread({}, this.initialTransform);
      this.lastTransform = _objectSpread({}, this.initialTransform);
    },
    initHammer: function initHammer() {
      delete Hammer.defaults.cssProps.userSelect; // this.hammer = new Hammer.Manager(this.$refs.PdfPagedReaderViewerViewport);

      this.hammer = new Hammer.Manager(this.$refs.PdfPagedReaderViewer);
      this.hammer.add(new Hammer.Pinch());
      this.hammer.add(new Hammer.Pan({
        direction: Hammer.DIRECTION_ALL,
        threshold: 0
      }));
      this.hammer.add(new Hammer.Tap({
        event: 'tap'
      }));
      this.handleTaps();
      this.hammer.on('pan pinch pan panstart panend pinchend', (0,lodash__WEBPACK_IMPORTED_MODULE_1__.throttle)(this.handlePanPinch, 16));
    },
    handlePanPinch: function handlePanPinch(e) {
      var _this6 = this;

      // console.log('handlePanPinch', e);
      clearTimeout(this.zoomBounceTimeout);

      if (this.selectionInProgressInPage) {
        return;
      } // console.log(this.transition);
      // console.log(e);
      // console.log(e.type, this.startedPanOverSelectionLayer);

      /**
       * START. Avoid panning when interacting with the text layer
       */


      if (!_shared_js_utils_isTouchDevice_js__WEBPACK_IMPORTED_MODULE_3__["default"] && e.type === 'panstart' && e.target.nodeName === 'SPAN') {
        this.startedPanOverSelectionLayer = true;
        return;
      }

      if (!_shared_js_utils_isTouchDevice_js__WEBPACK_IMPORTED_MODULE_3__["default"] && e.type === 'panend' && this.startedPanOverSelectionLayer) {
        this.startedPanOverSelectionLayer = false;
        return;
      }

      if (!_shared_js_utils_isTouchDevice_js__WEBPACK_IMPORTED_MODULE_3__["default"] && e.type === 'pan' && this.startedPanOverSelectionLayer) {
        return;
      }
      /**
       * END. Avoid panning when interacting with the text layer.
       */


      this.transition.transform = '';

      if (e.type === 'pan') {
        this.panning = true;
      }

      if (e.type === 'panend') {
        this.panning = false;
      }

      if (this.transform.scale === 1 && e.type === 'panend' && e.velocityX < -0.3 && e.distance > 10) {
        // console.log('swipe goToNextPage');
        this.goToNextPage({
          e: e,
          trigger: 'swipeX'
        });
        return;
      }

      if (this.transform.scale === 1 && e.type === 'panend' && e.velocityX > 0.3 && e.distance > 10) {
        // console.log('swipe goToPrevPage');
        this.goToPrevPage({
          e: e,
          trigger: 'swipeX'
        });
        return;
      }
      /**
       * This is to avoid a jump the content does when finishing a pinch
       */


      if (this.ignoreNextPans > 0 && (e.type === 'pan' || e.type === 'panend')) {
        // console.log({ ignoreNextPans: this.ignoreNextPans });
        this.ignoreNextPans--;
        return;
      } //pan


      if (this.transform.scale != 1) {
        this.transform.x = this.clampTranslateX(this.lastTransform.x + e.deltaX);
        this.transform.y = this.clampTranslateY(this.lastTransform.y + e.deltaY);
      } //pinch


      if (e.type === 'pinch') {
        console.log('pinch'); // Never smaller than this.minScale, but this allows the zoom to "bounce" back to 1 when over shrinked

        this.transform.scale = Math.max(this.minScale, Math.min(this.lastTransform.scale * e.scale, this.maxScale));
      }

      if (this.lastTransform.scale === 1) {
        this.transform.x = this.getTranslateXForTouchCenter(e.center.x);
        this.transform.y = this.getTranslateYForTouchCenter(e.center.y);
      }
      /**
       * panend and pinchend
       * save last transforms to have a starting point for pan and pinch events
       */


      if (e.type === 'pinchend') {
        this.ignoreNextPans = 2;
      }

      if (e.type === 'pinchend' || e.type === 'panend') {
        this.lastTransform.scale = this.transform.scale;
        this.lastTransform.x = this.transform.x;
        this.lastTransform.y = this.transform.y;
      }

      this.zoomBounceTimeout = setTimeout(function () {
        if (_this6.transform.scale < 1) {
          _this6.transform.scale = 1;
          _this6.transition.transform = 'transform 280ms cubic-bezier(0.64, 0, 0.78, 0)';
        }
      }, 64);
    },
    handleZoomIn: function handleZoomIn() {
      // console.log('handleZoomIn');
      if (this.transform.scale < this.maxScale) {
        this.lastTransform.scale = this.transform.scale += 0.25;
      }

      if (this.transform.scale > this.maxScale) {
        this.lastTransform.scale = this.transform.scale = this.maxScale;
      }

      this.zoomByType({
        type: 'page-width'
      });
      this.transition.transform = 'transform 110ms ease-out';
    },
    handleZoomOut: function handleZoomOut() {
      // console.log('handleZoomOut');
      if (this.transform.scale > 1) {
        this.lastTransform.scale = this.transform.scale -= 0.25;
      }

      if (this.transform.scale < 1) {
        this.lastTransform.scale = this.transform.scale = 1;
      }

      if (this.transform.scale === 1) this.zoomByType({
        type: 'page-fit'
      });
      this.transition.transform = 'transform 110ms ease-out';
    },
    handleZoomSelect: function handleZoomSelect(zoom) {
      this.resetTouchObject();

      if (zoom.type === 'page-fit') {
        this.lastTransform.scale = this.transform.scale = 1;
      }

      if (zoom.type === 'page-width') {
        // this.lastTransform.scale = this.transform.scale = 2;
        this.lastTransform.scale = this.transform.scale = this.device.width / this.$refs.PdfPagedReaderViewerViewport.clientWidth;
        this.lastTransform.y = this.transform.y = (this.$refs.PdfPagedReaderViewerViewport.scrollHeight * this.transform.scale - this.device.height) / 2;
      }

      this.transition.transform = 'transform 110ms ease-out'; // this.lastTransform.x = this.transform.x = this.getTranslateXForTouchCenter(this.device.width);
      // this.lastTransform.y = this.transform.y = this.getTranslateYForTouchCenter(this.device.height);
    },
    handleDoubleTap: function handleDoubleTap(e) {
      if (this.lastTransform.scale === 1) {
        this.resetTouchObject(); // Zoom to page width if the screen is at least 15% more width than the scaled page

        if (this.device.width / this.currentWrapperScaledSize.width * 100 > 115) {
          this.lastTransform.scale = this.transform.scale = this.device.width / this.$refs.PdfPagedReaderViewerViewport.clientWidth;
        } else {
          this.lastTransform.scale = this.transform.scale = this.maxScale;
          this.lastTransform.x = this.transform.x = this.getTranslateXForTouchCenter(e.center.x);
        }

        this.transition.transform = 'transform 280ms ease-out';
        this.lastTransform.y = this.transform.y = this.getTranslateYForTouchCenter(e.center.y);
      } else {
        this.resetTouchObject();
        this.lastTransform.scale = this.transform.scale = 1;
        this.transition.transform = 'transform 280ms ease-in';
      }
    },
    getTranslateXForTouchCenter: function getTranslateXForTouchCenter(eventCenterX) {
      var zoomCenterX = eventCenterX * this.transform.scale * 100 / (this.$refs.PdfPagedReaderViewerViewport.scrollWidth * this.transform.scale);

      if (zoomCenterX < 50) {
        return this.clampTranslateX(this.$refs.PdfPagedReaderViewerViewport.scrollWidth * this.transform.scale * (Math.abs(50 - zoomCenterX) / 100));
      } else {
        return this.clampTranslateX(-(this.$refs.PdfPagedReaderViewerViewport.scrollWidth * this.transform.scale) * (Math.abs(zoomCenterX - 50) / 100));
      }
    },
    getTranslateYForTouchCenter: function getTranslateYForTouchCenter(eventCenterY) {
      var zoomCenterY = eventCenterY * this.transform.scale * 100 / (this.$refs.PdfPagedReaderViewerViewport.scrollHeight * this.transform.scale);

      if (zoomCenterY < 50) {
        return this.clampTranslateY(this.$refs.PdfPagedReaderViewerViewport.scrollHeight * this.transform.scale * (Math.abs(50 - zoomCenterY) / 100));
      } else {
        return this.clampTranslateY(-(this.$refs.PdfPagedReaderViewerViewport.scrollHeight * this.transform.scale) * (Math.abs(zoomCenterY - 50) / 100));
      }
    },
    clampTranslateX: function clampTranslateX(x) {
      // console.log('clampTranslateX', x)
      var imageVsDeviceWidthsDifference = this.$refs.PdfPagedReaderViewerViewport.clientWidth * this.transform.scale - this.device.width; // console.log(imageVsDeviceWidthsDifference)
      // If the page is narrower than the viewport, restric the user from panning

      if (imageVsDeviceWidthsDifference < 0) {
        // console.log('this.device.width > currentImgWidth', 0)
        return 0;
      } // If the user is panning right


      if (x > 0) {
        var max = imageVsDeviceWidthsDifference / 2; // console.log('max', max)

        return x > max ? max : x;
      } // If the user is panning left


      var min = -(imageVsDeviceWidthsDifference / 2); // console.log('min', min)

      return x < min ? min : x;
    },
    clampTranslateY: function clampTranslateY(y) {
      // console.log('clampTranslateY', y)
      var imageVsDeviceHeightsDifference = this.$refs.PdfPagedReaderViewerViewport.clientHeight * this.transform.scale - this.device.height; // If the page is less tall than the viewport, restric the user from panning

      if (imageVsDeviceHeightsDifference < 0) {
        // console.log('this.device.width > currentImgWidth', 0)
        return 0;
      } // If the user is panning up


      if (y > 0) {
        var max = imageVsDeviceHeightsDifference / 2; // console.log('max', max, y)

        return y > max ? max : y;
      } // If the user is panning down


      var min = -(imageVsDeviceHeightsDifference / 2); // console.log('min', min, y)

      return y < min ? min : y;
    },

    /**
     *
     */
    handleTaps: function handleTaps() {
      var _this7 = this;

      // console.log('handleTaps');
      var tapTimeout = null;
      var lastTouchTime = null;
      this.hammer.on('tap', function (e) {
        // console.log('handleTaps');
        // console.log(e, e.target.nodeName);
        if (e.target.classList.contains('SmartZoomPoint') || e.target.nodeName === 'MARK') {
          return;
        }

        var timeDiff = lastTouchTime !== null ? e.timeStamp - lastTouchTime : 20000;

        if (timeDiff < 250) {
          // console.log('doubleTap', e);
          _this7.$bus.$emit('doubleTap', e);

          clearTimeout(tapTimeout);
        } else {
          tapTimeout = setTimeout(function () {
            // console.log('singleTap', e);
            if (_this7.ui.selectionTool.opened) {
              _this7.hideSelectionTool();

              return;
            }

            _this7.$bus.$emit('singleTap', e);
          }, 260);
        }

        lastTouchTime = e.timeStamp;
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _TextLayer_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextLayer.vue */ "./src/js/components/partials/Pdf/TextLayer.vue");
/* harmony import */ var _AnnotationLayer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnnotationLayer.vue */ "./src/js/components/partials/Pdf/AnnotationLayer.vue");
/* harmony import */ var _shared_UI_SmartZoom_SmartZoomLayer_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _shared_/UI/SmartZoom/SmartZoomLayer.vue */ "./_shared_/UI/SmartZoom/SmartZoomLayer.vue");
/* harmony import */ var _shared_js_utils_isTouchDevice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _shared_/js/utils/isTouchDevice.js */ "./_shared_/js/utils/isTouchDevice.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'pdf-paged-reader-viewer-page',
  components: {
    TextLayer: _TextLayer_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    AnnotationLayer: _AnnotationLayer_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    SmartZoomLayer: _shared_UI_SmartZoom_SmartZoomLayer_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    setOverrideOringinalSize: {
      type: Function,
      required: true,
      "default": false
    },
    pageNumber: {
      type: Number,
      required: true,
      "default": false
    },
    pageAvailableViewportWidth: {
      type: Number,
      required: true,
      "default": false
    },
    pageLargeUrl: {
      type: String,
      required: true
    },
    pageTextLayerUrl: {
      type: String,
      required: false
    },
    pageAnnotationLayerUrl: {
      type: String,
      required: false
    },
    isCurrentPage: {
      type: Boolean,
      required: true,
      "default": false
    },
    isPanning: {
      type: Boolean,
      required: true,
      "default": false
    }
  },
  data: function data() {
    return {
      /**
       * This is here because some old publications that
       * where converted using a previous process lack
       * the information embeded in the file name
       */
      imgHasLoaded: false,
      canvasLoaded: false
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapState)(['polpoSessionInitiated', 'device', 'reader', 'selectionsHaveBeenFetched'])), {}, {
    pageNamePayload: function pageNamePayload() {
      return this.pageLargeUrl.substring(this.pageLargeUrl.lastIndexOf('/') + 1).replace('.jpg', '').split('_');
    },

    /**
     * The original width and height of the page when processed
     */
    oringinalSize: function oringinalSize() {
      if (this.imgHasLoaded) {
        return {
          width: this.$refs.backgroundLayerImage.naturalWidth,
          height: this.$refs.backgroundLayerImage.naturalHeight
        };
      }

      return {
        width: parseInt(this.pageNamePayload[2]),
        height: parseInt(this.pageNamePayload[3])
      };
    },
    predominantColor: function predominantColor() {
      return "#".concat(this.pageNamePayload[4]);
    },
    scaledSize: function scaledSize() {
      var height;
      var width;
      width = this.pageAvailableViewportWidth;
      height = this.pageAvailableViewportWidth * (this.oringinalSize.height / this.oringinalSize.width);

      if (height > this.device.height) {
        width = this.device.height * (this.oringinalSize.width / this.oringinalSize.height);
        height = this.device.height;
      }

      return {
        width: width,
        height: height
      };
    },
    scaledSizeScale: function scaledSizeScale() {
      // The scale of the processed page relative to the current device screen size
      var scale = // Divided by 2 cause it's double page
      this.device.height > this.pageAvailableViewportWidth ? this.scaledSize.width / this.oringinalSize.width : this.scaledSize.height / this.oringinalSize.height;
      return scale;
    },
    textLayerStyles: function textLayerStyles() {
      return {
        transformOrigin: 'top left',

        /**
         * The translate3d promotes this to a GPU accelerated layer.
         * Somehow, that also prevents the layer from becoming invisible
         * when panning to the bottom of pages. Which seems like a
         * browser's performance trick not to render stuff that's
         * no useful. But we're an edgecase.
         */
        transform: "scale(".concat(this.scaledSizeScale, ") translate3d(0,0,0)")
      };
    },
    renderAnnotationLayer: function renderAnnotationLayer() {
      return this.isCurrentPage && this.pageAnnotationLayerUrl;
    },
    renderTextLayer: function renderTextLayer() {
      return this.isCurrentPage && this.polpoSessionInitiated && this.selectionsHaveBeenFetched && this.pageTextLayerUrl;
    },
    annotationLayerStyles: function annotationLayerStyles() {
      return {
        transform: "scale(".concat(this.scaledSizeScale, ")")
      };
    }
  }),
  watch: {},
  beforeDestroy: function beforeDestroy() {
    console.log('beforeDestroy');
    /**
     * Setting the cavas size to 0 forces the browser to release the memory used by it.
     * This fixes a memory leak issue that in the long run makes the browser crash.
     * Specially Safari and that 'long run' could just be 7 pages in Safari for iOS.
     *
     * https://github.com/WebKit/webkit/commit/5d5b478917c685e50d1032ccf761ca53fc8f1b74#diff-b411cd4839e4bbc17b00570536abfa8f
     * https://bugs.webkit.org/show_bug.cgi?id=195325
     * https://stackoverflow.com/questions/52532614/total-canvas-memory-use-exceeds-the-maximum-limit-safari-12
     */

    this.$refs.backgroundLayerImageCanvas.width = this.$refs.backgroundLayerImageCanvas.height = 0;
  },
  mounted: function mounted() {
    var _this = this;

    // console.log('mounted', this.pageNumber);
    if (this.$refs.backgroundLayerImage.complete) {
      this.backgroundLayerImageLoaded();
      this.setLoadingState({
        isLoading: false
      });
    } else {
      this.setLoadingState({
        isLoading: true
      });

      this.$refs.backgroundLayerImage.onload = function (e) {
        _this.backgroundLayerImageLoaded(); // This is a hack to fix a weird bug in which pages wont become visible
        // until a interaction, even when they were already downloaded.


        if (_this.isCurrentPage && _this.$refs.backgroundLayerImage) {
          _this.$refs.backgroundLayerImage.style.zIndex = 1;

          _this.setLoadingState({
            isLoading: false
          });
        }
      };
    }
  },
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapMutations)(['setLoadingState', 'zoomByType'])), {}, {
    backgroundLayerImageLoaded: function backgroundLayerImageLoaded() {
      if (!this.$refs.backgroundLayerImage) {
        /**
         * In the case the event fired for a page that's no longer in the viewport.
         * Tried unsetting the onload listener, but it wasn't enought
         */
        return;
      }

      this.imgHasLoaded = true;
      var ctx = this.$refs.backgroundLayerImageCanvas.getContext('2d', {
        alpha: false
      });
      ctx.drawImage(this.$refs.backgroundLayerImage, 0, 0);
      this.canvasLoaded = true;
      this.setOverrideOringinalSize({
        width: this.$refs.backgroundLayerImage.naturalWidth,
        height: this.$refs.backgroundLayerImage.naturalHeight
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/TextLayer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/TextLayer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var mark_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mark.js */ "./node_modules/mark.js/dist/mark.js");
/* harmony import */ var mark_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mark_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _shared_js_utils_isTouchDevice_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _shared_/js/utils/isTouchDevice.js */ "./_shared_/js/utils/isTouchDevice.js");
//
//
//
//
//
//
//
//
//
//
//


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TextLayer',
  props: {
    hideLayer: {
      type: Boolean,
      required: true,
      "default": false
    },
    pageNumber: {
      type: Number,
      required: true,
      "default": false
    },
    textLayerStyles: {
      required: true
    },
    pageTextLayerUrl: {
      type: String,
      required: false
    }
  },
  data: function data() {
    return {
      textLayerHtml: null,
      selectionChanged: false,
      preventClick: true,
      selection: {},
      marker: null,
      selectionHandler: null,
      markUuid: null
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapState)(['selections', 'highlightModel', 'baseEndpoint', 'selectionInProgressInPage', 'currentHighlight', 'search', 'ui', 'uiHidden', 'device', 'anonymousSession'])), (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)([// 'currentPage',
  'currentPagesHighlights'])), {}, {
    currentPageHighlights: function currentPageHighlights() {
      var _this = this;

      return this.currentPagesHighlights.filter(function (highlight) {
        var startsInThisPage = highlight.startPage === _this.pageNumber;
        var endsInThisPage = highlight.endPage === _this.pageNumber;
        var containsThisPage = highlight.startPage < _this.pageNumber && highlight.endPage > _this.pageNumber;
        return startsInThisPage || endsInThisPage || containsThisPage;
      }).map(function (highlight) {
        highlight.isRendered = false;
        return highlight;
      });
    },
    selectionInProgress: function selectionInProgress() {
      return this.selectionInProgressInPage === this.pageNumber;
    }
  }),
  watch: {
    textLayerHtml: function textLayerHtml(_textLayerHtml) {
      var _this2 = this;

      if (!_textLayerHtml) return;
      this.$nextTick(function () {
        _this2.marker = new (mark_js__WEBPACK_IMPORTED_MODULE_0___default())(_this2.$refs.textLayer); // this.patchIosSelectionContextMenu();

        _this2.renderHighlights();

        _this2.setUserInteractionListeners();

        _this2.debouncedSetTextToListen();

        _this2.checkRequestQueryWordsHighlight();
      });
      document.addEventListener('copy', this.preventCopy);
      document.addEventListener('cut', this.preventCopy); // Testing in prod if the `this.$nextTick` works fine, if so will remove this later
      // setTimeout(() => {
      //     this.marker = new Mark(this.$refs.textLayer);
      //     this.patchIosSelectionContextMenu();
      //     this.renderHighlights();
      //     this.setUserInteractionListeners();
      //     this.debouncedSetTextToListen();
      //     this.checkRequestQueryWordsHighlight();
      // }, 0);
    },
    'search.requestQueryWordsHighlight': function searchRequestQueryWordsHighlight(requestQueryWordsHighlight) {
      if (!requestQueryWordsHighlight) return;
      if (this.search.page !== this.pageNumber) return;
      this.checkRequestQueryWordsHighlight();
    }
  },
  mounted: function mounted() {
    var _this3 = this;

    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {
      if (httpRequest.readyState !== XMLHttpRequest.DONE) return;
      if (httpRequest.status !== 200) return;
      _this3.textLayerHtml = httpRequest.responseText;
      _this3.selectionHandler = lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(_this3.handleSelectionChange, 66, {
        leading: false,
        trailing: true
      });
    };

    httpRequest.open('GET', this.pageTextLayerUrl);
    httpRequest.send();
  },
  beforeDestroy: function beforeDestroy() {
    // console.log('this.currentPageHighlights', this.currentPageHighlights)
    this.unsetUserInteractionListeners();
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapMutations)(['userIsSelecting', 'userStoppedSelecting', 'showSelectionTool', 'hideSelectionTool', 'setCurrentHighlight', 'setSelectionToolPosition', 'pushSelection', 'updateSelection', 'setTextToListen', 'fulfillQueryWordsHighlight', 'closeNotesModal'])), (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)(['trackEvent', 'openNotesModal', 'preventUnauthorizedCopy'])), {}, {
    getLayerText: function getLayerText() {
      // set page text to the TTS for listening
      this.debouncedSetTextToListen();
    },
    preventCopy: function preventCopy(e) {
      this.preventUnauthorizedCopy(e);
    },
    debouncedSetTextToListen: lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(function () {
      // console.log('debouncedsetTextToListen');
      if (!this.$refs.textLayer) return;
      var text = this.$refs.textLayer.innerText;

      if (text.length > 3000) {
        text = text.substring(0, 3000);
      }

      this.setTextToListen({
        // Past true for store page text and don't overwrite text of selection
        listenPage: true,
        text: text
      });
    }, 500, {
      leading: false,
      trailing: true
    }),
    checkRequestQueryWordsHighlight: function checkRequestQueryWordsHighlight() {
      if (!this.search.requestQueryWordsHighlight) return;
      if (this.search.queryWords.length === 0) return;
      var myHilitor = this.Hilitor2(this.$refs.textLayer); // myHilitor.setMatchType('open');

      myHilitor.apply(this.search.queryWords.join(' '));
      this.fulfillQueryWordsHighlight();
    },
    setUserInteractionListeners: function setUserInteractionListeners() {
      document.addEventListener('selectionchange', this.selectionHandler);

      if (this.$refs.textLayer) {
        this.$refs.textLayer.addEventListener(_shared_js_utils_isTouchDevice_js__WEBPACK_IMPORTED_MODULE_3__["default"] ? 'touchend' : 'click', this.handleClick);
      }

      this.$bus.$on('applyColorAndConfirmSelection', this.applyColorAndConfirmSelection);
      this.$bus.$on('selectionDestroyed', this.selectionDestroyedEvent);
      this.$bus.$on('pageChanged', this.clearPendingSelections);
    },
    unsetUserInteractionListeners: function unsetUserInteractionListeners() {
      document.removeEventListener('selectionchange', this.selectionHandler);

      if (this.$refs.textLayer) {
        this.$refs.textLayer.removeEventListener(_shared_js_utils_isTouchDevice_js__WEBPACK_IMPORTED_MODULE_3__["default"] ? 'touchend' : 'click', this.handleClick);
      }

      this.$bus.$off('applyColorAndConfirmSelection', this.applyColorAndConfirmSelection);
      this.$bus.$off('selectionDestroyed', this.selectionDestroyedEvent);
      this.$bus.$off('pageChanged', this.clearPendingSelections);
    },
    selectionDestroyedEvent: function selectionDestroyedEvent(selectionUniqueCssClass) {
      this.clearMarkedSelection(selectionUniqueCssClass);
      this.clearUnconfirmedMarkedSelections();
    },
    handleSelectionChange: function handleSelectionChange(e) {
      if (this.isValidSelection()) {
        this.userIsSelecting(this.pageNumber);
        this.setSelection();
        this.show();
        this.preventClick = true;
      } else if (this.selectionInProgress) {
        this.userStoppedSelecting();
      }
    },
    handleClick: function handleClick(e) {
      if (e.target.tagName === 'MARK' && ( // e.target.classList.length === 2 &&
      e.target.classList.contains('unconfirmed') || e.target.classList.contains('confirmed')) && // && !this.currentHighlight.id
      !this.selectionInProgress) {
        // console.log('clicked selection');
        var uuid = e.target.classList[0].replace('uuid-', '');
        this.selection = Object.assign({}, this.selection, lodash_find__WEBPACK_IMPORTED_MODULE_1___default()(this.selections, ['uuid', uuid]));
        this.setCurrentHighlight(this.selection);
        this.show(e.target.getBoundingClientRect());
        return;
      }

      if (!this.selectionInProgress && this.ui.selectionTool.opened) {
        this.hideSelectionTool();
        this.setCurrentHighlight({});
        this.clearUnconfirmedMarkedSelections();
        this.setCleanSelection();
        this.closeNotesModal();
        return;
      }

      if (this.selectionInProgress && this.preventClick) {
        this.preventClick = false;
      } else {
        this.hideSelectionTool();
        this.setCurrentHighlight({});
        this.clearUnconfirmedMarkedSelections();
        this.setCleanSelection();
        this.closeNotesModal();
      }
    },
    isValidSelection: function isValidSelection() {
      var selection = window.getSelection();
      return (// We don't support multiple selections, I think only Firefox has that feature
        selection.rangeCount === 1 && // Avoid selections without characters
        selection.getRangeAt(0).toString().length > 0 && // Avoid selections outiside the text layer
        selection.getRangeAt(0).startContainer.parentElement.parentElement === this.$refs.textLayer
      );
    },
    setSelection: function setSelection() {
      var selectedRange = window.getSelection().getRangeAt(0);
      var selectedRangeClone = selectedRange.cloneRange();
      this.setCleanSelection();
      this.selection.create(); // Start page
      // this.selection.startPage = this.getRangeStartPage(selectedRange);

      this.selection.startPage = this.pageNumber;
      selectedRangeClone.selectNodeContents(this.getRangeStartPageElement(selectedRange));
      selectedRangeClone.setEnd(selectedRange.startContainer, selectedRange.startOffset);
      this.selection.startPageStartOffset = selectedRangeClone.toString().length; // selectedRangeClone.selectNodeContents(this.getRangeStartPageElement(selectedRange));
      // selectedRangeClone.setStart(selectedRange.startContainer, selectedRange.startOffset);
      // selectedRangeClone.setEnd(selectedRange.startContainer, selectedRange.startOffset);

      this.selection.startPageLength = selectedRange.toString().length; // End page

      this.selection.endPage = this.selection.startPage; // if (this.selection.endPage !== this.selection.startPage) {
      //     this.selection.startPageLength =
      //         selectedRange.startContainer.parentNode.closest('.textLayer').innerText.length -
      //         this.selection.startPageStartOffset;
      //     selectedRangeClone.selectNodeContents(this.getRangeEndPageElement(selectedRange));
      //     selectedRangeClone.setEnd(selectedRange.endContainer, selectedRange.endOffset);
      //     this.selection.endPageLength = selectedRangeClone.toString().length;
      // }
      // General

      this.selection.totalText = selectedRange.toString();
      this.selection.totalLength = this.selection.totalText.length; // console.log(this.selection);

      this.setCurrentHighlight(this.selection);
    },
    setCleanSelection: function setCleanSelection() {
      this.selection = Object.assign({}, this.selection, this.highlightModel);
    },
    getRangeStartPageElement: function getRangeStartPageElement(selectedRange) {
      return selectedRange.startContainer.parentNode.closest('.textLayer');
    },
    renderHighlights: function renderHighlights() {
      this.clearMarkedSelection('confirmed');
      this.currentPageHighlights.map(this.renderHighlight);
    },
    renderHighlight: function renderHighlight(selection) {
      if (!_shared_js_utils_isTouchDevice_js__WEBPACK_IMPORTED_MODULE_3__["default"]) {
        this.clearPendingSelections();
      } // If the highlight is aleady rendered, then just update it's color


      if (selection.isRendered) {
        var renderedHighlights = this.$refs.textLayer.querySelectorAll(".".concat(selection.getUniqueCssClass()));
        if (renderedHighlights.length === 0) return;

        var _iterator = _createForOfIteratorHelper(renderedHighlights),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var mark = _step.value;
            this.applyColorToMarker(mark, selection.color);
            this.applyIconToAnnotations(mark, selection.hasAnnotation);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        return;
      }

      var markClass = selection.getCssClassForMarker(); // Handle case in which the highlight is in only 1 page

      if (selection.startPage === selection.endPage) {
        this.renderHighlightInPage(this.$refs.textLayer, selection.startPageStartOffset, selection.startPageLength, markClass, selection.color, selection);
      } else {
        // Handle case in which the highlight spans multiple pages
        if (selection.startPage === this.pageNumber) {
          // Handle case in which the highlight starts in the current page
          this.renderHighlightInPage(this.$refs.textLayer, selection.startPageStartOffset, selection.startPageLength, markClass, selection.color, selection);
        } else if (selection.endPage === this.pageNumber) {
          // Handle case in which the highlight ends in the current page
          this.renderHighlightInPage(this.$refs.textLayer, 0, selection.endPageLength, markClass, selection.color, selection);
        } else {
          // Handle case in which the highlight spans multiple pages and the current page
          // is not the start nor the end page
          this.renderHighlightInPage(this.$refs.textLayer, 0, this.$refs.textLayer.innerText.length, markClass, selection.color, selection);
        }
      }
    },
    renderHighlightInPage: function renderHighlightInPage(context, startOffset, length, className, color, selection) {
      var _this4 = this;

      var latestMark = '';
      this.marker.markRanges([{
        start: startOffset,
        length: length
      }], {
        className: className,
        each: function each(mark) {
          latestMark = mark;

          _this4.applyColorToMarker(mark, color);
        },
        done: function done() {
          selection.isRendered = true;

          _this4.applyIconToAnnotations(latestMark, selection.hasAnnotation);
        }
      });
    },
    clearUnconfirmedMarkedSelections: function clearUnconfirmedMarkedSelections() {
      this.clearMarkedSelection('unconfirmed');
    },
    clearMarkedSelection: function clearMarkedSelection(className) {
      this.marker.unmark({
        className: className
      });
    },
    clearPendingSelections: function clearPendingSelections() {
      window.getSelection().removeAllRanges();
    },
    applyColorToMarker: function applyColorToMarker(mark, color) {
      mark.style.backgroundColor = color || '#ffeb3b';
    },
    applyIconToAnnotations: function applyIconToAnnotations(mark, hasAnnotation) {
      var markUuid = mark.classList.item(0);

      if (!hasAnnotation) {
        return;
      }

      var markNode = this.$refs.textLayer.querySelectorAll(".".concat(markUuid));
      /*
       * We each all matches from class `uuid` and then order by more long mark in weight.
       * Select the first items of array and apply these mark the icon of note avoing that
       * icon overcover the text if possible
       */

      var notes = _toConsumableArray(markNode).map(function (el) {
        return {
          boundingClientRect: el.getBoundingClientRect(),
          mark: el
        };
      }).sort(function (el1, el2) {
        return el1.boundingClientRect.left - el2.boundingClientRect.left;
      });

      notes[0].mark.classList.add('annotation-icon');
    },
    applyColorAndConfirmSelection: function applyColorAndConfirmSelection(params) {
      var _this5 = this;

      var selection = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      this.selection = selection ? selection : this.selection;

      if (params.page && params.page !== this.pageNumber) {
        return;
      }

      this.renderHighlight(this.selection); // colors

      var newColor = params.color;
      var oldColor = this.selection.color;
      this.selection.color = newColor; // annotation

      var needUpdatedAnnotationText = false;

      if (params.hasAnnotation && params.annotationText.length !== 0) {
        this.selection.hasAnnotation = params.hasAnnotation;
        this.selection.annotationText = params.annotationText;
        needUpdatedAnnotationText = params.needUpdated;
      }

      Array.from(this.$refs.textLayer.querySelectorAll('.' + this.selection.getUniqueCssClass())).forEach(function (mark) {
        if (mark.classList.contains('unconfirmed')) {
          mark.classList.remove('unconfirmed');
          mark.classList.add('confirmed');
        }

        _this5.applyIconToAnnotations(mark, _this5.selection.hasAnnotation);

        _this5.applyColorToMarker(mark, _this5.selection.color);
      });

      if (this.anonymousSession) {
        this.handleAnonymousSessionSelections(this.selection, oldColor, newColor);
        this.trackEvent({
          action: "create ".concat(params.hasAnnotation ? 'note' : 'highlight'),
          trigger: '',
          page: this.currentPagesHighlights,
          source: 'text layer'
        });
        return;
      }

      if (!this.selection.confirmed) {
        this.selection.store();
        this.trackEvent({
          action: "create ".concat(params.hasAnnotation ? 'note' : 'highlight'),
          trigger: '',
          page: this.currentPagesHighlights,
          source: 'text layer'
        });
      } else if (oldColor !== newColor || needUpdatedAnnotationText) {
        this.selection.update();
        this.selection.updateAnnotationText();
      }

      this.setCurrentHighlight(this.selection);
    },

    /**
     * The bounding box can be from a rendered highlight
     * or from the current window's selecton
     */
    show: function show(boundingBox) {
      var hasAnnotation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      boundingBox = boundingBox || window.getSelection().getRangeAt(0).startContainer.parentElement.getBoundingClientRect(); // const top = boundingBox.top < this.device.height / 2 ? boundingBox.bottom + 45 : boundingBox.top - 45;

      var top = boundingBox.top - 35; // if (top < (this.uiHidden ? 20 : 75) || (this.uiHidden && isTouchDevice)) {

      if (top < (this.uiHidden ? 20 : 75)) {
        top = boundingBox.bottom + 35;
      }

      while (top + 50 > this.device.height) {
        top -= 10;
      }

      var left = boundingBox.left;

      while (left + 335 > this.device.width) {
        left -= 10;
      }

      if (left < 0) left = 10;

      if (this.selection.hasAnnotation) {
        this.openNotesModal();
        this.hideSelectionTool();
        return;
      }

      this.setSelectionToolPosition({
        top: top + 'px',
        left: left + 'px'
      });

      if (this.ui.notesModal.opened) {
        this.closeNotesModal();
      }

      this.showSelectionTool(this.pageNumber);
    },
    handleAnonymousSessionSelections: function handleAnonymousSessionSelections(selection, oldColor, newColor) {
      if (!selection.confirmed) {
        selection.confirmed = true;
        this.pushSelection(selection);
      } else if (oldColor !== newColor) {
        this.updateSelection(selection);
      }
    },

    /**
     * Temporarily unused because it's buggy, may review later
     */
    patchIosSelectionContextMenu: function patchIosSelectionContextMenu() {
      /* prevent ios edit-menu */
      if (/(iPad|iPhone|iPod)/g.test(navigator.userAgent)) {
        // if (true) {
        !function () {
          console.log('inside'); // the element where the edit menu should be disabled

          var target = document.body;
          var preventSelRecursion;
          document.addEventListener('selectionchange', function (e) {
            var selection = getSelection();
            if (!selection.rangeCount) return;
            if (selection.isCollapsed) return;
            var range = selection.getRangeAt(0);
            if (!target.contains(range.commonAncestorContainer)) return;
            if (preventSelRecursion) return;
            iosSelMenuPrevent();
          }, false);
          var iosSelMenuPrevent = lodash_debounce__WEBPACK_IMPORTED_MODULE_2___default()(function () {
            console.log('iosSelMenuPrevent');
            var selection = getSelection();
            var range = selection.getRangeAt(0);
            preventSelRecursion = true; // selection = getSelection();

            console.log('remove selection');
            selection.removeAllRanges();
            setTimeout(function () {
              // make remove-add-selection removes the menu
              console.log('re build selection');
              selection.addRange(range);
              setTimeout(function () {
                preventSelRecursion = false;
              });
            }, 1);
          }, 650); // if no selectionchange during 650ms : remove the menu
        }();
      }
    },

    /**
     * Original JavaScript code by Chirp Internet: www.chirp.com.au
     * https://www.the-art-of-web.com/javascript/search-highlight/
     * https://www.the-art-of-web.com/javascript/highlight-words-utf8/
     * https://www.the-art-of-web.com/javascript/search-highlight-demo/
     */
    Hilitor2: function Hilitor2(targetNode, tag) {
      // private variables
      // var targetNode = document.getElementById(id) || document.body;
      var hiliteTag = tag || 'MARK';
      var skipTags = new RegExp('^(?:' + hiliteTag + '|SCRIPT|FORM)$');
      var colors = ['#0fff13'];
      var wordColor = [];
      var colorIdx = 0;
      var matchRegExp = '';
      var openLeft = false;
      var openRight = false;
      var matches = []; // characters to strip from start and end of the input string

      var endRegExp = new RegExp('^[^\\w]+|[^\\w]+$', 'g'); // characters used to break up the input string into words

      var breakRegExp = new RegExp("[^\\w'-]+", 'g');

      this.setEndRegExp = function (regex) {
        endRegExp = regex;
        return true;
      };

      this.setBreakRegExp = function (regex) {
        breakRegExp = regex;
        return true;
      };

      this.setMatchType = function (type) {
        switch (type) {
          case 'open':
            this.openLeft = this.openRight = true;
            break;

          case 'closed':
            this.openLeft = this.openRight = false;
            break;

          case 'right':
            this.openLeft = true;
            this.openRight = false;
            break;

          case 'left':
          default:
            this.openLeft = false;
            this.openRight = true;
        }

        return true;
      }; // break user input into words and convert to RegExp


      this.setRegex = function (input) {
        input = input.replace(/\\u[0-9A-F]{4}/g, ''); // remove missed unicode

        input = input.replace(endRegExp, '');
        input = input.replace(breakRegExp, '|');
        input = input.replace(/^\||\|$/g, '');
        input = addAccents(input);

        if (input) {
          var re = '(' + input + ')';

          if (!this.openLeft) {
            re = '(?:^|[\\b\\s])' + re;
          }

          if (!this.openRight) {
            re = re + '(?:[\\b\\s]|$)';
          }

          matchRegExp = new RegExp(re, 'i');
          return matchRegExp;
        }

        return false;
      };

      this.getRegex = function () {
        var retval = matchRegExp.toString();
        retval = retval.replace(/(^\/|\(\?:[^\)]+\)|\/i$)/g, '');
        return retval;
      }; // recursively apply word highlighting


      this.hiliteWords = function (node) {
        if (node === undefined || !node) return;
        if (!matchRegExp) return;
        if (skipTags.test(node.nodeName)) return;

        if (node.hasChildNodes()) {
          for (var i = 0; i < node.childNodes.length; i++) {
            this.hiliteWords(node.childNodes[i]);
          }
        }

        if (node.nodeType == 3) {
          // NODE_TEXT
          var nv = node.nodeValue;
          var regs;

          if (nv) {
            regs = matchRegExp.exec(nv);
          }

          if (nv && regs) {
            if (!wordColor[regs[1].toLowerCase()]) {
              wordColor[regs[1].toLowerCase()] = colors[colorIdx++ % colors.length];
            }

            var match = document.createElement(hiliteTag);
            match.appendChild(document.createTextNode(regs[1]));
            match.style.backgroundColor = wordColor[regs[1].toLowerCase()];
            match.classList.add('search-highlight'); // match.style.color = "#000";

            var after;

            if (regs[0].match(/^\s/)) {
              // in case of leading whitespace
              after = node.splitText(regs.index + 1);
            } else {
              after = node.splitText(regs.index);
            }

            after.nodeValue = after.nodeValue.substring(regs[1].length);
            node.parentNode.insertBefore(match, after);
          }
        }
      }; // remove highlighting


      this.remove = function () {
        var marks = document.querySelectorAll("".concat(hiliteTag, ".search-highlight"));
        Object.values(marks).forEach(function (mark) {
          var parent = mark.parentNode;
          parent.replaceChild(mark.firstChild, mark);
          parent.normalize();
        });
        return true;
      }; // start highlighting at target node


      this.apply = function (input) {
        this.remove();

        if (input === undefined || !(input = input.replace(/(^\s+|\s+$)/g, ''))) {
          return;
        }

        input = escapeUnicode(input);
        input = removeUnicode(input);

        if (this.setRegex(input)) {
          this.hiliteWords(targetNode);
        } // build array of matches


        matches = targetNode.getElementsByTagName(hiliteTag); // return number of matches

        return matches.length;
      }; // scroll to the nth match


      this.gotoMatch = function (idx) {
        if (matches[idx]) {
          matches[idx].scrollIntoView({
            behavior: 'smooth',
            block: 'center'
          });

          for (var i = 0; i < matches.length; i++) {
            matches[i].style.outline = idx == i ? '2px solid red' : '';
          }

          return true;
        }

        return false;
      }; // convert escaped UNICODE to ASCII


      function removeUnicode(input) {
        var retval = input;
        retval = retval.replace(/\\u(00E[024]|010[23]|00C2)/gi, 'a');
        retval = retval.replace(/\\u00E7/gi, 'c');
        retval = retval.replace(/\\u00E[89AB]/gi, 'e');
        retval = retval.replace(/\\u(00E[EF]|00CE)/gi, 'i');
        retval = retval.replace(/\\u00F[46]/gi, 'o');
        retval = retval.replace(/\\u00F[9BC]/gi, 'u');
        retval = retval.replace(/\\u00FF/gi, 'y');
        retval = retval.replace(/\\u(00DF|021[89])/gi, 's');
        retval = retval.replace(/\\u(0163i|021[AB])/gi, 't');
        return retval;
      } // convert ASCII to wildcard


      function addAccents(input) {
        var retval = input;
        retval = retval.replace(/([ao])e/gi, '$1');
        retval = retval.replace(/ss/gi, 's');
        retval = retval.replace(/e/gi, '[e????????????????]');
        retval = retval.replace(/c/gi, '[c????]');
        retval = retval.replace(/i/gi, '[i????????]');
        retval = retval.replace(/u/gi, '[u????????????]');
        retval = retval.replace(/y/gi, '[y????]');
        retval = retval.replace(/s/gi, '(ss|[s?????????])');
        retval = retval.replace(/t/gi, '([t?????????])');
        retval = retval.replace(/a/gi, '([a?? ????????????]|ae)');
        retval = retval.replace(/o/gi, '([o????????]|oe)');
        return retval;
      } // added by Yanosh Kunsh to include utf-8 string comparison


      function dec2hex4(textString) {
        var hexequiv = new Array('0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F');
        return hexequiv[textString >> 12 & 0xf] + hexequiv[textString >> 8 & 0xf] + hexequiv[textString >> 4 & 0xf] + hexequiv[textString & 0xf];
      } // escape UNICODE characters in string


      function escapeUnicode(str) {
        // convertCharStr2jEsc
        // Converts a string of characters to JavaScript escapes
        // str: sequence of Unicode characters
        var highsurrogate = 0;
        var suppCP;
        var pad;
        var n = 0;
        var outputString = '';

        for (var i = 0; i < str.length; i++) {
          var cc = str.charCodeAt(i);

          if (cc < 0 || cc > 0xffff) {
            outputString += '!Error in convertCharStr2UTF16: unexpected charCodeAt result, cc=' + cc + '!';
          }

          if (highsurrogate != 0) {
            // this is a supp char, and cc contains the low surrogate
            if (0xdc00 <= cc && cc <= 0xdfff) {
              suppCP = 0x10000 + (highsurrogate - 0xd800 << 10) + (cc - 0xdc00);
              suppCP -= 0x10000;
              outputString += "\\u" + dec2hex4(0xd800 | suppCP >> 10) + "\\u" + dec2hex4(0xdc00 | suppCP & 0x3ff);
              highsurrogate = 0;
              continue;
            } else {
              outputString += 'Error in convertCharStr2UTF16: low surrogate expected, cc=' + cc + '!';
              highsurrogate = 0;
            }
          }

          if (0xd800 <= cc && cc <= 0xdbff) {
            // start of supplementary character
            highsurrogate = cc;
          } else {
            // this is a BMP character
            switch (cc) {
              case 0:
                outputString += '\\0';
                break;

              case 8:
                outputString += '\\b';
                break;

              case 9:
                outputString += '\\t';
                break;

              case 10:
                outputString += '\\n';
                break;

              case 13:
                outputString += '\\r';
                break;

              case 11:
                outputString += '\\v';
                break;

              case 12:
                outputString += '\\f';
                break;

              case 34:
                outputString += '\\"';
                break;

              case 92:
                outputString += '\\\\';
                break;

              default:
                if (cc > 0x1f && cc < 0x7f) {
                  outputString += String.fromCharCode(cc);
                } else {
                  pad = cc.toString(16).toUpperCase();

                  while (pad.length < 4) {
                    pad = '0' + pad;
                  }

                  outputString += "\\u" + pad;
                }

            }
          }
        }

        return outputString;
      }

      return this;
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/AnnotationLayer.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/AnnotationLayer.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Z Index\n */\n.annotationLayer {\n  z-index: 200;\n  display: block;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n}\n\n/* Copyright 2014 Mozilla Foundation\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n.annotationLayer section {\n  position: absolute;\n}\n.annotationLayer .linkAnnotation > a,\n.annotationLayer .buttonWidgetAnnotation.pushButton > a {\n  position: absolute;\n  font-size: 1em;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n}\n.annotationLayer .linkAnnotation > a:hover,\n.annotationLayer .buttonWidgetAnnotation.pushButton > a:hover {\n  opacity: 0.2;\n  background: #ff0;\n  box-shadow: 0px 2px 10px #ff0;\n}\n.annotationLayer .textAnnotation img {\n  position: absolute;\n  cursor: pointer;\n}\n.annotationLayer .textWidgetAnnotation input,\n.annotationLayer .textWidgetAnnotation textarea,\n.annotationLayer .choiceWidgetAnnotation select,\n.annotationLayer .buttonWidgetAnnotation.checkBox input,\n.annotationLayer .buttonWidgetAnnotation.radioButton input {\n  background-color: rgba(0, 54, 255, 0.13);\n  border: 1px solid transparent;\n  box-sizing: border-box;\n  font-size: 9px;\n  height: 100%;\n  margin: 0;\n  padding: 0 3px;\n  vertical-align: top;\n  width: 100%;\n}\n.annotationLayer .choiceWidgetAnnotation select option {\n  padding: 0;\n}\n.annotationLayer .buttonWidgetAnnotation.radioButton input {\n  border-radius: 50%;\n}\n.annotationLayer .textWidgetAnnotation textarea {\n  font: message-box;\n  font-size: 9px;\n  resize: none;\n}\n.annotationLayer .textWidgetAnnotation input[disabled],\n.annotationLayer .textWidgetAnnotation textarea[disabled],\n.annotationLayer .choiceWidgetAnnotation select[disabled],\n.annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],\n.annotationLayer .buttonWidgetAnnotation.radioButton input[disabled] {\n  background: none;\n  border: 1px solid transparent;\n  cursor: not-allowed;\n}\n.annotationLayer .textWidgetAnnotation input:hover,\n.annotationLayer .textWidgetAnnotation textarea:hover,\n.annotationLayer .choiceWidgetAnnotation select:hover,\n.annotationLayer .buttonWidgetAnnotation.checkBox input:hover,\n.annotationLayer .buttonWidgetAnnotation.radioButton input:hover {\n  border: 1px solid #000;\n}\n.annotationLayer .textWidgetAnnotation input:focus,\n.annotationLayer .textWidgetAnnotation textarea:focus,\n.annotationLayer .choiceWidgetAnnotation select:focus {\n  background: none;\n  border: 1px solid transparent;\n}\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,\n.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before {\n  background-color: #000;\n  content: \"\";\n  display: block;\n  position: absolute;\n}\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after {\n  height: 80%;\n  left: 45%;\n  width: 1px;\n}\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before {\n  transform: rotate(45deg);\n}\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after {\n  transform: rotate(-45deg);\n}\n.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before {\n  border-radius: 50%;\n  height: 50%;\n  left: 30%;\n  top: 20%;\n  width: 50%;\n}\n.annotationLayer .textWidgetAnnotation input.comb {\n  font-family: monospace;\n  padding-left: 2px;\n  padding-right: 0;\n}\n.annotationLayer .textWidgetAnnotation input.comb:focus {\n  /*\n   * Letter spacing is placed on the right side of each character. Hence, the\n   * letter spacing of the last character may be placed outside the visible\n   * area, causing horizontal scrolling. We avoid this by extending the width\n   * when the element has focus and revert this when it loses focus.\n   */\n  width: 115%;\n}\n.annotationLayer .buttonWidgetAnnotation.checkBox input,\n.annotationLayer .buttonWidgetAnnotation.radioButton input {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  padding: 0;\n}\n.annotationLayer .popupWrapper {\n  position: absolute;\n  width: 20em;\n}\n.annotationLayer .popup {\n  position: absolute;\n  z-index: 200;\n  max-width: 20em;\n  background-color: #ffff99;\n  box-shadow: 0px 2px 5px #333;\n  border-radius: 2px;\n  padding: 0.6em;\n  margin-left: 5px;\n  cursor: pointer;\n  font: message-box;\n  word-wrap: break-word;\n}\n.annotationLayer .popup h1 {\n  font-size: 1em;\n  border-bottom: 1px solid #000000;\n  margin: 0;\n  padding-bottom: 0.2em;\n}\n.annotationLayer .popup p {\n  margin: 0;\n  padding-top: 0.2em;\n}\n.annotationLayer .highlightAnnotation,\n.annotationLayer .underlineAnnotation,\n.annotationLayer .squigglyAnnotation,\n.annotationLayer .strikeoutAnnotation,\n.annotationLayer .lineAnnotation svg line,\n.annotationLayer .squareAnnotation svg rect,\n.annotationLayer .circleAnnotation svg ellipse,\n.annotationLayer .polylineAnnotation svg polyline,\n.annotationLayer .polygonAnnotation svg polygon,\n.annotationLayer .inkAnnotation svg polyline,\n.annotationLayer .stampAnnotation,\n.annotationLayer .fileAttachmentAnnotation {\n  cursor: pointer;\n}", "",{"version":3,"sources":["webpack://./src/js/components/partials/Pdf/AnnotationLayer.vue"],"names":[],"mappings":"AAEA;;EAAA;AAoGA;EACI,YA/FC;EAgGD,cAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;AAlGJ;;AAqGA;;;;;;;;;;;;;EAAA;AAeA;EACI,kBAAA;AAnGJ;AAsGA;;EAEI,kBAAA;EACA,cAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;AAnGJ;AAsGA;;EAEI,YAAA;EACA,gBAAA;EACA,6BAAA;AAnGJ;AAsGA;EACI,kBAAA;EACA,eAAA;AAnGJ;AAsGA;;;;;EAKI,wCAAA;EACA,6BAAA;EACA,sBAAA;EACA,cAAA;EACA,YAAA;EACA,SAAA;EACA,cAAA;EACA,mBAAA;EACA,WAAA;AAnGJ;AAsGA;EACI,UAAA;AAnGJ;AAsGA;EACI,kBAAA;AAnGJ;AAsGA;EACI,iBAAA;EACA,cAAA;EACA,YAAA;AAnGJ;AAsGA;;;;;EAKI,gBAAA;EACA,6BAAA;EACA,mBAAA;AAnGJ;AAsGA;;;;;EAKI,sBAAA;AAnGJ;AAsGA;;;EAGI,gBAAA;EACA,6BAAA;AAnGJ;AAsGA;;;EAGI,sBAAA;EACA,WAAA;EACA,cAAA;EACA,kBAAA;AAnGJ;AAsGA;;EAEI,WAAA;EACA,SAAA;EACA,UAAA;AAnGJ;AAsGA;EACI,wBAAA;AAnGJ;AAsGA;EACI,yBAAA;AAnGJ;AAsGA;EACI,kBAAA;EACA,WAAA;EACA,SAAA;EACA,QAAA;EACA,UAAA;AAnGJ;AAsGA;EACI,sBAAA;EACA,iBAAA;EACA,gBAAA;AAnGJ;AAsGA;EACI;;;;;IAAA;EAMA,WAAA;AAnGJ;AAsGA;;EAEI,wBAAA;KAAA,qBAAA;UAAA,gBAAA;EACA,UAAA;AAnGJ;AAsGA;EACI,kBAAA;EACA,WAAA;AAnGJ;AAsGA;EACI,kBAAA;EACA,YAAA;EACA,eAAA;EACA,yBAAA;EACA,4BAAA;EACA,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,qBAAA;AAnGJ;AAsGA;EACI,cAAA;EACA,gCAAA;EACA,SAAA;EACA,qBAAA;AAnGJ;AAsGA;EACI,SAAA;EACA,kBAAA;AAnGJ;AAsGA;;;;;;;;;;;;EAYI,eAAA;AAnGJ","sourcesContent":["@use 'sass:math';\n\n/**\n * Z Index\n */\n\n$zBack: -1;\n$z1: 100;\n$z2: 200;\n$z3: 300;\n$z4: 400;\n$z5: 500;\n$z6: 600;\n$zMax: 9999;\n// Toolbar\n$header-and-toolbar-height: 55px;\n$toolbar-background-color: #ffffff;\n$lateral-menu-width: 70px;\n$secondary-background-color: lighten($toolbar-background-color, 10%);\n$loading-bar-color: #ee3077;\n// $title-color: hsla(0, 0%, 99%, 0.97);\n$title-color: #707070;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.annotationLayer {\n    z-index: $z2;\n    display: block;\n    position: absolute;\n    left: 0px;\n    top: 0px;\n}\n\n/* Copyright 2014 Mozilla Foundation\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *     http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */\n\n.annotationLayer section {\n    position: absolute;\n}\n\n.annotationLayer .linkAnnotation > a,\n.annotationLayer .buttonWidgetAnnotation.pushButton > a {\n    position: absolute;\n    font-size: 1em;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.annotationLayer .linkAnnotation > a:hover,\n.annotationLayer .buttonWidgetAnnotation.pushButton > a:hover {\n    opacity: 0.2;\n    background: #ff0;\n    box-shadow: 0px 2px 10px #ff0;\n}\n\n.annotationLayer .textAnnotation img {\n    position: absolute;\n    cursor: pointer;\n}\n\n.annotationLayer .textWidgetAnnotation input,\n.annotationLayer .textWidgetAnnotation textarea,\n.annotationLayer .choiceWidgetAnnotation select,\n.annotationLayer .buttonWidgetAnnotation.checkBox input,\n.annotationLayer .buttonWidgetAnnotation.radioButton input {\n    background-color: rgba(0, 54, 255, 0.13);\n    border: 1px solid transparent;\n    box-sizing: border-box;\n    font-size: 9px;\n    height: 100%;\n    margin: 0;\n    padding: 0 3px;\n    vertical-align: top;\n    width: 100%;\n}\n\n.annotationLayer .choiceWidgetAnnotation select option {\n    padding: 0;\n}\n\n.annotationLayer .buttonWidgetAnnotation.radioButton input {\n    border-radius: 50%;\n}\n\n.annotationLayer .textWidgetAnnotation textarea {\n    font: message-box;\n    font-size: 9px;\n    resize: none;\n}\n\n.annotationLayer .textWidgetAnnotation input[disabled],\n.annotationLayer .textWidgetAnnotation textarea[disabled],\n.annotationLayer .choiceWidgetAnnotation select[disabled],\n.annotationLayer .buttonWidgetAnnotation.checkBox input[disabled],\n.annotationLayer .buttonWidgetAnnotation.radioButton input[disabled] {\n    background: none;\n    border: 1px solid transparent;\n    cursor: not-allowed;\n}\n\n.annotationLayer .textWidgetAnnotation input:hover,\n.annotationLayer .textWidgetAnnotation textarea:hover,\n.annotationLayer .choiceWidgetAnnotation select:hover,\n.annotationLayer .buttonWidgetAnnotation.checkBox input:hover,\n.annotationLayer .buttonWidgetAnnotation.radioButton input:hover {\n    border: 1px solid #000;\n}\n\n.annotationLayer .textWidgetAnnotation input:focus,\n.annotationLayer .textWidgetAnnotation textarea:focus,\n.annotationLayer .choiceWidgetAnnotation select:focus {\n    background: none;\n    border: 1px solid transparent;\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after,\n.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before {\n    background-color: #000;\n    content: '';\n    display: block;\n    position: absolute;\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before,\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after {\n    height: 80%;\n    left: 45%;\n    width: 1px;\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:before {\n    transform: rotate(45deg);\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input:checked:after {\n    transform: rotate(-45deg);\n}\n\n.annotationLayer .buttonWidgetAnnotation.radioButton input:checked:before {\n    border-radius: 50%;\n    height: 50%;\n    left: 30%;\n    top: 20%;\n    width: 50%;\n}\n\n.annotationLayer .textWidgetAnnotation input.comb {\n    font-family: monospace;\n    padding-left: 2px;\n    padding-right: 0;\n}\n\n.annotationLayer .textWidgetAnnotation input.comb:focus {\n    /*\n     * Letter spacing is placed on the right side of each character. Hence, the\n     * letter spacing of the last character may be placed outside the visible\n     * area, causing horizontal scrolling. We avoid this by extending the width\n     * when the element has focus and revert this when it loses focus.\n     */\n    width: 115%;\n}\n\n.annotationLayer .buttonWidgetAnnotation.checkBox input,\n.annotationLayer .buttonWidgetAnnotation.radioButton input {\n    appearance: none;\n    padding: 0;\n}\n\n.annotationLayer .popupWrapper {\n    position: absolute;\n    width: 20em;\n}\n\n.annotationLayer .popup {\n    position: absolute;\n    z-index: 200;\n    max-width: 20em;\n    background-color: #ffff99;\n    box-shadow: 0px 2px 5px #333;\n    border-radius: 2px;\n    padding: 0.6em;\n    margin-left: 5px;\n    cursor: pointer;\n    font: message-box;\n    word-wrap: break-word;\n}\n\n.annotationLayer .popup h1 {\n    font-size: 1em;\n    border-bottom: 1px solid #000000;\n    margin: 0;\n    padding-bottom: 0.2em;\n}\n\n.annotationLayer .popup p {\n    margin: 0;\n    padding-top: 0.2em;\n}\n\n.annotationLayer .highlightAnnotation,\n.annotationLayer .underlineAnnotation,\n.annotationLayer .squigglyAnnotation,\n.annotationLayer .strikeoutAnnotation,\n.annotationLayer .lineAnnotation svg line,\n.annotationLayer .squareAnnotation svg rect,\n.annotationLayer .circleAnnotation svg ellipse,\n.annotationLayer .polylineAnnotation svg polyline,\n.annotationLayer .polygonAnnotation svg polygon,\n.annotationLayer .inkAnnotation svg polyline,\n.annotationLayer .stampAnnotation,\n.annotationLayer .fileAttachmentAnnotation {\n    cursor: pointer;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue?vue&type=style&index=0&id=60fe37d6&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue?vue&type=style&index=0&id=60fe37d6&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Z Index\n */\n.PdfPagedReaderViewer[data-v-60fe37d6] {\n  overflow: hidden;\n  position: relative;\n  height: 100%;\n  width: 100%;\n  padding: 0;\n  margin: 0;\n  background-color: var(--theme-background-reader);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.PdfPagedReaderViewerViewport[data-v-60fe37d6] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n  padding: 0;\n  margin: 0;\n}\n.PdfPagedReaderViewerPageWrapper[data-v-60fe37d6] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}", "",{"version":3,"sources":["webpack://./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue"],"names":[],"mappings":"AAEA;;EAAA;AA0rBA;EACI,gBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,UAAA;EACA,SAAA;EACA,gDAAA;EAEA,aAAA;EACA,uBAAA;EACA,mBAAA;AAzrBJ;AA4rBA;EAII,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,kBAAA;EAGA,UAAA;EACA,SAAA;AA9rBJ;AAisBA;EACI,WAAA;EACA,YAAA;EACA,aAAA;EAEA,uBAAA;EACA,mBAAA;AA9rBJ","sourcesContent":["@use 'sass:math';\n\n/**\n * Z Index\n */\n\n$zBack: -1;\n$z1: 100;\n$z2: 200;\n$z3: 300;\n$z4: 400;\n$z5: 500;\n$z6: 600;\n$zMax: 9999;\n// Toolbar\n$header-and-toolbar-height: 55px;\n$toolbar-background-color: #ffffff;\n$lateral-menu-width: 70px;\n$secondary-background-color: lighten($toolbar-background-color, 10%);\n$loading-bar-color: #ee3077;\n// $title-color: hsla(0, 0%, 99%, 0.97);\n$title-color: #707070;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//Viewer Container\n.PdfPagedReaderViewer {\n    overflow: hidden;\n    position: relative;\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n    background-color: var(--theme-background-reader);\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n.PdfPagedReaderViewerViewport {\n    // overflow: hidden;\n    // position: relative;\n    // height: 100% !important;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n    // height: 100%;\n    // width: 100%;\n    padding: 0;\n    margin: 0;\n}\n\n.PdfPagedReaderViewerPageWrapper {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    -webkit-box-pack: center;\n    justify-content: center;\n    align-items: center;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue?vue&type=style&index=0&id=220a5005&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue?vue&type=style&index=0&id=220a5005&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Z Index\n */\n.PdfPagedReaderViewerPage[data-v-220a5005] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n  position: relative;\n  padding: 0;\n  margin: 0;\n}\n.backgroundLayer[data-v-220a5005] {\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.isPanning[data-v-220a5005] {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n}\nimg[data-v-220a5005],\ncanvas[data-v-220a5005] {\n  pointer-events: none;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\nimg[data-v-220a5005],\ncanvas[data-v-220a5005] {\n  opacity: 0;\n  transition: opacity 130ms ease;\n}\n.imgHasLoaded[data-v-220a5005] {\n  opacity: 1;\n}", "",{"version":3,"sources":["webpack://./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue"],"names":[],"mappings":"AAEA;;EAAA;AA6RA;EACI,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,kBAAA;EACA,UAAA;EACA,SAAA;AA3RJ;AA8RA;EACI,oBAAA;EAAA,YAAA;AA3RJ;AA6RA;EACI,wBAAA;EAAA,gBAAA;AA1RJ;AA6RA;;EAII,oBAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;AA5RJ;AAiSA;;EAEI,UAAA;EACA,8BAAA;AA9RJ;AAgSA;EACI,UAAA;AA7RJ","sourcesContent":["@use 'sass:math';\n\n/**\n * Z Index\n */\n\n$zBack: -1;\n$z1: 100;\n$z2: 200;\n$z3: 300;\n$z4: 400;\n$z5: 500;\n$z6: 600;\n$zMax: 9999;\n// Toolbar\n$header-and-toolbar-height: 55px;\n$toolbar-background-color: #ffffff;\n$lateral-menu-width: 70px;\n$secondary-background-color: lighten($toolbar-background-color, 10%);\n$loading-bar-color: #ee3077;\n// $title-color: hsla(0, 0%, 99%, 0.97);\n$title-color: #707070;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.PdfPagedReaderViewerPage {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    overflow: hidden;\n    position: relative;\n    padding: 0;\n    margin: 0;\n}\n\n.backgroundLayer {\n    cursor: grab;\n}\n.isPanning {\n    cursor: grabbing;\n}\n\nimg,\ncanvas {\n    // width: 100%;\n    // height: 100%;\n    pointer-events: none;\n    user-select: none;\n    // Prevents image to become blurry in old Safari versions (probably other browsers too)\n    // transform: translateZ(0px);\n}\n\nimg,\ncanvas {\n    opacity: 0;\n    transition: opacity 130ms ease;\n}\n.imgHasLoaded {\n    opacity: 1;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/TextLayer.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/TextLayer.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Merriweather&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Open+Sans&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Z Index\n */\n.textLayer {\n  z-index: 200;\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  /**\n       * We need to set this to visible cause we're currently\n       * using absolute (px) units in the text layer nodes\n       * positioning. We should be using relative units.\n       */\n  opacity: 0.6;\n  mix-blend-mode: darken;\n  line-height: 1;\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n  cursor: -webkit-grab;\n  cursor: grab;\n}\n.textLayer > span {\n  -webkit-user-select: text;\n     -moz-user-select: text;\n      -ms-user-select: text;\n          user-select: text;\n  color: transparent;\n  position: absolute;\n  white-space: pre;\n  cursor: text;\n  transform-origin: 0% 0%;\n  text-rendering: optimizeSpeed;\n}\n.textLayer > span::-moz-selection {\n  background: yellow;\n}\n.textLayer > span::selection {\n  background: yellow;\n}", "",{"version":3,"sources":["webpack://./src/js/components/partials/Pdf/TextLayer.vue"],"names":[],"mappings":"AAEA;;EAAA;AA85BA;EACI,YAz5BC;EA05BD,kBAAA;EACA,OAAA;EACA,MAAA;EACA,QAAA;EACA,SAAA;EACA,WAAA;EACA,YAAA;EACA;;;;QAAA;EAMA,YAAA;EACA,sBAAA;EACA,cAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EAEA,oBAAA;EAAA,YAAA;AA35BJ;AA65BA;EACI,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,kBAAA;EACA,kBAAA;EACA,gBAAA;EACA,YAAA;EACA,uBAAA;EACA,6BAAA;AA15BJ;AA45BA;EACI,kBAAA;AAz5BJ;AAw5BA;EACI,kBAAA;AAz5BJ","sourcesContent":["@use 'sass:math';\n\n/**\n * Z Index\n */\n\n$zBack: -1;\n$z1: 100;\n$z2: 200;\n$z3: 300;\n$z4: 400;\n$z5: 500;\n$z6: 600;\n$zMax: 9999;\n// Toolbar\n$header-and-toolbar-height: 55px;\n$toolbar-background-color: #ffffff;\n$lateral-menu-width: 70px;\n$secondary-background-color: lighten($toolbar-background-color, 10%);\n$loading-bar-color: #ee3077;\n// $title-color: hsla(0, 0%, 99%, 0.97);\n$title-color: #707070;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.textLayer {\n    z-index: $z2;\n    position: absolute;\n    left: 0;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    /**\n         * We need to set this to visible cause we're currently\n         * using absolute (px) units in the text layer nodes\n         * positioning. We should be using relative units.\n         */\n    // overflow: hidden;\n    opacity: 0.6;\n    mix-blend-mode: darken;\n    line-height: 1;\n    user-select: text;\n    // Apply the same cursor as the background layer, so there are no cursor changes\n    cursor: grab;\n}\n.textLayer > span {\n    user-select: text;\n    color: transparent;\n    position: absolute;\n    white-space: pre;\n    cursor: text;\n    transform-origin: 0% 0%;\n    text-rendering: optimizeSpeed;\n}\n.textLayer > span::selection {\n    background: yellow;\n}\n@import url('https://fonts.googleapis.com/css?family=Merriweather&display=swap');\n@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');\n@import url('https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap');\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/TextLayer.vue?vue&type=style&index=1&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/TextLayer.vue?vue&type=style&index=1&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Z Index\n */\nmark {\n  color: transparent;\n  cursor: pointer;\n  padding: 4px;\n  border-radius: 4px;\n  transition: background-color 300ms ease-in-out;\n  opacity: 1;\n  -webkit-animation: fade 300ms ease-in-out;\n          animation: fade 300ms ease-in-out;\n  position: relative;\n}\nmark::-moz-selection {\n  background: transparent;\n  color: transparent;\n}\nmark::selection {\n  background: transparent;\n  color: transparent;\n}\nmark.annotation-icon:after {\n  content: \"\";\n  width: 45px;\n  height: 100%;\n  background: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z'/%3E%3C/svg%3E\") no-repeat center;\n  background-size: contain;\n  position: absolute;\n  opacity: 0.9;\n  left: -45px;\n  top: -30px;\n}\n@-webkit-keyframes fade {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}\n@keyframes fade {\n0% {\n    opacity: 0;\n}\n100% {\n    opacity: 1;\n}\n}", "",{"version":3,"sources":["webpack://./src/js/components/partials/Pdf/TextLayer.vue"],"names":[],"mappings":"AAEA;;EAAA;AAw8BA;EACI,kBAAA;EACA,eAAA;EACA,YAAA;EACA,kBAAA;EACA,8CAAA;EACA,UAAA;EACA,yCAAA;UAAA,iCAAA;EACA,kBAAA;AAt8BJ;AAu8BI;EACI,uBAAA;EACA,kBAAA;AAr8BR;AAm8BI;EACI,uBAAA;EACA,kBAAA;AAr8BR;AAy8BI;EACI,WAAA;EACA,WAAA;EACA,YAAA;EACA,qVAAA;EAEA,wBAAA;EACA,kBAAA;EACA,YAAA;EACA,WAAA;EACA,UAAA;AAv8BR;AA08BA;AACI;IACI,UAAA;AAv8BN;AAy8BE;IACI,UAAA;AAv8BN;AACF;AAi8BA;AACI;IACI,UAAA;AAv8BN;AAy8BE;IACI,UAAA;AAv8BN;AACF","sourcesContent":["@use 'sass:math';\n\n/**\n * Z Index\n */\n\n$zBack: -1;\n$z1: 100;\n$z2: 200;\n$z3: 300;\n$z4: 400;\n$z5: 500;\n$z6: 600;\n$zMax: 9999;\n// Toolbar\n$header-and-toolbar-height: 55px;\n$toolbar-background-color: #ffffff;\n$lateral-menu-width: 70px;\n$secondary-background-color: lighten($toolbar-background-color, 10%);\n$loading-bar-color: #ee3077;\n// $title-color: hsla(0, 0%, 99%, 0.97);\n$title-color: #707070;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nmark {\n    color: transparent;\n    cursor: pointer;\n    padding: 4px;\n    border-radius: 4px;\n    transition: background-color 300ms ease-in-out;\n    opacity: 1;\n    animation: fade 300ms ease-in-out;\n    position: relative;\n    &::selection {\n        background: transparent;\n        color: transparent;\n    }\n}\nmark.annotation-icon {\n    &:after {\n        content: '';\n        width: 45px;\n        height: 100%;\n        background: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 14h-3v3h-2v-3H8v-2h3v-3h2v3h3v2zm-3-7V3.5L18.5 9H13z'/%3E%3C/svg%3E\")\n            no-repeat center;\n        background-size: contain;\n        position: absolute;\n        opacity: 0.9;\n        left: -45px;\n        top: -30px;\n    }\n}\n@keyframes fade {\n    0% {\n        opacity: 0;\n    }\n    100% {\n        opacity: 1;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/mark.js/dist/mark.js":
/*!*******************************************!*\
  !*** ./node_modules/mark.js/dist/mark.js ***!
  \*******************************************/
/***/ (function(module) {

/*!***************************************************
* mark.js v8.11.1
* https://markjs.io/
* Copyright (c) 2014???2018, Julian K??hnel
* Released under the MIT license https://git.io/vwTVl
*****************************************************/

(function (global, factory) {
	 true ? module.exports = factory() :
	0;
}(this, (function () { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};











var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();







var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var DOMIterator = function () {
  function DOMIterator(ctx) {
    var iframes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var exclude = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var iframesTimeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 5000;
    classCallCheck(this, DOMIterator);

    this.ctx = ctx;
    this.iframes = iframes;
    this.exclude = exclude;
    this.iframesTimeout = iframesTimeout;
  }

  createClass(DOMIterator, [{
    key: 'getContexts',
    value: function getContexts() {
      var ctx = void 0,
          filteredCtx = [];
      if (typeof this.ctx === 'undefined' || !this.ctx) {
        ctx = [];
      } else if (NodeList.prototype.isPrototypeOf(this.ctx)) {
        ctx = Array.prototype.slice.call(this.ctx);
      } else if (Array.isArray(this.ctx)) {
        ctx = this.ctx;
      } else if (typeof this.ctx === 'string') {
        ctx = Array.prototype.slice.call(document.querySelectorAll(this.ctx));
      } else {
        ctx = [this.ctx];
      }
      ctx.forEach(function (ctx) {
        var isDescendant = filteredCtx.filter(function (contexts) {
          return contexts.contains(ctx);
        }).length > 0;
        if (filteredCtx.indexOf(ctx) === -1 && !isDescendant) {
          filteredCtx.push(ctx);
        }
      });
      return filteredCtx;
    }
  }, {
    key: 'getIframeContents',
    value: function getIframeContents(ifr, successFn) {
      var errorFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

      var doc = void 0;
      try {
        var ifrWin = ifr.contentWindow;
        doc = ifrWin.document;
        if (!ifrWin || !doc) {
          throw new Error('iframe inaccessible');
        }
      } catch (e) {
        errorFn();
      }
      if (doc) {
        successFn(doc);
      }
    }
  }, {
    key: 'isIframeBlank',
    value: function isIframeBlank(ifr) {
      var bl = 'about:blank',
          src = ifr.getAttribute('src').trim(),
          href = ifr.contentWindow.location.href;
      return href === bl && src !== bl && src;
    }
  }, {
    key: 'observeIframeLoad',
    value: function observeIframeLoad(ifr, successFn, errorFn) {
      var _this = this;

      var called = false,
          tout = null;
      var listener = function listener() {
        if (called) {
          return;
        }
        called = true;
        clearTimeout(tout);
        try {
          if (!_this.isIframeBlank(ifr)) {
            ifr.removeEventListener('load', listener);
            _this.getIframeContents(ifr, successFn, errorFn);
          }
        } catch (e) {
          errorFn();
        }
      };
      ifr.addEventListener('load', listener);
      tout = setTimeout(listener, this.iframesTimeout);
    }
  }, {
    key: 'onIframeReady',
    value: function onIframeReady(ifr, successFn, errorFn) {
      try {
        if (ifr.contentWindow.document.readyState === 'complete') {
          if (this.isIframeBlank(ifr)) {
            this.observeIframeLoad(ifr, successFn, errorFn);
          } else {
            this.getIframeContents(ifr, successFn, errorFn);
          }
        } else {
          this.observeIframeLoad(ifr, successFn, errorFn);
        }
      } catch (e) {
        errorFn();
      }
    }
  }, {
    key: 'waitForIframes',
    value: function waitForIframes(ctx, done) {
      var _this2 = this;

      var eachCalled = 0;
      this.forEachIframe(ctx, function () {
        return true;
      }, function (ifr) {
        eachCalled++;
        _this2.waitForIframes(ifr.querySelector('html'), function () {
          if (! --eachCalled) {
            done();
          }
        });
      }, function (handled) {
        if (!handled) {
          done();
        }
      });
    }
  }, {
    key: 'forEachIframe',
    value: function forEachIframe(ctx, filter, each) {
      var _this3 = this;

      var end = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

      var ifr = ctx.querySelectorAll('iframe'),
          open = ifr.length,
          handled = 0;
      ifr = Array.prototype.slice.call(ifr);
      var checkEnd = function checkEnd() {
        if (--open <= 0) {
          end(handled);
        }
      };
      if (!open) {
        checkEnd();
      }
      ifr.forEach(function (ifr) {
        if (DOMIterator.matches(ifr, _this3.exclude)) {
          checkEnd();
        } else {
          _this3.onIframeReady(ifr, function (con) {
            if (filter(ifr)) {
              handled++;
              each(con);
            }
            checkEnd();
          }, checkEnd);
        }
      });
    }
  }, {
    key: 'createIterator',
    value: function createIterator(ctx, whatToShow, filter) {
      return document.createNodeIterator(ctx, whatToShow, filter, false);
    }
  }, {
    key: 'createInstanceOnIframe',
    value: function createInstanceOnIframe(contents) {
      return new DOMIterator(contents.querySelector('html'), this.iframes);
    }
  }, {
    key: 'compareNodeIframe',
    value: function compareNodeIframe(node, prevNode, ifr) {
      var compCurr = node.compareDocumentPosition(ifr),
          prev = Node.DOCUMENT_POSITION_PRECEDING;
      if (compCurr & prev) {
        if (prevNode !== null) {
          var compPrev = prevNode.compareDocumentPosition(ifr),
              after = Node.DOCUMENT_POSITION_FOLLOWING;
          if (compPrev & after) {
            return true;
          }
        } else {
          return true;
        }
      }
      return false;
    }
  }, {
    key: 'getIteratorNode',
    value: function getIteratorNode(itr) {
      var prevNode = itr.previousNode();
      var node = void 0;
      if (prevNode === null) {
        node = itr.nextNode();
      } else {
        node = itr.nextNode() && itr.nextNode();
      }
      return {
        prevNode: prevNode,
        node: node
      };
    }
  }, {
    key: 'checkIframeFilter',
    value: function checkIframeFilter(node, prevNode, currIfr, ifr) {
      var key = false,
          handled = false;
      ifr.forEach(function (ifrDict, i) {
        if (ifrDict.val === currIfr) {
          key = i;
          handled = ifrDict.handled;
        }
      });
      if (this.compareNodeIframe(node, prevNode, currIfr)) {
        if (key === false && !handled) {
          ifr.push({
            val: currIfr,
            handled: true
          });
        } else if (key !== false && !handled) {
          ifr[key].handled = true;
        }
        return true;
      }
      if (key === false) {
        ifr.push({
          val: currIfr,
          handled: false
        });
      }
      return false;
    }
  }, {
    key: 'handleOpenIframes',
    value: function handleOpenIframes(ifr, whatToShow, eCb, fCb) {
      var _this4 = this;

      ifr.forEach(function (ifrDict) {
        if (!ifrDict.handled) {
          _this4.getIframeContents(ifrDict.val, function (con) {
            _this4.createInstanceOnIframe(con).forEachNode(whatToShow, eCb, fCb);
          });
        }
      });
    }
  }, {
    key: 'iterateThroughNodes',
    value: function iterateThroughNodes(whatToShow, ctx, eachCb, filterCb, doneCb) {
      var _this5 = this;

      var itr = this.createIterator(ctx, whatToShow, filterCb);
      var ifr = [],
          elements = [],
          node = void 0,
          prevNode = void 0,
          retrieveNodes = function retrieveNodes() {
        var _getIteratorNode = _this5.getIteratorNode(itr);

        prevNode = _getIteratorNode.prevNode;
        node = _getIteratorNode.node;

        return node;
      };
      while (retrieveNodes()) {
        if (this.iframes) {
          this.forEachIframe(ctx, function (currIfr) {
            return _this5.checkIframeFilter(node, prevNode, currIfr, ifr);
          }, function (con) {
            _this5.createInstanceOnIframe(con).forEachNode(whatToShow, function (ifrNode) {
              return elements.push(ifrNode);
            }, filterCb);
          });
        }
        elements.push(node);
      }
      elements.forEach(function (node) {
        eachCb(node);
      });
      if (this.iframes) {
        this.handleOpenIframes(ifr, whatToShow, eachCb, filterCb);
      }
      doneCb();
    }
  }, {
    key: 'forEachNode',
    value: function forEachNode(whatToShow, each, filter) {
      var _this6 = this;

      var done = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {};

      var contexts = this.getContexts();
      var open = contexts.length;
      if (!open) {
        done();
      }
      contexts.forEach(function (ctx) {
        var ready = function ready() {
          _this6.iterateThroughNodes(whatToShow, ctx, each, filter, function () {
            if (--open <= 0) {
              done();
            }
          });
        };
        if (_this6.iframes) {
          _this6.waitForIframes(ctx, ready);
        } else {
          ready();
        }
      });
    }
  }], [{
    key: 'matches',
    value: function matches(element, selector) {
      var selectors = typeof selector === 'string' ? [selector] : selector,
          fn = element.matches || element.matchesSelector || element.msMatchesSelector || element.mozMatchesSelector || element.oMatchesSelector || element.webkitMatchesSelector;
      if (fn) {
        var match = false;
        selectors.every(function (sel) {
          if (fn.call(element, sel)) {
            match = true;
            return false;
          }
          return true;
        });
        return match;
      } else {
        return false;
      }
    }
  }]);
  return DOMIterator;
}();

var Mark$1 = function () {
  function Mark(ctx) {
    classCallCheck(this, Mark);

    this.ctx = ctx;
    this.ie = false;
    var ua = window.navigator.userAgent;
    if (ua.indexOf('MSIE') > -1 || ua.indexOf('Trident') > -1) {
      this.ie = true;
    }
  }

  createClass(Mark, [{
    key: 'log',
    value: function log(msg) {
      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'debug';

      var log = this.opt.log;
      if (!this.opt.debug) {
        return;
      }
      if ((typeof log === 'undefined' ? 'undefined' : _typeof(log)) === 'object' && typeof log[level] === 'function') {
        log[level]('mark.js: ' + msg);
      }
    }
  }, {
    key: 'escapeStr',
    value: function escapeStr(str) {
      return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
    }
  }, {
    key: 'createRegExp',
    value: function createRegExp(str) {
      if (this.opt.wildcards !== 'disabled') {
        str = this.setupWildcardsRegExp(str);
      }
      str = this.escapeStr(str);
      if (Object.keys(this.opt.synonyms).length) {
        str = this.createSynonymsRegExp(str);
      }
      if (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) {
        str = this.setupIgnoreJoinersRegExp(str);
      }
      if (this.opt.diacritics) {
        str = this.createDiacriticsRegExp(str);
      }
      str = this.createMergedBlanksRegExp(str);
      if (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) {
        str = this.createJoinersRegExp(str);
      }
      if (this.opt.wildcards !== 'disabled') {
        str = this.createWildcardsRegExp(str);
      }
      str = this.createAccuracyRegExp(str);
      return str;
    }
  }, {
    key: 'createSynonymsRegExp',
    value: function createSynonymsRegExp(str) {
      var syn = this.opt.synonyms,
          sens = this.opt.caseSensitive ? '' : 'i',
          joinerPlaceholder = this.opt.ignoreJoiners || this.opt.ignorePunctuation.length ? '\0' : '';
      for (var index in syn) {
        if (syn.hasOwnProperty(index)) {
          var value = syn[index],
              k1 = this.opt.wildcards !== 'disabled' ? this.setupWildcardsRegExp(index) : this.escapeStr(index),
              k2 = this.opt.wildcards !== 'disabled' ? this.setupWildcardsRegExp(value) : this.escapeStr(value);
          if (k1 !== '' && k2 !== '') {
            str = str.replace(new RegExp('(' + this.escapeStr(k1) + '|' + this.escapeStr(k2) + ')', 'gm' + sens), joinerPlaceholder + ('(' + this.processSynomyms(k1) + '|') + (this.processSynomyms(k2) + ')') + joinerPlaceholder);
          }
        }
      }
      return str;
    }
  }, {
    key: 'processSynomyms',
    value: function processSynomyms(str) {
      if (this.opt.ignoreJoiners || this.opt.ignorePunctuation.length) {
        str = this.setupIgnoreJoinersRegExp(str);
      }
      return str;
    }
  }, {
    key: 'setupWildcardsRegExp',
    value: function setupWildcardsRegExp(str) {
      str = str.replace(/(?:\\)*\?/g, function (val) {
        return val.charAt(0) === '\\' ? '?' : '\x01';
      });
      return str.replace(/(?:\\)*\*/g, function (val) {
        return val.charAt(0) === '\\' ? '*' : '\x02';
      });
    }
  }, {
    key: 'createWildcardsRegExp',
    value: function createWildcardsRegExp(str) {
      var spaces = this.opt.wildcards === 'withSpaces';
      return str.replace(/\u0001/g, spaces ? '[\\S\\s]?' : '\\S?').replace(/\u0002/g, spaces ? '[\\S\\s]*?' : '\\S*');
    }
  }, {
    key: 'setupIgnoreJoinersRegExp',
    value: function setupIgnoreJoinersRegExp(str) {
      return str.replace(/[^(|)\\]/g, function (val, indx, original) {
        var nextChar = original.charAt(indx + 1);
        if (/[(|)\\]/.test(nextChar) || nextChar === '') {
          return val;
        } else {
          return val + '\0';
        }
      });
    }
  }, {
    key: 'createJoinersRegExp',
    value: function createJoinersRegExp(str) {
      var joiner = [];
      var ignorePunctuation = this.opt.ignorePunctuation;
      if (Array.isArray(ignorePunctuation) && ignorePunctuation.length) {
        joiner.push(this.escapeStr(ignorePunctuation.join('')));
      }
      if (this.opt.ignoreJoiners) {
        joiner.push('\\u00ad\\u200b\\u200c\\u200d');
      }
      return joiner.length ? str.split(/\u0000+/).join('[' + joiner.join('') + ']*') : str;
    }
  }, {
    key: 'createDiacriticsRegExp',
    value: function createDiacriticsRegExp(str) {
      var sens = this.opt.caseSensitive ? '' : 'i',
          dct = this.opt.caseSensitive ? ['a??????????????????????????????????????????????????????', 'A??????????????????????????????????????????????????????', 'c??????', 'C??????', 'd????', 'D????', 'e??????????????????????????????????????', 'E??????????????????????????????????????', 'i??????????????????', 'I??????????????????', 'l??', 'L??', 'n??????', 'N??????', 'o????????????????????????????????????????????????????', 'O????????????????????????????????????????????????????', 'r??', 'R??', 's????????', 'S????????', 't??????', 'T??????', 'u?????????????????????????????????????', 'U?????????????????????????????????????', 'y????????????????', 'Y????????????????', 'z??????', 'Z??????'] : ['a??????????????????????????????????????????????????????A??????????????????????????????????????????????????????', 'c??????C??????', 'd????D????', 'e??????????????????????????????????????E??????????????????????????????????????', 'i??????????????????I??????????????????', 'l??L??', 'n??????N??????', 'o????????????????????????????????????????????????????O????????????????????????????????????????????????????', 'r??R??', 's????????S????????', 't??????T??????', 'u?????????????????????????????????????U?????????????????????????????????????', 'y????????????????Y????????????????', 'z??????Z??????'];
      var handled = [];
      str.split('').forEach(function (ch) {
        dct.every(function (dct) {
          if (dct.indexOf(ch) !== -1) {
            if (handled.indexOf(dct) > -1) {
              return false;
            }
            str = str.replace(new RegExp('[' + dct + ']', 'gm' + sens), '[' + dct + ']');
            handled.push(dct);
          }
          return true;
        });
      });
      return str;
    }
  }, {
    key: 'createMergedBlanksRegExp',
    value: function createMergedBlanksRegExp(str) {
      return str.replace(/[\s]+/gmi, '[\\s]+');
    }
  }, {
    key: 'createAccuracyRegExp',
    value: function createAccuracyRegExp(str) {
      var _this = this;

      var chars = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~????';
      var acc = this.opt.accuracy,
          val = typeof acc === 'string' ? acc : acc.value,
          ls = typeof acc === 'string' ? [] : acc.limiters,
          lsJoin = '';
      ls.forEach(function (limiter) {
        lsJoin += '|' + _this.escapeStr(limiter);
      });
      switch (val) {
        case 'partially':
        default:
          return '()(' + str + ')';
        case 'complementary':
          lsJoin = '\\s' + (lsJoin ? lsJoin : this.escapeStr(chars));
          return '()([^' + lsJoin + ']*' + str + '[^' + lsJoin + ']*)';
        case 'exactly':
          return '(^|\\s' + lsJoin + ')(' + str + ')(?=$|\\s' + lsJoin + ')';
      }
    }
  }, {
    key: 'getSeparatedKeywords',
    value: function getSeparatedKeywords(sv) {
      var _this2 = this;

      var stack = [];
      sv.forEach(function (kw) {
        if (!_this2.opt.separateWordSearch) {
          if (kw.trim() && stack.indexOf(kw) === -1) {
            stack.push(kw);
          }
        } else {
          kw.split(' ').forEach(function (kwSplitted) {
            if (kwSplitted.trim() && stack.indexOf(kwSplitted) === -1) {
              stack.push(kwSplitted);
            }
          });
        }
      });
      return {
        'keywords': stack.sort(function (a, b) {
          return b.length - a.length;
        }),
        'length': stack.length
      };
    }
  }, {
    key: 'isNumeric',
    value: function isNumeric(value) {
      return Number(parseFloat(value)) == value;
    }
  }, {
    key: 'checkRanges',
    value: function checkRanges(array) {
      var _this3 = this;

      if (!Array.isArray(array) || Object.prototype.toString.call(array[0]) !== '[object Object]') {
        this.log('markRanges() will only accept an array of objects');
        this.opt.noMatch(array);
        return [];
      }
      var stack = [];
      var last = 0;
      array.sort(function (a, b) {
        return a.start - b.start;
      }).forEach(function (item) {
        var _callNoMatchOnInvalid = _this3.callNoMatchOnInvalidRanges(item, last),
            start = _callNoMatchOnInvalid.start,
            end = _callNoMatchOnInvalid.end,
            valid = _callNoMatchOnInvalid.valid;

        if (valid) {
          item.start = start;
          item.length = end - start;
          stack.push(item);
          last = end;
        }
      });
      return stack;
    }
  }, {
    key: 'callNoMatchOnInvalidRanges',
    value: function callNoMatchOnInvalidRanges(range, last) {
      var start = void 0,
          end = void 0,
          valid = false;
      if (range && typeof range.start !== 'undefined') {
        start = parseInt(range.start, 10);
        end = start + parseInt(range.length, 10);
        if (this.isNumeric(range.start) && this.isNumeric(range.length) && end - last > 0 && end - start > 0) {
          valid = true;
        } else {
          this.log('Ignoring invalid or overlapping range: ' + ('' + JSON.stringify(range)));
          this.opt.noMatch(range);
        }
      } else {
        this.log('Ignoring invalid range: ' + JSON.stringify(range));
        this.opt.noMatch(range);
      }
      return {
        start: start,
        end: end,
        valid: valid
      };
    }
  }, {
    key: 'checkWhitespaceRanges',
    value: function checkWhitespaceRanges(range, originalLength, string) {
      var end = void 0,
          valid = true,
          max = string.length,
          offset = originalLength - max,
          start = parseInt(range.start, 10) - offset;
      start = start > max ? max : start;
      end = start + parseInt(range.length, 10);
      if (end > max) {
        end = max;
        this.log('End range automatically set to the max value of ' + max);
      }
      if (start < 0 || end - start < 0 || start > max || end > max) {
        valid = false;
        this.log('Invalid range: ' + JSON.stringify(range));
        this.opt.noMatch(range);
      } else if (string.substring(start, end).replace(/\s+/g, '') === '') {
        valid = false;
        this.log('Skipping whitespace only range: ' + JSON.stringify(range));
        this.opt.noMatch(range);
      }
      return {
        start: start,
        end: end,
        valid: valid
      };
    }
  }, {
    key: 'getTextNodes',
    value: function getTextNodes(cb) {
      var _this4 = this;

      var val = '',
          nodes = [];
      this.iterator.forEachNode(NodeFilter.SHOW_TEXT, function (node) {
        nodes.push({
          start: val.length,
          end: (val += node.textContent).length,
          node: node
        });
      }, function (node) {
        if (_this4.matchesExclude(node.parentNode)) {
          return NodeFilter.FILTER_REJECT;
        } else {
          return NodeFilter.FILTER_ACCEPT;
        }
      }, function () {
        cb({
          value: val,
          nodes: nodes
        });
      });
    }
  }, {
    key: 'matchesExclude',
    value: function matchesExclude(el) {
      return DOMIterator.matches(el, this.opt.exclude.concat(['script', 'style', 'title', 'head', 'html']));
    }
  }, {
    key: 'wrapRangeInTextNode',
    value: function wrapRangeInTextNode(node, start, end) {
      var hEl = !this.opt.element ? 'mark' : this.opt.element,
          startNode = node.splitText(start),
          ret = startNode.splitText(end - start);
      var repl = document.createElement(hEl);
      repl.setAttribute('data-markjs', 'true');
      if (this.opt.className) {
        repl.setAttribute('class', this.opt.className);
      }
      repl.textContent = startNode.textContent;
      startNode.parentNode.replaceChild(repl, startNode);
      return ret;
    }
  }, {
    key: 'wrapRangeInMappedTextNode',
    value: function wrapRangeInMappedTextNode(dict, start, end, filterCb, eachCb) {
      var _this5 = this;

      dict.nodes.every(function (n, i) {
        var sibl = dict.nodes[i + 1];
        if (typeof sibl === 'undefined' || sibl.start > start) {
          if (!filterCb(n.node)) {
            return false;
          }
          var s = start - n.start,
              e = (end > n.end ? n.end : end) - n.start,
              startStr = dict.value.substr(0, n.start),
              endStr = dict.value.substr(e + n.start);
          n.node = _this5.wrapRangeInTextNode(n.node, s, e);
          dict.value = startStr + endStr;
          dict.nodes.forEach(function (k, j) {
            if (j >= i) {
              if (dict.nodes[j].start > 0 && j !== i) {
                dict.nodes[j].start -= e;
              }
              dict.nodes[j].end -= e;
            }
          });
          end -= e;
          eachCb(n.node.previousSibling, n.start);
          if (end > n.end) {
            start = n.end;
          } else {
            return false;
          }
        }
        return true;
      });
    }
  }, {
    key: 'wrapMatches',
    value: function wrapMatches(regex, ignoreGroups, filterCb, eachCb, endCb) {
      var _this6 = this;

      var matchIdx = ignoreGroups === 0 ? 0 : ignoreGroups + 1;
      this.getTextNodes(function (dict) {
        dict.nodes.forEach(function (node) {
          node = node.node;
          var match = void 0;
          while ((match = regex.exec(node.textContent)) !== null && match[matchIdx] !== '') {
            if (!filterCb(match[matchIdx], node)) {
              continue;
            }
            var pos = match.index;
            if (matchIdx !== 0) {
              for (var i = 1; i < matchIdx; i++) {
                pos += match[i].length;
              }
            }
            node = _this6.wrapRangeInTextNode(node, pos, pos + match[matchIdx].length);
            eachCb(node.previousSibling);
            regex.lastIndex = 0;
          }
        });
        endCb();
      });
    }
  }, {
    key: 'wrapMatchesAcrossElements',
    value: function wrapMatchesAcrossElements(regex, ignoreGroups, filterCb, eachCb, endCb) {
      var _this7 = this;

      var matchIdx = ignoreGroups === 0 ? 0 : ignoreGroups + 1;
      this.getTextNodes(function (dict) {
        var match = void 0;
        while ((match = regex.exec(dict.value)) !== null && match[matchIdx] !== '') {
          var start = match.index;
          if (matchIdx !== 0) {
            for (var i = 1; i < matchIdx; i++) {
              start += match[i].length;
            }
          }
          var end = start + match[matchIdx].length;
          _this7.wrapRangeInMappedTextNode(dict, start, end, function (node) {
            return filterCb(match[matchIdx], node);
          }, function (node, lastIndex) {
            regex.lastIndex = lastIndex;
            eachCb(node);
          });
        }
        endCb();
      });
    }
  }, {
    key: 'wrapRangeFromIndex',
    value: function wrapRangeFromIndex(ranges, filterCb, eachCb, endCb) {
      var _this8 = this;

      this.getTextNodes(function (dict) {
        var originalLength = dict.value.length;
        ranges.forEach(function (range, counter) {
          var _checkWhitespaceRange = _this8.checkWhitespaceRanges(range, originalLength, dict.value),
              start = _checkWhitespaceRange.start,
              end = _checkWhitespaceRange.end,
              valid = _checkWhitespaceRange.valid;

          if (valid) {
            _this8.wrapRangeInMappedTextNode(dict, start, end, function (node) {
              return filterCb(node, range, dict.value.substring(start, end), counter);
            }, function (node) {
              eachCb(node, range);
            });
          }
        });
        endCb();
      });
    }
  }, {
    key: 'unwrapMatches',
    value: function unwrapMatches(node) {
      var parent = node.parentNode;
      var docFrag = document.createDocumentFragment();
      while (node.firstChild) {
        docFrag.appendChild(node.removeChild(node.firstChild));
      }
      parent.replaceChild(docFrag, node);
      if (!this.ie) {
        parent.normalize();
      } else {
        this.normalizeTextNode(parent);
      }
    }
  }, {
    key: 'normalizeTextNode',
    value: function normalizeTextNode(node) {
      if (!node) {
        return;
      }
      if (node.nodeType === 3) {
        while (node.nextSibling && node.nextSibling.nodeType === 3) {
          node.nodeValue += node.nextSibling.nodeValue;
          node.parentNode.removeChild(node.nextSibling);
        }
      } else {
        this.normalizeTextNode(node.firstChild);
      }
      this.normalizeTextNode(node.nextSibling);
    }
  }, {
    key: 'markRegExp',
    value: function markRegExp(regexp, opt) {
      var _this9 = this;

      this.opt = opt;
      this.log('Searching with expression "' + regexp + '"');
      var totalMatches = 0,
          fn = 'wrapMatches';
      var eachCb = function eachCb(element) {
        totalMatches++;
        _this9.opt.each(element);
      };
      if (this.opt.acrossElements) {
        fn = 'wrapMatchesAcrossElements';
      }
      this[fn](regexp, this.opt.ignoreGroups, function (match, node) {
        return _this9.opt.filter(node, match, totalMatches);
      }, eachCb, function () {
        if (totalMatches === 0) {
          _this9.opt.noMatch(regexp);
        }
        _this9.opt.done(totalMatches);
      });
    }
  }, {
    key: 'mark',
    value: function mark(sv, opt) {
      var _this10 = this;

      this.opt = opt;
      var totalMatches = 0,
          fn = 'wrapMatches';

      var _getSeparatedKeywords = this.getSeparatedKeywords(typeof sv === 'string' ? [sv] : sv),
          kwArr = _getSeparatedKeywords.keywords,
          kwArrLen = _getSeparatedKeywords.length,
          sens = this.opt.caseSensitive ? '' : 'i',
          handler = function handler(kw) {
        var regex = new RegExp(_this10.createRegExp(kw), 'gm' + sens),
            matches = 0;
        _this10.log('Searching with expression "' + regex + '"');
        _this10[fn](regex, 1, function (term, node) {
          return _this10.opt.filter(node, kw, totalMatches, matches);
        }, function (element) {
          matches++;
          totalMatches++;
          _this10.opt.each(element);
        }, function () {
          if (matches === 0) {
            _this10.opt.noMatch(kw);
          }
          if (kwArr[kwArrLen - 1] === kw) {
            _this10.opt.done(totalMatches);
          } else {
            handler(kwArr[kwArr.indexOf(kw) + 1]);
          }
        });
      };

      if (this.opt.acrossElements) {
        fn = 'wrapMatchesAcrossElements';
      }
      if (kwArrLen === 0) {
        this.opt.done(totalMatches);
      } else {
        handler(kwArr[0]);
      }
    }
  }, {
    key: 'markRanges',
    value: function markRanges(rawRanges, opt) {
      var _this11 = this;

      this.opt = opt;
      var totalMatches = 0,
          ranges = this.checkRanges(rawRanges);
      if (ranges && ranges.length) {
        this.log('Starting to mark with the following ranges: ' + JSON.stringify(ranges));
        this.wrapRangeFromIndex(ranges, function (node, range, match, counter) {
          return _this11.opt.filter(node, range, match, counter);
        }, function (element, range) {
          totalMatches++;
          _this11.opt.each(element, range);
        }, function () {
          _this11.opt.done(totalMatches);
        });
      } else {
        this.opt.done(totalMatches);
      }
    }
  }, {
    key: 'unmark',
    value: function unmark(opt) {
      var _this12 = this;

      this.opt = opt;
      var sel = this.opt.element ? this.opt.element : '*';
      sel += '[data-markjs]';
      if (this.opt.className) {
        sel += '.' + this.opt.className;
      }
      this.log('Removal selector "' + sel + '"');
      this.iterator.forEachNode(NodeFilter.SHOW_ELEMENT, function (node) {
        _this12.unwrapMatches(node);
      }, function (node) {
        var matchesSel = DOMIterator.matches(node, sel),
            matchesExclude = _this12.matchesExclude(node);
        if (!matchesSel || matchesExclude) {
          return NodeFilter.FILTER_REJECT;
        } else {
          return NodeFilter.FILTER_ACCEPT;
        }
      }, this.opt.done);
    }
  }, {
    key: 'opt',
    set: function set$$1(val) {
      this._opt = _extends({}, {
        'element': '',
        'className': '',
        'exclude': [],
        'iframes': false,
        'iframesTimeout': 5000,
        'separateWordSearch': true,
        'diacritics': true,
        'synonyms': {},
        'accuracy': 'partially',
        'acrossElements': false,
        'caseSensitive': false,
        'ignoreJoiners': false,
        'ignoreGroups': 0,
        'ignorePunctuation': [],
        'wildcards': 'disabled',
        'each': function each() {},
        'noMatch': function noMatch() {},
        'filter': function filter() {
          return true;
        },
        'done': function done() {},
        'debug': false,
        'log': window.console
      }, val);
    },
    get: function get$$1() {
      return this._opt;
    }
  }, {
    key: 'iterator',
    get: function get$$1() {
      return new DOMIterator(this.ctx, this.opt.iframes, this.opt.exclude, this.opt.iframesTimeout);
    }
  }]);
  return Mark;
}();

function Mark(ctx) {
  var _this = this;

  var instance = new Mark$1(ctx);
  this.mark = function (sv, opt) {
    instance.mark(sv, opt);
    return _this;
  };
  this.markRegExp = function (sv, opt) {
    instance.markRegExp(sv, opt);
    return _this;
  };
  this.markRanges = function (sv, opt) {
    instance.markRanges(sv, opt);
    return _this;
  };
  this.unmark = function (opt) {
    instance.unmark(opt);
    return _this;
  };
  return this;
}

return Mark;

})));


/***/ }),

/***/ "./node_modules/normalize-wheel/index.js":
/*!***********************************************!*\
  !*** ./node_modules/normalize-wheel/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./src/normalizeWheel.js */ "./node_modules/normalize-wheel/src/normalizeWheel.js");


/***/ }),

/***/ "./node_modules/normalize-wheel/src/ExecutionEnvironment.js":
/*!******************************************************************!*\
  !*** ./node_modules/normalize-wheel/src/ExecutionEnvironment.js ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

/*jslint evil: true */



var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners:
    canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;


/***/ }),

/***/ "./node_modules/normalize-wheel/src/UserAgent_DEPRECATED.js":
/*!******************************************************************!*\
  !*** ./node_modules/normalize-wheel/src/UserAgent_DEPRECATED.js ***!
  \******************************************************************/
/***/ ((module) => {

/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * @providesModule UserAgent_DEPRECATED
 */

/**
 *  Provides entirely client-side User Agent and OS detection. You should prefer
 *  the non-deprecated UserAgent module when possible, which exposes our
 *  authoritative server-side PHP-based detection to the client.
 *
 *  Usage is straightforward:
 *
 *    if (UserAgent_DEPRECATED.ie()) {
 *      //  IE
 *    }
 *
 *  You can also do version checks:
 *
 *    if (UserAgent_DEPRECATED.ie() >= 7) {
 *      //  IE7 or better
 *    }
 *
 *  The browser functions will return NaN if the browser does not match, so
 *  you can also do version compares the other way:
 *
 *    if (UserAgent_DEPRECATED.ie() < 7) {
 *      //  IE6 or worse
 *    }
 *
 *  Note that the version is a float and may include a minor version number,
 *  so you should always use range operators to perform comparisons, not
 *  strict equality.
 *
 *  **Note:** You should **strongly** prefer capability detection to browser
 *  version detection where it's reasonable:
 *
 *    http://www.quirksmode.org/js/support.html
 *
 *  Further, we have a large number of mature wrapper functions and classes
 *  which abstract away many browser irregularities. Check the documentation,
 *  grep for things, or ask on javascript@lists.facebook.com before writing yet
 *  another copy of "event || window.event".
 *
 */

var _populated = false;

// Browsers
var _ie, _firefox, _opera, _webkit, _chrome;

// Actual IE browser for compatibility mode
var _ie_real_version;

// Platforms
var _osx, _windows, _linux, _android;

// Architectures
var _win64;

// Devices
var _iphone, _ipad, _native;

var _mobile;

function _populate() {
  if (_populated) {
    return;
  }

  _populated = true;

  // To work around buggy JS libraries that can't handle multi-digit
  // version numbers, Opera 10's user agent string claims it's Opera
  // 9, then later includes a Version/X.Y field:
  //
  // Opera/9.80 (foo) Presto/2.2.15 Version/10.10
  var uas = navigator.userAgent;
  var agent = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(uas);
  var os    = /(Mac OS X)|(Windows)|(Linux)/.exec(uas);

  _iphone = /\b(iPhone|iP[ao]d)/.exec(uas);
  _ipad = /\b(iP[ao]d)/.exec(uas);
  _android = /Android/i.exec(uas);
  _native = /FBAN\/\w+;/i.exec(uas);
  _mobile = /Mobile/i.exec(uas);

  // Note that the IE team blog would have you believe you should be checking
  // for 'Win64; x64'.  But MSDN then reveals that you can actually be coming
  // from either x64 or ia64;  so ultimately, you should just check for Win64
  // as in indicator of whether you're in 64-bit IE.  32-bit IE on 64-bit
  // Windows will send 'WOW64' instead.
  _win64 = !!(/Win64/.exec(uas));

  if (agent) {
    _ie = agent[1] ? parseFloat(agent[1]) : (
          agent[5] ? parseFloat(agent[5]) : NaN);
    // IE compatibility mode
    if (_ie && document && document.documentMode) {
      _ie = document.documentMode;
    }
    // grab the "true" ie version from the trident token if available
    var trident = /(?:Trident\/(\d+.\d+))/.exec(uas);
    _ie_real_version = trident ? parseFloat(trident[1]) + 4 : _ie;

    _firefox = agent[2] ? parseFloat(agent[2]) : NaN;
    _opera   = agent[3] ? parseFloat(agent[3]) : NaN;
    _webkit  = agent[4] ? parseFloat(agent[4]) : NaN;
    if (_webkit) {
      // We do not add the regexp to the above test, because it will always
      // match 'safari' only since 'AppleWebKit' appears before 'Chrome' in
      // the userAgent string.
      agent = /(?:Chrome\/(\d+\.\d+))/.exec(uas);
      _chrome = agent && agent[1] ? parseFloat(agent[1]) : NaN;
    } else {
      _chrome = NaN;
    }
  } else {
    _ie = _firefox = _opera = _chrome = _webkit = NaN;
  }

  if (os) {
    if (os[1]) {
      // Detect OS X version.  If no version number matches, set _osx to true.
      // Version examples:  10, 10_6_1, 10.7
      // Parses version number as a float, taking only first two sets of
      // digits.  If only one set of digits is found, returns just the major
      // version number.
      var ver = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(uas);

      _osx = ver ? parseFloat(ver[1].replace('_', '.')) : true;
    } else {
      _osx = false;
    }
    _windows = !!os[2];
    _linux   = !!os[3];
  } else {
    _osx = _windows = _linux = false;
  }
}

var UserAgent_DEPRECATED = {

  /**
   *  Check if the UA is Internet Explorer.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  ie: function() {
    return _populate() || _ie;
  },

  /**
   * Check if we're in Internet Explorer compatibility mode.
   *
   * @return bool true if in compatibility mode, false if
   * not compatibility mode or not ie
   */
  ieCompatibilityMode: function() {
    return _populate() || (_ie_real_version > _ie);
  },


  /**
   * Whether the browser is 64-bit IE.  Really, this is kind of weak sauce;  we
   * only need this because Skype can't handle 64-bit IE yet.  We need to remove
   * this when we don't need it -- tracked by #601957.
   */
  ie64: function() {
    return UserAgent_DEPRECATED.ie() && _win64;
  },

  /**
   *  Check if the UA is Firefox.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  firefox: function() {
    return _populate() || _firefox;
  },


  /**
   *  Check if the UA is Opera.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  opera: function() {
    return _populate() || _opera;
  },


  /**
   *  Check if the UA is WebKit.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  webkit: function() {
    return _populate() || _webkit;
  },

  /**
   *  For Push
   *  WILL BE REMOVED VERY SOON. Use UserAgent_DEPRECATED.webkit
   */
  safari: function() {
    return UserAgent_DEPRECATED.webkit();
  },

  /**
   *  Check if the UA is a Chrome browser.
   *
   *
   *  @return float|NaN Version number (if match) or NaN.
   */
  chrome : function() {
    return _populate() || _chrome;
  },


  /**
   *  Check if the user is running Windows.
   *
   *  @return bool `true' if the user's OS is Windows.
   */
  windows: function() {
    return _populate() || _windows;
  },


  /**
   *  Check if the user is running Mac OS X.
   *
   *  @return float|bool   Returns a float if a version number is detected,
   *                       otherwise true/false.
   */
  osx: function() {
    return _populate() || _osx;
  },

  /**
   * Check if the user is running Linux.
   *
   * @return bool `true' if the user's OS is some flavor of Linux.
   */
  linux: function() {
    return _populate() || _linux;
  },

  /**
   * Check if the user is running on an iPhone or iPod platform.
   *
   * @return bool `true' if the user is running some flavor of the
   *    iPhone OS.
   */
  iphone: function() {
    return _populate() || _iphone;
  },

  mobile: function() {
    return _populate() || (_iphone || _ipad || _android || _mobile);
  },

  nativeApp: function() {
    // webviews inside of the native apps
    return _populate() || _native;
  },

  android: function() {
    return _populate() || _android;
  },

  ipad: function() {
    return _populate() || _ipad;
  }
};

module.exports = UserAgent_DEPRECATED;


/***/ }),

/***/ "./node_modules/normalize-wheel/src/isEventSupported.js":
/*!**************************************************************!*\
  !*** ./node_modules/normalize-wheel/src/isEventSupported.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */



var ExecutionEnvironment = __webpack_require__(/*! ./ExecutionEnvironment */ "./node_modules/normalize-wheel/src/ExecutionEnvironment.js");

var useHasFeature;
if (ExecutionEnvironment.canUseDOM) {
  useHasFeature =
    document.implementation &&
    document.implementation.hasFeature &&
    // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    document.implementation.hasFeature('', '') !== true;
}

/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function isEventSupported(eventNameSuffix, capture) {
  if (!ExecutionEnvironment.canUseDOM ||
      capture && !('addEventListener' in document)) {
    return false;
  }

  var eventName = 'on' + eventNameSuffix;
  var isSupported = eventName in document;

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

module.exports = isEventSupported;


/***/ }),

/***/ "./node_modules/normalize-wheel/src/normalizeWheel.js":
/*!************************************************************!*\
  !*** ./node_modules/normalize-wheel/src/normalizeWheel.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule normalizeWheel
 * @typechecks
 */



var UserAgent_DEPRECATED = __webpack_require__(/*! ./UserAgent_DEPRECATED */ "./node_modules/normalize-wheel/src/UserAgent_DEPRECATED.js");

var isEventSupported = __webpack_require__(/*! ./isEventSupported */ "./node_modules/normalize-wheel/src/isEventSupported.js");


// Reasonable defaults
var PIXEL_STEP  = 10;
var LINE_HEIGHT = 40;
var PAGE_HEIGHT = 800;

/**
 * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
 * complicated, thus this doc is long and (hopefully) detailed enough to answer
 * your questions.
 *
 * If you need to react to the mouse wheel in a predictable way, this code is
 * like your bestest friend. * hugs *
 *
 * As of today, there are 4 DOM event types you can listen to:
 *
 *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
 *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
 *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
 *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
 *
 * So what to do?  The is the best:
 *
 *   normalizeWheel.getEventType();
 *
 * In your event callback, use this code to get sane interpretation of the
 * deltas.  This code will return an object with properties:
 *
 *   spinX   -- normalized spin speed (use for zoom) - x plane
 *   spinY   -- " - y plane
 *   pixelX  -- normalized distance (to pixels) - x plane
 *   pixelY  -- " - y plane
 *
 * Wheel values are provided by the browser assuming you are using the wheel to
 * scroll a web page by a number of lines or pixels (or pages).  Values can vary
 * significantly on different platforms and browsers, forgetting that you can
 * scroll at different speeds.  Some devices (like trackpads) emit more events
 * at smaller increments with fine granularity, and some emit massive jumps with
 * linear speed or acceleration.
 *
 * This code does its best to normalize the deltas for you:
 *
 *   - spin is trying to normalize how far the wheel was spun (or trackpad
 *     dragged).  This is super useful for zoom support where you want to
 *     throw away the chunky scroll steps on the PC and make those equal to
 *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
 *     resolve a single slow step on a wheel to 1.
 *
 *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
 *     get the crazy differences between browsers, but at least it'll be in
 *     pixels!
 *
 *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
 *     should translate to positive value zooming IN, negative zooming OUT.
 *     This matches the newer 'wheel' event.
 *
 * Why are there spinX, spinY (or pixels)?
 *
 *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
 *     with a mouse.  It results in side-scrolling in the browser by default.
 *
 *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
 *
 *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
 *     probably is by browsers in conjunction with fancy 3D controllers .. but
 *     you know.
 *
 * Implementation info:
 *
 * Examples of 'wheel' event if you scroll slowly (down) by one step with an
 * average mouse:
 *
 *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
 *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
 *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
 *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
 *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
 *
 * On the trackpad:
 *
 *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
 *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
 *
 * On other/older browsers.. it's more complicated as there can be multiple and
 * also missing delta values.
 *
 * The 'wheel' event is more standard:
 *
 * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
 *
 * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
 * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
 * backward compatibility with older events.  Those other values help us
 * better normalize spin speed.  Example of what the browsers provide:
 *
 *                          | event.wheelDelta | event.detail
 *        ------------------+------------------+--------------
 *          Safari v5/OS X  |       -120       |       0
 *          Safari v5/Win7  |       -120       |       0
 *         Chrome v17/OS X  |       -120       |       0
 *         Chrome v17/Win7  |       -120       |       0
 *                IE9/Win7  |       -120       |   undefined
 *         Firefox v4/OS X  |     undefined    |       1
 *         Firefox v4/Win7  |     undefined    |       3
 *
 */
function normalizeWheel(/*object*/ event) /*object*/ {
  var sX = 0, sY = 0,       // spinX, spinY
      pX = 0, pY = 0;       // pixelX, pixelY

  // Legacy
  if ('detail'      in event) { sY = event.detail; }
  if ('wheelDelta'  in event) { sY = -event.wheelDelta / 120; }
  if ('wheelDeltaY' in event) { sY = -event.wheelDeltaY / 120; }
  if ('wheelDeltaX' in event) { sX = -event.wheelDeltaX / 120; }

  // side scrolling on FF with DOMMouseScroll
  if ( 'axis' in event && event.axis === event.HORIZONTAL_AXIS ) {
    sX = sY;
    sY = 0;
  }

  pX = sX * PIXEL_STEP;
  pY = sY * PIXEL_STEP;

  if ('deltaY' in event) { pY = event.deltaY; }
  if ('deltaX' in event) { pX = event.deltaX; }

  if ((pX || pY) && event.deltaMode) {
    if (event.deltaMode == 1) {          // delta in LINE units
      pX *= LINE_HEIGHT;
      pY *= LINE_HEIGHT;
    } else {                             // delta in PAGE units
      pX *= PAGE_HEIGHT;
      pY *= PAGE_HEIGHT;
    }
  }

  // Fall-back if spin cannot be determined
  if (pX && !sX) { sX = (pX < 1) ? -1 : 1; }
  if (pY && !sY) { sY = (pY < 1) ? -1 : 1; }

  return { spinX  : sX,
           spinY  : sY,
           pixelX : pX,
           pixelY : pY };
}


/**
 * The best combination if you prefer spinX + spinY normalization.  It favors
 * the older DOMMouseScroll for Firefox, as FF does not include wheelDelta with
 * 'wheel' event, making spin speed determination impossible.
 */
normalizeWheel.getEventType = function() /*string*/ {
  return (UserAgent_DEPRECATED.firefox())
           ? 'DOMMouseScroll'
           : (isEventSupported('wheel'))
               ? 'wheel'
               : 'mousewheel';
};

module.exports = normalizeWheel;


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/AnnotationLayer.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/AnnotationLayer.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnotationLayer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AnnotationLayer.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/AnnotationLayer.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnotationLayer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnotationLayer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue?vue&type=style&index=0&id=60fe37d6&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue?vue&type=style&index=0&id=60fe37d6&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfPagedReaderViewer_vue_vue_type_style_index_0_id_60fe37d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PdfPagedReaderViewer.vue?vue&type=style&index=0&id=60fe37d6&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue?vue&type=style&index=0&id=60fe37d6&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfPagedReaderViewer_vue_vue_type_style_index_0_id_60fe37d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfPagedReaderViewer_vue_vue_type_style_index_0_id_60fe37d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue?vue&type=style&index=0&id=220a5005&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue?vue&type=style&index=0&id=220a5005&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfPagedReaderViewerPage_vue_vue_type_style_index_0_id_220a5005_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PdfPagedReaderViewerPage.vue?vue&type=style&index=0&id=220a5005&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue?vue&type=style&index=0&id=220a5005&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfPagedReaderViewerPage_vue_vue_type_style_index_0_id_220a5005_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfPagedReaderViewerPage_vue_vue_type_style_index_0_id_220a5005_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/TextLayer.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/TextLayer.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TextLayer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextLayer.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/TextLayer.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TextLayer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TextLayer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/TextLayer.vue?vue&type=style&index=1&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/TextLayer.vue?vue&type=style&index=1&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TextLayer_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextLayer.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/TextLayer.vue?vue&type=style&index=1&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TextLayer_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TextLayer_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./src/js/components/partials/Pdf/AnnotationLayer.vue":
/*!************************************************************!*\
  !*** ./src/js/components/partials/Pdf/AnnotationLayer.vue ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AnnotationLayer_vue_vue_type_template_id_8a232b98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnnotationLayer.vue?vue&type=template&id=8a232b98& */ "./src/js/components/partials/Pdf/AnnotationLayer.vue?vue&type=template&id=8a232b98&");
/* harmony import */ var _AnnotationLayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AnnotationLayer.vue?vue&type=script&lang=js& */ "./src/js/components/partials/Pdf/AnnotationLayer.vue?vue&type=script&lang=js&");
/* harmony import */ var _AnnotationLayer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AnnotationLayer.vue?vue&type=style&index=0&lang=scss& */ "./src/js/components/partials/Pdf/AnnotationLayer.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AnnotationLayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AnnotationLayer_vue_vue_type_template_id_8a232b98___WEBPACK_IMPORTED_MODULE_0__.render,
  _AnnotationLayer_vue_vue_type_template_id_8a232b98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/partials/Pdf/AnnotationLayer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue":
/*!*****************************************************************!*\
  !*** ./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PdfPagedReaderViewer_vue_vue_type_template_id_60fe37d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PdfPagedReaderViewer.vue?vue&type=template&id=60fe37d6&scoped=true& */ "./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue?vue&type=template&id=60fe37d6&scoped=true&");
/* harmony import */ var _PdfPagedReaderViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PdfPagedReaderViewer.vue?vue&type=script&lang=js& */ "./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue?vue&type=script&lang=js&");
/* harmony import */ var _PdfPagedReaderViewer_vue_vue_type_style_index_0_id_60fe37d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PdfPagedReaderViewer.vue?vue&type=style&index=0&id=60fe37d6&lang=scss&scoped=true& */ "./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue?vue&type=style&index=0&id=60fe37d6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PdfPagedReaderViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PdfPagedReaderViewer_vue_vue_type_template_id_60fe37d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PdfPagedReaderViewer_vue_vue_type_template_id_60fe37d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "60fe37d6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/partials/Pdf/PdfPagedReaderViewer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue":
/*!*********************************************************************!*\
  !*** ./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PdfPagedReaderViewerPage_vue_vue_type_template_id_220a5005_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PdfPagedReaderViewerPage.vue?vue&type=template&id=220a5005&scoped=true& */ "./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue?vue&type=template&id=220a5005&scoped=true&");
/* harmony import */ var _PdfPagedReaderViewerPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PdfPagedReaderViewerPage.vue?vue&type=script&lang=js& */ "./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue?vue&type=script&lang=js&");
/* harmony import */ var _PdfPagedReaderViewerPage_vue_vue_type_style_index_0_id_220a5005_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PdfPagedReaderViewerPage.vue?vue&type=style&index=0&id=220a5005&lang=scss&scoped=true& */ "./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue?vue&type=style&index=0&id=220a5005&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PdfPagedReaderViewerPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PdfPagedReaderViewerPage_vue_vue_type_template_id_220a5005_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PdfPagedReaderViewerPage_vue_vue_type_template_id_220a5005_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "220a5005",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/js/components/partials/Pdf/TextLayer.vue":
/*!******************************************************!*\
  !*** ./src/js/components/partials/Pdf/TextLayer.vue ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TextLayer_vue_vue_type_template_id_93673d14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TextLayer.vue?vue&type=template&id=93673d14& */ "./src/js/components/partials/Pdf/TextLayer.vue?vue&type=template&id=93673d14&");
/* harmony import */ var _TextLayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TextLayer.vue?vue&type=script&lang=js& */ "./src/js/components/partials/Pdf/TextLayer.vue?vue&type=script&lang=js&");
/* harmony import */ var _TextLayer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TextLayer.vue?vue&type=style&index=0&lang=scss& */ "./src/js/components/partials/Pdf/TextLayer.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _TextLayer_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TextLayer.vue?vue&type=style&index=1&lang=scss& */ "./src/js/components/partials/Pdf/TextLayer.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _TextLayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TextLayer_vue_vue_type_template_id_93673d14___WEBPACK_IMPORTED_MODULE_0__.render,
  _TextLayer_vue_vue_type_template_id_93673d14___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/partials/Pdf/TextLayer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/js/components/partials/Pdf/AnnotationLayer.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./src/js/components/partials/Pdf/AnnotationLayer.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnotationLayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AnnotationLayer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/AnnotationLayer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnotationLayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfPagedReaderViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PdfPagedReaderViewer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfPagedReaderViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfPagedReaderViewerPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PdfPagedReaderViewerPage.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfPagedReaderViewerPage_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/partials/Pdf/TextLayer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/js/components/partials/Pdf/TextLayer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextLayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextLayer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/TextLayer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TextLayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/partials/Pdf/AnnotationLayer.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./src/js/components/partials/Pdf/AnnotationLayer.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnotationLayer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AnnotationLayer.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/AnnotationLayer.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue?vue&type=style&index=0&id=60fe37d6&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue?vue&type=style&index=0&id=60fe37d6&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfPagedReaderViewer_vue_vue_type_style_index_0_id_60fe37d6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PdfPagedReaderViewer.vue?vue&type=style&index=0&id=60fe37d6&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue?vue&type=style&index=0&id=60fe37d6&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue?vue&type=style&index=0&id=220a5005&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue?vue&type=style&index=0&id=220a5005&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfPagedReaderViewerPage_vue_vue_type_style_index_0_id_220a5005_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PdfPagedReaderViewerPage.vue?vue&type=style&index=0&id=220a5005&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue?vue&type=style&index=0&id=220a5005&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/js/components/partials/Pdf/TextLayer.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************!*\
  !*** ./src/js/components/partials/Pdf/TextLayer.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TextLayer_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextLayer.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/TextLayer.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./src/js/components/partials/Pdf/TextLayer.vue?vue&type=style&index=1&lang=scss&":
/*!****************************************************************************************!*\
  !*** ./src/js/components/partials/Pdf/TextLayer.vue?vue&type=style&index=1&lang=scss& ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_TextLayer_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextLayer.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/TextLayer.vue?vue&type=style&index=1&lang=scss&");


/***/ }),

/***/ "./src/js/components/partials/Pdf/AnnotationLayer.vue?vue&type=template&id=8a232b98&":
/*!*******************************************************************************************!*\
  !*** ./src/js/components/partials/Pdf/AnnotationLayer.vue?vue&type=template&id=8a232b98& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnotationLayer_vue_vue_type_template_id_8a232b98___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnotationLayer_vue_vue_type_template_id_8a232b98___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AnnotationLayer_vue_vue_type_template_id_8a232b98___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AnnotationLayer.vue?vue&type=template&id=8a232b98& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/AnnotationLayer.vue?vue&type=template&id=8a232b98&");


/***/ }),

/***/ "./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue?vue&type=template&id=60fe37d6&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue?vue&type=template&id=60fe37d6&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfPagedReaderViewer_vue_vue_type_template_id_60fe37d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfPagedReaderViewer_vue_vue_type_template_id_60fe37d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfPagedReaderViewer_vue_vue_type_template_id_60fe37d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PdfPagedReaderViewer.vue?vue&type=template&id=60fe37d6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue?vue&type=template&id=60fe37d6&scoped=true&");


/***/ }),

/***/ "./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue?vue&type=template&id=220a5005&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue?vue&type=template&id=220a5005&scoped=true& ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfPagedReaderViewerPage_vue_vue_type_template_id_220a5005_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfPagedReaderViewerPage_vue_vue_type_template_id_220a5005_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PdfPagedReaderViewerPage_vue_vue_type_template_id_220a5005_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PdfPagedReaderViewerPage.vue?vue&type=template&id=220a5005&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue?vue&type=template&id=220a5005&scoped=true&");


/***/ }),

/***/ "./src/js/components/partials/Pdf/TextLayer.vue?vue&type=template&id=93673d14&":
/*!*************************************************************************************!*\
  !*** ./src/js/components/partials/Pdf/TextLayer.vue?vue&type=template&id=93673d14& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextLayer_vue_vue_type_template_id_93673d14___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextLayer_vue_vue_type_template_id_93673d14___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TextLayer_vue_vue_type_template_id_93673d14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TextLayer.vue?vue&type=template&id=93673d14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/TextLayer.vue?vue&type=template&id=93673d14&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/AnnotationLayer.vue?vue&type=template&id=8a232b98&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/AnnotationLayer.vue?vue&type=template&id=8a232b98& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.annotationLayerHtml && !_vm.isPreviewMode
    ? _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.hideLayer,
            expression: "!hideLayer",
          },
        ],
        ref: "annotationLayer",
        staticClass: "annotationLayer",
        style: _vm.annotationLayerStyles,
        domProps: { innerHTML: _vm._s(_vm.annotationLayerHtml) },
        on: { click: _vm.handleLinks },
      })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue?vue&type=template&id=60fe37d6&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewer.vue?vue&type=template&id=60fe37d6&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "PdfPagedReaderViewer",
      staticClass: "PdfPagedReaderViewer",
      class: { uiHidden: _vm.uiHidden },
    },
    [
      _vm.canLoadPages
        ? _c(
            "div",
            {
              ref: "PdfPagedReaderViewerViewport",
              staticClass: "PdfPagedReaderViewerViewport",
              style: _vm.pageWrapperStyles,
            },
            [
              _vm.canLoadPages
                ? _vm._l(
                    _vm.pagesGroups,
                    function (pagesGroup, pagesGroupIndex) {
                      return _c(
                        "div",
                        {
                          key: pagesGroupIndex,
                          staticClass: "PdfPagedReaderViewerPageWrapper",
                        },
                        _vm._l(pagesGroup, function (page_urls) {
                          return _c("PdfPagedReaderViewerPage", {
                            key: page_urls.pageNumber,
                            attrs: {
                              setOverrideOringinalSize:
                                _vm.setOverrideOringinalSize,
                              pageNumber: page_urls.pageNumber,
                              pageAvailableViewportWidth:
                                _vm.pageAvailableViewportWidth,
                              pageLargeUrl: page_urls.large,
                              pageTextLayerUrl: page_urls.text_layer,
                              pageAnnotationLayerUrl:
                                page_urls.annotation_layer,
                              isCurrentPage: true,
                              isPanning: _vm.panning,
                            },
                          })
                        }),
                        1
                      )
                    }
                  )
                : _vm._e(),
            ],
            2
          )
        : _vm._e(),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue?vue&type=template&id=220a5005&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/PdfPagedReaderViewerPage.vue?vue&type=template&id=220a5005&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      ref: "pageWrapper",
      staticClass: "PdfPagedReaderViewerPage",
      class: { isCurrentPage: _vm.isCurrentPage },
    },
    [
      _c("SmartZoomLayer", {
        attrs: { hideLayer: false, pageNumber: _vm.pageNumber },
      }),
      _vm._v(" "),
      _vm.renderTextLayer
        ? _c("TextLayer", {
            attrs: {
              hideLayer: _vm.isPanning,
              pageNumber: _vm.pageNumber,
              textLayerStyles: _vm.textLayerStyles,
              pageTextLayerUrl: _vm.pageTextLayerUrl,
            },
          })
        : _vm._e(),
      _vm._v(" "),
      !_vm.isPanning && _vm.renderAnnotationLayer
        ? _c("AnnotationLayer", {
            attrs: {
              hideLayer: _vm.isPanning,
              pageNumber: _vm.pageNumber,
              annotationLayerStyles: _vm.annotationLayerStyles,
              pageAnnotationLayerUrl: _vm.pageAnnotationLayerUrl,
            },
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          ref: "backgroundLayer",
          staticClass: "backgroundLayer",
          class: { isPanning: _vm.isPanning },
          style: {
            width: _vm.oringinalSize.width * _vm.scaledSizeScale + "px",
            height: _vm.oringinalSize.height * _vm.scaledSizeScale + "px",
          },
        },
        [
          !_vm.canvasLoaded
            ? _c("img", {
                ref: "backgroundLayerImage",
                style: {
                  width: _vm.oringinalSize.width + "px",
                  height: _vm.oringinalSize.height + "px",
                  transform: "scale(" + _vm.scaledSizeScale + ")",
                  transformOrigin: "left top",
                },
                attrs: {
                  draggable: "false",
                  src: _vm.pageLargeUrl,
                  classss: { imgHasLoaded: _vm.imgHasLoaded },
                },
              })
            : _vm._e(),
          _vm._v(" "),
          _c("canvas", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.canvasLoaded,
                expression: "canvasLoaded",
              },
            ],
            ref: "backgroundLayerImageCanvas",
            class: { imgHasLoaded: _vm.imgHasLoaded },
            style: {
              transform: "scale(" + _vm.scaledSizeScale + ")",
              transformOrigin: "left top",
            },
            attrs: {
              draggable: "false",
              width: _vm.oringinalSize.width + "px",
              height: _vm.oringinalSize.height + "px",
            },
          }),
        ]
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/TextLayer.vue?vue&type=template&id=93673d14&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Pdf/TextLayer.vue?vue&type=template&id=93673d14& ***!
  \****************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.textLayerHtml
    ? _c("div", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.hideLayer,
            expression: "!hideLayer",
          },
        ],
        ref: "textLayer",
        staticClass: "textLayer",
        style: _vm.textLayerStyles,
        attrs: { id: "TextLayer" },
        domProps: { innerHTML: _vm._s(_vm.textLayerHtml) },
      })
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=PdfPaged.6d83b1151e67aa5b.js.map