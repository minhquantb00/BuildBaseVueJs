<template>
  <a-dropdown>
    <div class="header-avatar" style="cursor:pointer">
      <a-avatar class="avatar" size="small" shape="circle" src="https://thumb.viva.id/intipseleb/663x372/2023/09/02/64f31c87d55b0-lirik-lagu-specialz-jujutsu-kaisen.jpg"/>
      <span class="name">Trần Minh Quân</span>
    </div>
    <a-menu :class="['avatar-menu']" slot="overlay">
      <a-menu-item>
        <a-icon type="user" />
        <span>
          <a  target="_blank">
            Tài khoản
          </a>
        </span>
      </a-menu-item>
      <a-menu-item>
        <a-icon type="setting" />
        <span>Cài đặt</span>
      </a-menu-item>
      <a-menu-divider />
      <a-menu-item>
        <a-icon style="margin-right: 8px;" type="poweroff" />
        <span>Đăng xuất</span>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
</template>

<script>
export default {
  name: 'HeaderAvatar',
  data() {
    return {

    }
  },
}
</script>

<style scoped>
  .header-avatar{
    display: inline-flex;

  }
  .header-avatar .avatar, .name{
    align-self: center;
  }
  .header-avatar .avatar{
    margin-right: 8px;
  }
  .header-avatar .name{
    font-weight: 500;
  }
  .avatar-menu{
    width: 150px;
  }

</style>
