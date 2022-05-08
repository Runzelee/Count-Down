# 2022上海中考倒计时

首先恭喜[上海中考延期](https://mp.weixin.qq.com/s/D02YZKJpeoqMWhjdLthDNg) 

本项目由2022高考倒计时修改得来，并进行了一些优化，中考后将改为可选的多重倒计时和[URL参数配置](#使用实例)配合使用   
已经部署到vercel：
https://countdown.runzelee.xyz  
同时使用tauri打包成桌面版：[这里](https://github.com/Runzelee/Count-Down-tauri)  
为了方便，tauri项目将此项目作为一个submodule，所以该项目部分优化是为兼顾tauri桌面平台


## 以下为原repo README

本项目由2019中考倒计时修改得来

感谢[Eqvpkbz](http://eqvpkbz.github.io/)大佬的帮助

本项目的样式参考了 [https://gitee.com/QH_ayang/digital-time-unit](https://gitee.com/QH_ayang/digital-time-unit)

## URL参数

* `date`为倒计时的目标日期，格式为`YYYY/MM/DD`

* `time`为倒计时的目标时刻，格式为`HH:MM`

* `name`为倒计时的标题

* `mode`为倒计时的样式选择，格式为`light`或`night`

参数之间用`&`分隔

`date`、`time`、`name`任意缺少一个或目标时刻已过都会将倒计时自动切换为2022高考倒计时

`mode`不设置则默认为`night`

## 使用实例

获取2022高考倒计时：

[https://t.micdz.cn/?name=2022高考&date=2022/06/07&time=08:00](https://t.micdz.cn/?name=2022高考&date=2022/06/07&time=08:00)

![](https://t.micdz.cn/2022高考.png)

获取2021年高考倒计时


[https://t.micdz.cn/?name=2021高考&date=2021/06/07&time=08:00](https://t.micdz.cn/?name=2021高考&date=2021/06/07&time=08:00)
