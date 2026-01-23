//Course Price Tag Labeler
//Initial data:
//price = 1299;
let price=1299;
let courseTag=""  //   4. To Store label in courseTag

//1. If price < 500 → "Budget Course"
if(price<500){
    courseTag+="Budget Course"
}
//2. If price between 500–1000 → "Standard Course"
else if(price>500 && price<1000){
    courseTag+="standardcourse"
}
//3. If price > 1000 → "Premium Course"
else{
    courseTag+="premium Course"
}
//5. Print the label
console.log(courseTag)
