<template>

    <VStepButton :data="dataSteps">
        <p>Hello</p>
    </VStepButton>

<!--    <button @click="prevStep">PrevStep</button>-->

<!--    <button @click="nextStep">NextStep</button>-->
</template>


<script setup>
import VStepButton from "@/components/step/VStepButton.vue";
import { ref } from "vue";


const dataSteps = {
        steps: ["step1", "step2", "step3"],
        currentStep:1,
        activeColor : '#65a30d',
        passiveColor : '#84cc16',
};





</script>
