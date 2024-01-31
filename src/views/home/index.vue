<template>
  <div style="width:100%;height:100%;background-color: #EAEAEA;display: flex;align-items: center;justify-content: center">
    <div style="width:80%;padding-bottom: 40%;position: relative;">
      <div style="display: flex;flex-direction: column;width: 100%;height: 100%;position: absolute;">
          <div class="single mb"></div>
          <div style="height: 40%; width: 100%;display: flex;">
            <div style="flex: 1;height: 100%;display: flex;flex-direction: column;">
              <div class="single mb" ></div>
              <div class="single"></div>
            </div>
            <div style="background-color: #fff;margin:auto 1.5rem;border-radius: 5px;width:25%;height: 100%;"></div>
            <div style="flex: 1;height: 100%;display: flex;flex-direction: column;">
              <div class="single mb" ></div>
              <div class="single"></div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<style>
  .single {
      background-color: #fff;
      border-radius: 5px;
      flex: 1;
      width: 100%;
  }
  .mb {
    margin-bottom: 1.5rem;
  }
</style>
<script setup>
</script>