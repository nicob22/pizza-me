var app = angular.module('order', []);
app.controller('MainController', function ($scope, $http) {

    $scope.address = {};
    $scope.order = {};
    $scope.order.cheese = false;
    $scope.selecteSi = ['red', '', ''];
    $scope.ingredients = ['Choose ingridients..', 'Mozzarella', 'Tomato', 'Ham', 'Mushrooms', 'zucchini', 'salami'];

    $scope.choosenIngredients = [];
    console.log($scope.order.rand);

    $scope.addIngridient = function (ingredient) {
        if (ingredient !== 'Choose ingridients..') {
            console.log(ingredient);
            if ($scope.choosenIngredients.indexOf(ingredient) === -1) {
                $scope.choosenIngredients.push(ingredient);
            }
        }
    };

    $scope.createOrder = function () {
        $scope.order.ingridients = $scope.choosenIngredients;
        console.log($scope.order.cheese);
        if ($scope.order.cheese)
            $scope.order.rand = 'YES';
        else
            $scope.order.rand = 'NO';
        $scope.order.address = $scope.address;
        console.log($scope.order)
    };

    $scope.deleteIng = function (index) {
        $scope.choosenIngredients.splice(index, 1);
    };

    $scope.selectedSize = function (size) {
        console.log($scope.selecteSi);

        $scope.order.size = size;
        $scope.selecteSi = ['', '', ''];

        if (size === 20)
            $scope.selecteSi = ['red', '', ''];
        if (size === 30)
            $scope.selecteSi = ['', 'red', ''];
        if (size === 40)
            $scope.selecteSi = ['', '', 'red'];

    };

    $scope.sendOrder = function(){
      $http.post('https://echo.getpostman.com/post ', $scope.order)
          .success(function (status) {
              console.log(status)

          })
          .error(function (status,data) {
              console.log(status);
              console.log(data);
          });
    };
    $scope.$watch('order.cheese', function (newV, oldV) {
        console.log(newV);
    });


});


