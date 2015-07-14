d1 = ["都是","我覺得","可能是","也許","應該","說不定","我媽說","我同學都覺得","出社會的人","有些時候","我爸不喜歡","你這個人","說實在的","只是因為","別再找理由"]
d2 = ["你的個性","我跟你","你來我家的時候","我去你家的時候","你","我們之間","你無法克服障礙"]
d3 = ["太差勁","太小氣","很沒水準","你的脾氣很糟糕","真的不合","床上有別人","劈腿","沒有火花","沒前途","很有問題","不會長久"]
function randomChineseName() //隨機產生中文名字
{
    function random(a, l) {
        var x = [];
        x.push(a[Math.ceil(Math.random() * a.length)]);
        while(l > 1) {
            x.push(a[Math.ceil(Math.random() * a.length)]);
            l--;
        }
        return x.join("");
    }
 
    return random("李 王 張 劉 陳 楊 黃 趙 周 吳 徐 孫 朱 馬 胡 郭 林 何 高 梁 鄭 羅 宋 謝 唐 韓 曹 許 鄧 蕭 馮 曾 程 蔡 彭 潘 袁 於 董 餘 蘇 葉 呂 魏 蔣 田 杜 丁 沈 姜 範 江 傅 鐘 盧 汪 戴 崔 任 陸 廖 姚 方 金 邱 夏 譚 韋 賈 鄒 石 熊 孟 秦 閻 薛 侯 雷 白 龍 段 郝 孔 邵 史 毛 常 萬 顧 賴 武 康 賀 嚴 尹 錢 施 牛 洪 龔".split(" ")) + random("世 中 仁 伶 佩 佳 俊 信 倫 偉 傑 儀 元 冠 凱 君 哲 嘉 國 士 如 娟 婷 子 孟 宇 安 宏 宗 宜 家 建 弘 強 彥 彬 德 心 志 忠 怡 惠 慧 慶 憲 成 政 敏 文 昌 明 智 曉 柏 榮 欣 正 民 永 淑 玉 玲 珊 珍 珮 琪 瑋 瑜 瑞 瑩 盈 真 祥 秀 秋 穎 立 維 美 翔 翰 聖 育 良 芬 芳 英 菁 華 萍 蓉 裕 豪 貞 賢 郁 鈴 銘 雅 雯 霖 青 靜 韻 鴻 麗 龍".split(" "), Math.ceil(Math.random()*2));
}
function randomReason() //隨機產生理由
{
    var n1 = rand(1,d1.length);
    var n2 = rand(1,d2.length);
    var n3 = rand(1,d3.length);
    return d1[n1]+d2[n2]+d3[n3];
}

function rand(min,max)
{
  return Math.floor(Math.random()*(max-min+1)+min);
}

function setText(id, content) //文字框
{
  document.getElementById(id).value = content
}

function setRadio(id) //單選
{
  var n = rand(1,5);
  document.getElementById(id+"_" + n).checked = true;
}


setText("entry_1214292269", randomChineseName());
document.getElementById("group_965713296_1").checked = true;
setText("entry_863781474", randomReason());
setText("entry_715133244", randomReason());


