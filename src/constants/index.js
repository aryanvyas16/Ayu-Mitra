import { records,screening, user, apps} from '../assets'

export const navLinks = [
    {
        //links to be present in navbar
        name : 'dashboard',
        imageUrl: apps,
        link:'/',
    },
    {
        name:'records',
        imageUrl: records,
        link: '/medical-records',
    },
    {
        name:'screening',
        imageUrl: screening,
        link: '/screening-schedules',
    },
    {
        name: 'profile',
        imageUrl: user,
        link:'/profile'
    }
]