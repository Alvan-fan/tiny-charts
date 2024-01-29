import myAnimation from './myAnimation';

class MyCharts {
  constructor(defaultParam) {
    this._canvasParDom = document.querySelector(defaultParam.select);
    this.containerWidth = this._canvasParDom.clientWidth;
    this.containerHeight = this._canvasParDom.clientHeight;
    this._canvas = document.createElement('canvas');
    this.defaultConfig = {
      styles: {
        borderColor: '#6b9bb8',
        lineColor: '#9ec8da',
        pointColor: '#41627c',
      },
      data: [],
      x: 40,
      padding: 20,
      fontSize: '16px',
      wd: this.containerWidth * defaultParam.ratio,
      ht: this.containerHeight * defaultParam.ratio,
      lineWidth: 2,
      hisColor: [
        '#7b8c7c',
        '#5c968a',
        '#576d93',
        '#a0d878',
        '#337d56',
        '#c1d0ae',
        '#93b469',
        '#bda29a',
      ],
    };

    // 扩展或者覆盖配置
    this.defaultParam = { ...this.defaultConfig, ...defaultParam };

    // 上下文绘制环境
    this.ctx = this._canvas.getContext('2d');

    // 缩放画布大小
    this._canvas.width = this.containerWidth * this.defaultParam.ratio;
    this._canvas.height = this.containerHeight * this.defaultParam.ratio;

    // 添加至div 当中
    this._canvasParDom.appendChild(this._canvas);

    // 设置合适的画布宽度
    this.defaultParam.wid = this._canvas.width - 20;

    this.init();
  }

  init() {
    switch (this.defaultParam.type) {
      case 'cirque':
        console.log('绘制圆环');
        myAnimation.call(this, {
          // percent: this.circleConfig.target,
          // render: (current) => {
          //   Cirque.call(this, current / 100);
          // },
        });
        break;
      default:
        console.log('无此功能的绘制');
    }
  }
}

export default MyCharts;
