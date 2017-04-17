// just a concept
var numberOfTables = document.getElementById(tableQuestionID).getElementsByTagName('table').length
var numberOfAnswers = 0;
$scope.questions.forEach(function(item, index, itemsArray) {
    if (item.answer != null)
        numberOfAnswers = numberOfAnswers + 1

})
if(numberOfAnswers<numberOfTables*2){
// prevent the next question

}
