<template>
    <div :class="$style.settingsPanel">
        <MyButton onclick="">
            <div :class="$style.buttonContainer">
                <span :class="$style.iconWrapper">
                    <InlineSvg :src="svgConfig.arrowPath"></InlineSvg>
                </span>
                <span :class="$style.settingText">completed</span>
            </div>
        </MyButton>
    </div>
</template>

<script setup>
import MyButton from '@/components/UI/MyButton/MyButton.vue';
import InlineSvg from 'vue-inline-svg';
import { svgConfig } from '../icons/svgConfig';

</script>


<style module lang="scss">
@import './SettingsPanel.module.scss'
</style>