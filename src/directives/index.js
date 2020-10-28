import vue from 'vue';
import basicScroll from '@/directives/basicScroll'

export default (Vue, options) => {
    Vue.directive('basic-scroll', basicScroll);
}