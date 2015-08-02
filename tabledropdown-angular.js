var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http,$timeout) {
	$scope.maindata=[{name:"Name1",clicks:10},
	{name:"Name2",clicks:20},
	{name:"Name3",clicks:30},
	{name:"Name4",clicks:40}];

	$scope.bucket0=[{name:"Name1",clicks:10},
	{name:"Name2",clicks:30},
	{name:"Name3",clicks:40},
	{name:"Name4",clicks:50}];

	$scope.bucket1=[{name:"Name1",clicks:130},
	{name:"Name4",clicks:120}];

	$scope.bucket2=[{name:"Name1",clicks:10},
	{name:"Name2",clicks:4340},
	{name:"Name3",clicks:35340}];

	$scope.bucket3=[{name:"Name2",clicks:2230},
	{name:"Name3",clicks:3530},
	{name:"Name4",clicks:4550}];


	$scope.data='';

	$scope.difference=[];

	$scope.buckets=['bucket1','bucket2','bucket3','bucket4'];
	$scope.selectedBucket=-1;
	$scope.table=function($val){
		$scope.selectedBucket=$val;
		$scope.difference=[];
		switch($val)
		{
			case 0:$scope.data=$scope.bucket0;
			break;
			case 1:$scope.data=$scope.bucket1;
			break;
			case 2:$scope.data=$scope.bucket2;
			break;
			case 3:$scope.data=$scope.bucket3;
			break;
		}
		$scope.clickData=[];
		$timeout(function(){ 
			for (var i = 0; i <$scope.maindata.length; i++) {
				$scope.name=$scope.maindata[i].name;
				
				$scope.nameMatch=-1;
				for (var j = 0; j <$scope.data.length; j++) {
					if($scope.name==$scope.data[j].name){
						$scope.nameMatch=1;
						var diff=parseInt($scope.maindata[i].clicks)-parseInt($scope.data[j].clicks);
						console.log(diff);
						$scope.difference.push(diff);
					}				
				}
				if($scope.nameMatch!=1){
					$scope.difference.push('-');
				}
				console.log($scope.difference[i]);
				if($scope.difference[i]=='-'){
					$scope.clickData.push('-');
				}
				else{
					var val=parseInt($scope.maindata[i].clicks)-parseInt($scope.difference[i]);
					$scope.clickData.push(val);
				}
			}
		},0);


	}

});