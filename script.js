//
//==============================
// BUSINESSPRO DASHBOARD
// JavaScript Functionality
//
//==============================



// 1. SEARCH FUNCTION

const searchInput =
document.querySelector('.topbar input');

const tableRows =
document.querySelectorAll('tbody tr');

if (searchInput) {

    searchInput.addEventListener('input', function () {

    const searchValue =
this.value.toLowerCase().trim();

     tableRows.forEach(function (row) {
            
        const rowText =
row.textContent.toLowerCase();

           if
(rowText.includes(searchValue)) {
                   row.style.display =
    '';

} else {
                 row.style.display =
   'none';
            }
     });
});

}





// 2. SIDEBAR NAVIGATION

const navlinks =
document.querySelectorAll('nav a');

navlinks.forEach(function (link)
{
    

    link.addEventListener('click', function (event) {

              event.preventDefault();

              navlinks.forEach(function (item) {

item.classList.remove('active');
 });

 this.classList.add('active');

const pageName =
this.textContent.trim();

       console.log('Selected:', pageName);
              
    });
});


// 3. NOTIFICATION BUTTON

const notificationButton =
document.querySelector('.notification');

if (notificationButton) {

    notificationButton.addEventListener('click', function () {

        alert("You have 3 new notification.\n\n" +
                      ". New order received\n" +

              ". New customer registered\n" +
                      ". Peyment seccessfully received"
                         
        );
    });
}

// 4. DATA BUTTON

const dateButton = document.querySelector(".date-btn");

dateButton.addEventListener("click", function ()
{
    const today = new Date();

    const options = { 
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const currentDate = today.toLocaleDateString("en-US", options);

    this.innerHTML = ' <i class="fa-regular fa-calender"></i> ' + currentDate;
});

//  5. QUICK ACTION

const quickButtons =
document.querySelectorAll('.quick-actions button');

quickButtons.forEach(function (button) {

    button.addEventListener('click', function () {

         const actionName = this.querySelector("strong").textContent.trim();

          
         // ==============
         //  ADD PRODUCT
         // ==============

         if (actionName === "Add Product") {

            const modal = document.createElement("div");

            modal.className = "product-modal";

            modal.innerHTML = ` <div class="product-form">
                <h2>Add New Product</h2>

                 <input type="text" id="productNameInput" placeholder="Product name">
                 <input type="number" id="productPriceInput" placeholder="Price">
                 <input type="text" id="productCategoryInput" placeholder="Category">

                 <div class="form-buttons">
                    <button id="saveProductBtn">Add Product</button>
                    <button type="button" id="cancelProductBtn" onclick="this.closest('.product-modal').remove()">Cancel</button>
                 </div>
                
            </div>

            `;

        document.body.appendChild(modal);

         // SAVE PRODUCT

         document.getElementById("saveProductBtn").addEventListener("click", function ()
         {
            const productName = document.getElementById("productNameInput").value.trim();

            const productPrice = document.getElementById("productPriceInput").value.trim();

            const productCategory = document.getElementById("productCategoryInput").value.trim();

            if (
                productName === "" ||
                productPrice === "" ||
                productCategory === "" 
            ) {
                alert("Please fill all fields.");
                return;
            }

            const tableBody = document.getElementById("productTableBody");

            const newRow = document.createElement("tr");

            newRow.innerHTML = `
                                 <td>${productName}</td>
                                 <td>${productPrice}</td>
                                 <td>${productCategory}</td>
                                
            <td>
                <button class="edit-product">Edit</button>
                <button class="delete-product">Delete</button>
            </td>
             `;

            tableBody.appendChild(newRow);

        //  DELETE BUTTON

        newRow.querySelector(".delete-product").addEventListener("click", function()
        {
            newRow.remove();
        });

        
        // EDIT PRODUCT

    newRow.querySelector(".edit-product").addEventListener("click", function()
    {
        const cells = newRow.querySelectorAll("td");

        const oldName = 
        cells[0].textContent;

        const oldPrice =
        cells[1].textContent;

        const oldCategory =
        cells[2].textContent;

    const newName = prompt("Edit prroduct name:", oldName);
    if (newName === null) return;

     const newPrice = prompt("Edit product price:", oldPrice);
    if (newPrice === null) return;

     const newCategory = prompt("Edit prroduct category:", oldCategory);
    if (newCategory === null) return;

    if (
         newName.trim() === "" ||
         newPrice.trim() === "" ||
         newCategory.trim() === "" 
    ) {
        alert("Please fill all fields."); 
        return;
    }
       
        cells[0].textContent = newName;
        cells[1].textContent = newPrice;
        cells[2].textContent = newCategory;

        alert("Product updated successfully!"); 

    });


    // CANCEL PRODUCT

    const cancelProductBtn = modal.querySelector("#cancelProductBtn");
    cancelProductBtn.addEventListener("click", function ()
    {
         modal.remove();
    });
    
      modal.remove();

        alert(productName + "has been added successfully!");
         });
        }

    // =====================
    //   ADD CUSTOMER
    // =====================

    if (actionName === "Add Customer") {

        const modal = document.createElement("div");

        modal.className = "customer-modal";

        modal.innerHTML = `
                            <div class="customer-form"> 
                            <h2>Add New Customer</h2>
                            <input type="text" id="customerNameInput" placeholder="Customer Name">
                            <input type="emai;" id="customerEmailInput" placeholder="Email address">
                            <input type="text" id="customerPhoneInput" placeholder="Phone Number">

                            <div class="form-buttons">
                            <button id="saveCustomerBtn">Add Customer</button>
                            <button type="button" id="cancelCustomerBtn" onclick="this.closest('.customer-modal').remove()">Cancel</button>
                            </div>

                            </div>

                            `;

        document.body.appendChild(modal);
        
        // SAVE CUSTOMER

        document.getElementById("saveCustomerBtn").addEventListener("click", function ()
        {
            const customerName = document.getElementById("customerNameInput").value.trim();

            const customerEmail = document.getElementById("customerEmailInput").value.trim();

            const customerPhone = document.getElementById("customerPhoneInput").value.trim();

             if (
                customerName === "" ||
                customerEmail === "" ||
                customerPhone === "" 
            ) {
                alert("Please fill all fields.");
                return;
            }

            const tableBody = document.getElementById("customerTableBody");

            const newRow = document.createElement("tr");

            newRow.innerHTML = `
                                 <td>${customerName}</td>
                                 <td>${customerEmail}</td>
                                 <td>${customerPhone}</td>
                                
            <td>
                <button class="edit-customer">Edit</button>
                <button class="delete-customer">Delete</button>
            </td>
             `;

            tableBody.appendChild(newRow);

         //  DELETE CUSTOMER

        newRow.querySelector(".delete-customer").addEventListener("click", function()
        {
            newRow.remove();
        });

           // EDIT CUSTOMER

    newRow.querySelector(".edit-customer").addEventListener("click", function()
    {
        const cells = newRow.querySelectorAll("td");

        const oldName = 
        cells[0].textContent;

        const oldEmail =
        cells[1].textContent;

        const oldPhone =
        cells[2].textContent;

    const newName = prompt("Edit customer name:", oldName);
    if (newName === null) return;

     const newEmail = prompt("Edit customer email:", oldEmail);
    if (newEmail === null) return;

     const newPhone = prompt("Edit customer phone:", oldPhone);
    if (newPhone === null) return;

    if (
         newName.trim() === "" ||
         newEmail.trim() === "" ||
         newPhone.trim() === "" 
    ) {
        alert("Please fill all fields."); 
        return;
    }
       
        cells[0].textContent = newName;
        cells[1].textContent = newEmail;
        cells[2].textContent = newPhone;

        alert("Customer updated successfully!"); 

    });

      
    // CANCEL CUSTOMER

    const cancelCustomerBtn = modal.querySelector("#cancelCustomerBtn");
    cancelCustomerBtn.addEventListener("click", function ()
    {
        modal.remove();
    });

      modal.remove();

        alert(customerName + "has been added successfully!");
         });

     }

     // ====================
     // ADD ORDERS
     // ====================

    // =====================
    //   CREATE INVOICE
    // =====================

    else if (actionName === "Create Invoice") {

        alert("Invoice creator is ready.\n\n" + "Next version will include a complete invoice form.");
    }
    // ======================
    //   VIEW REPORTS
    // ======================

    else if (actionName === "View Reports") {

        alert("Business Reports\n\n" + "Revenue: $24,680\n" + "Orders: 1,248\n" + "Customers: 8,642\n" + "Products Sold: 3,856");
    }

    });

});
   

// 6. VIEW ALL ORDERS

const viewAllButton = document.querySelector(".view-btn");

viewAllButton.addEventListener("click", function ()
{
    alert(
        "Opening all orders...\n\n" + 
                                      "Orders management will be added in the next version."
    );
});

// 7. SUPPORT BUTTON

const supportButton = document.querySelector(".help-box button");

supportButton.addEventListener("click", function ()
{
    alert(
        "support Center\n\n" + "Our support team is ready to help you."
    );
});

// 8. PROFILE DROPDOWN

const profile = document.querySelector(".profile");

profile.addEventListener("click", function ()
{
    alert(
        "Administrator profile\n\n" + "Name: FariDev Admin\n" + "Role: Administrator"
    );
});

// 9. REVENUE SELECT

const revenueSelect = document.querySelector(".panel-header select");

revenueSelect.addEventListener("change", function ()
{
    if (this.value === "Last 6 Months") {

        alert("Showing revenue for the last 6 months.");
    }

    else if (this.value === "Last 12 Months") {

        alert("Showing revenue for the last 12 months.");
    }
});

// 10. CONSOLE MESSAGE

console.log("BusinessPro Dashboard loaded successfully!");

// STAGE 2 - PRODUCT & CUSTOMER
// 1. CREATE PRODUCT FORM

const productButton = [...document.querySelectorAll(".quick-actions button")]
.find(button => 
    button.querySelector("strong")?.textContent.trim() === "Add Product"
);

// 2. CREATE CUSTOMER FORM

const customerButton = [...document.querySelectorAll(".quick-actions button")]
.find(button => 
    button.querySelector("strong")?.textContent.trim() === "Add Customer"
);

// 3. PRODUCT DATA

let products = [];

// 4. CUSTOMER DATA

let customers = [];

// 5. CREATE PRODUCT

function addProduct() {

    const name = prompt("Enter product name:");
    if (!name) return;

    const price = prompt("Enter product price:");
    if (!price) return;

    const category = prompt("Enter product category:");
    if (!category) return;

    const product = {
        id: Date.now(),
        name: name,
        price: price,
        category: category
    };

    products.push(product);

alert("Product added successfully!");
     showProducts();
}

// 6. CREATE CUSTOMER

function addCustomer() {

    const name = prompt("Enter customer name:");
    if (!name) return;

    const email = prompt("Enter customer email:");
    if (!email) return;

    const phone = prompt("Enter customer phone:");
    if (!phone) return;

    const customer = {
        id: Date.now(),
        name: name,
        email: email,
        phone: phone
    };

    customers.push(customer);

alert("Customer added successfully!");
     showCustomers();
}

// 7. SHOW PRODUCTS

function showProducts() {
    console.log("PRODUCTS");

products.forEach(function(product)
{
    console.log(
        product.name + 
        " | $" +
        product.price +
        " | " +
        product.category 
    );
});

}

// 8. SHOW CUSTOMERS

function showCustomers() {
    console.log("CUSTOMERS");

customers.forEach(function(customer)
{
    console.log(
        customer.name + 
        " | " +
        customer.email +
        " | " +
        customer.phone
    );
});

}

// 9. CONNECT ADD PRODUCT BUTTON

if (productButton) {

    productButton.addEventListener("click", function(event)
{
    event.stopPropagation();
    addProduct();
});

}

// 10. CONNECT ADD CUSTOMER BUTTON

if (customerButton) {

    customerButton.addEventListener("click", function(event)
{
    event.stopPropagation();
    addCustomer();
});

}

// 11.  DELETE PRODUCT

function deleteProduct(id) {

    products = products.filter(function(product)
{
    return product.id !== id;
});
        showProducts();
}

// 11.  DELETE CUSTOMER

function deletecustomer(id) {

    customers = customers.filter(function(customer)
{
    return customer.id !== id;
});
        showCustomers();
}

// STAGE 2 LOADED

console.log("BusinessPro stage 2 loaded successfully!");

// ==============================
// STAGE 3 - ORDERS SECTION
// ==============================

(function () {

    const orderFormContainer = document.getElementById("orderFormContainer");
    const orderForm = document.getElementById("orderForm");
    const openOrderFormBtn = document.getElementById("addOrderBtn");
    const quickAddOrderBtn = document.getElementById("quickAddOrderBtn");
    const cancelOrderBtn = document.getElementById("cancelOrderbtn");
    const ordersTableBody = document.getElementById("ordersTableBody");
    const totalOrdersValue = document.getElementById("totalOrdersValue");
    const totalRevenueValue = document.getElementById("totalRevenueValue");

    if (!orderFormContainer || !orderForm || !ordersTableBody) return;

    let orderSequence = 1024;

    // Form starts hidden until "+ Add Order" is clicked
    orderFormContainer.style.display = "none";

    function openOrderForm() {
        orderFormContainer.style.display = "block";
        orderFormContainer.scrollIntoView({ behavior: "smooth", block: "start" });

        const orderDateInput = document.getElementById("orderDate");
        if (orderDateInput && !orderDateInput.value) {
            const today = new Date();
            const iso = today.getFullYear() + "-" +
                        String(today.getMonth() + 1).padStart(2, "0") + "-" +
                        String(today.getDate()).padStart(2, "0");
            orderDateInput.value = iso;
        }
    }

    function closeOrderForm() {
        orderFormContainer.style.display = "none";
        orderForm.reset();
    }

    if (openOrderFormBtn) {
        openOrderFormBtn.addEventListener("click", function () {
            openOrderForm();
        });
    }

    if (quickAddOrderBtn) {
        quickAddOrderBtn.addEventListener("click", function (event) {
            event.stopPropagation();

            const ordersNavLink = document.querySelector('.sidebar nav a[data-section="orders"]');
            if (ordersNavLink) {
                ordersNavLink.click();
            }

            const ordersSection = document.getElementById("orders");
            if (ordersSection) {
                ordersSection.scrollIntoView({ behavior: "smooth" });
            }
            openOrderForm();
        });
    }

    if (cancelOrderBtn) {
        cancelOrderBtn.addEventListener("click", function () {
            closeOrderForm();
        });
    }

    orderForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const customer = document.getElementById("orderCustomer").value.trim();
        const product = document.getElementById("orderProduct").value.trim();
        const quantity = parseInt(document.getElementById("orderQuantity").value, 10);
        const price = parseFloat(document.getElementById("orderPrice").value);
        const statusSelect = document.getElementById("orderStatus");
        const statusText = statusSelect.options[statusSelect.selectedIndex].text;

        if (
            customer === "" ||
            product === "" ||
            !quantity || quantity < 1 ||
            isNaN(price) || price < 0
        ) {
            alert("Please fill all fields correctly.");
            return;
        }

        const total = quantity * price;

        orderSequence++;
        const orderId = "#ORD-" + orderSequence;

        const orderDateInput = document.getElementById("orderDate");
        let dateString;
        if (orderDateInput && orderDateInput.value) {
            const [year, month, day] = orderDateInput.value.split("-");
            dateString = day + "/" + month + "/" + year;
        } else {
            const today = new Date();
            dateString = today.toLocaleDateString("en-GB");
        }

        const statusClass = statusText.toLowerCase();

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${orderId}</td>
            <td>${customer}</td>
            <td>${product}</td>
            <td>${quantity}</td>
            <td>${price.toLocaleString()}</td>
            <td>${total.toLocaleString()}</td>
            <td><span class="status ${statusClass}">${statusText}</span></td>
            <td>${dateString}</td>
        `;

        ordersTableBody.appendChild(newRow);

        // Update "Total Orders" stat card
        if (totalOrdersValue) {
            const currentOrders = parseInt(totalOrdersValue.textContent.replace(/,/g, ""), 10) || 0;
            totalOrdersValue.textContent = (currentOrders + 1).toLocaleString("en-US");
        }

        // Update "Total Revenue" stat card
        if (totalRevenueValue) {
            const currentRevenue = parseFloat(totalRevenueValue.textContent.replace(/[$,]/g, "")) || 0;
            totalRevenueValue.textContent = "$" + (currentRevenue + total).toLocaleString("en-US");
        }

        closeOrderForm();
    });

})();

console.log("BusinessPro Orders section loaded successfully!");

// ==============================
// STAGE 4 - SIDEBAR NAVIGATION
// ==============================

(function () {

    const navLinks = document.querySelectorAll(".sidebar nav a[data-section]");
    const sections = document.querySelectorAll(".content > .section");

    if (!navLinks.length || !sections.length) return;

    function showSection(targetId) {
        sections.forEach(function (section) {
            if (section.id === targetId) {
                section.classList.add("active");
            } else {
                section.classList.remove("active");
            }
        });
    }

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault();

            navLinks.forEach(function (l) {
                l.classList.remove("active");
            });
            link.classList.add("active");

            const targetId = link.getAttribute("data-section");
            showSection(targetId);
        });
    });

})();

console.log("BusinessPro sidebar navigation loaded successfully!");
