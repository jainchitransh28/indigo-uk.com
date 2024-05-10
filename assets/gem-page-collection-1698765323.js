
jQuery(function() {
  var $hero = jQuery('#m-1579536432011');
  var $module = jQuery('#m-1579536432011').children('.module');

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
            var $module = jQuery('#m-1585757354185').children('.module');
            var $collectionFilter = $module.find('.gf_collection-filter');
            var $sortCollection = $module.find('.gf_sort-collection');
            
            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';

            var resizeSelect = function() {
                var $collectionFilterRuler = jQuery('<select><option></option></select>');
                var $sortCollectionRuler = jQuery('<select><option></option></select>');

                if ($collectionFilter.find('option:selected').length > 0) {
                    $collectionFilterRuler.find('option').html($collectionFilter.find('option:selected').text());
                } else {
                    $collectionFilterRuler.find('option').html($collectionFilter.find('option:first').text());
                }
                
                $collectionFilterRuler.css({'width': 'auto','height': '0','opacity':'0','border': '0', 'display': 'block'}).appendTo($module.find('.gf_collection-filter-wrapper'));
                
                if ($sortCollection.find('option:selected').length > 0) {
                    $sortCollectionRuler.find('option').html($sortCollection.find('option:selected').text());
                } else {
                    $sortCollectionRuler.find('option').html($sortCollection.find('option:first').text());
                }
                $sortCollectionRuler.css({'width': 'auto','height': '0','opacity':'0','border': '0', 'display': 'block'}).appendTo($module.find('.gf_sort-collection-wrapper'));
                var collectionFilterWidth = $collectionFilterRuler.width() + $collectionFilter.outerWidth() - $collectionFilter.width();
                var sortCollectionWidth = $sortCollectionRuler.width() + $sortCollection.outerWidth() - $sortCollection.width();
                
                if (collectionFilterWidth > sortCollectionWidth) {
                    $collectionFilter.css('width', collectionFilterWidth);
                    $sortCollection.css('width', collectionFilterWidth);
                } else {
                    $collectionFilter.css('width', sortCollectionWidth);
                    $sortCollection.css('width', sortCollectionWidth);
                }

                $collectionFilterRuler.remove();
                $sortCollectionRuler.remove(); 
            }

            resizeSelect();

            // Collection Filter
            $collectionFilter.bind('change', function(e) {
                if (mode == 'dev') {
                    resizeSelect();
                } else {
                    var tag = jQuery(this).val();
                    
                    var currentLocation = window.location.href;
                    
                    var baseUrl = currentLocation.slice(0, currentLocation.indexOf('/collections/'));
                    var tailUrl = currentLocation.slice(currentLocation.indexOf('/collections/') + '/collections/'.length);
                    var collectionName = tailUrl.slice(0, tailUrl.indexOf('?') == -1 ? undefined : tailUrl.indexOf('?'));
                    var collectionName = collectionName.slice(0, collectionName.indexOf('/') == -1 ? undefined : collectionName.indexOf('/'));
                    var query = location.search;
                    query = query.replace(/page=\d*/ig ,'').replace('?&', '?').replace('&&', '&')

                    window.location.href = baseUrl + '/collections/' + collectionName + ((tag == undefined || tag == '') ? '' : ('/' + tag)) + query;
                    
                }
            });

            // Sort Collection
            $sortCollection.bind('change', function(e) {
                if (mode == 'dev') {
                    resizeSelect();
                } else {
                    var newSortBy = e.target.value;
                    var currentSearch = location.search;
                    var sortRegex = /sort_by=[\w-]+/ig;

                    if (sortRegex.test(currentSearch)) {
                        if (newSortBy != '') {
                            currentSearch = currentSearch.replace(sortRegex, 'sort_by=' + newSortBy);
                        } else {
                            currentSearch = currentSearch.replace(sortRegex, '');
                            while (currentSearch.indexOf('&&') != -1) {
                                currentSearch.replace('&&', '&');
                            }
                        }
                    } else if (currentSearch == '' || currentSearch == '?') {
                        currentSearch = '?sort_by=' + newSortBy;
                    } else {
                        currentSearch += ('&sort_by=' + newSortBy);
                    }

                    location.search = currentSearch;
                }
            });
        });
    
        jQuery(function() {
            var $module = jQuery('#m-1585757354208').children('.module');

            var sameHeightTitle = $module.data('sameheightitle'),
                spacing = $module.data('spacing');
                collg = $module.data('collg'),
                colmd = $module.data('colmd'),
                colsm = $module.data('colsm'),
                colxs = $module.data('colxs');

            var $clearfixes = $module.find('.gf_row-no-padding').children('.gf_clearfix');
            var col = collg;


            jQuery(window).resize(function() {
                setTimeout(function() {
                    for(var i = 0; i < $clearfixes.length; i++) {
                        if($clearfixes.eq(i).css('display') == 'block') {
                            if($clearfixes.eq(i).hasClass('visible-lg')) {
                                col = collg;
                                break;
                            }
                            if($clearfixes.eq(i).hasClass('visible-md')) {
                                col = colmd;
                                break;
                            }
                            if($clearfixes.eq(i).hasClass('visible-sm')) {
                                col = colsm;
                                break;
                            }
                            if($clearfixes.eq(i).hasClass('visible-xs')) {
                                col = colxs;
                                break;
                            }
                        }
                    }
                }, 1000);
            });

            if(sameHeightTitle == '1') {
                var minHeight = 0;

                $module.find('.product-single__title').each(function() {
                });
            } else {
            }

            jQuery($module).css('padding', spacing);
        }); 
    
    
  
            jQuery(function() {
                var $module = jQuery('#m-1585757354208-child1').children('.module');
                $module.gfV3Product();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585757354208-child1-0').children('.module');
                var effect = $module.attr('data-effect');
                $module.gfV3ProductImage({
                    'effect': effect
                })
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585757354208-child1-1').children('.module');
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585757354208-child1-2').children('.module');
                $module.gfV3ProductPrice();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585757354208-child2').children('.module');
                $module.gfV3Product();
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585757354208-child2-0').children('.module');
                var effect = $module.attr('data-effect');
                $module.gfV3ProductImage({
                    'effect': effect
                })
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585757354208-child2-1').children('.module');
            });
        
            jQuery(function() {
                var $module = jQuery('#m-1585757354208-child2-2').children('.module');
                $module.gfV3ProductPrice();
            });
        
        jQuery(function() {
            var $module = jQuery('#m-1585757354172').children('.module');
            var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
            
            if (mode == 'dev') {
                var $paginator = $module.find('.gf_collection-paginator-wrapper');
                if ($paginator.length > 0) {
                    var productCount = $paginator.attr('data-product-count');
                    var previousText = $module.attr('data-previous');
                    var nextText = $module.attr('data-next');
                    var activeColor = $module.attr('data-active-color');      

                    var applyEvents = function() {
                        $paginator.children('span:not(.deco)').off('click').on('click', function() {
                            var currentPage = parseInt($paginator.children('.current').text()) - 1;
                        
                            if (jQuery(this).hasClass('prev')) {
                                currentPage--;
                            } else if (jQuery(this).hasClass('next')) {
                                currentPage++;
                            } else {
                                currentPage = parseInt(jQuery(this).text()) - 1;
                            }
                            render(currentPage);
                        })
                    }

                    var render = function(currentPage) {
                        $paginator.html('');

                        if (currentPage != 0) {
                            $paginator.append('<span class="prev">' + previousText + '</span>')
                        }
                        
                        if (currentPage - 2 > 0) {
                            $paginator.append('<span class="page">1</span>');
                        }

                        if (currentPage -2 > 1) {
                            $paginator.append('<span class="deco">...</span>');
                        }

                        for (var i = Math.max(0, currentPage - 2); i <= Math.min(currentPage + 2, productCount - 1); i++) {
                            $paginator.append('<span class="page' + (currentPage == i ? ' current' : '') + '">' + (i + 1) + '</span>');
                        }

                        if (currentPage + 2 < productCount - 2) {
                            $paginator.append('<span class="deco">...</span>');
                        }

                        if (currentPage + 2 < productCount - 1) {
                            $paginator.append('<span class="page">' + productCount + '</span>');
                        }

                        if (currentPage != productCount - 1 && productCount != 0) {
                            $paginator.append('<span class="next">' + nextText + '</span>')
                        }

                        applyEvents();
                    }

                    render(0);
                }
            }
        });
    
          jQuery(function() {
  var mode = jQuery('.gryffeditor').hasClass('editing') ? 'dev' : 'production';
  var $module = jQuery('#m-1626266665185').children('.module');
  if (mode == 'dev') {
      jQuery('#m-1626266665185').attr('data-name', '').css('background-image', 'none').removeAttr('data-image');
      
      var flag = true;
      var $bkLiquid = parent.jQuery('body').find('#gfFrame').contents().find('#module-1626266665185');
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
                  jQuery('#m-1626266665185').css('background-image', 'url(' + imageUrl + ')').css('min-height', '100px').attr('data-image', 'true');
              }
              if (name != '' && name != 'Custom Code') {
                  flag = false;
                  jQuery('#m-1626266665185').attr('data-name', name);
              }
          } catch(error) {
              console.log(error);
          }
      }
      if (flag) {
          jQuery('#m-1626266665185').attr('data-name', 'Right click on the module, then choose Edit Html / Liquid option to start writing your custom code.');
      }
  }
});
      
        jQuery(function() {
            var $module = jQuery('#m-1626266665144').children('.module');
        
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
    
        jQuery(function() {
            var $module = jQuery('#m-1574958824097').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1574958824094').children('.module');
        }); 
    
        jQuery(function() {
            var $module = jQuery('#m-1574958824148').children('.module');
        }); 
    