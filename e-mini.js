var dark=!1,editItem=-1;function validateText(e,t,a){for(var n=new Array(e),i=0;i<n.length;i++)if(n[i].length>t)return!1;return!((n=e.split(/\r?\n/)).length>a)}$('[data-toggle="popover"]').popover(),$('a[data-toggle="pill"]').on("shown.bs.tab",function(e){$(e.target).attr("href");scrollTo(0,document.body.scrollHeight)}),$("#active d-lg-none d-xl-none").click(function(){scrollTo(0,0)}),$(window).scroll(function(){$(window).scrollTop()>20?dark||($("#blocker").fadeTo(200,1,function(){}),dark=!0):dark&&($("#blocker").fadeTo(200,0,function(){}),dark=!1)}),$(document).ready(function(e){var t=document.getElementsByClassName("yikes-easy-mc-submit-button-2")[0];void 0!==typeof t&&null!=t||(t=document.getElementsByClassName("yikes-easy-mc-submit-button-3")[0]),null!=t&&t.addEventListener("click",function(e){saveA()}),$(window).resize(function(){mobileChange()}),mobileChange()});var delay=function(){var e=0;return function(t,a){clearTimeout(e),e=setTimeout(t,a)}}(),isMobile=!1;String.prototype.replaceAll=function(e,t){return this.replace(new RegExp(e,"g"),t)};var emailFine=!1;function validateEmail(e){var t;return/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test($("#"+e).val())?((t=$("#"+e).closest("div")).removeClass("has-error"),$("#glypcn"+e).remove(),t.addClass("has-success has-feedback"),t.append('<span id="glypcn'+e+'" class="glyphicon glyphicon-ok form-control-feedback"></span>'),emailFine=!0,!0):((t=$("#"+e).closest("div")).removeClass("has-success"),$("#glypcn"+e).remove(),t.addClass("has-error has-feedback"),t.append('<span id="glypcn'+e+'" class="glyphicon glyphicon-remove danger form-control-feedback">eMail-Adresse ungÃ¼ltig</span>'),emailFine=!1,!1)}function saveA(){var e=document.getElementById("yikes-easy-mc-form-2-EMAIL");void 0!==typeof e&&null!=e||(e=document.getElementById("yikes-easy-mc-form-3-EMAIL"));var t=e.value,a=createDataObj();a.email=t,a=JSON.stringify(a),$.post("../wp-content/plugins/editor-designer/save.php",{data:a,sendmail:!0,language:lang},function(e){$("#mailModal").modal("hide")})}function goToTab(){$("div[data-toggle='collapse']").each(function(){$(this).attr("value")==selected_position?($(this).removeClass("collapsed"),$("#"+$(this).attr("value")+"_desk").addClass("show")):($(this).removeClass("collapsed"),$(this).addClass("collapsed"),$("#"+$(this).attr("value")+"_desk").removeClass("show"))}),$("a[data-toggle='pill']").each(function(){$(this).attr("value")==selected_position?($(this).addClass("active "),$("#pills-"+$(this).attr("value")).addClass("show"),$("#pills-"+$(this).attr("value")).addClass("active")):($("#pills-"+$(this).attr("value")).removeClass("show"),$("#pills-"+$(this).attr("value")).removeClass("active"),$(this).removeClass("active"))})}function clearWarn(e){$("#"+e).hide()}function urldecode(e){return decodeURIComponent(e.replace(/\+/g," ")).replace("#038;","&")}function submitCart(e){var t=createDataObj();t=JSON.stringify(t),$.post("../wp-content/plugins/editor-designer/save.php",{data:t,sendmail:!1,language:lang},function(t){e.meta.reference=t,-1!=editItem&&(e.editItem=editItem),$.post("/",e,function(e){window.location.href=cart_link})})}function findGetParameter(e){var t=null,a=[];return location.search.substr(1).split("&").forEach(function(n){(a=n.split("="))[0]===e&&(t=decodeURIComponent(a[1]))}),t}function createCookie(e,t,a){var n="";if(a){var i=new Date;i.setTime(i.getTime()+60*a*1e3),n="; expires="+i.toUTCString()}t=encodeURIComponent(t),document.cookie=e+"="+t+n+"; path=/"}function readCookie(e){for(var t=e+"=",a=document.cookie.split(";"),n=0;n<a.length;n++){for(var i=a[n];" "==i.charAt(0);)i=i.substring(1,i.length);if(0==i.indexOf(t)){var o=i.substring(t.length,i.length);return o=decodeURIComponent(o)}}return null}function eraseCookie(e){createCookie(e,"",-1)}var cWidth=300,cHeight=500,spaceHorizontal=20,spaceVertical=40,canvasWidth=900,canvasHeight=1200,scale=1;function calcSize(){main=$("#mainview"),cWidth=main.width()-spaceHorizontal,cHeight=main.height()-spaceVertical;var e=document.getElementById("viewerid"),t=document.getElementById("sizeInfoWrap");if(canvasHeight<cHeight&&canvasWidth<cWidth)scale=1;else if(canvasHeight<cHeight)scale=cWidth/canvasWidth;else if(canvasWidth<cWidth)scale=cHeight/canvasHeight;else{var a=cWidth/canvasWidth,n=cHeight/canvasHeight;scale=a<n?a:n}var i=e.style.transform,o="scale("+scale+")",s=/scale\([0-9|\.]*\)/,l=i.replace(s,o);e.style.transform=l,1==scale?$("#zoomButton").hide():isMobile||$("#zoomButton").show(),i=t.style.transform,o="scale("+1/scale+")",s=/scale\([0-9|\.]*\)/,l=i.replace(s,o),t.style.transform=l}$(document).ready(function(e){$(window).resize(function(){calcSize()}),cWidth=main.clientWidth-spaceHorizontal,cHeight=main.clientHeight-spaceVertical,main=$("#mainview")});