function getJobs(count, x, w, y, z){
    // console.log(x, w, y, z);
    var url = "http://service.dice.com/api/rest/jobsearch/v1/simple.json?page="+count+"&text="+x+"&skill="+w+"&city="+y+","+z;
    $.get(url, function(res) {
        for(var i = 0; i < res.resultItemList.length; i++){
            $('#sidebar').append(
            "<a href='" + res.resultItemList[i].detailUrl + 
             "' target='_blank'><h4>" + res.resultItemList[i].jobTitle + "</h4></a>"+
             "<h5>" + res.resultItemList[i].company + "</h5>"+
             "<p class = 'job_location'><i>" +"&nbsp"+res.resultItemList[i].location + "</i></p>" +
             "<p class = 'job_date'>" + res.resultItemList[i].date + "</p>");
        }
    }, "json");
 }

 $(document).ready(function(){
    var count = 1;
    var filter = {}
    filter['searches']= $('#search_filter').val();
    filter['skills']= $('#skills_filter').val();
    filter['cities']= $('#city_filter').val();
    filter['states']= $('#state_filter').val();
    // console.log(filter);
    getJobs(count, filter.searches, filter.skills, filter.cities, filter.states);
    $('#sidebar').on('scroll', function() {
        if(Math.round($(this).scrollTop() + $(this).innerHeight(), 10) >= Math.round($(this)[0].scrollHeight, 10)) {
            count++;
            getJobs(count, filter.searches, filter.skills, filter.cities, filter.states);
        }
    });
})