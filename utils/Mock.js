import Mock from 'mockjs'

const { Random } = Mock
/*
Mock.setup({
    timeout: 2000
})
*/
Mock.mock(/\/newsDetail/,{
    data:{
        content: Random.cparagraph(10, 100),
        date: Random.date(),
        title: Random.sentence(),
        hit: Random.natural()
    }
})

Mock.mock(/\/HotSearch/, {
    'data|10':[{
        kwd: /我校(王|李|刘|孙|唐)(咉|咊|咋|咍|)(咎|咐|咑|咓|咔|咕|咖)(海|风|杰)?同学被(麻省理工|北京航空航天|清华|哈佛|北京)大学录取/,
        href: Mock.Random.url('https', 'localhost:3000')
    }]
})

Mock.mock(/\/newsList/, /get|post/i, _=>{
        var data = Mock.mock({
            "data|10":[{
                summary: '@cparagraph(10, 100)',
                date: '@date',
                title: '@title',
                "cover|1": ['@dataImage("200x100", "封面!")', null],
                id: Mock.Random.word(6)
            }]
        })
        return data.data
    }
)

Mock.mock(/\/managers/, () => {
    var data = Mock.mock({
        "data|10":[{
            name: '@cname',
            content: '@cparagraph( 5, 10 )',
            'subject|1': ['chinese', 'math', 'english', 'chemistry'],
            cover: '@dataImage("200x200", "照片!")'
        }]
    })
    return data.data
})

export default Mock
