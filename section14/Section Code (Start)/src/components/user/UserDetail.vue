<template>
    <div>
        <p> User loaded has ID: {{ $route.params.id}}</p>
        <router-link class="btn btn-primary" tag="button" :to="{ name: 'userEdit', params: { id: $route.params.id}, query: { locale: 'en', q: 100} }" >Edit User</router-link>
    </div>
</template>