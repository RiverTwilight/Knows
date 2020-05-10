import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import Loader from '../../utils/PassageHolder'
import Snackbar from '../../utils/Snackbar'
import '../../scss/typo.scss'

export default () => {
    const [detail, setDetail] = useState({});
    const getData = () => {
        Axios
            .get('/newsDetail?id='/* + window.location.search.split('=')[1]*/)
            .then(res => {
                setDetail(res.data.data || {});
            })
            .catch(err => {
                Snackbar({
                    message: '错误：' + err,
                    type: 'normal',
                    delay: 1000
                })
            })
    }
    useEffect(() => {
        getData();
    });
    return (
        <div className="typo">
            <span style={{ display: !detail.title ? 'block' : 'none' }}><Loader /></span>
            {detail.title && <div className="typo">
                <div className="typo-title text-center">
                    {detail.title.replace(/&nbsp;/g, ' ')}
                </div>
                <div className="typo-detail">
                    <div className="typo-detail-date">
                        {detail.date}
                    </div>
                </div>
                <div dangerouslySetInnerHTML={{ __html: detail.content }}></div>
            </div>}
            <div className="typo-split">END</div>
        </div>
    )
}
