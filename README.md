# 🌿 Kafeel ERP Frontend Snippets

A collection of handy **Vue 3** and **TypeScript** snippets designed for faster and cleaner development in **Kafeel ERP Frontend** projects.  
These snippets are optimized for working with the **ERP-UiKit** components, **MSW mock APIs**, and **validation utilities**.

---

## 📦 Installation

You can install the extension from the Visual Studio Marketplace once it’s published:

```bash
ext install yuosifraedhashem.alkafeel-erp-f-snippets
```


## 📋 Snippet Reference

| Snippet Name | Prefix | Description |
| ------------- | ------- | ----------- |
| **Fetch Data From (MSW)** | `msw-fetch` | Fetch mock data using MSW API and `useApi` composable. |
| **Import KFAdvancedSelect** | `kf-i-advanced-select` | Import the `KFAdvancedSelect` component from ERP-UiKit. |
| **Import KFDataTable** | `kf-i-datatable` | Import the `KFDataTable` component from ERP-UiKit. |
| **Import RequiredValidation** | `kf-i-requiredValidation` | Import the `requiredValidator` method from ERP-UiKit. |
| **Import KFTree** | `kf-i-tree-components` | Import the `KFTree` component from ERP-UiKit. |
| **Import KFDialogWithDiscard** | `kf-i-dialog-with-discard` | Import the `KFDialogWithDiscard` component from ERP-UiKit. |
| **Import AppTextField** | `i-app-text-field` | Import the `AppTextField` component from ERP-UiKit. |
| **Import AppDateTimePicker** | `i-app-time-picker` | Import the `AppDateTimePicker` component from ERP-UiKit. |
| **Use RequiredValidation** | `kf-u-requiredValidation` | Apply the `requiredValidator` helper in templates. |

---

## 🧩 Snippet Examples

### **Fetch Data From (MSW)**
```ts
// Fetch pets data
const { data: data } = await useApi<any>(createUrl('/pages/fake-feature', {
  query: {
    search: ''
  },
}));

const features = computed((): Feature[] => data.value.features)