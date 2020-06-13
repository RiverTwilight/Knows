import React from 'react'
import Axios from 'axios'
import dynamic from 'next/dynamic'
import PassageItem from '../components/PassageLine'
import Marquee from '../components/Marquee'
const Loader = dynamic(import('../components/ListHolder'), {
    ssr: false
})

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            passage: [],
            channel: 0
        }
    }
    loadPassages() {
        Axios
            .get('/newsList?channel=' + this.state.channel)
            .then(res => {
                this.setState({ passage: res.data })
            })
            .catch(err => {
                Snackbar({ message: '加载失败' + err })
            })
    }
    componentDidMount() {
        this.loadPassages()
    }
    render() {
        const { passage } = this.state
        return (
            <>
                <Marquee
                    imgList={[
                        "//7953524.s21i.faiusr.com/2/ABUIABACGAAgn4b40AUoz5e4lAQwgA84wgM.jpg",
                        "//7953524.s21i.faiusr.com/2/ABUIABACGAAgjIP40AUou5fWHzCADzjCAw.jpg",
                        "//7953524.s21i.faiusr.com/2/ABUIABACGAAgp4P40AUo9fX3-wEwgA84wgM.jpg"
                    ]}
                />
                <div className="card passage-list">
                    {passage.length === 0 ? <Loader /> : this.state.passage.map(post => (
                        <PassageItem key={post.id} {...post} />
                    ))}
                </div>
            </>
        )
    }
}
