import React from 'react'
import Link from 'next/link'
import Axios from 'axios'
import Header from './layout/header.tsx'
import Head from './layout/Head'
//import { DrawerLarge, DrawerSmall } from '../layout/drawer'
//import loadable from './utils/loading'
import '../static/scss/App.scss'

Axios.defaults.baseURL = 'http://localhost:3001'

const RouterList = [{
    href: "/"
}, {
    href: "/school"
}]

export default class App extends React.Component {
    componentDidMount() {
        const { loading } = this
        window.loadShow = () => loading.style.display = 'inline-block';
        window.loadHide = () => loading.style.display = 'none';
    }
    render() {
        return (
            <Head>
                <div ref={r => this.loading = r} style={{ display: 'inline-block' }} className="header-liner"></div>
                <Header />
                <main className="main">
                    <div className="container">
                        <div className="container-left">
                            {
                                RouterList.map(route => (
                                    <Link key={route.href} {...route}>
                                         <a>here</a>
                                    </Link>
                                ))
                            }
                        </div>
                        <div className="container-right">
                            {/*window.innerWidth >= 640 && <DrawerLarge />
                            window.innerWidth < 640 && <DrawerSmall />*/}
                        </div>
                    </div>
                </main>
            </Head>
        )
    }
}
