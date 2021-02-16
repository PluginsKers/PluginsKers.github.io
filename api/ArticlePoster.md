# 文章海报

请求地址: `https://api.52craft.cc/ArticlePoster/`
请求方式: `GET`

请求参数:
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| t | Float | 随机数 |
| sitename | String | 站点名称 |
| introduction | String | 介绍 |
| link | String | 链接 |
| title | String | 标题 |
| content | String | 内容 |
| time | String | 时间 |
| author | String | 作者 |
| image | String | 大图链接 |
| avatar | String | 头像链接 |
| timestamp | Int | 时间戳 |


返回参数:
| 参数 | 类型 | 说明 |
| --- | --- | --- |
| code | String | 状态 |
| msg | String | 信息 |
| img | Base64 | 图片 |