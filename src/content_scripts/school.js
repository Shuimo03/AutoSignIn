console.log('autoLogin：insert script => school.js');
const find  = function(selector){
    return document.querySelector(selector);
};

const sendMessage = chrome.runtime.sendMessage;
const onMessage = chrome.runtime.onMessage;

const studentID = document.querySelectorAll('.edit_lobo_cell')[1];
const password = document.querySelectorAll('.edit_lobo_cell')[2];
const button = document.querySelectorAll('.edit_lobo_cell')[0];
console.log(button);

const Page = {
	bindEvent: function() {
		onMessage.addListener(function(req, sender, sendResponse) {
            if(req.action === 'FILL_THE_BLANK'){
                console.log("Fill the login information of school...")
                studentID.value = req.account;
                password.value = req.password;
                button.click();
                sendResponse('Success.')
            }
		});
	},

	init: function() {
		this.bindEvent();
	}
};

Page.init();