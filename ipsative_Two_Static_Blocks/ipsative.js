testRunner.controllerProvider.register("questionnaire", function($scope) {
  $scope.responseOptions = {{options}};
  $scope.questions = {{questions}}
  //document.getElementsByName("next")[0].disabled=true

  var questionsOverTwo=($scope.questions.length/2) ;
  $scope.questionsBlockOne=$scope.questions.slice(0,questionsOverTwo);
  $scope.questionsBlockTwo=$scope.questions.slice(questionsOverTwo,$scope.questions.length);
// ipsative function here
$scope.ipsetiveButtonChecker = function(ipsetiveQuestionID, ipsetiveQuestionAnswer,tableQuestionID) {
    var numberOfTables = document.getElementById('testContainer').getElementsByTagName('table').length
    var numberOfAnswers = 0
    var tableQuestionArray=document.getElementById(tableQuestionID).getElementsByTagName('input')
    var tableQuestionArrayNames=[];
    for(var i=0 ; i<tableQuestionArray.length ; i++){
      tableQuestionArrayNames.push(tableQuestionArray[i].name)
    }
    $scope.questions.forEach(function(item, index, itemsArray) {
        if (typeof item.answer =="string")
          numberOfAnswers = numberOfAnswers + 1
        if (item.answer == ipsetiveQuestionAnswer && item.id != ipsetiveQuestionID && tableQuestionArrayNames.indexOf("q" + item.id)!= -1 ) {
          numberOfAnswers=numberOfAnswers-1
            document.getElementsByName("q" + item.id).checked = false
            item.answer = null;
        }
          
    })
      if( numberOfAnswers == numberOfTables*$scope.responseOptions.length){ 
  // prevent the next question
   //document.getElementsByName("next")[0].disabled=false
  //alert("you missed a question")
  }
}
///
});
// ng-click="ipsetiveButtonChecker(question.id,option.value,'upperTable')" // add this part

// to this line
// <td class="questionnaire-response-cell" ng-repeat="option in responseOptions"><input name="q[[question.id]]" ng-click="ipsetiveButtonChecker(question.id,option.value)" ng-model="question.answer" type="radio" value="[[option.value]]" /></td>
// also add a name to the table
