/*
* Creating time: 2017/3/24  city: hangzhou Creater: zhouyang
* 瀑布流插件
*/
//首先获取你需要定义瀑布流元素的高度
var arrayheight = [
      {
        h: 60
      },
      {
        h: 160
      },
      {
        h: 260
      },
      {
        h: 170
      },
      {
        h: 120
      },
      {
        h: 60
      },
      {
        h: 373
      },
      {
        h: 320
      },
      {
        h: 361
      },
      {
        h: 363
      },
      {
        h: 130
      },
      {
        h: 363
      },
      {
        h: 130
      },
      {
        h: 363
      },
      {
        h: 130
      },
      {
        h: 363
      },
      {
        h: 130
      },
      {
        h: 130
      },
      {
        h: 363
      },
      {
        h: 130
      },
      {
        h: 363
      },
      {
        h: 130
      },
      {
        h: 130
      },
      {
        h: 363
      },
      {
        h: 130
      },
      {
        h: 60
      },
      {
        h: 160
      },
      {
        h: 260
      },
      {
        h: 170
      },
      {
        h: 120
      },
      {
        h: 60
      },
      {
        h: 373
      },
      {
        h: 320
      },
      {
        h: 361
      },
      {
        h: 363
      },
      {
        h: 130
      },
      {
        h: 363
      },
      {
        h: 130
      },
      {
        h: 363
      },
      {
        h: 130
      },
      {
        h: 363
      },
      {
        h: 130
      },
      {
        h: 130
      },
      {
        h: 363
      },
      {
        h: 130
      },
      {
        h: 363
      },
      {
        h: 130
      },
      {
        h: 130
      },
      {
        h: 363
      },
      {
        h: 130
      },
]
// style1： 按照下标顺序排版
!function(_) {
    // 传入格式
    var matter = {
      // 定义宽度
      w: 100,
      // 定义列数
      row: 5,
      // 传入已获取高度池
      maps: arrayheight
    }
    // 传入设定值 初始函数 返回计算完毕的平面坐标数组
    var core = new _.flow(matter)
    // statr 自定义展现效果
    var arrs = [],styles
    core.forEach(function(item, index){
      styles = ['position:absolute;', 'left:'+item.left,'px;', 'top:'+(item.top),'px;', 'width:'+matter.w,'px;', 'height:'+(matter.maps[index].h), 'px;'].join('')
      styles2 = ['position:absolute;', 'transform:translate3d(', item.left,'px,', item.top, 'px,0);','width:'+matter.w, 'px;','height:'+(matter.maps[index].h - 15),'px;'].join('')
      html = [
        '<div class="selector grid-item" style="',styles2,'"><div style="height:'+matter.maps[index].h,'px;"><i>',
          index,
        '</i></div></div>'
      ].join('')
      arrs.push(html)
    })
    document.querySelector('.content').innerHTML = arrs.join('')
    // end
}(this)
// style2： 挤满式排版，哪来有缝隙就往哪里钻
// github地址 https://github.com/yunstv/bricks.js-flow
!function() {
    "use strict";
    var t = function(t) {
        return Array.prototype.slice.call(document.querySelectorAll(t))
    }
      , e = function(t, e) {
        return Math.floor(Math.random() * (e - t + 1) + t)
    }
      , n = function(t) {
        var e = Date.now();
        return t(),
        Date.now() - e
    }
      , r = function(t, e) {
        for (var n = 0; n < t; n++)
            e(n)
    }
    , a = {
        container: "[data-grid]",
        packed: "data-packed",
        sizes: [{
            columns: 2,
            gutter: 10
        }, {
            mq: "600px",
            columns: 3,
            gutter: 10
        }, {
            mq: "800px",
            columns: 4,
            gutter: 10
        }, {
            mq: "1000px",
            columns: 5,
            gutter: 10
        }, {
            mq: "1130px",
            columns: 6,
            gutter: 12
        }]
    }
      , c = Bricks(a).resize(!0)
      , arrayHeight = arrayheight
      , o = function() {
        var t = document.querySelector("[data-grid]")
          , u = parseInt(45)
          , i = document.createDocumentFragment();
        r(u, function(n) {
            var t = document.createElement("div");
            t.classList.add("grid-item"),
            t.style.height = arrayHeight[n].h + "px",
            t.innHTML = n,
            i.appendChild(t)
            t.innerHTML = n
        }),
        t.innerHTML = "",
        t.appendChild(i)
        c.pack()
    }
      , u = function() {
        t("[data-reload]").forEach(function(t) {
            t.addEventListener("click", function(t) {
                t.preventDefault(),
                o()
            })
        }),
        o()
    };
    document.addEventListener("DOMContentLoaded", function(t) {
        return u()
    })
}();
