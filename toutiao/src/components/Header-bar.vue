<template>
<header>
    <slot name="home"></slot>
    <slot name="care"></slot>
    <slot name="selfpage"></slot>
    <slot name="collect"></slot>
    <slot name="editprofile-header"></slot>
    <slot name="setup-header"></slot>
    <slot name="detail-header"></slot>
    <slot name="search"></slot>
</header>
    
</template>
<script>
export default{

}
</script>
<style>
header{
    height: 30px;
    background-color: rgb(231, 134, 15);
}
</style>