import Vue from 'nativescript-vue';
import { TNSFontIcon, fonticon } from 'nativescript-fonticon';

TNSFontIcon.paths = {
    fa: './FontAwesome.css',
};
TNSFontIcon.loadCss();

Vue.filter('fonticon', fonticon);

import Main from './components/Main';
import './styles.scss';

new Vue({
  render: h => h(Main)
}).$start();
