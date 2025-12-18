### 写在前面

目前中文魔兽家宅游玩中，有一个非常难崩的问题 —— 我们没有一个直观的方式能查询到所有的住宅装饰信息，普遍需要依赖游戏内的插件（比如ATT、HomeBound）来间接收集，而插件本身数据更新也有延迟和错误，且几乎没有解决“查询”这个功能痛点。

如果把视角放到游戏外，魔兽世界在全球有两大第三方数据库：Wowhead和WoWDB，他们都不怎么能被国服用户使用：

- Wowhead家宅浏览器在Beta测试阶段起步缓慢，虽然现在的体验已经足够优秀，且支持原生中文浏览和搜索查询，但它主动屏蔽来自中国的访问，显然无法被国服玩家使用；

- WoWDB对家宅玩法的响应非常迅速，在测试服早期就建立了专题网站，甚至这次暴雪官方蓝贴中使用的都是WoWDB的链接（之前默认使用wowhead链接/专题作为信息拓展），功能也较Wowhead更加丰富，虽可以在国内正常使用，但仅支持英文这一个问题，就拦住了全球几乎所有非英文母语的用户，它的所有者MMO-Champion作为Wowhead唯一的竞争者一直不温不火，也只有在硬核玩家和数据挖掘者里有一定名声了

---

### 如何解决？

**我为能支持国内访问的WoWDB制作了一款翻译插件**，可以将WoWDB内标准游戏名词和大部分网页元素替换为标准简中译名和我预置的合理翻译，是之前我那份[WoWDB翻译脚本](https://bbs.nga.cn/read.php?tid=45280135)的进一步升级，尤其改善了加载速度和词义混淆问题，还尝试性的加入了简易搜索功能，以中文输入物品名后，会反向替换为英文进行搜索，应该能满足大部分使用需要了

---

### 插件安装和使用

- [Chrome应用商店](https://chromewebstore.google.com/detail/fhfojbpnldhokbgjoaijlhjhafcedgdg)

- [Edge应用商店](https://microsoftedge.microsoft.com/addons/detail/nhafimdmikfkfgflhclfkikljohhpbii)

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

<img width="1280" height="800" alt="GShop1" src="https://github.com/user-attachments/assets/a90b2388-a17f-4060-ad07-ba301b0b9008" />


装饰详情👇

<img width="1280" height="800" alt="GShop2" src="https://github.com/user-attachments/assets/1176f0cf-68f4-46f1-9be1-d6ee87b8a0d0" />


玩家建造分享👇

<img width="1280" height="800" alt="GShop3" src="https://github.com/user-attachments/assets/f3526938-da0a-4656-b0ae-6f69986d9314" />


住宅区地块👇

<img width="1280" height="800" alt="GShop4" src="https://github.com/user-attachments/assets/b7a97377-7ea3-4841-a432-7fdf5fcf610b" />


装饰商人查询👇

<img width="1280" height="800" alt="GShop5" src="https://github.com/user-attachments/assets/bf3335ff-ec84-4ad4-b866-8b90beb3b600" />


插件专属功能👇

快速跳转至 Wowhead / jinY中文数据库（db.damijing.com），查看更多信息

<img width="254" height="196" alt="popup" src="https://github.com/user-attachments/assets/ff59641f-b7a7-4cf0-aa8b-5b25fc79e59a" />

<img width="478" height="108" alt="right" src="https://github.com/user-attachments/assets/98348724-f87a-4d0c-bc3f-993819a1a084" />

---

### 其他信息

**NGA发布**：​[WoWDB家宅数据库中文翻译插件 国服玩家也能用上的家宅信息大全](https://bbs.nga.cn/read.php?tid=45753742)

**Wow114专题**：[家宅系统专题](https://flowus.cn/yinseliming/share/fb916eb2-20af-43cc-be5a-d4fddf528840)

