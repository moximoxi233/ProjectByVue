<template>
    <div class="header">
        <a href="#">
  		<img src="../assets/cnodejs_light.svg"/>
        </a>
        <span><a href="#">关于</a></span>
    </div>

</template>
<script>  
export default{
    name:'Header',
    data(){
        return {

        }
    }
}
</script>

<style scoped>
.header{
    display: flex;
    height: 60px;
    width: 100%;
    padding: 0 20%;
    line-height: 60px;
    background-color: rgb(125, 145, 145);
    justify-content: space-between;
    box-sizing: border-box;
    margin: 0px;
    color: aliceblue;
}
img {
		/* max-width: ; */
		/* margin-left: 50px; */
        height: 30px;
		margin-top: 10px;
	}
.header a{
    color:white
}
</style>