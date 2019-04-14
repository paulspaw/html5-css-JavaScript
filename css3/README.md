# css基础

## css介绍
    1.概述：层叠样式表
    2.完善UI
## css 基础语法 🌰：MyCss.css
>```
> selector {
>    property: value
> }
>```
> 属性大于1个之后，属性之间用分号隔开，
> 如果值大于一个单词，则需要加上引号：
>```css
> eg. h1 {color:red;font-size:14px;}
> p {font-fmaily:"sans serif";}
>```

## css 高级语法 🌰：index.html;MyCss.css
    1.选择器的分组：
>```css      
> h1,h2,h3,h4,h5,h6{cloor:red;}
>```
    2.继承
>```css
> body{
>    color:green;
>}
>```

## css基础 - 派生选择器 🌰：index.html;MyCss.css
    概念：根据元素在其位置的上下文关系来定义样式 
## css - id选择器 🌰：index.html;MyCss.css
    1.ID选择器可以为表有id的html元素制定特定的样式
    2.id选择器与"#"来定义
    3.id选择器和派生选择器：
        目前比较常用的方式时id选择器，用于建立派生选择器
## 类选择器 🌰：index.html;MyCss.css
    1.是一个点"."显示
    2.class也可以用作派生选择器