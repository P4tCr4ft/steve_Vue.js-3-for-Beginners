<template>
  <div class="card flex justify-center">
    <Button
      type="button"
      :label="selectedMember ? selectedMember.name : 'Select Member'"
      @click="toggle"
      class="min-w-48"
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

<script lang="ts">
export default {
  data() {
    return {
      selectedMember: null,
      members: [
        { name: 'Amy Elsner', image: 'amyelsner.png', email: 'amy@email.com', role: 'Owner' },
        {
          name: 'Bernardo Dominic',
          image: 'bernardodominic.png',
          email: 'bernardo@email.com',
          role: 'Editor',
        },
        { name: 'Ioni Bowcher', image: 'ionibowcher.png', email: 'ioni@email.com', role: 'Viewer' },
      ],
    }
  },
  methods: {
    toggle(event) {
      this.$refs.op.toggle(event)
    },
    selectMember(member) {
      this.selectedMember = member
      this.$refs.op.hide()
    },
  },
}
</script>
