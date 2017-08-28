//food.js
Page({
  data: {
    n:0,
    btnText: 'Suprise me!',
    food:[' ','午餐时间','咱家饺子','韩式简餐','品良馆','鸡公煲','麻辣烫','猫婆小面','西北拉面','喵鱼','包子铺','不吃减肥','坛肉饭','米线','公司食堂'],
    test:['']
  },
  //事件处理函数
  onLoad: function () {
    console.log('food')
  },
  btnClick:function(){
    this.setData({btnText:"Try again~"}),
    this.setData({n:Math.ceil(Math.random()*14)})
  },
  request:function(){
    
  }
})
