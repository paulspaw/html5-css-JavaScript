## HTML 新特性
    1.用于绘画的canvas标签
    2.用与媒介回放的video和audio元素
    3.对本地里先出存的更好支持
    4.新的特殊内容元素
    5.新的表单控件
    6.浏览器的支持

## 基础讲解 🌰：index.html
    1.声明：
        <!DOCTYPE html>
    2.基础标签
    	head，body
    3.标题
    	<h1> ... <h6>等标签进行定义
    4.段落
    	<p>标签定义段落 后面添加的文字会新起一行
    5.链接
    	<a>标签定义链接
    	eg. <a href="http:## www.google.com">search machine</a>
    6.图像
    	<img>标签定义图像
    	<img src = "image/test.jpg">

## html元素
	1.元素是指从开始标签到结束标签的所有代码
	开始标签		元素内容		结束标签
	<p>		test content	</p>
	<br/> -- 空元素 -- 换行标签

	2.元素语法
		元素的内容是开始标签与结束标签之间的内容
		空元素在开始标签中进行关闭
		大多数的html元素可拥有属性

	3.嵌套的html元素
		大多数的html元素都是可以嵌套的
## html属性
	1.标签可以拥有属性为元素提供更多的信息
	2.属性以 键/值对 的形式出现 eg. href = "www.google.com"
	3.常用标签属性
		<h1>: align 对齐方式
		<body>: bgcolor 背景颜色 backgroud 背景图片
		<a>: target 规定在何处打开链接
	4.通用属性
		class: 规定元素的类名
		id: 规定元素的唯一ID
		style: 规定元素的样式
		title: 规定元素的额外信息

## html格式化
	<b> 定义粗体文本
	<big> 定义大号字
	<em>  定义着重文字
	<i>	定义斜体字
	<small> 定义小号字
	<strong> 定义加重语气
	<sub>	定义下标字
	<sup> 定义上标字
	<ins> 定义插入字
	<del> 定义删除字

## html5样式，链接和表格 🌰: DefStyle.html
	1.样式
		1.标签：
			<style> 样式定义
			<link> 资源引用 eg. <link rel="stylesheet" type="text/css" href="myStyle.css">
		2.属性
			rel = "stylesheet"： 外部样式表
			type = "text/css"： 引入文档的类型
			margin-left: 边距
		3.引入方式
			外部样式表
			内部样式表
			内联样式表
	2.链接 🌰：DefLink.html
		1.链接数据
			1.文本链接
			2，图片链接
		2.属性
			1.herf属性：指向另一个文档的链接
			2.name属性：创建文档内的链接  eg. <a href="#tips">tranfer to hello</a>
		3.img标签属性
			1.alt：替换文本属性
			2.width：宽
			3.height：高
	3.表格 🌰：DefTable.html

	4.html5列表 🌰：DefList.html
		标签
		<ol> 有序列表
		<ul> 无序列表
		<li> 列表项
		<dl> 列表
		<dt> 列表项
		<dd> 描述
		## 常用列表
			1.有序列表
				1.标签 <ul>,<li>
				2.属性 disc, circle, square
			2.无序列表
				1.标签 <ol>,<li>
				2.属性 A, a, I, i, start
			3.嵌套列表
				标签 <ul>, <ol>, <li>
			4.自定义列表
				标签 <dl>, <dt>, <dd>
	5.html5块  🌰：DefBlockElement.html
		1.块元素 在显示时，通常会以新行开始
			eg. <h1>, <p>, <img>
		2.内联元素
			eg. <b>, <a>, <img>
		3.<div>元素
			 <div> 元素也被称为块元素，其主要是组合html元素的容器
		4.<span>元素
			 <span>元素时内联元素，可作为文本的容器
	6.html5表单 🌰：DefFormDemo.html
		1.表单用于获取不同类型的用户输入
		2.常用标签
			<form> 表单
			<input> 输入域
			<textarea> 文本域
			<label> 控制标签 
			<firldset> 定义域
			<legend> 域的标题
			<select> 选择列表
			<optgroup> 选项组
			<option> 下拉列表中的选项
			<button> 按钮
	7.html5表单与php交互 🌰：PhpInteractForm.html

## html5 框架 🌰： DefFrame.html
	1.框架标签(frame)：
		框架对于页面的设计有着很大的作用
	2.框架集标签(<frameset>)：
		框架集标签定义如何将窗口分割为框架
		每一个frameset定义一系列行或列
		rows/cols的值规定了每行或者每列占据屏幕的面积
	3.常用标签
		noresize：固定框架大小
		cols：列
		rows：行
	4.内联框架 iframe (⚠️主要)

## html5 背景 🌰：DefBackground.html
	1.背景标签 backgroud
	2.背景颜色 bgcolor
	3.颜色：
		颜色是有一个十六进制符号来定义，这个符号由红色，绿色，蓝色的值组成(RGB)
		颜色最小值： 0(#00)
		颜色最大值：255(#FF)
		红色：#FF0000
		绿色：#00FF00
		蓝色：#0000FF
## html5 实体 🌰：DefEntity.html
	1.实体： html中预留字符串必须被替换成字符实体
		eg. < , > , & 转义

## XHTML 🌰： XHTMLDemo.html
	1.定义 & 特性: 
		1.指可扩展的超文本标记语言
		2.与HTML4.01几乎是相同的
		3.更严格更纯净的HTML版本
		4.是以XML应用的方式定义的HTML
		5.得到所有主流浏览器的支持
	2.为什么要使用
		为了代码的完整性和良好性
	3.文档声明
		DTD：规定了使用通用标记语言的网页语法
	4.三种文档类型
		1. STRICT(严格类型)
		2.TRANSITIONAL(过渡类型)
		3.FRAMESET(框架类型)
	5.XHTML 元素语法：
		1.必须正确嵌套
		2.必须始终关闭
		3.必须小写
		4.必须有一个根元素
	6.XHTML 属性
		1.必须使用小写
		2.必须用引号包围
		3.最小化也是禁止的

## html5与html4的区别
	1.推出的理由和目标
		1.web浏览器之间的兼容性很低
		2.文档结构不够明确
		3.web应用程序的功能受到了限制
	2.全局属性 🌰：GlobalVariable.html
		1. contrntEditable属性
		2. designMode属性
		3. hidden属性
		4. spellcheck属性
		5. tanbindex属性
	3.新增 主体结构 元素  
		1.article元素 🌰：NewElementArticle.html
			article元素代表文档，页面或应用程序中独立的，完整的，可以独自被外部引用的内容
			article元素是可以嵌套使用的
			article元素可以用来表示插件
		2.section元素 🌰：NewElementSection.html
			用于对网站或应用程序中页面上的内容进行分块。一个section元素通常由内容及其标题组成。
			但section元素并非一个普通的容器元素
			当一个容器需要被直接定义样式或通过脚本定义行为时，推荐使用div
			⚠️：article元素更加强调独立性，section元素强调的是分段或分块
				如果一块内容相较于比较独立，使用article元素
				如果将一块内容分为几段，使用section元素
		## ⚠️小结⚠️： 🌰：NewElementNav.html
			1.不要讲section元素作为设置样式页面的容器 - div的工作
			2.如果 article元素，aside元素或nav元素 更符合使用条件 请不要使用 section元素
			3.不要为没有标题的区域块使用section元素，section是要存在一个标题的
		3.nav元素 
			是可以用作页面导航的链接组，其中的导航元素链接到其他页面或当前页面的其他部分。
			并不是所有的链接组都要被放进nav元素，只需要将主要的，基本的链接组放进nav元素即可
			## 应用场景：
				传统导航条
				侧边栏导航
				业内导航
				翻页操作
		4.aside元素 🌰：NewElementAside.html
			 用来表示当前页面或文章的附属信息部分，它可以包含与当前页面或主要内容相关的引用，侧边栏，广告，导航条，
			 以及其他类似的又区别于主要内容的部分
		5.time元素与微格式 🌰： TimeELement.html
			❓time元素 ???
			❓pubdate属性???
	4.新增的 非主体结构 元素
		1.header元素 🌰：HeaderElement.html HeaderExample.html
			是一种具有引导和导航作用的结构元素，通常用来放置整个页面或页面内的一个内容区块的标题，但是也可以包含其他内容
			eg. 数据表格 搜索表单 相关的logo图片
		2.footer元素 FooterElement.html
			可以做为其上层父级内容区块或是一个根区块的脚注，通常包括其相关区块的脚注信息
			eg. 作者，相关阅读链接，版权信息等
		3.hgroup元素 🌰：HgroupElement.html
			将标题及其子标题进行分组的元素。通常会将 h1-h6元素 进行分组
			eg.一个内容区块的标题及其子元素算一组
			当只有一个标题的时候不需要hgroup，当有多个并且同一级和后面的标题时是面的子标题时用hgroup
		4.address元素 🌰：AddressElement.html
			用来在文档中呈现联系信息，包括文档作者或文档维护者的名字，他们的网站链接，电子邮箱，真实地址，电话号码等
			应该不只用来呈现电子邮箱或真实地址，还用来展示根文档相关的联系人的所有联系信息
	6.新增 表单 元素与属性
		1.form属性  🌰：Form.html
			html5可以把表单内的从属元素写在页面的任何地方，然后为该元素指定一个form属性，属性值为该表单的id
			这样就可以声明该元素从属于制定表单了
		2.formaction属性 🌰：Form.html
			html5中可以为所有的提交按钮，增加不同的formaction属性，使单击不同按钮时可以将表单提交到不同页面
		3.formmethod属性 🌰：Form.html
			html5中可以使用formmethod属性来对每一个表单元素指定不同的提交方法
		4.formenctype属性 🌰：Form.html
			html5中用此属性对表单元素分别指定不同的编码方式
		5.formtarget属性 🌰：Form.html
			html5中可以对多个提交按钮分别使用该属性来指定提交后在何处打开所需加载的页面
		6.autofocus属性 🌰：AutoFocus.html
			为文本框、选择框或按钮控件加上autofocus属性，当页面打开时，该控件自动获得光标焦点
		7.required属性 🌰：AutoFocus.html
			新增属性，可以应用于大多数输入元素上，在提交时，如果元素中的内容为空白，则不允许提交，
			同时在浏览器中显示信息提示文字
		8.labels属性 🌰：AutoFocus.html
			为所有可使用标签的表单元素、button、select元素等，定义一个labels属性，属性值为一个NodeList对象，
			代表该元素所绑定的标签元素所构成的集合
		9. 标签的control属性 🌰：NewForm.html
			可以在标签内部放置一个表单元素，并且通过该变迁的control属性来访问该表单元素
		10.文本框的placeholder属性 🌰：NewForm.html
			placeholder是指当文本框处于为输入状态时现实的输入提示。当文本库处于未输入状态且未获取光标焦点时，
			模糊显示图输入提示数字
		11.文本框的list属性 🌰：NewForm.html
			为单行文本增加了一个list属性，还属性的值为某个datalist元素的id。datalist元素也是html5中新增的元素，
			该元素类似于选择框，但是当用户想要设定的值不在选择列表值之内时，允许自动输入。datalist元素本身并不显示
			而是当文本框获得焦点时以提示输入的方式显示
		12.文本框的pattern属性 🌰：Pattern.html
			对input元素使用pattern属性，并且将属性值设为某个格式的正则表达式，在提交时会针对这些进行检查，检查其内容
			是否符合给定格式。当输入的内容不符合给定格式时，则不允许提交，同时在浏览器中显示信息提示文字
		13.文本框的AutoComplete属性 🌰：SelectionDirec.html
			帮助输入所用的自动完成功能，是一个既节省输入时间有十分方便的功能。安全性方面也得到很好的控制
		14.文本框的SelectionDirection属性
			input元素和textarea元素增加了该属性，当用户在这两个元素中用鼠标选取部分文字时，可以使用该属性来获取方向。
			当用户正向选取文字时，该属性值为"forward",当用户反向选取文字时，该属性值为"backward"。当用户没有选取任何
			文字时，该属性值为"forward" 
		15.复选框的indeterminate属性 🌰：NewForm.html
			对于复选框checkbox元素来说，过去只是选取与非选取这两种状态。在html5中，可以在javascript脚本代码中对该元素
			使用indeterminate属性，以说明复选框处于"尚未明确是否选取"状态
		16.image提交按钮的height属性与width属性 🌰：Image.html
			针对类型为image的input元素，html5新增了两个属性，height、width分别用来指定图片按钮的高度和宽度。
##  html5的结构
	## 大纲编排规则 🌰：Demo.html
		1.显式编排的内容区域块： 明确的使用section等元素创建文档结构，在每个区域块使用标题 eg. h1-h6，hgroup等
		2.隐式编排的内容区域块：不明确使用section等元素，而是根据网页需求而使用标题，把个体内容区域块自动创建出来
		3.标题分级： h1-h6 级别不同, 新的标题比上面标题级别低，将生成下级内容区域块
								  新的标题比上面标题级别高或相等，将生成新的内容区域块
		4.不同区域块可以使用相同级别的标题 





















