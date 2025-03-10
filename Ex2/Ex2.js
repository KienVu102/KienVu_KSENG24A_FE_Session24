let nums;
let num;
let choice = 0;

do {
    choice = +prompt("MENU \n\n1. Nhập mảng số nguyên\n2. Hiển thị mảng \n3. Tìm phần tử chẵn/lẻ có trong mảng \n4. Tính trung bình cộng  các phần tử có trong mảng \n5. Xóa phần tử tại vị trí chỉ định \n6. Tìm phần tử lớn thứ hai trong mảng \n7. Thoát chương trình");

    switch (choice){
        case 1:
            nums = prompt("Mời bạn nhập 1 chuỗi các số nguyên (cách nhau bằng dấu phảy)");
            if (nums){
                num = nums.split(",").map(Number);
                alert("Bạn đã thêm mảng thành công");
            } else {
                alert("Nhập mảng không thành công !");
            }
            break;

        case 2:
            if (num) {
                alert(num.join(", "));
            } else {
                alert("Mảng chưa được nhập.");
            }
            break;
            
        case 3:
            if (num) {
                let odd = [];
                let even = [];
                for ( let i = 0; i < num.length ; i++){
                    if ( num[i] % 2 === 0){
                        even.push(num[i]);
                    } else {
                        odd.push(num[i]);
                    }
                }
                alert(`Các số chẵn là: ${even.join(", ")} \nCác số lẻ là: ${odd.join(", ")}`);
            } else {
                alert("Mảng chưa được nhập.");
            }
            break;

        case 4:
            let sum = num.reduce((acc, val) => acc + val, 0);
            let aver = sum / num.length;
            alert(`Trung bình cộng các số nguyên có trong mảng là ${aver}`);
            break;
            
        case 5:
            if (num && num.length > 0) {
                let index = parseInt(prompt("Nhập vị trí muốn xóa (từ 0 đến " + (num.length - 1) + "):"));
                if (index >= 0 && index < num.length) {
                    num.splice(index, 1);
                    alert("Phần tử tại vị trí " + index + " đã được xóa.");
                    alert("Mảng hiện tại: " + num.join(", "));
                } else {
                    alert("Vị trí không hợp lệ.");
                }
            } else {
                alert("Mảng chưa được nhập hoặc rỗng.");
            }
            break;

        case 6:
            if (num && num.length > 1) {
                let sortedNum = [...num].sort((a, b) => b - a);
                alert(`Phần tử lớn thứ hai trong mảng ${num} là: ${sortedNum[1]}`);
            } else {
                alert("Mảng không đủ phần tử để tìm phần tử lớn thứ hai.");
            }
            break;
                        
        case 7:
            alert("Thoát chương trình thành công !");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
} while(choice !== 7);