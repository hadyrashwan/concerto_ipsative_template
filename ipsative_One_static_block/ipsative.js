testRunner.controllerProvider.register("questionnaire", function($scope) {
  $scope.responseOptions = {{options}};
  $scope.questions = {{questions}}
// ipsative function here
$scope.ipsetiveButtonChecker = function(ipsetiveQuestionID, ipsetiveQuestionAnswer,tableQuestionID) {
    var tableQuestionArray=document.getElementById(tableQuestionID).getElementsByTagName('input')
    var tableQuestionArrayNames=[];
    for(var i=0 ; i<tableQuestionArray.length ; i++){
      tableQuestionArrayNames.push(tableQuestionArray[i].name)
    }
    $scope.questions.forEach(function(item, index, itemsArray) {
        if (item.answer == ipsetiveQuestionAnswer && item.id != ipsetiveQuestionID && tableQuestionArrayNames.indexOf("q" + item.id)!= -1 ) {
            document.getElementsByName("q" + item.id).checked = false
            item.answer = null;
        }
    })
}
///
});
// ng-click="ipsetiveButtonChecker(question.id,option.value,'upperTable')" // add this part

// to this line
// <td class="questionnaire-response-cell" ng-repeat="option in responseOptions"><input name="q[[question.id]]" ng-click="ipsetiveButtonChecker(question.id,option.value)" ng-model="question.answer" type="radio" value="[[option.value]]" /></td>
// also add a name to the table
