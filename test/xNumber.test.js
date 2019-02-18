const xNumber = require('../src/xNumber');

describe('test xNumber.numberAri2Chn', () => {

    it("test tolerant", () => {
        expect(xNumber.tolerant(""));
    });

    it("test numberAri2Chn", () => {
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
        expect(xNumber.numberAri2Chn(10011000)).toBe("一千零一万一千");
        expect(xNumber.numberAri2Chn(100011000)).toBe("一亿零一万一千");
        expect(xNumber.numberAri2Chn(1000011000)).toBe("十亿零一万一千");
        expect(xNumber.numberAri2Chn(10000011000)).toBe("一百亿零一万一千");
        expect(xNumber.numberAri2Chn(101000011000)).toBe("一千零一十亿零一万一千");
        expect(xNumber.numberAri2Chn(1000000011000)).toBe("一万亿零一万一千");
    });

    it("test numberChnToBig", () => {
        expect(xNumber.numberChnToBig("一万亿零一万一千")).toBe("壹万亿零壹万壹仟");
    });

    it("test numberChn2Ari", () => {
        expect(xNumber.numberChn2Ari());
    });

    it("test numberTestChn", () => {
        expect(xNumber.numberTestChn());
    });
});