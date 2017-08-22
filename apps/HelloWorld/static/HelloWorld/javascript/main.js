// console.log("hello world!");

$(document).ready(function() {
    $("#numbeo").click(function() {
        console.log("I'm clicked!");

        // $.ajax({
        //     url: 'numbeo',
        //     success: function(serverResponse) {
        //         console.log("success. serverResponse:", serverResponse);
        //         $('#placeholder').html(JSON.stringify(serverResponse))
        //     }
        // })

        var url = "http://service.dice.com/api/rest/jobsearch/v1/simple.json";
        $.get(url, function(res) {
            console.log(res);
            var html_string = "<p>" + res.resultItemList.jobTitle + "</p>";
            $('#placeholder2').html(html_string);
        }, "json");
    });
});