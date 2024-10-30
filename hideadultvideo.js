/*
Just draw a border round the document.body.
*/
async function loadTextFile(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`0xERR: HTTP error! status: ${response.status}`);
        }
        const text = await response.text();
        const array = text.split('\n').map(line => line.trim()).filter(line => line);
        return array;
    } catch (error) {
        console.error('0xERR: Load File Error: ', error);
    }
}

async function getData(url) {
    const storedData = await browser.storage.local.get('dataArray');

    if (storedData.dataArray) {
        return storedData.dataArray;
    } else {
        const dataArray = await loadTextFile(url);
        await browser.storage.local.set({ dataArray });
        return dataArray;
    } 

}

async function checkUrlInArray(dataArray) {
    const currentUrl = window.location.href;
	const domain = new URL(currentUrl).hostname;
	const domain_ = domain.startsWith('www.') ? domain.slice(4) : domain;
	const matches = dataArray
	.map(item=>item.trim())
	.filter(item => domain_ === item);
    if (matches.length > 0) {
		blockDisplay();
		return(true);
    } else {
		return(false);
    }
}
async function blockDisplay(){
	document.body.style.border = "5px solid red";
	var hdv1 = document.createElement("div");
	hdv1.style.width="100%"; 
	hdv1.style.height="100%";
	hdv1.style.position="fixed"
	hdv1.style.top="0";
	hdv1.style.left="0";
	hdv1.style.zIndex="999999999";
	hdv1.style.display="block";
	hdv1.style.backgroundColor="blue";
	var text2=document.createElement("p");
	text2.style.color="yellow";
	text2.style.fontSize="24";
	text2.style.fontWeight="bold" 
	text2.textContent="Error 403: Forbidden for you, baby!";
	text2.style.top="45%" 
	text2.style.left="45%" 
	text2.style.position="fixed" 
	hdv1.append(text2);
	document.body.append(hdv1);
}


const url = 'https://raw.githubusercontent.com/BlackChaose/hide_adultVideo/refs/heads/main/blacklist.lst';
getData(url).then(dataArray => {
	checkUrlInArray(dataArray);
});



