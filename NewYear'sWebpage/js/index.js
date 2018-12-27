
$("#btn-save").click( function() {
  var inittext = $("#textarea").val();
    var finaltext=inittext+"\n \n Motivation is mutable; it ebbs and flows. We cannot rely on motivation, but on our steel resolve. You can do this. I'm sure of it.";
  var filename = "NewYearsMotivation";
  var blob = new Blob([finaltext], {type: "text/plain;charset=utf-8"});
  saveAs(blob, filename+".txt");
});
