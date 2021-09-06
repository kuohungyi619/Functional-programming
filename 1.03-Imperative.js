var Window = (tabs) =>{
    this.tabs = tabs; //Keep a record of the array inside the object
}

// Join two windows into one window
Window.prototype.join = (otherWindow) => {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
}

// When you open a new tab at the end
Window.prototype.tabOpen = (tab) => {
    this.tabs.push('new tab'); // Let's open a new tab for now
    return this;
};

// When you close a tab
Window.prototype.tabClose = (index) => {


    var tabsBeforeIndex = this.tabs.splice(0, index);
    var tabsAfterIndex = this.tabs.splice(1);
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex)
    return this
};

// Let's create three browser windows
var worWindow = new Window([
    'GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp'
]) // Your mailbox, drive, and other work sites
var socialWindow = new Window([
    'Fb','Gitter', 'Reddit', 'Twitter', 'Medium'
]);
var videoWindow = new Window ([
    'Netflix', 'Youtube', 'Vimeo', 'Vine'
])

// Now perform the tab opening, closing, and other operations
var finalTabs= socialWindow.tabOpen().join(videoWindow.tabClose(2)) // Close third tab in video window and join
.join(worWindow.tabClose(1).tabOpen());
console.log(finalTabs.tab)