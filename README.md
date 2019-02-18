xTool.js包的子包，单独拿出来作中文文档，方便中文用户。

<a name="xNumber"></a>

## xNumber
中文数字规则
阿拉伯数字中间的多个0合成一个零，数字最后的零省略
91000 九万一千 101000 十万零一千 101001 十万零一千零一

**Kind**: global class  

* [xNumber](#xNumber)
    * [.tolerant(arg)](#xNumber+tolerant) ⇒ <code>string</code>
    * [.numberChnToBig(arg)](#xNumber+numberChnToBig) ⇒ <code>string</code>
    * [.numberAri2Chn(num)](#xNumber+numberAri2Chn) ⇒ <code>string</code>
    * [.numberChn2Ari(num)](#xNumber+numberChn2Ari) ⇒ <code>number</code>
    * [.numberTestChn(num)](#xNumber+numberTestChn) ⇒ <code>string</code>

<a name="xNumber+tolerant"></a>

### xNumber.tolerant(arg) ⇒ <code>string</code>
修正中文数字常见的错误，并转小写

**Kind**: instance method of [<code>xNumber</code>](#xNumber)  
**Returns**: <code>string</code> - 不校验数字拼写是否正确，只转换常错的拼写  

| Param | Type | Description |
| --- | --- | --- |
| arg | <code>string</code> | 中文数字 |

<a name="xNumber+numberChnToBig"></a>

### xNumber.numberChnToBig(arg) ⇒ <code>string</code>
中文数字小写转大写，“万”，“亿”是不区分大小写的

**Kind**: instance method of [<code>xNumber</code>](#xNumber)  
**Returns**: <code>string</code> - 不校验数字拼写是否正确，只转换大写  

| Param | Type | Description |
| --- | --- | --- |
| arg | <code>string</code> | 中文数字 |

<a name="xNumber+numberAri2Chn"></a>

### xNumber.numberAri2Chn(num) ⇒ <code>string</code>
阿拉伯数字转中文数字

**Kind**: instance method of [<code>xNumber</code>](#xNumber)  
**Returns**: <code>string</code> - 返回中文数字  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>number</code> | 阿拉伯数字，不要使用巨大数字，受V8引擎精度限制，10^16左右就会精度失真。Math.pow(10,16) - 1 === Math.pow(10,16) 为 true |

<a name="xNumber+numberChn2Ari"></a>

### xNumber.numberChn2Ari(num) ⇒ <code>number</code>
中文数字转阿拉伯数字

**Kind**: instance method of [<code>xNumber</code>](#xNumber)  
**Returns**: <code>number</code> - 返回阿拉伯数字  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>string</code> | 中文数字，不要使用巨大数字。接近或大于一亿亿的时候，V8引擎下的整数会出现精度问题。 |

<a name="xNumber+numberTestChn"></a>

### xNumber.numberTestChn(num) ⇒ <code>string</code>
检查中文数字是否合法，非法返回空字串。如果中文数字可容错，会返回正确的中文数字拼写

**Kind**: instance method of [<code>xNumber</code>](#xNumber)  

| Param | Type | Description |
| --- | --- | --- |
| num | <code>string</code> | 中文数字 |

