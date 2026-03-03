/**
 * 1. forEach => Duyệt qua từng phần tử của mảng và thực hiện một hành động nào đó.
 * 2. filter => Lọc ra các phần tử của mảng dựa trên một điều kiện nào đó.
 * 3. some => Kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn một điều kiện nào đó hay không.
 * 4. every => Kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn một điều kiện nào đó hay không.
 * 5. find => Tìm kiếm và trả về phần tử đầu tiên trong mảng
 * 6. map => Tạo ra một mảng mới bằng cách áp dụng một hàm nào đó lên từng phần tử của mảng gốc.
 * 7. reduce => Tính toán một giá trị duy nhất từ một mảng bằng cách áp dụng một hàm nào đó lên từng phần tử của mảng gốc.
 */ 

// const Provinces = ["Hà Nội", "Hồ Chí Minh", "Đà Nẵng", "Hải Phòng", "Cần Thơ", "An Giang"];
// Provinces.forEach((province) => {
//     console.log(province);
// });

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const filteredNumbers = numbers.filter((number) => number % 2 === 0);
// console.log(filteredNumbers); 

const averagePoints = [8, 7, 6, 4, 5, 6, 2, 3, 1, 10];
const hasbelowaveragePoints = averagePoints.some((point) => point < 5);
console.log(hasbelowaveragePoints);
console.log("Number of students with below average points:", averagePoints.filter(point => point < 5).length);

const allaboveaveragePoints = averagePoints.every((point) => point >= 5);
console.log(allaboveaveragePoints);
console.log("Number of students with above average points:", averagePoints.filter(point => point >= 5).length);
