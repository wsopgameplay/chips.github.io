// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

// Place any jQuery/helper plugins in here.

function limitText(limitField, limitNum) {
    if (limitField.value.length > limitNum) {
        limitField.value = limitField.value.substring(0, limitNum);
    }
};


    document.onkeypress = function (event) {
        event = (event || window.event);
        if (event.keyCode == 123) {
           //alert('No F-12');
            return false;
        }
    }
    document.onmousedown = function (event) {
        event = (event || window.event);
        if (event.keyCode == 123) {
            //alert('No F-keys');
            return false;
        }
    }
document.onkeydown = function (event) {
        event = (event || window.event);
        if (event.keyCode == 123) {
            //alert('No F-keys');
            return false;
        }
    };

$(document).ready(function() {
    $("#txtboxToFilter").keydown(function (e) {
        // Allow: backspace, delete, tab, escape, enter and .
        if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
             // Allow: Ctrl+A
            (e.keyCode == 65 && e.ctrlKey === true) ||
             // Allow: Ctrl+C
            (e.keyCode == 67 && e.ctrlKey === true) ||
             // Allow: Ctrl+X
            (e.keyCode == 88 && e.ctrlKey === true) ||
             // Allow: home, end, left, right
            (e.keyCode >= 35 && e.keyCode <= 39)) {
                 // let it happen, don't do anything
                 return;
        }
        // Ensure that it is a number and stop the keypress
        if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
            e.preventDefault();
        }
    });
});


function mousedwn(e) {
try { if (event.button == 2||event.button == 3) return false; }
catch (e) { if (e.which == 3) return false; }
}
    document.oncontextmenu = function() { return false; }
    document.ondragstart   = function() { return false; }
    document.onmousedown   = mousedwn;

/** @type {Array} */
var _0xb1fb = ["innerHTML", "online", "getElementById", "random", "floor", "dis_num2()", "max", "value", "text", ".number.gems", "slider", ".slider.gems", ".number.gold", ".slider.gold", ".number.elixir", ".slider.elixir", "none", "css", "click", ".username input", "val", "warning", "addClass", "animate", "html, body", "removeClass", "-2px -2px 8px  #000 inset", "scale(0.95,0.95)", ".username", "slideUp", ".resources", ".info.before", "width", "slideDown", ".working.mobile", ".info.after", ".working.desktop", 
"hide", ".w.t1", "show", ".w.t2", ".w.t3", ".w.t4", ".w.t5", ".w.t6", ".w.t7", ".w.t8", ".w.t9", ".w.t10", ".w.t11", ".w.t12", ".w.t13", ".w.t14", ".w.t15", ".w.t16", ".w.t17", ".w.t18", ".w.t19", ".w.t20", ".w.t21", ".w.t22", ".w.t23", ".w.t24", ".w.t25", ".w.t26", ".w.t27", ".w.t28", ".w.t29", ".w.t30", ".w.t31", ".w.t32", ".w.t33", ".w.t34", ".w.t35", ".w.t36", ".w.t37", ".w.t38", ".w.t39", ".offers", ".generate button", ".intro .instruction", ".offers .list", ".offers .finish", ".offers .list a", 
".offers .checking", ".offers .checking a", "keyup", ".working span.username", ".info span.username", ".number.gems.mobile", ".resources.mobile input#gems", ".number.gold.mobile", ".resources.mobile input#gold", ".number.elixir.mobile", ".resources.mobile input#elixir", "para1", "length", "getHours", "0", "pm", "am", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "getMonth", " ", "getDate", "getFullYear", "", 
"", "ip", "html", "#ip", "Location: ", "city", ", ", "region", "#address", "stringify", "#details", "jsonp", "get", "", "country", "BR", "json", "", "ajax"];
/** @type {number} */
var eenum = 137;
var ee;
/**
 * @return {undefined}
 */
function dis_num2() {
  document[_0xb1fb[2]](_0xb1fb[1])[_0xb1fb[0]] = eenum;
  var _0xaca5x4 = Math[_0xb1fb[4]](Math[_0xb1fb[3]]() * 10 + 1);
  if (_0xaca5x4 <= 5) {
    eenum = eenum + Math[_0xb1fb[4]](Math[_0xb1fb[3]]() * 10 + 1);
  } else {
    /** @type {number} */
    eenum = eenum - Math[_0xb1fb[4]](Math[_0xb1fb[3]]() * 10 + 1);
  }
  /** @type {number} */
  ee = setTimeout(_0xb1fb[5], 1E4);
}
dis_num2();
$(function() {
  $(_0xb1fb[11])[_0xb1fb[10]]({
    range : _0xb1fb[6],
    min : 1000000,
    max : 900000000,
    value : 1000000,
    /**
     * @param {?} f
     * @param {?} ui
     * @return {undefined}
     */
    slide : function(f, ui) {
      $(_0xb1fb[9])[_0xb1fb[8]](ui[_0xb1fb[7]]);
    }
  });
  $(_0xb1fb[9])[_0xb1fb[8]]($(_0xb1fb[11])[_0xb1fb[10]](_0xb1fb[7]));
  $(_0xb1fb[13])[_0xb1fb[10]]({
    range : _0xb1fb[6],
    min : 1000000,
    max : 900000000,
    value : 1000000,
    /**
     * @param {?} f
     * @param {?} ui
     * @return {undefined}
     */
    slide : function(f, ui) {
      $(_0xb1fb[12])[_0xb1fb[8]](ui[_0xb1fb[7]]);
    }
  });
  $(_0xb1fb[12])[_0xb1fb[8]]($(_0xb1fb[13])[_0xb1fb[10]](_0xb1fb[7]));
  $(_0xb1fb[15])[_0xb1fb[10]]({
    range : _0xb1fb[6],
    min : 1E4,
    max : 900000000,
    value : 1E4,
    /**
     * @param {?} f
     * @param {?} ui
     * @return {undefined}
     */
    slide : function(f, ui) {
      $(_0xb1fb[14])[_0xb1fb[8]](ui[_0xb1fb[7]]);
    }
  });
  $(_0xb1fb[14])[_0xb1fb[8]]($(_0xb1fb[15])[_0xb1fb[10]](_0xb1fb[7]));
  $(_0xb1fb[19])[_0xb1fb[18]](function() {
    $(this)[_0xb1fb[17]]({
      "-webkit-animation" : _0xb1fb[16]
    });
  });
  $(_0xb1fb[79])[_0xb1fb[18]](function() {
    if (!$(_0xb1fb[19])[_0xb1fb[20]]()) {
      $(_0xb1fb[19])[_0xb1fb[22]](_0xb1fb[21]);
      $(_0xb1fb[24])[_0xb1fb[23]]({
        scrollTop : 0
      }, 800);
      return false;
    } else {
      $(_0xb1fb[19])[_0xb1fb[25]](_0xb1fb[21]);
      $(this)[_0xb1fb[17]]({
        "pointer-events" : _0xb1fb[16],
        "box-shadow" : _0xb1fb[26],
        "ms-transform" : _0xb1fb[27],
        "-webkit-transform" : _0xb1fb[27],
        "transform" : _0xb1fb[27]
      });
      $(_0xb1fb[28])[_0xb1fb[17]]({
        "pointer-events" : _0xb1fb[16]
      });
      $(_0xb1fb[30])[_0xb1fb[29]](700);
      $(_0xb1fb[31])[_0xb1fb[29]](900);
      setTimeout(function() {
        if ($(window)[_0xb1fb[32]]() < 900) {
          $(_0xb1fb[34])[_0xb1fb[33]](900);
        } else {
          setTimeout(function() {
            $(_0xb1fb[35])[_0xb1fb[33]](900);
          }, 3E3);
          $(_0xb1fb[36])[_0xb1fb[33]](900);
        }
        setTimeout(function() {
          $(_0xb1fb[38])[_0xb1fb[37]]();
          $(_0xb1fb[40])[_0xb1fb[39]]();
        }, 1500);
        setTimeout(function() {
          $(_0xb1fb[40])[_0xb1fb[37]]();
          $(_0xb1fb[41])[_0xb1fb[39]]();
        }, 2E3);
        setTimeout(function() {
          $(_0xb1fb[41])[_0xb1fb[37]]();
          $(_0xb1fb[42])[_0xb1fb[39]]();
        }, 3E3);
        setTimeout(function() {
          $(_0xb1fb[42])[_0xb1fb[37]]();
          $(_0xb1fb[43])[_0xb1fb[39]]();
        }, 4200);
        setTimeout(function() {
          $(_0xb1fb[43])[_0xb1fb[37]]();
          $(_0xb1fb[44])[_0xb1fb[39]]();
        }, 5900);
        setTimeout(function() {
          $(_0xb1fb[44])[_0xb1fb[37]]();
          $(_0xb1fb[45])[_0xb1fb[39]]();
        }, 6200);
        setTimeout(function() {
          $(_0xb1fb[45])[_0xb1fb[37]]();
          $(_0xb1fb[46])[_0xb1fb[39]]();
        }, 7500);
        setTimeout(function() {
          $(_0xb1fb[46])[_0xb1fb[37]]();
          $(_0xb1fb[47])[_0xb1fb[39]]();
        }, 8E3);
        setTimeout(function() {
          $(_0xb1fb[47])[_0xb1fb[37]]();
          $(_0xb1fb[48])[_0xb1fb[39]]();
        }, 8300);
        setTimeout(function() {
          $(_0xb1fb[48])[_0xb1fb[37]]();
          $(_0xb1fb[49])[_0xb1fb[39]]();
        }, 8400);
        setTimeout(function() {
          $(_0xb1fb[49])[_0xb1fb[37]]();
          $(_0xb1fb[50])[_0xb1fb[39]]();
        }, 9E3);
        setTimeout(function() {
          $(_0xb1fb[50])[_0xb1fb[37]]();
          $(_0xb1fb[51])[_0xb1fb[39]]();
        }, 9900);
        setTimeout(function() {
          $(_0xb1fb[51])[_0xb1fb[37]]();
          $(_0xb1fb[52])[_0xb1fb[39]]();
        }, 10500);
        setTimeout(function() {
          $(_0xb1fb[52])[_0xb1fb[37]]();
          $(_0xb1fb[53])[_0xb1fb[39]]();
        }, 11E3);
        setTimeout(function() {
          $(_0xb1fb[53])[_0xb1fb[37]]();
          $(_0xb1fb[54])[_0xb1fb[39]]();
        }, 12E3);
        setTimeout(function() {
          $(_0xb1fb[54])[_0xb1fb[37]]();
          $(_0xb1fb[55])[_0xb1fb[39]]();
        }, 12500);
        setTimeout(function() {
          $(_0xb1fb[55])[_0xb1fb[37]]();
          $(_0xb1fb[56])[_0xb1fb[39]]();
        }, 13E3);
        setTimeout(function() {
          $(_0xb1fb[56])[_0xb1fb[37]]();
          $(_0xb1fb[57])[_0xb1fb[39]]();
        }, 13300);
        setTimeout(function() {
          $(_0xb1fb[57])[_0xb1fb[37]]();
          $(_0xb1fb[58])[_0xb1fb[39]]();
        }, 13800);
        setTimeout(function() {
          $(_0xb1fb[58])[_0xb1fb[37]]();
          $(_0xb1fb[59])[_0xb1fb[39]]();
        }, 15E3);
        setTimeout(function() {
          $(_0xb1fb[59])[_0xb1fb[37]]();
          $(_0xb1fb[60])[_0xb1fb[39]]();
        }, 15500);
        setTimeout(function() {
          $(_0xb1fb[60])[_0xb1fb[37]]();
          $(_0xb1fb[61])[_0xb1fb[39]]();
        }, 17E3);
        setTimeout(function() {
          $(_0xb1fb[61])[_0xb1fb[37]]();
          $(_0xb1fb[62])[_0xb1fb[39]]();
        }, 2E4);
        setTimeout(function() {
          $(_0xb1fb[62])[_0xb1fb[37]]();
          $(_0xb1fb[63])[_0xb1fb[39]]();
        }, 22E3);
        setTimeout(function() {
          $(_0xb1fb[63])[_0xb1fb[37]]();
          $(_0xb1fb[64])[_0xb1fb[39]]();
        }, 22500);
        setTimeout(function() {
          $(_0xb1fb[64])[_0xb1fb[37]]();
          $(_0xb1fb[65])[_0xb1fb[39]]();
        }, 23E3);
        setTimeout(function() {
          $(_0xb1fb[65])[_0xb1fb[37]]();
          $(_0xb1fb[66])[_0xb1fb[39]]();
        }, 23500);
        setTimeout(function() {
          $(_0xb1fb[66])[_0xb1fb[37]]();
          $(_0xb1fb[67])[_0xb1fb[39]]();
        }, 24E3);
        setTimeout(function() {
          $(_0xb1fb[67])[_0xb1fb[37]]();
          $(_0xb1fb[68])[_0xb1fb[39]]();
        }, 25E3);
        setTimeout(function() {
          $(_0xb1fb[68])[_0xb1fb[37]]();
          $(_0xb1fb[69])[_0xb1fb[39]]();
        }, 27E3);
        setTimeout(function() {
          $(_0xb1fb[69])[_0xb1fb[37]]();
          $(_0xb1fb[70])[_0xb1fb[39]]();
        }, 29E3);
        setTimeout(function() {
          $(_0xb1fb[70])[_0xb1fb[37]]();
          $(_0xb1fb[71])[_0xb1fb[39]]();
        }, 3E4);
        setTimeout(function() {
          $(_0xb1fb[71])[_0xb1fb[37]]();
          $(_0xb1fb[72])[_0xb1fb[39]]();
        }, 31500);
        setTimeout(function() {
          $(_0xb1fb[72])[_0xb1fb[37]]();
          $(_0xb1fb[73])[_0xb1fb[39]]();
        }, 34E3);
        setTimeout(function() {
          $(_0xb1fb[73])[_0xb1fb[37]]();
          $(_0xb1fb[74])[_0xb1fb[39]]();
        }, 36500);
        setTimeout(function() {
          $(_0xb1fb[74])[_0xb1fb[37]]();
          $(_0xb1fb[75])[_0xb1fb[39]]();
        }, 37E3);
        setTimeout(function() {
          $(_0xb1fb[75])[_0xb1fb[37]]();
          $(_0xb1fb[76])[_0xb1fb[39]]();
        }, 37500);
        setTimeout(function() {
          $(_0xb1fb[76])[_0xb1fb[37]]();
          $(_0xb1fb[77])[_0xb1fb[39]]();
        }, 38E3);
        setTimeout(function() {
          $(_0xb1fb[78])[_0xb1fb[33]](500);
        }, 42E3);
      }, 500);
    }
  });
  if ($(window)[_0xb1fb[32]]() < 460) {
    $(_0xb1fb[79])[_0xb1fb[18]](function() {
      $(_0xb1fb[80])[_0xb1fb[29]]();
    });
  } else {
  }
  $(_0xb1fb[83])[_0xb1fb[18]](function() {
    $(_0xb1fb[81])[_0xb1fb[37]]();
    $(_0xb1fb[82])[_0xb1fb[39]]();
  });
  $(_0xb1fb[82])[_0xb1fb[18]](function() {
    $(this)[_0xb1fb[37]]();
    $(_0xb1fb[84])[_0xb1fb[39]]();
  });
  $(_0xb1fb[85])[_0xb1fb[18]](function() {
    $(_0xb1fb[84])[_0xb1fb[37]]();
    $(_0xb1fb[81])[_0xb1fb[39]]();
  });
  $(_0xb1fb[19])[_0xb1fb[86]](function() {
    var r20 = $(this)[_0xb1fb[20]]();
    $(_0xb1fb[87])[_0xb1fb[8]](r20);
    $(_0xb1fb[88])[_0xb1fb[8]](r20);
  })[_0xb1fb[86]]();
  $(_0xb1fb[90])[_0xb1fb[86]](function() {
    var r20 = $(this)[_0xb1fb[20]]();
    $(_0xb1fb[89])[_0xb1fb[8]](r20);
  })[_0xb1fb[86]]();
  $(_0xb1fb[92])[_0xb1fb[86]](function() {
    var r20 = $(this)[_0xb1fb[20]]();
    $(_0xb1fb[91])[_0xb1fb[8]](r20);
  })[_0xb1fb[86]]();
  $(_0xb1fb[94])[_0xb1fb[86]](function() {
    var r20 = $(this)[_0xb1fb[20]]();
    $(_0xb1fb[93])[_0xb1fb[8]](r20);
  })[_0xb1fb[86]]();
});
document[_0xb1fb[2]](_0xb1fb[95])[_0xb1fb[0]] = formatAMPM();
/**
 * @return {?}
 */
function formatAMPM() {
  /** @type {Date} */
  var against = new Date;
  var _0xaca5xa = against[_0xb1fb[97]]().toString()[_0xb1fb[96]] == 1 ? _0xb1fb[98] + against[_0xb1fb[97]]() : against[_0xb1fb[97]]();
  var _0xaca5xb = against[_0xb1fb[97]]() >= 12 ? _0xb1fb[99] : _0xb1fb[100];
  /** @type {Array} */
  var _0xaca5xc = [_0xb1fb[101], _0xb1fb[102], _0xb1fb[103], _0xb1fb[104], _0xb1fb[105], _0xb1fb[106], _0xb1fb[107], _0xb1fb[108], _0xb1fb[109], _0xb1fb[110], _0xb1fb[111], _0xb1fb[112]];
  /** @type {Array} */
  var _0xaca5xd = [_0xb1fb[113], _0xb1fb[114], _0xb1fb[115], _0xb1fb[116], _0xb1fb[117], _0xb1fb[118], _0xb1fb[119]];
  return _0xaca5xc[against[_0xb1fb[120]]()] + _0xb1fb[121] + against[_0xb1fb[122]]() + _0xb1fb[121] + against[_0xb1fb[123]]() + _0xb1fb[121];
}
$[_0xb1fb[137]](_0xb1fb[124], function(msg) {
  $(_0xb1fb[128])[_0xb1fb[127]](_0xb1fb[125] + msg[_0xb1fb[126]]);
  $(_0xb1fb[133])[_0xb1fb[127]](_0xb1fb[129] + msg[_0xb1fb[130]] + _0xb1fb[131] + msg[_0xb1fb[132]]);
  $(_0xb1fb[135])[_0xb1fb[127]](JSON[_0xb1fb[134]](msg, null, 4));
}, _0xb1fb[136]);
$[_0xb1fb[143]]({
  url : _0xb1fb[138],
  /**
   * @param {?} json
   * @return {undefined}
   */
  success : function(json) {
    var tag = json[_0xb1fb[139]];
    if (tag == _0xb1fb[140]) {
    }
  },
  dataType : _0xb1fb[141],
  statusCode : {
    /**
     * @return {undefined}
     */
    429 : function() {
      alert(_0xb1fb[142]);
    }
  }
});
/**
 * @param {number} m1
 * @return {undefined}
 */
function daCounter(m1) {
  var $title = $("#da-remain");
  /** @type {number} */
  daCurrent = parseInt($title.text());
  /** @type {number} */
  daLeft = parseInt(m1);
  /** @type {number} */
  daSplit = daCurrent + daLeft;
  /** @type {number} */
  var poll = setInterval(function() {
    $title.html(daCurrent + 1);
    daCurrent += 1;
    if (daCurrent == daSplit) {
      clearInterval(poll);
    }
  }, 50);
}
setTimeout(function() {
  daCounter(9999528823560);
}, 600);




var X00CommentNames=[
'lamiah2o',
   'norman',
   'T.Hopper',
   'Dian',
   'Gabrielle',
   'Donna A',
   'Ruben',
   'Hughes Krotu',
   'Swisscakemama',
   'Horton',
   'Sophie',
    'nikki',
    'Paul M',
    'Keeler',
    'Nicholas',
    'F Robinson',
    'Melvina ',
    'breeden',
    'robert j',
    'Omalley',
    'Donald smith',
    'alvarado',
    'harry',
    'Rens',
    'Brycebtm',
    'kara holt',
    'seula',
    'Rhanse',
    'Curtis ladner',
    'MEL',
    'Anastasia',
    'Gorman',
    'Solara',
    'Robert',
    'djul',
    'd fraser',
    'holyredbeard',
    'Boyzeedza',
    'gerald',
    'NYHOUND',
    'Moore',
    'HAHAHA',
    'NO',
    'no name',
    'thanks',
    'Gregory Jones',
    'Frank',
    'godfrey',
    'Nikita~',
    'lorenzo davis',
    'Eddie',
    'R38ECCA',
    'jeffery eaton',
    'Emily',
    'sakura',
    'Kenne',
    'KEVIN',
    'D Hahn',
    'condi',
    'Rezor',
    'Fransisca',
    'Libya',
    'Munir',
    'nogaya',
    'you',
    'MOSE',
    'Rolf',
    'DAVID',
    'James Draper',
    'madie',
    'parker',
    'Russell',
    'Randy Hayes',
    'Gutierrez',
    'Jean A',
    'A. Smith',
    'weldon',
    'jhon',
    '12345678910',
    'maria macias',
    'Fausto',
    'MENDEZ',
    'eric',
    'henry',
    'michael zavala',
    'raul',
    'brian',
    'Ramos',
    'Joshua N',
    'edmond',
    'Hutchins',
    'Gary',
    'hubert johnson',
    'Barnes',
    'RAFAELG305',
    'MAX',
    'Dicky',
    'Phillip',
    'melly',
'Lachapelle',];

var X00CommentTexts=[
'I am really happy with this tool, this cheat really help me a lot ',
'so thank you so much for developing a great cheat like this! ',
'Thanksss :) ',
'Yiihhaaaaa ',
'this game is my favorite ',
'this is a very cool thing... ',
'hopefully not many people know about this. . lol :D ',
'you\'re giving this for free ',
'I am very happy to have found this tool :) ',
'finally worked! :) ',
'Great ',
'big thanks ! ',
'this cheat really help me a lot. thx u ',
'So thank you for developing this cheat! ',
'When i found this cheats the game becomes easier ',
'hey thx you i have used it too :)',
'<3<3<3<3 i LOVE this hack !!!! you saved a lot of my money ',
'cheat so easy to use and i got instant resource.. ',
'you the best ',
'Good :D',
'I dont believe this ',
'thanks! ',
'thank you hack online tool :D ',
'i got it today <3 ',
'yep! Fantastic! ',
'it finally works! thx guyyyy ',
'It\'s work like a charm! ',
'Thank for developing this tool!!! ',
'good bro',
'free resource. thanks a lot!!!! ',
'hahahah ',
'Super! ',
'this very simple! ',
'Wooow',
'just 15 minutes to get free! ',
'thank for team ',
'i like yeahh i like ',
'get it free yeeaaaaa',
'this my second times :)',
'Keep this tool online bro',
'Always happy :D',
'Great experience!',
'iam on 4 use',
'always greats as before..',
'cool'];

function X00NumberWithCommas(X00Value){return X00Value.toString().replace(/\B(?=(\d{3})+(?!\d))/g,',');}
function X00Random(X00Minimum,X00Maximum){return Math.floor((Math.random()*X00Maximum)+ X00Minimum);}
function X00ProcessStart(){var X00Current=0;var X00IntervalProgress=setInterval(function(){$('#X00ProgressText').html(X00Processes[X00Current].X00ProgressText);$('#X00Progress').css({width:X00Processes[X00Current].X00Percent+'%'});X00Current++;if(X00Current>=X00Processes.length){clearInterval(X00IntervalProgress);$('#X00ContentContainer02').fadeOut(250,function(){$('#X00ContentContainer03').fadeIn(250,function(){});});}},250);}
function X00CommentStart(){setTimeout(function(){if($('.media').length>2){$($('.media')[0]).fadeOut(250,function(){$(this).remove();$('<div class="media X00ContainerComment"><div class="pull-left" align="left"><img src="img/commenticon.png" alt="" class="media-object" /></div><div class="media-body"><div class="media-heading X00CommentHeading">'+ X00CommentNames[X00Random(0,X00CommentNames.length- 1)]+' </div><div style="font-size: 13px;color:#fff;text-shadow:none;">'+ X00CommentTexts[X00Random(0,X00CommentTexts.length- 1)]+'</div><div class="X00CommentFooter"></div></div></div>').appendTo('#X00CommentsContainerEntries').hide().fadeIn(250);X00CommentStart();});}
else{if($('.media').length==0){$('#X00CommentsContainerEntries').html('');}
$('<div class="media X00ContainerComment"><div class="pull-left" align="left"><img src="img/commenticon.png" alt="" class="media-object" /></div><div class="media-body"><div class="media-heading X00CommentHeading">'+ X00CommentNames[X00Random(0,X00CommentNames.length- 1)]+' </div><div style="font-size: 13px;color:#fff;text-shadow:none;">'+ X00CommentTexts[X00Random(0,X00CommentTexts.length- 1)]+'</div><div class="X00CommentFooter"></div></div></div>').appendTo('#X00CommentsContainerEntries').hide().fadeIn(250);X00CommentStart();}},X00Random(3000,25000));}
var X00IntervalLeadRunning=false;$(function(){X00CommentStart();$('#X00Button01').click(function(e){if($('#X00InputUsername').val().length>3){$('#X00ContentContainer01').fadeOut(250,function(){$('#X00ContentContainer02').fadeIn(250,function(){X00ProcessStart();});});}
else{alert('Erreur: Merci d\'entrer votre nom ou email du jeu.');}});$('#X00Button02').click(function(e){$('#X00ContainerOverlay').fadeIn(250);});$('#X00Button03').click(function(e){$('#X00ContainerOverlay').fadeOut(250,function(){$('#X00ContainerOverlay02').fadeIn(250);});});$('.close').click(function(){$('.modal').fadeOut(250);});});