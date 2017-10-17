testRunner.controllerProvider.register("questionnaire", function($scope) {
  $scope.responseOptions = {{options}};
  $scope.questions = {{questions}}
  var questionsOverTwo=($scope.questions.length/3) ;
  var splitNumber=3
  var parentArray=[]

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
  
  $scope.questionsBlockOne=$scope.questions.slice(0,questionsOverTwo);
  $scope.questionsBlockTwo=$scope.questions.slice(questionsOverTwo,questionsOverTwo*2);
  $scope.questionsBlockThree=$scope.questions.slice(questionsOverTwo*2,$scope.questions.length);

// ipsative function here
  $scope.ipsetiveButtonChecker = function(ipsetiveQuestionID, ipsetiveQuestionAnswer, tableQuestionID) { // when a answer is choosen make a  ipsetive check
    numberOfAnswers = 0 // rest the counter to zero
    var tableQuestionArray = document.getElementById(tableQuestionID).getElementsByTagName('input') //get to know  which block is the exam excuted from
    var tableQuestionArrayNames = []; // a empty array for questions 
    for (var i = 0; i < tableQuestionArray.length; i++) {
      tableQuestionArrayNames.push(tableQuestionArray[i].name)
    }
    console.log(tableQuestionArrayNames,"tableQuestionArrayNames")
    $scope.questions.forEach(function(item, index, itemsArray) {
      if (typeof item.answer == "string") // count the number of answers
        numberOfAnswers = numberOfAnswers + 1 // +ve add answers
        console.log(numberOfAnswers,"answer added")
      if (item.answer == ipsetiveQuestionAnswer && item.id != ipsetiveQuestionID && tableQuestionArrayNames.indexOf("q" + item.id) != -1) { // check if the answer is already answered
        numberOfAnswers = numberOfAnswers - 1 // -ve one of the ansers
        document.getElementsByName("q" + item.id).checked = false // remove the check 
        item.answer = null; // make the value null
        console.log(numberOfAnswers,"answer removed")
      }
      

    })
    console.log(numberOfAnswers,"number of answers")
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

