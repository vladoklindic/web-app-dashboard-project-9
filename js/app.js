// =========== notifications ==================

const notifications = document.getElementById('notifications');
const notificationsArray = ['Some random notification', 'Some random notification', 'Some random notification']
let count = notificationsArray.length;
const counter = document.getElementById('notifications-counter');
counter.innerHTML = count;
const notificationsList = document.getElementById('notifications-list');

for(let i=0; i<notificationsArray.length; i++){
		let notification = document.createElement('li');
		notification.className = 'notification';
		notification.innerHTML = notificationsArray[i];
		notificationsList.appendChild(notification);
		notificationsList.className = 'noDisplay';
	}

notifications.addEventListener('click', (event) => {
	event.stopPropagation();
	counter.style.display = 'none';
	notificationsList.style.display = 'block';
});


document.body.addEventListener('click', (event) => {
	const clicked = event.target;
	if(clicked){
		notificationsList.style.display = 'none';
	}
});


//========== scroll navbar function ==========
function scrollNav() {
  $('nav a').on('click', function(e){  
    //Toggle Class
    $(".nav-active").removeClass("nav-active");      
    $(this).parent('li').addClass("nav-active");

    //save to local storage
    let current = $(this);
    console.log(current);
    console.log(JSON.stringify(current));
    sessionStorage.setItem('activeTab', $('nav a').index(current));

    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 120
    }, 600);
    return false;
  });
}
let activeTab = sessionStorage.getItem('activeTab');
const activeDash = $("#nav-dashboard");

//if sessionStorage exists, add class to active link
if (activeTab) {
	activeTabEL = $('nav a').parent('li').eq(parseInt(activeTab));
	//remove active class from first nav link on reload
	activeDash.removeClass('nav-active');
	activeTabEL.addClass('nav-active');
	console.log(activeTabEL);
}
scrollNav();


//bar chart - daily traffic
var ctx = document.getElementById('bar-chart');
var barChart = new Chart(ctx, {
		type: 'bar',
		data: {
			labels: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
			datasets: [{
				label: 'Daily',
				data: [75, 100, 175, 125, 225, 200, 100],
				backgroundColor : 'rgb(149, 86, 160)',
			}]

		},
		options:{
	            scales: {
	                yAxes : [{
	                    ticks : {
	                        max: 250,
			                min: 0,
			                stepSize: 50
	                    }
	                }]
	            },
	            legend: {
	            	display: false,
			            labels: {
			                fontColor: 'rgb(255, 99, 132)'
			            }
	        	}
	        }
	});	

//doughnut chart - mobile traffic
var ctx = document.getElementById('doughnut-chart');
var doughnutChart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: ['Phones', 'Tablets', 'Desktops'],
		datasets: [{
			label: 'Mobile',
			data: [15, 20, 75],
			backgroundColor: ['#6aabba', '#79d887', '#9556a0']		
		}],
	},
	options:{
    	legend: {
        	display: true,
        	position: 'right',
        	labels: {
        		boxWidth: 14,
        		padding: 15,
        		fontSize: 15	
        	}
    	}
    }
});

//Close alert box
	const closeAlert = document.getElementById("close-alert");
	closeAlert.addEventListener('click', (event) => {
		const clicked = event.target;
		if(clicked) {
			closeAlert.parentElement.style.display = "none";
		} 
	});

//Save setting using local storage
function save(){
	    const emailNotifications = document.getElementById('email-onoffswitch');
	    localStorage.setItem('email-onoffswitch', emailNotifications.checked);
	    const publicProfile = document.getElementById('profile-onoffswitch');
	    localStorage.setItem('profile-onoffswitch', publicProfile.checked);
	    const timezoneValue = document.getElementById("timezone").value;
        localStorage.setItem("timezoneValue", timezoneValue);
}

	if(localStorage.length > 0){
		const emailPreference = JSON.parse(localStorage.getItem('email-onoffswitch'));
	    document.getElementById('email-onoffswitch').checked = emailPreference;
	    const profilePreference = JSON.parse(localStorage.getItem('profile-onoffswitch'));
	    document.getElementById('profile-onoffswitch').checked = profilePreference;
	    const myTimezone = localStorage.getItem("timezoneValue");
	    document.getElementById("timezone").value = myTimezone;
	}  
    
function cancel() {
    localStorage.clear()
    location.reload();
}

