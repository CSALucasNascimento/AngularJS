var app = angular.module("MyApp", []);

app.directive('restrictions', function () {
    return {
        restrict: 'A',
        link: function(){
            console.log("I am an attribute");
        }
    }
});

app.directive('elementrest', function () {
    return {
        restrict: 'E',
        link: function(){
            console.log("I am an element");
        }
    }
});

app.directive('classrest', function () {
    return {
        restrict: 'C',
        link: function(){
            console.log("I am a class restriction");
        }
    }
});

app.directive('commentrest', function () {
    return {
        restrict: 'M',
        link: function(){
            console.log("I am a comment restriction");
        }
    }
});

app.controller ('ShieldCtrl', function($scope){

    $scope.shieldNames = [];

    this.addReigns = function (){
        $scope.shieldNames.push("Roman Reigns: Juggernaut");
    };
    this.addRollings = function (){
        $scope.shieldNames.push("Seth Rollins: Architect");
    };
    this.addAmbrose = function (){
        $scope.shieldNames.push("Dean Ambrose: Lunatic Fringe");
    };

});

app.directive ('theshield', function(){
    return {
        restrict: 'E',
        scope: {},
        controller: 'ShieldCtrl',
        link: function(scope, element, attrs){
            element.bind('mouseenter', function(){
               console.log(scope.shieldNames);
            });
        }
    }
});

app.directive ('reigns', function(){
    return {
        require: 'theshield',
        link: function (scope, element, attrs, ShieldCtrl) {
            ShieldCtrl.addReigns();
        }
    }
});

app.directive ('rollins', function(){
    return {
        require: 'theshield',
        link: function (scope, element, attrs, ShieldCtrl) {
            ShieldCtrl.addRollings();
        }
    }
});

app.directive ('ambrose', function(){
    return {
        require: 'theshield',
        link: function (scope, element, attrs, ShieldCtrl) {
            ShieldCtrl.addAmbrose();
        }
    }
});



app.directive ('interactiveBtn', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attrs){
            element.bind('mouseenter', function(){
                element[0].innerText = "Rolled Over";
            });
            element.bind('mouseleave', function(){
                element[0].innerText = "Rolled Out";
            })
        }
    }
});



app.directive('walterwhite', function(){
   return {
       restrict: 'E',
       transclude: true,
       link: function (scope, element, attrs)
       {
           /*console.log(scope);
           console.log(element);
           console.log(attrs);*/
       }
   }
});

