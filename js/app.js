
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
    accept: function(file, done) {
      console.log("accept");
      done();
    },
    fallback: function() {
      console.log("fallback");
    },
    success: function(file, response) {
      console.log(response);
      for (var i = 1; i <= 5; i++) {
        var idName = "#result";
        var url = response.results[i-1];
        var title = "";
        $.ajax({
          url: url,
          complete: function(data) {
            var matches = data.responseText.match(/<title>(.*?)<\/title>/);
            title = matches[0];
            $(idName + i).attr('href', url).text(title);
            // TODO;
          }
        });
      }
    },
    init: function() {
      this.on("sending", function() {console.log("sending file")});
      this.on("error", function(file) { console.log("error"); });
    }
  };
})
