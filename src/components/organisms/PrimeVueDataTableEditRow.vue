<template>
  <div class="card">
    <DataTable
      v-model:editingRows="editingRows"
      :value="products"
      editMode="row"
      dataKey="name"
      @row-edit-save="onRowEditSave"
      :pt="{
        table: { style: 'min-width: 50rem' },
        column: {
          bodycell: ({ state }) => ({
            style: state['d_editing'] && 'padding-top: 0.75rem; padding-bottom: 0.75rem',
          }),
        },
      }"
    >
      <Column field="name" header="Name" style="width: 20%">
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" fluid />
        </template>
      </Column>
      <Column field="description" header="Description" style="width: 20%">
        <template #editor="{ data, field }">
          <InputText v-model="data[field]" fluid />
        </template>
      </Column>
      <Column field="active" header="Active" style="width: 20%">
        <template #editor="{ data, field }">
          <Select
            v-model="data[field]"
            :options="statuses"
            optionLabel="label"
            optionValue="value"
            placeholder="Select a Status"
            fluid
          >
            <template #option="slotProps">
              <Tag
                :value="slotProps.option.value"
                :severity="getStatusLabel(slotProps.option.value)"
              />
            </template>
          </Select>
        </template>
        <template #body="slotProps">
          <Tag :value="slotProps.data.active" :severity="getStatusLabel(slotProps.data.active)" />
        </template>
      </Column>
      <Column field="defaultColour" header="Default Colour" style="width: 20%">
        <template #body="{ data, field }">
          {{ formatCurrency(data[field]) }}
        </template>
        <template #editor="{ data, field }">
          <InputNumber v-model="data[field]" mode="currency" currency="USD" locale="en-US" fluid />
        </template>
      </Column>
      <Column
        :rowEditor="true"
        style="width: 10%; min-width: 8rem"
        bodyStyle="text-align:center"
      ></Column>
    </DataTable>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import Select from 'primevue/select'
import Tag from 'primevue/tag'
import InputNumber from 'primevue/inputnumber'
// import ColumnGroup from 'primevue/columngroup' // optional
// import Row from 'primevue/row' // optional
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
// import { ProductService } from '@/service/ProductService'

const products = ref([
  {
    name: 'Template 1',
    description: 'null',
    layerId: 'someLayerId1',
    active: true,
    defaultColour: 99,
  },
  {
    name: 'Template 2',
    description: 'null',
    layerId: 'someLayerId2',
    active: false,
    defaultColour: 99,
  },
  {
    name: 'Template 3',
    description: 'null',
    layerId: 'someLayerId3',
    active: true,
    defaultColour: 99,
  },
  {
    name: 'Template 4',
    description: 'null',
    layerId: 'someLayerId4',
    active: true,
    defaultColour: 99,
  },
])

// const products = ref()
const editingRows = ref([])
const statuses = ref([
  { label: 'Yes', value: true },
  { label: 'No', value: false },
  { label: 'Unsure', value: 'unsure' },
])

// onMounted(() => {
//   ProductService.getProductsMini().then((data) => (products.value = data))
// })

const onRowEditSave = (event) => {
  const { newData, index } = event

  products.value[index] = newData
}
const getStatusLabel = (status) => {
  switch (status) {
    case true:
      return 'success'

    case false:
      return 'warn'

    case 'unsure':
      return 'danger'

    default:
      return null
  }
}
const formatCurrency = (value) => {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value)
}
</script>
