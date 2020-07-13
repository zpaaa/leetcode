    /** 
     * 罗旭寓2020 饿了么面试题 电面 + 视面
    */
    // 1)在一个足够宽div中，有若干个子元素div，如何实现让他们垂直居中


    // 2)使用过哪些伪元素，哪些伪类，伪元素选择器和伪类选择器分别是几个冒号


    // 3)实现一个String.prototype.trim的polyfill，最好正则和不使用正则各一种
    // const myTrim = (str) => {
    //   if (str[0] !== ' ' && str[str.length - 1] !== ' ') return str
    //   if (str[0] === ' ') str = str.substr(1)
    //   if (str[str.length -1] === ' ') str = str.substr(0, str.length -1)
    //   return myTrim(str)
    // }

    const myTrim = (str) => {
      // return str.replace(/(^\s+)|(\s+$)/g, '')
      // \xA0 => &nbsp \uFEFF =>其他文件格式转utf8产生
      return str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''); 
    }

    const res = myTrim('  v  ')
    console.log(res, res.length)


    // 4)fetch这个API有没有用过，跟XHR区别是什么，如果使用fetch要加上超时怎么处理，Promise.allSettled是什么用处


    // 5)有一个数组，长度为n，里面的元素全是1~n中的正整数，里面有若干个重复的项，实现算法找出从左至右第一个重复的数字，但不可以声明额外的对象
    const firstRepeat = (arr) => {
      for(let item of arr) {
        if(arr.indexOf(item) !== arr.lastIndexOf(item)) return item
      }
      return null
    }
    // const arr = [1,1,2,4,3,4,5,5]
    // const res = firstRepeat(arr)
    // console.log(res)


    // 6)用正则表达式实现数字字符串的千分位化
    /* 即：'1234567'.replace(XXXXXX) === '1,234,567'; */
    console.log('12345678910'.replace(/(?!^)(?=(\d{3})+\b)/g, ','))
    
    // 7)讲讲webpack中loader和plugin用处，原理知道多少，有没有自己实现过loader/plugin


    // 8)有没有实现过断点续传，讲讲思路，讲讲上传过程中可能涉及到的http状态码


    // 9)分别手写一个稳定排序及不稳定排序，他们的时间复杂度分别是多少？
    // 稳定排序 不会影响之前相等数组的顺序
    const sort = function (arr) {
      for(let i =0;i< arr.length; i++) {
        for(let j = 0; j < arr.length-i; j++) {
          if (arr[j] > arr[j+1]) {  // 这边加个等号好像就是不稳定排序
            const prev = arr[j+1]
            arr[j+1] = arr[j]
            arr[j] = prev
          }
        }
      }
      console.log(arr)
    }
    const arr = [1,2,3,43,21,45,6,1]
    // sort(arr)

    // 10)Vue源码是如何实现观察者模式的？
    /* 讲讲Observer/Watcher/Dep这些内部类的逻辑关系 */


    // 11)聊聊BFC，哪些方式会创建BFC
    /* NND，这题答得稀烂 */


    // 12)当同一个父类的两个元素有重叠，如何判断他们谁会展示在更上层


    // 13)用ES5实现以下ES6代码实现的功能
    // class A {
    //   constructor(name) {
    //       this.name = name;
    //   }
    //   print() {
    //       console.log(this.name);
    //   }
    // }
    // class B extends A {
    //   constructor(name, age) {
    //       super(name);
    //       this.age = age;
    //   }
    // }

    // function A(name) {
    //   this.name = name
    //   this.print = function () {
    //     console.log(this.name)
    //   }
    // }

    // function B(name) {
    //   // console.log(name)
    // }

    // B.prototype = new A()

    // const P = new A('zpa')
    // const C = new B('Gyy')
    // P.print()
    // C.print()