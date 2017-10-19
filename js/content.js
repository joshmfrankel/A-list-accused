var current_url = window.location.href.split("?")[0];
var target_url = current_url + "fullcredits";

$.get(target_url, function(page) {
  var page_html = page;

  creeper_found = new RegExp("Harvey Weinstein", "i").test(page_html);

  if (creeper_found) {
    console.warn("Creeper detected!");

    $("#sidebar")
      .append("<div class='watcher'><h2>Weinstein Watcher</h2><p>This entertainment is potentially associated with The Weinstein Company.</p><p>You might want to consider watching something else.</p><br><h2>Why?</h2><p><a href='http://time.com/4990477/lapd-investigation-harvey-weinstein-sexual-assault/'>The LAPD Is Investigating a Sexual Assault Allegation Against Harvey Weinstein</a></div>").fadeIn(250);
  }
}, "html");
