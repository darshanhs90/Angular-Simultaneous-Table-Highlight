var app=angular.module('myApp',[]);
app.controller('myCtrl',function($scope,$http) {
$scope.data1=[{name:"Name1",name2:"01",name3:"02",name4:"03"},
				{name:"Name2",name2:"11",name3:"12",name4:"13"},
				{name:"Name3",name2:"21",name3:"22",name4:"23"},
				{name:"Name4",name2:"31",name3:"32",name4:"33"}];

$scope.data2=[{name:"Name4",name2:"31",name3:"32",name4:"33"},
				{name:"Name3",name2:"21",name3:"22",name4:"23"},
				{name:"Name2",name2:"11",name3:"12",name4:"13"},
				{name:"Name1",name2:"01",name3:"02",name4:"03"}];
$scope.x=-1;

$scope.newIndex=-1;
$scope.highlight=function($val){
$scope.x=$val;
$scope.set_color($val);
var name=($scope.data1[$val].name);
for (i = 0; i < $scope.data2.length; i++) { 
    if(name==$scope.data2[i].name)
    {
    	$scope.newIndex=i;
    	$scope.set_color1($scope.newIndex);
    	break;
    }
}
};


$scope.set_color=function($val){	
if($scope.x==$val)
	return { backgroundColor: "red" }
else
	return { backgroundColor: "white" }
};

$scope.set_color1=function($val1){	
if($scope.newIndex==$val1)
	return { backgroundColor: "red" }
else
	return { backgroundColor: "white" }
};


});