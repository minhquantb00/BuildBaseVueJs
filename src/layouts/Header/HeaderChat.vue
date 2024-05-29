<template>
  <span class="header-notice">
    <a-badge class="notice-badge" count="0">
      <a-icon :class="['header-notice-icon']" type="message" />
    </a-badge>
  </span>
</template>

<script>
export default {
  name: 'HeaderChat',
  data () {
    return {
      loading: false,
      show: false
    }
  },
  computed: {
  },
  methods: {
  }
}
</script>

<style scoped>
  .header-notice{
    display: inline-block;
    transition: all 0.3s;

  }
  .header-notice span{
    vertical-align: initial;
  }
  .header-notice .notice-badge{
    color: inherit;

  }
  .header-notice .header-notice-icon{
    font-size: 16px;
    padding: 4px;
  }
  .dropdown-tabs{
    background-color: rgb(177, 177, 173);
    box-shadow: 0 2px 8px rgb(177, 177, 173);
    border-radius: 4px;
  }
  .dropdown-tabs .tab-pane{
    padding: 0 24px 12px;
      min-height: 250px;
  }
</style>
