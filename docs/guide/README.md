# Guide

this test page Guide

```state Check if n is negative

state if_state <<choice>>
[*] --> IsPositive
IsPositive --> if_state
if_state --> False: if n < 0
if_state --> True : if n >= 0
```

Install VuePress:

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D vuepress
```

@tab yarn

```bash
yarn add -D vuepress
```

@tab:active npm

```bash
npm i -D vuepress
```

:::

Install VuePress Tabs Plugin:

::: code-tabs#shell

@tab pnpm

```bash
pnpm add -D @vuepress/plugin-markdown-tab
```

@tab yarn

```bash
yarn add -D @vuepress/plugin-markdown-tab
```

@tab:active npm

```bash
npm i -D @vuepress/plugin-markdown-tab
```

:::