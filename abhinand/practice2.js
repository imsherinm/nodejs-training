// 11. sum of order amount (orderAmount)
// 12. total number of cancelled orders (status = cancelled)
// 13. sum of completed order amount (status = completed)
// 14. sum of cancelled order amount (status = cancelled)
// 15. check whether any order amount is greater than 500 order amount
// 16. check whether all orders are above 100 order amount
// 17. sort orders based on order amount
// 18. write a function to get order details by passing order id 
// 19. sum of online payment amount
// 20. write a function to get sum of online and cod amount separately (return an object which contains sum of both online and cod amount)


const datas=
{
    "data": {
        "orders": [
            {
                "id": 25650,
                "name": "Haytham Sultan",
                "phone": "508881895",
                "status": "PENDING",
                "createdAt": "1661459754",
                "eta": "1661463208",
                "serviceProvider": "Al cognizant services",
                "scheduled": false,
                "paymentType": "COD",
                "orderType": "ON-DEMAND",
                "orderAmount": "453.00"
            },
            {
                "id": 25649,
                "name": "Haytham Sultan",
                "phone": "508881895",
                "status": "COMPLETED",
                "createdAt": "1661459177",
                "eta": "1661462632",
                "serviceProvider": "Al cognizant services",
                "scheduled": false,
                "paymentType": "COD",
                "orderType": "ON-DEMAND",
                "orderAmount": "311.00"
            },
            {
                "id": 25648,
                "name": "Haytham Sultan",
                "phone": "508881895",
                "status": "CANCELLED",
                "createdAt": "1661459020",
                "eta": "1661462475",
                "serviceProvider": "Al cognizant services",
                "scheduled": true,
                "paymentType": "COD",
                "orderType": "ON-DEMAND",
                "orderAmount": "3.00"
            },
            {
                "id": 25646,
                "name": "Haytham Sultan",
                "phone": "508881895",
                "status": "COMPLETED",
                "createdAt": "1661457388",
                "eta": "1661461159",
                "serviceProvider": "All Best Services1",
                "scheduled": false,
                "paymentType": "COD",
                "orderType": "ON-DEMAND",
                "orderAmount": "110.00"
            },
            {
                "id": 25645,
                "name": "Haytham Sultan",
                "phone": "508881895",
                "status": "COMPLETED",
                "createdAt": "1661455310",
                "eta": "1661459080",
                "serviceProvider": "All Best Services1",
                "scheduled": false,
                "paymentType": "ONLINE",
                "orderType": "ON-DEMAND",
                "orderAmount": "110.00"
            },
            {
                "id": 25644,
                "name": "nayana n",
                "phone": "524081001",
                "status": "PENDING",
                "createdAt": "1661409789",
                "eta": "1661412599",
                "serviceProvider": "Al cognizant services",
                "scheduled": false,
                "paymentType": "COD",
                "orderType": "ON-DEMAND",
                "orderAmount": "344.00"
            },
            {
                "id": 25641,
                "name": "bhavya L",
                "phone": "524081001",
                "status": "COMPLETED",
                "createdAt": "1659520871",
                "eta": "1659523860",
                "serviceProvider": "Al cognizant services",
                "scheduled": true,
                "paymentType": "ONLINE",
                "orderType": "ON-DEMAND",
                "orderAmount": "3.00"
            },
            {
                "id": 25640,
                "name": "Sherin ",
                "phone": "593881961",
                "status": "CANCELLED",
                "createdAt": "1659330895",
                "eta": "1659333689",
                "serviceProvider": "Al cognizant services",
                "scheduled": false,
                "paymentType": "COD",
                "orderType": "ON-DEMAND",
                "orderAmount": "30.00"
            },
            {
                "id": 25636,
                "name": "A Raman",
                "phone": "524488871",
                "status": "COMPLETED",
                "createdAt": "1659127305",
                "eta": "1659130793",
                "serviceProvider": "Al cognizant services",
                "scheduled": false,
                "paymentType": "ONLINE",
                "orderType": "ON-DEMAND",
                "orderAmount": "43.00"
            },
            {
                "id": 25635,
                "name": "A Raman",
                "phone": "524488871",
                "status": "COMPLETED",
                "createdAt": "1659127090",
                "eta": "1659129579",
                "serviceProvider": "Al cognizant services",
                "scheduled": false,
                "paymentType": "COD",
                "orderType": "ON-DEMAND",
                "orderAmount": "21.00"
            }
        ]
    }
}














//  const orders = require("../orders.json");
//  console.log(orders);



// 11. sum of order amount (orderAmount)

const getsum = () =>
{
    try {
        const orders = Response?.data?.orders;
        return orders.reduce((sum,value) => sum + Number(value.orderAmount),0);
    

    } catch (error) {
    
        console.log('error',error);
    }
}
console.log('getsum(); ', getsum() );