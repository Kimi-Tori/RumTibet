<template>
    <v-form class="form d-md-flex justify-space-between pa-md-10 w-fit-content">
        <div class="d-none d-md-flex justify-space-between align-center w-100">
            <div class="w-100">
                <v-select
                    label="Локация для тура"
                    :items="['Калифорния', 'Колорадо', 'Флорида', 'Джоржия', 'Техас', 'Чикаго']"
                    variant="outlined"
                    class="form__input input-text color-white w-100"
                ></v-select>
                <p class="color-white">выберите из списка</p>
            </div>
            <div class="w-100 mx-6">
                <v-date-input 
                    label="Дата похода" 
                    class="form__input input-text color-white w-100" 
                    variant="outlined"
                    prepend-icon=""
                ></v-date-input>
                <p class="color-white">укажите диапазон</p>
            </div>
            <div class="w-100">
                <v-select
                    label="Участники"
                    :items="['4 человека', '5 человек', '6 человек', '7 человек', '8 человек', '9+ человек']"
                    variant="outlined"
                    class="form__input input-text color-white w-100"
                ></v-select>
                <p class="color-white">минимум 4 человека</p>
            </div>
        </div>
        <v-btn class="form__btn input-text color-green ml-md-6 py-4 px-9 h-auto">Найти программу</v-btn>
    </v-form>
</template>

<script>
import { VDateInput } from 'vuetify/labs/VDateInput'

export default {
    name: 'form-template',
    components: {
        VDateInput,
    },
}
</script>

<style lang="scss" scoped>
.form {
    border-radius: 10px;

    @include up($sm) {
        background-color: $white-alpha-20;
    }

    &__input {
    }

    &__btn {
        background-color: $white;
        border-radius: 4px;
        max-height: 54px;
    }
}
</style>