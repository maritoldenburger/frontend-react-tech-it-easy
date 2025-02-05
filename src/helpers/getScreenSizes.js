function getScreenSize(screenSizeArray) {

    let screenSize = '';

    for (let i = 0; i < screenSizeArray.length; i++) {
        const sizeInches = screenSizeArray[i];
        const sizeCms = Math.round(screenSizeArray[i] * 2.54);

        screenSize = screenSize + `${sizeInches} inch (${sizeCms} cm)`;

        if (i < screenSizeArray.length - 1) {
            screenSize = `${screenSize} | `;
        }
    }
    return screenSize;
}

export default getScreenSize;






