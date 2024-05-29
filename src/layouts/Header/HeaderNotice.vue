<template>
  <a-dropdown :trigger="['click']" v-model="show">
    <div slot="overlay">
      <a-spin :spinning="loading">
        <a-tabs class="dropdown-tabs" :tabBarStyle="{textAlign: 'left'}" :style="{width: '297px'}">
          <a-tab-pane tab="Thông báo" key="1">
            <a-list class="tab-pane">
              <a-list-item>
                <a-list-item-meta title="Bạn có 1 thông báo mới" description="Mô tả">
                  <a-avatar style="background-color: white" slot="avatar" src="https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png"/>
                </a-list-item-meta>
              </a-list-item>
            </a-list>
          </a-tab-pane>
        </a-tabs>
      </a-spin>
    </div>
    <span @click="fetchNotice" class="header-notice">
      <a-badge class="notice-badge" count="1">
        <a-icon :class="['header-notice-icon']" type="bell" />
      </a-badge>
    </span>
  </a-dropdown>
</template>

<script>
export default {
  name: 'HeaderNotice',
  data () {
    return {
      loading: false,
      show: false
    }
  },
  computed: {
  },
  methods: {
    fetchNotice () {
      if (this.loading) {
        this.loading = false
        return
      }
      this.loadding = true
      setTimeout(() => {
        this.loadding = false
      }, 1000)
    }
  }
}
</script>

<style scoped>
  .header-notice{
    display: inline-block;
    transition: all 0.3s;


  }
  .header-notice span {
    vertical-align: initial;
  }
  .header-notice .notice-badge{
    color: inherit;

  }
  .header-notice .notice-badge .header-notice-icon{
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
