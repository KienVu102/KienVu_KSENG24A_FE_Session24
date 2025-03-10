let nums;
let num;
let choice = 0;

do {
    choice = +prompt("MENU \n\n1. Nhập mảng \n2. Hiển thị mảng \n3. Tìm phần tử lớn/nhỏ nhất có trong mảng \n4. Tính tổng các phần tử có trong mảng \n5. Tìm số lần phần từ xuất hiện trong mảng \n6. Sắp xếp mảng tăng dần \n7. Thoát chương trình");

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
                let ask = +prompt("Tìm phần tử nhỏ nhất (1) hoặc lớn nhất (2):");
                if (ask === 1) {
                    let min = Math.min(...num);
                    alert(`Số nhỏ nhất có trong mảng ${num} là: ${min}`);
                } else if (ask === 2) {
                    let max = Math.max(...num);
                    alert(`Số lớn nhất là: ${max}`);
                } else {
                    alert("Lựa chọn không hợp lệ.");
                }
            } else {
                alert("Mảng chưa được nhập.");
            }
            break;

        case 4:
            let sum = num.reduce((acc, val) => acc + val, 0);
            alert(`Tổng các số nguyên có trong mảng là ${sum}`);
            break;
            
        case 5:
            let ask = parseInt(prompt("Mời bạn nhập 1 số"));
            let show = 0;

            for ( let i = 0; i < num.length; i++){
                if ( num[i] === ask ){
                    show++;
                }
            }
            if (show === 0){
                alert("Ko có phần tử này trong mảng");
            } else {
                alert(`Số ${ask} xuất hiện ${show} lần trong mảng`);
            }
            break;

        case 6:
            num.sort((a, b) => a - b);
            alert(`Mảng đã được sắp xếp tăng dần ${num}`);
            break;
                        
        case 7:
            alert("Thoát chương trình thành công !");
            break;
        default:
            alert("Lựa chọn không hợp lệ");
    }
} while(choice !== 7);