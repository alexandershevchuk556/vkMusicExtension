chrome.runtime.onInstalled.addListener(function() {

    chrome.storage.sync.set({expression: ''}, function() {

    });

    chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
        chrome.declarativeContent.onPageChanged.addRules([{
          conditions: [new chrome.declarativeContent.PageStateMatcher({
            pageUrl: {hostEquals: 'vk.com'},
            css: ["span[class='audio_row__title_inner _audio_row__title_inner']"]
          })
          ],
              actions: [new chrome.declarativeContent.ShowPageAction()]
        }]);
      });
  });