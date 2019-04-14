# css基础

## css介绍
    1.概述：层叠样式表
    2.完善UI
## css 基础语法 🌰：./CssDemo/Concept/MyCss.css
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

## css 高级语法 🌰：./CssDemo/Concept/index.html;MyCss.css
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

## css基础 - 派生选择器 🌰：./CssDemo/Concept/index.html;MyCss.css
    概念：根据元素在其位置的上下文关系来定义样式 
## css - id选择器 🌰：./CssDemo/Concept/index.html;MyCss.css
    1.ID选择器可以为表有id的html元素制定特定的样式
    2.id选择器与"#"来定义
    3.id选择器和派生选择器：
        目前比较常用的方式时id选择器，用于建立派生选择器
## 类选择器 🌰：./CssDemo/Concept/index.html;MyCss.css
    1.是一个点"."显示
    2.class也可以用作派生选择器
## 属性选择器 🌰：./CssDemo/Concept/index.html;MyCss.css
    1.对带有指定属性的HTML元素设置样式
    2.属性和值选择器
## css样式 🌰：./CssStyle/index.html;Back*.css
    1.背景
        允许使用纯色作为背景，也允许使用背景图像创建相当复杂的效果
        *背景属性：
        属性                           描述
        background-attachment         背景图像是否固定或这锁着页面的其余部分滚动
        background-color              设置元素的背景颜色  
        background-image              把图片设置为背景
        background-position           设置背景图片的其实位置
        background-repeat             设置背景图片是否以及如何重复
        background-size               规定背景的图片尺寸
        background-origin             规定背景图片的定位区域
        background-clip               规定背景的绘制区域

    2.样本