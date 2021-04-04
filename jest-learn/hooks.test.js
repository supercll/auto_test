import { add, minus, multi, asyncFunc, Counter } from "./index.js";
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

/* test("测试字符串", () => {
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
 */

/* test("asyncFunc 返回结果为 {success: true}", () => {
  return asyncFunc().then(res => {
    expect(res).toEqual({ success: true });
  });
});

test("asyncFunc 返回结果为 404", () => {
  expect.assertions(1); // 必须执行一次
  return asyncFunc().catch(e => {
    expect(e.toString().indexOf(404) > -1).toBe(true);
  });
}); */
/* test("asyncFunc 返回结果为 true", async () => {
  await expect(asyncFunc()).resolves.toMatchObject({
    success: true,
  });
}); */
/* test("asyncFunc 返回结果", async () => {
  const response = await asyncFunc();
  expect(response).toEqual({
    success: true,
  });
});
 */

/* test("asyncFunc 返回结果为 404", async () => {
  expect.assertions(1); // 必须执行一次预计函数expect()
  try {
    await asyncFunc();
  } catch (e) {
    expect(e).toEqual(404);
  }
});
 */

describe("Counter 全局测试环境", () => {
  let counter = null;
  beforeAll(() => {
    console.log("beforeAll");
  });

  afterAll(() => {
    console.log("afterAll");
  });

  beforeEach(() => {
    // 每一个测试之前
    console.log("beforeEach");
    counter = new Counter();
  });
  afterEach(() => {
    console.log("afterEach");
  });

  // describe 类似于分组
  describe("测试增加功能", () => {
    beforeAll(() => {
      console.log("beforeAll add");
    });
    beforeEach(() => {
      console.log("beforeEach add");
      counter = new Counter();
    });
    test.only("Counter add", async () => {
      console.log("add");
      counter.add();
      expect(counter.number).toBe(1);
    });
  });
  describe("测试减少功能", () => {
    test("Counter minus", async () => {
      console.log("minus");
      counter.minus();
      expect(counter.number).toBe(-1);
    });
  });
});
