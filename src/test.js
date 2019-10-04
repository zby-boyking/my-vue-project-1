//这是Node中向外暴露成员的形式
//module.exports = {}

/*
  再ES6语法中，也通过规范的形式，规定ES6中如何导入和导出模块
  ES6中导入模块，使用impotr模块名称 from “模块标识符”  import “表示路径”
  再ES6中，使用export default 和 export 来暴露成员
 */

/*
  再Node中使用 var 名称 = require（“模块名称”）
  module.exports和 export暴露成员
 */
var info ={
  name: '嬴政',
  gender: '男'
};
export default info;

/*
  注意：export default 向外暴露的成员可以使用任意的变量接收
  注意： 在一个模块中，export default只允许向外暴露一次
  注意： 在一个模块中，可以同时使用export default 和 export 向外暴露成员
 */
export var title = 'hello Vuejs';
export var content = 'hello Nodejs';
/*
  注意：使用export向外暴露的成员，只能使用{ }的形式来接收，这种形式，叫做【按需导出】
  注意： export可以向外暴露多个成员，同时，import再接收的时候可以有选择的接收，
        使用export导出的成员，必须严格按照导出时的名称，来使用{}里面的东西，按需接收
        使用export导出的成员，如果像换名称，可以使用as来去别名
 */