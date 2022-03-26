const generateManager = function (manager) {
    return `
            <div class="col s12 m6 l4">
                    <div class="card blue-grey darken-2">
                        <div class="card-content white-text">
                            <span class="card-title">${manager.name}</span>
                            <h4>Manager</h4><i class="material-icons">business_center</i>
                        </div>
                        <div class="card-body">
                            <p class="id">ID: ${manager.id}</p>
                            <p class="email">Email: <a
                                    href="mailto:${manager.email}">${manager.email}</a>
                            </p>
                            <p class="office">Office Number: ${manager.officeNumber}</p>
                        </div>
                    </div>
                </div>
    `;
}

const generateEngineer = function (engineer) {
    return `
<div class="col s12 m6 l4">
                    <div class="card blue-grey darken-2">
                        <div class="card-content white-text">
                            <span class="card-title">${engineer.name}</span>
                            <h4>Engineer</h4><i class="material-icons">laptop_mac</i>
                        </div>
                        <div class="card-body">
                            <p class="id">ID: ${engineer.id}</p>
                            <p class="email">Email: <a
                                    href="mailto:${engineer.email}">${engineer.email}</a></p>
                            <p class="github">GitHub: <a
                                    href="https://github.com/${engineer.github}">${engineer.github}</a>
                            </p>
                        </div>
                    </div>
                </div>
    `;
}


const generateIntern = function (intern) {
    return `
<div class="col s12 m6 l4">
                    <div class="card blue-grey darken-2">
                        <div class="card-content white-text">
                            <span class="card-title">${intern.name}</span>
                            <h4>Intern</h4><i class="material-icons">school</i>
                        </div>
                        <div class="card-body">
                            <p class="id">ID: ${intern.id}</p>
                            <p class="email">Email: <a
                                    href="mailto:${intern.email}">${intern.email}</a>
                            </p>
                            <p class="school">School: ${intern.school}</a>
                            </p>
                        </div>
                    </div>
                </div>
    `;
}

generateHTML = (data) => {

    pageArray = [];

    for (let i = 0; i < DataTransfer.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }

    }


    const employeeCards = pageArray.join('')

    const generateTeam = generateTeamPage(employeeCards);
    return generateTeam;

}

const generateTeamPage = function (employeeCards) {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <header>
        <nav>
            <div class="nav-wrapper">
                <div class="brand-logo center">Team Profile</a>
                </div>
        </nav>
    </header>
    <main>
        <div class="container">
            <div class="row">
            ${employeeCards}
            </div>
            </div>
        </main>
    
        <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
        <script src="https://code.jquery.com/ui/1.13.1/jquery-ui.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
            integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
            crossorigin="anonymous"></script>
    </body>
    
    </html>
    `;
}

module.exports = generateHTML;