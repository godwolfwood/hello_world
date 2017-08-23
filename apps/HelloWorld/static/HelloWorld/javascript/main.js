
console.log("hello world!");

$(document).ready(function(){
    $.get("http://service.dice.com/api/rest/jobsearch/v1/simple.json", function(res) {
        console.log(res.resultItemList.length);

        for(var i = 0; i < res.resultItemList.length; i++){
        	$('.jobs').append(
        	"<a href='" + res.resultItemList[i].detailUrl + 
        	 "'><h4>" + res.resultItemList[i].jobTitle + "</h4></a>"+
        	 "<h5>" + res.resultItemList[i].company + "</h5>"+
        	 "<p class = 'job_location'><i>" +"&nbsp"+res.resultItemList[i].location + "</i></p>" +
        	 "<p class = 'job_date'>" + res.resultItemList[i].date + "</p>"
        	)
    		}
    	}, "json");
})

$(window).scroll(function() {
   if($(window).scrollTop() + $(window).height() == $(document).height()) {
       alert("bottom!");
   }
});