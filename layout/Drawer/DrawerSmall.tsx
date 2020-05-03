import React from 'react'
import { Headmaster, CardMenu } from './utils'
/**
 * 移动端底部公共菜单
 */
export default () => (
    <>
        <Headmaster />
        <CardMenu />
        <div className="creater-pannel card">
            <div className="go-to-creater"></div>
        </div>
        <div className="copyright">
            本站由成都外国语学校高新校区一名学生制作，所有内容均为随机数据，学校Logo为成都外国语学校高新校区Logo。<br></br>
                    This site is made by a student of Chengdu Foreign Languages School,Gaoxin. All content is randomly generated.<br></br>
            <a href="">开放源代码</a> - <a href="https://www.yungeeker.com">关于作者</a><br></br>
                    地址：成都市高新西区新航路1号附18<br></br>
                    联系电话：028-64829630（兼传真）<br></br>
                    招生咨询：028-64820303 64829610<br></br>
        </div>
    </>
)
