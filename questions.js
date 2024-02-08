const answersList = document.querySelectorAll('ol.answers li');

answersList.forEach(li => li.addEventListener('click', checkClickedAnswer))

//正しい答え
const correctAnswers = {
    1: 'B',
    2: 'C',
    3: 'C',
    4: 'D',
    5: 'A',
    6: 'D',
    7: 'C',
    8: 'C',
    9: 'A',
    10: 'B',
};

function checkClickedAnswer(event){
    //クリックされた答えの要素（liタグ）
    const clickedAnswerElement = event.currentTarget;

    //選択した答え(A,B,C,D)
    const selectedAnswer = clickedAnswerElement.dataset.answer;

    const questionId = clickedAnswerElement.closest('ol.answers').dataset.id;
    //正しい答え(A,B,C,D)
    const correctAnswer = correctAnswers[questionId];
    //メッセージを入れる変数を用意
    let message;
    //カラーコードを入れる変数を用意
    let answerColorCode;

    //答えが正しいか判定
    if(selectedAnswer === correctAnswer) {
        //正しい答えだった時
        message = 'Your answer is correct. Congratulations!';
        answerColorCode = '';
    }else {
        //間違った答えだった時
        message = 'Your answer is wrong.';
        answerColorCode = '#f05959';
    }

    alert(message);

    //色を変更(間違っていた時だけ色が変わる)
    document.querySelector('span#correct-answer').style.color = answerColorCode;
    //答え全体を表示
    document.querySelector('div#section-correct-answer').style.display = 'block';
}


