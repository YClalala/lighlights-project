<template>
  <van-popup
    v-model="isShow"
    class="m-calendar"
    :close-on-click-overlay="false"
    round
  >
    <div class="m-calendar-contentWrap">
      <div class="arrowWrap">
        <van-icon 
          class="leftIcon" 
          @click="arrowLeft" 
          name="arrow-left" 
          size="16"
          color="#025CEA"
        />
        <van-icon 
          class="rightIcon" 
          @click="arrowRight" 
          name="arrow" 
          size="16"
          color="#025CEA"
        />
      </div>
      <van-calendar 
        :show-confirm="false" 
        @confirm="onConfirm" 
        :poppable="false" 
        :show-title="false" 
        :show-mark="false"
        :formatter="formatter"
        first-day-of-week="1"
        :default-date="defaultDate"
        :min-date="minDate" 
        :max-date="maxDate"
      />
    </div>
    <div class="m-calendar-buttonWrap">
      <van-button
        text="确定"
        color="#025CEA"
        @click="onSubmit"
      />
    </div>
  </van-popup>
</template>
<script>
// 日历组件 - - - yicui
import dayjs from 'dayjs';

// 最大能够选取的时间日期 当前时间开始计算 后两个月
const MAX_DATE = dayjs().add(2, 'month');
const MIN_DATE = dayjs();

export default {
  name: 'VCalendar',
  props: {
    /** show 是否显示 */
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: false, // 是否展示
      date: new Date(),
      minDate: new Date(),
      maxDate: new Date(),
      defaultDate: new Date()
    };
  },
  watch: {
    show (n, o) {
      if (n !== o) {
        this.isShow = n
      }
    }
  },
  created() {
    this.setRightRange();
  },
  methods: {
    // 样式处理：周六日要变红
    formatter(obj = {}) {
      const num = (new Date(obj.date)).getDay();
      if(num === 0 || num === 6) {
        obj.className = 'rRed';
      }
      return obj;
    },
    // 当前月上一个月
    arrowLeft() {
      if(dayjs(this.defaultDate.getTime()).month() === MIN_DATE.month()){
        return;
      }

      this.defaultDate = new Date(dayjs(this.date.getTime()).subtract(1, 'month').valueOf())
      this.date = this.defaultDate;
      this.setRightRange()
    },
    // 当前月下一个月
    arrowRight() {
      if(dayjs(this.defaultDate.getTime()).month() === MAX_DATE.month()){
        return;
      }

      this.defaultDate = new Date(dayjs(this.date.getTime()).add(1, 'month').valueOf());
      this.date = this.defaultDate;
      this.setRightRange()
    },
    setRightRange(){
      const currentDate = this.date;
      const monthStart = dayjs(currentDate.getTime()).startOf('month');
      const monthEnd = dayjs(currentDate.getTime()).endOf('month');

      // 月和最大日期月相等 需要将结束日期为MAX_DATE 的 day
      if(MAX_DATE.month() === dayjs(currentDate.getTime()).month()){
        this.maxDate = new Date(MAX_DATE.valueOf());
      } else {
        this.maxDate = new Date( monthEnd.valueOf());
      }
     
      if(MIN_DATE.month() === dayjs(currentDate.getTime()).month()){
        this.minDate = new Date(MIN_DATE.valueOf());
      } else {
        this.minDate = new Date(monthStart.valueOf());
      }

      const rightDate = this.clipDate(this.date)
      this.date = rightDate;
      this.defaultDate = rightDate;
    },
    // 防止数据越界
    clipDate(date){
      return new Date(Math.min(Math.max(MIN_DATE.valueOf(), date.getTime()), MAX_DATE.valueOf()));
    },
    // 选中日期
    onConfirm(date) {
      this.date = date;
    },
    // 点提交按钮
    onSubmit() {
      const formatDate = this.timestampToTime();
      this.$emit('close', formatDate);
    },
    // 格式化时间
    timestampToTime() {
      const Y = this.date.getFullYear();
      const M = this.date.getMonth() + 1 < 10 ? `0${this.date.getMonth() + 1}`: this.date.getMonth() + 1;
      const D = this.date.getDate() < 10 ? `0${this.date.getDate()}`: this.date.getDate();

      return `${Y}年${M}月${D}日`;
    }
  }
};
</script>
<style lang="less" scoped>
.m-calendar {
  position: relative;
  height: 300px;
  width: 88%;
  display: flex;
  flex-direction: column;
  align-items: center;
  &.van-popup--center {
    top: 40%;
  }
	/deep/ .van-calendar__header {
		box-shadow: none;
	}
	/deep/ .van-calendar {
		background: transparent;
	}
	/deep/ .van-calendar__weekday {
    color: #6D6D6D;
	}
	/deep/ .van-calendar__header-subtitle {
    color: #0D256E;
	}
	/deep/ .van-calendar__day {
    color: #455997;
    font-weight: 700;
    &.rRed {
      color: #FF0000;
    }
  }
  // 不可选的日期也用灰色
  /deep/ .van-calendar__day--disabled {
    &.rRed {
      color: #B8BDC8;
    }
    color: #B8BDC8;
  }
	/deep/ .van-calendar__selected-day {
    border-radius: 50%;
    background: #488DFF;
	}
	.arrowWrap {
		position: absolute;
  }
  .button {
    position: absolute;
    width: 100%;
    text-align: center;
  }
  &-contentWrap {
    padding: 15px 35px 0;
    display: flex;
    justify-content: center;
  }
  /deep/ .van-calendar__weekdays {
    margin: 8px 0 6px;
  }
  /deep/ .van-calendar__weekday {
    font-size: 12px;
  }
  /deep/ .van-calendar__header-subtitle {
    font-size: 18px;
    height: 25px;
    line-height: 25px;
    font-weight: 700;
  }
  /deep/ .van-calendar__day {
    font-size: 16px;
    height: 24px;
    margin-bottom: 3px;
  }
  /deep/ .van-calendar__selected-day {
    width: 24px;
    height: 24px;
  }
  .arrowWrap {
    width: 150px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  /deep/ .van-button--normal {
    width: 275px;
    height: 40px;
    border-radius: 5px;
    font-size: 18px;
    letter-spacing: 1.8px;
  }
  &-buttonWrap {
    position: absolute;
    bottom: 15px;
  }
}
</style>