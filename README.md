# AutoSignIn
## 文档说明
这个插件主要是因为学校网络每次都要输入密码然后登录，这个过程太麻烦了，所以为了简化这个过程，就有了这个插件，
主要是基于autoLogin这个项目进行了二次开发。
autoLogin https://github.com/KKKyrie/autoLogin/tree/master/src


## manifest.json说明
+ manifest_version:文件内容格式的版本，目前版本为2
+ version:浏览器插件的版本
+ name:浏览器插件的名称
+ description:浏览器插件的描述信息
+ browser_action:浏览器插件的工具栏图标。
+ permissions:浏览器插件需要的权限，支持正则匹配。
+ background:浏览器插件后端程序，大部分浏览器插件api，以及https网站都需要后端程序来完成。如：获取浏览器插件的版本号。
+ content_scripts:页面注入配置。例如：向域名为xx的注入一串输出hello world的脚本，就需要该配置，同时也需要配置拥有该域名xx的权限。
+ run_at:注入的位置
+ document_end:文档的末尾
+ all_frames:是否全frame注入，比如页面使用了iframe或者frame。

## 使用说明
在chrome中打开开发者模式，然后选这个整个目录，就可以使用了。