var catArray = [
    {
        name: "Tiddles",
        favouriteFood: "Steak",
        imageWidth: "500",
        imageSource: "http://imgc.allpostersimages.com/images/P-473-488-90/38/3862/C8GJF00Z/posters/unicorn.jpg"
    },
    {
        name: "Tiger",
        favouriteFood: "Deer",
        imageWidth: "500",
        imageSource: "http://animal-dream.com/data_images/tiger/tiger6.jpg"
    },
    {
        name: "Boba",
        favouriteFood: "Sock fluff",
        imageWidth: "500",
        imageSource: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"
    },
    {
        name: "Barnaby",
        favouriteFood: "Tuna",
        imageWidth: "500",
        imageSource: "http://65.media.tumblr.com/8a827e13ebb5db7d16e2b1c4cbe7ce70/tumblr_odtp4ftIhB1uhevdso1_400.jpg"
    },
    {
        name: "Max",
        favouriteFood: "Whiskas Temptations",
        imageWidth: "500",
        imageSource: "http://66.media.tumblr.com/7c5784ea89369c780e782bf10c60315a/tumblr_npb0hlYwhV1u63jaco1_1280.jpg"
    }
];


function createUl() {
    var unorderedList = document.createElement('ul');
    return unorderedList;
};

function createListItem(str, item) {
    var listItem = document.createElement('li');
    listItem.innerText = str + item;
    return listItem;
};

function createImg(width, source) {
    var image = document.createElement('img');
    image.setAttribute('width', width);
    image.setAttribute('src', source);
    return image;
};

function addCat(name, food, imageWidth, imageSource) {
    var unorderedList = createUl();
    var listItemName = createListItem("Name: ", name);
    var listItemFood = createListItem("Favourite food: ", food);
    var image = createImg(imageWidth, imageSource);
    unorderedList.appendChild(listItemName);
    unorderedList.appendChild(listItemFood);
    unorderedList.appendChild(image);
    var cats = document.querySelector('#cats');
    cats.append(unorderedList);
};

window.onload = function() {

    for (var i = 0; i < catArray.length; i++) {
        addCat(
            catArray[i].name,
            catArray[i].favouriteFood, 
            catArray[i].imageWidth, 
            catArray[i].imageSource
        );
    };

};




