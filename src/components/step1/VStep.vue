<template>
    <VStepButton :data="dataSteps">
        <template #default="{ sendDateToParentBySlot }">
            <div v-if="sendDateToParentBySlot == 1">
                <p>First Content</p>
            </div>
            <div v-else-if="sendDateToParentBySlot == 2">
                <img src="@/assets/img/nature.jpg" class="img-fluid w-75 rounded" alt="" />
            </div>
            <div v-else-if="sendDateToParentBySlot == 3">
                <p>این محتوای استپ سوم است.</p>
            </div>
        </template>
    </VStepButton>
</template>

<script setup>
import VStepButton from "@/components/step1/VStepButton.vue";
import { ref } from "vue";

const dataSteps = {
    steps: ["step1", "step2", "step3"],
    currentStep: 1,
    activeColor: "#65a30d",
    passiveColor: "#84cc16",
};
</script>
