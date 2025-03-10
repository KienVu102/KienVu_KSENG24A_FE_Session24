let nums;
let num;
let choice = 0;

do {
    choice = +prompt("MENU \n\n1. Nhập mảng số nguyên\n2. Hiển thị mảng \n3. Tìm phần tử lớn nhất trong mảng và in ra chỉ số của nó \n4. Tính tổng và trung bình cộng của các số dương trong mảng \n5. Đảo ngược mảng \n6. Kiểm tra mảng có đối xứng không \n7. Thoát chương trình");

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
            if (num && num.length > 0) {
                let max = num[0];
                let maxIndex = 0;
                for (let i = 1; i < num.length; i++) {
                    if (num[i] > max) {
                        max = num[i];
                        maxIndex = i;
                    }
                }
                alert(`Phần tử lớn nhất là ${max} tại vị trí ${maxIndex}`);
            } else {
                alert("Mảng chưa được nhập hoặc rỗng.");
            }
            break;

        case 4:
            if (num && num.length > 0) {
                let sum = 0;
                let count = 0;
                for (let i = 0; i < num.length; i++) {
                    if (num[i] > 0) {
                        sum += num[i];
                        count++;
                    }
                }
                if (count > 0) {
                    let average = sum / count;
                    alert(`Tổng các số dương là ${sum} và trung bình cộng là ${average}`);
                } else {
                    alert("Mảng không có số dương.");
                }
            } else {
                alert("Mảng chưa được nhập hoặc rỗng.");
            }
            break;
            
        case 5:
            if (num && num.length > 0) {
                num.reverse();
                alert("Mảng sau khi đảo ngược là: " + num.join(", "));
            } else {
                alert("Mảng chưa được nhập hoặc rỗng.");
            }
            break;

        case 6:
            if (num && num.length > 0) {
                let sym = true;
                for (let i = 0; i < Math.floor(num.length / 2); i++) {
                    if (num[i] !== num[num.length - 1 - i]) {
                        sym = false;
                        break;
                    }
                }
                if (sym) {
                    alert("Mảng đối xứng.");
                } else {
                    alert("Mảng không đối xứng.");
                }
            } else {
                alert("Mảng chưa được nhập hoặc rỗng.");
            }
            break;
                        
        case 7:
            alert("Thoát chương trình thành công !");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
} while(choice !== 7);