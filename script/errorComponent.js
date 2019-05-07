Vue.component('error', {
    props: ['visibility'],
    template: `<div v-show="visibility">
        <p>Ошибка сервера.</p>
    </div>`
});