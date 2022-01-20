# 一、文档综述
> 1.1 产品介绍

<table>
<tr>
<td style="background-color:rgb(0,0,1,0.7);color:white;text-align:cebter">产品类型</td>
<td style="text-align:center">WEB端ESG评级产品</td>
</tr>
<tr>
<td style="background-color:rgb(0,0,1,0.7);color:white;text-align:cebter">产品定位</td>
<td style="text-align:center">用于推广ESG理念、对不同公司进行ESG评分的网页</td>
</tr>
<tr>
<td style="background-color:rgb(0,0,1,0.7);color:white;text-align:cebter">产品介绍</td>
<td>根据目前世界日益紧缺资源的现状，人们对于各个企业的可持续发展性的要求逐渐提高。在全世界的各个ESG评级标准不一的情况下，我们决定开发一款能够比较多种评级体系、自定义企业ESG发展需求同时进行ESG发展推荐计划的平台。该平台可以根据企业所披露的数据进行分析，并给出智能化的建议并生成相应的ESG评级报告，在一定范围内提高企业的ESG相关影响力的同时给出企业可持续发展思路。</td>
</tr>
<tr>
<td style="background-color:rgb(0,0,1,0.7);color:white;text-align:cebter">技术依托说明</td>
<td style="text-align:center">1.JSP——利用java语言获取用户提交的数据，并对数据进行数据分析后返回一个尽可能客观的ESG评级<br/>
2.利用原生html/css/JavaScript设计页面，

</td>
</tr>
</table>



# 二、需求分析

> 2.1 功能清单  

<table>
<tr>
<th style="background-color:rgb(0,0,1,0.7);color:white;text-align:cebter">类别</td>
<th style="background-color:rgb(0,0,1,0.7);color:white;text-align:cebter">功能名称</td>
<th style="background-color:rgb(0,0,1,0.7);color:white;text-align:cebter">功能说明</td>
<th style="background-color:rgb(0,0,1,0.7);color:white;text-align:cebter">必要性</td>
</tr>
<tr>
<td style="text-align:center">评级</td>
<td style="text-align:center">ESG评级</td>
<td style="text-align:center">对企业录入的数据进行处理后，返回一个符合该企业所在行业标准的ESG评级</td>
<td style="text-align:center">必要</td>
</tr>
<tr>
<td style="text-align:center">规划建议</td>
<td style="text-align:center">ESG规划建议</td>
<td style="text-align:center">对企业录入的数据进行处理后，根据数据指标，为该公司给出规划建议</td>
<td style="text-align:center">必要</td>
</tr>
<tr>
<td style="text-align:center" rowspan=2>推广</td>
<td style="text-align:center">ESG理念介绍</td>
<td style="text-align:center">在WEB页面开设一个ESG相关知识介绍板块，为浏览者介绍ESG相关知识</td>
<td style="text-align:center">必要</td>
</tr>
<tr>
<td style="text-align:center">相关资料快捷查询</td>
<td style="text-align:center">引用外部链接，为浏览者提供更多了解ESG理念的相关渠道</td>
<td style="text-align:center"> 必要</td>
</tr>
<tr>
<td style="text-align:center" rowspan=2>数据库</td>
<td style="text-align:center">用户账号/密码与企业数据录入</td>
<td style="text-align:center">建立数据库，录入用户独立ID，使用户录入的数据与用户企业形象进行深度绑定</td>
<td style="text-align:center">必要</td>
</tr>
<tr>

<td style="text-align:center">国际普遍ESG评级标准存储</td>
<td style="text-align:center">建立数据库，录入国际普遍认同的ESG评级标准（如大气污染物排放、锅炉大气排放、污水排放、噪声排放）以进行相关评估、建议。</td>
<td style="text-align:center">必要</td>
</tr>
<tr>
</table>


