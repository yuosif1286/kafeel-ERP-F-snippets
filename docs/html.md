# HTML Snippets

## KF Required Validation Usage

**Description:**  
Usage of Required Validation inside templates.

::: tabs

@tab Prefix
`kf-u-requiredValidation`

@tab Code
```html
requiredValidator(actionRuleModel.name, t).value
```

:::

---

## usage Case AppTextField Component

**Description:**  
This Example To Usage Case AppTextField Component 

::: tabs

@tab Prefix
`kf-u-app-text-field`

@tab Code
```html
				<AppTextField
				  v-model="model.name"
				  :rules="requiredValidator(model.name, t).value"
				  :label="t('employee.employees.child.children.table.name')"
				  :placeholder="
					t('employee.employees.child.children.table.name')
				  "
				/>
```

:::

---

## usage case AppTextarea  component

**Description:**  
This example usage case AppTextArea Component

::: tabs

@tab Prefix
`kf-u-app-text-area`

@tab Code
```html
	<AppTextarea
				  v-model="model.note"
				  :counter="true"
				  :label="t('employee.employees.child.children.table.note')"
				  autocomplete="on"
				  height="29"
				  style="height: 129px !important"
				  rows="4"
				/>
```

:::

---

## usage case AppDateTimePicker components

**Description:**  
This example to usage case AppDateTimePicker Componnent 

::: tabs

@tab Prefix
`kf-u-app-date-time-picker`

@tab Code
```html
				<AppDateTimePicker
				  v-model="model.birthDate"
				  :rules="[(v: any) => !!v || t(`validation.required`)]"
				  :label="
					t('employee.employees.child.children.table.birthDate')
				  "
				  :placeholder="
					t('employee.employees.child.children.table.birthDate')
				  "
				/>
```

:::

---

## Elevation in Dark and light Mode

**Description:**  
This To Get Value of Elevation in dark and light mode

::: tabs

@tab Prefix
`u-elevation`

@tab Code
```html
:elevation="isDark ? 0 : 5" 
```

:::

---

## Usage Case KFDialogWithDiscard Component

**Description:**  
this  example to usage case KFDialogWithDiscard component

::: tabs

@tab Prefix
`kf-u-dialog-with-discard`

@tab Code
```html
  <KFDialogWithDiscard
	v-model="dialog"
	:width="700"
	:observe="[jobPosition, currency]"
	:persistent="loading"
  >
	<template #default="{ isActive, handleClose }">
	</template>
	</KFDialogWithDiscard>
```

:::

---

## usage case app select component

**Description:**  
this  for uasge case AppSelect Components

::: tabs

@tab Prefix
`kf-u-app-select`

@tab Code
```html
 <AppSelect v-model="pet.foodBrandId" :items="foodBrands||[]" item-title="name" item-value="id"
								label="Food Brand"  :rules="requiredValidator(pet.foodBrandId,t).value"/>
```

:::

---

