<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
          <app-server-list></app-server-list>
          <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
import Header from '../components/Header.vue';
import ServerList from '../components/ServerList.vue';
import Footer from '../components/Footer.vue';
import ServerDetails from '../components/ServerDetails.vue';
export default {
  components: {
    appHeader: Header,
    appServerList: ServerList,
    appFooter: Footer,
    appServerDetails: ServerDetails
  }
}
</script>

<style>

</style>
