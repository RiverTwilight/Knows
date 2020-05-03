import React from 'react'
import { Headmaster, CardMenu } from './utils';
/**
 * PC端右侧部公共菜单
 */
interface DrawerProps {

}

interface DrawerState {
    copyrightFixed: boolean;
    drawerWidth: number;
    drawerLeft: number;
    copyrightTop: number
}

export default class extends React.Component<DrawerProps, DrawerState> {
    drawer: any;
    copyright: any;
    constructor(props: Readonly<DrawerProps>) {
        super(props);
        this.state = {
            copyrightFixed: false,
            drawerWidth: 296,
            drawerLeft: 0,
            copyrightTop: 0
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', () => {
            var t = document.documentElement.scrollTop || document.body.scrollTop;
            if (t > 500) {
                this.setState({ copyrightFixed: true })
            } else {
                this.setState({ copyrightFixed: false })
            }
        })
        //将初始状态保存以便固定
        var toTop = document.documentElement.scrollTop || document.body.scrollTop;
        this.setState({
            drawerLeft: this.drawer.getBoundingClientRect().left,
            drawerWidth: this.drawer.getBoundingClientRect().width,
            copyrightTop: this.copyright.getBoundingClientRect().top + toTop
        })
    }
    render() {
        const { copyrightFixed, drawerWidth, drawerLeft, copyrightTop } = this.state
        const drawerStyle = copyrightFixed ? {
            left: drawerLeft,
            width: drawerWidth + 'px',
            top: `-${copyrightTop + 65.5}px`
        } : {}
        return (
            <div
                ref={r => this.drawer = r}
                style={drawerStyle}
                className={`${copyrightFixed ? "is-fixed" : ""}`}
            >
                <Headmaster />
                <CardMenu />
                <div className="creater-pannel card">
                    <div className="go-to-creater"></div>
                </div>
                <div ref={r => this.copyright = r} className={`copyright`}>
                    本站由成都外国语学校高新校区一名学生制作，所有内容均为随机数据，学校Logo为成都外国语学校高新校区Logo。<br></br>
                    This site is made by a student of Chengdu Foreign Languages School,Gaoxin. All content is randomly generated.<br></br>
                    <a href="">开放源代码</a> - <a href="https://www.yungeeker.com">关于作者</a><br></br>
                    地址：成都市高新西区新航路1号附18<br></br>
                    联系电话：028-64829630（兼传真）<br></br>
                    招生咨询：028-64820303 64829610<br></br>
                </div>
            </div>
        )
    }
}
