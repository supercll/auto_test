import { add, minus, multi } from "./index.js";
/* 
test("测试加法", () => {
  expect(add(3, 7)).toBe(10);
});
test("测试减法", () => {
  expect(minus(3, 3)).toBe(0);
});
test("测试乘法", () => {
  expect(multi(3, 3)).toBe(9);
}); */
// 运行：yarn test

// toBe就是匹配器matchers == Object.is()
/* test("测试对象内容相等", () => {
  const a = { age: 18 };
  expect(a).toEqual({ age: 18 });
});

test("测试Null", () => {
  const a = null;
  expect(a).toBeNull();
});
test("测试Undefined", () => {
  const a = undefined;
  expect(a).toBeUndefined();
});
test("测试已定义", () => {
  const a = null;
  expect(a).toBeDefined();
});

test("测试是否为真", () => {
  const a = 0;
  expect(a).toBeTruthy();
});
test("测试是否为假", () => {
  const a = 0;
  expect(a).toBeFalsy();
});
test("测试取反", () => {
  const a = 1;
  expect(a).not.toBeFalsy();
});
 */

/* test("测试数字大小", () => {
  const a = 3;
  expect(a).toBeGreaterThan(2);
});
test("测试数字大小", () => {
  const a = 3;
  expect(a).toBeLessThan(4);
});
test("测试数字大小", () => {
  const a = 3;
  expect(a).toBeGreaterThanOrEqual(3);
});
test("测试近似浮点数", () => {
  const a = 0.1;
  const b = 0.2;
  // 小数相加会有溢出bug
  expect(a + b).toBeCloseTo(0.3);
}); */

test("测试字符串", () => {
  const str = "lc";
  expect(str).toMatch("c");
});


test("测试数组包含", () => {
  const list = [1, 2, 3];
  const set = new Set(list);
  expect(list).toContain(1);
  expect(set).toContain(1);
});

test("测试异常", () => {
  expect(() => {
    throw new Error("error");
  }).toThrow("error");
});
