


            
function fillData(data) {
	console.log(data);
	
    holder = $('.data .holder');
	
    /* for text */ 
    
    for (var i = 0; i < data['objects'][0]['here_today'].length; i++) {
        var newli = $('<li>');
        newli.text(data['objects'][0]['here_today'][i]['name']);
        holder.append(newli);
    }

}


$(document).ready(function() {
    // some ajax to select merchants
    var url = "http://apps.officenomads.com/api/v1/activity/?format=jsonp";
    $.ajax({
        url: url,
        type: "GET",
        contentType: 'text/javascript', /*'application/json', /* ; charset=utf-8 */
        dataType: "jsonp"
    }).done(fillData);
});


