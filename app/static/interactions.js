$('#submit-survey').on('click', function submitSurvey() {
	var color = $("input[name=color]").val();
	var food = $("input[name=food]").val();
	var vacation = $("input[name=vacation]").val();
	var feBefore = $("input[name=front-end-before]").val();
	var feAfter = $("input[name=front-end-after]").val();
	
	var don = {'color':color,'food':food,'vacation':vacation,'feBefore':feBefore,'feAfter':feAfter};
	alert(don['color']);
	alert('vov');
	// alert('here');


	// $.ajax({
 //        type : "POST",
 //        url : "/submit-survey",
 //        data: JSON.stringify(color),
 //        contentType: 'application/json;charset=UTF-8',
 //        success: function(data) {
 //            console.log('data');
 //        }
 //    	});

 	$.post("submit-survey", {
 					color:color,
 					food:food,
 					vacation:vacation,
 					feBefore:feBefore,
 					feAfter:feAfter


 			}).done(function (reply) {
                $(document.body.parentNode).html(reply)
                
            }
        );


 	
	// $.ajax({
 //  		type: "POST",
 //  		contentType: "application/json; charset=utf-8",
 //  		url: "/submit-survey",
 //  		data: {color: 'hallo', vacation: 'test'},
 //  		success: function (data) {
 //    	console.log(data.color);
 //    	console.log(data.vacation);
 //  		}
	// 	});
		
	// $.ajax({
 //  		type : 'POST',
 //  		url : "/submit-survey",
 //  		contentType: 'application/json;charset=UTF-8',
 //  		data : {'data':don}
	// 	},function(data){
	// 		$(document.body.parentNode).html(data);
	// 	});
 		


// KINDA WORKS
 // 	$.post( "/submit-survey", function( data ) {
 //  			$(document).body().parentNode().html(data);
 //  			alert(data);
 //  			// $( ".result" ).html( data );
	// },'json');
	


	// $.post('/submit-survey', data 
	// 						// 'food':food,
	// 						// 'vacation':vacation,
	// 						// 'color':color,
	// 						// 'feBefore':feBefore,
	// 						// 'feAfter':feAfter
	// 					,
	// 		function(data){
				
	// 			alert(data);
	// 			$(document).body().parentNode().html(data);
	// 			alert('bpb')
				

	// 		}, 'json'

	// 		);
});













$("#site-title-wrapper").on('click', function goHome() {
	window.location.href = '/';
});

$(document).ready(function applySliderLabels() {
	var currentValue = $("#fe-before").val();
	$("#fe-before").next().html(currentValue);

	currentValue = $("#fe-after").val();
	$("#fe-after").next().html(currentValue);
});

$("input[type='range']").on('change', function updateLabel() {
	var currentValue = $(this).val();
	$(this).next().html(currentValue);
});
