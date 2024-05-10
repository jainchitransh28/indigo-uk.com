

        jQuery(function() {
            var $hero = jQuery('#m-1572797339117');
            var $module = jQuery('#m-1572797339117').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $hero = jQuery('#m-1572797339097');
            var $module = jQuery('#m-1572797339097').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $hero = jQuery('#m-1576582935739');
            var $module = jQuery('#m-1576582935739').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $hero = jQuery('#m-1624029691842');
            var $module = jQuery('#m-1624029691842').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $hero = jQuery('#m-1574355715421');
            var $module = jQuery('#m-1574355715421').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $hero = jQuery('#m-1610717830794');
            var $module = jQuery('#m-1610717830794').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $hero = jQuery('#m-1572797339152');
            var $module = jQuery('#m-1572797339152').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $hero = jQuery('#m-1576582935823');
            var $module = jQuery('#m-1576582935823').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $hero = jQuery('#m-1572797339138');
            var $module = jQuery('#m-1572797339138').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $hero = jQuery('#m-1576582935795');
            var $module = jQuery('#m-1576582935795').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $hero = jQuery('#m-1624367641206');
            var $module = jQuery('#m-1624367641206').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $hero = jQuery('#m-1624455979812');
            var $module = jQuery('#m-1624455979812').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $hero = jQuery('#m-1624455979890');
            var $module = jQuery('#m-1624455979890').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $hero = jQuery('#m-1624455798318');
            var $module = jQuery('#m-1624455798318').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $hero = jQuery('#m-1576584868703');
            var $module = jQuery('#m-1576584868703').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $hero = jQuery('#m-1624455798382');
            var $module = jQuery('#m-1624455798382').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $hero = jQuery('#m-1624455913320');
            var $module = jQuery('#m-1624455913320').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $hero = jQuery('#m-1624455913293');
            var $module = jQuery('#m-1624455913293').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $hero = jQuery('#m-1624455913309');
            var $module = jQuery('#m-1624455913309').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    
        jQuery(function() {
            var $hero = jQuery('#m-1572797339119');
            var $module = jQuery('#m-1572797339119').children('.module');

            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            if(mode == 'dev') {
                $hero.children('.hero-link').hide();
            }

            var height = jQuery.trim($module.attr('data-height'));
            if(height == undefined || height == '') {
                $hero.attr('style', 'height: auto!important');
                jQuery(window).resize(function(){
                    $hero.attr('style', 'height: auto!important');
                });
            } else {
                $hero.removeAttr('style');
            }

            var effect = $module.attr('data-effect');
            var transition = $module.attr('data-transition');

            if(effect == 'effect-zoom') {   
                $module.parent().addClass(effect);  

                setTimeout(function() {
                    var backgroundImage = $module.parent().css('background-image');
                    var backgroundSize = $module.parent().css('background-size');
                    var backgroundPosition = $module.parent().css('background-position');
                    $module.siblings('.gf_hero-bg-wrap').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    })
                    $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
                        'background-image'      : 'inherit',
                        'background-size'       : 'inherit',
                        'background-position'   : 'inherit',
                        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
                        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
                        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
                        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
                        'transition'            : 'transform ' + transition + 's ease-in-out'
                    });
                }, 300);
            }

            if($module.attr('data-fixedMode') == '1'){
                $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

                jQuery(window).resize(function(){
                    var backgroundImage =  $module.parent().css('background-image');
                    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
                });
            } else {
                $module.parent().removeAttr('style');
            }
        });
    jQuery(function() {
  var $hero = jQuery('#m-1579536562281');
  var $module = jQuery('#m-1579536562281').children('.module');

  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $heroLink = $hero.children('.hero-link');
  if(mode == 'dev' && $heroLink.length > 0) {
   $hero.children('.hero-link').hide();
  }
  if (mode == 'production' && $heroLink.length > 0) {
    $module.off('click.openLink').on('click.openLink', function(e) {
      var $target = jQuery(e.target);
      if ($target.length > 0){
        var linkTarget = typeof $target.attr('href') !== "undefined" ? $target.attr('href') : "";
        if (linkTarget == "") {
          var link = typeof $heroLink.attr('href') !== "undefined" ? $heroLink.attr('href') : "";
          var newTab = typeof $heroLink.attr('target') !== "undefined" ? $heroLink.attr('target') : "";
          if (link != "") {
            if (newTab == "") {
              window.location.href = link;
            } else {
              window.open(link, newTab);
            }
          }
        }
      };
    })
  }

  var height = jQuery.trim($module.attr('data-height'));
  if(height == undefined || height == '') {
    $hero.attr('style', 'height: auto!important');
    jQuery(window).resize(function(){
      $hero.attr('style', 'height: auto!important');
    });
  } else {
    $hero.removeAttr('style');
  }

  var effect = $module.attr('data-effect');
  var transition = $module.attr('data-transition');

  if(effect == 'effect-zoom') {   
    $module.parent().addClass(effect);  

    setTimeout(function() {
      var backgroundImage = $module.parent().css('background-image');
      var backgroundSize = $module.parent().css('background-size');
      var backgroundPosition = $module.parent().css('background-position');
      $module.siblings('.gf_hero-bg-wrap').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      })
      $module.siblings('.gf_hero-bg-wrap').children('.gf_hero-bg').css({
        'background-image'      : 'inherit',
        'background-size'       : 'inherit',
        'background-position'   : 'inherit',
        '-webkit-transition'    : 'transform ' + transition + 's ease-in-out',
        '-moz-transition'       : 'transform ' + transition + 's ease-in-out',
        '-ms-transition'        : 'transform ' + transition + 's ease-in-out',
        '-o-transition'         : 'transform ' + transition + 's ease-in-out',
        'transition'            : 'transform ' + transition + 's ease-in-out'
      });
    }, 300);
  }

  if($module.attr('data-fixedMode') == '1'){
    $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');

    jQuery(window).resize(function(){
      var backgroundImage =  $module.parent().css('background-image');
      $module.parent().attr('style', 'padding-top: 0px!important; padding-bottom: 0px!important; height: auto!important; background-image: none!important;max-width: 100%!important;');
    });
  } else {
    $module.parent().removeAttr('style');
  }
});
        jQuery(function() {
            var $module = jQuery('#m-1574958069135').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1574958069148').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1574958069085').children('.module');
        }); 
    
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1624374576387').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1624374576387').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1624374576387');
      if ($bkLiquid && $bkLiquid.length > 0) {
          var $settings = $bkLiquid.find('.settings');
          try {
              var name = '';
              var imageUrl = '';
              settings = JSON.parse($settings.html());
              for (var i = 0; i < settings.length; i++) {
                  if (settings[i].name == 'name') {
                      name = settings[i].default_value
                  }
                  if (settings[i].name == 'image') {
                      imageUrl = settings[i].default_value
                  }
              }
              if (imageUrl != '') {
                  flag = false;
                  jQuery('#m-1624374576387').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1624374576387').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1624374576387').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
        jQuery(function() {
            var $module = jQuery('#m-1571175356173').children('.module');
        
            var token_test = '2269641474.1677ed0.63eaaf968720481a866e9263fc8639e1';
            var token = $module.data('token') != '' ? $module.data('token') : token_test;
            var num_photos = parseInt($module.data('photos')) > 1 ? parseInt($module.data('photos')) : 1;
            var num_columns = parseInt($module.data('columns')) > 1 ? parseInt($module.data('columns')) : num_photos;
            var padding = parseInt($module.data('padding')) > 0 ? parseInt($module.data('padding')) : 0;

            var instaTag = jQuery.trim($module.data('hashtag')) != '' ? jQuery.trim($module.data('hashtag')) : '';

            if(instaTag != '') {
                var instaUrl = 'https://api.instagram.com/v1/tags/' + instaTag + '/media/recent';
            } else {
                var instaUrl = 'https://api.instagram.com/v1/users/self/media/recent';
            }

            jQuery.ajax({
                url: instaUrl,
                dataType: 'jsonp',
                type: 'GET',
                data: {
                    access_token: token, 
                    count: num_photos
                },
                success: function(data) {
                    var html = '';
                    if(data.data != undefined) {
                        for(var i = 0; i < data.data.length; i++) {
                            if(i % num_columns == 0) {
                                html += '<div class="gf_clearfix"></div>';
                            }
                            html += '<li><a href="' + data.data[i].link + '" target="_blank" style="padding: ' + padding + 'px;">';
                                html+= '<img src="'+ data.data[i]['images'].standard_resolution.url + '" alt="' + data.data[i].caption + '" />';
                            html += '</a></li>';
                        }
                        $module.html(html).hide();
                        $module.find('li').css('width', (100/num_columns)+'%');

                        $module.closest('.module-wrap').css('marginLeft', padding * -1);
                        $module.closest('.module-wrap').css('marginRight', padding * -1);
                    }
                    $module.fadeIn();
                },
                error: function(data){  
                    console.log(data);
                }
            });
        });
    