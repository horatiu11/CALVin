angular.module('app.controllers', [])
  
.controller('cALVinCtrl', function($scope) {

})
   
.controller('cALVin2Ctrl', function($scope) {

})
   
.controller('aboutCtrl', function($scope) {

})
   
.controller('contactUsCtrl', function($scope) {

  //Function for sending email
  $scope.sendFeedback= function() {

        //Getting the values of the input fields for the email
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var message = document.getElementById('message').value;
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(name === '' || email === '' || phone === '' || message === ''){
          navigator.notification.alert("Please, complete all the fields from the above!");
        }
        else if(!re.test(email)){
          navigator.notification.alert("Please, insert a valid email address!");
        }
        //If the email is correctly configured, send it with the specific details
        else if(window.plugins && window.plugins.emailComposer) {
            window.plugins.emailComposer.showEmailComposerWithCallback(function(result) {
                console.log("Response -> " + result);
            }, 
            "New Enquiry - "+name, // Subject
            message+"\nContact details: "+email+"  "+phone,                      // Body
            ["calvinapp.help@gmail.com"],    // To
            null,                    // CC
            null,                    // BCC
            false,                   // isHTML
            null,                    // Attachments
            null);                   // Attachment Data
        }
    }

})
   
.controller('fAQsCtrl', function($scope) {

})
   
.controller('highFrontCtrl', function($scope, $ionicPopover) {

  //Start recording when touching the record button
  $scope.onTouch = function() {
    startRecording('record');
  }

  //Stop recording when releasing the button
  $scope.onRelease = function() {
    stopRecording();
  }

  //Previous step-by-step image when right swipe
  $scope.onSwipeRight = function(){
    prevImg();
  }

  //Next step-by-step image when left swipe
  $scope.onSwipeLeft = function(){
    nextImg();
  }

  //Opening popover with the vowel pronounciation animation
  $scope.openPopover = function($event) {

    //Declaring the template to be displayed, including the path to the right .gif
    var template = '<style>.popover { height:60%; width: 95%;}</style><ion-popover-view><ion-header-bar class="bar-calm">'+
    ' <h1 id="aaa" align="center" class="title">Vowel pronounciation animation</h1> </ion-header-bar> <ion-content>'+
    ' <img src="animations/gifs/'+ document.getElementById('ex3').innerText.split(' ')[0] +'.gif?a=' + Math.random() +'" width="100%" height="auto"><button class="button button-calm button-block" ng-click="closePopover()">Close Animation</button> '+
    '</ion-content></ion-popover-view>';

    //Creating popover
    $scope.popover = $ionicPopover.fromTemplate(template, {
      scope: $scope
    });

    //Showing popover and playing specific sound
    $scope.popover.show($event);
    var URL = document.getElementById('ex3').innerText.split(' ')[0];
    playAudio('sounds/isoV/'+URL+'.wav');
  };

  //Closing popover
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });

})
   
.controller('openCtrl', function($scope, $ionicPopover) {
  //Start recording when touching the record button
  $scope.onTouch = function() {
    startRecording('record');
  }

  //Stop recording when releasing the button
  $scope.onRelease = function() {
    stopRecording();
  }

  //Previous step-by-step image when right swipe
  $scope.onSwipeRight = function(){
    prevImg();
  }

  //Next step-by-step image when left swipe
  $scope.onSwipeLeft = function(){
    nextImg();
  }

  //Opening popover with the vowel pronounciation animation
  $scope.openPopover = function($event) {

    //Declaring the template to be displayed, including the path to the right .gif
    var template = '<style>.popover { height:60%; width: 95%;}</style><ion-popover-view><ion-header-bar class="bar-calm">'+
    ' <h1 id="aaa" align="center" class="title">Vowel pronounciation animation</h1> </ion-header-bar> <ion-content>'+
    ' <img src="animations/gifs/'+ document.getElementById('ex3').innerText.split(' ')[0] +'.gif?a=' + Math.random() +'" width="100%" height="auto"><button class="button button-calm button-block" ng-click="closePopover()">Close Animation</button> '+
    '</ion-content></ion-popover-view>';

    //Creating popover
    $scope.popover = $ionicPopover.fromTemplate(template, {
      scope: $scope
    });

    //Showing popover and playing specific sound
    $scope.popover.show($event);
    var URL = document.getElementById('ex3').innerText.split(' ')[0];
    playAudio('sounds/isoV/'+URL+'.wav');
  };

  //Closing popover
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });

})
   
.controller('centralLowBackCtrl', function($scope, $ionicPopover) {
$scope.onTouch = function() {
    startRecording('record');
  }

  $scope.onRelease = function() {
    stopRecording();
  }

  $scope.onSwipeRight = function(){
    prevImg();
  }

  $scope.onSwipeLeft = function(){
    nextImg();
  }

  $scope.openPopover = function($event) {

    var template = '<style>.popover { height:60%; width: 95%;}</style><ion-popover-view><ion-header-bar class="bar-calm">'+
    ' <h1 id="aaa" align="center" class="title">Vowel pronounciation animation</h1> </ion-header-bar> <ion-content>'+
    ' <img src="animations/gifs/'+ document.getElementById('ex3').innerText.split(' ')[0] +'.gif?a=' + Math.random() +'" width="100%" height="auto"><button class="button button-calm button-block" ng-click="closePopover()">Close Animation</button> '+
    '</ion-content></ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
      scope: $scope
    });

    $scope.popover.show($event);
    var URL = document.getElementById('ex3').innerText.split(' ')[0];
    playAudio('sounds/isoV/'+URL+'.wav');
  };
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });

})
   
.controller('backCtrl', function($scope, $ionicPopover) {
  //Start recording when touching the record button
  $scope.onTouch = function() {
    startRecording('record');
  }

  //Stop recording when releasing the button
  $scope.onRelease = function() {
    stopRecording();
  }

  //Previous step-by-step image when right swipe
  $scope.onSwipeRight = function(){
    prevImg();
  }

  //Next step-by-step image when left swipe
  $scope.onSwipeLeft = function(){
    nextImg();
  }

  //Opening popover with the vowel pronounciation animation
  $scope.openPopover = function($event) {

    //Declaring the template to be displayed, including the path to the right .gif
    var template = '<style>.popover { height:60%; width: 95%;}</style><ion-popover-view><ion-header-bar class="bar-calm">'+
    ' <h1 id="aaa" align="center" class="title">Vowel pronounciation animation</h1> </ion-header-bar> <ion-content>'+
    ' <img src="animations/gifs/'+ document.getElementById('ex3').innerText.split(' ')[0] +'.gif?a=' + Math.random() +'" width="100%" height="auto"><button class="button button-calm button-block" ng-click="closePopover()">Close Animation</button> '+
    '</ion-content></ion-popover-view>';

    //Creating popover
    $scope.popover = $ionicPopover.fromTemplate(template, {
      scope: $scope
    });

    //Showing popover and playing specific sound
    $scope.popover.show($event);
    var URL = document.getElementById('ex3').innerText.split(' ')[0];
    playAudio('sounds/isoV/'+URL+'.wav');
  };

  //Closing popover
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });

})
   
.controller('diphthongsCtrl', function($scope, $ionicPopover) {
  //Start recording when touching the record button
  $scope.onTouch = function() {
    startRecording('record');
  }

  //Stop recording when releasing the button
  $scope.onRelease = function() {
    stopRecording();
  }

  //Previous step-by-step image when right swipe
  $scope.onSwipeRight = function(){
    prevImg();
  }

  //Next step-by-step image when left swipe
  $scope.onSwipeLeft = function(){
    nextImg();
  }

  //Opening popover with the vowel pronounciation animation
  $scope.openPopover = function($event) {

    //Declaring the template to be displayed, including the path to the right .gif
    var template = '<style>.popover { height:60%; width: 95%;}</style><ion-popover-view><ion-header-bar class="bar-calm">'+
    ' <h1 id="aaa" align="center" class="title">Vowel pronounciation animation</h1> </ion-header-bar> <ion-content>'+
    ' <img src="animations/gifs/'+ document.getElementById('ex3').innerText.split(' ')[0] +'.gif?a=' + Math.random() +'" width="100%" height="auto"><button class="button button-calm button-block" ng-click="closePopover()">Close Animation</button> '+
    '</ion-content></ion-popover-view>';

    //Creating popover
    $scope.popover = $ionicPopover.fromTemplate(template, {
      scope: $scope
    });

    //Showing popover and playing specific sound
    $scope.popover.show($event);
    var URL = document.getElementById('ex3').innerText.split(' ')[0];
    playAudio('sounds/isoV/'+URL+'.wav');
  };

  //Closing popover
  $scope.closePopover = function() {
    $scope.popover.hide();
  };
  
  //Cleanup the popover when we're done with it!
  $scope.$on('$destroy', function() {
    $scope.popover.remove();
  });
  // Execute action on hide popover
  $scope.$on('popover.hidden', function() {
    // Execute action
  });
  // Execute action on remove popover
  $scope.$on('popover.removed', function() {
    // Execute action
  });

})
