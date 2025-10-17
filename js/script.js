

var courses = [
    { id: 1, name: "Java" },
    { id: 2, name: "Python" },
    { id: 3, name: "C#" },
];

    var turnos = [
    { id: 1, name: "Manhã" },
    { id: 2, name: "Tarde" },
    { id: 3, name: "Noite" },
];

var alunos = [];

function save() {

    /* Colocando os valores em um vetor */
    var aluno =
    {
        id: alunos.length + 1,
        name: document.getElementById("inputName").value,
        email: document.getElementById("inputEmail").value,
        phone: document.getElementById("inputPhone").value,
        course: document.getElementById("selectCourse").value,
        turno: getRadioValue(),
    }


    addNewRow(aluno);

    alunos.push(aluno);

    document.getElementById("formAluno").reset();

    console.log(aluno);
};

function getRadioValue() {
    radios = document.getElementsByName("gridRadios");

    for (let radio of radios)
        if (radio.checked)
            return radio.value;
};

function addNewRow(aluno) {
    var table = document.getElementById("tableAlunos");

    var newRow = table.insertRow();

    // insert id aluno
    var idNode = document.createTextNode(aluno.id);
    newRow.insertCell().appendChild(idNode);

    // insert name aluno
    var nameNode = document.createTextNode(aluno.name);
    newRow.insertCell().appendChild(nameNode);

    // insert email aluno
    var emailNode = document.createTextNode(aluno.email);
    newRow.insertCell().appendChild(emailNode);

    // insert phone aluno
    var phoneNode = document.createTextNode(aluno.phone);
    newRow.insertCell().appendChild(phoneNode);

    // insert course aluno 
    for (let course of courses) {
        if (course.id == aluno.course) {
            var courseNode = document.createTextNode(course.name);
            break;
        }
    }

    newRow.insertCell().appendChild(courseNode);

    // insert shift aluno 
    for (let turno of turnos)
        if (turno.id == aluno.turno) {
            var turnoNode = document.createTextNode(turno.name);
            break;
        }

    newRow.insertCell().appendChild(turnoNode);
}
