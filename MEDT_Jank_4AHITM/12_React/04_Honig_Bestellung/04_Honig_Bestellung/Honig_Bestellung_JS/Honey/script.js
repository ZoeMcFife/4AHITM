function SaveForm()
{
    let beeHoneyJars = document.getElementById("bee-amount").value;
    let spiderHoneyJars = document.getElementById("spider-amount").value;
    let buchiHoneyJars = document.getElementById("buchi-amount").value;
    let alienHoneyJars = document.getElementById("alien-amount").value;

    window.localStorage.setItem("bee", beeHoneyJars);
    window.localStorage.setItem("spider", spiderHoneyJars);
    window.localStorage.setItem("buchi", buchiHoneyJars);
    window.localStorage.setItem("alien", alienHoneyJars);

    ShowHoneySummary();
}

function ShowHoneySummary()
{
    let honeyContent = document.getElementById("Content");

    honeyContent.replaceChildren();

    let intro = document.createElement("p");
    intro.innerHTML = "You have selected following Honeys:";
    honeyContent.appendChild(intro);

    let beeHoneyJars = window.localStorage.getItem("bee");
    let spiderHoneyJars = window.localStorage.getItem("spider");
    let buchiHoneyJars = window.localStorage.getItem("buchi");
    let alienHoneyJars = window.localStorage.getItem("alien");

    if (beeHoneyJars)
    {
        let bee = document.createElement("p");
        bee.innerHTML = "Bee Honey: " + beeHoneyJars + " Jars";
        honeyContent.appendChild(bee);
    }

    if (spiderHoneyJars)
    {
        let spider = document.createElement("p");
        spider.innerHTML = "Spider Honey: " + spiderHoneyJars + " Jars";
        honeyContent.appendChild(spider);
    }

    if (buchiHoneyJars)
    {
        let buchi = document.createElement("p");
        buchi.innerHTML = "Buchi Honey: " + buchiHoneyJars + " Jars";
        honeyContent.appendChild(buchi);
    }

    if (alienHoneyJars)
    {
        let alien = document.createElement("p");
        alien.innerHTML = "Alien Honey: " + alienHoneyJars + " Jars";
        honeyContent.appendChild(alien);
    }

    let continueButton = document.createElement("button");

    continueButton.setAttribute("type", "button");
    continueButton.setAttribute("onclick", "ContinueToPersonalInfo()");
    continueButton.textContent = "Continue with Order";

    honeyContent.appendChild(continueButton)
}

function ContinueToPersonalInfo()
{
    let contentElement = document.getElementById("Content");

    contentElement.innerHTML = `
        <p> Please give your Contact Information </p>
        <label>Name: <input id="name" type="text" required></label>
        <label>Lastname: <input id="lastname" type="text" required></label>
        <label>Address: <input id="address" type="text" required></label>
        <label>E-Mail: <input id="email" type="text" required></label>
        <button type="button" onclick="SendOrder()">Send!</button>
    `
}

function SendOrder()
{
    let name = document.getElementById("name").value;
    let lastname = document.getElementById("lastname").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;

    window.localStorage.setItem("contactName", name);
    window.localStorage.setItem("contactLastname", lastname);
    window.localStorage.setItem("contactAddress", address);
    window.localStorage.setItem("contactEmail", email);

    let honeyContent = document.getElementById("Content");

    honeyContent.replaceChildren();

    let intro = document.createElement("p");
    intro.innerHTML = "Order Summary";
    honeyContent.appendChild(intro);

    let beeHoneyJars = window.localStorage.getItem("bee");
    let spiderHoneyJars = window.localStorage.getItem("spider");
    let buchiHoneyJars = window.localStorage.getItem("buchi");
    let alienHoneyJars = window.localStorage.getItem("alien");

    if (beeHoneyJars)
    {
        let bee = document.createElement("p");
        bee.innerHTML = "Bee Honey: " + beeHoneyJars + " Jars";
        honeyContent.appendChild(bee);
    }

    if (spiderHoneyJars)
    {
        let spider = document.createElement("p");
        spider.innerHTML = "Spider Honey: " + spiderHoneyJars + " Jars";
        honeyContent.appendChild(spider);
    }

    if (buchiHoneyJars)
    {
        let buchi = document.createElement("p");
        buchi.innerHTML = "Buchi Honey: " + buchiHoneyJars + " Jars";
        honeyContent.appendChild(buchi);
    }

    if (alienHoneyJars)
    {
        let alien = document.createElement("p");
        alien.innerHTML = "Alien Honey: " + alienHoneyJars + " Jars";
        honeyContent.appendChild(alien);
    }

    if (name)
    {
        let nameInfo = document.createElement("p");
        nameInfo.textContent = "Name: " + name;
        honeyContent.appendChild(nameInfo);
    }

    if (lastname)
    {
        let lastnameInfo = document.createElement("p");
        lastnameInfo.textContent = "Lastname: " + lastname;
        honeyContent.appendChild(lastnameInfo);
    }

    if (address)
    {
        let addressInfo = document.createElement("p");
        addressInfo.textContent = "Address: " + address;
        honeyContent.appendChild(addressInfo);
    }

    if (email)
    {
        let emailInfo = document.createElement("p");
        emailInfo.textContent = "Email: " + email;
        honeyContent.appendChild(emailInfo);
    }

    let continueButton = document.createElement("button");

    continueButton.setAttribute("type", "button");
    continueButton.setAttribute("onclick", "Reset()");
    continueButton.textContent = "Order again!";

    honeyContent.appendChild(continueButton)
}

function Reset()
{
    window.localStorage.clear();

    // Get the content element
    let contentElement = document.getElementById("Content");

    // Set inner HTML to the provided HTML
    contentElement.innerHTML = `
        <p>Please choose which 500g Jars of Honey you want to buy.</p>
        <table>
            <thead>
                <tr>
                    <th>Honey Type</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Bee Honey</td>
                    <td><label>
                        <input id="bee-amount" min="0" type="number">
                        Jars
                    </label>
                    </td>
                </tr>
                <tr>
                    <td>Spider Honey</td>
                    <td><label>
                        <input id="spider-amount" min="0" type="number">
                        Jars
                    </label>
                    </td>
                </tr>
                <tr>
                    <td>Buchi Honey</td>
                    <td><label>
                        <input id="buchi-amount" min="0" type="number">
                        Jars
                    </label>
                    </td>
                </tr>
                <tr>
                    <td>Alien Honey</td>
                    <td><label>
                        <input id="alien-amount" min="0" type="number">
                        Jars
                    </label>
                    </td>
                </tr>
            </tbody>
        </table>

        <button type="button" onclick="SaveForm()">Send</button>
    `;
}
