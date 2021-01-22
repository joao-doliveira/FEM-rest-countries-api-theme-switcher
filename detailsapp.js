// functions

const newElement = (el, cl) => {
    let newEl = document.createElement(el);
    newEl.classList.add(cl);
    return newEl
}

const detailsBuilder = (detailsData) => {
    let dataBack = newElement('section', 'back')
    let dataBackButton = newElement('div', 'back__button')
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
    

    details.append(dataBack)
    dataBack.append(dataBackButton)
    dataBackButton.append(dataIcon, 'Back')
    dataIcon.classList.add('fa-long-arrow-alt-left')

    details.append(dataContent)
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
        .then((json) => child.textContent = json.name)

        //add event listener to change country
    }
}

fetch('https://restcountries.eu/rest/v2/alpha/bra')
    .then(res => res.json())
    .then((openingData) => detailsBuilder(openingData))

const details = document.querySelector('.details');