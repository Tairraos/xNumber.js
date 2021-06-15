const xNumber = require('../src/xNumber');

describe('test xNumber.numberAri2Chn', () => {

    it("test tolerant", () => {
        expect(xNumber.tolerant("")).toBe("零");
        expect(xNumber.tolerant("十零")).toBe("十");
        expect(xNumber.tolerant("零十")).toBe("十");
        expect(xNumber.tolerant("一千零零十")).toBe("一千零一十");
        expect(xNumber.tolerant("一百零零十")).toBe("一百一十");
    });

    it("test numberAri2Chn", () => {
        expect(xNumber.numberAri2Chn(0)).toBe("零");
        expect(xNumber.numberAri2Chn(1)).toBe("一");
        expect(xNumber.numberAri2Chn(2)).toBe("二");
        expect(xNumber.numberAri2Chn(3)).toBe("三");
        expect(xNumber.numberAri2Chn(4)).toBe("四");
        expect(xNumber.numberAri2Chn(5)).toBe("五");
        expect(xNumber.numberAri2Chn(6)).toBe("六");
        expect(xNumber.numberAri2Chn(7)).toBe("七");
        expect(xNumber.numberAri2Chn(8)).toBe("八");
        expect(xNumber.numberAri2Chn(9)).toBe("九");
        expect(xNumber.numberAri2Chn(10)).toBe("十");
        expect(xNumber.numberAri2Chn(11)).toBe("十一");
        expect(xNumber.numberAri2Chn(20)).toBe("二十");
        expect(xNumber.numberAri2Chn(25)).toBe("二十五");
        expect(xNumber.numberAri2Chn(30)).toBe("三十");
        expect(xNumber.numberAri2Chn(90)).toBe("九十");
        expect(xNumber.numberAri2Chn(100)).toBe("一百");
        expect(xNumber.numberAri2Chn(101)).toBe("一百零一");
        expect(xNumber.numberAri2Chn(110)).toBe("一百一十");
        expect(xNumber.numberAri2Chn(111)).toBe("一百一十一");
        expect(xNumber.numberAri2Chn(999)).toBe("九百九十九");
        expect(xNumber.numberAri2Chn(1000)).toBe("一千");
        expect(xNumber.numberAri2Chn(1001)).toBe("一千零一");
        expect(xNumber.numberAri2Chn(1010)).toBe("一千零一十");
        expect(xNumber.numberAri2Chn(1100)).toBe("一千一百");
        expect(xNumber.numberAri2Chn(1011)).toBe("一千零一十一");
        expect(xNumber.numberAri2Chn(10000)).toBe("一万");
        expect(xNumber.numberAri2Chn(10001)).toBe("一万零一");
        expect(xNumber.numberAri2Chn(10010)).toBe("一万零一十");
        expect(xNumber.numberAri2Chn(10010)).toBe("一万零一十");
        expect(xNumber.numberAri2Chn(10100)).toBe("一万零一百");
        expect(xNumber.numberAri2Chn(11010)).toBe("一万一千零一十");
        expect(xNumber.numberAri2Chn(101010)).toBe("十万零一千零一十");
        expect(xNumber.numberAri2Chn(10000010)).toBe("一千万零一十");
        expect(xNumber.numberAri2Chn(10011000)).toBe("一千零一万一千");
        expect(xNumber.numberAri2Chn(100011000)).toBe("一亿零一万一千");
        expect(xNumber.numberAri2Chn(10011000)).toBe("一千零一万一千");
        expect(xNumber.numberAri2Chn(100011000)).toBe("一亿零一万一千");
        expect(xNumber.numberAri2Chn(1000011000)).toBe("十亿零一万一千");
        expect(xNumber.numberAri2Chn(10000011000)).toBe("一百亿零一万一千");
        expect(xNumber.numberAri2Chn(101000011000)).toBe("一千零一十亿零一万一千");
        expect(xNumber.numberAri2Chn(1000000011000)).toBe("一万亿零一万一千");
        expect(xNumber.numberAri2Chn(10000000000000000)).toBe("一亿亿");
    });

    it("test numberChnToBig", () => {
        expect(xNumber.numberChnToBig("一万二千三百四十五亿六千七百八十九万零二百三十四")).toBe("壹万贰仟叁佰肆拾伍亿陆仟柒佰捌拾玖万零贰佰叁拾肆");
    });

    it("test numberChnToBig", () => {
        expect(xNumber.numberChnToSmall("壹万贰仟叁佰肆拾伍亿陆仟柒佰捌拾玖万零贰佰叁拾肆")).toBe("一万二千三百四十五亿六千七百八十九万零二百三十四");
    });

    it("test numberChn2Ari", () => {
        expect(xNumber.numberChn2Ari("一一")).toBe(-1);
        expect(xNumber.numberChn2Ari("一")).toBe(1);
        expect(xNumber.numberChn2Ari("二")).toBe(2);
        expect(xNumber.numberChn2Ari("三")).toBe(3);
        expect(xNumber.numberChn2Ari("四")).toBe(4);
        expect(xNumber.numberChn2Ari("五")).toBe(5);
        expect(xNumber.numberChn2Ari("六")).toBe(6);
        expect(xNumber.numberChn2Ari("七")).toBe(7);
        expect(xNumber.numberChn2Ari("八")).toBe(8);
        expect(xNumber.numberChn2Ari("九")).toBe(9);
        expect(xNumber.numberChn2Ari("十")).toBe(10);
        expect(xNumber.numberChn2Ari("十一")).toBe(11);
        expect(xNumber.numberChn2Ari("二十")).toBe(20);
        expect(xNumber.numberChn2Ari("二十五")).toBe(25);
        expect(xNumber.numberChn2Ari("三十")).toBe(30);
        expect(xNumber.numberChn2Ari("九十")).toBe(90);
        expect(xNumber.numberChn2Ari("一百")).toBe(100);
        expect(xNumber.numberChn2Ari("一百零一")).toBe(101);
        expect(xNumber.numberChn2Ari("一百一十")).toBe(110);
        expect(xNumber.numberChn2Ari("一百一十一")).toBe(111);
        expect(xNumber.numberChn2Ari("九百九十九")).toBe(999);
        expect(xNumber.numberChn2Ari("一千")).toBe(1000);
        expect(xNumber.numberChn2Ari("一千零一")).toBe(1001);
        expect(xNumber.numberChn2Ari("一千零一十")).toBe(1010);
        expect(xNumber.numberChn2Ari("一千零十")).toBe(1010);
        expect(xNumber.numberChn2Ari("一千一百")).toBe(1100);
        expect(xNumber.numberChn2Ari("一千零一十一")).toBe(1011);
        expect(xNumber.numberChn2Ari("一万")).toBe(10000);
        expect(xNumber.numberChn2Ari("一万零一")).toBe(10001);
        expect(xNumber.numberChn2Ari("一万零一十")).toBe(10010);
        expect(xNumber.numberChn2Ari("一万零十")).toBe(10010);
        expect(xNumber.numberChn2Ari("一万零一百")).toBe(10100);
        expect(xNumber.numberChn2Ari("一万一千零一十")).toBe(11010);
        expect(xNumber.numberChn2Ari("十万零一千零一十")).toBe(101010);
        expect(xNumber.numberChn2Ari("一千万零一十")).toBe(10000010);
        expect(xNumber.numberChn2Ari("一千零一万一千")).toBe(10011000);
        expect(xNumber.numberChn2Ari("一亿零一万一千")).toBe(100011000);
        expect(xNumber.numberChn2Ari("一千零一万一千")).toBe(10011000);
        expect(xNumber.numberChn2Ari("一亿零一万一千")).toBe(100011000);
        expect(xNumber.numberChn2Ari("十亿零一万一千")).toBe(1000011000);
        expect(xNumber.numberChn2Ari("一百亿零一万一千")).toBe(10000011000);
        expect(xNumber.numberChn2Ari("一千零一十亿零一万一千")).toBe(101000011000);
        expect(xNumber.numberChn2Ari("一万亿零一万一千")).toBe(1000000011000);
    });

    it("test isLegalChnNum", () => {
        expect(xNumber.isLegalChnNum("一")).toBeTruthy();
        expect(xNumber.isLegalChnNum("二")).toBeTruthy();
        expect(xNumber.isLegalChnNum("三")).toBeTruthy();
        expect(xNumber.isLegalChnNum("十")).toBeTruthy();
        expect(xNumber.isLegalChnNum("十一")).toBeTruthy();
        expect(xNumber.isLegalChnNum("二十")).toBeTruthy();
        expect(xNumber.isLegalChnNum("二十五")).toBeTruthy();
        expect(xNumber.isLegalChnNum("三十")).toBeTruthy();
        expect(xNumber.isLegalChnNum("九十")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一百")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一百零一")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一百一十")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一百一十一")).toBeTruthy();
        expect(xNumber.isLegalChnNum("九百九十九")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一千")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一千零一")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一千零一十")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一千一百")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一千零一十一")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一万")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一万零一")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一万零一十")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一万零一十")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一万零一百")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一万一千零一十")).toBeTruthy();
        expect(xNumber.isLegalChnNum("十万零一千零一十")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一千万零一十")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一千零一万一千")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一亿零一万一千")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一千零一万一千")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一亿零一万一千")).toBeTruthy();
        expect(xNumber.isLegalChnNum("十亿零一万一千")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一百亿零一万一千")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一千零一十亿零一万一千")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一万亿零一万一千")).toBeTruthy();
        expect(xNumber.isLegalChnNum("一万万万")).toBeFalsy();
        expect(xNumber.isLegalChnNum("abc")).toBeFalsy();
        expect(xNumber.isLegalChnNum("1")).toBeFalsy();
        expect(xNumber.isLegalChnNum("12")).toBeFalsy();
        expect(xNumber.isLegalChnNum("12a")).toBeFalsy();

    });
    
});