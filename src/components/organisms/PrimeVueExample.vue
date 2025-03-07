<template>
  <div>
    <InputText v-model="someText" />
    {{ someText }}
    <Button>Some Button</Button>
  </div>
  <!-- <div class="card">
    <DataTable :value="products" tableStyle="min-width: 50rem">
      <Column field="name" header="Name"></Column>
      <Column field="description" header="Description"></Column>
      <Column field="layerId" header="Layer ID"></Column>
      <Column field="active" header="Active"></Column>
    </DataTable>
  </div> -->
  <div>
    <DataTable
      :value="products"
      :reorderableColumns="false"
      @row-reorder="onRowReorder"
      tableStyle="min-width: 50rem"
    >
      <Column rowReorder headerStyle="width: 3rem" :reorderableColumn="false" />
      <!-- <Column
        v-for="col of columns"
        :field="col.field"
        :header="col.header"
        :key="col.field"
      ></Column> -->
      <Column field="name" header="Name" />
      <Column header="Active">
        <template #body="{ data }">
          <ToggleSwitch
            v-if="data"
            :model-value="!data.active"
            :pt="{
              slider: ({ context }) => [{ 'myslider-on': context.checked }],
              // slider: {
              //   class: 'sliderToggleClass',
              //   style: 'border: 1px solid red; background-color: purple',
              // },
            }"
          ></ToggleSwitch>
        </template>
      </Column>
      <Column :row-reorder="true">
        <template #body="{ data }">
          <!-- <template #rowreordericon> -->
          <!-- <Button class="buttonGroup tableButton" icon="fa-solid fa-pencil" @click="selectRow(data)" /> -->
          <Button
            class="buttonGroup tableButton"
            icon="fa-solid fa-pencil"
            data-pc-section="rowreordericon"
            @click="selectRow()"
          />
        </template>
      </Column>
      <Column header="Active">
        <template #body="{ data }">
          <!-- <template #rowreordericon> -->
          <Button
            class="buttonGroup tableButton"
            icon="fa fa-check"
            style="background-color: green"
            @click="selectRow(data)"
          />
        </template>
      </Column>
      <Column field="description" header="Archived At" />
    </DataTable>
    <Toast />
  </div>
</template>

<script setup lang="ts">
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'
import ToggleSwitch from 'primevue/toggleswitch'
// import ColumnGroup from 'primevue/columngroup' // optional
// import Row from 'primevue/row' // optional
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import { useToast } from 'primevue/usetoast'
import { ref } from 'vue'

const someText = ref('')
const products = ref([
  {
    name: 'Template 1',
    description: 'null',
    layerId: 'someLayerId1',
    active: true,
    defaultColour: '#9B9B9B',
  },
  {
    name: 'Template 2',
    description: 'null',
    layerId: 'someLayerId2',
    active: true,
    defaultColour: '#9B9B9B',
  },
  {
    name: 'Template 3',
    description: 'null',
    layerId: 'someLayerId3',
    active: true,
    defaultColour: '#9B9B9B',
  },
  {
    name: 'Template 4',
    description: 'null',
    layerId: 'someLayerId4',
    active: true,
    defaultColour: '#9B9B9B',
  },

  {},
])
const toast = useToast()
const columns = ref([
  { field: 'name', header: 'Name' },
  { field: 'description', header: 'Description' },
  { field: 'layerId', header: 'Layer ID' },
  { field: 'active', header: 'Active' },
])
// const onColReorder = () => {
//   toast.add({ severity: 'success', summary: 'Column Reordered', life: 3000 })
// }
const onRowReorder = (event) => {
  products.value = event.value
  toast.add({ severity: 'success', summary: 'Rows Reordered', life: 3000 })
}

const selectRow = () => {
  return true
}
</script>

<style>
.myslider-on {
  border: 1px solid red;
  background-color: purple;
}
</style>
