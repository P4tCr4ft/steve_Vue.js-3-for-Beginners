<template>
  <div class="card flex justify-center">
    <FontAwesomeIcon icon="fa-solid fa-dog" />
    <Button
      type="button"
      :label="selectedMember ? selectedMember.name : 'Select Member'"
      @click="toggle"
    />
    <Popover ref="op">
      <div class="flex flex-col gap-4">
        <div>
          <span class="font-medium block mb-2">Team Members</span>
          <ul class="list-none p-0 m-0 flex flex-col">
            <li
              v-for="member in members"
              :key="member.name"
              class="flex items-center gap-2 px-2 py-3 hover:bg-emphasis cursor-pointer rounded-border"
              @click="selectMember(member)"
            >
              <img
                :src="`https://primefaces.org/cdn/primevue/images/avatar/${member.image}`"
                style="width: 32px"
              />
              <div>
                <span class="font-medium">{{ member.name }}</span>
                <div class="text-sm text-surface-500 dark:text-surface-400">{{ member.email }}</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </Popover>
  </div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue'
import Popover from 'primevue/popover'
import Button from 'primevue/button'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Define a type for the Popover instance with 'toggle' method
type PopoverInstance = InstanceType<typeof Popover> & {
  toggle: (event: Event) => void
}

// Properly type 'op' ref
const op: Ref<PopoverInstance | null> = ref(null)

// Define the type for a member
interface Member {
  name: string
  image: string
  email: string
  role: string
}

// const op = ref(null)
const selectedMember = ref(null)

const members: Ref<Member[]> = ref([
  { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
  {
    name: 'Bernardo Dominic',
    image: 'bernardodominic.png',
    email: 'bernardo@email.com',
    role: 'Editor',
  },
  { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' },
])

// Toggle function with proper event parameter
const toggle = (event: Event): void => {
  if (op.value) {
    op.value.toggle(event)
  }
}

const selectMember = (member: Member): void => {
  selectedMember.value = member
  op.value.hide()
}
</script>
