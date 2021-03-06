//校验基本日期格式
var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/; 

//校验密码强度(密码的强度必须是包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间。)
var reg = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{8,10}$/;

//校验中文(字符串仅能是中文)
var reg = /^[\u4e00-\u9fa5]{0,}$/;

//由数字、26个英文字母或下划线组成的字符串
var reg = /^\w+$/;

//校验E-Mail 地址
var reg = /[\w!#$%&'+/=?^_`{|}~-]+(?:.[\w!#$%&'+/=?^_`{|}~-]+)@(?:[\w](?:[\w-][\w])?.)+\w?/;

//校验身份证号码
var reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/; //(15位)
var reg = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/; //(18位)

//校验日期(“yyyy-mm-dd“ 格式的日期校验，已考虑平闰年。)
var reg = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;

//校验金额
var reg = /^[0-9]+(.[0-9]{2})?$/;

//判断IE的版本
var reg = /^.MSIE 5-8?(?!.Trident\/[5-9].0).*$/;

//校验IP-v4地址
var reg = /\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;

//校验IP-v6地址
var reg = /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/;

//检查URL的前缀
var reg = /^[a-zA-Z]+:\/\//;
if (!s.match(/^[a-zA-Z]+:\/\//)) {
　　s = 'http://' + s;
}

//提取URL链接
var reg = /^(f|ht){1}(tp|tps):\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/;

//文件路径及扩展名校验(windows下文件,下面的例子中为.txt文件)
var reg = /^([a-zA-Z]\:|\\)\\([^\\]+\\)*[^\/:*?"<>|]+\.txt(l)?$/;

//提取Color Hex Codes
var reg = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;

//提取网页图片
var reg = /\< *[img][^\\>]*[src] *= *[\"\']{0,1}([^\"\'\ >]*)/;

//提取页面超链接
var reg = /(<a\s*(?!.*\brel=)[^>]*)(href="https?:\/\/)((?!(?:(?:www\.)?'.implode('|(?:www\.)?', $follow_list).'))[^"]+)"((?!.*\brel=)[^>]*)(?:[^>]*)>/;

//查找CSS属性
var reg = /^\s*[a-zA-Z\-]+\s*[:]{1}\s[a-zA-Z0-9\s.#]+[;]{1}/;

//匹配HTML标签
var reg = /<\/?\w+((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[\^'">\s]+))?)+\s*|\s*)\/?>/;

//copy from http://www.imooc.com/article/7615
//regex101 是一个非常不错的正则表达式在线测试工具，你可以直接在线测试你的正则表达式哦。