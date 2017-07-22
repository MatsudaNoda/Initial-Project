var app = angular.module("bestAgent");
var temp = "";
var sendData = {};
app.controller('AppController', function($scope, $location, $http, $base64) {
		$scope.contractOptions = [{id:10, text:'Buy'}, {id:11, text:'Sell'}];
		$scope.priceOptions = [
			{id: 1, text: '$100,000 to $200,000'},
			{id: 2, text: '$200,000 to $400,000'},
			{id: 3, text: '$400,000 to $600,000'},
			{id: 4, text: '$600,000 to $800,000'},
			{id: 5, text: '$800,000 to $1,000,000'},
			{id: 6, text: '$1,000,000 +'}
			];
		$scope.timeRange = [{id:20, text:"Now"},
		 					{id:21, text:"1-3 months"}, 
		 					{id:22, text:"3-6 months"}, 
		 					{id:23, text:"6-9 months"}, 
		 					{id:24, text:"9-12 months"}, 
		 					{id:25, text:"Not Sure"}];
		$scope.propertyOptions = [{id:30, text:"Single Family"}, 
								{id:31, text:"Townhouse"}, 
								{id:32, text:"Condo"}, 
								{id:33, text:"Multi Unit"}, 
								{id:34, text:"Land"}, 
								{id:35, text:"Mobile Home"}, 
								{id:36, text:"Commercial"}];
		$scope.booleanOptions = [{id:40, text:"YES"}, {id:41, text:"NO"}];
		$scope.approveOptions = [{id:42, text:"YES"}, {id:43, text:"NO"}, {id:44, text:"Paying Cash"}];
		$scope.onSelect = function(item){
			var route;
			if (item.id < 10) {
				route = '/property';
				sendData.priceOption = item.text
			} else if (item.id < 20) {
				if (item.id == 10) {
					temp = "Sell"; 
					route = '/zipcode';
					sendData.main = 'Buy';
				} else {
					temp = "Buy";
					route = '/priceOptions';
					sendData.main = 'Sell';
				}
			} else if(item.id < 30){
				route = "/booleanOption";
				sendData.timeRange = item.text;
			} else if (item.id < 40) {
				route = "/time";
				sendData.propertyOption = item.text
			} else if (item.id < 42) {
				sendData.alsoBuySellOption = item.text
				if (temp == "Sell") {
					route = "/approve";
				} else{
					route = "/address";
				}
			} else if (item.id <45) {
				sendData.approveOption = item.text;
				route = "/info";
			} else if (item.id == 45) {
				sendData.address = $scope.address.address
				sendData.city = $scope.address.city
				sendData.state = $scope.address.state
				sendData.addressZip = $scope.address.zip
				route = "/info";
			} else if (item.id == 50) {
				sendData.buyZipcode = $scope.zip
				route = "/priceOptions"
			} else if (item.id == 51) {
				sendData.firstname = $scope.info.firstname;
				sendData.lastname = $scope.info.lastname;
				sendData.email = $scope.info.email;
				sendData.phone = $scope.info.phone;
				sendData.bestway = $scope.info.bestway;
				route = "/thanks";
				sendMail(sendData);
			} else if (item.id == 60) {
				route = "/"
			} 
			$scope.animationClass = 'moving-left';
			setTimeout(function() {
				$scope.$apply(function() {
					$location.path(route);
				});
			}, 300);
		};
		$scope.option = temp;

		var sendMail = function(sendData){
/*		    console.log(sendData);
		    var mailJSON ={
		    	from: "test@syntervision.com",
	            to: "gabriel.schippers@syntervision.com",
	            subject: "Subject text",
	            text: "Body text",
	            multipart: true	            
		    };
		    var apiURL = "https://api.mailgun.net/v3/sandbox6ae713acf0624afd9e3ed700b432d317.mailgun.org/messages";
		    var requestHeaders = {
                'Content-Type' : 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + $base64.encode('api:key-490ab44144c20be7a0905dadac7ef920')
            };
            console.log('headers: ', requestHeaders);*/
            var postData = JSON.stringify(sendData);
            console.log("POST DATA : ", postData);
		    /*$http({
		        method : "POST",
		        url : "/mail/mail.php",
		        data : {'postData': postData},
		        headers: {'Content-Type' : 'application/x-www-form-urlencoded'}
		    }).then(function mySucces(response) {
		        alert('successful email send.');

		        console.log('successful email send.', response);
		    }, function myError(response) {
		        console.log(' email failed.', response);
		    });*/
		    jQuery.ajax({
                url: '/mail/mail.php',
                dataType: 'text',
                type: 'post',
                data: {'postData': postData},
                success: function( response ){
                    alert('successful email send.');

		        	console.log('Successfully email sent.', response);
                },
                error: function( jqXhr, textStatus, errorThrown ){
                    console.log( errorThrown + "--" + textStatus );
                }
            });
		}
});
    