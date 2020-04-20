var dark = !1;
var editItem = -1;
$('[data-toggle="popover"]').popover();
$('a[data-toggle="pill"]').on("shown.bs.tab", function (e) {
  var target = $(e.target).attr("href");
  scrollTo(0, document.body.scrollHeight);
});
/*$("#mainview").click(function () {
  scrollTo(0, 0);
});
*/
$(window).scroll(function () {
  if ($(window).scrollTop() > 20) {
    if (!dark) {
      $("#blocker").fadeTo(200, 1.0, function () {});
      dark = true;
    }
  } else {
    if (dark) {
      $("#blocker").fadeTo(200, 0.0, function () {});
      dark = false;
    }
  }
});
function validateText(checkText, maxTextLength, maxLineNum) {
  var texts = new Array(checkText);
  for (var i = 0; i < texts.length; i++) {
    if (texts[i].length > maxTextLength) {
      return false;
    }
  }
  texts = checkText.split(/\r?\n/);
  if (texts.length > maxLineNum) {
    return false;
  } else {
    return true;
  }
}
$(document).ready(function (e) {
  var lbutton = document.getElementsByClassName(
    "yikes-easy-mc-submit-button-2"
  )[0];
  if (typeof lbutton === undefined || lbutton == null) {
    lbutton = document.getElementsByClassName(
      "yikes-easy-mc-submit-button-3"
    )[0];
  }
  if (lbutton != null) {
    lbutton.addEventListener("click", function (event) {
      saveA();
    });
  }
  $(window).resize(function () {
    mobileChange();
  }),
    mobileChange();
});
var delay = (function () {
  var e = 0;
  return function (t, n) {
    clearTimeout(e), (e = setTimeout(t, n));
  };
})();
var isMobile = !1;
String.prototype.replaceAll = function (e, t) {
  return this.replace(new RegExp(e, "g"), t);
};
var emailFine = false;
function validateEmail(id) {
  var email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i;
  if (!email_regex.test($("#" + id).val())) {
    var div = $("#" + id).closest("div");
    div.removeClass("has-success");
    $("#glypcn" + id).remove();
    div.addClass("has-error has-feedback");
    div.append(
      '<span id="glypcn' +
        id +
        '" class="glyphicon glyphicon-remove danger form-control-feedback">eMail-Adresse ungÃ¼ltig</span>'
    );
    emailFine = false;
    return false;
  } else {
    var div = $("#" + id).closest("div");
    div.removeClass("has-error");
    $("#glypcn" + id).remove();
    div.addClass("has-success has-feedback");
    div.append(
      '<span id="glypcn' +
        id +
        '" class="glyphicon glyphicon-ok form-control-feedback"></span>'
    );
    emailFine = true;
    return true;
  }
}
function saveA() {
  var e = document.getElementById("yikes-easy-mc-form-2-EMAIL");
  if (typeof e === undefined || e == null) {
    e = document.getElementById("yikes-easy-mc-form-3-EMAIL");
  }
  var email = e.value;
  var a = createDataObj();
  a.email = email;
  a = JSON.stringify(a);
  $.post(
    "../wp-content/plugins/editor-designer/save.php",
    { data: a, sendmail: true, language: lang },
    function (result) {
      $("#mailModal").modal("hide");
    }
  );
}
function goToTab() {
  $("div[data-toggle='collapse']").each(function () {
    if ($(this).attr("value") == selected_position) {
      $(this).removeClass("collapsed");
      $("#" + $(this).attr("value") + "_desk").addClass("show");
    } else {
      $(this).removeClass("collapsed");
      $(this).addClass("collapsed");
      $("#" + $(this).attr("value") + "_desk").removeClass("show");
    }
  });
  $("a[data-toggle='pill']").each(function () {
    if ($(this).attr("value") == selected_position) {
      $(this).addClass("active ");
      $("#pills-" + $(this).attr("value")).addClass("show");
      $("#pills-" + $(this).attr("value")).addClass("active");
    } else {
      $("#pills-" + $(this).attr("value")).removeClass("show");
      $("#pills-" + $(this).attr("value")).removeClass("active");
      $(this).removeClass("active");
    }
  });
}
function clearWarn(id) {
  $("#" + id).hide();
}
function urldecode(url) {
  return decodeURIComponent(url.replace(/\+/g, " ")).replace("#038;", "&");
}
function submitCart(dataO) {
  var a = createDataObj();
  a = JSON.stringify(a);
  $.post(
    "../wp-content/plugins/editor-designer/save.php",
    { data: a, sendmail: false, language: lang },
    function (result) {
      dataO.meta.reference = result;
      if (editItem != -1) {
        dataO.editItem = editItem;
      }
      $.post("/", dataO, function (data) {
        window.location.href = cart_link;
      });
    }
  );
}

function findGetParameter(parameterName) {
  var result = null,
    tmp = [];
  location.search
    .substr(1)
    .split("&")
    .forEach(function (item) {
      tmp = item.split("=");
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}
function createCookie(name, value, min) {
  var expires = "";
  if (min) {
    var date = new Date();
    date.setTime(date.getTime() + min * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  value = encodeURIComponent(value);
  document.cookie = name + "=" + value + expires + "; path=/";
}
function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) {
      var value = c.substring(nameEQ.length, c.length);
      value = decodeURIComponent(value);
      return value;
    }
  }
  return null;
}
function eraseCookie(name) {
  createCookie(name, "", -1);
}

var cWidth = 300,
  cHeight = 500,
  spaceHorizontal = 20,
  spaceVertical = 150,
  canvasWidth = 900,
  canvasHeight = 1200;
var scale = 1;

$(document).ready(function (e) {
  $(window).resize(function () {
    calcSize();
  });
  cWidth = main.clientWidth - spaceHorizontal;
  cHeight = main.clientHeight - spaceVertical;
  main = $("#mainview");
});
function calcSize() {
  main = $("#mainview");
  cWidth = main.width() - spaceHorizontal;
  cHeight = main.height() - spaceVertical;
  var div = document.getElementById("viewerid");
  var div2 = document.getElementById("sizeInfoWrap");
  if (canvasHeight < cHeight && canvasWidth < cWidth) {
    scale = 1;
  } else {
    if (canvasHeight < cHeight) {
      scale = cWidth / canvasWidth;
    } else if (canvasWidth < cWidth) {
      scale = cHeight / canvasHeight;
    } else {
      var sc1 = cWidth / canvasWidth;
      var sc2 = cHeight / canvasHeight;
      if (sc1 < sc2) {
        scale = sc1;
      } else {
        scale = sc2;
      }
    }
  }
  var curTrans = div.style.transform;
  var newScaleString = "scale(" + scale + ")";
  var regex = /scale\([0-9|\.]*\)/;
  var newTrans = curTrans.replace(regex, newScaleString);
  div.style.transform = newTrans;
  if (scale == 1) {
    $("#zoomButton").hide();
  } else if (!isMobile) {
    $("#zoomButton").show();
  }
  curTrans = div2.style.transform;
  var reverseScale = 1 / scale;
  newScaleString = "scale(" + reverseScale + ")";
  regex = /scale\([0-9|\.]*\)/;
  newTrans = curTrans.replace(regex, newScaleString);
  div2.style.transform = newTrans;
}
