// just a concept
$scope.ipsative_button_next=function(){
  var numberOfTables = document.getElementById('testContainer').getElementsByTagName('table').length
  var numberOfAnswers = 0
  $scope.questions.forEach(function(item, index, itemsArray) {
      if (item.answer != null)
          numberOfAnswers = numberOfAnswers + 1
  })
  if( numberOfAnswers != numberOfTables*$scope.responseOptions.length){ // TODO to be changed to number of responses instead of just 2
  // prevent the next question
  alert("you missed a question")
  }
}
