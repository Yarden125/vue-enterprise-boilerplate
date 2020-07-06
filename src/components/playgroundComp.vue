<script>
import { createNamespacedHelpers } from 'vuex'

// making sure I'm using the mapActions and mapGetters from
// the "newUsers" module and not from any other module
const { mapActions, mapGetters } = createNamespacedHelpers('newUsers')

export default {
  page: {
    title: 'PlaygroundComp',
    meta: [{ name: 'description', content: `Users table` }],
  },
  data() {
    return {
      fields: ['id', 'email', 'first_name', 'last_name', 'avatar'],
    }
  },
  computed: mapGetters(['allNewUsers']),
  created() {
    this.fetchNewUsers()
  },
  methods: mapActions(['fetchNewUsers']),
}
</script>

<template>
  <div>
    <b-table striped hover :items="allNewUsers" :fields="fields">
      <template v-slot:cell(avatar)="allNewUsers">
        <b-img :src="allNewUsers.item.avatar" alt="thumbnail" fluid></b-img>
      </template>
    </b-table>
  </div>
</template>
