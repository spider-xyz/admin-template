var Lock = function () {

    return {
        //main function to initiate the module
        init: function () {

             $.backstretch([
		        "./assetspages/media/bg/1.jpg",
    		    "./assetspages/media/bg/2.jpg",
    		    "./assetspages/media/bg/3.jpg",
    		    "./assetspages/media/bg/4.jpg"
		        ], {
		          fade: 1000,
		          duration: 8000
		      });
        }

    };

}();

jQuery(document).ready(function() {
    Lock.init();
});
