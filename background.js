browser.omnibox.onInputChanged.addListener(async (_text, addSuggestions) => {
  const suggestions = [];
  const tabs = await browser.tabs.query({active: false, currentWindow: true});
  for (const tab of tabs) {
    suggestions.push({
      description: tab.title,
      content: tab.url,
    });
  }

  addSuggestions(suggestions);
});