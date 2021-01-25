TypeScript React Table "Material-UI" Simple Data Grid Demo
============================================

使用 React-table + Material-UI 自定义一个简单的DataGrid

https://react-table.tanstack.com/docs/examples/filtering

如果想使用Material-UI来定义实现一个data grid，目前来说并没有太多好的选择：

1. Material-UI自己开发的data grid功能比较简单，并且很多功能都是收费版
2. [mui-datatables](https://github.com/gregnb/mui-datatables) 设计存在缺陷，没法在cell里拿到row对应的原始对象，很不方便
3. Material-UI的Table提供了很多基本功能，但是想把它们组合在一起，还是比较麻烦，需要手动实现很多逻辑：
   比如自己需要自己实现多选：https://material-ui.com/zh/components/tables/#sorting-amp-selecting
4. 还有一些我忘了，要么定制性不强，要么样式不好看，要么用的不是Material-UI

最后我打算尝试使用`React-table`这种headless的方式，不好的体验如下：

1. 类型方面还是存在问题：需要自己提供一个合并类型的文件；某些类型不太准；某些地方无法推断，是any；某些类型定义看起来非常复杂
2. 代码中有很多噪音，比如在很多元素上设置properties
3. 学习成本很高

但是，如果能接受这些，它还真是一个很棒的库：

1. 不挑UI，可以与各种库结合
2. 功能非常强，hooks plugin非常丰富，使用起来也没想像中难
3. 定制性非常强
4. 免费

可以自己定制出来一些简单的data grid，虽然麻烦一次，但是多数情况下够用，也很好，且未来不需要担心扩展性。

资源：

1. 官方快速示例：https://react-table.tanstack.com/docs/examples/filtering
1. 复杂的typescript示例： https://github.com/ggascoigne/react-table-example

```
npm install
npm run demo
```

