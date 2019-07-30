import Home from './components/Home'
import SecondPage from './components/SecondPage'
import ThirdPage from './components/ThirdPage'

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/secondpage', component: SecondPage, name: 'second' },
    { path: '/thirdpage', component: ThirdPage, name: 'third' },
];

export default routes;