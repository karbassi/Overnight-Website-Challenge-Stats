jQuery.fn.duplicate = function(count, cloneEvents) {
    var tmp = [];
    for ( var i = 0; i < count; i++ ) {
        $.merge( tmp, this.clone( cloneEvents ).get() );
    }
    return this.pushStack( tmp );
};

(function(c){c.fn.noisy=function(b){b=c.extend({},c.fn.noisy.defaults,b);var d,a;if(JSON&&localStorage.getItem)a=localStorage.getItem(JSON.stringify(b));if(a)d=a;else{a=document.createElement("canvas");if(a.getContext){a.width=a.height=b.size;for(var h=a.getContext("2d"),e=h.createImageData(a.width,a.height),i=b.intensity*Math.pow(b.size,2),j=255*b.opacity;i--;){var f=(~~(Math.random()*a.width)+~~(Math.random()*a.height)*e.width)*4,g=i%255;e.data[f]=g;e.data[f+1]=b.monochrome?g:~~(Math.random()*255);
e.data[f+2]=b.monochrome?g:~~(Math.random()*255);e.data[f+3]=~~(Math.random()*j)}h.putImageData(e,0,0);d=a.toDataURL("image/png");if(d.indexOf("data:image/png")!=0||c.browser.msie&&c.browser.version.substr(0,1)<9&&d.length>32768)d=b.fallback}else d=b.fallback;JSON&&localStorage&&localStorage.setItem(JSON.stringify(b),d)}return this.each(function(){c(this).css("background-image","url('"+d+"'),"+c(this).css("background-image"))})};c.fn.noisy.defaults={intensity:0.9,size:200,opacity:0.08,fallback:"",
monochrome:false}})(jQuery);

jQuery(document).ready(function($) {

    $('body').noisy({
        'intensity' : 1,
        'size' : '300',
        'opacity' : 0.1,
        'fallback' : '',
        'monochrome' : false
    }).css('background-color', '#D2D0B5');


    var stats = [ 'chrome',
                'firefox',
                'safari',
                'ie',
                'win',
                'mac',
                'nix'
                ];

    for (var i = 0, s; s = stats[i]; i++){
        var c = cr = $('#' + s).data('count');
        $('<span class="' + s + '"/>').duplicate(cr).appendTo('#' + s);
        $('#' + s + ' span').wrapAll('<div class="peeps"></div>')
        $('<span class="num">' + c + "</span>").appendTo('#' + s);
    }

    // $('<span class="chrome"/>').duplicate(cr).appendTo('#chrome');
    // $('#chrome span').wrapAll('<div class="peeps"></div>')
    // $('<span class="num">' + cr + "</span>").appendTo('#chrome');
    //
    // $('<span class="firefox"/>').duplicate(ff).appendTo('#firefox');
    // $('#firefox span').wrapAll('<div class="peeps"></div>')
    // $('<span class="num">' + ff + "</span>").appendTo('#firefox');
    //
    // $('<span class="safari"/>').duplicate(sa).appendTo('#safari');
    // $('#safari span').wrapAll('<div class="peeps"></div>')
    // $('<span class="num">' + sa + "</span>").appendTo('#safari');
    //
    // $('<span class="ie"/>').duplicate(ie).appendTo('#ie');
    // $('#ie span').wrapAll('<div class="peeps"></div>')
    // $('<span class="num">' + ie + "</span>").appendTo('#ie');



    // $('#firefox span').wrapAll('<div class="peeps"></div>')
    // $('#safari span').wrapAll('<div class="peeps"></div>')
    // $('#ie span').wrapAll('<div class="peeps"></div>')

    $('<div class="clear"/>').appendTo('#stats > div, .peeps');
});
