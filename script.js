var app = angular.module("lab16", []);

app.directive("changeOne", function() {
    return {
        restrict: "E",
        replace: false,
        template: "<h1>Beautiful Dreamer</h1>"
    };
    });

    app.directive("changeThree", function() {
        return {
        restrict: "E",
        replace: false,
        template: "<h2>Cats make Good Pets</h2>"
      };
      });

      app.directive("changeFour", function() {
          return {
        restrict: "E",
        replace: false,
        template: "<h4>The Quick Brown Fox Jumped Over the Lazy Dog!</h4>"
    };
    });
    app.directive("changeSix", function() {
        return {
      restrict: "E",
      replace: false,
      template: "<h3>The Quick Brown Fox Jumped Over the Lazy Dog!</h3>"
    };
    });
    app.directive("changeSeven", function() {
        return {
      restrict: "C",
      replace: false,
      template: "<p>BEWARE of Hungry Animals!</p>"
    };
    });
    app.directive("changeEight", function() {
        return {
      restrict: "E",
      replace: false,
      template: "<li>BEWARE of Hungry Animals!</li>"
    };
    });


    //<p class="welcome">Welcome, Guest. Please login or <a href="#">register</a>.</p>



app.directive("changeTwo", function() {
    return {
        restrict: "EA",
        replace: false,
        templateUrl: "changeTwo.html"
    };
});


app.directive("changeFive", function() {
    return {
        restrict: "EA",
        replace: false,
        templateUrl: "changeFive.html"
    };
});
