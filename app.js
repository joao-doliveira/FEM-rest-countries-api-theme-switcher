// functions

const newElement = (el, cl) => {
    let newEl = document.createElement(el);
    newEl.classList.add(cl);
    return newEl
}

const showDeck = () => {
    display.classList.add('deck')
    display.classList.remove('details')
}

const showDetails = () => {
    display.classList.add('details')
    display.classList.remove('deck')
}

const getDetail = (target) => {
    for(let i = 0; i < target.length; i++){
        target[i].addEventListener('click', () => {
            history.pushState({name: `detail`}, null, `#${target[i].id}`)
            
            display.innerHTML = [];
            showDetails()
            fetch(`https://restcountries.eu/rest/v2/alpha/${target[i].id}`)
            .then(res => res.json())
            .then(data => detailsBuilder(data))
        })
    }
}

const cardsHolder =  () => {
    allCards = document.querySelectorAll('.card')
    getDetail(allCards)
}

const cardBuilder = (data) => {
    for(item of data){
        let dataCard = newElement('div', 'card')
        let dataCardFlag = newElement('div', 'card__flag')
        let dataDataFlag = newElement('img', 'dataFlag')
        let dataCardInfo = newElement('div', 'card__info')
        let dataCardTitle = newElement('h2', 'card__title')
        let dataCardList = newElement('ul', 'card__list')
        let dataCardPop = newElement('li', 'card__item')
        let dataCardPopSpan = newElement('span', 'card__data')
        let dataCardReg = newElement('li', 'card__item')
        let dataCardRegSpan = newElement('span', 'card__data')
        let dataCardCap = newElement('li', 'card__item')
        let dataCardCapSpan = newElement('span', 'card__data')

        display.append(dataCard)
        dataCard.id = item.alpha3Code

        dataCard.append(dataCardFlag)
        dataCardFlag.append(dataDataFlag)
        dataDataFlag.setAttribute('src', item.flag)

        dataCard.append(dataCardInfo)
        dataCardInfo.append(dataCardTitle)
        dataCardTitle.textContent = item.name

        dataCardInfo.append(dataCardList)
        
        dataCardList.append(dataCardPop)
        dataCardPop.textContent = 'Population: '
        dataCardPop.append(dataCardPopSpan)
        dataCardPopSpan.textContent = item.population

        dataCardList.append(dataCardReg)
        dataCardReg.textContent = 'Region: '
        dataCardReg.append(dataCardRegSpan)
        dataCardRegSpan.textContent = item.region

        dataCardList.append(dataCardCap)
        dataCardCap.textContent = 'Capital: '
        dataCardCap.append(dataCardCapSpan)
        dataCardCapSpan.textContent = item.capital
    }

    cardsHolder();
}

const detailsBuilder = (detailsData) => {
    let dataBack = newElement('section', 'back')
    let dataBackButton = newElement('div', 'back__button')
    let dataBackButtonA = newElement('a', 'back__button__a')
    let dataIcon = newElement('i', 'fas')
    let dataContent = newElement('section', 'content')
    let dataContentFlag = newElement('div', 'content__flag')
    let dataContentDataFlag = newElement('img', 'content__dataFlag')
    let dataContentText = newElement('div', 'content__text')
    let dataContentTitle = newElement('h2', 'content__title')
    let dataContentWrap = newElement('div', 'content__wrap')
    let dataListOne = newElement('ul', 'content__list')
    let dataListNative = newElement('li', 'content__item')
    let dataListNativeSpan = newElement('span', 'content__data')
    let dataListPop = newElement('li', 'content__item')
    let dataListPopSpan = newElement('span', 'content__data')
    let dataListReg = newElement('li', 'content__item')
    let dataListRegSpan = newElement('span', 'content__data')
    let dataListSub = newElement('li', 'content__item')
    let dataListSubSpan = newElement('span', 'content__data')
    let dataListCap = newElement('li', 'content__item')
    let dataListCapSpan = newElement('span', 'content__data')
    let dataListTwo = newElement('ul', 'content__list')
    let dataListTop = newElement('li', 'content__item')
    let dataListTopSpan = newElement('span', 'content__data')
    let dataListCur = newElement('li', 'content__item')
    let dataListCurSpan = newElement('span', 'content__data')
    let dataListLan = newElement('li', 'content__item')
    let dataListLanSpan = newElement('span', 'content__data')
    let dataContentBorder = newElement('div', 'content__border')
    let dataBorderTitle = newElement('h3', 'border__title')
    let dataBorderLinks = newElement('div', 'border__links')
    

    display.append(dataBack)
    dataBack.append(dataBackButton)
    dataBackButton.append(dataBackButtonA)
    dataBackButtonA.setAttribute('href', 'index.html')

    dataBackButtonA.append(dataIcon, 'Back')
    dataIcon.classList.add('fa-long-arrow-alt-left')

    display.append(dataContent)
    dataContent.append(dataContentFlag)
    dataContentFlag.append(dataContentDataFlag)
    dataContentDataFlag.setAttribute('src', detailsData.flag)

    dataContent.append(dataContentText)
    dataContentText.append(dataContentTitle)
    dataContentTitle.textContent = detailsData.name

    dataContentText.append(dataContentWrap)
    dataContentWrap.append(dataListOne)
    dataListOne.append(dataListNative)
    itemBuilder(dataListNative, 'Native Name: ', dataListNativeSpan, detailsData.nativeName)
    dataListOne.append(dataListPop)
    itemBuilder(dataListPop, 'Population: ', dataListPopSpan, detailsData.population)
    dataListOne.append(dataListReg)
    itemBuilder(dataListReg, 'Region: ', dataListRegSpan, detailsData.region)
    dataListOne.append(dataListSub)
    itemBuilder(dataListSub, 'Sub Region: ', dataListSubSpan, detailsData.subregion)
    dataListOne.append(dataListCap)
    itemBuilder(dataListCap, 'Capital: ', dataListCapSpan, detailsData.capital)

    dataContentWrap.append(dataListTwo)
    dataListTwo.append(dataListTop)
    itemBuilder(dataListTop, 'Top Level Domain: ', dataListTopSpan, detailsData.topLevelDomain)
    dataListTwo.append(dataListCur)
    itemBuilder(dataListCur, 'Currencies: ', dataListCurSpan, detailsData.currencies[0].name)
    dataListTwo.append(dataListLan)
    itemBuilder(dataListLan, 'Languages: ', dataListLanSpan, detailsData.languages[0].name)

    dataContentText.append(dataContentBorder)
    dataContentBorder.append(dataBorderTitle)
    dataBorderTitle.textContent = 'Border Countries:'

    dataContentBorder.append(dataBorderLinks)
    borderBuilder(dataBorderLinks, 'div', 'links', detailsData.borders)
}

const itemBuilder = (item, text, subitem, subtext) => {
    item.textContent = text
    item.append(subitem)
    subitem.textContent = subtext
}

const borderBuilder = (parent, el, cl, iterable) => {

    for (index of iterable){
        let child = newElement(el, cl)
        parent.append(child)
        fetch(`https://restcountries.eu/rest/v2/alpha/${index}`)
        .then(res => res.json())
        .then((json) => {
            child.textContent = json.name
            child.addEventListener('click', () => {
                display.innerHTML = [];
                detailsBuilder(json)
            })
        }) 
    }
}


// opening page

let allCards = [];
const headerTitle = document.querySelector('.header__title')
const display  = document.querySelector('#display')

fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then((openingData) => cardBuilder(openingData))

cardsHolder()

// filter by region

const regionSelect = document.querySelector('.regionSelect');
const regionList = document.querySelector('.regionList');
const arrow = document.querySelector('#arrow');
const regionItems = document.querySelectorAll('.regionItem')

regionSelect.addEventListener('click', () => {
    regionList.classList.toggle('hidden')
    arrow.classList.toggle('toggleArrow')
})

for (let i = 0; i < regionItems.length; i++) {
    regionItems[i].addEventListener('click', () => {
        display.innerHTML = [];
        showDeck()
        console.log(`clicked! ${regionItems[i].id}`)
        fetch(`https://restcountries.eu/rest/v2/region/${regionItems[i].id}`)
        .then(res => res.json())
        .then(searchData => cardBuilder(searchData))
        cardsHolder();
        regionList.classList.toggle('hidden')
    })
}

// search by input

const searchForm = document.querySelector('#searchForm');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    display.innerHTML = [];
    console.log('submitted!');
    const searchTerm = searchForm.elements.query.value;
    fetch(`https://restcountries.eu/rest/v2/name/${searchTerm}`)
    .then(res => res.json())
    .then(searchData => cardBuilder(searchData))

    cardsHolder();
})

// details

getDetail(allCards)





