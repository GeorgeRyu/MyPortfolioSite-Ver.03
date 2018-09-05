// NODE MODULES
import {ScrollMagic} from "scrollmagic/scrollmagic/uncompressed/ScrollMagic";

export default function() {
    (function($) {

        var controller = new ScrollMagic.Controller();
    
        // STRETCH TITLE UNDER BORDER IN FRONT PAGE
        var stretch1 = new ScrollMagic.Scene({
            triggerElement: '#stretch1',
        })
        .setClassToggle('#stretch1', 'stretch')
        .addTo(controller);
    
        var stretch2 = new ScrollMagic.Scene({
            triggerElement: '#stretch2',
        })
        .setClassToggle('#stretch2', 'stretch')
        .addTo(controller);
    
        var stretch3 = new ScrollMagic.Scene({
            triggerElement: '#stretch3',
        })
        .setClassToggle('#stretch3', 'stretch')
        .addTo(controller);
    
    
        // ANIMATION OF EACH WORK ITEMS
        var	clientWidth = window.innerWidth;
    
        if(clientWidth < 768) {
    
    
    
            // OPNING ANIMATION
                var nav = $('.menu-content'),
                    hi = $('.greetig-1'),
                    first = $('.ryu'),
                    last = $('.taka'),
                    rac = $('.rectangle-job'),
                    job = $('.text-job'),
                    scroll = $('.scroll'),
                    gauge = $('#gauge');
                    tl = new TimelineLite({paused: false}),
    
                tl
                    .to(gauge, .6, {height: 0, ease:Power2.easeOut}, '+=.6')
                    .to(hi, 0.8, {y: 0, x: 0, autoAlpha: 1, ease:Power2.easeOut})
                    .staggerTo(first, 0.3, {width: '11%', ease:Power2.easeOut}, 0.1, '-=.3')
                    .staggerTo(last, 0.3, {width: '11%', ease:Power2.easeOut}, 0.1, '-=.3')
                    .to(rac, 0.4, {width: '100%', ease:Power2.easeOut}, '-=.4')
                    .to(rac, 0.1, {left: "auto", right: 0})
                    .to(job, 0.1, {opacity: 1}, '-=0.1')
                    .to(rac, 0.4, {width: 0, ease:Power2.easeOut})
                    .add('nav')
                    .to(nav, 0.6, {right: '6%', autoAlpha: 1, ease:Power2.easeIn}, '-=.6')
                    .to(scroll, 0.6, {autoAlpha: 1, ease:Power2.easeIn}, 'nav-=.6');
    
            var titleContact = new ScrollMagic.Scene({
                triggerElement: '#contact h2',
                duration: 300,
                triggerHook:0.8
            })
            .setTween('#contact h2', {opacity: 1, y: '0px'})
            // .addIndicators({
            // 	name: 'contactTitle',
            // 	colorTrigger: 'black',
            // 	colorStart: '#75c695',
            // 	colorEnd: 'pink'
            // })
            .addTo(controller);
    
    
            var mainTextContent = new ScrollMagic.Scene({
                triggerElement: '#work',
                duration: 200,
                triggerHook:0.9
            })
            .setTween('.main-view', {opacity: 0, scale: .95})
            // .addIndicators({
            // 	name: 'contactTitle',
            // 	colorTrigger: 'black',
            // 	colorStart: '#75c695',
            // 	colorEnd: 'pink'
            // })
            .addTo(controller);
    
    
            var addBlur = new ScrollMagic.Scene({
                triggerElement: '#work',
                triggerHook:0.8
            })
            .setClassToggle('.main-view', 'add-blur')
            .addTo(controller);
    
    
            var workImage1 = new ScrollMagic.Scene({
                    triggerElement: '.front-page-1',
                    triggerHook: 0.9
                }).on('start', function () {
    
                    var rectangle1 = $('.rectangle-01'),
                        frontPage1 = $('.front-page-1'),
                        line1 = $('.work1 .type'),
                        line2 = $('.work1 .title-work'),
                        line3 = $('.work1 .explan-s'),
                        bgLink = $('.work1 .link-work-sp .bg-link'),
                        textLink = $('.work1 .link-work-sp .text-link'),
                        frame = $('.work1').parent(),
                        tl = new TimelineLite();
    
                    tl
                        .to(rectangle1, .3, {x: '0%', skewX: 0, ease:Power4.easeOut})
                        .to(frontPage1, .6, {x: '0%', autoAlpha: 1}, '+=1')
                        .to(rectangle1, .3, {autoAlpha: 0, ease:Power4.easeOut}, '-=.7')
                        .to(bgLink, .6, {x: '0%', skewX: 0, ease: Power2.easeOut}, '-=.4')
                        .to(textLink, .6, {x: '0%', autoAlpha: 1, ease:Power2.easeOut}, '-=.4')
                        .add('line1')
                        .to(line1, .6, {x: 0, autoAlpha: 1, ease:Power4.easeOut}, '-=.2')
                        .to(line2, .6, {x: 0, autoAlpha: 1, ease:Power4.easeOut}, 'line1')
                        .to(line3, .6, {x: 0, autoAlpha: 1, ease:Power4.easeOut}, 'line1+=.2')
                        .to(frame, .4, {backgroundColor: '#ffffff', boxShadow: '4px 4px 20px 0px rgba(0, 0, 0, 0.05)', ease:Power2.easeOut});
                })
                .addTo(controller);
    
    
            var workImage2 = new ScrollMagic.Scene({
                    triggerElement: '.front-page-2',
                    triggerHook: 0.9
                }).on('start', function () {
    
                    var rectangle1 = $('.rectangle-02'),
                        frontPage1 = $('.front-page-2'),
                        line1 = $('.work2 .type'),
                        line2 = $('.work2 .title-work'),
                        line3 = $('.work2 .explan-s'),
                        bgLink = $('.work2 .link-work-sp .bg-link'),
                        textLink = $('.work2 .link-work-sp .text-link'),
                        frame = $('.work2').parent(),
                        tl = new TimelineLite();
    
                    tl
                        .to(rectangle1, .3, {x: '0%', skewX: 0, ease:Power4.easeOut})
                        .to(frontPage1, .6, {x: '0%', autoAlpha: 1}, '+=1')
                        .to(rectangle1, .3, {autoAlpha: 0, ease:Power4.easeOut}, '-=.7')
                        .to(bgLink, .6, {x: '0%', skewX: 0, ease: Power2.easeOut}, '-=.4')
                        .to(textLink, .6, {x: '0%', autoAlpha: 1, ease:Power2.easeOut}, '-=.4')
                        .add('line1')
                        .to(line1, .6, {x: 0, autoAlpha: 1, ease:Power4.easeOut}, '-=.2')
                        .to(line2, .6, {x: 0, autoAlpha: 1, ease:Power4.easeOut}, 'line1')
                        .to(line3, .6, {x: 0, autoAlpha: 1, ease:Power4.easeOut}, 'line1+=.2')
                        .to(frame, .4, {backgroundColor: '#ffffff', boxShadow: '4px 4px 20px 0px rgba(0, 0, 0, 0.05)', ease:Power2.easeOut});
                })
                // .addIndicators({
                // 	name: 'contactTitle',
                // 	colorTrigger: 'black',
                // 	colorStart: '#75c695',
                // 	colorEnd: 'pink'
                // })
                .addTo(controller);
    
    
            var workImage3 = new ScrollMagic.Scene({
                    triggerElement: '.front-page-3',
                    triggerHook: 0.9
                }).on('start', function () {
    
                    var rectangle1 = $('.rectangle-03'),
                        frontPage1 = $('.front-page-3'),
                        line1 = $('.work3 .type'),
                        line2 = $('.work3 .title-work'),
                        line3 = $('.work3 .explan-s'),
                        bgLink = $('.work3 .link-work-sp .bg-link'),
                        textLink = $('.work3 .link-work-sp .text-link'),
                        frame = $('.work3').parent(),
                        tl = new TimelineLite();
    
                    tl
                        .to(rectangle1, .3, {x: '0%', skewX: 0, ease:Power4.easeOut})
                        .to(frontPage1, .6, {x: '0%', autoAlpha: 1}, '+=1')
                        .to(rectangle1, .3, {autoAlpha: 0, ease:Power4.easeOut}, '-=.7')
                        .to(bgLink, .6, {x: '0%', skewX: 0, ease: Power2.easeOut}, '-=.4')
                        .to(textLink, .6, {x: '0%', autoAlpha: 1, ease:Power2.easeOut}, '-=.4')
                        .add('line1')
                        .to(line1, .6, {x: 0, autoAlpha: 1, ease:Power4.easeOut}, '-=.2')
                        .to(line2, .6, {x: 0, autoAlpha: 1, ease:Power4.easeOut}, 'line1')
                        .to(line3, .6, {x: 0, autoAlpha: 1, ease:Power4.easeOut}, 'line1+=.2')
                        .to(frame, .4, {backgroundColor: '#ffffff', boxShadow: '4px 4px 20px 0px rgba(0, 0, 0, 0.05)', ease:Power2.easeOut});
                })
                // .addIndicators({
                // 	name: 'contactTitle',
                // 	colorTrigger: 'black',
                // 	colorStart: '#75c695',
                // 	colorEnd: 'pink'
                // })
                .addTo(controller);
    
    
        } else {
    
                var	clientWidths = window.innerWidth;
    
                if(clientWidths < 768) {
                    $('body').css('display', 'none');
                    console.log('hello');
                }
    
    
        // OPNING ANIMATION
            var nav = $('.menu-content'),
                hi = $('.greetig-1'),
                ch = $('.ch'),
                rac = $('.rectangle-job'),
                job = $('.text-job'),
                scroll = $('.scroll'),
                gauge = $('#gauge');
                tl = new TimelineLite({paused: false}),
    
            tl
                .to(gauge, .6, {height: 0, ease:Power2.easeOut}, '+=.6')
                .to(hi, 0.8, {y: 0, x: 0, autoAlpha: 1, ease:Power2.easeOut})
                .staggerTo(ch, 0.3, {x : 0, ease:Power2.easeOut}, 0.1, '-=.3')
                .to(rac, 0.4, {width: '100%', ease:Power2.easeOut}, '-=.4')
                .to(rac, 0.1, {left: "auto", right: 0})
                .to(job, 0.1, {opacity: 1}, '-=0.1')
                .to(rac, 0.4, {width: 0, ease:Power2.easeOut})
                .add('nav')
                .to(nav, 0.6, {right: '6%', autoAlpha: 1, ease:Power2.easeIn}, '-=.6')
                .to(scroll, 0.6, {autoAlpha: 1, ease:Power2.easeIn}, 'nav-=.6');
    
        var titleContact = new ScrollMagic.Scene({
            triggerElement: '#contact h2',
            duration: 300,
            triggerHook:0.8
        })
        .setTween('#contact h2', {opacity: 1, y: '0px'})
        // .addIndicators({
        // 	name: 'contactTitle',
        // 	colorTrigger: 'black',
        // 	colorStart: '#75c695',
        // 	colorEnd: 'pink'
        // })
        .addTo(controller);
    
    
            var mainTextContent = new ScrollMagic.Scene({
                triggerElement: '#work',
                duration: 1200,
                triggerHook:0.8
            })
            .setTween('.senter-object', {opacity: 0, scale: .95})
            // .addIndicators({
            // 	name: 'contactTitle',
            // 	colorTrigger: 'black',
            // 	colorStart: '#75c695',
            // 	colorEnd: 'pink'
            // })
            .addTo(controller);
    
    
            var scrollAppear = new ScrollMagic.Scene({
                triggerElement: '#work',
                duration: 300,
                triggerHook:0.8
            })
            .setTween('.scroll', {opacity: 0})
            .addTo(controller);
    
    
            var addBlur = new ScrollMagic.Scene({
                triggerElement: '#work'
            })
            .setClassToggle('#senter-object', 'add-blur')
            .addTo(controller);
    
    
            var workImage1 = new ScrollMagic.Scene({
                triggerElement: '.front-page-1',
                triggerHook: 0.9
            }).on('start', function () {
    
                var heightImg = $('.front-page-1').parent(),
                    mainImg = $('.front-page-1'),
                    heightRectangle = $('.rectangle-01'),
                    line1 = $('.work1 .type'),
                    line2 = $('.work1 .title-work'),
                    line3 = $('.work1 .explan-s'),
                    tl = new TimelineLite();
    
                tl
                    .to(heightImg, .4, {height: '32vw', ease:Power2.easeIn})
                    .to(mainImg, 1, {scale: 1, ease:Power2.easeIn}, '-=.2')
                    .to(heightRectangle, .4, {height: '120%', ease:Power2.easeIn}, '-=.2')
                    .add('line1')
                    .to(line1, .8, {x: 0, autoAlpha: 1, ease:Power4.easeOut})
                    .to(line2, .8, {x: 0, autoAlpha: 1, ease:Power4.easeOut}, 'line1+=.3')
                    .to(line3, .8, {x: 0, autoAlpha: 1, ease:Power4.easeOut}, 'line1+=.6');
            })
            // .addIndicators({
            // 	name: 'contactTitle',
            // 	colorTrigger: 'black',
            // 	colorStart: '#75c695',
            // 	colorEnd: 'pink'
            // })
            .addTo(controller);
    
    
            var workImage2 = new ScrollMagic.Scene({
                triggerElement: '.front-page-2',
                triggerHook: 0.9
            }).on('start', function () {
    
                var heightImg = $('.front-page-2').parent(),
                    mainImg = $('.front-page-2'),
                    heightRectangle = $('.rectangle-02'),
                    line1 = $('.work2 .type'),
                    line2 = $('.work2 .title-work'),
                    line3 = $('.work2 .explan-s'),
                    tl = new TimelineLite();
    
                tl
                    .to(heightImg, .4, {height: '32vw', ease:Power2.easeIn})
                    .to(mainImg, 1, {scale: 1, ease:Power2.easeIn}, '-=.2')
                    .to(heightRectangle, .4, {height: '60%', ease:Power2.easeIn}, '-=.2')
                    .add('line1')
                    .to(line1, .8, {x: 0, autoAlpha: 1, ease:Power4.easeOut})
                    .to(line2, .8, {x: 0, autoAlpha: 1, ease:Power4.easeOut}, 'line1+=.3')
                    .to(line3, .8, {x: 0, autoAlpha: 1, ease:Power4.easeOut}, 'line1+=.6');
            })
            // .addIndicators({
            // 	name: 'contactTitle',
            // 	colorTrigger: 'black',
            // 	colorStart: '#75c695',
            // 	colorEnd: 'pink'
            // })
            .addTo(controller);
    
    
            var workImage3 = new ScrollMagic.Scene({
                triggerElement: '.front-page-3',
                triggerHook: 0.9
            }).on('start', function () {
    
                var heightImg = $('.front-page-3').parent(),
                    mainImg = $('.front-page-3'),
                    heightRectangle = $('.rectangle-03'),
                    line1 = $('.work3 .type'),
                    line2 = $('.work3 .title-work'),
                    line3 = $('.work3 .explan-s'),
                    tl = new TimelineLite();
    
                tl
                    .to(heightImg, .4, {height: '32vw', ease:Power2.easeIn})
                    .to(mainImg, 1, {scale: 1, ease:Power2.easeIn}, '-=.2')
                    .to(heightRectangle, .4, {height: '140%', ease:Power2.easeIn}, '-=.2')
                    .add('line1')
                    .to(line1, .8, {x: 0, autoAlpha: 1, ease:Power4.easeOut})
                    .to(line2, .8, {x: 0, autoAlpha: 1, ease:Power4.easeOut}, 'line1+=.3')
                    .to(line3, .8, {x: 0, autoAlpha: 1, ease:Power4.easeOut}, 'line1+=.6');
            })
            // .addIndicators({
            // 	name: 'contactTitle',
            // 	colorTrigger: 'black',
            // 	colorStart: '#75c695',
            // 	colorEnd: 'pink'
            // })
            .addTo(controller);
    
    
            // UP SCROLL IN FRONT PAGES
            var frontPage1 = new ScrollMagic.Scene({
                triggerElement: '.front-page-1',
                duration: '140%',
                triggerHook:0.7
            })
            .setTween('.front-page-1', {y: -140})
            // .addIndicators({
            // 	name: 'duration1',
            // 	colorTrigger: 'black',
            // 	colorStart: '#75c695',
            // 	colorEnd: 'pink'
            // })
            .addTo(controller);
    
            var frontPage2 = new ScrollMagic.Scene({
                triggerElement: '.front-page-2',
                duration: '140%',
                triggerHook:0.6
            })
            .setTween('.front-page-2', {y: -140})
            // .addIndicators({
            // 	name: 'duration2',
            // 	colorTrigger: 'black',
            // 	colorStart: '#75c695',
            // 	colorEnd: 'pink'
            // })
            .addTo(controller);
    
            var frontPage3 = new ScrollMagic.Scene({
                triggerElement: '.front-page-3',
                duration: '140%',
                triggerHook:0.6
            })
            .setTween('.front-page-3', {y: -140})
            // .addIndicators({
            // 	name: 'duration3',
            // 	colorTrigger: 'black',
            // 	colorStart: '#75c695',
            // 	colorEnd: 'pink'
            // })
            .addTo(controller);
    
    
            var rectangle1 = new ScrollMagic.Scene({
                triggerElement: '.work1',
                duration: '120%',
                triggerHook:0.9
            })
            .setTween('.rectangle-01', {y: '-90px'})
            // .addIndicators({
            // 	name: 'duration1',
            // 	colorTrigger: 'black',
            // 	colorStart: '#75c695',
            // 	colorEnd: 'pink'
            // })
            .addTo(controller);
    
            var rectangle2 = new ScrollMagic.Scene({
                triggerElement: '.work2',
                duration: '120%',
                triggerHook:0.9
            })
            .setTween('.rectangle-02', {top: '200px'})
            // .addIndicators({
            // 	name: 'duration1',
            // 	colorTrigger: 'black',
            // 	colorStart: '#75c695',
            // 	colorEnd: 'pink'
            // })
            .addTo(controller);
    
    
            var rectangle3 = new ScrollMagic.Scene({
                triggerElement: '.work3',
                duration: '120%',
                triggerHook:0.9
            })
            .setTween('.rectangle-03', {top: '-160px'})
            // .addIndicators({
            // 	name: 'duration1',
            // 	colorTrigger: 'black',
            // 	colorStart: '#75c695',
            // 	colorEnd: 'pink'
            // })
            .addTo(controller);
    
        }
    
    })(jQuery);
}


