var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "Templates/home.html",
        controller :"homecontroller"
    })
    .when("/courses", {
        templateUrl : "Templates/courses.html",
        controller:"coursescontroller"
        
    })
    .when("/teachers", {
        templateUrl : "Templates/teachers.html",
        controller :"teacherscontroller"
    })
    .when("/admissions" ,{
        templateUrl:  "Templates/admissions.html",
        controller :"morecontroller"
    })
      .when("/more" ,{
        templateUrl:  "Templates/more.html",
        controller :"morecontroller"
    });
    
});
 app.controller("homecontroller",function($scope)
{
    $scope.message="nikhil";
    $scope.color="green";
});
 app.controller("coursescontroller",function($scope)
    {
        $scope.courses=['HTML','JAVASCRIPT','CSS','JQUERY','ANGULARJS','PHP']
    }
    );
 app.controller("teacherscontroller",function($scope)
    {
        $scope.message="Teachers";
        $scope.teachers=[{name:"Akash ",age:29,DOB:new Date("November 01,1998"),city:"chennai",Qualification:"Mtech"},
                         {name:"Braddin",age:45,DOB:new Date("June 16,1979"),city:"Delhi",Qualification:"Btech"},
                         {name:"Drek",age:35,DOB:new Date("July 18,1989"),city:"Mumbai",Qualification:"PhD"},
                         {name:"Kelt",age:29,DOB:new Date("August 26,1986"),city:"Rajasthan",Qualification:"MCA"},
                         {name:"Manish",age:23,DOB:new Date("November 19,1909"),city:"MP",Qualification:"Mtech"},
                         {name:"Nikhil",age:38,DOB:new Date("October 05,1997"),city:"UK",Qualification:"Btech"},
                         {name:"Ravi",age:54,DOB:new Date("March 09,2000"),city:"Kerala",Qualification:"PhD"}
                         
                         ]

                     ;
                     $scope.rows=5;
                     $scope.startFrom=0;
        
    });
 app.controller("admissionscontroller",function($scope)
    {
        $scope.message="Teachers";

        
    });
 app.controller("morecontroller",function($scope)
    {
        $scope.message="Teachers";
        
    });
 app.controller("myCtrl",function($scope)
  { $scope.val1="notclicked";
    $scope.likes=99;
    $scope.incrementLikes=function()
    {if($scope.val1=="notclicked")
            
            {$scope.likes++;
            $scope.val1="clicked";}

else 
            {$scope.likes--;
            $scope.val1="notclicked";}

    };
    $scope.dislikes=11;
    $scope.val2="notclicked";
    $scope.incrementdisLikes=function()
   {if($scope.val2=="notclicked")
            
            {$scope.dislikes++;
            $scope.val2="clicked";}

else 
            {$scope.dislikes--;
            $scope.val2="notclicked";}

    };

 });

