/**
 * 中文数字规则
 * 阿拉伯数字中间的多个0合成一个零，数字最后的零省略
 * 91000 九万一千 101000 十万零一千 101001 十万零一千零一
 * 
 */

class xNumber {
    /**
     * 修正中文数字常见的错误，并转小写
     * @param {string} arg - 中文数字
     * @return {string} 不校验数字拼写是否正确，只转换常错的拼写
     */
    tolerant(arg) {
        let d = "零+,零,^零|零$,,壹,一,贰|两,二,叁,三,肆,四,伍,五,陆,六,柒,七,捌,八,玖,九,拾,十,^一十,十,廿,二十,卅,三十,卌,四十,佰,百,仟,千,萬,万,億,亿,百十,百一十,百([一二三四五六七八九])([^十]|$),百零$1$2,千([一二三四五六七八九])([^百]|$),千零$1$2,(万|亿)([一二三四五六七八九])([^千]|$),$1零$2$3,(十|百|千)(万|亿)([^零万亿]),$1$2零$3,亿万,亿".split(",");
        while (d.length) arg = arg.replace(new RegExp(d.shift(), "g"), d.shift());
        return arg;
    }

    /**
     * 中文数字小写转大写，“万”，“亿”是不区分大小写的
     * @param {string} arg - 中文数字
     * @return {string} 不校验数字拼写是否正确，只转换大写
     */
    numberChnToBig(arg) {
        let d = "一壹二贰三叁四肆五伍六陆七柒八捌九玖十拾百佰千仟".split("");
        while (d.length) arg = arg.replace(new RegExp(d.shift(), "g"), d.shift());
        return arg;
    }

    /**
     * 阿拉伯数字转中文数字
     * @param {number} num - 阿拉伯数字，不要使用巨大数字，受V8引擎精度限制，10^16左右就会精度失真。Math.pow(10,16) - 1 === Math.pow(10,16) 为 true
     * @return {string} 返回中文数字
     */
    numberAri2Chn(num) {
        let d = ["", ..."一二三四五六七八九".split("")],
            u = "万亿万亿万";
        let tmpList = ("0000" + num).replace(/.{0,4}((.{4})+)$/, "$1").match(/.{4}/g);
        tmpList = tmpList.map((x) => {
            x = x.split("").map((y) => d[+y]);
            return [x[0] ? x[0] + "千" : "零", x[1] ? x[1] + "百" : "零", x[2] ? x[2] + "十" : "零", x[3]].join("").replace(/零+$/, "");
        });
        return this.tolerant(tmpList.reduceRight((x, y, i) => y + u[tmpList.length - i - 2] + x));
    }

    /**
     * 中文数字转阿拉伯数字
     * @param {string} num - 中文数字，不要使用巨大数字。接近或大于一亿亿的时候，V8引擎下的整数会出现精度问题。
     * @return {number} 返回阿拉伯数字
     */
    numberChn2Ari(num) {
       
    }

    /**
     * 检查中文数字是否合法，非法返回空字串。如果中文数字可容错，会返回正确的中文数字拼写
     * @param {string} num - 中文数字
     * @return {string}
     */
    numberTestChn(num) {

    }
    
}
module.exports = new xNumber;