import React from 'react'
import Axios from 'axios'
import Head from 'next/head'
import App from 'next/app'
import '../utils/Mock'
import dynamic from 'next/dynamic'
import Header from '../layout/header'
import '../scss/App.scss'
//根据设备宽度引入合适的侧滑栏
const Drawer = dynamic(import('../layout/Drawer'), {
    ssr: false
})

Axios.defaults.baseURL = 'http://localhost:3001'

export default class extends App {
    static async getInitialProps(){
        return {
            title: '成都外国语学校高新校区'
        }
    }
    componentDidMount() {
        const { loading } = this
        window.loadShow = () => loading.style.display = 'inline-block';
        window.loadHide = () => loading.style.display = 'none';
    }
    render() {
        const { Component, pageProps } = this.props;
        return (
            <>
                <Head>
                    <title>{this.props.title}</title>
                </Head>
                <div ref={r => this.loading = r} style={{ display: 'inline-block' }} className="header-liner"></div>
                <Header />
                <main className="main">
                    <div className="container">
                        <div className="container-left">
                            <Component {...pageProps} />
                        </div>
                        <div className="container-right">
                            {<Drawer />}
                        </div>
                    </div>
                </main>
            </>
        )
    }
}
