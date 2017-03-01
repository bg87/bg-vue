<template>
    <div>
        overview
        {{ $store.state.key }}
    </div>
</template>

<script>
    import { keyMixin } from './keyMixin';

    export default {
        mixins: [keyMixin]
    }

</script>

<styles scoped>

</styles>