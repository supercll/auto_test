function expect(res) {
  return {
    toBe: function (actual) {
      if (res !== actual) {
        throw new Error("预期值和实际值不相等");
      }
    },
  };
}

function test(desc, fn) {
  try {
    fn();
    console.log(`${desc}通过测试`);
  } catch (e) {
    console.log(`${desc}未通过测试`);
  }
}

test("测试加法", () => {
  expect(add(3, 7)).toBe(10);
});
test("测试减法", () => {
  expect(minus(3, 3)).toBe(0);
});
