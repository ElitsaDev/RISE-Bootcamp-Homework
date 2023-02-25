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
            <h1>Home page</h1>
        </section>
    </main>
</body>
<script>
        const ws = new WebSocket("ws://localhost:8080");

        ws.addEventListener('open', () => {
            console.log("We are connected...")
        });
</script>
</html>`;
