const list = document.querySelector("#categories");
const allElements = list.children.length;
console.log(`Number of categories ${allElements}`);
const categoryList = [...list.children];
categoryList.forEach((category) => {
    const categoryName = category.querySelector("h2").textContent;
    const categoryElements = category.querySelectorAll("li").length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${categoryElements}`);
})