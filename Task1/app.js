(function(){
    var app= angular.module("myApp",[]);

    app.controller("appController",['$scope','$http',appController]);

    function appController($scope,$http){
            $scope.trimText  = [];
            function showTrimText(){
                for(var item in $scope.response.items){
                    var obj=$scope.response.items[item];
                    var str= $scope.response.text.substr(obj.startIndex,(obj.endIndex-obj.startIndex));
                    $scope.trimText.push(str.bold());
                }
                
            }

            function init(){
                $http.get('data.json').then(function(response)
                {
                    $scope.response = response.data;
                    showTrimText();
                });
            }

            init();
    }

}())