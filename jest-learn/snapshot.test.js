import { generateConfig, generateAnotherConfig } from "./index";

// test("generateConfig 测试配置", () => {
//   expect(generateConfig()).toMatchSnapshot({
//     time: expect.any(Date), // 排除时间格式测试
//   });
// });
// test("generateAnotherConfig 测试配置", () => {
//   expect(generateAnotherConfig()).toMatchSnapshot({
//     time: expect.any(Date),
//   });
// });

test("generateConfig 测试配置", () => {
  expect(generateConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "port": 8080,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});
