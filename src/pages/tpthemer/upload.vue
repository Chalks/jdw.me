<script>
const FORMCAKE_UPLOAD_ID = 'a0f4891e-8ef4-4779-990f-f9d170130b2d';

export default {
    computed: {
        action() {
            return `https://api.formcake.com/api/form/${FORMCAKE_UPLOAD_ID}/submission`;
        },
    },
};
</script>

<template>
    <div class="themer">
        <h1>This is for local development only</h1>
        <form id="my-form-id" method="post" :action="action">
            <input type="text" name="filename" placeholder="Filename" value="" />
            <input type="text" name="name" placeholder="Theme Name" value="" />
            <input type="text" name="author" placeholder="Author Name" value="" />
            <select name="type">
                <option value="tiles">tiles</option>
                <option value="splats">splats</option>
                <option value="gravitywell">gravity well</option>

                <option value="speedpad">speedpad</option>
                <option value="speedpadred">red speedpad</option>
                <option value="speedpadblue">blue speedpad</option>

                <option value="portal">portal</option>
                <option value="portalred">red portal</option>
                <option value="portalblue">blue portal</option>
            </select>
            <input type="submit" value="Submit" />
        </form>
    </div>
</template>

<style>
    .themer {
        @apply flex flex-col mx-auto relative;
        width: 840px;
        margin-top: 31px;
    }
</style>
