import React from 'react'
import Axios from 'axios'
import Header from '../layout/header.tsx'
import Head from '../layout/Head'
import dynamic from 'next/dynamic'
//import loadable from './utils/loading'
import '../scss/App.scss'
const Drawer = window.innerWidth >= 640 ? dynamic(import('../layout/Drawer/DrawerLarge')) : dynamic(import('../layout/Drawer/DrawerSmall'))

Axios.defaults.baseURL = 'http://localhost:3001'

export default class extends React.Component {
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
                        </div>
                        <div className="container-right">
                            <Drawer />
                        </div>
                    </div>
                </main>
            </Head>
        )
    }
}
