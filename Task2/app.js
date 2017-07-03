(function(){
    var app= angular.module("myApp",[]);

    app.controller("appController",['$scope','$http',appController]);

    function appController($scope,$http){
            $scope.trimText  = [];

            function sortObj(obj){
                obj.sort(function(a,b){
                    if(a[0]!=b[0]){
                        return a[0]-b[0];
                    }else if(a[1]!=b[1]){
                        return a[1]-b[1];                        
                    }else if(a[2]-b[2]){
                        return a[2]-b[2]
                    }else{
                        return 1;
                    }    
                });
                return obj;
            }

            function arrangeDimension(){
                var obj =  $scope.response.map(function(obj)
                {   
                    var res=[];
                    res=obj.split(",");
                    return res;
                });

                $scope.sortedObj= sortObj(obj);    
                $scope.sortedObj = $scope.sortedObj.map(function(obj){
                    return obj.join(",");
                });           
            }

            function init(){
                $http.get('dimension.txt').then(function(response)
                {
                    $scope.response = response.data.split('\n');
                    arrangeDimension();
                });
            }

            init();
    }

}())