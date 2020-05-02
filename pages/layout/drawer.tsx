import React from 'react'

const Headmaster = () => {
    return (
        <div className="our-headmaster card">
            <img className="lijun" src="/headermaster.jpg" />
            <div className="headmaster-title">
                <img alt="我们的校长" src="/icon/person-outline.svg" width="20" height="20" />
                &nbsp;&nbsp;党支部书记、校长：李俊
            </div>
            <div className="headmaster-content">
                <div className="headmaster-content-title">
                    教育箴言:
                </div>
                <div className="headmaster-content-text">
                    严师出高徒
                </div>
                <div className="headmaster-content-title">
                    教育目标:
                </div>
                <div className="headmaster-content-text">
                    培养学生终身发展力
                </div>
                <div className="headmaster-content-title">
                    教育资源:
                </div>
                <div className="headmaster-content-text">
                    安全健康和美丽舒适的校园<br></br>
                    爱生敬业和水平一流的师资<br></br>
                    为学生终身奠基的四大课程体系<br></br>
                    引领学生茁壮成长的校风
                </div>
            </div>
        </div>
    )
}

const CardMenu = () => {
    return (
        <div className="card-menu card">
            {[
                {
                    text: '网上阅卷',
                    icon: <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'><title>ionicons-v5-e</title><polyline points='416 128 192 384 96 288' style={{ fill: 'none', stroke: '#000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }} /></svg>,
                    href: '#'
                },{
                    text: '家校互动',
                    icon: <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'><title>ionicons-v5-e</title><polyline points='416 128 192 384 96 288' style={{ fill: 'none', stroke: '#000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }} /></svg>,
                    href: '#'
                },{
                    text: '安全平台',
                    icon: <svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'><title>ionicons-v5-e</title><polyline points='416 128 192 384 96 288' style={{ fill: 'none', stroke: '#000', strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: '32px' }} /></svg>,
                    href: '#'
                }
            ].map(item => (
                <a key={item.text} href={item.href} className="card-menu-item">
                    {item.icon}
                    <div className="card-menu-item-text">{item.text}</div>
                </a>
            ))}
        </div>
    )
}

interface DrawerProps {

}

interface DrawerState {
    copyrightFixed: boolean;
    drawerWidth: number;
    drawerLeft: number;
    copyrightTop: number
}

const DrawerSmall = () => (
    <>
        <Headmaster />
        <CardMenu />
        <div className="creater-pannel card">
            <div className="go-to-creater"></div>
        </div>
        <div className={`copyright`}>
            本站由成都外国语学校高新校区一名学生制作，所有内容均为随机数据，学校Logo为成都外国语学校高新校区Logo。<br></br>
                    This site is made by a student of Chengdu Foreign Languages School,Gaoxin. All content is randomly generated.<br></br>
            <a href="">开放源代码</a> - <a href="https://www.yungeeker.com">关于作者</a><br></br>
                    地址：成都市高新西区新航路1号附18<br></br>
                    联系电话：028-64829630（兼传真）<br></br>
                    招生咨询：028-64820303 64829610<br></br>
        </div>
    </>
)



class DrawerLarge extends React.Component<DrawerProps, DrawerState> {
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

export { DrawerLarge, DrawerSmall } 