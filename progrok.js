//TODO make RGB class
  //RGBObj = {};
  var RGB = function () {
    this.initFromComponents = 0;
    this.initFromObj = 1;
    this.initFromString = 2;
  }
//TODO

//Now the Progrok class
var Progrok = Progrok || {};

Progrok.IS_WEBKIT = 'WebkitAppearance' in document.documentElement.style;

Progrok.RGB_STR_REGEX = /^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/;

Progrok.RGB_CHANGE_VELOCITY = 10; //increments of 10

Progrok.ANIMATE_INTERVAL_PERIOD_TIME = 10; //10ms

Progrok.INCR_COLORS = {};

//around 'palegreen'
Progrok.INCR_COLOR.GOOD_COLOR = {
  r: 150,
  g: 250,
  b: 150
};

//around 'gold'
Progrok.INCR_COLOR.WARN_COLOR = {
   r: 260,
   g: 220,
   b: 0
 };

//around 'tomato'
Progrok.INCR_COLOR.BAD_COLOR = {
    r: 220,
    g: 100,
    b: 70
  };

//map of (selector -> rule #) in bar_color_sheet
Progrok.BAR_SHEET_SELECTORS = {};
Progrok.BAR_SELECTORS_COUNT = 0;

Progrok.init = function (user_obj) {

  Progrok.BAR_STYLE = document.createElement('style');

  document.head.appendChild(Progrok.BAR_STYLE);

  Progrok.BAR_COLOR_SHEET = Progrok.BAR_STYLE.sheet;

  //TODO stuff with user_obj
};

Progrok.calcBarColor = function (perc, round_num, end_is_good) {
  //default arguments
  round_num typeof round_num === 'undefined' ? 1 : round_num;
  end_is_good = typeof end_is_good === 'undefined' ? true : end_is_good;
}
