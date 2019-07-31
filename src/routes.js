import Home from './components/Home'
import SecondPage from './components/SecondPage'
import ThirdPage from './components/ThirdPage'
import Failure from './components/Failure'

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/secondpage', component: SecondPage, name: 'second' },
    { path: '/thirdpage', component: ThirdPage, name: 'third' },
    { path: '/failure', component: Failure, name: 'failure'}
];

export default routes;