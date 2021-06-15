import _ from 'underscore'

const select_ele = ele => (
  document.querySelector(ele) &&
  document.querySelector(ele).addEventListener('click', () => {
    document.querySelector('body').classList.toggle('open-drawer')
    document.querySelector('.burger-wrap').classList.toggle('open-wrap')
  })
)

const NavSticky = () => {
  let target = document.querySelector('.nav')
  let sticky = target?.offsetTop
  if (window.pageYOffset > sticky) {
    target?.classList.add('sticky')
  } else {
    target?.classList.remove('sticky')
  }
}

const openDrawer = () => {
  let sp_btn = document.querySelectorAll('.sp-drawer')
  select_ele('.menu-btn')
  select_ele('.burger-wrap')

  if (sp_btn) {
    for (let i = 0; i < sp_btn.length; i++) {
      sp_btn[i]?.addEventListener('click', () => {
        document.querySelector('body').classList.remove('open-drawer')
      })
    }
  }
}

const closeDrawer = () => {
  if (document.querySelector('.open-drawer')) {
    document.querySelector('body').classList.remove('open-drawer')
    document.querySelector('.burger-wrap')?.classList.remove('open-wrap')
  }
}

const addCheckDefault = (data, key) => {
  let tmp = data.map(x => ({ ...x, [key]: false }))
  return tmp
}

const radioCheckChange = (type, checkListItem, data) => {
  let tmp = checkListItem?.map(x => {
    if (x[type] === data) {
      x.check = true
    } else {
      x.check = false
    }
    return x
  })
  return tmp
}

const checkChange = (type, checkListItem, data) => {
  const changedCheckbox = checkListItem.find(x => x[type] === data)
  changedCheckbox.check = !changedCheckbox.check
  return checkListItem
}

const getCheckId = (type, data) => {
  let temp = []
  data.map((x) => x.check === true && temp.push(x[type]))
  return temp
}

const getUiTranslate = (dict, entry, lang = 'en') => {
  return dict?.length > 0 && _.find(dict, item => _.keys(item)[0] === entry)?.[entry][lang === 'en' ? 'english' : 'unicode']
}

const mm2en_num = num => {
  let tmp = { '၀': '0', '၁': 1, '၂': 2, '၃': 3, '၄': 4, '၅': 5, '၆': 6, '၇': 7, '၈': 8, '၉': 9 }
  return num.replace(/([၀-၉])/g, (s, key) => tmp[key] || s)
}

const moneyFormat = (amount, lang = 'en') => {
  let eng_money = Number(amount).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")
  let tmp = { '0': '၀', 1: '၁', 2: '၂', 3: '၃', 4: '၄', 5: '၅', 6: '၆', 7: '၇', 8: '၈', 9: '၉' }
  let mm_money = eng_money.replace(/([0-9])/g, (s, key) => tmp[key] || s)
  return lang === 'en' ? eng_money : mm_money
}

export {
  NavSticky,
  openDrawer,
  closeDrawer,
  addCheckDefault,
  radioCheckChange,
  checkChange,
  getCheckId,
  getUiTranslate,
  mm2en_num,
  moneyFormat
}