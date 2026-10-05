
// 1. n ededinin 3e ve 7e bolunmesi

function checkDivisibility(n) {
    if (n % 3 === 0 && n % 7 === 0) {
        console.log(`${n} ededi hem 3-e, hem de 7-ye bolunur.`);
    } else {
        console.log(`${n} ededi hem 3-e hem de 7-ye tam bolunmur.`);
    }
}
checkDivisibility(21);


// 2. n ve m arasindaki tek ededlerin sayi

function countOddNumbers(n, m) {
    let count = 0;
    for (let i = n + 1; i < m; i++) {
        if (i % 2 !== 0) count++;
    }
    return count;
}
console.log("Tek ededlerin sayi:", countOddNumbers(2, 10));



// 3. n ve m arasindaki cut ededlerin cemi

function sumOfEvenNumbers(n, m) {
    let sum = 0;
    for (let i = n + 1; i < m; i++) {
        if (i % 2 === 0) sum += i;
    }
    return sum;
}
console.log("Cut ededlerin cemi:", sumOfEvenNumbers(1, 6));


// 4. ededin sade ve ya murekkeb olmasi

function checkPrime(n) {
    if (n <= 1) {
        console.log(`${n} ne sade, ne de murekkebdir.`);
        return;
    }
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(`${n} ${isPrime ? "sade ededdir." : "murekkeb ededdir."}`);
}
checkPrime(13);



// 5. Array-deki cut ededlerin cemi

function sumEvenInArray(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num % 2 === 0) sum += num;
    }
    return sum;
}
console.log("Array-de cutlerin cemi:", sumEvenInArray([1, 2, 3, 4, 5, 6]));



// 6. en boyuk ve en kicik  ededi tapmaq

function findMinMax(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    console.log(`en kicik: ${min}, en boyuk: ${max}`);
}
findMinMax([4, 9, 1, 22, -3, 15]);



// 7. Musbet, menfi ve sifirlarin sayini tapmaq

function countSignElements(arr) {
    let positives = 0, negatives = 0, zeros = 0;
    for (let num of arr) {
        if (num > 0) positives++;
        else if (num < 0) negatives++;
        else zeros++;
    }
    console.log(`Musbet: ${positives}, Menfi: ${negatives}, Sifir: ${zeros}`);
}
countSignElements([-2, 5, 0, 12, -7, 0, 3]);



// 8. ededin array-de tekrarlanma sayi

function countOccurrences(arr, target) {
    let count = 0;
    for (let num of arr) {
        if (num === target) count++;
    }
    return count;
}
console.log("3-un tekrar sayi:", countOccurrences([1, 3, 5, 3, 7, 3, 9], 3));



// 9. Array-i tersine cevirmek

function reverseArray(arr) {
    let reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}
console.log("Tersine cevrilmis:", reverseArray([1, 2, 3, 4, 5]));



// 10. ededin  reqemlerinin cemi

function sumOfDigits(n) {
    let sum = 0;
    let num = Math.abs(n);
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
console.log("reqemlerin cemi:", sumOfDigits(456));



// 11. Palindrom eded yoxlanilmasi

function isPalindromeNumber(n) {
    let str = n.toString();
    let reversedStr = str.split('').reverse().join('');
    console.log(`${n} ${str === reversedStr ? "palindromdur." : "palindrom deyil."}`);
}
isPalindromeNumber(121);


// 12 & 13. Student obyekti ve Status yoxlanisi

const student = {
    name: "Sevinc",
    age: 24,
    group: "AI-101",
    score: 95
};

console.log("--- Student Melumatlari---");
for (let key in student) {
    console.log(`${key}: ${student[key]}`);
}

function checkStudentStatus(studentObj) {
    let status = studentObj.score >= 51 ? "Passed" : "Failed";
    console.log(`${studentObj.name}: ${status}`);
}
checkStudentStatus(student);



// 14. Score-u 80-den yuxari olan studentler

const students = [
    { name: "Ali", age: 22, group: "A", score: 85 },
    { name: "Leyla", age: 23, group: "B", score: 72 },
    { name: "Murad", age: 21, group: "A", score: 91 },
    { name: "Aysel", age: 24, group: "C", score: 45 }
];

const topStudents = students.filter(s => s.score > 80);
console.log("Score-u 80-den yuxari olanlar:", topStudents);



// 15. en bahali mehsulu tapmaq

const products = [
    { name: "Laptop", price: 1500 },
    { name: "Mouse", price: 45 },
    { name: "Keyboard", price: 120 },
    { name: "Monitor", price: 600 }
];

function findMostExpensiveProduct(arr) {
    let mostExpensive = arr[0];
    for (let product of arr) {
        if (product.price > mostExpensive.price) {
            mostExpensive = product;
        }
    }
    return mostExpensive;
}
console.log("en bahali mehsul:", findMostExpensiveProduct(products));