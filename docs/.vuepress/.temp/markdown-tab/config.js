import { CodeTabs } from "/home/yoyo/Documents/GitHub/kafeel-ERP-F-snippets/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.112_markdown-it@14.1.0_typescript@5.9.3_vuepress_6d2c90015724beb26be2fe1021fc5d7b/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/home/yoyo/Documents/GitHub/kafeel-ERP-F-snippets/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.112_markdown-it@14.1.0_typescript@5.9.3_vuepress_6d2c90015724beb26be2fe1021fc5d7b/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/home/yoyo/Documents/GitHub/kafeel-ERP-F-snippets/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.112_markdown-it@14.1.0_typescript@5.9.3_vuepress_6d2c90015724beb26be2fe1021fc5d7b/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
