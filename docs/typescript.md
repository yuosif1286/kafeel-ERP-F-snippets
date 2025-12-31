# TYPESCRIPT Snippets

## Fetch Data From (MSW)

**Description:**  
Fetch pets data using MSW mock API

::: tabs

@tab Prefix
`msw-fetch`

@tab Code
```typescript
// Fetch pets data
const { data: data } = await useApi<any>(createUrl('/pages/fake-feature', {
  query: {
    search: ''
  },
}));

const features = computed((): Feature[] => data.value.features)
```

:::

---

## Import KF-Advanced-Select From Ui-Kit

**Description:**  
Import KFAdvanced component.

::: tabs

@tab Prefix
`kf-i-advanced-select`

@tab Code
```typescript
import KFAdvanceSelect from "ERP-UiKit/components/v2/KFAdvancedSelect"
```

:::

---

## Import KF-Data-Table From Ui-Kit

**Description:**  
Import KFDataTable component.

::: tabs

@tab Prefix
`kf-i-data-table`

@tab Code
```typescript
import KFDataTable from "ERP-UiKit/components/KFDataTable"
```

:::

---

## Import KF-RequiredValidation From Ui-Kit

**Description:**  
Import requiredValidator method.

::: tabs

@tab Prefix
`kf-i-requiredValidation`

@tab Code
```typescript
import { requiredValidator } from "ERP-UiKit/helper/validations"
```

:::

---

## Import KFTree From uiKit

**Description:**  
Import KFTree Components From Ui-Kit

::: tabs

@tab Prefix
`kf-i-tree-components`

@tab Code
```typescript
import KFTree from "ERP-UiKit/components/KFTree";
```

:::

---

## Import KFDialogWithDiscard Components

**Description:**  
Import DialogWithDiscard Components From UiKit

::: tabs

@tab Prefix
`kf-i-dialog-with-discard`

@tab Code
```typescript
import KFDialogWithDiscard from "ERP-UiKit/components/KFDialogWithDiscard";
```

:::

---

## Import AppTextField From UiKit

**Description:**  
Import AppTextField Component From UiKit

::: tabs

@tab Prefix
`kf-i-app-text-field`

@tab Code
```typescript
import AppTextField from "ERP-UiKit/@core/components/elements/AppTextField";
```

:::

---

## Import AppDateTimePicker From Uikit

**Description:**  
Import AppTimePicker Component From UiKit

::: tabs

@tab Prefix
`kf-i-app-time-picker`

@tab Code
```typescript
import AppDateTimePicker from "ERP-UiKit/@core/components/elements/AppDateTimePicker";
```

:::

---

## Import AppTextArea From UIKit

**Description:**  
This For Import AppTextArea components From Uikit

::: tabs

@tab Prefix
`kf-i-app-text-area`

@tab Code
```typescript
import AppTextarea from "ERP-UiKit/@core/components/elements/AppTextarea";
```

:::

---

## isDark Mode Computed Value From  current them

**Description:**  
this to get computed value of dark mode

::: tabs

@tab Prefix
`is-dark`

@tab Code
```typescript
const isDark = computed(() => theme.current.value.dark);
```

:::

---

## use Theme From Vuetify 

**Description:**  
this to get theme from vuetify

::: tabs

@tab Prefix
`use-theme`

@tab Code
```typescript
const theme = useTheme();
```

:::

---

## define emits example

**Description:**  
this for used define emits example

::: tabs

@tab Prefix
`emits-example`

@tab Code
```typescript
const emits = defineEmits<{
  (e: "close"): void;
  (e: "add", item?: any): void;
  (e: "update", item?: any): void;
}>();
```

:::

---

## define model example

**Description:**  
this example to used defineModel

::: tabs

@tab Prefix
`model-example`

@tab Code
```typescript
const isEdit = defineModel<boolean>("edit", {
  required: false,
  type: Boolean,
  default: false,
});
```

:::

---

## this for confirm is valid Form 

**Description:**  
this usage to confirm if the form is valid

::: tabs

@tab Prefix
`is-valid-form`

@tab Code
```typescript
if(!(await isValidForm(form)))
		return;
```

:::

---

## this to get enum key  and value as list 

**Description:**  
this to get  name and value as  array of oobject from enum type

::: tabs

@tab Prefix
`enum-get-name-and-value`

@tab Code
```typescript
const animalSpeciesList = EnumHelpers.getNamesAndValues(AnimalSpecies)
```

:::

---

## mock request get with pagination

**Description:**  
this will generating  method mock data with pagination endpoint

::: tabs

@tab Prefix
`mk-get-with-pagination`

@tab Code
```typescript

  http.get(('/api/apps/food/types'), ({ request }) => {
	const url = new URL(request.url)

	const q = url.searchParams.get('q')
	const sortBy = url.searchParams.get('sortBy')
	const orderBy = url.searchParams.get('orderBy')
	const itemsPerPage = url.searchParams.get('itemsPerPage')
	const page = url.searchParams.get('page')

	const parsedSortBy = destr(sortBy)
	const sortByLocal = is.string(parsedSortBy) ? parsedSortBy : ''

	const parsedOrderBy = destr(orderBy)
	const orderByLocal = is.string(parsedOrderBy) ? parsedOrderBy : ''

	const parsedItemsPerPage = destr(itemsPerPage)
	const parsedPage = destr(page)

	const itemsPerPageLocal = is.number(parsedItemsPerPage) ? parsedItemsPerPage : 10
	const pageLocal = is.number(parsedPage) ? parsedPage : 1

	const searchQuery = is.string(q) ? q : undefined
	const queryLowered = (searchQuery ?? '').toString().toLowerCase()

	const filteredCustomers = db.foodTypeData.filter(pet => {
	  return (
		(pet.name && pet.name.toLowerCase().includes(queryLowered))
		|| (pet.description && pet.description.toLowerCase().includes(queryLowered))
	  )
	}).reverse()

	// Sort Customers
	if (sortByLocal) {
	  if (sortByLocal === 'name') {
		filteredCustomers.sort((a, b) => {
		  if (orderByLocal === 'asc')
			return a.name.localeCompare(b.name)

		  return b.description!.localeCompare(a.description!)
		})
	  }
	}



	return HttpResponse.json(
	  {
		foods: paginateArray(filteredCustomers, itemsPerPageLocal, pageLocal), total: filteredCustomers.length,
	  },
	  {
		status: 200,
	  })
  }),
```

:::

---

## mock request get 

**Description:**  
this will generating method mock data endpoint

::: tabs

@tab Prefix
`mk-get`

@tab Code
```typescript
  http.get(('/api/apps/food/type/drop-down'), ({ request }) => {

	const url = new URL(request.url)

	const q = url.searchParams.get('q')


	const searchQuery = q ? q : undefined
	const queryLowered = (searchQuery ?? '').toString().toLowerCase()

	const filteredFoodTypes = db.foodTypeData.filter(foodType => {
	  return (
		(foodType.name && foodType.name.toLowerCase().includes(queryLowered))
	  )
	}).reverse()

	return HttpResponse.json(
	  { data: filteredFoodTypes },
	  { status: 200 }
	)
  }),
```

:::

---

## mock request post endpoint

**Description:**  
this will generating mock data method post endpoint 

::: tabs

@tab Prefix
`mk-post`

@tab Code
```typescript

  http.post('/api/apps/pets', async ({ request }) => {
	try {
	  const body = await request.json()
 
	  if (!body || typeof body !== 'object') {
		return HttpResponse.json(
		  { message: 'Name is required' },
		  { status: 400 }
		)
	  }
	  const newPet= body as Pet
	  // Generate a new ID (simple auto-increment)
	  const newId = (db.petData.length + 1)
		newPet.id = newId

	  // Add to mock database
	  db.petData.push(newPet)

	  // Return success response
	  return HttpResponse.json(
		{ message: 'Brand added successfully', data: newPet },
		{ status: 201 }
	  )
	} catch (error) {
	  return HttpResponse.json(
		{ message: 'Invalid JSON body' },
		{ status: 400 }
	  )
	}
  }),
```

:::

---

## mock request delete endpoint

**Description:**  
this will generating method delete endpoint

::: tabs

@tab Prefix
`mk-delete`

@tab Code
```typescript
http.delete('/api/apps/pets/:id', ({ params }) => {
  const id =params.id as unknown as number
  // Validate ID
  if (isNaN(id)) {
	return HttpResponse.json(
	  { message: 'Invalid ID' },
	  { status: 400 }
	)
  }

  // Find index of pet in mock database
  const index = db.petData.findIndex(pet => pet.id === id)
  if (index === -1) {
	return HttpResponse.json(
	  { message: 'Pet not found' },
	  { status: 404 }
	)
  }

  // Remove the pet
  const deletedPet = db.petData.splice(index, 1)[0]

  return HttpResponse.json(
	{ message: 'Pet deleted successfully', data: deletedPet },
	{ status: 200 }
  )
}),
```

:::

---

## mock request put endpoint

**Description:**  
this will generating method Put endpoint

::: tabs

@tab Prefix
`mk-put`

@tab Code
```typescript
http.put('/api/apps/pets/:id', async ({ params, request }) => {
  const id = Number(params.id)

  // Validate ID
  if (isNaN(id)) {
	return HttpResponse.json(
	  { message: 'Invalid ID' },
	  { status: 400 }
	)
  }

  // Parse request body
  const updatedData = await request.json()

  // Find existing pet
  const petIndex = db.petData.findIndex(pet => pet.id === id)
  if (petIndex === -1) {
	return HttpResponse.json(
	  { message: 'Pet not found' },
	  { status: 404 }
	)
  }

  // Update the pet data (merge existing and new)
  db.petData[petIndex] = { ...db.petData[petIndex], ...updatedData  as Pet }

  return HttpResponse.json(
	{
	  message: 'Pet updated successfully',
	  data: db.petData[petIndex],
	},
	{ status: 200 } 
  )
})
```

:::

---

