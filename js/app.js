$(document).foundation()

$(function() {
  Dropzone.options.droparea = {
    url: "http://localhost:5000/upload",
    method: "POST",
    uploadMultiple: false,
    paramName: "file",
    headers: {
        "My-Awesome-Header": "header value"
      },
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
    init: function() {
      this.on("sending", function() {console.log("sending file")});
      this.on("error", function(file) { console.log("error"); });
      this.on("success", function(file, response) {
         alert("Successfully uploaded file.");
       });
    }
  };
})
