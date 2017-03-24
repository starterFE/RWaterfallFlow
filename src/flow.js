(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) : (global.flow = factory());
}(this, (function() { 'use strict';
    var flow = function flow(m) {
        var self = this
            ,w = parseFloat(m.w),h
            ,row = parseInt(m.row > 5 ? 5 : m.row)
            ,maps = m.maps
            ,p = new Array()
            ,o,_i = 0,top,left,oje,ojc
            ,num,array = [],array1 = []
            maps.forEach(function(item, index){
              o = {}
              h = parseFloat(item.h)
              if (index && index % row === 0) {
                left = w * 0
                _i = 0
              } else {
                left = (w * _i)
              }
              _i += 1
              num = index - row
              oje = (num < 0 ? h : array[num])
              ojc = (num < 0) ? h : (num < row ? (function(){
                return array1[num] + h;
              }())
              :
              (function(){
                var isq = index < row*row;
                return isq ? array1[num] : array1[num] + maps[num].h;
              }()))
              ;
              array.push(oje)
              array1.push(ojc)
              top = (num < 0 ? 0 : num < row ?  array[index]
              :
              (function(){
                return array1[index]
              }()))
              ;
              o.top = top
              o.left = left
              p.push(o)
            })
            return p
    }
    return flow;
})))
