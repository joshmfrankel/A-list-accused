var current_url = window.location.href.split("?")[0];
var target_url = current_url + "fullcredits";
var resource_urls = {
	"harvey weinstein": {
		"The LAPD Is Investigating a Sexual Assault Allegation Against Harvey Weinstein": "http://time.com/4990477/lapd-investigation-harvey-weinstein-sexual-assault/",
		"Want to be sure you're not paying Harvey Weinstein? There's only one way": "http://mashable.com/2017/10/19/harvey-weinstein-make-money-movies-films-dimension-co/#JXRJRSaVlmqJ"
	},
	"casey affleck": {
		"What to know about the Casey Affleck Oscar Controversy": "http://time.com/4645846/what-to-know-about-the-casey-affleck-oscar-controversy/",
		"Why is no on talking about Casey Affleck?": "http://mashable.com/2016/09/07/casey-affleck-harassment-allegations/#BMkBkVDSQSqS"
	},
  "kevin spacey": {
    "20 allegations uncovered against Kevin Spacey": "http://money.cnn.com/2017/11/16/media/kevin-spacey-old-vic-theatre/index.html",
    "Kevin Spacey: Former TV anchor Heather Unruh says Spacey assaulted her son in 2016": "https://www.usatoday.com/story/life/people/2017/11/08/kevin-spacey-sexual-abuse-assault-harassment-allegatations-news-updates/843288001/"
  }
};

$.get(target_url, function(page) {
  var page_html = page;

  offenders = page_html.match(/Casey Affleck|Harvey Weinstein|Kevin Spacey/gi);

  if (offenders !== null) {
    console.warn("Hollywood offender detected!");

    distinct_offenders = [...new Set(offenders)];

    offender_details = "";
    distinct_offenders.forEach(offender => {
        offender_details += buildHTML(offender.toLowerCase());
    });

    $("#sidebar")
      .append("<div class='watcher'><a href='#' class='close-modal'>X</a><h2>Hollywood Offenders</h2><p>This entertainment is potentially associated with an <strong title='Please double check our sources here'>alleged</strong> offender.</p><br><h2>Why does this matter?</h2>" + offender_details + "</div>").fadeIn(250);

    $(".watcher .close-modal").bind("click", function() {
      $(".watcher").fadeOut(300, function() {
        $(this).remove();
      });
    });
  }
}, "html");

function buildHTML(name) {
	html = "";
	for (var key in resource_urls[name]) {
		html += "<li><a href='" + resource_urls[name][key] + "'>" + key + "</a></li>";
	}
	return "<ul>" + html + "</ul>";
}
