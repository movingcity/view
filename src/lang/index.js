import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Cookies from 'js-cookie'
import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang导入Element的语言包 英文
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN' // element-ui lang g导入Element的语言包 中文
import locale from 'element-ui/lib/locale'
import enLocale from './en' // 导入该项目中用到的英文语言包
import zhLocale from './zh' // 导入该项目中用到的中文语言包
Vue.use(VueI18n)
const messages = {
  en: {
    ...enLocale,
    ...elementEnLocale
  },
  zh: {
    ...zhLocale,
    ...elementZhLocale
  }
}

const i18n = new VueI18n({
  locale: Cookies.get('language') || 'zh', // 设置语种
  messages, // 设置全局当地语言包,
  fallbackLocale: 'zh',
  numberFormats: {
    // 设置 数字本地化
    en: {
      currency: {
        // 添加 $
        style: 'currency',
        currency: 'USD'
      }
    },
    zh: {
      currency: {
        // 添加 ￥
        style: 'currency',
        currency: 'JPY',
        currencyDisplay: 'symbol'
      }
    }
  },
  dateTimeFormats: {
    // 设置 日期时间本地化
    en: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric'
      }
    },
    zh: {
      short: {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      },
      long: {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'short',
        hour: 'numeric',
        minute: 'numeric'
      }
    }
  }
})
const init = Vue.prototype._init
Vue.prototype._init = function (options) {
  init.call(this, {
    i18n,
    ...options
  })
}
locale.i18n((key, value) => i18n.t(key, value))

export default i18n
