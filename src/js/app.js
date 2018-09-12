// SASS
import style from "../sass/app.scss";

// NODE MODULES
// import { TweenMax } from 'gsap';
// import CustomEase from 'gsap/CustomEase';
// import * as ScrollMagic from 'ScrollMagic';
// import 'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min';
// import "ScrollMagic/scrollmagic/minified/plugins/debug.addIndicators.min.js";

// MODULES
import frontPageAnimation from "./modules/frontPageAnimation";
import sub from "./modules/sub";

(function($) {
    frontPageAnimation();
    sub();
})(jQuery);
