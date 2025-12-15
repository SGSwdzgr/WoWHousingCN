### 写在前面

目前中文魔兽家宅游玩中，有一个非常难崩的问题 —— 我们没有一个直观的方式能查询到所有的住宅装饰信息，普遍需要依赖游戏内的插件（比如ATT、HomeBound）来间接收集，而插件本身数据更新也有延迟和错误，且几乎没有解决“查询”这个功能痛点。

如果把视角放到游戏外，魔兽世界在全球有两大第三方数据库：Wowhead和WoWDB，他们都不怎么能被国服用户使用：

- Wowhead家宅浏览器在Beta测试阶段起步缓慢，虽然现在的体验已经足够优秀，且支持原生中文浏览和搜索查询，但它主动屏蔽来自中国的访问，显然无法被国服玩家使用；

- WoWDB对家宅玩法的响应非常迅速，在测试服早期就建立了专题网站，甚至这次暴雪官方蓝贴中使用的都是WoWDB的链接（之前默认使用wowhead链接/专题作为信息拓展），功能也较Wowhead更加丰富，虽可以在国内正常使用，但仅支持英文这一个问题，就拦住了全球几乎所有非英文母语的用户，它的所有者MMO-Champion作为Wowhead唯一的竞争者却一直不温不火，也只有在硬核玩家和数据挖掘者里有一定名声了

---

### 如何解决？

**我为能支持国内访问的WoWDB制作了一款翻译插件**，可以将WoWDB内标准游戏名词和大部分网页元素替换为标准简中译名和我预置的合理翻译，是之前我那份[WoWDB翻译脚本](https://bbs.nga.cn/read.php?tid=45280135)的进一步升级，尤其改善了加载速度和词义混淆问题，还尝试性的加入了简易搜索功能，以中文输入物品名后，会反向替换为英文进行搜索，应该能满足大部分使用需要了

---

### 插件安装和使用

- Chrome应用商店（上架审核中）

- Edge应用商店（上架审核中）

- 离线安装包：[Github Releases](https://github.com/SGSwdzgr/WoWHousingCN/releases)

安装完成后，进入[housing.wowdb.com](https://housing.wowdb.com)即可使用，如最常用的功能[住宅装饰浏览](https://housing.wowdb.com/decor/#grid-view)，插件无任何配置选项，无任何信息收集，纯本地运行，开启即翻译，停用即关闭

---

### 特别说明

- 任务和NPC（装饰商人/副本首领等）信息受数据库限制无法全部覆盖，但随版本更新我会逐步补充，还请谅解

- WoWDB登录后的字段尚未全部覆盖、涉及开发的内容（代码嵌入、鼠标提示）未汉化，相信有此类需求的朋友有足够语言能力

- **本人文化水平有限，不保证所有汉化结果均准确可靠；WoWDB也同样会犯错，所有信息请以游戏内实装效果为准**

- 插件本体代码由AI辅助生成，同样不保证稳定可靠，欢迎技术大佬提出优化意见，万分感谢

- 制作插件纯粹个人兴趣，无任何收益，只希望能让更多朋友免受繁杂纷扰，直达信息源头

- 涉及所有信息版权均为WoWDB和暴雪娱乐所有，插件为免费分享，请勿以任何付费途径二次销售

---

### 关于中文搜索

这是项试验性功能，由于网站实质上不支持中文，搜索适配依靠的是输入中文→插件查表→替换为英文→传递到网站进行搜索

因此，暂时仅推荐使用具体物品名进行搜索。如果是比较抽象的词汇（比如窗户）可能就不行，推荐通过分类筛选来查询

https://github.com/user-attachments/assets/504cf5b3-d983-47f8-8ac0-c199e792a7c4

---

### 插件效果预览


装饰浏览👇

![GShop1.png](https://cdn2.flowus.cn/oss/9219b282-f7a1-4c2b-82f6-13cf6cb6263b/GShop1.png?time=1765768500&token=b249186aadf44ab2d128bf7f4c386a8568fbeb1318a46602517d0cb46f2483f0&role=free)

装饰详情👇

![GShop2.png](https://cdn2.flowus.cn/oss/a1beb4cc-ca08-48bd-951a-8f8641645c73/GShop2.png?time=1765770300&token=dbbe59ac73a66a2a0bdd4ca07aa8c4c56b6bfaf5541f79188c27c0d2897430dd&role=sharePaid)

玩家建造分享👇

![GShop3.png](https://cdn2.flowus.cn/oss/fd070851-1fa9-45b1-be03-360d289c2563/GShop3.png?time=1765770300&token=fdf14c1ee1508ffba08de257b421e25485c51cb4730b296608d8b7c2a4391638&role=sharePaid)

住宅区地块👇

![GShop4.png](https://cdn2.flowus.cn/oss/00c41379-6ba8-43a6-b755-df4f00f11887/GShop4.png?time=1765770300&token=e8d8e11ddb9a03f8497070a2a29accec8440c6c27542a0471ac443da956e9d72&role=sharePaid)

装饰商人查询👇

![GShop5.png](https://cdn2.flowus.cn/oss/b1665e1c-fdf7-4c30-b844-d502accb5f6a/GShop5.png?time=1765770300&token=f6d0ab29cb20ae2f869c03fd4c2960f56fa2f7ffe70b2781a99b71edbc05ebdb&role=sharePaid)

---

### 其他信息

**NGA发布**：​[WoWDB家宅数据库中文翻译插件 国服玩家也能用上的家宅信息大全](https://bbs.nga.cn/read.php?tid=45753742)

**Wow114专题**：[家宅系统专题](https://flowus.cn/yinseliming/share/fb916eb2-20af-43cc-be5a-d4fddf528840)

