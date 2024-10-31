browser.runtime.onStartup.addListener(() => {
    browser.storage.local.clear().then(() => {
        console.log("extensions local storage was cleared!");
    }).catch((error) => { console.error("LocalStorage cleaning ERROR: ", error);
    });
});

