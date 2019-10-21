/* src/js/main.js －　寫一些 jQuery 效果 */

import 'jquery';
import 'bootstrap';

import '../scss/_colors.scss';
import '../scss/style.scss';
import '../scss/buttons.scss';

import {myButton, myDesc} from './init';

myDesc.hide();
myButton.on("click", function(e) {
  myDesc.toggle();
});

const log = (str) => {console.log(str)}
log(123);