testRunner.controllerProvider.register("questionnaire", function($scope) {
  $scope.responseOptions = {{options}};
  $scope.questions = {{questions}}
// ipsative function here
                                       
var numberOfTables = document.getElementById('testContainer').getElementsByTagName('table').length // count the tables
  var numberOfAnswers = 0 // set the counter of answers to zero at first 
  document.getElementsByName("next")[0].disabled = true // disable the next button at first
  
  
    $scope.questions.forEach(function(item, index, itemsArray) { // a for each to count the number of answers
    if (typeof item.answer == "string")
      numberOfAnswers = numberOfAnswers + 1
  })
  if (numberOfAnswers == numberOfTables * $scope.responseOptions.length) { // see if all answers are collected
    // prevent the next question
    document.getElementsByName("next")[0].disabled = false // open the button

  }

                                       
$scope.ipsetiveButtonChecker = function(ipsetiveQuestionID, ipsetiveQuestionAnswer,tableQuestionID) {
  
      numberOfAnswers = 0 // rest the counter to zero
  
    var tableQuestionArray=document.getElementById(tableQuestionID).getElementsByTagName('input')
    var tableQuestionArrayNames=[];
    for(var i=0 ; i<tableQuestionArray.length ; i++){
      tableQuestionArrayNames.push(tableQuestionArray[i].name)
    }
    $scope.questions.forEach(function(item, index, itemsArray) {
      

        if (typeof item.answer == "string") // count the number of answers
        numberOfAnswers = numberOfAnswers + 1 // +ve add answers
      
        if (item.answer == ipsetiveQuestionAnswer && item.id != ipsetiveQuestionID && tableQuestionArrayNames.indexOf("q" + item.id)!= -1 ) {
            numberOfAnswers = numberOfAnswers - 1 // -ve one of the ansers
            document.getElementsByName("q" + item.id).checked = false
            item.answer = null;
        }
    })
    
     if (numberOfAnswers == numberOfTables * $scope.responseOptions.length) { // check if they did answer everything
      // prevent the next question
      document.getElementsByName("next")[0].disabled = false //remove the disable
      //alert("you missed a question")
    } else {
      document.getElementsByName("next")[0].disabled = true //re enable the function
    }
}
///
});
// ng-click="ipsetiveButtonChecker(question.id,option.value,'upperTable')" // add this part

// to this line
// <td class="questionnaire-response-cell" ng-repeat="option in responseOptions"><input name="q[[question.id]]" ng-click="ipsetiveButtonChecker(question.id,option.value)" ng-model="question.answer" type="radio" value="[[option.value]]" /></td>
// also add a name to the table
