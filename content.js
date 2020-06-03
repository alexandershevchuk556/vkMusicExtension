
/**
 * Ждем сообщение с названием трека
 * 
 * Получаем, проверяем наличие на странице класса с текстом 
 * совпадающим с названием трека внутри регулярного выражения
 * 
 * Возвращаем результат в popup.js
 */
chrome.runtime.onMessage.addListener(function (req, sender, sendResponse) {

    var response = $('.audio_row__title_inner._audio_row__title_inner').text().match(new RegExp(req, 'ig')) ?? false;

    sendResponse({response: response})

})