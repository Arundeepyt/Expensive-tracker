document.addEventListener("DOMContentLoaded", function () {
    console.log("Script.js is connected!");

    document.getElementById("transactionForm").addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents page refresh
        console.log("Form Submitted!");

        let name = document.getElementById("transactionName").value.trim();
        let amount = parseFloat(document.getElementById("transactionAmount").value);
        let type = document.getElementById("transactionType").value;

        if (!name || isNaN(amount) || amount <= 0) {
            alert("Please enter a valid name and amount greater than 0.");
            return;
        }

        let transactionList = document.getElementById("transactionList");
        let listItem = document.createElement("li");

        listItem.textContent = `${name}: $${amount.toFixed(2)} (${type})`;
        listItem.classList.add(type === "income" ? "income" : "expense");

        transactionList.appendChild(listItem);

        document.getElementById("transactionName").value = "";
        document.getElementById("transactionAmount").value = "";

        let balanceElement = document.getElementById("balance");
        let currentBalance = parseFloat(balanceElement.textContent) || 0;

        if (type === "income") {
            currentBalance += amount;
        } else {
            currentBalance -= amount;
        }

        balanceElement.textContent = currentBalance.toFixed(2);
    });
});