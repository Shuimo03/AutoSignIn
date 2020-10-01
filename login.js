const find  = function(selector){
    return document.querySelector(selector);
};

const sendMessage = chrome.runtime.sendMessage;
const onMessage = chrome.runtime.onMessage;

const studentID = find("input[name= 'DDDDD']");
const password = find("input[name = 'upass']");
const button = find("input[name = '0MKKey']");

const Page = {


	bindEvent: function() {
		onMessage.addListener(function(req, sender, sendResponse) {
            studentID.value = req.account;
            password.value = req.password;
            button.click();
		});
	},

	init: function() {
		this.bindEvent();
	}
};

Page.init();