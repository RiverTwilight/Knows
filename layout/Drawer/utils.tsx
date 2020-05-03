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

export { CardMenu, Headmaster }