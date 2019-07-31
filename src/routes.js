import Home from './components/Home'
import SecondPage from './components/SecondPage'
import ThirdPage from './components/ThirdPage'
import FourthPage from './components/FourthPage'
import FinalPage from './components/FinalPage'
import Failure from './components/Failure'

const routes = [
    { path: '/', component: Home, name: 'home' },
    { path: '/secondpage', component: SecondPage, name: 'second' },
    { path: '/thirdpage', component: ThirdPage, name: 'third' },
    { path: '/fourthpage', component: FourthPage, name: 'fourth'},
    { path: '/final', component: FinalPage, name: 'final'},
    { path: '/failure', component: Failure, name: 'failure'}
    
];

export default routes;