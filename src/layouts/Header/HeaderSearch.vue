<template>
  <div class="header-search">
    <a-icon type="search" class="search-icon" @click="enterSearchMode"/>
    <a-auto-complete
      ref="input"
      :getPopupContainer="e => {return e.parentNode || document.body}"
      :dataSource="dataSource"
      :class="['search-input', searchMode ? 'enter' : 'leave']"
      :placeholder="$t('Tu_khoa')"
      @blur="leaveSearchMode"
    >
    </a-auto-complete>
  </div>
</template>

<script>
export default {
  name: 'HeaderSearch',
  data () {
    return {
      dataSource: ['Kết quả 1', 'Kết quả 2'],
      searchMode: false
    }
  },
  methods: {
    enterSearchMode () {
      this.searchMode = true
      this.$emit('active', true)
      setTimeout(() => this.$refs.input.focus(), 300)
    },
    leaveSearchMode () {
      this.searchMode = false
      setTimeout(() => this.$emit('active', false), 300)
    }
  }
}
</script>

<style scoped>
  .header-search .search-icon{
    font-size: 16px;
    cursor: pointer;
  }
  .header-search .search-input{
    border: 0;
    border-bottom: 1px solid rgb(177, 177, 173);
    transition: width 0.3s ease-in-out;



  }
  .header-search .search-input  input{
    border: 0;
    box-shadow: 0 0 0 0;
  }
  .header-search .search-input .leave{
    width: 0px;

  }
  .header-search .search-input .leave input{
    display: none;
  }
  .header-search .search-input .enter{
    width: 200px;

  }
  .header-search .search-input .enter input:focus{
    box-shadow: 0 0 0 0;
  }
</style>
