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
    height: 1.2rem;
    width: 100%;
    line-height: 1.2rem;
    background-color:#d43d3d ;
    position: fixed;
    top: 0;
    left: 0;
    text-align: center;
    z-index: 999;
    color:#fff;
}
</style>