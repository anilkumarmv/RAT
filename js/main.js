var app = angular.module('rentApp',[]);
app.controller('mainCtrl', function($scope, $rootScope){
	$rootScope.selectedItemsArray = [];
	$scope.readItemsFromCsvFile = function () {
		var txtFile = "E:/project/js/csvfile.txt"
		var file = new File(txtFile);
		file.open("r"); // open file with read access
		var str = "";
		while (!file.eof) {
			// read each line of text
			var dataObj = file.readln().split(',');
				var tarr = [];
				for ( var j = 0; j < dataObj.length; j++) {
					tarr.push(dataObj[j]);
				}
				$rootScope.itemsListObj.push(tarr);
		}
		console.log("qqqqqqqq "
		+$rootScope.itemsListObj[0])
		file.close();
	};
	
});
app.controller('viewsCtrl',function($scope, $rootScope){
	$rootScope.itemsListObj=[];
	$scope.TotalPrice = function(){
		$rootScope.totalAmt = 0;
		$rootScope.amount = 0;
		var amt=0;
		for(var i=0;i <$rootScope.selectedItemsArray.length;i++){
			console.log("loop is "+$rootScope.selectedItemsArray[i].price)
			$rootScope.amount = $rootScope.amount + $rootScope.selectedItemsArray[i].price;
		}
		console.log("select amt "+$rootScope.amount)
	}


	$rootScope.itemsListObj = [
		{
			index:0,
			name:"nameTent",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image4.jpg ../images/image1.jpg ../images/image3.jpg ../images/image2.jpg"
		},
		{
			index:111,
			name:"nameTent1",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg"
		},
                {
                        index:112,
                        name:"nameTent1",
                        price:100,
                        available:true,
                        desc:"Tents are really very use full while trekking",
                        capacity:"5",
                        itemType:"tent",
                        imgUrl:"../images/image2.jpg ../images/image4.jpg ../images/image6.jpg ../images/image8.jpg ../images/image10.jpg ../images/image12.jpg ../images/image14.jpg ../images/image16.jpg ../images/image18.jpg"
                },
                {
                        index:113,
                        name:"nameTent1",
                        price:100,
                        available:true,
                        desc:"Tents are really very use full while trekking",
                        capacity:"5",
                        itemType:"tent",
                        imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg"
                },
                {
                        index:114,
                        name:"nameTent1",
                        price:100,
                        available:true,
                        desc:"Tents are really very use full while trekking",
                        capacity:"5",
                        itemType:"tent",
                        imgUrl:"../images/image2.jpg ../images/image4.jpg ../images/image6.jpg ../images/image8.jpg ../images/image10.jpg ../images/image12.jpg ../images/image14.jpg ../images/image16.jpg ../images/image18.jpg"
                },
                {
                        index:115,
                        name:"nameTent1",
                        price:100,
                        available:true,
                        desc:"Tents are really very use full while trekking",
                        capacity:"5",
                        itemType:"tent",
                        imgUrl:"../images/image1.jpg ../images/image3.jpg ../images/image5.jpg ../images/image7.jpg ../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg"
                },
                {
                        index:116,
                        name:"nameTent1",
                        price:100,
                        available:true,
                        desc:"Tents are really very use full while trekking",
                        capacity:"5",
                        itemType:"tent",
                        imgUrl:"../images/image2.jpg ../images/image4.jpg ../images/image6.jpg ../images/image8.jpg ../images/image10.jpg ../images/image12.jpg ../images/image14.jpg ../images/image16.jpg ../images/image18.jpg"
                },
                {
                        index:117,
                        name:"nameTent1",
                        price:100,
                        available:true,
                        desc:"Tents are really very use full while trekking",
                        capacity:"5",
                        itemType:"tent",
                        imgUrl:"../images/image1.jpg ../images/image3.jpg ../images/image5.jpg ../images/image7.jpg ../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg"
                },
                {
                        index:1,
                        name:"nameTent1",
                        price:100,
                        available:true,
                        desc:"Tents are really very use full while trekking",
                        capacity:"5",
                        itemType:"tent",
                        imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg"
                },
		{
			index:2,
			name:"nameTent3",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
                        imgUrl:"../images/image2.jpg ../images/image4.jpg ../images/image6.jpg ../images/image8.jpg ../images/image10.jpg ../images/image12.jpg ../images/image14.jpg ../images/image16.jpg ../images/image18.jpg"
		},
		{
			index:3,
			name:"nameTent4",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg"
		},
		{
			index:4,
			name:"nameTent5",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
                        imgUrl:"../images/image2.jpg ../images/image4.jpg ../images/image6.jpg ../images/image8.jpg ../images/image10.jpg ../images/image12.jpg ../images/image14.jpg ../images/image16.jpg ../images/image18.jpg"
		},
		{
			index:5,
			name:"nameTent6",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
                        imgUrl:"../images/image1.jpg ../images/image3.jpg ../images/image5.jpg ../images/image7.jpg ../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg"
		},
		{
			index:6,
			name:"nameTent7",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg"
		},
		{
			index:7,
			name:"nameTent8",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg"
		},
		{
			index:8,
			name:"nameTent9",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg"
		},
		{
			index:9,
			name:"nameTent10",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg"
		},
		{
			index:10,
			name:"nameTent11",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
                        imgUrl:"../images/image1.jpg ../images/image3.jpg ../images/image5.jpg ../images/image7.jpg ../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg"
		},
		{
			index:11,
			name:"nameTent12",
			price:100,
			available:true,
			desc:"Tents are really very use full while trekking",
			capacity:"5",
			itemType:"tent",
			imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg"
		},
		 {
			index:12,
                        name:"nameTent13",
                        price:100,
                        available:true,
                        desc:"Tents are really very use full while trekking",
                        capacity:"5",
                        itemType:"tent",
                        imgUrl:"../images/image1.jpg ../images/image3.jpg ../images/image5.jpg ../images/image7.jpg ../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg"
                },
                {
			index:13,
                        name:"nameTent14",
                        price:100,
                        available:true,
                        desc:"Tents are really very use full while trekking",
                        capacity:"5",
                        itemType:"tent",
                        imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg"
                },
                {
			index:14,
                        name:"nameTent15",
                        price:100,
                        available:true,
                        desc:"Tents are really very use full while trekking",
                        capacity:"5",
                        itemType:"tent",
                        imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg"
                },
                {
			index:15,
                        name:"nameTent16",
                        price:100,
                        available:true,
                        desc:"Tents are really very use full while trekking",
                        capacity:"5",
                        itemType:"tent",
                        imgUrl:"../images/image1.jpg ../images/image3.jpg ../images/image5.jpg ../images/image7.jpg ../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg"
                },
                {
			index:16,
                        name:"nameTent17",
                        price:100,
                        available:true,
                        desc:"Tents are really very use full while trekking",
                        capacity:"5",
                        itemType:"tent",
                        imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg"
                },
                {
			index:17,
                        name:"nameTent18",
                        price:100,
                        available:true,
                        desc:"Tents are really very use full while trekking",
                        capacity:"5",
                        itemType:"tent",
                        imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg"
                },
                {
			index:18,
                        name:"nameTent19",
                        price:100,
                        available:true,
                        desc:"Tents are really very use full while trekking",
                        capacity:"5",
                        itemType:"tent",                        
			imgUrl:"../images/image1.jpg ../images/image3.jpg ../images/image5.jpg ../images/image7.jpg ../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg"
                },
                {
			index:19,
                        name:"nameTent20",
                        price:100,
                        available:true,
                        desc:"Tents are really very use full while trekking",
                        capacity:"5",
                        itemType:"tent",
                        imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg"
                },
                {
			index:20,
                        name:"nameTent21",
                        price:100,
                        available:true,
                        desc:"Tents are really very use full while trekking",
                        capacity:"5",
                        itemType:"tent",
                        imgUrl:"../images/image1.jpg ../images/image3.jpg ../images/image5.jpg ../images/image7.jpg ../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg"
                },
                {
			index:21,
                        name:"nameTent22",
                        price:100,
                        available:true,
                        desc:"Tents are really very use full while trekking",
                        capacity:"5",
                        itemType:"tent",
                        imgUrl:"../images/image1.jpg ../images/image3.jpg ../images/image5.jpg ../images/image7.jpg ../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg"
                },
                {
			index:22,
                        name:"nameTent22",
                        price:100,
                        available:true,
                        desc:"Tents are really very use full while trekking",
                        capacity:"5",
                        itemType:"tent",
                        imgUrl:"../images/image3.jpg ../images/image2.jpg ../images/image5.jpg ../images/image6.jpg ../images/image7.jpg ../images/image8.jpg ../images/image9.jpg ../images/image10.jpg ../images/image11.jpg"
                },
                {
			index:23,
                        name:"nameTent23",
                        price:100,
                        available:true,
                        desc:"Tents are really very use full while trekking",
                        capacity:"5",
                        itemType:"tent",
                        imgUrl:"../images/image1.jpg ../images/image3.jpg ../images/image5.jpg ../images/image7.jpg ../images/image9.jpg ../images/image11.jpg ../images/image13.jpg ../images/image15.jpg"
                }
	];
});
app.filter('split', function() {
    return function(input,split,index) {
		if(index=="All") {
			var arr = input.split(split);
			arr = arr.splice(1)			
		}
		if(index>=0){
			var arr = input.split(split)[index];
		}
		return arr;
    };
});
app.directive('rentItem',function($rootScope){
	var dir = {};
	dir.restrict = "AE";
	dir.transclude = "True";
	dir.templateUrl = "itemView.html"
	dir.scope = {
                data :'='
        };
	dir.priority= 1001;
	dir.controller = "viewsCtrl";
	dir.compile = function(element, attributes) {
	//	element.addClass('container-fluid');
	//	element.addClass('text-center');
		element.css("float", "left");
		element.css("width","19.9%");
		element.css("height","35%");
//		element.css("background-color","gray");
		element.css("padding-right","0px");
		element.css("margin-right","1px");
		element.css("margin-bottom","7px");
		element.css("border","1px solid #E9E9E9");
		element.css("transition","width 2s");
            var link = function($scope, element, attributes) {
				$scope.selectedItem = function() {
					console.log("selected item is "+$scope.data.name);
					$rootScope.selectedItemsArray.push($scope.data) 
					console.log("selected items total "+$rootScope.selectedItemsArray.length)
				}
				$scope.showItemDetails = function() {
					$rootScope.showItemDetailsView=true;
					$rootScope.itemViewData = $scope.data
					console.log("mouse over")
				}
				$scope.hideItemDetails = function() {
					$rootScope.showItemDetailsView=false;
					console.log("mouse leave")
				}
            }
   	        return link;
	}
	return dir;
})

