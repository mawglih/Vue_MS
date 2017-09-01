<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1 v-my-on:click="clicked">Directives Exercise</h1>
                <!-- Exercise -->
                <!-- Build a Custom Directive which works like v-on (Listen for Events) -->

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        directives: {
            'myOn': {
                bind(el, binding, vnode){
                    // el.onclick = function () {
                    //     binding.value();
                    // }
                    const type = binding.arg;
                    const fn = binding.value;
                    el.addEventListener(type, fn);
                }
            }
        },
        methods: {
            clicked() {
               alert('This was clicked!')
            }
        }
    }
</script>

<style>
</style>
