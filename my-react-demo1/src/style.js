import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@charset "utf-8";  
* {
    /* -moz-none 子元素所有文字多不能选择，除掉input输入域中的文字。
        none 子元素所有的文字都不能选择，包括input输入域中的文字。
        -moz-all 子元素所有的文字都可以被选择，但是input输入域中的文字不能被选择。
    */
    moz-user-select: -moz-none;  /* 子元素不能选中文字 */
    -moz-user-select: none;   /* 子元素不能选中文字 */
    -ms-user-select: none;   /* 兼容 */
    user-select: none;       /* 兼容 */
    /* text： 可以选择文本
       all： 当所有内容作为一个整体时可以被选择。如果双击或者在上下文上点击子元素，那么被选择的部分将是以该子元素向上回溯的最高祖先元素。
       element: 可以选择文本，但选择范围受元素边界的约束
    */
    -o-user-select: none;  /* 文本不能被选中 */
    -khtml-user-select: none; /* -khtml-苹果浏览器的文本不能选中 */
    -webkit-user-select: none; /* -webkit-苹果浏览器的文本不能选中 */
    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;  /* 移动端字体 */
}
body{
    /* 属性控制元素在移动设备上是否使用滚动回弹效果. */
    -webkit-overflow-scrolling: touch; 
    overflow-y:auto;
    /* 不显示默认的高亮颜色 */
    -webkit-tap-highlight-color: transparent;
}
html{
    color:#000;
	  background:#FFF;
}
body, div, dl, dt, dd, ul, ol, li,h1, h2, h3, h4, h5, h6, pre, code,form, fieldset, legend, input, button,textarea, p, blockquote, th, td {
	margin: 0;
	padding: 0;
}
fieldset, img{
	border:none;
}
input,select,textarea{
    outline:none;  /* 选中文本框取消蓝边 */
    /*清除移动端默认的表单样式*/
    -webkit-appearance: none;
} 
/* placeholder属性 */
::-webkit-input-placeholder {
color: mediumvioletred;
text-indent: 5px;
}
textarea{
    /* 控制textarea不可由用户调整尺寸大小
        both 可以由用户调整尺寸大小
    */
    resize:none;
}
a{
    text-decoration:none;  /* 取消下划线 */
    color: #333;
    /*去除点击按钮，有灰色阴影*/
    -webkit-tap-highlight-color: rgba(0,0,0,0);
}
table {
	border-collapse:collapse;  /* 为表格设置合并边框模型 实线 */
	border-spacing:0; /* 外线间距 */
}
address,
caption,
cite,
code,
dfn,
em,
strong,
th,
var {
	font-style:normal;
	font-weight:normal;
}
ol,
ul {
	list-style:none;
}
caption,
th {
	text-align:left;
}
/* 万能清除浮动*/

.clearfix:after{
    content: '';
    display:block;
    clear:both;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`


