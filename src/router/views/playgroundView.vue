<script>
import Layout from '@layouts/main.vue'
import PlaygroundComp from '@components/playgroundComp.vue'

export default {
  page: {
    title: 'PlaygroundView',
    meta: [
      {
        name: 'description',
        content: `Displaying the plygroundComp component`,
      },
    ],
  },
  components: {
    PlaygroundComp,
    Layout,
  },
}
</script>

<template>
  <div>
    <Layout>
      <PlaygroundComp />
    </Layout>
  </div>
</template>
