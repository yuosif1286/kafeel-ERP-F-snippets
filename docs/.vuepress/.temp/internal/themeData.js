export const themeData = JSON.parse("{\"encrypt\":{},\"author\":{\"name\":\"Mr.Yuosif\",\"url\":\"https://github.com/yuosif1286\"},\"footer\":\"\\n      <a href=\\\"https://github.com/yuosif1286\\\" target=\\\"_blank\\\">GitHub</a> |\\n      <a href=\\\"https://www.linkedin.com/in/yuosif-raed-04a84621a\\\" target=\\\"_blank\\\">LinkedIn</a>\\n    \",\"displayFooter\":true,\"locales\":{\"/\":{\"lang\":\"en-US\",\"navbarLocales\":{\"langName\":\"English\",\"selectLangAriaLabel\":\"Select language\"},\"metaLocales\":{\"author\":\"Author\",\"date\":\"Writing Date\",\"origin\":\"Original\",\"views\":\"Page views\",\"category\":\"Category\",\"tag\":\"Tag\",\"readingTime\":\"Reading Time\",\"words\":\"Words\",\"toc\":\"On This Page\",\"prev\":\"Prev\",\"next\":\"Next\",\"contributors\":\"Contributors\",\"editLink\":\"Edit this page\",\"print\":\"Print\"},\"outlookLocales\":{\"themeColor\":\"Theme Color\",\"darkmode\":\"Theme Mode\",\"fullscreen\":\"Full Screen\"},\"routerLocales\":{\"skipToContent\":\"Skip to main content\",\"notFoundTitle\":\"Page not found\",\"notFoundMsg\":[\"There’s nothing here.\",\"How did we get here?\",\"That’s a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"back\":\"Go back\",\"home\":\"Take me home\"},\"navbar\":[{\"text\":\"Home\",\"link\":\"/\"},{\"text\":\"Guide\",\"link\":\"/guide/\"},{\"text\":\"ChangeLog\",\"link\":\"/CHANGELOG.md\"},{\"text\":\"Social\",\"children\":[{\"text\":\"GitHub\",\"link\":\"https://github.com/yuosif1286\"},{\"text\":\"LinkedIn\",\"link\":\"https://www.linkedin.com/in/yuosif-raed-04a84621a\"}]}]}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
