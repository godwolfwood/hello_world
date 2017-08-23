console.log("hello world!");

$(document).ready(function(){
    var count = 1;
    $.get("http://service.dice.com/api/rest/jobsearch/v1/simple.json?page="+count+"", function(res) {

        for(var i = 0; i < res.resultItemList.length; i++){
        	$('#sidebar').append(
        	"<a href='" + res.resultItemList[i].detailUrl + 
        	 "'><h4>" + res.resultItemList[i].jobTitle + "</h4></a>"+
        	 "<h5>" + res.resultItemList[i].company + "</h5>"+
        	 "<p class = 'job_location'><i>" +"&nbsp"+res.resultItemList[i].location + "</i></p>" +
        	 "<p class = 'job_date'>" + res.resultItemList[i].date + "</p>"
        	)
    		}
    	}, "json");

    $('#sidebar').on('scroll', function() {
        if(Math.round($(this).scrollTop() + $(this).innerHeight(), 10) >= Math.round($(this)[0].scrollHeight, 10)) {
            count++;
            $.get("http://service.dice.com/api/rest/jobsearch/v1/simple.json?page="+count+"", function(res) {

        for(var i = 0; i < res.resultItemList.length; i++){
            $('#sidebar').append(
            "<a href='" + res.resultItemList[i].detailUrl + 
             "'><h4>" + res.resultItemList[i].jobTitle + "</h4></a>"+
             "<h5>" + res.resultItemList[i].company + "</h5>"+
             "<p class = 'job_location'><i>" +"&nbsp"+res.resultItemList[i].location + "</i></p>" +
             "<p class = 'job_date'>" + res.resultItemList[i].date + "</p>"
            )
            }
        }, "json");
        }
    })    
})

