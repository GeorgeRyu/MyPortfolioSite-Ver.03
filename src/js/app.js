// SASS
import style from "../sass/app.scss";

// NODE MODULES
import {TweenMax} from "gsap/TweenMax";
import {ScrollMagic} from "scrollmagic/scrollmagic/uncompressed/ScrollMagic";

// MODULES
import frontPageAnimation from "./modules/frontPageAnimation";
import sub from "./modules/sub";

(function($) {
    frontPageAnimation();
    sub();
})(jQuery);
