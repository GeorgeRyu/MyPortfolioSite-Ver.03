// SASS
import style from "../sass/app.scss";

// NODE MODULES

// MODULES
import frontPageAnimation from "./modules/frontPageAnimation";
import fadeMover from "./modules/fadeMover";
import "./modules/main";

(function($) {
    fadeMover();
    frontPageAnimation();
})(jQuery);
