$(document).foundation()

Dropzone.options.myAwesomeDropzone = {
  paramName: "file",
  addRemoveLinks: "dictCancelUpload",
  clickable: true,
  accept: function(file, done) {
    if (file.name == "WECHAT.gif") {
      alert("WHAT");
      done("Naha, you don't.");
    }
    else { done(); }
  },
  init: function() {
    this.on("success", function(file) { alert("Successfully uploaded file."); });
  }
};