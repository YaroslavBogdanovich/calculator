window.addEventListener('load', function OnWindowLoaded() {
    // набор кнопок
    var signs = [
        '1', '2', '3', '+',
        '4', '5', '6', '-',
        '7', '8', '9', '/',
        '0', '=', '.', 'c'
    ];
 
    // форма калькулятора
    var calc = document.getElementById('calc');
    // текстовое поле 
    var textArea = document.getElementById('inputVal');
    // Добавление кнопок 
    signs.forEach(function (sign) {
        var signElement = document.createElement('div');
        signElement.className = 'btn';
        signElement.innerHTML = sign;
        calc.appendChild(signElement);
    });
    // добавляет обработку на клик
    document.querySelectorAll('#calc-wrap .btn').forEach(function (button) {
        //действие, при клике на любую кнопку
        button.addEventListener('click', onButtonClick);
    });
    // функция клика по кнопке калькулятора
    function onButtonClick(e) {
        if (e.target.innerHTML === 'c') {
            textArea.innerHTML = '0';
        } else if (e.target.innerHTML === '=') {
            textArea.innerHTML = eval(textArea.innerHTML);
        } else if (textArea.innerHTML === '0') {
            textArea.innerHTML = e.target.innerHTML;
        } else {
            textArea.innerHTML += e.target.innerHTML;
        }
    }
});
function startTimer() {
    var my_timer = document.getElementById("my_timer");
    var time = my_timer.innerHTML;
    var arr = time.split(":");
    /*часы*/
    var h = arr[0];
    /*минуты*/
    var m = arr[1];
    //секунды
    var s = arr[2];
    //Действие, когда таймер равен нулю
    if (s == 0) {
      if (m == 0) {
        if (h == 0) {
          alert("Проснитесь");
          window.location.reload();
          return;
        }
        //ежесекундное обновление
        h--;
        m = 60;
        if (h < 10) h = "0" + h;
      }
      m--;
      if (m < 10) m = "0" + m;
      s = 59;
    }
    else s--;
    if (s < 10) s = "0" + s;
    document.getElementById("my_timer").innerHTML = h+":"+m+":"+s;
    setTimeout(startTimer, 1000);
  }