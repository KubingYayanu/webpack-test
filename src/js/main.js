/* src/js/main.js －　寫一些 jQuery 效果 */
// import '../css/style.css'; //本回合未使用
// import '../css/buttons.css'; //本回合未使用
import '../scss/_colors.scss'; // 加入潮潮的scss
import '../scss/style.scss'; // 加入潮潮的scss
import '../scss/buttons.scss'; // 加入潮潮的scss

import {myButton, myDesc} from './init';

myDesc.hide();
myButton.on("click", function(e) {
  myDesc.toggle();
});

const log = (str) => {console.log(str)}
log(123);