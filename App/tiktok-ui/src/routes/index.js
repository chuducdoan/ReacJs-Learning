// Layouts
import {HeaderOnly} from '~/components/Layout'
import Home from '~/pages/Home'
import Following from '~/pages/Following'
import Upload from '~/pages/Upload'
import Search from '~/pages/Search'
import Profile from '~/pages/Profile'

// Những router không cần đăng nhập vẫn vào được
const publicRoutes = [
    {path: '/', component: Home},
    {path: '/following', component: Following},
    {path: '/@:nickname', component: Profile},
    {path: '/upload', component: Upload, layout: HeaderOnly},
    {path: '/search', component: Search, layout: null},
];

// những router cần đăng nhập mới vào được
const privateRoutes = [];

export { publicRoutes, privateRoutes };