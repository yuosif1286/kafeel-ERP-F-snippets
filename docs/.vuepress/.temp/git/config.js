import { GitContributors } from "/home/yoyo/Documents/GitHub/kafeel-ERP-F-snippets/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.115_typescript@5.9.3_vuepress@2.0.0-rc.24_@vuepress+bundl_395d3fec44d0a21d221500c75644f949/node_modules/@vuepress/plugin-git/lib/client/components/GitContributors.js";
import { GitChangelog } from "/home/yoyo/Documents/GitHub/kafeel-ERP-F-snippets/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.115_typescript@5.9.3_vuepress@2.0.0-rc.24_@vuepress+bundl_395d3fec44d0a21d221500c75644f949/node_modules/@vuepress/plugin-git/lib/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
