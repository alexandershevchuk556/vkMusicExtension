/**
 * Обрабатываем нажатие на кнопку 
 */
$('#submit').click(function (e) { 

  /**
   * Назавание трека
   */
  let input = $('#input').val();

  /**
   * Проверяем наполнение переменной и посылаем сообщение
   * content.js с содержанием переменной
   */
  if (input) {
      chrome.storage.sync.set({expression: input}, function() {
      console.log('expression is : ' + input);
    })

    /**
     * Добавляем к истории паттерн поиска
     */
    $('#history').append('<br>' + input)
   

   
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            chrome.tabs.sendMessage(tabs[0].id, input, response)
          });
    
    //Очищаем значение ввода
    $('#input').val('')
    
    //Получаем ответ от content.js и проверяем на истинность
    //Результат записываем в #find
    function response (res) {
      var match = res.response ?? false;
      console.log(match)
    
  
    if (match != null && match != undefined && match != false) {
      $('#find').append('<br>' + 'true')
    } else {
      $('#find').append('<br>' + 'false')
    }
  }
  }

  

})
