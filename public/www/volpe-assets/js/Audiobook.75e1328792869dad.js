(self["webpackChunk"] = self["webpackChunk"] || []).push([["Audiobook"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      showSpeed: false,
      speeds: [0.5, 0.8, 1.0, 1.2, 1.5, 2.0]
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['ui', 'uiHidden', 'lang', 'localizations', 'audiobook'])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)(['onlyDesktopVisible'])),
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapMutations)(['zoomByType', 'changeAudiobookSpeed'])), (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapActions)(['trackEvent'])), {}, {
    trackSelectSpeed: function trackSelectSpeed(speed) {
      this.trackEvent({
        action: 'narratorSpeed',
        trigger: 'click',
        source: 'audiobook:player'
      });
      this.changeAudiobookSpeed({
        speed: speed
      });
      this.showSpeed = false;
    },
    closeNarratorSpeed: function closeNarratorSpeed() {
      this.showSpeed = false;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _shared_UI_Components_ComponentFavoriteButton_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! _shared_/UI/Components/ComponentFavoriteButton.vue */ "./_shared_/UI/Components/ComponentFavoriteButton.vue");
/* harmony import */ var _shared_UI_Audiobooks_NarratorSpeedSelector_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! _shared_/UI/Audiobooks/NarratorSpeedSelector.vue */ "./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue");
/* harmony import */ var _shared_UI_Utilities_LoadingSpinner_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! _shared_/UI/Utilities/LoadingSpinner.vue */ "./_shared_/UI/Utilities/LoadingSpinner.vue");
/* harmony import */ var _shared_js_utils_secondToMMSS_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! _shared_/js/utils/secondToMMSS.js */ "./_shared_/js/utils/secondToMMSS.js");
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





/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    ComponentFavoriteButton: _shared_UI_Components_ComponentFavoriteButton_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    NarratorSpeedSelector: _shared_UI_Audiobooks_NarratorSpeedSelector_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    LoadingSpinner: _shared_UI_Utilities_LoadingSpinner_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: {
    track: Object,
    totalIndex: Number,
    index: Number,
    playerIsSticky: Boolean,
    isLatestPreviewTrack: Boolean
  },
  mounted: function mounted() {
    this.positionSeek = this.track.seek;
  },
  data: function data() {
    return {
      positionSeek: 0,
      settingSeek: false
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapState)(['audiobook', 'device', 'localizations', 'lang', 'isFavorite', 'isPlayBtn', 'isLoadingAudio'])), (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapGetters)(['onlyMobileVisible', 'isPreviewMode', 'isBuyableIssue'])), {}, {
    disableBack: function disableBack() {
      return this.index === 0;
    },
    disableNext: function disableNext() {
      return this.index === this.totalIndex - 1;
    },
    isPlaying: function isPlaying() {
      return this.track.audio.playing();
    },
    isLoading: function isLoading() {
      return this.track.audio.state() === 'loading' || this.isLoadingAudio;
    },
    buttonSize: function buttonSize() {
      var isDesktop = this.device.width >= 980;
      return {
        play: isDesktop ? "".concat(85 * 1.4, "px") : '85px',
        nextAndBack: isDesktop ? "".concat(45 * 1.4, "px") : '45px',
        rewindAndForward: isDesktop ? "".concat(40 * 1.2, "px") : '40px',
        favorite: isDesktop ? "".concat(28 * 1.3, "px") : '28px',
        loading: isDesktop ? "".concat(85 * 1.4, "px") : '85px'
      };
    },
    landscapeView: function landscapeView() {
      return this.device.height < 520;
    },
    xsDevices: function xsDevices() {
      return this.device.width < 361;
    },
    showPlayerInline: function showPlayerInline() {
      return this.device.width < 361 || this.device.height < 520;
    },
    favoriteActionText: function favoriteActionText() {
      return this.isFavorite ? this.localizations[this.lang].removeFromFavorites : this.localizations[this.lang].addToFavorites;
    },
    narrationSpeedActionText: function narrationSpeedActionText() {
      if (this.audiobook.track.speed === 1) {
        return this.localizations[this.lang].normalNarration;
      } else if (this.audiobook.track.speed > 1) {
        return this.localizations[this.lang].fastNarration;
      } else {
        return this.localizations[this.lang].slowNarration;
      }
    }
  }),
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapActions)(['trackNavigation'])), (0,vuex__WEBPACK_IMPORTED_MODULE_4__.mapMutations)(['setIsPlayBtn', 'togglePaymentLinks'])), {}, {
    playOrPauseAudio: function playOrPauseAudio() {
      if (this.isPlayBtn) {
        this.$emit('playtrack');
      } else {
        this.$emit('pausetrack');
      }

      this.togglePlayBtn();
    },
    togglePlayBtn: function togglePlayBtn() {
      this.setIsPlayBtn({
        isPlayBtn: !this.isPlayBtn
      });
    },
    rewind: function rewind() {
      this.$emit('rewindtrack');
      this.trackNavigation({
        action: 'rewind',
        trigger: 'click',
        source: 'audiobook:player'
      });
    },
    forward: function forward() {
      this.$emit('forwardtrack');
      this.trackNavigation({
        action: 'forward',
        trigger: 'click',
        source: 'audiobook:player'
      });
    },
    next: function next() {
      this.$emit('nexttrack');
      this.trackNavigation({
        action: 'next',
        trigger: 'click',
        source: 'audiobook:player'
      });
    },
    back: function back() {
      this.$emit('backtrack');
      this.trackNavigation({
        action: 'back',
        trigger: 'click',
        source: 'audiobook:player'
      });
    },
    sendSeekPosition: function sendSeekPosition() {
      this.$emit('setseektrack', this.positionSeek);
      this.trackNavigation({
        action: 'rewindOrForward',
        trigger: 'range',
        source: 'audiobook:player'
      });
    },
    pauseSeekPosition: function pauseSeekPosition() {
      this.$emit('pauseseekposition');
    },
    reachedPreview: function reachedPreview() {
      this.$emit('pausetrack');

      if (this.isBuyableIssue) {
        this.togglePaymentLinks();
      }
    }
  }),
  watch: {
    'track.seek': function trackSeek(positionSeek) {
      this.positionSeek = isNaN(positionSeek) || typeof positionSeek !== 'number' ? this.positionSeek : positionSeek;

      if (this.isPreviewMode && this.isLatestPreviewTrack && this.track.durationInSecondsPreview < this.positionSeek) {
        this.reachedPreview();
      }
    }
  },
  filters: _objectSpread({}, {
    secondToMMSS: _shared_js_utils_secondToMMSS_js__WEBPACK_IMPORTED_MODULE_3__["default"]
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlaylist.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlaylist.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _shared_js_utils_secondToMMSS_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! _shared_/js/utils/secondToMMSS.js */ "./_shared_/js/utils/secondToMMSS.js");
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


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    playlist: Array,
    currentTrackIndex: Number,
    isPlaying: Boolean
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapState)(['localizations', 'lang'])), (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)(['onlyMobileVisible', 'isPreviewMode'])),
  methods: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapActions)(['trackNavigation'])), {}, {
    playChapter: function playChapter(index) {
      if (index === this.currentTrackIndex) return;
      this.$emit('playtrack', index);
      this.trackNavigation({
        action: 'select chapter',
        trigger: 'click',
        page: '',
        source: 'audiobook:playlist'
      });
    },
    showTrackDuration: function showTrackDuration(track) {
      if (!this.isPreviewMode) {
        return true;
      }

      return track.durationInSecondsPreview != track.durationInSeconds;
    }
  }),
  filters: _objectSpread({}, {
    secondToMMSS: _shared_js_utils_secondToMMSS_js__WEBPACK_IMPORTED_MODULE_0__["default"]
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPoster.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPoster.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  props: {
    currentTrack: Object
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapState)(['audiobook', 'publication', 'title', 'device', 'localizations', 'lang', 'issue'])), {}, {
    setLikeColumn: function setLikeColumn() {
      return this.device.height > 520;
    },
    narrators: function narrators() {
      return this.issue.tags.hasOwnProperty('narrator') && this.issue.tags.narrator.length > 0 ? this.issue.tags.narrator.join(', ') : null;
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookViewer.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookViewer.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! howler */ "./node_modules/howler/dist/howler.js");
/* harmony import */ var howler__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(howler__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _AudiobookPlayer_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudiobookPlayer.vue */ "./src/js/components/partials/Audiobook/AudiobookPlayer.vue");
/* harmony import */ var _AudiobookPlaylist_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudiobookPlaylist.vue */ "./src/js/components/partials/Audiobook/AudiobookPlaylist.vue");
/* harmony import */ var _AudiobookPoster_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AudiobookPoster.vue */ "./src/js/components/partials/Audiobook/AudiobookPoster.vue");
/* harmony import */ var _shared_js_utils_secondToMMSS_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! _shared_/js/utils/secondToMMSS.js */ "./_shared_/js/utils/secondToMMSS.js");
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






/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  components: {
    AudiobookPlayer: _AudiobookPlayer_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    AudiobookPlaylist: _AudiobookPlaylist_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    AudiobookPoster: _AudiobookPoster_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      track: {
        index: 0,
        audio: null,
        seek: 0,
        playseek: 0,
        durationInSecondsPreview: 0
      },
      seekPositionPause: false,
      playerIsSticky: false,
      lastLocalization: {
        seekPosition: 0,
        chapterPosition: 0
      }
    };
  },
  computed: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapState)(['audiobook', 'ui', 'device', 'title', 'publication', 'issue', 'environment', 'lastLocation', 'isPlayBtn', 'isLoadingAudio'])), (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapGetters)(['onlyMobileVisible', 'onlyDesktopVisible', 'isBuyableIssue', 'isPreviewMode'])), {}, {
    currentTrack: function currentTrack() {
      return this.audiobook.playlist[this.track.index];
    },
    totalIndex: function totalIndex() {
      return this.audiobook.playlist.length;
    },
    borderTop: function borderTop() {
      return "padding-top: ".concat(this.ui.headerbar.offsetHeight, "px");
    },
    isPlaying: function isPlaying() {
      if (this.track.audio === null) {
        return false;
      } else {
        return this.track.audio.playing();
      }
    },
    centerOnDektop: function centerOnDektop() {
      // It's because in some devices, crop the cover
      return this.device.width > 720 && this.device.height > 520;
    },
    getAuthors: function getAuthors() {
      if (this.issue.tags.hasOwnProperty('author')) {
        return this.issue.tags.author.length > 0 ? this.issue.tags.author.join(', ') + '. ' : '';
      }

      return '';
    },
    isLatestPreviewTrack: function isLatestPreviewTrack() {
      if (!this.isPreviewMode) {
        return false;
      }

      return this.currentTrack.durationInSecondsPreview !== this.currentTrack.durationInSeconds;
    }
  }),
  created: function created() {
    this.initAudiobook();
    this.mustBeOpenPlaylist();
    document.addEventListener('keydown', this.handleKeyPressed, false);
  },
  mounted: function mounted() {
    this.isSticky();
    this.sendLastLocation();
  },
  methods: _objectSpread(_objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapMutations)(['setLoadingState', 'setLoadingAudioState', 'setIsPlayBtn', 'toggleUi', 'openAudiobookPlaylist', 'closeAudiobookPlaylist', 'loadingAudiobookPlaylist', 'togglePaymentLinks'])), (0,vuex__WEBPACK_IMPORTED_MODULE_5__.mapActions)(['trackNavigation', 'setLastLocation'])), {}, {
    initAudiobook: function initAudiobook() {
      this.loadLastLocation();
      this.loadingAudio(true);
      this.setLoadingState({
        isLoading: false
      });
    },
    loadingAudio: function loadingAudio() {
      var _this = this;

      var firstLoad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.track.audio = new howler__WEBPACK_IMPORTED_MODULE_0__.Howl({
        src: [this.currentTrack.file],
        format: ['mp3'],
        html5: true,
        autoplay: false,
        rate: this.audiobook.track.speed,
        preload: true,
        onend: this.next,
        onload: function onload() {
          _this.setMediaSessionData();

          if (firstLoad) {
            _this.setSeek(_this.track.seek);
          }
        }
      });
      this.track.durationInSecondsPreview = this.currentTrack.durationInSecondsPreview;
    },
    play: function play(index) {
      var _this2 = this;

      this.setLoadingAudioState({
        isLoadingAudio: true
      }); // when send index, we loading a new chapter and play

      if (typeof index === 'number') {
        this.stop();
        this.track.index = index;
        this.loadingAudio();
        this.sendLastLocation(true);
      }

      if (this.track.audio.state() === 'loaded') {
        this.track.audio.play();
      } else {
        this.track.audio.once('load', function () {
          _this2.track.audio.play();
        });
      }

      this.track.audio.off('play');
      this.track.audio.once('play', function () {
        _this2.setIsPlayBtn({
          isPlayBtn: false
        });

        _this2.setLoadingAudioState({
          isLoadingAudio: false
        });
      });
      /*
       * Show payments link when an user go to
       * next track in this is not disponible because is a preview and
       * the issue need is purchable
       */

      if (this.currentTrack.file === null) {
        this.reachedPreview();
      }
    },
    pause: function pause() {
      var _this3 = this;

      this.track.audio.pause();
      this.track.audio.off('pause');
      this.track.audio.once('pause', function () {
        _this3.setIsPlayBtn({
          isPlayBtn: true
        });

        _this3.setLoadingAudioState({
          isLoadingAudio: false
        });
      });
      this.sendLastLocation(true);
    },
    stop: function stop() {
      this.track.audio.stop();
    },
    rewind: function rewind() {
      var seconds = this.track.seek >= 30 ? this.track.seek - 30 : 0;
      this.setSeek(seconds);
    },
    forward: function forward() {
      var duration = this.track.audio.duration();
      var seconds = this.track.seek + 30 >= duration ? duration : this.track.seek + 30;
      this.setSeek(seconds);
    },
    setSeek: function setSeek(seconds) {
      var _this4 = this;

      if (this.isPreviewMode && this.track.durationInSecondsPreview < seconds) {
        this.reachedPreview();
        return;
      }

      if (!this.isPlayBtn) {
        this.track.audio.pause();
        this.setLoadingAudioState({
          isLoadingAudio: true
        });
      }

      this.track.audio.seek(seconds);
      this.seekPositionPause = false;

      if (this.isPlayBtn) {
        return;
      }

      if (!this.playseek) {
        this.track.audio.play();
        this.playseek = 1;
      }

      this.track.audio.once('play', function () {
        _this4.playseek = 0;

        _this4.setIsPlayBtn({
          isPlayBtn: false
        });

        _this4.setLoadingAudioState({
          isLoadingAudio: false
        });
      });
    },
    next: function next() {
      this.stop();
      if (this.track.index === this.totalIndex) return;

      if (this.track.index < this.totalIndex) {
        this.track.index++;
      } else {
        this.track.index = this.totalIndex;
      }

      this.loadingAudio();
      this.sendLastLocation(true);
      this.play();
    },
    back: function back() {
      this.pause();

      if (this.track.seek > 5) {
        this.setSeek(0);
        return this.play();
      }

      if (this.track.index !== 0) {
        this.track.index--;
      } else {
        this.track.index = 0;
      }

      this.loadingAudio();
      this.sendLastLocation(true);
      this.play();
    },
    mustBeOpenPlaylist: function mustBeOpenPlaylist() {
      if (this.device.width >= 1024) {
        this.openAudiobookPlaylist();
      }
    },
    handleKeyPressed: function handleKeyPressed(e) {
      if (e.keyCode === 32) {
        //SpaceKey
        e.preventDefault();
        this.isPlaying ? this.pause() : this.play();
        this.trackNavigation({
          action: this.isPlaying ? 'pause' : 'play',
          trigger: 'keyboard',
          source: 'audiobook:player'
        });
      }

      if (e.keyCode === 39) {
        //ArrowLeft
        e.preventDefault();
        this.forward();
        this.trackNavigation({
          action: 'forward',
          trigger: 'keyboard',
          source: 'audiobook:player'
        });
      }

      if (e.keyCode === 37) {
        //ArrowRight
        e.preventDefault();
        this.rewind();
        this.trackNavigation({
          action: 'rewind',
          trigger: 'keyboard',
          source: 'audiobook:player'
        });
      }

      if (e.keyCode === 38) {
        //ArrowUp
        e.preventDefault();
        this.back();
        this.trackNavigation({
          action: 'back',
          trigger: 'keyboard',
          source: 'audiobook:player'
        });
      }

      if (e.keyCode === 40) {
        //ArrowDown
        e.preventDefault();
        this.next();
        this.trackNavigation({
          action: 'next',
          trigger: 'keyboard',
          source: 'audiobook:player'
        });
      }
    },
    pauseSeekPosition: function pauseSeekPosition() {
      this.seekPositionPause = true;
    },
    setMediaSessionData: function setMediaSessionData() {
      var _this5 = this;

      if ('mediaSession' in navigator) {
        /**
         * For more details: https://developers.google.com/web/updates/2017/02/media-session
         * We use Media Session for catch the behavior of media keys
         * and manage the audio using media notifications.
         * The status is Draft https://developer.mozilla.org/en-US/docs/Web/API/Media_Session_API
         * @todo Make it work in the most browsers.
         */
        navigator.mediaSession.metadata = new MediaMetadata({
          title: "".concat(this.currentTrack.chapter, " - ").concat(this.currentTrack.title),
          artist: this.getAuthors,
          album: this.title,
          artwork: [{
            src: this.publication.cover
          }]
        });
        navigator.mediaSession.setActionHandler('play', function () {
          _this5.isPlaying ? _this5.pause() : _this5.play();

          _this5.trackNavigation({
            action: 'play',
            trigger: 'mediaSession',
            source: 'audiobook:player'
          });
        });
        navigator.mediaSession.setActionHandler('pause', function () {
          _this5.pause();

          _this5.trackNavigation({
            action: 'pause',
            trigger: 'mediaSession',
            source: 'audiobook:player'
          });
        });
        /**
         * We deactivate these function to playback control, because is doesn't woeking correctly when the tab is inactive.
         * Happen when the phone is bloqued or was change a tab.
         * Causes: When is used with the phone bloqued or the tab inactive, the actions don't dispatch fine
         * but when unblock de phone screen, the actions chain execute causing overlapping audio or loading in the icon
         * of play. The problem date: 08/16/2019
         */
        // navigator.mediaSession.setActionHandler('seekbackward', () => {
        //     this.rewind();
        //     this.trackNavigation({
        //         action: 'rewind',
        //         trigger: 'mediaSession',
        //         source: 'audiobook:player',
        //     })
        // });
        // navigator.mediaSession.setActionHandler('seekforward', () => {
        //     this.forward();
        //     this.trackNavigation({
        //         action: 'forward',
        //         trigger: 'mediaSession',
        //         source: 'audiobook:player',
        //     })
        // });
        // navigator.mediaSession.setActionHandler('previoustrack', () => {
        //     this.back();
        //     this.trackNavigation({
        //         action: 'back',
        //         trigger: 'mediaSession',
        //         source: 'audiobook:player',
        //     })
        // });
        // navigator.mediaSession.setActionHandler('nexttrack', () => {
        //     this.next()
        //     this.trackNavigation({
        //         action: 'next',
        //         trigger: 'mediaSession',
        //         source: 'audiobook:player',
        //     })
        // });
      }
    },

    /**
     * We observe when audiobook is non visible to apply a shadow to sticky player.
     * For this we are using https://developer.mozilla.org/es/docs/Web/API/Intersection_Observer_API.
     */
    isSticky: function isSticky() {
      var _this6 = this;

      var observer = new IntersectionObserver(function (entries) {
        _this6.playerIsSticky = entries[0].intersectionRatio === 0;
      }, {
        threshold: [0, 1]
      });
      observer.observe(this.$refs.audiobookPoster);
    },
    sendLastLocation: function sendLastLocation() {
      var _this7 = this;

      var sendNow = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.isPlaying || sendNow) {
        this.setLastLocation({
          currentSeek: this.track.seek,
          currentTrack: this.track.index
        });
      }
      /**
       * @todo We can make it more frequent later.
       * Use a if because we use the same method for send the location when user change a chapter and avoid
       * init a new setTimeout every time to user change the chapter overlaping timeout and 🔥
       */


      if (!sendNow) {
        setTimeout(function () {
          _this7.sendLastLocation();
        }, 60000);
      }
    },
    loadLastLocation: function loadLastLocation() {
      this.track.index = this.lastLocation.audio.currentTrack;
      this.track.seek = this.lastLocation.audio.currentSeek;
    },
    reachedPreview: function reachedPreview() {
      this.track.audio.pause();

      if (this.isBuyableIssue) {
        this.togglePaymentLinks();
      }
    }
  }),
  watch: {
    'audiobook.track.speed': function audiobookTrackSpeed(speed) {
      this.track.audio.rate(speed);
    },
    isPlaying: function isPlaying(playing) {
      var _this8 = this;

      if (this.currentTrack.file == null) {
        this.track.seek = 0;
        this.stop();
        return;
      } // It's necesary becuse the seek usually muast be and object.


      this.track.seek = typeof this.track.audio.seek() === 'number' ? this.track.audio.seek() : this.track.seek;
      var updateSeek;

      if (playing) {
        updateSeek = setInterval(function () {
          // We not send the actual seek when the user change using the seekbar.
          _this8.track.seek = _this8.seekPositionPause ? _this8.track.seek : _this8.track.audio.seek();
        }, 250);
      } else {
        clearInterval(updateSeek);
      }
    },
    'device.width': function deviceWidth(width) {
      if (width >= 1024) {
        this.openAudiobookPlaylist();
      } else {
        this.closeAudiobookPlaylist();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue?vue&type=style&index=0&id=448a8a12&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue?vue&type=style&index=0&id=448a8a12&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Z Index\n */\n.NarratorSpeedSelector[data-v-448a8a12] {\n  position: relative;\n  width: 38px;\n  cursor: pointer;\n}\n.NarratorSpeedSelector button[data-v-448a8a12] {\n  width: 100%;\n  border: none;\n  background: transparent;\n  border-radius: 3px;\n  font-size: 18px;\n  color: var(--theme-icons-color);\n  cursor: pointer;\n  position: absolute;\n  left: 0;\n  right: 0;\n  transform: scale(1.15);\n}\n@media screen and (min-width: 980px) {\n.NarratorSpeedSelector button[data-v-448a8a12] {\n    transform: scale(1.35);\n}\n}\n.NarratorSpeedSelector button[data-v-448a8a12]:hover {\n  background: rgba(112, 112, 112, 0.09);\n}\n.NarratorSpeedSelector button[data-v-448a8a12]:active {\n  background: rgba(112, 112, 112, 0.12);\n  outline: 0;\n}\n.NarratorSpeedSelector ul[data-v-448a8a12] {\n  position: absolute;\n  left: 0;\n  bottom: -200%;\n  list-style: none;\n  min-width: 140px;\n  max-width: 160px;\n  background: var(--theme-background-color);\n  border-radius: 3px;\n  overflow: hidden;\n  transform: translateY(0);\n  z-index: 200;\n}\n.NarratorSpeedSelector ul li[data-v-448a8a12]:hover {\n  background: rgba(112, 112, 112, 0.16);\n}\n.NarratorSpeedSelector ul li[data-v-448a8a12]:active, .NarratorSpeedSelector ul li[data-v-448a8a12]:focus {\n  background: rgba(112, 112, 112, 0.26);\n}\n.NarratorSpeedSelector ul li[data-v-448a8a12]:first-child {\n  font-size: 0.875rem;\n  background: rgba(224, 224, 224, 0.2);\n}\n.NarratorSpeedSelector.isSticky ul[data-v-448a8a12] {\n  bottom: auto;\n  top: 0;\n}\n.NarratorSpeedSelector .isSelected[data-v-448a8a12] {\n  font-weight: 600;\n}\n.NarratorSpeedSelector .slide-fade-enter-active[data-v-448a8a12] {\n  transition: all 0.3s ease;\n}\n.NarratorSpeedSelector .slide-fade-leave-active[data-v-448a8a12] {\n  transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);\n}\n.NarratorSpeedSelector .slide-fade-enter[data-v-448a8a12],\n.NarratorSpeedSelector .slide-fade-leave-to[data-v-448a8a12] {\n  transform: translateY(-10px);\n  opacity: 0;\n}", "",{"version":3,"sources":["webpack://./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue"],"names":[],"mappings":"AAEA;;EAAA;AAmFA;EACI,kBAAA;EACA,WAAA;EACA,eAAA;AAjFJ;AAmFI;EACI,WAAA;EACA,YAAA;EACA,uBAAA;EACA,kBAAA;EACA,eAAA;EACA,+BAAA;EACA,eAAA;EACA,kBAAA;EACA,OAAA;EACA,QAAA;EACA,sBAAA;AAjFR;AAkFQ;AAZJ;IAaQ,sBAAA;AA/EV;AACF;AAgFQ;EACI,qCAAA;AA9EZ;AAgFQ;EACI,qCAAA;EACA,UAAA;AA9EZ;AAkFI;EACI,kBAAA;EACA,OAAA;EACA,aAAA;EACA,gBAAA;EACA,gBAAA;EACA,gBAAA;EACA,yCAAA;EACA,kBAAA;EACA,gBAAA;EACA,wBAAA;EACA,YAAA;AAhFR;AAkFY;EACI,qCAAA;AAhFhB;AAkFY;EAEI,qCAAA;AAjFhB;AAoFQ;EACI,mBAAA;EACA,oCAAA;AAlFZ;AAsFI;EACI,YAAA;EACA,MAAA;AApFR;AAuFI;EACI,gBAAA;AArFR;AAwFI;EACI,yBAAA;AAtFR;AAwFI;EACI,iDAAA;AAtFR;AAwFI;;EAEI,4BAAA;EACA,UAAA;AAtFR","sourcesContent":["@use 'sass:math';\n\n/**\n * Z Index\n */\n\n$zBack: -1;\n$z1: 100;\n$z2: 200;\n$z3: 300;\n$z4: 400;\n$z5: 500;\n$z6: 600;\n$zMax: 9999;\n// Toolbar\n$header-and-toolbar-height: 55px;\n$toolbar-background-color: #ffffff;\n$lateral-menu-width: 70px;\n$secondary-background-color: lighten($toolbar-background-color, 10%);\n$loading-bar-color: #ee3077;\n// $title-color: hsla(0, 0%, 99%, 0.97);\n$title-color: #707070;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.NarratorSpeedSelector {\n    position: relative;\n    width: 38px;\n    cursor: pointer;\n\n    button {\n        width: 100%;\n        border: none;\n        background: transparent;\n        border-radius: 3px;\n        font-size: 18px;\n        color: var(--theme-icons-color);\n        cursor: pointer;\n        position: absolute;\n        left: 0;\n        right: 0;\n        transform: scale(1.15);\n        @media screen and (min-width: 980px) {\n            transform: scale(1.35);\n        }\n        &:hover {\n            background: rgba(#707070, 0.09);\n        }\n        &:active {\n            background: rgba(#707070, 0.12);\n            outline: 0;\n        }\n    }\n\n    ul {\n        position: absolute;\n        left: 0;\n        bottom: -200%;\n        list-style: none;\n        min-width: 140px;\n        max-width: 160px;\n        background: var(--theme-background-color);\n        border-radius: 3px;\n        overflow: hidden;\n        transform: translateY(0);\n        z-index: 200;\n        li {\n            &:hover {\n                background: rgba(#707070, 0.16); // This color work in both color mode\n            }\n            &:active,\n            &:focus {\n                background: rgba(#707070, 0.26); // This color work in both color mode\n            }\n        }\n        li:first-child {\n            font-size: 0.875rem;\n            background: rgba(224, 224, 224, 0.2);\n        }\n    }\n\n    &.isSticky ul {\n        bottom: auto;\n        top: 0;\n    }\n\n    .isSelected {\n        font-weight: 600;\n    }\n\n    .slide-fade-enter-active {\n        transition: all 0.3s ease;\n    }\n    .slide-fade-leave-active {\n        transition: all 0.1s cubic-bezier(1, 0.5, 0.8, 1);\n    }\n    .slide-fade-enter,\n    .slide-fade-leave-to {\n        transform: translateY(-10px);\n        opacity: 0;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=style&index=0&id=4bb7505f&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=style&index=0&id=4bb7505f&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Z Index\n */\n.AudiobookPlayer[data-v-4bb7505f] {\n  color: var(--theme-text-color);\n}\n.AudiobookPlayer .flatButton.rewind[data-v-4bb7505f]:active,\n.AudiobookPlayer .flatButton.forward[data-v-4bb7505f]:active {\n  transition: transform 50ms ease;\n}\n.AudiobookPlayer .flatButton.rewind[data-v-4bb7505f]:active {\n  transform: rotate(-10deg);\n}\n.AudiobookPlayer .flatButton.forward[data-v-4bb7505f]:active {\n  transform: rotate(10deg);\n}\n@media screen and (min-width: 980px) {\n.AudiobookPlayer .timing[data-v-4bb7505f] {\n    font-size: 1.2rem;\n}\n}", "",{"version":3,"sources":["webpack://./src/js/components/partials/Audiobook/AudiobookPlayer.vue"],"names":[],"mappings":"AAEA;;EAAA;AA+VA;EACI,8BAAA;AA7VJ;AA+VI;;EAEI,+BAAA;AA7VR;AA+VI;EACI,yBAAA;AA7VR;AA+VI;EACI,wBAAA;AA7VR;AAiWQ;AADJ;IAEQ,iBAAA;AA9VV;AACF","sourcesContent":["@use 'sass:math';\n\n/**\n * Z Index\n */\n\n$zBack: -1;\n$z1: 100;\n$z2: 200;\n$z3: 300;\n$z4: 400;\n$z5: 500;\n$z6: 600;\n$zMax: 9999;\n// Toolbar\n$header-and-toolbar-height: 55px;\n$toolbar-background-color: #ffffff;\n$lateral-menu-width: 70px;\n$secondary-background-color: lighten($toolbar-background-color, 10%);\n$loading-bar-color: #ee3077;\n// $title-color: hsla(0, 0%, 99%, 0.97);\n$title-color: #707070;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.AudiobookPlayer {\n    color: var(--theme-text-color);\n\n    .flatButton.rewind:active,\n    .flatButton.forward:active {\n        transition: transform 50ms ease;\n    }\n    .flatButton.rewind:active {\n        transform: rotate(-10deg);\n    }\n    .flatButton.forward:active {\n        transform: rotate(10deg);\n    }\n\n    .timing {\n        @media screen and (min-width: 980px) {\n            font-size: 1.2rem;\n        }\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=style&index=1&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=style&index=1&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Z Index\n */\n.AudiobookPlayer button[data-action=playOrPause] svg {\n  width: 85px;\n  height: 85px;\n}\n@media screen and (min-width: 980px) {\n.AudiobookPlayer button[data-action=playOrPause] svg {\n    width: 119px;\n    height: 119px;\n}\n}\n.AudiobookPlayer button[data-action=back] svg,\n.AudiobookPlayer button[data-action=next] svg {\n  width: 45px;\n  height: 45px;\n}\n@media screen and (min-width: 980px) {\n.AudiobookPlayer button[data-action=back] svg,\n.AudiobookPlayer button[data-action=next] svg {\n    width: 63px;\n    height: 63px;\n}\n}\n.AudiobookPlayer button[data-action=rewind] svg,\n.AudiobookPlayer button[data-action=forward] svg {\n  width: 45px;\n  height: 45px;\n}\n@media screen and (min-width: 980px) {\n.AudiobookPlayer button[data-action=rewind] svg,\n.AudiobookPlayer button[data-action=forward] svg {\n    width: 63px;\n    height: 63px;\n}\n}\n.AudiobookPlayer button[data-action=favorite] svg {\n  width: 30px;\n  height: 30px;\n}\n@media screen and (min-width: 980px) {\n.AudiobookPlayer button[data-action=favorite] svg {\n    width: 42px;\n    height: 42px;\n}\n}\n[type=range] {\n  -webkit-appearance: none;\n  background: transparent;\n  margin: 0;\n  height: 26px;\n  width: 100%;\n}\n[type=range]::-moz-focus-outer {\n  border: 0;\n}\n[type=range]:focus {\n  outline: 0;\n}\n[type=range]:focus::-webkit-slider-runnable-track {\n  background: #ededed;\n}\n[type=range]:focus::-ms-fill-lower {\n  background: #e0e0e0;\n}\n[type=range]:focus::-ms-fill-upper {\n  background: #ededed;\n}\n[type=range]::-webkit-slider-runnable-track {\n  cursor: pointer;\n  height: 8px;\n  -webkit-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  width: 100%;\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px rgba(13, 13, 13, 0.2);\n  background: #e0e0e0;\n  border: 2px solid #cfd8dc;\n  border-radius: 5px;\n}\n[type=range]::-webkit-slider-thumb {\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), 0 0 1px rgba(13, 13, 13, 0.1);\n  background: #707070;\n  border: 1px solid #eceff1;\n  border-radius: 30px;\n  cursor: -webkit-grab;\n  cursor: grab;\n  height: 26px;\n  width: 26px;\n  -webkit-appearance: none;\n  margin-top: -15px;\n}\n[type=range]::-moz-range-track {\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px rgba(13, 13, 13, 0.2);\n  cursor: pointer;\n  height: 8px;\n  -moz-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  width: 100%;\n  background: #e0e0e0;\n  border: 2px solid #cfd8dc;\n  border-radius: 5px;\n  height: 4px;\n}\n[type=range]::-moz-range-thumb {\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), 0 0 1px rgba(13, 13, 13, 0.1);\n  background: #707070;\n  border: 1px solid #eceff1;\n  border-radius: 30px;\n  cursor: grab;\n  height: 22px;\n  width: 22px;\n}\n[type=range]::-ms-track {\n  cursor: pointer;\n  height: 8px;\n  -ms-transition: all 0.2s ease;\n  transition: all 0.2s ease;\n  width: 100%;\n  background: transparent;\n  border-color: transparent;\n  border-width: 13px;\n  color: transparent;\n}\n[type=range]::-ms-fill-lower {\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px rgba(13, 13, 13, 0.2);\n  background: lightgray;\n  border: 2px solid #cfd8dc;\n  border-radius: 10px;\n}\n[type=range]::-ms-fill-upper {\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2), 0 0 1px rgba(13, 13, 13, 0.2);\n  background: #e0e0e0;\n  border: 2px solid #cfd8dc;\n  border-radius: 10px;\n}\n[type=range]::-ms-thumb {\n  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.1), 0 0 1px rgba(13, 13, 13, 0.1);\n  background: #707070;\n  border: 1px solid #eceff1;\n  border-radius: 30px;\n  cursor: grab;\n  height: 22px;\n  width: 22px;\n  margin-top: 2px;\n}\n[type=range]:disabled::-webkit-slider-thumb {\n  cursor: not-allowed;\n}\n[type=range]:disabled::-moz-range-thumb {\n  cursor: not-allowed;\n}\n[type=range]:disabled::-ms-thumb {\n  cursor: not-allowed;\n}\n[type=range]:disabled::-webkit-slider-runnable-track {\n  cursor: not-allowed;\n}\n[type=range]:disabled::-ms-fill-lower {\n  cursor: not-allowed;\n}\n[type=range]:disabled::-ms-fill-upper {\n  cursor: not-allowed;\n}\n[type=range]::-ms-thumb {\n  -ms-transition: transform 100ms ease;\n  transition: transform 100ms ease;\n}\n[type=range]::-moz-range-thumb {\n  -moz-transition: transform 100ms ease;\n  transition: transform 100ms ease;\n}\n[type=range]::-webkit-slider-thumb {\n  -webkit-transition: transform 100ms ease;\n  transition: transform 100ms ease;\n}\n[type=range]:active::-ms-thumb {\n  cursor: grabbing;\n  transform: scale(1.2);\n}\n[type=range]:active::-moz-range-thumb {\n  cursor: grabbing;\n  transform: scale(1.2);\n}\n[type=range]:active::-webkit-slider-thumb {\n  cursor: -webkit-grabbing;\n  cursor: grabbing;\n  transform: scale(1.2);\n}", "",{"version":3,"sources":["webpack://./src/js/components/partials/Audiobook/AudiobookPlayer.vue","webpack://./_shared_/sass/components/_input-range-variables.scss"],"names":[],"mappings":"AAEA;;EAAA;AA6XI;EACI,WAAA;EACA,YAAA;AA3XR;AA4XQ;AAHJ;IAIQ,YAAA;IACA,aAAA;AAzXV;AACF;AA2XI;;EAEI,WAAA;EACA,YAAA;AAzXR;AA0XQ;AAJJ;;IAKQ,WAAA;IACA,YAAA;AAtXV;AACF;AAwXI;;EAEI,WAAA;EACA,YAAA;AAtXR;AAuXQ;AAJJ;;IAKQ,WAAA;IACA,YAAA;AAnXV;AACF;AAqXI;EACI,WAAA;EACA,YAAA;AAnXR;AAoXQ;AAHJ;IAIQ,WAAA;IACA,YAAA;AAjXV;AACF;AA+YA;EACI,wBAAA;EACA,uBAAA;EACA,SAAA;EACA,YAtEW;EAuEX,WCtbU;AD0Cd;AA8YI;EACI,SAAA;AA5YR;AA+YI;EACI,UAAA;AA7YR;AA+YQ;EACI,mBAAA;AA7YZ;AAgZQ;EACI,mBChdE;ADkEd;AAiZQ;EACI,mBAAA;AA/YZ;AAmZI;EA/CA,eAAA;EACA,WAjDW;EAkDX,iCAAA;EAAA,yBAAA;EACA,WChaU;EDyZV,yEAAA;EAsDI,mBC3dM;ED4dN,yBAAA;EACA,kBCzcO;AD2Df;AAiZI;EA3DA,yEAAA;EAYA,mBChbU;EDibV,yBAAA;EACA,mBAzDW;EA0DX,oBAAA;EAAA,YAAA;EACA,YAAA;EACA,WAAA;EA4CI,wBAAA;EACA,iBAAA;AAzYR;AA4YI;EAjEA,yEAAA;EAIA,eAAA;EACA,WAjDW;EAkDX,8BAAA;EAAA,yBAAA;EACA,WChaU;ED6dN,mBCzeM;ED0eN,yBAAA;EACA,kBCvdO;EDwdP,WAAA;AAvYR;AA0YI;EA1EA,yEAAA;EAYA,mBChbU;EDibV,yBAAA;EACA,mBAzDW;EA0DX,YAAA;EACA,YAAA;EACA,WAAA;AAxUJ;AAqYI;EA1EA,eAAA;EACA,WAjDW;EAkDX,6BAAA;EAAA,yBAAA;EACA,WChaU;EDyeN,uBAAA;EACA,yBAAA;EACA,kBAAA;EACA,kBAAA;AAhYR;AAmYI;EAtFA,yEAAA;EAwFI,qBCtegB;EDuehB,yBAAA;EACA,mBAAA;AAjYR;AAoYI;EA7FA,yEAAA;EA+FI,mBCpgBM;EDqgBN,yBAAA;EACA,mBAAA;AAlYR;AAqYI;EApGA,yEAAA;EAYA,mBChbU;EDibV,yBAAA;EACA,mBAzDW;EA0DX,YAAA;EACA,YAAA;EACA,WAAA;EAqFI,eAAA;AA7XR;AAiYQ;EArFJ,mBAAA;AAzSJ;AAkYQ;EAzFJ,mBAAA;AAtSJ;AAmYQ;EA7FJ,mBAAA;AAnSJ;AAoYQ;EAjGJ,mBAAA;AAhSJ;AAqYQ;EArGJ,mBAAA;AA7RJ;AAsYQ;EAzGJ,mBAAA;AA1RJ;AAwYI;EACI,oCAAA;EAAA,gCAAA;AAtYR;AAwYI;EACI,qCAAA;EAAA,gCAAA;AAtYR;AAwYI;EACI,wCAAA;EAAA,gCAAA;AAtYR;AAwYI;EACI,gBAAA;EACA,qBAAA;AAtYR;AAwYI;EACI,gBAAA;EACA,qBAAA;AAtYR;AAwYI;EACI,wBAAA;EAAA,gBAAA;EACA,qBAAA;AAtYR","sourcesContent":["@use 'sass:math';\n\n/**\n * Z Index\n */\n\n$zBack: -1;\n$z1: 100;\n$z2: 200;\n$z3: 300;\n$z4: 400;\n$z5: 500;\n$z6: 600;\n$zMax: 9999;\n// Toolbar\n$header-and-toolbar-height: 55px;\n$toolbar-background-color: #ffffff;\n$lateral-menu-width: 70px;\n$secondary-background-color: lighten($toolbar-background-color, 10%);\n$loading-bar-color: #ee3077;\n// $title-color: hsla(0, 0%, 99%, 0.97);\n$title-color: #707070;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n@import '_shared_/sass/components/_input-range-variables.scss';\n// change the size of `range` in audiobooks only.\n$track-height: 8px;\n$thumb-radius: 30px;\n$thumb-height: 26px;\n$thumb-width: 26px;\n\n.AudiobookPlayer {\n    button[data-action='playOrPause'] svg {\n        width: 85px;\n        height: 85px;\n        @media screen and (min-width: 980px) {\n            width: calc(85px * 1.4);\n            height: calc(85px * 1.4);\n        }\n    }\n    button[data-action='back'] svg,\n    button[data-action='next'] svg {\n        width: 45px;\n        height: 45px;\n        @media screen and (min-width: 980px) {\n            width: calc(45px * 1.4);\n            height: calc(45px * 1.4);\n        }\n    }\n    button[data-action='rewind'] svg,\n    button[data-action='forward'] svg {\n        width: 45px;\n        height: 45px;\n        @media screen and (min-width: 980px) {\n            width: calc(45px * 1.4);\n            height: calc(45px * 1.4);\n        }\n    }\n    button[data-action='favorite'] svg {\n        width: 30px;\n        height: 30px;\n        @media screen and (min-width: 980px) {\n            width: calc(30px * 1.4);\n            height: calc(30px * 1.4);\n        }\n    }\n}\n\n//range input styles. If this is scope, whe can't use inside a portal.\n@mixin shadow($shadow-size, $shadow-blur, $shadow-color) {\n    box-shadow: $shadow-size $shadow-size $shadow-blur $shadow-color, 0 0 $shadow-size lighten($shadow-color, 5%);\n}\n\n@mixin track {\n    cursor: pointer;\n    height: $track-height;\n    transition: all 0.2s ease;\n    width: $track-width;\n}\n\n@mixin thumb($adjustment: 0) {\n    @include shadow($thumb-shadow-size, $thumb-shadow-blur, $thumb-shadow-color);\n    background: $thumb-color;\n    border: $thumb-border-width solid $thumb-border-color;\n    border-radius: $thumb-radius;\n    cursor: grab;\n    height: $thumb-height + $adjustment;\n    width: $thumb-width + $adjustment;\n}\n\n@mixin disabled {\n    cursor: not-allowed;\n}\n\n[type='range'] {\n    -webkit-appearance: none;\n    background: transparent;\n    margin: 0;\n    height: $thumb-height;\n    width: $track-width;\n\n    &::-moz-focus-outer {\n        border: 0;\n    }\n\n    &:focus {\n        outline: 0;\n\n        &::-webkit-slider-runnable-track {\n            background: lighten($track-color, $contrast);\n        }\n\n        &::-ms-fill-lower {\n            background: $track-color;\n        }\n\n        &::-ms-fill-upper {\n            background: lighten($track-color, $contrast);\n        }\n    }\n\n    &::-webkit-slider-runnable-track {\n        @include track;\n        @include shadow($track-shadow-size, $track-shadow-blur, $track-shadow-color);\n        background: $track-color;\n        border: $track-border-width solid $track-border-color;\n        border-radius: $track-radius;\n    }\n\n    &::-webkit-slider-thumb {\n        @include thumb;\n        -webkit-appearance: none;\n        margin-top: -(math.div($thumb-height, 2) + math.div($track-height, 2) - $track-border-width);\n    }\n\n    &::-moz-range-track {\n        @include shadow($track-shadow-size, $track-shadow-blur, $track-shadow-color);\n        @include track;\n        background: $track-color;\n        border: $track-border-width solid $track-border-color;\n        border-radius: $track-radius;\n        height: math.div($track-height, 2);\n    }\n\n    &::-moz-range-thumb {\n        @include thumb(-4);\n    }\n\n    &::-ms-track {\n        @include track;\n        background: transparent;\n        border-color: transparent;\n        border-width: math.div($thumb-height, 2);\n        color: transparent;\n    }\n\n    &::-ms-fill-lower {\n        @include shadow($track-shadow-size, $track-shadow-blur, $track-shadow-color);\n        background: $ie-bottom-track-color;\n        border: $track-border-width solid $track-border-color;\n        border-radius: ($track-radius * 2);\n    }\n\n    &::-ms-fill-upper {\n        @include shadow($track-shadow-size, $track-shadow-blur, $track-shadow-color);\n        background: $track-color;\n        border: $track-border-width solid $track-border-color;\n        border-radius: ($track-radius * 2);\n    }\n\n    &::-ms-thumb {\n        @include thumb(-4);\n        margin-top: math.div($track-height, 4);\n    }\n\n    &:disabled {\n        &::-webkit-slider-thumb {\n            @include disabled;\n        }\n\n        &::-moz-range-thumb {\n            @include disabled;\n        }\n\n        &::-ms-thumb {\n            @include disabled;\n        }\n\n        &::-webkit-slider-runnable-track {\n            @include disabled;\n        }\n\n        &::-ms-fill-lower {\n            @include disabled;\n        }\n\n        &::-ms-fill-upper {\n            @include disabled;\n        }\n    }\n\n    &::-ms-thumb {\n        transition: transform 100ms ease;\n    }\n    &::-moz-range-thumb {\n        transition: transform 100ms ease;\n    }\n    &::-webkit-slider-thumb {\n        transition: transform 100ms ease;\n    }\n    &:active::-ms-thumb {\n        cursor: grabbing;\n        transform: scale(1.2);\n    }\n    &:active::-moz-range-thumb {\n        cursor: grabbing;\n        transform: scale(1.2);\n    }\n    &:active::-webkit-slider-thumb {\n        cursor: grabbing;\n        transform: scale(1.2);\n    }\n}\n","$track-color: #e0e0e0;\n$thumb-color: #707070;\n\n$thumb-radius: 12px !default;\n$thumb-height: 22px !default;\n$thumb-width: 22px !default;\n$thumb-shadow-size: 1px !default;\n$thumb-shadow-blur: 1px !default;\n$thumb-shadow-color: rgba(0, 0, 0, 0.1) !default;\n$thumb-border-width: 1px !default;\n$thumb-border-color: #eceff1 !default;\n\n$track-width: 100% !default;\n$track-height: 4px !default;\n$track-shadow-size: 1px !default;\n$track-shadow-blur: 1px !default;\n$track-shadow-color: rgba(0, 0, 0, 0.2) !default;\n$track-border-width: 2px !default;\n$track-border-color: #cfd8dc !default;\n\n$track-radius: 5px !default;\n$contrast: 5% !default;\n\n$ie-bottom-track-color: darken($track-color, $contrast) !default;\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlaylist.vue?vue&type=style&index=0&id=a891d560&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlaylist.vue?vue&type=style&index=0&id=a891d560&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Z Index\n */\n.AudiobookPlaylist[data-v-a891d560] {\n  padding-bottom: 4rem;\n}\n.AudiobookPlaylist.backgroundInMobile[data-v-a891d560] {\n  background: rgba(255, 255, 255, 0.05);\n}\n.AudiobookPlaylist .title[data-v-a891d560] {\n  font-size: 1.25rem;\n  color: var(--theme-text-color);\n}\n.AudiobookPlaylist ul[data-v-a891d560],\n.AudiobookPlaylist li[data-v-a891d560] {\n  list-style: none;\n  cursor: pointer;\n  color: var(--theme-text-color);\n}\n.AudiobookPlaylist li[data-v-a891d560]:hover {\n  background: rgba(112, 112, 112, 0.09);\n}\n.AudiobookPlaylist li[data-v-a891d560]:active,\n.AudiobookPlaylist li.isSelect[data-v-a891d560] {\n  background: rgba(112, 112, 112, 0.12);\n  outline: 0;\n}\n.AudiobookPlaylist li.disabled[data-v-a891d560] {\n  opacity: 0.2;\n}\n.AudiobookPlaylist li[data-v-a891d560]:after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  height: 1px;\n  width: calc(100% - 30px);\n  background-color: var(--theme-border-color);\n}\n.AudiobookPlaylist li[data-v-a891d560]:first-child:after {\n  background-color: transparent;\n}", "",{"version":3,"sources":["webpack://./src/js/components/partials/Audiobook/AudiobookPlaylist.vue"],"names":[],"mappings":"AAEA;;EAAA;AAqHA;EAEI,oBAAA;AApHJ;AAsHI;EACI,qCAAA;AApHR;AAsHI;EACI,kBAAA;EACA,8BAAA;AApHR;AAsHI;;EAEI,gBAAA;EACA,eAAA;EACA,8BAAA;AApHR;AAsHI;EACI,qCAAA;AApHR;AAsHI;;EAEI,qCAAA;EACA,UAAA;AApHR;AAsHI;EACI,YAAA;AApHR;AAsHI;EACI,WAAA;EACA,kBAAA;EACA,MAAA;EACA,WAAA;EACA,wBAAA;EACA,2CAAA;AApHR;AAsHI;EACI,6BAAA;AApHR","sourcesContent":["@use 'sass:math';\n\n/**\n * Z Index\n */\n\n$zBack: -1;\n$z1: 100;\n$z2: 200;\n$z3: 300;\n$z4: 400;\n$z5: 500;\n$z6: 600;\n$zMax: 9999;\n// Toolbar\n$header-and-toolbar-height: 55px;\n$toolbar-background-color: #ffffff;\n$lateral-menu-width: 70px;\n$secondary-background-color: lighten($toolbar-background-color, 10%);\n$loading-bar-color: #ee3077;\n// $title-color: hsla(0, 0%, 99%, 0.97);\n$title-color: #707070;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.AudiobookPlaylist {\n    // fix overlapping playlist in chrome mobile browser\n    padding-bottom: 4rem;\n\n    &.backgroundInMobile {\n        background: rgba(255, 255, 255, 0.05);\n    }\n    .title {\n        font-size: 1.25rem;\n        color: var(--theme-text-color);\n    }\n    ul,\n    li {\n        list-style: none;\n        cursor: pointer;\n        color: var(--theme-text-color);\n    }\n    li:hover {\n        background: rgba(#707070, 0.09);\n    }\n    li:active,\n    li.isSelect {\n        background: rgba(#707070, 0.12);\n        outline: 0;\n    }\n    li.disabled {\n        opacity: 0.2;\n    }\n    li:after {\n        content: '';\n        position: absolute;\n        top: 0;\n        height: 1px;\n        width: calc(100% - 30px);\n        background-color: var(--theme-border-color);\n    }\n    li:first-child:after {\n        background-color: transparent;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPoster.vue?vue&type=style&index=0&id=4dda9ccb&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPoster.vue?vue&type=style&index=0&id=4dda9ccb&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Z Index\n */\n.AudiobookPoster[data-v-4dda9ccb] {\n  color: var(--theme-text-color);\n}\n.AudiobookPoster h4[data-v-4dda9ccb] {\n  font-size: 1.25rem;\n  font-weight: 400;\n}\n@media screen and (min-width: 980px) {\n.AudiobookPoster h4[data-v-4dda9ccb] {\n    font-size: 1.32rem;\n}\n}\n.AudiobookPoster .image-container[data-v-4dda9ccb] {\n  max-width: 145px;\n  max-height: 100%;\n}\n@media screen and (min-width: 580px) {\n.AudiobookPoster .image-container[data-v-4dda9ccb] {\n    max-width: 188.5px;\n}\n}\n.AudiobookPoster img[data-v-4dda9ccb] {\n  width: 100%;\n  border-radius: 5px;\n}", "",{"version":3,"sources":["webpack://./src/js/components/partials/Audiobook/AudiobookPoster.vue"],"names":[],"mappings":"AAEA;;EAAA;AAyDA;EACI,8BAAA;AAvDJ;AAyDI;EACI,kBAAA;EACA,gBAAA;AAvDR;AAwDQ;AAHJ;IAIQ,kBAAA;AArDV;AACF;AAuDI;EACI,gBAAA;EAMA,gBAAA;AA1DR;AA2DQ;AARJ;IASQ,kBAAA;AAxDV;AACF;AA+DI;EACI,WAAA;EACA,kBAAA;AA7DR","sourcesContent":["@use 'sass:math';\n\n/**\n * Z Index\n */\n\n$zBack: -1;\n$z1: 100;\n$z2: 200;\n$z3: 300;\n$z4: 400;\n$z5: 500;\n$z6: 600;\n$zMax: 9999;\n// Toolbar\n$header-and-toolbar-height: 55px;\n$toolbar-background-color: #ffffff;\n$lateral-menu-width: 70px;\n$secondary-background-color: lighten($toolbar-background-color, 10%);\n$loading-bar-color: #ee3077;\n// $title-color: hsla(0, 0%, 99%, 0.97);\n$title-color: #707070;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.AudiobookPoster {\n    color: var(--theme-text-color);\n\n    h4 {\n        font-size: 1.25rem;\n        font-weight: 400;\n        @media screen and (min-width: 980px) {\n            font-size: 1.32rem;\n        }\n    }\n    .image-container {\n        max-width: 145px;\n        // Replaced this with 100% because on some audiobooks,\n        // the title was overlaping the image.\n        // Leaving it here just if it breaks something else.\n        // @todo remove 2020.05.30\n        // max-height: 190px;\n        max-height: 100%;\n        @media screen and (min-width: 580px) {\n            max-width: calc(145px * 1.3);\n            // Replaced this with 100% because on some audiobooks,\n            // the title was overlaping the image.\n            // Leaving it here just if it breaks something else.\n            // @todo remove 2020.05.30\n            // max-height: calc(190px * 1.3);\n        }\n    }\n    img {\n        width: 100%;\n        border-radius: 5px;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookViewer.vue?vue&type=style&index=0&id=7e5ae710&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookViewer.vue?vue&type=style&index=0&id=7e5ae710&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, "/**\n * Z Index\n */\n.AudiobookViewer[data-v-7e5ae710] {\n  height: 100vh;\n  overflow-y: auto;\n  padding-bottom: 2rem;\n  -webkit-overflow-scrolling: touch;\n}\n.AudiobookViewer .centerOnDektop[data-v-7e5ae710] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.AudiobookViewer .playerContainer[data-v-7e5ae710] {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background: var(--theme-background-reader);\n  z-index: 100;\n}\n@media screen and (min-width: 571px) {\n.AudiobookViewer[data-v-7e5ae710] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: calc(100% - 70px);\n}\n}\n@media screen and (min-width: 1024px) {\n.AudiobookViewer[data-v-7e5ae710] {\n    width: calc(100% - 500px);\n}\n}", "",{"version":3,"sources":["webpack://./src/js/components/partials/Audiobook/AudiobookViewer.vue"],"names":[],"mappings":"AAEA;;EAAA;AAufA;EACI,aAAA;EACA,gBAAA;EACA,oBAAA;EAEA,iCAAA;AAtfJ;AAwfI;EACI,aAAA;EACA,sBAAA;EACA,uBAAA;AAtfR;AAyfI;EACI,wBAAA;EAAA,gBAAA;EACA,MAAA;EACA,0CAAA;EACA,YAngBH;AAYL;AA0fI;AApBJ;IAqBQ,aAAA;IACA,mBAAA;IACA,uBAAA;IACA,wBAAA;AAvfN;AACF;AAwfI;AA1BJ;IA2BQ,yBAAA;AArfN;AACF","sourcesContent":["@use 'sass:math';\n\n/**\n * Z Index\n */\n\n$zBack: -1;\n$z1: 100;\n$z2: 200;\n$z3: 300;\n$z4: 400;\n$z5: 500;\n$z6: 600;\n$zMax: 9999;\n// Toolbar\n$header-and-toolbar-height: 55px;\n$toolbar-background-color: #ffffff;\n$lateral-menu-width: 70px;\n$secondary-background-color: lighten($toolbar-background-color, 10%);\n$loading-bar-color: #ee3077;\n// $title-color: hsla(0, 0%, 99%, 0.97);\n$title-color: #707070;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.AudiobookViewer {\n    height: 100vh;\n    overflow-y: auto;\n    padding-bottom: 2rem;\n    // fix for safari iOs\n    -webkit-overflow-scrolling: touch;\n\n    .centerOnDektop {\n        display: flex;\n        flex-direction: column;\n        justify-content: center;\n    }\n\n    .playerContainer {\n        position: sticky;\n        top: 0;\n        background: var(--theme-background-reader);\n        z-index: $z1;\n    }\n\n    @media screen and (min-width: 571px) {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: calc(100% - 70px);\n    }\n    @media screen and (min-width: 1024px) {\n        width: calc(100% - 500px);\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/howler/dist/howler.js":
/*!********************************************!*\
  !*** ./node_modules/howler/dist/howler.js ***!
  \********************************************/
/***/ ((module, exports, __webpack_require__) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Create the global controller. All contained methods and properties apply
   * to all sounds that are currently playing or will be in the future.
   */
  var HowlerGlobal = function() {
    this.init();
  };
  HowlerGlobal.prototype = {
    /**
     * Initialize the global Howler object.
     * @return {Howler}
     */
    init: function() {
      var self = this || Howler;

      // Create a global ID counter.
      self._counter = 1000;

      // Pool of unlocked HTML5 Audio objects.
      self._html5AudioPool = [];
      self.html5PoolSize = 10;

      // Internal properties.
      self._codecs = {};
      self._howls = [];
      self._muted = false;
      self._volume = 1;
      self._canPlayEvent = 'canplaythrough';
      self._navigator = (typeof window !== 'undefined' && window.navigator) ? window.navigator : null;

      // Public properties.
      self.masterGain = null;
      self.noAudio = false;
      self.usingWebAudio = true;
      self.autoSuspend = true;
      self.ctx = null;

      // Set to false to disable the auto audio unlocker.
      self.autoUnlock = true;

      // Setup the various state values for global tracking.
      self._setup();

      return self;
    },

    /**
     * Get/set the global volume for all sounds.
     * @param  {Float} vol Volume from 0.0 to 1.0.
     * @return {Howler/Float}     Returns self or current volume.
     */
    volume: function(vol) {
      var self = this || Howler;
      vol = parseFloat(vol);

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        self._volume = vol;

        // Don't update any of the nodes if we are muted.
        if (self._muted) {
          return self;
        }

        // When using Web Audio, we just need to adjust the master gain.
        if (self.usingWebAudio) {
          self.masterGain.gain.setValueAtTime(vol, Howler.ctx.currentTime);
        }

        // Loop through and change volume for all HTML5 audio nodes.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and change the volumes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node) {
                sound._node.volume = sound._volume * vol;
              }
            }
          }
        }

        return self;
      }

      return self._volume;
    },

    /**
     * Handle muting and unmuting globally.
     * @param  {Boolean} muted Is muted or not.
     */
    mute: function(muted) {
      var self = this || Howler;

      // If we don't have an AudioContext created yet, run the setup.
      if (!self.ctx) {
        setupAudioContext();
      }

      self._muted = muted;

      // With Web Audio, we just need to mute the master gain.
      if (self.usingWebAudio) {
        self.masterGain.gain.setValueAtTime(muted ? 0 : self._volume, Howler.ctx.currentTime);
      }

      // Loop through and mute all HTML5 Audio nodes.
      for (var i=0; i<self._howls.length; i++) {
        if (!self._howls[i]._webAudio) {
          // Get all of the sounds in this Howl group.
          var ids = self._howls[i]._getSoundIds();

          // Loop through all sounds and mark the audio node as muted.
          for (var j=0; j<ids.length; j++) {
            var sound = self._howls[i]._soundById(ids[j]);

            if (sound && sound._node) {
              sound._node.muted = (muted) ? true : sound._muted;
            }
          }
        }
      }

      return self;
    },

    /**
     * Handle stopping all sounds globally.
     */
    stop: function() {
      var self = this || Howler;

      // Loop through all Howls and stop them.
      for (var i=0; i<self._howls.length; i++) {
        self._howls[i].stop();
      }

      return self;
    },

    /**
     * Unload and destroy all currently loaded Howl objects.
     * @return {Howler}
     */
    unload: function() {
      var self = this || Howler;

      for (var i=self._howls.length-1; i>=0; i--) {
        self._howls[i].unload();
      }

      // Create a new AudioContext to make sure it is fully reset.
      if (self.usingWebAudio && self.ctx && typeof self.ctx.close !== 'undefined') {
        self.ctx.close();
        self.ctx = null;
        setupAudioContext();
      }

      return self;
    },

    /**
     * Check for codec support of specific extension.
     * @param  {String} ext Audio file extention.
     * @return {Boolean}
     */
    codecs: function(ext) {
      return (this || Howler)._codecs[ext.replace(/^x-/, '')];
    },

    /**
     * Setup various state values for global tracking.
     * @return {Howler}
     */
    _setup: function() {
      var self = this || Howler;

      // Keeps track of the suspend/resume state of the AudioContext.
      self.state = self.ctx ? self.ctx.state || 'suspended' : 'suspended';

      // Automatically begin the 30-second suspend process
      self._autoSuspend();

      // Check if audio is available.
      if (!self.usingWebAudio) {
        // No audio is available on this system if noAudio is set to true.
        if (typeof Audio !== 'undefined') {
          try {
            var test = new Audio();

            // Check if the canplaythrough event is available.
            if (typeof test.oncanplaythrough === 'undefined') {
              self._canPlayEvent = 'canplay';
            }
          } catch(e) {
            self.noAudio = true;
          }
        } else {
          self.noAudio = true;
        }
      }

      // Test to make sure audio isn't disabled in Internet Explorer.
      try {
        var test = new Audio();
        if (test.muted) {
          self.noAudio = true;
        }
      } catch (e) {}

      // Check for supported codecs.
      if (!self.noAudio) {
        self._setupCodecs();
      }

      return self;
    },

    /**
     * Check for browser support for various codecs and cache the results.
     * @return {Howler}
     */
    _setupCodecs: function() {
      var self = this || Howler;
      var audioTest = null;

      // Must wrap in a try/catch because IE11 in server mode throws an error.
      try {
        audioTest = (typeof Audio !== 'undefined') ? new Audio() : null;
      } catch (err) {
        return self;
      }

      if (!audioTest || typeof audioTest.canPlayType !== 'function') {
        return self;
      }

      var mpegTest = audioTest.canPlayType('audio/mpeg;').replace(/^no$/, '');

      // Opera version <33 has mixed MP3 support, so we need to check for and block it.
      var ua = self._navigator ? self._navigator.userAgent : '';
      var checkOpera = ua.match(/OPR\/([0-6].)/g);
      var isOldOpera = (checkOpera && parseInt(checkOpera[0].split('/')[1], 10) < 33);
      var checkSafari = ua.indexOf('Safari') !== -1 && ua.indexOf('Chrome') === -1;
      var safariVersion = ua.match(/Version\/(.*?) /);
      var isOldSafari = (checkSafari && safariVersion && parseInt(safariVersion[1], 10) < 15);

      self._codecs = {
        mp3: !!(!isOldOpera && (mpegTest || audioTest.canPlayType('audio/mp3;').replace(/^no$/, ''))),
        mpeg: !!mpegTest,
        opus: !!audioTest.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
        ogg: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        oga: !!audioTest.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
        wav: !!(audioTest.canPlayType('audio/wav; codecs="1"') || audioTest.canPlayType('audio/wav')).replace(/^no$/, ''),
        aac: !!audioTest.canPlayType('audio/aac;').replace(/^no$/, ''),
        caf: !!audioTest.canPlayType('audio/x-caf;').replace(/^no$/, ''),
        m4a: !!(audioTest.canPlayType('audio/x-m4a;') || audioTest.canPlayType('audio/m4a;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        m4b: !!(audioTest.canPlayType('audio/x-m4b;') || audioTest.canPlayType('audio/m4b;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        mp4: !!(audioTest.canPlayType('audio/x-mp4;') || audioTest.canPlayType('audio/mp4;') || audioTest.canPlayType('audio/aac;')).replace(/^no$/, ''),
        weba: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')),
        webm: !!(!isOldSafari && audioTest.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, '')),
        dolby: !!audioTest.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
        flac: !!(audioTest.canPlayType('audio/x-flac;') || audioTest.canPlayType('audio/flac;')).replace(/^no$/, '')
      };

      return self;
    },

    /**
     * Some browsers/devices will only allow audio to be played after a user interaction.
     * Attempt to automatically unlock audio on the first user interaction.
     * Concept from: http://paulbakaus.com/tutorials/html5/web-audio-on-ios/
     * @return {Howler}
     */
    _unlockAudio: function() {
      var self = this || Howler;

      // Only run this if Web Audio is supported and it hasn't already been unlocked.
      if (self._audioUnlocked || !self.ctx) {
        return;
      }

      self._audioUnlocked = false;
      self.autoUnlock = false;

      // Some mobile devices/platforms have distortion issues when opening/closing tabs and/or web views.
      // Bugs in the browser (especially Mobile Safari) can cause the sampleRate to change from 44100 to 48000.
      // By calling Howler.unload(), we create a new AudioContext with the correct sampleRate.
      if (!self._mobileUnloaded && self.ctx.sampleRate !== 44100) {
        self._mobileUnloaded = true;
        self.unload();
      }

      // Scratch buffer for enabling iOS to dispose of web audio buffers correctly, as per:
      // http://stackoverflow.com/questions/24119684
      self._scratchBuffer = self.ctx.createBuffer(1, 1, 22050);

      // Call this method on touch start to create and play a buffer,
      // then check if the audio actually played to determine if
      // audio has now been unlocked on iOS, Android, etc.
      var unlock = function(e) {
        // Create a pool of unlocked HTML5 Audio objects that can
        // be used for playing sounds without user interaction. HTML5
        // Audio objects must be individually unlocked, as opposed
        // to the WebAudio API which only needs a single activation.
        // This must occur before WebAudio setup or the source.onended
        // event will not fire.
        while (self._html5AudioPool.length < self.html5PoolSize) {
          try {
            var audioNode = new Audio();

            // Mark this Audio object as unlocked to ensure it can get returned
            // to the unlocked pool when released.
            audioNode._unlocked = true;

            // Add the audio node to the pool.
            self._releaseHtml5Audio(audioNode);
          } catch (e) {
            self.noAudio = true;
            break;
          }
        }

        // Loop through any assigned audio nodes and unlock them.
        for (var i=0; i<self._howls.length; i++) {
          if (!self._howls[i]._webAudio) {
            // Get all of the sounds in this Howl group.
            var ids = self._howls[i]._getSoundIds();

            // Loop through all sounds and unlock the audio nodes.
            for (var j=0; j<ids.length; j++) {
              var sound = self._howls[i]._soundById(ids[j]);

              if (sound && sound._node && !sound._node._unlocked) {
                sound._node._unlocked = true;
                sound._node.load();
              }
            }
          }
        }

        // Fix Android can not play in suspend state.
        self._autoResume();

        // Create an empty buffer.
        var source = self.ctx.createBufferSource();
        source.buffer = self._scratchBuffer;
        source.connect(self.ctx.destination);

        // Play the empty buffer.
        if (typeof source.start === 'undefined') {
          source.noteOn(0);
        } else {
          source.start(0);
        }

        // Calling resume() on a stack initiated by user gesture is what actually unlocks the audio on Android Chrome >= 55.
        if (typeof self.ctx.resume === 'function') {
          self.ctx.resume();
        }

        // Setup a timeout to check that we are unlocked on the next event loop.
        source.onended = function() {
          source.disconnect(0);

          // Update the unlocked state and prevent this check from happening again.
          self._audioUnlocked = true;

          // Remove the touch start listener.
          document.removeEventListener('touchstart', unlock, true);
          document.removeEventListener('touchend', unlock, true);
          document.removeEventListener('click', unlock, true);
          document.removeEventListener('keydown', unlock, true);

          // Let all sounds know that audio has been unlocked.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('unlock');
          }
        };
      };

      // Setup a touch start listener to attempt an unlock in.
      document.addEventListener('touchstart', unlock, true);
      document.addEventListener('touchend', unlock, true);
      document.addEventListener('click', unlock, true);
      document.addEventListener('keydown', unlock, true);

      return self;
    },

    /**
     * Get an unlocked HTML5 Audio object from the pool. If none are left,
     * return a new Audio object and throw a warning.
     * @return {Audio} HTML5 Audio object.
     */
    _obtainHtml5Audio: function() {
      var self = this || Howler;

      // Return the next object from the pool if one exists.
      if (self._html5AudioPool.length) {
        return self._html5AudioPool.pop();
      }

      //.Check if the audio is locked and throw a warning.
      var testPlay = new Audio().play();
      if (testPlay && typeof Promise !== 'undefined' && (testPlay instanceof Promise || typeof testPlay.then === 'function')) {
        testPlay.catch(function() {
          console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
        });
      }

      return new Audio();
    },

    /**
     * Return an activated HTML5 Audio object to the pool.
     * @return {Howler}
     */
    _releaseHtml5Audio: function(audio) {
      var self = this || Howler;

      // Don't add audio to the pool if we don't know if it has been unlocked.
      if (audio._unlocked) {
        self._html5AudioPool.push(audio);
      }

      return self;
    },

    /**
     * Automatically suspend the Web Audio AudioContext after no sound has played for 30 seconds.
     * This saves processing/energy and fixes various browser-specific bugs with audio getting stuck.
     * @return {Howler}
     */
    _autoSuspend: function() {
      var self = this;

      if (!self.autoSuspend || !self.ctx || typeof self.ctx.suspend === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      // Check if any sounds are playing.
      for (var i=0; i<self._howls.length; i++) {
        if (self._howls[i]._webAudio) {
          for (var j=0; j<self._howls[i]._sounds.length; j++) {
            if (!self._howls[i]._sounds[j]._paused) {
              return self;
            }
          }
        }
      }

      if (self._suspendTimer) {
        clearTimeout(self._suspendTimer);
      }

      // If no sound has played after 30 seconds, suspend the context.
      self._suspendTimer = setTimeout(function() {
        if (!self.autoSuspend) {
          return;
        }

        self._suspendTimer = null;
        self.state = 'suspending';

        // Handle updating the state of the audio context after suspending.
        var handleSuspension = function() {
          self.state = 'suspended';

          if (self._resumeAfterSuspend) {
            delete self._resumeAfterSuspend;
            self._autoResume();
          }
        };

        // Either the state gets suspended or it is interrupted.
        // Either way, we need to update the state to suspended.
        self.ctx.suspend().then(handleSuspension, handleSuspension);
      }, 30000);

      return self;
    },

    /**
     * Automatically resume the Web Audio AudioContext when a new sound is played.
     * @return {Howler}
     */
    _autoResume: function() {
      var self = this;

      if (!self.ctx || typeof self.ctx.resume === 'undefined' || !Howler.usingWebAudio) {
        return;
      }

      if (self.state === 'running' && self.ctx.state !== 'interrupted' && self._suspendTimer) {
        clearTimeout(self._suspendTimer);
        self._suspendTimer = null;
      } else if (self.state === 'suspended' || self.state === 'running' && self.ctx.state === 'interrupted') {
        self.ctx.resume().then(function() {
          self.state = 'running';

          // Emit to all Howls that the audio has resumed.
          for (var i=0; i<self._howls.length; i++) {
            self._howls[i]._emit('resume');
          }
        });

        if (self._suspendTimer) {
          clearTimeout(self._suspendTimer);
          self._suspendTimer = null;
        }
      } else if (self.state === 'suspending') {
        self._resumeAfterSuspend = true;
      }

      return self;
    }
  };

  // Setup the global audio controller.
  var Howler = new HowlerGlobal();

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Create an audio group controller.
   * @param {Object} o Passed in properties for this group.
   */
  var Howl = function(o) {
    var self = this;

    // Throw an error if no source is provided.
    if (!o.src || o.src.length === 0) {
      console.error('An array of source files must be passed with any new Howl.');
      return;
    }

    self.init(o);
  };
  Howl.prototype = {
    /**
     * Initialize a new Howl group object.
     * @param  {Object} o Passed in properties for this group.
     * @return {Howl}
     */
    init: function(o) {
      var self = this;

      // If we don't have an AudioContext created yet, run the setup.
      if (!Howler.ctx) {
        setupAudioContext();
      }

      // Setup user-defined default properties.
      self._autoplay = o.autoplay || false;
      self._format = (typeof o.format !== 'string') ? o.format : [o.format];
      self._html5 = o.html5 || false;
      self._muted = o.mute || false;
      self._loop = o.loop || false;
      self._pool = o.pool || 5;
      self._preload = (typeof o.preload === 'boolean' || o.preload === 'metadata') ? o.preload : true;
      self._rate = o.rate || 1;
      self._sprite = o.sprite || {};
      self._src = (typeof o.src !== 'string') ? o.src : [o.src];
      self._volume = o.volume !== undefined ? o.volume : 1;
      self._xhr = {
        method: o.xhr && o.xhr.method ? o.xhr.method : 'GET',
        headers: o.xhr && o.xhr.headers ? o.xhr.headers : null,
        withCredentials: o.xhr && o.xhr.withCredentials ? o.xhr.withCredentials : false,
      };

      // Setup all other default properties.
      self._duration = 0;
      self._state = 'unloaded';
      self._sounds = [];
      self._endTimers = {};
      self._queue = [];
      self._playLock = false;

      // Setup event listeners.
      self._onend = o.onend ? [{fn: o.onend}] : [];
      self._onfade = o.onfade ? [{fn: o.onfade}] : [];
      self._onload = o.onload ? [{fn: o.onload}] : [];
      self._onloaderror = o.onloaderror ? [{fn: o.onloaderror}] : [];
      self._onplayerror = o.onplayerror ? [{fn: o.onplayerror}] : [];
      self._onpause = o.onpause ? [{fn: o.onpause}] : [];
      self._onplay = o.onplay ? [{fn: o.onplay}] : [];
      self._onstop = o.onstop ? [{fn: o.onstop}] : [];
      self._onmute = o.onmute ? [{fn: o.onmute}] : [];
      self._onvolume = o.onvolume ? [{fn: o.onvolume}] : [];
      self._onrate = o.onrate ? [{fn: o.onrate}] : [];
      self._onseek = o.onseek ? [{fn: o.onseek}] : [];
      self._onunlock = o.onunlock ? [{fn: o.onunlock}] : [];
      self._onresume = [];

      // Web Audio or HTML5 Audio?
      self._webAudio = Howler.usingWebAudio && !self._html5;

      // Automatically try to enable audio.
      if (typeof Howler.ctx !== 'undefined' && Howler.ctx && Howler.autoUnlock) {
        Howler._unlockAudio();
      }

      // Keep track of this Howl group in the global controller.
      Howler._howls.push(self);

      // If they selected autoplay, add a play event to the load queue.
      if (self._autoplay) {
        self._queue.push({
          event: 'play',
          action: function() {
            self.play();
          }
        });
      }

      // Load the source file unless otherwise specified.
      if (self._preload && self._preload !== 'none') {
        self.load();
      }

      return self;
    },

    /**
     * Load the audio file.
     * @return {Howler}
     */
    load: function() {
      var self = this;
      var url = null;

      // If no audio is available, quit immediately.
      if (Howler.noAudio) {
        self._emit('loaderror', null, 'No audio support.');
        return;
      }

      // Make sure our source is in an array.
      if (typeof self._src === 'string') {
        self._src = [self._src];
      }

      // Loop through the sources and pick the first one that is compatible.
      for (var i=0; i<self._src.length; i++) {
        var ext, str;

        if (self._format && self._format[i]) {
          // If an extension was specified, use that instead.
          ext = self._format[i];
        } else {
          // Make sure the source is a string.
          str = self._src[i];
          if (typeof str !== 'string') {
            self._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
            continue;
          }

          // Extract the file extension from the URL or base64 data URI.
          ext = /^data:audio\/([^;,]+);/i.exec(str);
          if (!ext) {
            ext = /\.([^.]+)$/.exec(str.split('?', 1)[0]);
          }

          if (ext) {
            ext = ext[1].toLowerCase();
          }
        }

        // Log a warning if no extension was found.
        if (!ext) {
          console.warn('No file extension was found. Consider using the "format" property or specify an extension.');
        }

        // Check if this extension is available.
        if (ext && Howler.codecs(ext)) {
          url = self._src[i];
          break;
        }
      }

      if (!url) {
        self._emit('loaderror', null, 'No codec support for selected audio sources.');
        return;
      }

      self._src = url;
      self._state = 'loading';

      // If the hosting page is HTTPS and the source isn't,
      // drop down to HTML5 Audio to avoid Mixed Content errors.
      if (window.location.protocol === 'https:' && url.slice(0, 5) === 'http:') {
        self._html5 = true;
        self._webAudio = false;
      }

      // Create a new sound object and add it to the pool.
      new Sound(self);

      // Load and decode the audio data for playback.
      if (self._webAudio) {
        loadBuffer(self);
      }

      return self;
    },

    /**
     * Play a sound or resume previous playback.
     * @param  {String/Number} sprite   Sprite name for sprite playback or sound id to continue previous.
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Number}          Sound ID.
     */
    play: function(sprite, internal) {
      var self = this;
      var id = null;

      // Determine if a sprite, sound id or nothing was passed
      if (typeof sprite === 'number') {
        id = sprite;
        sprite = null;
      } else if (typeof sprite === 'string' && self._state === 'loaded' && !self._sprite[sprite]) {
        // If the passed sprite doesn't exist, do nothing.
        return null;
      } else if (typeof sprite === 'undefined') {
        // Use the default sound sprite (plays the full audio length).
        sprite = '__default';

        // Check if there is a single paused sound that isn't ended.
        // If there is, play that sound. If not, continue as usual.
        if (!self._playLock) {
          var num = 0;
          for (var i=0; i<self._sounds.length; i++) {
            if (self._sounds[i]._paused && !self._sounds[i]._ended) {
              num++;
              id = self._sounds[i]._id;
            }
          }

          if (num === 1) {
            sprite = null;
          } else {
            id = null;
          }
        }
      }

      // Get the selected node, or get one from the pool.
      var sound = id ? self._soundById(id) : self._inactiveSound();

      // If the sound doesn't exist, do nothing.
      if (!sound) {
        return null;
      }

      // Select the sprite definition.
      if (id && !sprite) {
        sprite = sound._sprite || '__default';
      }

      // If the sound hasn't loaded, we must wait to get the audio's duration.
      // We also need to wait to make sure we don't run into race conditions with
      // the order of function calls.
      if (self._state !== 'loaded') {
        // Set the sprite value on this sound.
        sound._sprite = sprite;

        // Mark this sound as not ended in case another sound is played before this one loads.
        sound._ended = false;

        // Add the sound to the queue to be played on load.
        var soundId = sound._id;
        self._queue.push({
          event: 'play',
          action: function() {
            self.play(soundId);
          }
        });

        return soundId;
      }

      // Don't play the sound if an id was passed and it is already playing.
      if (id && !sound._paused) {
        // Trigger the play event, in order to keep iterating through queue.
        if (!internal) {
          self._loadQueue('play');
        }

        return sound._id;
      }

      // Make sure the AudioContext isn't suspended, and resume it if it is.
      if (self._webAudio) {
        Howler._autoResume();
      }

      // Determine how long to play for and where to start playing.
      var seek = Math.max(0, sound._seek > 0 ? sound._seek : self._sprite[sprite][0] / 1000);
      var duration = Math.max(0, ((self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000) - seek);
      var timeout = (duration * 1000) / Math.abs(sound._rate);
      var start = self._sprite[sprite][0] / 1000;
      var stop = (self._sprite[sprite][0] + self._sprite[sprite][1]) / 1000;
      sound._sprite = sprite;

      // Mark the sound as ended instantly so that this async playback
      // doesn't get grabbed by another call to play while this one waits to start.
      sound._ended = false;

      // Update the parameters of the sound.
      var setParams = function() {
        sound._paused = false;
        sound._seek = seek;
        sound._start = start;
        sound._stop = stop;
        sound._loop = !!(sound._loop || self._sprite[sprite][2]);
      };

      // End the sound instantly if seek is at the end.
      if (seek >= stop) {
        self._ended(sound);
        return;
      }

      // Begin the actual playback.
      var node = sound._node;
      if (self._webAudio) {
        // Fire this when the sound is ready to play to begin Web Audio playback.
        var playWebAudio = function() {
          self._playLock = false;
          setParams();
          self._refreshBuffer(sound);

          // Setup the playback params.
          var vol = (sound._muted || self._muted) ? 0 : sound._volume;
          node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
          sound._playStart = Howler.ctx.currentTime;

          // Play the sound using the supported method.
          if (typeof node.bufferSource.start === 'undefined') {
            sound._loop ? node.bufferSource.noteGrainOn(0, seek, 86400) : node.bufferSource.noteGrainOn(0, seek, duration);
          } else {
            sound._loop ? node.bufferSource.start(0, seek, 86400) : node.bufferSource.start(0, seek, duration);
          }

          // Start a new timer if none is present.
          if (timeout !== Infinity) {
            self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
          }

          if (!internal) {
            setTimeout(function() {
              self._emit('play', sound._id);
              self._loadQueue();
            }, 0);
          }
        };

        if (Howler.state === 'running' && Howler.ctx.state !== 'interrupted') {
          playWebAudio();
        } else {
          self._playLock = true;

          // Wait for the audio context to resume before playing.
          self.once('resume', playWebAudio);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      } else {
        // Fire this when the sound is ready to play to begin HTML5 Audio playback.
        var playHtml5 = function() {
          node.currentTime = seek;
          node.muted = sound._muted || self._muted || Howler._muted || node.muted;
          node.volume = sound._volume * Howler.volume();
          node.playbackRate = sound._rate;

          // Some browsers will throw an error if this is called without user interaction.
          try {
            var play = node.play();

            // Support older browsers that don't support promises, and thus don't have this issue.
            if (play && typeof Promise !== 'undefined' && (play instanceof Promise || typeof play.then === 'function')) {
              // Implements a lock to prevent DOMException: The play() request was interrupted by a call to pause().
              self._playLock = true;

              // Set param values immediately.
              setParams();

              // Releases the lock and executes queued actions.
              play
                .then(function() {
                  self._playLock = false;
                  node._unlocked = true;
                  if (!internal) {
                    self._emit('play', sound._id);
                  } else {
                    self._loadQueue();
                  }
                })
                .catch(function() {
                  self._playLock = false;
                  self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                    'on mobile devices and Chrome where playback was not within a user interaction.');

                  // Reset the ended and paused values.
                  sound._ended = true;
                  sound._paused = true;
                });
            } else if (!internal) {
              self._playLock = false;
              setParams();
              self._emit('play', sound._id);
            }

            // Setting rate before playing won't work in IE, so we set it again here.
            node.playbackRate = sound._rate;

            // If the node is still paused, then we can assume there was a playback issue.
            if (node.paused) {
              self._emit('playerror', sound._id, 'Playback was unable to start. This is most commonly an issue ' +
                'on mobile devices and Chrome where playback was not within a user interaction.');
              return;
            }

            // Setup the end timer on sprites or listen for the ended event.
            if (sprite !== '__default' || sound._loop) {
              self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
            } else {
              self._endTimers[sound._id] = function() {
                // Fire ended on this audio node.
                self._ended(sound);

                // Clear this listener.
                node.removeEventListener('ended', self._endTimers[sound._id], false);
              };
              node.addEventListener('ended', self._endTimers[sound._id], false);
            }
          } catch (err) {
            self._emit('playerror', sound._id, err);
          }
        };

        // If this is streaming audio, make sure the src is set and load again.
        if (node.src === 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA') {
          node.src = self._src;
          node.load();
        }

        // Play immediately if ready, or wait for the 'canplaythrough'e vent.
        var loadedNoReadyState = (window && window.ejecta) || (!node.readyState && Howler._navigator.isCocoonJS);
        if (node.readyState >= 3 || loadedNoReadyState) {
          playHtml5();
        } else {
          self._playLock = true;
          self._state = 'loading';

          var listener = function() {
            self._state = 'loaded';
            
            // Begin playback.
            playHtml5();

            // Clear this listener.
            node.removeEventListener(Howler._canPlayEvent, listener, false);
          };
          node.addEventListener(Howler._canPlayEvent, listener, false);

          // Cancel the end timer.
          self._clearTimer(sound._id);
        }
      }

      return sound._id;
    },

    /**
     * Pause playback and save current position.
     * @param  {Number} id The sound ID (empty to pause all in group).
     * @return {Howl}
     */
    pause: function(id) {
      var self = this;

      // If the sound hasn't loaded or a play() promise is pending, add it to the load queue to pause when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'pause',
          action: function() {
            self.pause(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be paused.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound && !sound._paused) {
          // Reset the seek position.
          sound._seek = self.seek(ids[i]);
          sound._rateSeek = 0;
          sound._paused = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound has been created.
              if (!sound._node.bufferSource) {
                continue;
              }

              if (typeof sound._node.bufferSource.stop === 'undefined') {
                sound._node.bufferSource.noteOff(0);
              } else {
                sound._node.bufferSource.stop(0);
              }

              // Clean up the buffer source.
              self._cleanBuffer(sound._node);
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.pause();
            }
          }
        }

        // Fire the pause event, unless `true` is passed as the 2nd argument.
        if (!arguments[1]) {
          self._emit('pause', sound ? sound._id : null);
        }
      }

      return self;
    },

    /**
     * Stop playback and reset to start.
     * @param  {Number} id The sound ID (empty to stop all in group).
     * @param  {Boolean} internal Internal Use: true prevents event firing.
     * @return {Howl}
     */
    stop: function(id, internal) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to stop when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'stop',
          action: function() {
            self.stop(id);
          }
        });

        return self;
      }

      // If no id is passed, get all ID's to be stopped.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Clear the end timer.
        self._clearTimer(ids[i]);

        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          // Reset the seek position.
          sound._seek = sound._start || 0;
          sound._rateSeek = 0;
          sound._paused = true;
          sound._ended = true;

          // Stop currently running fades.
          self._stopFade(ids[i]);

          if (sound._node) {
            if (self._webAudio) {
              // Make sure the sound's AudioBufferSourceNode has been created.
              if (sound._node.bufferSource) {
                if (typeof sound._node.bufferSource.stop === 'undefined') {
                  sound._node.bufferSource.noteOff(0);
                } else {
                  sound._node.bufferSource.stop(0);
                }

                // Clean up the buffer source.
                self._cleanBuffer(sound._node);
              }
            } else if (!isNaN(sound._node.duration) || sound._node.duration === Infinity) {
              sound._node.currentTime = sound._start || 0;
              sound._node.pause();

              // If this is a live stream, stop download once the audio is stopped.
              if (sound._node.duration === Infinity) {
                self._clearSound(sound._node);
              }
            }
          }

          if (!internal) {
            self._emit('stop', sound._id);
          }
        }
      }

      return self;
    },

    /**
     * Mute/unmute a single sound or all sounds in this Howl group.
     * @param  {Boolean} muted Set to true to mute and false to unmute.
     * @param  {Number} id    The sound ID to update (omit to mute/unmute all).
     * @return {Howl}
     */
    mute: function(muted, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to mute when capable.
      if (self._state !== 'loaded'|| self._playLock) {
        self._queue.push({
          event: 'mute',
          action: function() {
            self.mute(muted, id);
          }
        });

        return self;
      }

      // If applying mute/unmute to all sounds, update the group's value.
      if (typeof id === 'undefined') {
        if (typeof muted === 'boolean') {
          self._muted = muted;
        } else {
          return self._muted;
        }
      }

      // If no id is passed, get all ID's to be muted.
      var ids = self._getSoundIds(id);

      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        if (sound) {
          sound._muted = muted;

          // Cancel active fade and set the volume to the end value.
          if (sound._interval) {
            self._stopFade(sound._id);
          }

          if (self._webAudio && sound._node) {
            sound._node.gain.setValueAtTime(muted ? 0 : sound._volume, Howler.ctx.currentTime);
          } else if (sound._node) {
            sound._node.muted = Howler._muted ? true : muted;
          }

          self._emit('mute', sound._id);
        }
      }

      return self;
    },

    /**
     * Get/set the volume of this sound or of the Howl group. This method can optionally take 0, 1 or 2 arguments.
     *   volume() -> Returns the group's volume value.
     *   volume(id) -> Returns the sound id's current volume.
     *   volume(vol) -> Sets the volume of all sounds in this Howl group.
     *   volume(vol, id) -> Sets the volume of passed sound id.
     * @return {Howl/Number} Returns self or current volume.
     */
    volume: function() {
      var self = this;
      var args = arguments;
      var vol, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // Return the value of the groups' volume.
        return self._volume;
      } else if (args.length === 1 || args.length === 2 && typeof args[1] === 'undefined') {
        // First check if this is an ID, and if not, assume it is a new volume.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          vol = parseFloat(args[0]);
        }
      } else if (args.length >= 2) {
        vol = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the volume or return the current volume.
      var sound;
      if (typeof vol !== 'undefined' && vol >= 0 && vol <= 1) {
        // If the sound hasn't loaded, add it to the load queue to change volume when capable.
        if (self._state !== 'loaded'|| self._playLock) {
          self._queue.push({
            event: 'volume',
            action: function() {
              self.volume.apply(self, args);
            }
          });

          return self;
        }

        // Set the group volume.
        if (typeof id === 'undefined') {
          self._volume = vol;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            sound._volume = vol;

            // Stop currently running fades.
            if (!args[2]) {
              self._stopFade(id[i]);
            }

            if (self._webAudio && sound._node && !sound._muted) {
              sound._node.gain.setValueAtTime(vol, Howler.ctx.currentTime);
            } else if (sound._node && !sound._muted) {
              sound._node.volume = vol * Howler.volume();
            }

            self._emit('volume', sound._id);
          }
        }
      } else {
        sound = id ? self._soundById(id) : self._sounds[0];
        return sound ? sound._volume : 0;
      }

      return self;
    },

    /**
     * Fade a currently playing sound between two volumes (if no id is passed, all sounds will fade).
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id (omit to fade all sounds).
     * @return {Howl}
     */
    fade: function(from, to, len, id) {
      var self = this;

      // If the sound hasn't loaded, add it to the load queue to fade when capable.
      if (self._state !== 'loaded' || self._playLock) {
        self._queue.push({
          event: 'fade',
          action: function() {
            self.fade(from, to, len, id);
          }
        });

        return self;
      }

      // Make sure the to/from/len values are numbers.
      from = Math.min(Math.max(0, parseFloat(from)), 1);
      to = Math.min(Math.max(0, parseFloat(to)), 1);
      len = parseFloat(len);

      // Set the volume to the start position.
      self.volume(from, id);

      // Fade the volume of one or all sounds.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        // Get the sound.
        var sound = self._soundById(ids[i]);

        // Create a linear fade or fall back to timeouts with HTML5 Audio.
        if (sound) {
          // Stop the previous fade if no sprite is being used (otherwise, volume handles this).
          if (!id) {
            self._stopFade(ids[i]);
          }

          // If we are using Web Audio, let the native methods do the actual fade.
          if (self._webAudio && !sound._muted) {
            var currentTime = Howler.ctx.currentTime;
            var end = currentTime + (len / 1000);
            sound._volume = from;
            sound._node.gain.setValueAtTime(from, currentTime);
            sound._node.gain.linearRampToValueAtTime(to, end);
          }

          self._startFadeInterval(sound, from, to, len, ids[i], typeof id === 'undefined');
        }
      }

      return self;
    },

    /**
     * Starts the internal interval to fade a sound.
     * @param  {Object} sound Reference to sound to fade.
     * @param  {Number} from The value to fade from (0.0 to 1.0).
     * @param  {Number} to   The volume to fade to (0.0 to 1.0).
     * @param  {Number} len  Time in milliseconds to fade.
     * @param  {Number} id   The sound id to fade.
     * @param  {Boolean} isGroup   If true, set the volume on the group.
     */
    _startFadeInterval: function(sound, from, to, len, id, isGroup) {
      var self = this;
      var vol = from;
      var diff = to - from;
      var steps = Math.abs(diff / 0.01);
      var stepLen = Math.max(4, (steps > 0) ? len / steps : len);
      var lastTick = Date.now();

      // Store the value being faded to.
      sound._fadeTo = to;

      // Update the volume value on each interval tick.
      sound._interval = setInterval(function() {
        // Update the volume based on the time since the last tick.
        var tick = (Date.now() - lastTick) / len;
        lastTick = Date.now();
        vol += diff * tick;

        // Round to within 2 decimal points.
        vol = Math.round(vol * 100) / 100;

        // Make sure the volume is in the right bounds.
        if (diff < 0) {
          vol = Math.max(to, vol);
        } else {
          vol = Math.min(to, vol);
        }

        // Change the volume.
        if (self._webAudio) {
          sound._volume = vol;
        } else {
          self.volume(vol, sound._id, true);
        }

        // Set the group's volume.
        if (isGroup) {
          self._volume = vol;
        }

        // When the fade is complete, stop it and fire event.
        if ((to < from && vol <= to) || (to > from && vol >= to)) {
          clearInterval(sound._interval);
          sound._interval = null;
          sound._fadeTo = null;
          self.volume(to, sound._id);
          self._emit('fade', sound._id);
        }
      }, stepLen);
    },

    /**
     * Internal method that stops the currently playing fade when
     * a new fade starts, volume is changed or the sound is stopped.
     * @param  {Number} id The sound id.
     * @return {Howl}
     */
    _stopFade: function(id) {
      var self = this;
      var sound = self._soundById(id);

      if (sound && sound._interval) {
        if (self._webAudio) {
          sound._node.gain.cancelScheduledValues(Howler.ctx.currentTime);
        }

        clearInterval(sound._interval);
        sound._interval = null;
        self.volume(sound._fadeTo, id);
        sound._fadeTo = null;
        self._emit('fade', id);
      }

      return self;
    },

    /**
     * Get/set the loop parameter on a sound. This method can optionally take 0, 1 or 2 arguments.
     *   loop() -> Returns the group's loop value.
     *   loop(id) -> Returns the sound id's loop value.
     *   loop(loop) -> Sets the loop value for all sounds in this Howl group.
     *   loop(loop, id) -> Sets the loop value of passed sound id.
     * @return {Howl/Boolean} Returns self or current loop value.
     */
    loop: function() {
      var self = this;
      var args = arguments;
      var loop, id, sound;

      // Determine the values for loop and id.
      if (args.length === 0) {
        // Return the grou's loop value.
        return self._loop;
      } else if (args.length === 1) {
        if (typeof args[0] === 'boolean') {
          loop = args[0];
          self._loop = loop;
        } else {
          // Return this sound's loop value.
          sound = self._soundById(parseInt(args[0], 10));
          return sound ? sound._loop : false;
        }
      } else if (args.length === 2) {
        loop = args[0];
        id = parseInt(args[1], 10);
      }

      // If no id is passed, get all ID's to be looped.
      var ids = self._getSoundIds(id);
      for (var i=0; i<ids.length; i++) {
        sound = self._soundById(ids[i]);

        if (sound) {
          sound._loop = loop;
          if (self._webAudio && sound._node && sound._node.bufferSource) {
            sound._node.bufferSource.loop = loop;
            if (loop) {
              sound._node.bufferSource.loopStart = sound._start || 0;
              sound._node.bufferSource.loopEnd = sound._stop;

              // If playing, restart playback to ensure looping updates.
              if (self.playing(ids[i])) {
                self.pause(ids[i], true);
                self.play(ids[i], true);
              }
            }
          }
        }
      }

      return self;
    },

    /**
     * Get/set the playback rate of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   rate() -> Returns the first sound node's current playback rate.
     *   rate(id) -> Returns the sound id's current playback rate.
     *   rate(rate) -> Sets the playback rate of all sounds in this Howl group.
     *   rate(rate, id) -> Sets the playback rate of passed sound id.
     * @return {Howl/Number} Returns self or the current playback rate.
     */
    rate: function() {
      var self = this;
      var args = arguments;
      var rate, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current rate of the first node.
        id = self._sounds[0]._id;
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new rate value.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else {
          rate = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        rate = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // Update the playback rate or return the current value.
      var sound;
      if (typeof rate === 'number') {
        // If the sound hasn't loaded, add it to the load queue to change playback rate when capable.
        if (self._state !== 'loaded' || self._playLock) {
          self._queue.push({
            event: 'rate',
            action: function() {
              self.rate.apply(self, args);
            }
          });

          return self;
        }

        // Set the group rate.
        if (typeof id === 'undefined') {
          self._rate = rate;
        }

        // Update one or all volumes.
        id = self._getSoundIds(id);
        for (var i=0; i<id.length; i++) {
          // Get the sound.
          sound = self._soundById(id[i]);

          if (sound) {
            // Keep track of our position when the rate changed and update the playback
            // start position so we can properly adjust the seek position for time elapsed.
            if (self.playing(id[i])) {
              sound._rateSeek = self.seek(id[i]);
              sound._playStart = self._webAudio ? Howler.ctx.currentTime : sound._playStart;
            }
            sound._rate = rate;

            // Change the playback rate.
            if (self._webAudio && sound._node && sound._node.bufferSource) {
              sound._node.bufferSource.playbackRate.setValueAtTime(rate, Howler.ctx.currentTime);
            } else if (sound._node) {
              sound._node.playbackRate = rate;
            }

            // Reset the timers.
            var seek = self.seek(id[i]);
            var duration = ((self._sprite[sound._sprite][0] + self._sprite[sound._sprite][1]) / 1000) - seek;
            var timeout = (duration * 1000) / Math.abs(sound._rate);

            // Start a new end timer if sound is already playing.
            if (self._endTimers[id[i]] || !sound._paused) {
              self._clearTimer(id[i]);
              self._endTimers[id[i]] = setTimeout(self._ended.bind(self, sound), timeout);
            }

            self._emit('rate', sound._id);
          }
        }
      } else {
        sound = self._soundById(id);
        return sound ? sound._rate : self._rate;
      }

      return self;
    },

    /**
     * Get/set the seek position of a sound. This method can optionally take 0, 1 or 2 arguments.
     *   seek() -> Returns the first sound node's current seek position.
     *   seek(id) -> Returns the sound id's current seek position.
     *   seek(seek) -> Sets the seek position of the first sound node.
     *   seek(seek, id) -> Sets the seek position of passed sound id.
     * @return {Howl/Number} Returns self or the current seek position.
     */
    seek: function() {
      var self = this;
      var args = arguments;
      var seek, id;

      // Determine the values based on arguments.
      if (args.length === 0) {
        // We will simply return the current position of the first node.
        if (self._sounds.length) {
          id = self._sounds[0]._id;
        }
      } else if (args.length === 1) {
        // First check if this is an ID, and if not, assume it is a new seek position.
        var ids = self._getSoundIds();
        var index = ids.indexOf(args[0]);
        if (index >= 0) {
          id = parseInt(args[0], 10);
        } else if (self._sounds.length) {
          id = self._sounds[0]._id;
          seek = parseFloat(args[0]);
        }
      } else if (args.length === 2) {
        seek = parseFloat(args[0]);
        id = parseInt(args[1], 10);
      }

      // If there is no ID, bail out.
      if (typeof id === 'undefined') {
        return 0;
      }

      // If the sound hasn't loaded, add it to the load queue to seek when capable.
      if (typeof seek === 'number' && (self._state !== 'loaded' || self._playLock)) {
        self._queue.push({
          event: 'seek',
          action: function() {
            self.seek.apply(self, args);
          }
        });

        return self;
      }

      // Get the sound.
      var sound = self._soundById(id);

      if (sound) {
        if (typeof seek === 'number' && seek >= 0) {
          // Pause the sound and update position for restarting playback.
          var playing = self.playing(id);
          if (playing) {
            self.pause(id, true);
          }

          // Move the position of the track and cancel timer.
          sound._seek = seek;
          sound._ended = false;
          self._clearTimer(id);

          // Update the seek position for HTML5 Audio.
          if (!self._webAudio && sound._node && !isNaN(sound._node.duration)) {
            sound._node.currentTime = seek;
          }

          // Seek and emit when ready.
          var seekAndEmit = function() {
            // Restart the playback if the sound was playing.
            if (playing) {
              self.play(id, true);
            }

            self._emit('seek', id);
          };

          // Wait for the play lock to be unset before emitting (HTML5 Audio).
          if (playing && !self._webAudio) {
            var emitSeek = function() {
              if (!self._playLock) {
                seekAndEmit();
              } else {
                setTimeout(emitSeek, 0);
              }
            };
            setTimeout(emitSeek, 0);
          } else {
            seekAndEmit();
          }
        } else {
          if (self._webAudio) {
            var realTime = self.playing(id) ? Howler.ctx.currentTime - sound._playStart : 0;
            var rateSeek = sound._rateSeek ? sound._rateSeek - sound._seek : 0;
            return sound._seek + (rateSeek + realTime * Math.abs(sound._rate));
          } else {
            return sound._node.currentTime;
          }
        }
      }

      return self;
    },

    /**
     * Check if a specific sound is currently playing or not (if id is provided), or check if at least one of the sounds in the group is playing or not.
     * @param  {Number}  id The sound id to check. If none is passed, the whole sound group is checked.
     * @return {Boolean} True if playing and false if not.
     */
    playing: function(id) {
      var self = this;

      // Check the passed sound ID (if any).
      if (typeof id === 'number') {
        var sound = self._soundById(id);
        return sound ? !sound._paused : false;
      }

      // Otherwise, loop through all sounds and check if any are playing.
      for (var i=0; i<self._sounds.length; i++) {
        if (!self._sounds[i]._paused) {
          return true;
        }
      }

      return false;
    },

    /**
     * Get the duration of this sound. Passing a sound id will return the sprite duration.
     * @param  {Number} id The sound id to check. If none is passed, return full source duration.
     * @return {Number} Audio duration in seconds.
     */
    duration: function(id) {
      var self = this;
      var duration = self._duration;

      // If we pass an ID, get the sound and return the sprite length.
      var sound = self._soundById(id);
      if (sound) {
        duration = self._sprite[sound._sprite][1] / 1000;
      }

      return duration;
    },

    /**
     * Returns the current loaded state of this Howl.
     * @return {String} 'unloaded', 'loading', 'loaded'
     */
    state: function() {
      return this._state;
    },

    /**
     * Unload and destroy the current Howl object.
     * This will immediately stop all sound instances attached to this group.
     */
    unload: function() {
      var self = this;

      // Stop playing any active sounds.
      var sounds = self._sounds;
      for (var i=0; i<sounds.length; i++) {
        // Stop the sound if it is currently playing.
        if (!sounds[i]._paused) {
          self.stop(sounds[i]._id);
        }

        // Remove the source or disconnect.
        if (!self._webAudio) {
          // Set the source to 0-second silence to stop any downloading (except in IE).
          self._clearSound(sounds[i]._node);

          // Remove any event listeners.
          sounds[i]._node.removeEventListener('error', sounds[i]._errorFn, false);
          sounds[i]._node.removeEventListener(Howler._canPlayEvent, sounds[i]._loadFn, false);
          sounds[i]._node.removeEventListener('ended', sounds[i]._endFn, false);

          // Release the Audio object back to the pool.
          Howler._releaseHtml5Audio(sounds[i]._node);
        }

        // Empty out all of the nodes.
        delete sounds[i]._node;

        // Make sure all timers are cleared out.
        self._clearTimer(sounds[i]._id);
      }

      // Remove the references in the global Howler object.
      var index = Howler._howls.indexOf(self);
      if (index >= 0) {
        Howler._howls.splice(index, 1);
      }

      // Delete this sound from the cache (if no other Howl is using it).
      var remCache = true;
      for (i=0; i<Howler._howls.length; i++) {
        if (Howler._howls[i]._src === self._src || self._src.indexOf(Howler._howls[i]._src) >= 0) {
          remCache = false;
          break;
        }
      }

      if (cache && remCache) {
        delete cache[self._src];
      }

      // Clear global errors.
      Howler.noAudio = false;

      // Clear out `self`.
      self._state = 'unloaded';
      self._sounds = [];
      self = null;

      return null;
    },

    /**
     * Listen to a custom event.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @param  {Number}   once  (INTERNAL) Marks event to fire only once.
     * @return {Howl}
     */
    on: function(event, fn, id, once) {
      var self = this;
      var events = self['_on' + event];

      if (typeof fn === 'function') {
        events.push(once ? {id: id, fn: fn, once: once} : {id: id, fn: fn});
      }

      return self;
    },

    /**
     * Remove a custom event. Call without parameters to remove all events.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to remove. Leave empty to remove all.
     * @param  {Number}   id    (optional) Only remove events for this sound.
     * @return {Howl}
     */
    off: function(event, fn, id) {
      var self = this;
      var events = self['_on' + event];
      var i = 0;

      // Allow passing just an event and ID.
      if (typeof fn === 'number') {
        id = fn;
        fn = null;
      }

      if (fn || id) {
        // Loop through event store and remove the passed function.
        for (i=0; i<events.length; i++) {
          var isId = (id === events[i].id);
          if (fn === events[i].fn && isId || !fn && isId) {
            events.splice(i, 1);
            break;
          }
        }
      } else if (event) {
        // Clear out all events of this type.
        self['_on' + event] = [];
      } else {
        // Clear out all events of every type.
        var keys = Object.keys(self);
        for (i=0; i<keys.length; i++) {
          if ((keys[i].indexOf('_on') === 0) && Array.isArray(self[keys[i]])) {
            self[keys[i]] = [];
          }
        }
      }

      return self;
    },

    /**
     * Listen to a custom event and remove it once fired.
     * @param  {String}   event Event name.
     * @param  {Function} fn    Listener to call.
     * @param  {Number}   id    (optional) Only listen to events for this sound.
     * @return {Howl}
     */
    once: function(event, fn, id) {
      var self = this;

      // Setup the event listener.
      self.on(event, fn, id, 1);

      return self;
    },

    /**
     * Emit all events of a specific type and pass the sound id.
     * @param  {String} event Event name.
     * @param  {Number} id    Sound ID.
     * @param  {Number} msg   Message to go with event.
     * @return {Howl}
     */
    _emit: function(event, id, msg) {
      var self = this;
      var events = self['_on' + event];

      // Loop through event store and fire all functions.
      for (var i=events.length-1; i>=0; i--) {
        // Only fire the listener if the correct ID is used.
        if (!events[i].id || events[i].id === id || event === 'load') {
          setTimeout(function(fn) {
            fn.call(this, id, msg);
          }.bind(self, events[i].fn), 0);

          // If this event was setup with `once`, remove it.
          if (events[i].once) {
            self.off(event, events[i].fn, events[i].id);
          }
        }
      }

      // Pass the event type into load queue so that it can continue stepping.
      self._loadQueue(event);

      return self;
    },

    /**
     * Queue of actions initiated before the sound has loaded.
     * These will be called in sequence, with the next only firing
     * after the previous has finished executing (even if async like play).
     * @return {Howl}
     */
    _loadQueue: function(event) {
      var self = this;

      if (self._queue.length > 0) {
        var task = self._queue[0];

        // Remove this task if a matching event was passed.
        if (task.event === event) {
          self._queue.shift();
          self._loadQueue();
        }

        // Run the task if no event type is passed.
        if (!event) {
          task.action();
        }
      }

      return self;
    },

    /**
     * Fired when playback ends at the end of the duration.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _ended: function(sound) {
      var self = this;
      var sprite = sound._sprite;

      // If we are using IE and there was network latency we may be clipping
      // audio before it completes playing. Lets check the node to make sure it
      // believes it has completed, before ending the playback.
      if (!self._webAudio && sound._node && !sound._node.paused && !sound._node.ended && sound._node.currentTime < sound._stop) {
        setTimeout(self._ended.bind(self, sound), 100);
        return self;
      }

      // Should this sound loop?
      var loop = !!(sound._loop || self._sprite[sprite][2]);

      // Fire the ended event.
      self._emit('end', sound._id);

      // Restart the playback for HTML5 Audio loop.
      if (!self._webAudio && loop) {
        self.stop(sound._id, true).play(sound._id);
      }

      // Restart this timer if on a Web Audio loop.
      if (self._webAudio && loop) {
        self._emit('play', sound._id);
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        sound._playStart = Howler.ctx.currentTime;

        var timeout = ((sound._stop - sound._start) * 1000) / Math.abs(sound._rate);
        self._endTimers[sound._id] = setTimeout(self._ended.bind(self, sound), timeout);
      }

      // Mark the node as paused.
      if (self._webAudio && !loop) {
        sound._paused = true;
        sound._ended = true;
        sound._seek = sound._start || 0;
        sound._rateSeek = 0;
        self._clearTimer(sound._id);

        // Clean up the buffer source.
        self._cleanBuffer(sound._node);

        // Attempt to auto-suspend AudioContext if no sounds are still playing.
        Howler._autoSuspend();
      }

      // When using a sprite, end the track.
      if (!self._webAudio && !loop) {
        self.stop(sound._id, true);
      }

      return self;
    },

    /**
     * Clear the end timer for a sound playback.
     * @param  {Number} id The sound ID.
     * @return {Howl}
     */
    _clearTimer: function(id) {
      var self = this;

      if (self._endTimers[id]) {
        // Clear the timeout or remove the ended listener.
        if (typeof self._endTimers[id] !== 'function') {
          clearTimeout(self._endTimers[id]);
        } else {
          var sound = self._soundById(id);
          if (sound && sound._node) {
            sound._node.removeEventListener('ended', self._endTimers[id], false);
          }
        }

        delete self._endTimers[id];
      }

      return self;
    },

    /**
     * Return the sound identified by this ID, or return null.
     * @param  {Number} id Sound ID
     * @return {Object}    Sound object or null.
     */
    _soundById: function(id) {
      var self = this;

      // Loop through all sounds and find the one with this ID.
      for (var i=0; i<self._sounds.length; i++) {
        if (id === self._sounds[i]._id) {
          return self._sounds[i];
        }
      }

      return null;
    },

    /**
     * Return an inactive sound from the pool or create a new one.
     * @return {Sound} Sound playback object.
     */
    _inactiveSound: function() {
      var self = this;

      self._drain();

      // Find the first inactive node to recycle.
      for (var i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          return self._sounds[i].reset();
        }
      }

      // If no inactive node was found, create a new one.
      return new Sound(self);
    },

    /**
     * Drain excess inactive sounds from the pool.
     */
    _drain: function() {
      var self = this;
      var limit = self._pool;
      var cnt = 0;
      var i = 0;

      // If there are less sounds than the max pool size, we are done.
      if (self._sounds.length < limit) {
        return;
      }

      // Count the number of inactive sounds.
      for (i=0; i<self._sounds.length; i++) {
        if (self._sounds[i]._ended) {
          cnt++;
        }
      }

      // Remove excess inactive sounds, going in reverse order.
      for (i=self._sounds.length - 1; i>=0; i--) {
        if (cnt <= limit) {
          return;
        }

        if (self._sounds[i]._ended) {
          // Disconnect the audio source when using Web Audio.
          if (self._webAudio && self._sounds[i]._node) {
            self._sounds[i]._node.disconnect(0);
          }

          // Remove sounds until we have the pool size.
          self._sounds.splice(i, 1);
          cnt--;
        }
      }
    },

    /**
     * Get all ID's from the sounds pool.
     * @param  {Number} id Only return one ID if one is passed.
     * @return {Array}    Array of IDs.
     */
    _getSoundIds: function(id) {
      var self = this;

      if (typeof id === 'undefined') {
        var ids = [];
        for (var i=0; i<self._sounds.length; i++) {
          ids.push(self._sounds[i]._id);
        }

        return ids;
      } else {
        return [id];
      }
    },

    /**
     * Load the sound back into the buffer source.
     * @param  {Sound} sound The sound object to work with.
     * @return {Howl}
     */
    _refreshBuffer: function(sound) {
      var self = this;

      // Setup the buffer source for playback.
      sound._node.bufferSource = Howler.ctx.createBufferSource();
      sound._node.bufferSource.buffer = cache[self._src];

      // Connect to the correct node.
      if (sound._panner) {
        sound._node.bufferSource.connect(sound._panner);
      } else {
        sound._node.bufferSource.connect(sound._node);
      }

      // Setup looping and playback rate.
      sound._node.bufferSource.loop = sound._loop;
      if (sound._loop) {
        sound._node.bufferSource.loopStart = sound._start || 0;
        sound._node.bufferSource.loopEnd = sound._stop || 0;
      }
      sound._node.bufferSource.playbackRate.setValueAtTime(sound._rate, Howler.ctx.currentTime);

      return self;
    },

    /**
     * Prevent memory leaks by cleaning up the buffer source after playback.
     * @param  {Object} node Sound's audio node containing the buffer source.
     * @return {Howl}
     */
    _cleanBuffer: function(node) {
      var self = this;
      var isIOS = Howler._navigator && Howler._navigator.vendor.indexOf('Apple') >= 0;

      if (Howler._scratchBuffer && node.bufferSource) {
        node.bufferSource.onended = null;
        node.bufferSource.disconnect(0);
        if (isIOS) {
          try { node.bufferSource.buffer = Howler._scratchBuffer; } catch(e) {}
        }
      }
      node.bufferSource = null;

      return self;
    },

    /**
     * Set the source to a 0-second silence to stop any downloading (except in IE).
     * @param  {Object} node Audio node to clear.
     */
    _clearSound: function(node) {
      var checkIE = /MSIE |Trident\//.test(Howler._navigator && Howler._navigator.userAgent);
      if (!checkIE) {
        node.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA';
      }
    }
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Setup the sound object, which each node attached to a Howl group is contained in.
   * @param {Object} howl The Howl parent group.
   */
  var Sound = function(howl) {
    this._parent = howl;
    this.init();
  };
  Sound.prototype = {
    /**
     * Initialize a new Sound object.
     * @return {Sound}
     */
    init: function() {
      var self = this;
      var parent = self._parent;

      // Setup the default parameters.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a unique ID for this sound.
      self._id = ++Howler._counter;

      // Add itself to the parent's pool.
      parent._sounds.push(self);

      // Create the new node.
      self.create();

      return self;
    },

    /**
     * Create and setup a new sound object, whether HTML5 Audio or Web Audio.
     * @return {Sound}
     */
    create: function() {
      var self = this;
      var parent = self._parent;
      var volume = (Howler._muted || self._muted || self._parent._muted) ? 0 : self._volume;

      if (parent._webAudio) {
        // Create the gain node for controlling volume (the source will connect to this).
        self._node = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
        self._node.gain.setValueAtTime(volume, Howler.ctx.currentTime);
        self._node.paused = true;
        self._node.connect(Howler.masterGain);
      } else if (!Howler.noAudio) {
        // Get an unlocked Audio object from the pool.
        self._node = Howler._obtainHtml5Audio();

        // Listen for errors (http://dev.w3.org/html5/spec-author-view/spec.html#mediaerror).
        self._errorFn = self._errorListener.bind(self);
        self._node.addEventListener('error', self._errorFn, false);

        // Listen for 'canplaythrough' event to let us know the sound is ready.
        self._loadFn = self._loadListener.bind(self);
        self._node.addEventListener(Howler._canPlayEvent, self._loadFn, false);

        // Listen for the 'ended' event on the sound to account for edge-case where
        // a finite sound has a duration of Infinity.
        self._endFn = self._endListener.bind(self);
        self._node.addEventListener('ended', self._endFn, false);

        // Setup the new audio node.
        self._node.src = parent._src;
        self._node.preload = parent._preload === true ? 'auto' : parent._preload;
        self._node.volume = volume * Howler.volume();

        // Begin loading the source.
        self._node.load();
      }

      return self;
    },

    /**
     * Reset the parameters of this sound to the original state (for recycle).
     * @return {Sound}
     */
    reset: function() {
      var self = this;
      var parent = self._parent;

      // Reset all of the parameters of this sound.
      self._muted = parent._muted;
      self._loop = parent._loop;
      self._volume = parent._volume;
      self._rate = parent._rate;
      self._seek = 0;
      self._rateSeek = 0;
      self._paused = true;
      self._ended = true;
      self._sprite = '__default';

      // Generate a new ID so that it isn't confused with the previous sound.
      self._id = ++Howler._counter;

      return self;
    },

    /**
     * HTML5 Audio error listener callback.
     */
    _errorListener: function() {
      var self = this;

      // Fire an error event and pass back the code.
      self._parent._emit('loaderror', self._id, self._node.error ? self._node.error.code : 0);

      // Clear the event listener.
      self._node.removeEventListener('error', self._errorFn, false);
    },

    /**
     * HTML5 Audio canplaythrough listener callback.
     */
    _loadListener: function() {
      var self = this;
      var parent = self._parent;

      // Round up the duration to account for the lower precision in HTML5 Audio.
      parent._duration = Math.ceil(self._node.duration * 10) / 10;

      // Setup a sprite if none is defined.
      if (Object.keys(parent._sprite).length === 0) {
        parent._sprite = {__default: [0, parent._duration * 1000]};
      }

      if (parent._state !== 'loaded') {
        parent._state = 'loaded';
        parent._emit('load');
        parent._loadQueue();
      }

      // Clear the event listener.
      self._node.removeEventListener(Howler._canPlayEvent, self._loadFn, false);
    },

    /**
     * HTML5 Audio ended listener callback.
     */
    _endListener: function() {
      var self = this;
      var parent = self._parent;

      // Only handle the `ended`` event if the duration is Infinity.
      if (parent._duration === Infinity) {
        // Update the parent duration to match the real audio duration.
        // Round up the duration to account for the lower precision in HTML5 Audio.
        parent._duration = Math.ceil(self._node.duration * 10) / 10;

        // Update the sprite that corresponds to the real duration.
        if (parent._sprite.__default[1] === Infinity) {
          parent._sprite.__default[1] = parent._duration * 1000;
        }

        // Run the regular ended method.
        parent._ended(self);
      }

      // Clear the event listener since the duration is now correct.
      self._node.removeEventListener('ended', self._endFn, false);
    }
  };

  /** Helper Methods **/
  /***************************************************************************/

  var cache = {};

  /**
   * Buffer a sound from URL, Data URI or cache and decode to audio source (Web Audio API).
   * @param  {Howl} self
   */
  var loadBuffer = function(self) {
    var url = self._src;

    // Check if the buffer has already been cached and use it instead.
    if (cache[url]) {
      // Set the duration from the cache.
      self._duration = cache[url].duration;

      // Load the sound into this Howl.
      loadSound(self);

      return;
    }

    if (/^data:[^;]+;base64,/.test(url)) {
      // Decode the base64 data URI without XHR, since some browsers don't support it.
      var data = atob(url.split(',')[1]);
      var dataView = new Uint8Array(data.length);
      for (var i=0; i<data.length; ++i) {
        dataView[i] = data.charCodeAt(i);
      }

      decodeAudioData(dataView.buffer, self);
    } else {
      // Load the buffer from the URL.
      var xhr = new XMLHttpRequest();
      xhr.open(self._xhr.method, url, true);
      xhr.withCredentials = self._xhr.withCredentials;
      xhr.responseType = 'arraybuffer';

      // Apply any custom headers to the request.
      if (self._xhr.headers) {
        Object.keys(self._xhr.headers).forEach(function(key) {
          xhr.setRequestHeader(key, self._xhr.headers[key]);
        });
      }

      xhr.onload = function() {
        // Make sure we get a successful response back.
        var code = (xhr.status + '')[0];
        if (code !== '0' && code !== '2' && code !== '3') {
          self._emit('loaderror', null, 'Failed loading audio file with status: ' + xhr.status + '.');
          return;
        }

        decodeAudioData(xhr.response, self);
      };
      xhr.onerror = function() {
        // If there is an error, switch to HTML5 Audio.
        if (self._webAudio) {
          self._html5 = true;
          self._webAudio = false;
          self._sounds = [];
          delete cache[url];
          self.load();
        }
      };
      safeXhrSend(xhr);
    }
  };

  /**
   * Send the XHR request wrapped in a try/catch.
   * @param  {Object} xhr XHR to send.
   */
  var safeXhrSend = function(xhr) {
    try {
      xhr.send();
    } catch (e) {
      xhr.onerror();
    }
  };

  /**
   * Decode audio data from an array buffer.
   * @param  {ArrayBuffer} arraybuffer The audio data.
   * @param  {Howl}        self
   */
  var decodeAudioData = function(arraybuffer, self) {
    // Fire a load error if something broke.
    var error = function() {
      self._emit('loaderror', null, 'Decoding audio data failed.');
    };

    // Load the sound on success.
    var success = function(buffer) {
      if (buffer && self._sounds.length > 0) {
        cache[self._src] = buffer;
        loadSound(self, buffer);
      } else {
        error();
      }
    };

    // Decode the buffer into an audio source.
    if (typeof Promise !== 'undefined' && Howler.ctx.decodeAudioData.length === 1) {
      Howler.ctx.decodeAudioData(arraybuffer).then(success).catch(error);
    } else {
      Howler.ctx.decodeAudioData(arraybuffer, success, error);
    }
  }

  /**
   * Sound is now loaded, so finish setting everything up and fire the loaded event.
   * @param  {Howl} self
   * @param  {Object} buffer The decoded buffer sound source.
   */
  var loadSound = function(self, buffer) {
    // Set the duration.
    if (buffer && !self._duration) {
      self._duration = buffer.duration;
    }

    // Setup a sprite if none is defined.
    if (Object.keys(self._sprite).length === 0) {
      self._sprite = {__default: [0, self._duration * 1000]};
    }

    // Fire the loaded event.
    if (self._state !== 'loaded') {
      self._state = 'loaded';
      self._emit('load');
      self._loadQueue();
    }
  };

  /**
   * Setup the audio context when available, or switch to HTML5 Audio mode.
   */
  var setupAudioContext = function() {
    // If we have already detected that Web Audio isn't supported, don't run this step again.
    if (!Howler.usingWebAudio) {
      return;
    }

    // Check if we are using Web Audio and setup the AudioContext if we are.
    try {
      if (typeof AudioContext !== 'undefined') {
        Howler.ctx = new AudioContext();
      } else if (typeof webkitAudioContext !== 'undefined') {
        Howler.ctx = new webkitAudioContext();
      } else {
        Howler.usingWebAudio = false;
      }
    } catch(e) {
      Howler.usingWebAudio = false;
    }

    // If the audio context creation still failed, set using web audio to false.
    if (!Howler.ctx) {
      Howler.usingWebAudio = false;
    }

    // Check if a webview is being used on iOS8 or earlier (rather than the browser).
    // If it is, disable Web Audio as it causes crashing.
    var iOS = (/iP(hone|od|ad)/.test(Howler._navigator && Howler._navigator.platform));
    var appVersion = Howler._navigator && Howler._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
    var version = appVersion ? parseInt(appVersion[1], 10) : null;
    if (iOS && version && version < 9) {
      var safari = /safari/.test(Howler._navigator && Howler._navigator.userAgent.toLowerCase());
      if (Howler._navigator && !safari) {
        Howler.usingWebAudio = false;
      }
    }

    // Create and expose the master GainNode when using Web Audio (useful for plugins or advanced usage).
    if (Howler.usingWebAudio) {
      Howler.masterGain = (typeof Howler.ctx.createGain === 'undefined') ? Howler.ctx.createGainNode() : Howler.ctx.createGain();
      Howler.masterGain.gain.setValueAtTime(Howler._muted ? 0 : Howler._volume, Howler.ctx.currentTime);
      Howler.masterGain.connect(Howler.ctx.destination);
    }

    // Re-run the setup on Howler.
    Howler._setup();
  };

  // Add support for AMD (Asynchronous Module Definition) libraries such as require.js.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
      return {
        Howler: Howler,
        Howl: Howl
      };
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }

  // Add support for CommonJS libraries such as browserify.
  if (true) {
    exports.Howler = Howler;
    exports.Howl = Howl;
  }

  // Add to global in Node.js (for testing, etc).
  if (typeof __webpack_require__.g !== 'undefined') {
    __webpack_require__.g.HowlerGlobal = HowlerGlobal;
    __webpack_require__.g.Howler = Howler;
    __webpack_require__.g.Howl = Howl;
    __webpack_require__.g.Sound = Sound;
  } else if (typeof window !== 'undefined') {  // Define globally in case AMD is not available or unused.
    window.HowlerGlobal = HowlerGlobal;
    window.Howler = Howler;
    window.Howl = Howl;
    window.Sound = Sound;
  }
})();


/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */

(function() {

  'use strict';

  // Setup default properties.
  HowlerGlobal.prototype._pos = [0, 0, 0];
  HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0];

  /** Global Methods **/
  /***************************************************************************/

  /**
   * Helper method to update the stereo panning position of all current Howls.
   * Future Howls will not use this value unless explicitly set.
   * @param  {Number} pan A value of -1.0 is all the way left and 1.0 is all the way right.
   * @return {Howler/Number}     Self or current stereo panning value.
   */
  HowlerGlobal.prototype.stereo = function(pan) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Loop through all Howls and update their stereo panning.
    for (var i=self._howls.length-1; i>=0; i--) {
      self._howls[i].stereo(pan);
    }

    return self;
  };

  /**
   * Get/set the position of the listener in 3D cartesian space. Sounds using
   * 3D position will be relative to the listener's position.
   * @param  {Number} x The x-position of the listener.
   * @param  {Number} y The y-position of the listener.
   * @param  {Number} z The z-position of the listener.
   * @return {Howler/Array}   Self or current listener position.
   */
  HowlerGlobal.prototype.pos = function(x, y, z) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._pos[1] : y;
    z = (typeof z !== 'number') ? self._pos[2] : z;

    if (typeof x === 'number') {
      self._pos = [x, y, z];

      if (typeof self.ctx.listener.positionX !== 'undefined') {
        self.ctx.listener.positionX.setTargetAtTime(self._pos[0], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionY.setTargetAtTime(self._pos[1], Howler.ctx.currentTime, 0.1);
        self.ctx.listener.positionZ.setTargetAtTime(self._pos[2], Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setPosition(self._pos[0], self._pos[1], self._pos[2]);
      }
    } else {
      return self._pos;
    }

    return self;
  };

  /**
   * Get/set the direction the listener is pointing in the 3D cartesian space.
   * A front and up vector must be provided. The front is the direction the
   * face of the listener is pointing, and up is the direction the top of the
   * listener is pointing. Thus, these values are expected to be at right angles
   * from each other.
   * @param  {Number} x   The x-orientation of the listener.
   * @param  {Number} y   The y-orientation of the listener.
   * @param  {Number} z   The z-orientation of the listener.
   * @param  {Number} xUp The x-orientation of the top of the listener.
   * @param  {Number} yUp The y-orientation of the top of the listener.
   * @param  {Number} zUp The z-orientation of the top of the listener.
   * @return {Howler/Array}     Returns self or the current orientation vectors.
   */
  HowlerGlobal.prototype.orientation = function(x, y, z, xUp, yUp, zUp) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self.ctx || !self.ctx.listener) {
      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    var or = self._orientation;
    y = (typeof y !== 'number') ? or[1] : y;
    z = (typeof z !== 'number') ? or[2] : z;
    xUp = (typeof xUp !== 'number') ? or[3] : xUp;
    yUp = (typeof yUp !== 'number') ? or[4] : yUp;
    zUp = (typeof zUp !== 'number') ? or[5] : zUp;

    if (typeof x === 'number') {
      self._orientation = [x, y, z, xUp, yUp, zUp];

      if (typeof self.ctx.listener.forwardX !== 'undefined') {
        self.ctx.listener.forwardX.setTargetAtTime(x, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardY.setTargetAtTime(y, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.forwardZ.setTargetAtTime(z, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upX.setTargetAtTime(xUp, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upY.setTargetAtTime(yUp, Howler.ctx.currentTime, 0.1);
        self.ctx.listener.upZ.setTargetAtTime(zUp, Howler.ctx.currentTime, 0.1);
      } else {
        self.ctx.listener.setOrientation(x, y, z, xUp, yUp, zUp);
      }
    } else {
      return or;
    }

    return self;
  };

  /** Group Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core init.
   * @param  {Function} _super Core init method.
   * @return {Howl}
   */
  Howl.prototype.init = (function(_super) {
    return function(o) {
      var self = this;

      // Setup user-defined default properties.
      self._orientation = o.orientation || [1, 0, 0];
      self._stereo = o.stereo || null;
      self._pos = o.pos || null;
      self._pannerAttr = {
        coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : 360,
        coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : 360,
        coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : 0,
        distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : 'inverse',
        maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : 10000,
        panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : 'HRTF',
        refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : 1,
        rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : 1
      };

      // Setup event listeners.
      self._onstereo = o.onstereo ? [{fn: o.onstereo}] : [];
      self._onpos = o.onpos ? [{fn: o.onpos}] : [];
      self._onorientation = o.onorientation ? [{fn: o.onorientation}] : [];

      // Complete initilization with howler.js core's init function.
      return _super.call(this, o);
    };
  })(Howl.prototype.init);

  /**
   * Get/set the stereo panning of the audio source for this sound or all in the group.
   * @param  {Number} pan  A value of -1.0 is all the way left and 1.0 is all the way right.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Number}    Returns self or the current stereo panning value.
   */
  Howl.prototype.stereo = function(pan, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change stereo pan when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'stereo',
        action: function() {
          self.stereo(pan, id);
        }
      });

      return self;
    }

    // Check for PannerStereoNode support and fallback to PannerNode if it doesn't exist.
    var pannerType = (typeof Howler.ctx.createStereoPanner === 'undefined') ? 'spatial' : 'stereo';

    // Setup the group's stereo panning if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's stereo panning if no parameters are passed.
      if (typeof pan === 'number') {
        self._stereo = pan;
        self._pos = [pan, 0, 0];
      } else {
        return self._stereo;
      }
    }

    // Change the streo panning of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof pan === 'number') {
          sound._stereo = pan;
          sound._pos = [pan, 0, 0];

          if (sound._node) {
            // If we are falling back, make sure the panningModel is equalpower.
            sound._pannerAttr.panningModel = 'equalpower';

            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || !sound._panner.pan) {
              setupPanner(sound, pannerType);
            }

            if (pannerType === 'spatial') {
              if (typeof sound._panner.positionX !== 'undefined') {
                sound._panner.positionX.setValueAtTime(pan, Howler.ctx.currentTime);
                sound._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime);
                sound._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime);
              } else {
                sound._panner.setPosition(pan, 0, 0);
              }
            } else {
              sound._panner.pan.setValueAtTime(pan, Howler.ctx.currentTime);
            }
          }

          self._emit('stereo', sound._id);
        } else {
          return sound._stereo;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the 3D spatial position of the audio source for this sound or group relative to the global listener.
   * @param  {Number} x  The x-position of the audio source.
   * @param  {Number} y  The y-position of the audio source.
   * @param  {Number} z  The z-position of the audio source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial position: [x, y, z].
   */
  Howl.prototype.pos = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change position when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'pos',
        action: function() {
          self.pos(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? 0 : y;
    z = (typeof z !== 'number') ? -0.5 : z;

    // Setup the group's spatial position if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial position if no parameters are passed.
      if (typeof x === 'number') {
        self._pos = [x, y, z];
      } else {
        return self._pos;
      }
    }

    // Change the spatial position of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._pos = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner || sound._panner.pan) {
              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.positionX !== 'undefined') {
              sound._panner.positionX.setValueAtTime(x, Howler.ctx.currentTime);
              sound._panner.positionY.setValueAtTime(y, Howler.ctx.currentTime);
              sound._panner.positionZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setPosition(x, y, z);
            }
          }

          self._emit('pos', sound._id);
        } else {
          return sound._pos;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the direction the audio source is pointing in the 3D cartesian coordinate
   * space. Depending on how direction the sound is, based on the `cone` attributes,
   * a sound pointing away from the listener can be quiet or silent.
   * @param  {Number} x  The x-orientation of the source.
   * @param  {Number} y  The y-orientation of the source.
   * @param  {Number} z  The z-orientation of the source.
   * @param  {Number} id (optional) The sound ID. If none is passed, all in group will be updated.
   * @return {Howl/Array}    Returns self or the current 3D spatial orientation: [x, y, z].
   */
  Howl.prototype.orientation = function(x, y, z, id) {
    var self = this;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // If the sound hasn't loaded, add it to the load queue to change orientation when capable.
    if (self._state !== 'loaded') {
      self._queue.push({
        event: 'orientation',
        action: function() {
          self.orientation(x, y, z, id);
        }
      });

      return self;
    }

    // Set the defaults for optional 'y' & 'z'.
    y = (typeof y !== 'number') ? self._orientation[1] : y;
    z = (typeof z !== 'number') ? self._orientation[2] : z;

    // Setup the group's spatial orientation if no ID is passed.
    if (typeof id === 'undefined') {
      // Return the group's spatial orientation if no parameters are passed.
      if (typeof x === 'number') {
        self._orientation = [x, y, z];
      } else {
        return self._orientation;
      }
    }

    // Change the spatial orientation of one or all sounds in group.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      // Get the sound.
      var sound = self._soundById(ids[i]);

      if (sound) {
        if (typeof x === 'number') {
          sound._orientation = [x, y, z];

          if (sound._node) {
            // Check if there is a panner setup and create a new one if not.
            if (!sound._panner) {
              // Make sure we have a position to setup the node with.
              if (!sound._pos) {
                sound._pos = self._pos || [0, 0, -0.5];
              }

              setupPanner(sound, 'spatial');
            }

            if (typeof sound._panner.orientationX !== 'undefined') {
              sound._panner.orientationX.setValueAtTime(x, Howler.ctx.currentTime);
              sound._panner.orientationY.setValueAtTime(y, Howler.ctx.currentTime);
              sound._panner.orientationZ.setValueAtTime(z, Howler.ctx.currentTime);
            } else {
              sound._panner.setOrientation(x, y, z);
            }
          }

          self._emit('orientation', sound._id);
        } else {
          return sound._orientation;
        }
      }
    }

    return self;
  };

  /**
   * Get/set the panner node's attributes for a sound or group of sounds.
   * This method can optionall take 0, 1 or 2 arguments.
   *   pannerAttr() -> Returns the group's values.
   *   pannerAttr(id) -> Returns the sound id's values.
   *   pannerAttr(o) -> Set's the values of all sounds in this Howl group.
   *   pannerAttr(o, id) -> Set's the values of passed sound id.
   *
   *   Attributes:
   *     coneInnerAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      inside of which there will be no volume reduction.
   *     coneOuterAngle - (360 by default) A parameter for directional audio sources, this is an angle, in degrees,
   *                      outside of which the volume will be reduced to a constant value of `coneOuterGain`.
   *     coneOuterGain - (0 by default) A parameter for directional audio sources, this is the gain outside of the
   *                     `coneOuterAngle`. It is a linear value in the range `[0, 1]`.
   *     distanceModel - ('inverse' by default) Determines algorithm used to reduce volume as audio moves away from
   *                     listener. Can be `linear`, `inverse` or `exponential.
   *     maxDistance - (10000 by default) The maximum distance between source and listener, after which the volume
   *                   will not be reduced any further.
   *     refDistance - (1 by default) A reference distance for reducing volume as source moves further from the listener.
   *                   This is simply a variable of the distance model and has a different effect depending on which model
   *                   is used and the scale of your coordinates. Generally, volume will be equal to 1 at this distance.
   *     rolloffFactor - (1 by default) How quickly the volume reduces as source moves from listener. This is simply a
   *                     variable of the distance model and can be in the range of `[0, 1]` with `linear` and `[0, ∞]`
   *                     with `inverse` and `exponential`.
   *     panningModel - ('HRTF' by default) Determines which spatialization algorithm is used to position audio.
   *                     Can be `HRTF` or `equalpower`.
   *
   * @return {Howl/Object} Returns self or current panner attributes.
   */
  Howl.prototype.pannerAttr = function() {
    var self = this;
    var args = arguments;
    var o, id, sound;

    // Stop right here if not using Web Audio.
    if (!self._webAudio) {
      return self;
    }

    // Determine the values based on arguments.
    if (args.length === 0) {
      // Return the group's panner attribute values.
      return self._pannerAttr;
    } else if (args.length === 1) {
      if (typeof args[0] === 'object') {
        o = args[0];

        // Set the grou's panner attribute values.
        if (typeof id === 'undefined') {
          if (!o.pannerAttr) {
            o.pannerAttr = {
              coneInnerAngle: o.coneInnerAngle,
              coneOuterAngle: o.coneOuterAngle,
              coneOuterGain: o.coneOuterGain,
              distanceModel: o.distanceModel,
              maxDistance: o.maxDistance,
              refDistance: o.refDistance,
              rolloffFactor: o.rolloffFactor,
              panningModel: o.panningModel
            };
          }

          self._pannerAttr = {
            coneInnerAngle: typeof o.pannerAttr.coneInnerAngle !== 'undefined' ? o.pannerAttr.coneInnerAngle : self._coneInnerAngle,
            coneOuterAngle: typeof o.pannerAttr.coneOuterAngle !== 'undefined' ? o.pannerAttr.coneOuterAngle : self._coneOuterAngle,
            coneOuterGain: typeof o.pannerAttr.coneOuterGain !== 'undefined' ? o.pannerAttr.coneOuterGain : self._coneOuterGain,
            distanceModel: typeof o.pannerAttr.distanceModel !== 'undefined' ? o.pannerAttr.distanceModel : self._distanceModel,
            maxDistance: typeof o.pannerAttr.maxDistance !== 'undefined' ? o.pannerAttr.maxDistance : self._maxDistance,
            refDistance: typeof o.pannerAttr.refDistance !== 'undefined' ? o.pannerAttr.refDistance : self._refDistance,
            rolloffFactor: typeof o.pannerAttr.rolloffFactor !== 'undefined' ? o.pannerAttr.rolloffFactor : self._rolloffFactor,
            panningModel: typeof o.pannerAttr.panningModel !== 'undefined' ? o.pannerAttr.panningModel : self._panningModel
          };
        }
      } else {
        // Return this sound's panner attribute values.
        sound = self._soundById(parseInt(args[0], 10));
        return sound ? sound._pannerAttr : self._pannerAttr;
      }
    } else if (args.length === 2) {
      o = args[0];
      id = parseInt(args[1], 10);
    }

    // Update the values of the specified sounds.
    var ids = self._getSoundIds(id);
    for (var i=0; i<ids.length; i++) {
      sound = self._soundById(ids[i]);

      if (sound) {
        // Merge the new values into the sound.
        var pa = sound._pannerAttr;
        pa = {
          coneInnerAngle: typeof o.coneInnerAngle !== 'undefined' ? o.coneInnerAngle : pa.coneInnerAngle,
          coneOuterAngle: typeof o.coneOuterAngle !== 'undefined' ? o.coneOuterAngle : pa.coneOuterAngle,
          coneOuterGain: typeof o.coneOuterGain !== 'undefined' ? o.coneOuterGain : pa.coneOuterGain,
          distanceModel: typeof o.distanceModel !== 'undefined' ? o.distanceModel : pa.distanceModel,
          maxDistance: typeof o.maxDistance !== 'undefined' ? o.maxDistance : pa.maxDistance,
          refDistance: typeof o.refDistance !== 'undefined' ? o.refDistance : pa.refDistance,
          rolloffFactor: typeof o.rolloffFactor !== 'undefined' ? o.rolloffFactor : pa.rolloffFactor,
          panningModel: typeof o.panningModel !== 'undefined' ? o.panningModel : pa.panningModel
        };

        // Update the panner values or create a new panner if none exists.
        var panner = sound._panner;
        if (panner) {
          panner.coneInnerAngle = pa.coneInnerAngle;
          panner.coneOuterAngle = pa.coneOuterAngle;
          panner.coneOuterGain = pa.coneOuterGain;
          panner.distanceModel = pa.distanceModel;
          panner.maxDistance = pa.maxDistance;
          panner.refDistance = pa.refDistance;
          panner.rolloffFactor = pa.rolloffFactor;
          panner.panningModel = pa.panningModel;
        } else {
          // Make sure we have a position to setup the node with.
          if (!sound._pos) {
            sound._pos = self._pos || [0, 0, -0.5];
          }

          // Create a new panner node.
          setupPanner(sound, 'spatial');
        }
      }
    }

    return self;
  };

  /** Single Sound Methods **/
  /***************************************************************************/

  /**
   * Add new properties to the core Sound init.
   * @param  {Function} _super Core Sound init method.
   * @return {Sound}
   */
  Sound.prototype.init = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Setup user-defined default properties.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // Complete initilization with howler.js core Sound's init function.
      _super.call(this);

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      }
    };
  })(Sound.prototype.init);

  /**
   * Override the Sound.reset method to clean up properties from the spatial plugin.
   * @param  {Function} _super Sound reset method.
   * @return {Sound}
   */
  Sound.prototype.reset = (function(_super) {
    return function() {
      var self = this;
      var parent = self._parent;

      // Reset all spatial plugin properties on this sound.
      self._orientation = parent._orientation;
      self._stereo = parent._stereo;
      self._pos = parent._pos;
      self._pannerAttr = parent._pannerAttr;

      // If a stereo or position was specified, set it up.
      if (self._stereo) {
        parent.stereo(self._stereo);
      } else if (self._pos) {
        parent.pos(self._pos[0], self._pos[1], self._pos[2], self._id);
      } else if (self._panner) {
        // Disconnect the panner.
        self._panner.disconnect(0);
        self._panner = undefined;
        parent._refreshBuffer(self);
      }

      // Complete resetting of the sound.
      return _super.call(this);
    };
  })(Sound.prototype.reset);

  /** Helper Methods **/
  /***************************************************************************/

  /**
   * Create a new panner node and save it on the sound.
   * @param  {Sound} sound Specific sound to setup panning on.
   * @param {String} type Type of panner to create: 'stereo' or 'spatial'.
   */
  var setupPanner = function(sound, type) {
    type = type || 'spatial';

    // Create the new panner node.
    if (type === 'spatial') {
      sound._panner = Howler.ctx.createPanner();
      sound._panner.coneInnerAngle = sound._pannerAttr.coneInnerAngle;
      sound._panner.coneOuterAngle = sound._pannerAttr.coneOuterAngle;
      sound._panner.coneOuterGain = sound._pannerAttr.coneOuterGain;
      sound._panner.distanceModel = sound._pannerAttr.distanceModel;
      sound._panner.maxDistance = sound._pannerAttr.maxDistance;
      sound._panner.refDistance = sound._pannerAttr.refDistance;
      sound._panner.rolloffFactor = sound._pannerAttr.rolloffFactor;
      sound._panner.panningModel = sound._pannerAttr.panningModel;

      if (typeof sound._panner.positionX !== 'undefined') {
        sound._panner.positionX.setValueAtTime(sound._pos[0], Howler.ctx.currentTime);
        sound._panner.positionY.setValueAtTime(sound._pos[1], Howler.ctx.currentTime);
        sound._panner.positionZ.setValueAtTime(sound._pos[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setPosition(sound._pos[0], sound._pos[1], sound._pos[2]);
      }

      if (typeof sound._panner.orientationX !== 'undefined') {
        sound._panner.orientationX.setValueAtTime(sound._orientation[0], Howler.ctx.currentTime);
        sound._panner.orientationY.setValueAtTime(sound._orientation[1], Howler.ctx.currentTime);
        sound._panner.orientationZ.setValueAtTime(sound._orientation[2], Howler.ctx.currentTime);
      } else {
        sound._panner.setOrientation(sound._orientation[0], sound._orientation[1], sound._orientation[2]);
      }
    } else {
      sound._panner = Howler.ctx.createStereoPanner();
      sound._panner.pan.setValueAtTime(sound._stereo, Howler.ctx.currentTime);
    }

    sound._panner.connect(sound._node);

    // Update the connections.
    if (!sound._paused) {
      sound._parent.pause(sound._id, true).play(sound._id, true);
    }
  };
})();


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue?vue&type=style&index=0&id=448a8a12&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue?vue&type=style&index=0&id=448a8a12&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_NarratorSpeedSelector_vue_vue_type_style_index_0_id_448a8a12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NarratorSpeedSelector.vue?vue&type=style&index=0&id=448a8a12&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue?vue&type=style&index=0&id=448a8a12&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_NarratorSpeedSelector_vue_vue_type_style_index_0_id_448a8a12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_NarratorSpeedSelector_vue_vue_type_style_index_0_id_448a8a12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=style&index=0&id=4bb7505f&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=style&index=0&id=4bb7505f&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPlayer_vue_vue_type_style_index_0_id_4bb7505f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudiobookPlayer.vue?vue&type=style&index=0&id=4bb7505f&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=style&index=0&id=4bb7505f&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPlayer_vue_vue_type_style_index_0_id_4bb7505f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPlayer_vue_vue_type_style_index_0_id_4bb7505f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=style&index=1&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=style&index=1&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPlayer_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudiobookPlayer.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=style&index=1&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPlayer_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPlayer_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlaylist.vue?vue&type=style&index=0&id=a891d560&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlaylist.vue?vue&type=style&index=0&id=a891d560&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPlaylist_vue_vue_type_style_index_0_id_a891d560_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudiobookPlaylist.vue?vue&type=style&index=0&id=a891d560&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlaylist.vue?vue&type=style&index=0&id=a891d560&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPlaylist_vue_vue_type_style_index_0_id_a891d560_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPlaylist_vue_vue_type_style_index_0_id_a891d560_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPoster.vue?vue&type=style&index=0&id=4dda9ccb&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPoster.vue?vue&type=style&index=0&id=4dda9ccb&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPoster_vue_vue_type_style_index_0_id_4dda9ccb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudiobookPoster.vue?vue&type=style&index=0&id=4dda9ccb&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPoster.vue?vue&type=style&index=0&id=4dda9ccb&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPoster_vue_vue_type_style_index_0_id_4dda9ccb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPoster_vue_vue_type_style_index_0_id_4dda9ccb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookViewer.vue?vue&type=style&index=0&id=7e5ae710&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookViewer.vue?vue&type=style&index=0&id=7e5ae710&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookViewer_vue_vue_type_style_index_0_id_7e5ae710_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudiobookViewer.vue?vue&type=style&index=0&id=7e5ae710&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookViewer.vue?vue&type=style&index=0&id=7e5ae710&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookViewer_vue_vue_type_style_index_0_id_7e5ae710_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookViewer_vue_vue_type_style_index_0_id_7e5ae710_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue":
/*!**********************************************************!*\
  !*** ./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _NarratorSpeedSelector_vue_vue_type_template_id_448a8a12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NarratorSpeedSelector.vue?vue&type=template&id=448a8a12&scoped=true& */ "./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue?vue&type=template&id=448a8a12&scoped=true&");
/* harmony import */ var _NarratorSpeedSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NarratorSpeedSelector.vue?vue&type=script&lang=js& */ "./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue?vue&type=script&lang=js&");
/* harmony import */ var _NarratorSpeedSelector_vue_vue_type_style_index_0_id_448a8a12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NarratorSpeedSelector.vue?vue&type=style&index=0&id=448a8a12&lang=scss&scoped=true& */ "./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue?vue&type=style&index=0&id=448a8a12&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NarratorSpeedSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NarratorSpeedSelector_vue_vue_type_template_id_448a8a12_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _NarratorSpeedSelector_vue_vue_type_template_id_448a8a12_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "448a8a12",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "_shared_/UI/Audiobooks/NarratorSpeedSelector.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/js/components/partials/Audiobook/AudiobookPlayer.vue":
/*!******************************************************************!*\
  !*** ./src/js/components/partials/Audiobook/AudiobookPlayer.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AudiobookPlayer_vue_vue_type_template_id_4bb7505f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudiobookPlayer.vue?vue&type=template&id=4bb7505f&scoped=true& */ "./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=template&id=4bb7505f&scoped=true&");
/* harmony import */ var _AudiobookPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudiobookPlayer.vue?vue&type=script&lang=js& */ "./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=script&lang=js&");
/* harmony import */ var _AudiobookPlayer_vue_vue_type_style_index_0_id_4bb7505f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudiobookPlayer.vue?vue&type=style&index=0&id=4bb7505f&lang=scss&scoped=true& */ "./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=style&index=0&id=4bb7505f&lang=scss&scoped=true&");
/* harmony import */ var _AudiobookPlayer_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AudiobookPlayer.vue?vue&type=style&index=1&lang=scss& */ "./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;



/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _AudiobookPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AudiobookPlayer_vue_vue_type_template_id_4bb7505f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AudiobookPlayer_vue_vue_type_template_id_4bb7505f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4bb7505f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/partials/Audiobook/AudiobookPlayer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/js/components/partials/Audiobook/AudiobookPlaylist.vue":
/*!********************************************************************!*\
  !*** ./src/js/components/partials/Audiobook/AudiobookPlaylist.vue ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AudiobookPlaylist_vue_vue_type_template_id_a891d560_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudiobookPlaylist.vue?vue&type=template&id=a891d560&scoped=true& */ "./src/js/components/partials/Audiobook/AudiobookPlaylist.vue?vue&type=template&id=a891d560&scoped=true&");
/* harmony import */ var _AudiobookPlaylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudiobookPlaylist.vue?vue&type=script&lang=js& */ "./src/js/components/partials/Audiobook/AudiobookPlaylist.vue?vue&type=script&lang=js&");
/* harmony import */ var _AudiobookPlaylist_vue_vue_type_style_index_0_id_a891d560_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudiobookPlaylist.vue?vue&type=style&index=0&id=a891d560&lang=scss&scoped=true& */ "./src/js/components/partials/Audiobook/AudiobookPlaylist.vue?vue&type=style&index=0&id=a891d560&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AudiobookPlaylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AudiobookPlaylist_vue_vue_type_template_id_a891d560_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AudiobookPlaylist_vue_vue_type_template_id_a891d560_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "a891d560",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/partials/Audiobook/AudiobookPlaylist.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/js/components/partials/Audiobook/AudiobookPoster.vue":
/*!******************************************************************!*\
  !*** ./src/js/components/partials/Audiobook/AudiobookPoster.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AudiobookPoster_vue_vue_type_template_id_4dda9ccb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudiobookPoster.vue?vue&type=template&id=4dda9ccb&scoped=true& */ "./src/js/components/partials/Audiobook/AudiobookPoster.vue?vue&type=template&id=4dda9ccb&scoped=true&");
/* harmony import */ var _AudiobookPoster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudiobookPoster.vue?vue&type=script&lang=js& */ "./src/js/components/partials/Audiobook/AudiobookPoster.vue?vue&type=script&lang=js&");
/* harmony import */ var _AudiobookPoster_vue_vue_type_style_index_0_id_4dda9ccb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudiobookPoster.vue?vue&type=style&index=0&id=4dda9ccb&lang=scss&scoped=true& */ "./src/js/components/partials/Audiobook/AudiobookPoster.vue?vue&type=style&index=0&id=4dda9ccb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AudiobookPoster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AudiobookPoster_vue_vue_type_template_id_4dda9ccb_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AudiobookPoster_vue_vue_type_template_id_4dda9ccb_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "4dda9ccb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/partials/Audiobook/AudiobookPoster.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./src/js/components/partials/Audiobook/AudiobookViewer.vue":
/*!******************************************************************!*\
  !*** ./src/js/components/partials/Audiobook/AudiobookViewer.vue ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _AudiobookViewer_vue_vue_type_template_id_7e5ae710_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AudiobookViewer.vue?vue&type=template&id=7e5ae710&scoped=true& */ "./src/js/components/partials/Audiobook/AudiobookViewer.vue?vue&type=template&id=7e5ae710&scoped=true&");
/* harmony import */ var _AudiobookViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AudiobookViewer.vue?vue&type=script&lang=js& */ "./src/js/components/partials/Audiobook/AudiobookViewer.vue?vue&type=script&lang=js&");
/* harmony import */ var _AudiobookViewer_vue_vue_type_style_index_0_id_7e5ae710_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AudiobookViewer.vue?vue&type=style&index=0&id=7e5ae710&lang=scss&scoped=true& */ "./src/js/components/partials/Audiobook/AudiobookViewer.vue?vue&type=style&index=0&id=7e5ae710&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AudiobookViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AudiobookViewer_vue_vue_type_template_id_7e5ae710_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _AudiobookViewer_vue_vue_type_template_id_7e5ae710_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7e5ae710",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/js/components/partials/Audiobook/AudiobookViewer.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NarratorSpeedSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NarratorSpeedSelector.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NarratorSpeedSelector_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudiobookPlayer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPlayer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/partials/Audiobook/AudiobookPlaylist.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./src/js/components/partials/Audiobook/AudiobookPlaylist.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPlaylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudiobookPlaylist.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlaylist.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPlaylist_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/partials/Audiobook/AudiobookPoster.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./src/js/components/partials/Audiobook/AudiobookPoster.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPoster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudiobookPoster.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPoster.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPoster_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/js/components/partials/Audiobook/AudiobookViewer.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./src/js/components/partials/Audiobook/AudiobookViewer.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudiobookViewer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookViewer.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookViewer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue?vue&type=style&index=0&id=448a8a12&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue?vue&type=style&index=0&id=448a8a12&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_NarratorSpeedSelector_vue_vue_type_style_index_0_id_448a8a12_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NarratorSpeedSelector.vue?vue&type=style&index=0&id=448a8a12&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue?vue&type=style&index=0&id=448a8a12&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=style&index=0&id=4bb7505f&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=style&index=0&id=4bb7505f&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPlayer_vue_vue_type_style_index_0_id_4bb7505f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudiobookPlayer.vue?vue&type=style&index=0&id=4bb7505f&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=style&index=0&id=4bb7505f&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=style&index=1&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=style&index=1&lang=scss& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPlayer_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudiobookPlayer.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=style&index=1&lang=scss&");


/***/ }),

/***/ "./src/js/components/partials/Audiobook/AudiobookPlaylist.vue?vue&type=style&index=0&id=a891d560&lang=scss&scoped=true&":
/*!******************************************************************************************************************************!*\
  !*** ./src/js/components/partials/Audiobook/AudiobookPlaylist.vue?vue&type=style&index=0&id=a891d560&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPlaylist_vue_vue_type_style_index_0_id_a891d560_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudiobookPlaylist.vue?vue&type=style&index=0&id=a891d560&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlaylist.vue?vue&type=style&index=0&id=a891d560&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/js/components/partials/Audiobook/AudiobookPoster.vue?vue&type=style&index=0&id=4dda9ccb&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./src/js/components/partials/Audiobook/AudiobookPoster.vue?vue&type=style&index=0&id=4dda9ccb&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPoster_vue_vue_type_style_index_0_id_4dda9ccb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudiobookPoster.vue?vue&type=style&index=0&id=4dda9ccb&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPoster.vue?vue&type=style&index=0&id=4dda9ccb&lang=scss&scoped=true&");


/***/ }),

/***/ "./src/js/components/partials/Audiobook/AudiobookViewer.vue?vue&type=style&index=0&id=7e5ae710&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./src/js/components/partials/Audiobook/AudiobookViewer.vue?vue&type=style&index=0&id=7e5ae710&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_sass_resources_loader_lib_loader_js_clonedRuleSet_12_0_rules_0_use_4_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookViewer_vue_vue_type_style_index_0_id_7e5ae710_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudiobookViewer.vue?vue&type=style&index=0&id=7e5ae710&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/sass-resources-loader/lib/loader.js??clonedRuleSet-12[0].rules[0].use[4]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookViewer.vue?vue&type=style&index=0&id=7e5ae710&lang=scss&scoped=true&");


/***/ }),

/***/ "./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue?vue&type=template&id=448a8a12&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue?vue&type=template&id=448a8a12&scoped=true& ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NarratorSpeedSelector_vue_vue_type_template_id_448a8a12_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NarratorSpeedSelector_vue_vue_type_template_id_448a8a12_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NarratorSpeedSelector_vue_vue_type_template_id_448a8a12_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./NarratorSpeedSelector.vue?vue&type=template&id=448a8a12&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue?vue&type=template&id=448a8a12&scoped=true&");


/***/ }),

/***/ "./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=template&id=4bb7505f&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=template&id=4bb7505f&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPlayer_vue_vue_type_template_id_4bb7505f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPlayer_vue_vue_type_template_id_4bb7505f_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPlayer_vue_vue_type_template_id_4bb7505f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudiobookPlayer.vue?vue&type=template&id=4bb7505f&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=template&id=4bb7505f&scoped=true&");


/***/ }),

/***/ "./src/js/components/partials/Audiobook/AudiobookPlaylist.vue?vue&type=template&id=a891d560&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./src/js/components/partials/Audiobook/AudiobookPlaylist.vue?vue&type=template&id=a891d560&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPlaylist_vue_vue_type_template_id_a891d560_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPlaylist_vue_vue_type_template_id_a891d560_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPlaylist_vue_vue_type_template_id_a891d560_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudiobookPlaylist.vue?vue&type=template&id=a891d560&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlaylist.vue?vue&type=template&id=a891d560&scoped=true&");


/***/ }),

/***/ "./src/js/components/partials/Audiobook/AudiobookPoster.vue?vue&type=template&id=4dda9ccb&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./src/js/components/partials/Audiobook/AudiobookPoster.vue?vue&type=template&id=4dda9ccb&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPoster_vue_vue_type_template_id_4dda9ccb_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPoster_vue_vue_type_template_id_4dda9ccb_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookPoster_vue_vue_type_template_id_4dda9ccb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudiobookPoster.vue?vue&type=template&id=4dda9ccb&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPoster.vue?vue&type=template&id=4dda9ccb&scoped=true&");


/***/ }),

/***/ "./src/js/components/partials/Audiobook/AudiobookViewer.vue?vue&type=template&id=7e5ae710&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./src/js/components/partials/Audiobook/AudiobookViewer.vue?vue&type=template&id=7e5ae710&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookViewer_vue_vue_type_template_id_7e5ae710_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookViewer_vue_vue_type_template_id_7e5ae710_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AudiobookViewer_vue_vue_type_template_id_7e5ae710_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./AudiobookViewer.vue?vue&type=template&id=7e5ae710&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookViewer.vue?vue&type=template&id=7e5ae710&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue?vue&type=template&id=448a8a12&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./_shared_/UI/Audiobooks/NarratorSpeedSelector.vue?vue&type=template&id=448a8a12&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
      directives: [
        {
          name: "click-outside",
          rawName: "v-click-outside",
          value: _vm.closeNarratorSpeed,
          expression: "closeNarratorSpeed",
        },
      ],
      staticClass: "NarratorSpeedSelector d-flex align-items-center",
    },
    [
      _c(
        "button",
        {
          staticClass: "d-flex justify-content-between align-items-center",
          attrs: { type: "button", "data-cy": "toggleShowSpeed" },
          on: {
            click: function ($event) {
              _vm.showSpeed = !_vm.showSpeed
            },
          },
        },
        [
          _c("span", { staticClass: "w-100 text-center" }, [
            _vm._v(_vm._s(_vm.audiobook.track.speed) + "×"),
          ]),
        ]
      ),
      _vm._v(" "),
      _c("transition", { attrs: { name: "slide-fade" } }, [
        _c(
          "ul",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: _vm.showSpeed,
                expression: "showSpeed",
              },
            ],
            staticClass: "p-0 mt-1 shadow",
          },
          [
            _c("li", { staticClass: "p-3 listTitle text-truncate" }, [
              _vm._v(
                "\n                " +
                  _vm._s(_vm.localizations[_vm.lang].narratorSpeed) +
                  "\n            "
              ),
            ]),
            _vm._v(" "),
            _vm._l(_vm.speeds, function (speed, index) {
              return _c(
                "li",
                {
                  key: index,
                  staticClass: "px-3 py-2 text-truncate",
                  class: { isSelected: speed === _vm.audiobook.track.speed },
                  attrs: { "data-cy": "speedInput-" + speed },
                  on: {
                    click: function ($event) {
                      return _vm.trackSelectSpeed(speed)
                    },
                  },
                },
                [
                  _vm._v(
                    "\n                " + _vm._s(speed) + "×\n                "
                  ),
                  speed === 1
                    ? _c("span", { staticClass: "ml-1" }, [_vm._v("(normal)")])
                    : _vm._e(),
                ]
              )
            }),
          ],
          2
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=template&id=4bb7505f&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlayer.vue?vue&type=template&id=4bb7505f&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "AudiobookPlayer" }, [
    _c("div", { staticClass: "container-fluid w-100" }, [
      _c(
        "div",
        { staticClass: "row align-items-center justify-content-center" },
        [
          _c("portal", { attrs: { to: "timing-bar" } }, [
            _c("div", { staticClass: "w-100" }, [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.positionSeek,
                    expression: "positionSeek",
                  },
                ],
                attrs: {
                  type: "range",
                  min: "0",
                  max: _vm.track.audio.duration(),
                  step: "1",
                  "data-cy": "seekRangeInput",
                },
                domProps: { value: _vm.positionSeek },
                on: {
                  change: _vm.sendSeekPosition,
                  mousedown: _vm.pauseSeekPosition,
                  touchstart: _vm.pauseSeekPosition,
                  __r: function ($event) {
                    _vm.positionSeek = $event.target.value
                  },
                },
              }),
            ]),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass:
                  "col-12 text-center mb-5 timing d-flex align-items-center justify-content-center",
              },
              [
                _c("span", { staticClass: "font-monospace" }, [
                  _vm._v(
                    "\n                        " +
                      _vm._s(_vm._f("secondToMMSS")(_vm.positionSeek)) +
                      " /\n                        "
                  ),
                  !_vm.isPreviewMode
                    ? _c(
                        "span",
                        { attrs: { "data-cy": "playerTrackDuration" } },
                        [
                          _vm._v(
                            _vm._s(
                              _vm._f("secondToMMSS")(_vm.track.audio.duration())
                            )
                          ),
                        ]
                      )
                    : _vm._e(),
                ]),
                _vm._v(" "),
                _vm.isPreviewMode && _vm.track.durationInSecondsPreview
                  ? _c("span", { staticClass: "badge badge-inline ml-2" }, [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.localizations[_vm.lang].preview) +
                          "\n                        "
                      ),
                      _c(
                        "b",
                        {
                          staticClass: "font-monospace ml-2",
                          attrs: { "data-cy": "playerPreviewTrackDuration" },
                        },
                        [
                          _vm._v(
                            _vm._s(
                              _vm._f("secondToMMSS")(
                                _vm.track.durationInSecondsPreview
                              )
                            )
                          ),
                        ]
                      ),
                    ])
                  : _vm._e(),
              ]
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-12" }, [
            _c(
              "div",
              {
                staticClass:
                  "row align-items-center justify-content-center justify-content-center",
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "col-auto d-flex align-items-center",
                    class: {
                      "mb-2": !_vm.showPlayerInline,
                      "px-0": _vm.xsDevices,
                      "px-1": _vm.onlyMobileVisible && !_vm.xsDevices,
                    },
                  },
                  [
                    _c("NarratorSpeedSelector", {
                      staticClass: "px-2",
                      class: {
                        "mx-2": !_vm.showPlayerInline,
                        isSticky: _vm.playerIsSticky,
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        class: {
                          "d-none": _vm.showPlayerInline,
                          small: _vm.onlyMobileVisible,
                        },
                        staticStyle: { "min-width": "110px" },
                      },
                      [_vm._v(_vm._s(_vm.narrationSpeedActionText))]
                    ),
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "d-flex align-items-center justify-content-center px-0",
                    class: { "order-3 col-12 my-4": !_vm.showPlayerInline },
                  },
                  [
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: _vm.localizations[_vm.lang].tooltips.rewind,
                            expression: "localizations[lang].tooltips.rewind",
                          },
                        ],
                        staticClass: "flatButton rewind mx-2",
                        attrs: {
                          "data-action": "rewind",
                          "data-cy": "rewindInput",
                        },
                        on: { click: _vm.rewind },
                      },
                      [
                        _c("svg-icon", {
                          attrs: {
                            icon: "baseline-replay_30-24px",
                            width: _vm.buttonSize.rewindAndForward,
                            height: _vm.buttonSize.rewindAndForward,
                          },
                        }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    !_vm.xsDevices
                      ? _c(
                          "button",
                          {
                            directives: [
                              {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value:
                                  _vm.localizations[_vm.lang].tooltips.prev,
                                expression: "localizations[lang].tooltips.prev",
                              },
                            ],
                            staticClass: "flatButton back mx-2",
                            attrs: {
                              "data-action": "back",
                              disabled: _vm.disableBack,
                              "data-cy": "backInput",
                            },
                            on: { click: _vm.back },
                          },
                          [
                            _c("svg-icon", {
                              attrs: {
                                icon: "baseline-skip_previous-24px",
                                width: _vm.buttonSize.nextAndBack,
                                height: _vm.buttonSize.nextAndBack,
                              },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        staticClass: "flatButton play mx-2",
                        attrs: {
                          "data-action": "playOrPause",
                          disabled: _vm.isLoading,
                          "data-cy": "playOrPauseInput",
                        },
                        on: { click: _vm.playOrPauseAudio },
                      },
                      [
                        _vm.isLoading
                          ? _c("LoadingSpinner", {
                              attrs: {
                                width: _vm.buttonSize.loading,
                                height: _vm.buttonSize.loading,
                                notCentered: true,
                                "data-cy": "trackIsLoading",
                              },
                            })
                          : _c("svg-icon", {
                              attrs: {
                                icon: _vm.isPlayBtn
                                  ? "baseline-play_circle_filled-24px"
                                  : "baseline-pause_circle_filled-24px",
                                width: _vm.buttonSize.play,
                                height: _vm.buttonSize.play,
                              },
                            }),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    !_vm.xsDevices
                      ? _c(
                          "button",
                          {
                            directives: [
                              {
                                name: "tooltip",
                                rawName: "v-tooltip",
                                value:
                                  _vm.localizations[_vm.lang].tooltips.next,
                                expression: "localizations[lang].tooltips.next",
                              },
                            ],
                            staticClass: "flatButton mx-2",
                            attrs: {
                              "data-action": "next",
                              disabled: _vm.disableNext,
                              "data-cy": "nextInput",
                            },
                            on: { click: _vm.next },
                          },
                          [
                            _c("svg-icon", {
                              attrs: {
                                icon: "baseline-skip_next-24px",
                                width: _vm.buttonSize.nextAndBack,
                                height: _vm.buttonSize.nextAndBack,
                              },
                            }),
                          ],
                          1
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _c(
                      "button",
                      {
                        directives: [
                          {
                            name: "tooltip",
                            rawName: "v-tooltip",
                            value: _vm.localizations[_vm.lang].tooltips.forward,
                            expression: "localizations[lang].tooltips.forward",
                          },
                        ],
                        staticClass: "flatButton forward mx-2",
                        attrs: {
                          "data-action": "forward",
                          "data-cy": "forwardInput",
                        },
                        on: { click: _vm.forward },
                      },
                      [
                        _c("svg-icon", {
                          attrs: {
                            icon: "baseline-forward_30-24px",
                            width: _vm.buttonSize.rewindAndForward,
                            height: _vm.buttonSize.rewindAndForward,
                          },
                        }),
                      ],
                      1
                    ),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col-auto d-flex align-items-center justify-content-center",
                    class: {
                      "mb-2": !_vm.showPlayerInline,
                      "px-0": _vm.xsDevices,
                      "px-1": _vm.onlyMobileVisible && !_vm.xsDevices,
                    },
                  },
                  [
                    _c("ComponentFavoriteButton", {
                      staticClass: "mx-2",
                      attrs: {
                        width: _vm.buttonSize.favorite,
                        height: _vm.buttonSize.favorite,
                      },
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        class: {
                          "d-none": _vm.showPlayerInline,
                          small: _vm.onlyMobileVisible,
                        },
                      },
                      [_vm._v(_vm._s(_vm.favoriteActionText))]
                    ),
                  ],
                  1
                ),
              ]
            ),
          ]),
        ],
        1
      ),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlaylist.vue?vue&type=template&id=a891d560&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPlaylist.vue?vue&type=template&id=a891d560&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
      staticClass: "AudiobookPlaylist",
      class: { "pt-4 backgroundInMobile": _vm.onlyMobileVisible },
    },
    [
      _c("div", { staticClass: "container-fluid" }, [
        _vm.onlyMobileVisible
          ? _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "col-12" }, [
                _c("h4", { staticClass: "title" }, [
                  _vm._v(_vm._s(_vm.localizations[_vm.lang].tableOfContents)),
                ]),
              ]),
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "ul",
          { staticClass: "row p-0" },
          _vm._l(_vm.playlist, function (track, index) {
            return _c(
              "li",
              {
                key: index,
                staticClass: "col-12 py-4",
                class: [
                  index === _vm.currentTrackIndex ? "isSelect" : "",
                  !track.file ? "disabled" : "",
                ],
                attrs: { "data-cy": "track-" + track.chapter },
                on: {
                  click: function ($event) {
                    track.file ? _vm.playChapter(index) : ""
                  },
                },
              },
              [
                _c("div", { staticClass: "d-flex align-items-center pb-2" }, [
                  _c(
                    "div",
                    { staticClass: "d-flex align-items-center" },
                    [
                      _c("span", [_vm._v(_vm._s(track.chapter))]),
                      _vm._v(" "),
                      index === _vm.currentTrackIndex
                        ? _c("svg-icon", {
                            staticClass: "ml-2",
                            attrs: {
                              icon: "baseline-volume_up-24px",
                              width: "16px",
                              height: "16px",
                              "data-cy": "listenTrack-" + track.chapter,
                            },
                          })
                        : _vm._e(),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "ml-auto d-flex align-items-center" },
                    [
                      _vm.isPreviewMode && track.durationInSecondsPreview
                        ? _c(
                            "span",
                            { staticClass: "badge badge-inline mr-2" },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(_vm.localizations[_vm.lang].preview) +
                                  "\n                            "
                              ),
                              _c(
                                "b",
                                {
                                  staticClass: "font-monospace ml-2",
                                  attrs: {
                                    "data-cy":
                                      "previewPlaylistTrackDuration-" +
                                      track.chapter,
                                  },
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(
                                        _vm._f("secondToMMSS")(
                                          track.durationInSecondsPreview
                                        )
                                      ) +
                                      "\n                            "
                                  ),
                                ]
                              ),
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.showTrackDuration(track)
                        ? _c(
                            "span",
                            {
                              staticClass: "font-monospace",
                              attrs: {
                                "data-cy":
                                  "playlistTrackDuration-" + track.chapter,
                              },
                            },
                            [
                              _vm._v(
                                "\n                            " +
                                  _vm._s(track.duration) +
                                  "\n                        "
                              ),
                            ]
                          )
                        : _vm._e(),
                    ]
                  ),
                ]),
                _vm._v(" "),
                _c("h4", { staticClass: "mb-0" }, [
                  _vm._v(_vm._s(track.title)),
                ]),
              ]
            )
          }),
          0
        ),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPoster.vue?vue&type=template&id=4dda9ccb&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookPoster.vue?vue&type=template&id=4dda9ccb&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
      staticClass: "AudiobookPoster w-100 px-3 d-flex align-items-center",
      class: { "flex-column": _vm.setLikeColumn },
    },
    [
      _c("div", [
        _c("div", { staticClass: "image-container mb-3" }, [
          _c("img", {
            staticClass: "shadow",
            attrs: { src: _vm.publication.cover, alt: _vm.title },
          }),
        ]),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "w-100" },
        [
          _c("h4", { staticClass: "my-3 px-2 text-center" }, [
            _vm._v(
              _vm._s(_vm.currentTrack.chapter) +
                ": " +
                _vm._s(_vm.currentTrack.title)
            ),
          ]),
          _vm._v(" "),
          _vm.narrators
            ? _c("h5", { staticClass: "my-3 px-2 text-center" }, [
                _vm._v(
                  "\n            " +
                    _vm._s(_vm.localizations[_vm.lang].narratedBy) +
                    ": " +
                    _vm._s(_vm.narrators) +
                    "\n        "
                ),
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("portal-target", {
            staticClass: "col-12 mb-2",
            attrs: { name: "timing-bar" },
          }),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookViewer.vue?vue&type=template&id=7e5ae710&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./src/js/components/partials/Audiobook/AudiobookViewer.vue?vue&type=template&id=7e5ae710&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "AudiobookViewer", style: _vm.borderTop }, [
    _c(
      "div",
      {
        staticClass: "pt-5",
        class: { "centerOnDektop h-100": _vm.centerOnDektop },
      },
      [
        _c(
          "div",
          { ref: "audiobookPoster" },
          [
            _c("AudiobookPoster", {
              attrs: { currentTrack: _vm.currentTrack },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            ref: "audiobookPlayer",
            staticClass: "py-4 playerContainer",
            class: { shadow: _vm.playerIsSticky },
          },
          [
            _c("AudiobookPlayer", {
              attrs: {
                track: _vm.track,
                index: _vm.track.index,
                totalIndex: _vm.totalIndex,
                playerIsSticky: _vm.playerIsSticky,
                isLatestPreviewTrack: _vm.isLatestPreviewTrack,
              },
              on: {
                playtrack: _vm.play,
                pausetrack: _vm.pause,
                rewindtrack: _vm.rewind,
                forwardtrack: _vm.forward,
                nexttrack: _vm.next,
                backtrack: _vm.back,
                setseektrack: _vm.setSeek,
                pauseseekposition: _vm.pauseSeekPosition,
              },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _vm.onlyMobileVisible
          ? _c("div", [_c("portal-target", { attrs: { name: "playlist" } })], 1)
          : _vm._e(),
        _vm._v(" "),
        _c(
          "portal",
          { attrs: { to: "playlist" } },
          [
            _c("AudiobookPlaylist", {
              attrs: {
                playlist: _vm.audiobook.playlist,
                currentTrackIndex: _vm.track.index,
              },
              on: { playtrack: _vm.play },
            }),
          ],
          1
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
//# sourceMappingURL=Audiobook.75e1328792869dad.js.map