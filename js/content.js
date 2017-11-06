var current_url = window.location.href.split("?")[0];
var target_url = current_url + "fullcredits";
var resource_urls = {
	"Harvey Weinstein": {
		"The LAPD Is Investigating a Sexual Assault Allegation Against Harvey Weinstein": "http://time.com/4990477/lapd-investigation-harvey-weinstein-sexual-assault/",
		"Want to be sure you're not paying Harvey Weinstein? There's only one way": "http://mashable.com/2017/10/19/harvey-weinstein-make-money-movies-films-dimension-co/#JXRJRSaVlmqJ"
	},
	"Casey Affleck": {
		"What to know about the Casey Affleck Oscar Controversy": "http://time.com/4645846/what-to-know-about-the-casey-affleck-oscar-controversy/",
		"Why is no on talking about Casey Affleck?": "http://mashable.com/2016/09/07/casey-affleck-harassment-allegations/#BMkBkVDSQSqS"
	}
};

$.get(target_url, function(page) {
  var page_html = page;

  offender_detected = new RegExp("(Harvey Weinstein|Casey Affleck|Woody Allen)", "i").test(page_html);

  if (offender_detected) {
    console.warn("Creeper detected!");

    offender_details = buildHTML("Harvey Weinstein");

    $("#sidebar")
      .append("<div class='watcher'><h2>Hollywood Offenders</h2><p>This entertainment is potentially associated with an <strong title='Please double check us here'>alleged</strong> offender.</p><br><h2>Why does this matter?</h2>" + offender_details + "</div>").fadeIn(250);
  }
}, "html");

function buildHTML(name) { 
	html = "";
	for (var key in resource_urls[name]) {
		html += "<li><a href='" + resource_urls[name][key] + "'>" + key + "</a></li>";
	}
	return "<ul>" + html + "</ul>";
}