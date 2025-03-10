let matrix = [];
let choice;

do {
    choice = Number(prompt("MENU \n\n1. Nhập mảng 2 chiều\n2. Hiển thị mảng 2 chiều\n3. Tính tổng các phần tử trong mảng\n4. Tìm phần tử lớn nhất trong mảng và chỉ số của nó\n5. Tính trung bình cộng các phần tử của một hàng cụ thể\n6. Đảo ngược các hàng trong mảng\n7. Thoát chương trình"));

    switch (choice) {
        case 1:
            let rows = Number(prompt("Nhập số hàng của mảng:"));
            let cols = Number(prompt("Nhập số cột của mảng:"));
            if (rows <= 0 || cols <= 0) {
                alert("Số hàng và số cột phải lớn hơn 0!");
            } else {
                matrix = [];
                for (let i = 0; i < rows; i++) {
                    matrix[i] = [];
                    for (let j = 0; j < cols; j++) {
                        matrix[i][j] = Number(prompt("Nhập phần tử [" + i + "][" + j + "]:"));
                    }
                }
                alert("Nhập mảng thành công!");
            }
            break;

        case 2:
            if (matrix.length === 0) {
                alert("Mảng chưa có phần tử nào!");
            } else {
                let result = "Mảng 2 chiều:<br>";
                for (let i = 0; i < matrix.length; i++) {
                    result += matrix[i].join("     ") + "<br>";
                }
                alert("Mảng:\n " + matrix.map(row => "[" + row + "]").join("\n"));
            }
            break;

        case 3:
            if (matrix.length === 0) {
                alert("Mảng chưa có phần tử nào!");
            } else {
                let sum = 0;
                for (let i = 0; i < matrix.length; i++) {
                    for (let j = 0; j < matrix[i].length; j++) {
                        sum += matrix[i][j];
                    }
                }
                alert("Tổng các phần tử: " + sum);
            }
            break;

        case 4:
            if (matrix.length === 0) {
                alert("Mảng chưa có phần tử nào!");
            } else {
                let max = matrix[0][0];
                let maxRow = 0;
                let maxCol = 0;
                for (let i = 0; i < matrix.length; i++) {
                    for (let j = 0; j < matrix[i].length; j++) {
                        if (matrix[i][j] > max) {
                            max = matrix[i][j];
                            maxRow = i;
                            maxCol = j;
                        }
                    }
                }
                alert("Phần tử lớn nhất: " + max + " tại vị trí [" + maxRow + "][" + maxCol + "]");
            }
            break;

        case 5:
            if (matrix.length === 0) {
                alert("Mảng chưa có phần tử nào!");
            } else {
                let row = Number(prompt("Nhập số hàng muốn tính trung bình (0 đến " + (matrix.length - 1) + "):"));
                if (row < 0 || row >= matrix.length) {
                    alert("Hàng không hợp lệ!");
                } else {
                    let sum = 0;
                    for (let j = 0; j < matrix[row].length; j++) {
                        sum += matrix[row][j];
                    }
                    let avg = sum / matrix[row].length;
                    alert("Trung bình cộng hàng " + row + ": " + avg);
                }
            }
            break;

        case 6:
            if (matrix.length === 0) {
                alert("Mảng chưa có phần tử nào!");
            } else {
                let temp = [];
                for (let i = 0; i < matrix.length; i++) {
                    temp[i] = matrix[matrix.length - 1 - i];
                }
                for (let i = 0; i < matrix.length; i++) {
                    matrix[i] = temp[i];
                }
                let result = "Mảng sau khi đảo ngược các hàng:<br>";
                for (let i = 0; i < matrix.length; i++) {
                    result += matrix[i].join("     ") + "<br>";
                }
                alert("Mảng sau khi đảo ngược các hàng:\n" + matrix.map(row => "[" + row + "]").join("\n"));
            }
            break;

        case 7:
            alert("Thoát chương trình!");
            break;
        default:
            alert("Lựa chọn không hợp lệ!");
    }
} while (choice !== 7);
