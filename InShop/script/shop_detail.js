// JavaScript Document
$(document).ready(function() {
    var lis = $(".introduce_title").find("li");
	lis.each(function() {
        var m =$(this);
		m.removeClass(".li_active");
		m.find("a").click(function() {
            m.addClass(".li_active");
        });
    });
});