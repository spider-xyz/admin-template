var ComingSoon = function () {

    return {
        //main function to initiate the module
        init: function () {
            var austDay = new Date();
            austDay = new Date(austDay.getFullYear() + 1, 1 - 1, 26);
            $('#defaultCountdown').countdown({until: austDay});
            $('#year').text(austDay.getFullYear());

            $.backstretch([
		            "./assetspages/media/bg/1.jpg",
		            "./assetspages/media/bg/2.jpg",
		            "./assetspages/media/bg/3.jpg",
		    		"./assetspages/media/bg/4.jpg"
		        ], {
		        fade: 1000,
		        duration: 10000
		   });
        }

    };

}();

jQuery(document).ready(function() {    
   ComingSoon.init(); 
});
