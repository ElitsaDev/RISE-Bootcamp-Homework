export default `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel='shortcut icon' type='image/x-icon' href='/images/favicon.png' />
    <link rel="stylesheet" href="/css/style.css">
    <title>Drons</title>
</head>
<body>
    <header>
    <nav>
        <ul class="navigation">
            <li><a href="/">Home Page</a></li>
            <li><a href="/orders/add">Add Order</a></li>
        </ul>
    </nav>
    </header>

<main class="content">
    <section class="title" >
        <h1>Add order</h1>
    </section>
    <section id="create-container">
        <div class="create-container-info">
            <h1>Create Order</h1>
            <form method="POST">
                <label>Customer Id:</label>
                <input type="text" id="name" name="customerId" placeholder="Customer Id">
                <label>Products:</label>
                <select id="product" name="name">
                    <option value="tomatoes">Tomatoes</option>
                    <option value="cucumber">Cucumber</option>
                    <option value="cheese">Cheese</option>
                    <option value="milk">Milk</option>
                    <option value="ham">Ham</option>
                    <option value="eggs">Eggs</option>
                    <option value="bananas">Bananas</option>
                    <option value="carrots">Carrots</option>
                    <option value="bread">Bread</option>
                    <option value="onion">Onion</option>
                </select>
                <input type="submit" id="btn" value="Add" />
            </form>
        </div>
    </section>
</main>
</body>
</html>`;
