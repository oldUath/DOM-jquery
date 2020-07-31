const api = jQuery('.test')
//添加类名
api.addClass('red').addClass('blue')//链式操作

//查找
const x1 = jQuery('.test1')
x1.find('.child')
  .addClass('black')
  .addClass('pink')
  .end()
  .addClass('ppp')
x1.each((div) => { console.log(div) })

api.parent().print()
x1.children().print()

$('.test').addClass('111')