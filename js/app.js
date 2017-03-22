
$(document).foundation()

$(function() {
  Dropzone.options.droparea = {
    url: "http://localhost:5000/upload",
    method: "POST",
    uploadMultiple: false,
    paramName: "file",
    addRemoveLinks: "dictCancelUpload",
    autoProcessQueue: true,
    clickable: true,
    headers: {
        "Accept": null,
        "Cache-Control": null,
        "X-Requested-With": null
    },
    accept: function(file, done) {
      console.log("accept");
      done();
    },
    fallback: function() {
      console.log("fallback");
    },
    init: function() {
      this.on("sending", function() {
        console.log("sending file");
        $(".loader").show();
      });
      this.on("error", function(file) { console.log("error"); });
      this.on("success", function(file, response) {
        console.log(response);
        for (var i = 1; i <= 5; i++) {
          var idName = "#result" + i;
          var url = response.results[i-1];
          $(idName).attr('href', url);
        }
        getTitle(0, response.results);
        $(".loader").hide();
        $(".results").show();
      });
    }
  };
})

window.getTitle=function(counter, urls) {
  var postUrl = urls[counter];
  $.ajax({
    url: postUrl,
    async: true,
    success: function(data) {
      counter++;
      var idName = "#result" + counter;
      var matches = data.match(/<title>(.*?)<\/title>/);
      var title = $(matches[0]).text();
      $(idName).text(title);
      if (counter < 5) getTitle(counter, urls);
    }
  })
}
